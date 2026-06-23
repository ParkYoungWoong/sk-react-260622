import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { compactWon, formatEok } from '@/lib/format'

const axisTick = {
  fontFamily: "'Hanken Grotesk', sans-serif",
  fontSize: 12,
  fill: '#6b7280'
}
const tooltipStyle = {
  border: '1px solid #e7e9ee',
  borderRadius: 12,
  background: '#fff',
  boxShadow: '0 10px 28px rgba(16,24,40,0.12)',
  fontSize: 12,
  padding: '8px 12px'
}

export default function RegionBarChart({ data }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient
            id="brandBar"
            x1="0"
            y1="0"
            x2="0"
            y2="1">
            <stop
              offset="0%"
              stopColor="#4f46e5"
            />
            <stop
              offset="100%"
              stopColor="#7c6cf6"
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          stroke="#eef1f5"
          vertical={false}
        />
        <XAxis
          dataKey="region"
          tick={axisTick}
          axisLine={{ stroke: '#e7e9ee' }}
          tickLine={false}
        />
        <YAxis
          width={44}
          tick={axisTick}
          axisLine={false}
          tickLine={false}
          tickFormatter={v => compactWon(Number(v))}
        />
        <Tooltip
          formatter={value => formatEok(Number(value))}
          contentStyle={tooltipStyle}
          labelStyle={{ color: '#17181a', fontWeight: 700, marginBottom: 2 }}
          itemStyle={{ color: '#3f444b' }}
          cursor={{ fill: 'rgba(79,70,229,0.05)' }}
        />
        <Bar
          dataKey="total"
          name="매출"
          fill="url(#brandBar)"
          radius={[6, 6, 0, 0]}
          maxBarSize={44}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
