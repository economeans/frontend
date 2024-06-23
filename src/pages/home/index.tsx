import React, { Component, Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
// require('highcharts/highcharts-more')(Highcharts);
import highchartsMore from 'highcharts/highcharts-more';
highchartsMore(Highcharts);

class High extends Component {
  render() {
    const series = [
      {
        name: '경제 후생 지표',
        value: 7.6,
      },
      {
        name: '모기지대출',
        value: 8.4,
      },
      {
        name: '조현빈천재',
        value: 10000,
      },
      {
        name: '바이오인증',
        value: 10.2,
      },
      {
        name: '예약자금이체제도',
        value: 12,
      },
      {
        name: '명목화폐',
        value: 23.4,
      },
      {
        name: '기축통화',
        value: 30.2,
      },
      {
        name: '빅맥지수',
        value: 5334.5,
      },
      {
        name: '공매도 중지',
        value: 566,
      },
      {
        name: '스왑레이트',
        value: 456.3,
      },
    ];
    const maxValue = Math.max(...series.map((item) => item.value));
    const nowTime = moment().format('HH');
    const options = {
      chart: {
        type: 'packedbubble',
        height: '50%',
      },
      title: {
        text: nowTime + '시 주요 경제 표현',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        type: 'category',
      },
      legend: {
        reversed: true,
      },
      plotOptions: {
        packedbubble: {
          minSize: '30%',
          maxSize: '120%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.02,
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            // filter: {
            //   property: 'y',
            //   operator: '>',
            //   value: 250,
            // },
            style: {
              color: '#fff',
              textOutline: 'none',
              fontWeight: 'bold',
              fontSize: '14px',
            },
          },
        },
      },
      series: [
        {
          name: 'ecomeans',
          data: series.map((item) => ({
            name: item.name,
            value: item.value,
            color: item.value === maxValue ? 'red' : 'black',
          })),
        },
      ],
    };
    return (
      <Fragment>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Fragment>
    );
  }
}
export default High;
