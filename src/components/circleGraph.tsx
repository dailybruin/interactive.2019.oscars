import React from 'react'
import { css } from 'react-emotion'

import { Pie } from 'react-chartjs-2'

const data = {
  labels: ['Black Panther', 'Green Book', 'Roma'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#C88D48', '#F4CD6A', '#F29A5A'],
      //   hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

export class SimplePieChart extends React.Component {
  render() {
    return (
      <div>
        <h2
          className={css`
            color: #f4cd6a;
            font-family: Lato;
            font-style: normal;
            font-weight: 300;
            text-align: center;
            font-size: 66px;
          `}
        >
          AND THE WINNER IS...
        </h2>
        <Pie
          data={data}
          width={650}
          height={400}
          options={{ maintAspectRatio: false }}
        />
      </div>
    )
  }
}
