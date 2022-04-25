import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function CoinList() {
  const [ list, setList ] = useState([])

  const fetchData = async () => {
    const { data } = await axios.get("https://api.coinpaprika.com/v1/coins/")
    setList(data.slice(0, 4))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(list);
  }, [list])

  return (
    <div>
      <Navbar />
      <div className='content'>
        <p>Coin List</p>
        <div className='coin_list_container'>
          <p>Coin List</p>
          <table>
            <thead>
              <td>ID</td>
              <td>Name</td>
              <td>Symbol</td>
              <td>rank</td>
              <td>Type</td>
              <td>Active</td>
              <td>Action</td>
            </thead>
            {list.map((coin, i) => (
            <tbody>
              <td>{coin.id}</td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{coin.rank}</td>
              <td>{coin.type}</td>
              <td>{`${coin.is_active}`}</td>
              <td>Delete</td>
            </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}
