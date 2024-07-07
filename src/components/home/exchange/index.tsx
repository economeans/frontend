import { Days } from '@/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function index() {
  const [exchangeList, setExchangeList] = useState<ExchangeRate[]>([]);
  const exchageUnits = ['USD', 'JPY', 'EUR', 'CNH'];

  async function getExchangeData() {
    try {
      const { today, yesterday } = Days.getWeekDays();
      const { data } = await axios.get('/koreaexim', {
        params: {
          authkey: process.env.KOREA_EXIM_API_KEY,
          searchdate: today,
          data: 'AP01',
        },
      });
      const { data: lastData } = await axios.get('/koreaexim', {
        params: {
          authkey: process.env.KOREA_EXIM_API_KEY,
          searchdate: yesterday,
          data: 'AP01',
        },
      });
      const filterdList = data.filter((item: ResExchangeRate) => exchageUnits.includes(item.cur_unit.slice(0, 3)));
      const covertedList = filterdList.map((item: ResExchangeRate) => {
        const cur_unit = item.cur_unit.slice(0, 3);
        const last = lastData.filter((item: ResExchangeRate) => item.cur_unit.slice(0, 3) === cur_unit)[0];
        return {
          cur_nm: item.cur_nm,
          cur_unit,
          ttb: item.ttb,
          tts: item.tts,
          last_ttb: last.ttb,
          last_tts: last.tts,
          order: exchageUnits.indexOf(cur_unit),
        };
      });
      setExchangeList(covertedList.sort((a: ExchangeRate, b: ExchangeRate) => a.order - b.order));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getExchangeData();
  }, []);

  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-10">
      {exchangeList.map((item) => (
        <div className="text- w-5/6 rounded border border-red-100 p-4" key={item.cur_unit}>
          <div className="mb-4 flex items-center gap-4">
            <img
              className="w-14 rounded-full border border-gray-300"
              src={require(`@/assets/flags/${item.cur_unit}.svg`)}
              alt={item.cur_unit}
            />{' '}
            <h1 className="text-lg font-bold">
              {item.cur_nm}({item.cur_unit})
            </h1>
          </div>
          <h3>
            받으실 때:&nbsp;
            <strong
              className={
                item.ttb > item.last_ttb ? 'text-red-500' : '' + item.ttb < item.last_ttb ? 'text-blue-500' : ''
              }
            >
              {item.ttb}
              <span className="text-sm font-normal text-black"> ({item.last_ttb})</span>
            </strong>
          </h3>
          <h3>
            보내실 때:&nbsp;
            <strong
              className={
                item.tts > item.last_tts ? 'text-red-500' : '' + item.tts < item.last_tts ? 'text-blue-500' : ''
              }
            >
              {item.tts}
              <span className="text-sm font-normal text-black"> ({item.last_tts})</span>
            </strong>
          </h3>
        </div>
      ))}
    </div>
  );
}
