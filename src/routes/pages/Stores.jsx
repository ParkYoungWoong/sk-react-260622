import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Stores() {
  const [stores, setStores] = useState([])

  useEffect(function () {
    async function fetchStores() {
      const response = await axios({
        url: 'http://localhost:3004/stores',
        method: 'GET'
      })
      setStores(response.data)
    }
    fetchStores()
  }, [])

  return (
    <>
      <h1>Store List Page!</h1>
      {stores.map(function (store) {
        return (
          <div
            key={store.id}
            className="flex justify-between gap-3 border-b border-gray-400 p-4 hover:bg-gray-200">
            <div>{store.name}</div>
            <div>{store.region}</div>
            <div>{store.manager}</div>
            <div>{store.status}</div>
            <div>{(store.totalSales / 10000).toFixed(1)}억원</div>
          </div>
        )
      })}
    </>
  )
}
