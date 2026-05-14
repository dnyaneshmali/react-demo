import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';

const activityChartOptions: Highcharts.Options = {
  chart: {
    type: 'areaspline',
    backgroundColor: 'transparent',
    style: { fontFamily: 'Inter, sans-serif' },
    height: 300,
  },
  title: { text: '' },
  xAxis: {
    categories: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    labels: { style: { color: '#a0a0b0' } },
    gridLineColor: 'rgba(255, 255, 255, 0.05)'
  },
  yAxis: {
    title: { text: '' },
    labels: { style: { color: '#a0a0b0' } },
    gridLineColor: 'rgba(255, 255, 255, 0.05)'
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.2,
      lineColor: '#00f0ff',
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, 'rgba(0, 240, 255, 0.4)'],
          [1, 'rgba(0, 240, 255, 0)']
        ]
      },
      marker: { enabled: false }
    }
  },
  series: [
    {
      type: 'areaspline',
      name: 'Neural Computations',
      data: [120, 180, 250, 400, 310, 480, 520],
      color: '#00f0ff'
    }
  ],
  legend: { enabled: false },
  credits: { enabled: false },
  tooltip: {
    backgroundColor: 'rgba(20, 20, 30, 0.9)',
    borderColor: '#00f0ff',
    style: { color: '#fff' }
  }
};

export const SystemActivityChart = () => (
  <div className="chart-container">
    <h3>System Activity Throughput</h3>
    <HighchartsReact highcharts={Highcharts} options={activityChartOptions} />
  </div>
);

const statusChartOptions: Highcharts.Options = {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    style: { fontFamily: 'Inter, sans-serif' },
    height: 300,
  },
  title: { text: '' },
  plotOptions: {
    pie: {
      innerSize: '75%',
      borderWidth: 0,
      dataLabels: { enabled: false }
    }
  },
  series: [
    {
      type: 'pie',
      name: 'Agents',
      data: [
        { name: 'Active Processing', y: 65, color: '#00f0ff' },
        { name: 'Deep Learning', y: 25, color: '#8a2be2' },
        { name: 'Standby Mode', y: 10, color: '#333344' }
      ]
    }
  ],
  tooltip: {
    backgroundColor: 'rgba(20, 20, 30, 0.9)',
    borderColor: '#00f0ff',
    style: { color: '#fff' }
  },
  credits: { enabled: false }
};

export const AgentResourceChart = () => (
  <div className="chart-container">
    <h3>Agent Resource Allocation</h3>
    <HighchartsReact highcharts={Highcharts} options={statusChartOptions} />
  </div>
);
