import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Web Development',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Mobile App Development',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Game Development',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Devops Developer',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Data Scientist',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Security Developer',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Database Developer',
    A: 95,
    B: 75,
    fullMark: 150,
  },
];

export default class Famouse extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

  render() {
    return (
      <ResponsiveContainer width="120%" height="130%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
