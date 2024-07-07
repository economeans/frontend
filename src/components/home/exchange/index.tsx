import axios from 'axios';
import { useEffect, useState } from 'react';

interface ResExchangeRate {
  bkpr: string;
  cur_nm: string;
  cur_unit: string;
  deal_bas_r: string;
  kftc_bkpr: string;
  kftc_deal_bas_r: string;
  result: number;
  ten_dd_efee_r: string;
  ttb: string;
  tts: string;
  yy_efee_r: string;
}

interface ExchangeRate {
  cur_nm: string;
  cur_unit: string;
  ttb: string;
  tts: string;
  last_ttb: string;
  last_tts: string;
  order: number;
}

export default function index() {
  const [exchangeList, setExchangeList] = useState<ExchangeRate[]>([]);
  const exchageUnits = ['USD', 'JPY', 'EUR', 'CNH'];
  async function getExchangeData() {
    function getCalcDay() {
      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const dayOfWeek = today.getDay();
      if (dayOfWeek === 6) {
        today.setDate(today.getDate() - 1);
        yesterday.setDate(yesterday.getDate() - 1);
      } else if (dayOfWeek === 0) {
        today.setDate(today.getDate() - 2);
        yesterday.setDate(yesterday.getDate() - 2);
      }
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const yyear = yesterday.getFullYear();
      const ymonth = String(yesterday.getMonth() + 1).padStart(2, '0');
      const yday = String(yesterday.getDate()).padStart(2, '0');
      return {
        today: `${year}${month}${day}`,
        yesterday: `${yyear}${ymonth}${yday}`,
      };
    }
    try {
      const { today, yesterday } = getCalcDay();
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
