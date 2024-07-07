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
  order: number;
}

export default function index() {
  const [exchangeList, setExchangeList] = useState<ExchangeRate[]>([]);
  const exchageUnits = ['USD', 'JPY', 'EUR', 'CNH'];
  async function getExchangeData() {
    function getCurrentDay() {
      const today = new Date();
      const dayOfWeek = today.getDay();
      if (dayOfWeek === 6) {
        today.setDate(today.getDate() - 1);
      } else if (dayOfWeek === 0) {
        today.setDate(today.getDate() - 2);
      }
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}${month}${day}`;
    }
    try {
      const { data } = await axios.get('/koreaexim', {
        params: {
          authkey: process.env.KOREA_EXIM_API_KEY,
          searchdate: getCurrentDay(),
          data: 'AP01',
        },
      });
      const filterdList = data.filter((item: ResExchangeRate) => exchageUnits.includes(item.cur_unit.slice(0, 3)));
      const covertedList = filterdList.map((item: ResExchangeRate) => {
        const cur_unit = item.cur_unit.slice(0, 3);
        return {
          cur_nm: item.cur_nm,
          cur_unit,
          ttb: item.ttb,
          tts: item.tts,
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
        <div className="w-5/6 rounded border border-red-100 p-4" key={item.cur_unit}>
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
          <h3>받으실 때: {item.ttb}</h3>
          <h3>보내실 때: {item.tts}</h3>
        </div>
      ))}
    </div>
  );
}
