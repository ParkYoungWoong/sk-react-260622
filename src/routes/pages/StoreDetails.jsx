import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SingleMarkerMap from '@/components/maps/SingleMarkerMap'

// http://localhost:5173/stores/123456
export default function StoreDetails() {
  const params = useParams()
  const [store, setStore] = useState(null)

  useEffect(function () {
    async function fetchStore() {
      const response = await axios({
        url: `http://localhost:3004/stores/${params.storeId}`,
        method: 'GET'
      })
      setStore(response.data)
    }
    fetchStore()
  }, [])

  return (
    <div>
      {store && (
        <>
          <div>{store.name}</div>
          <div>{store.region}</div>
          <div>{store.manager}</div>
          <div>{store.address}</div>
          <div>{store.phone}</div>
          <div>{store.openedAt}</div>
          <div>{store.status}</div>
          <div>{store.totalSales}</div>
          <div className="h-[400px] max-w-[600px]">
            <SingleMarkerMap store={store} />
          </div>
        </>
      )}
    </div>
  )
}
