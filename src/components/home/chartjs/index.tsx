import { useEffect, useState } from 'react';
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import type { ChartData } from 'chart.js/dist/types';

ChartJS.register(Tooltip, Legend, LinearScale, PointElement);

export default function Chartjs() {
  const [data, setData] = useState<ChartData<'bubble'>>();
  useEffect(() => {
    setData({
      datasets: [
        {
          label: '한국',
          data: [
            {
              x: 20,
              y: 30,
              r: 15,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: '중국',
          data: [
            {
              x: 30,
              y: 10,
              r: 10,
            },
          ],
          backgroundColor: 'rgb(255, 99, 0)',
        },
      ],
    });
  }, []);

  if (data) {
    return <Bubble data={data} />;
  }

  return <div>Loading...</div>;
}
