import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { formatEok } from '@/lib/format'

// 브랜드 + 보조 팔레트
const COLORS = [
  '#4f46e5', // brand
  '#7c6cf6', // brand-2
  '#1565f5', // Blue
  '#009a96', // Teal
  '#2e9e3f', // Green
  '#f5a300', // Yellow
  '#7a3ff2' // Purple
]

const tooltipStyle = {
  border: '1px solid #e7e9ee',
  borderRadius: 12,
  background: '#fff',
  boxShadow: '0 10px 28px rgba(16,24,40,0.12)',
  fontSize: 12,
  padding: '8px 12px'
}

export default function RegionPieChart({ data }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={52}
          outerRadius={100}
          paddingAngle={2}
          stroke="#fff"
          strokeWidth={2}>
          {data.map((entry, i) => (
            <Cell
              key={entry.name}
              fill={COLORS[i % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={value => formatEok(Number(value))}
          contentStyle={tooltipStyle}
          itemStyle={{ color: '#3f444b' }}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12 }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
