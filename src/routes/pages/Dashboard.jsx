import { useState, useEffect } from 'react'
import axios from 'axios'
import RegionBarChart from '@/components/charts/RegionBarChart'
import RegionPieChart from '@/components/charts/RegionPieChart'

// CRUD
// RESTful API
// Create -> POST
// Read -> GET
// Update -> PUT, PATCH
// Delete -> DELETE

// 14:35
function Panel({ title, value, unit }) {
  // const { title, value, unit } = props
  return (
    <>
      <div className="rounded-md border border-gray-200 bg-white p-4">
        <h3 className="mb-2 text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-bold">
          {value}
          {unit}
        </p>
      </div>
    </>
  )
}

function formatNumber(value) {
  return (value / 10000).toFixed(1)
}
const _panels = [
  { title: '전체 매장', field: 'totalStores', value: '', unit: '곳' },
  { title: '운영 중', field: 'activeStores', value: '', unit: '곳' },
  {
    title: '연 매출 합계',
    field: 'totalSales',
    value: '',
    unit: '억원',
    formatter: formatNumber
  },
  {
    title: '매장 평균',
    field: 'avgSales',
    value: '',
    unit: '억원',
    formatter: formatNumber
  }
]

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null)
  const [panels, setPanels] = useState(_panels)

  useEffect(function () {
    async function fetchDashboardData() {
      const response = await axios({
        url: 'http://localhost:3004/dashboard',
        method: 'GET'
      })
      setDashboardData(response.data)
      setPanels(
        panels.map(function (panel) {
          return {
            ...panel,
            value: panel.formatter
              ? panel.formatter(response.data[panel.field])
              : response.data[panel.field]
          }
        })
      )
    }
    fetchDashboardData()
  }, [])

  return (
    <>
      <h1>Dashboard Page!</h1>
      {dashboardData && (
        <>
          <div className="grid grid-cols-4 gap-5">
            {panels.map(function (panel) {
              return (
                <Panel
                  key={panel.field}
                  title={panel.title}
                  value={panel.value}
                  unit={panel.unit}
                />
              )
            })}
          </div>
          <div className="grid h-[350px] grid-cols-2 gap-5">
            <RegionBarChart data={dashboardData.regionSales} />
            <RegionPieChart data={dashboardData.pieData} />
          </div>
        </>
      )}
    </>
  )
}
