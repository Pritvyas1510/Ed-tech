import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
   
    pv: 4,
    amt: 20,
  },
  {
    name: 'Tuesday',
  
    pv: 7,
    amt: 17,
  },
  {
    name: 'Wednesday',

    pv: 8,
    amt: 16,
  },
  {
    name: 'Thursday',
   
    pv: 6,
    amt: 18,
  },
  {
    name: 'Friday',
    pv: 8,
    amt: 16,
  },
  {
    name: 'Saturday',
 
    pv: 10,
    amt: 14,
  },
  {
    name: 'Sunday',
    pv: 24,
    amt: 8,
  },
];

export default class Barchart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue"  />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
