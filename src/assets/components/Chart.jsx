import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from '../components/Coin'
import '../styles/coin.css'

export default function Chart() {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data)
                console.log(res.data)
            })
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLocaleLowerCase()));
    return (
        <div>
            <div className='coin-app'>
                <div className='coin-search'>
                    <h1>Cryptocurrency Market Cap</h1>
                    <form>
                        <input type='text' placeholder='search' onChange={handleChange} />
                    </form>
                </div>
                {filteredCoins.map(coin => {
                    return (
                        <Coin key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            marketcap={coin.market_cap}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            volume={coin.total_volume}
                        />
                    )
                })}
            </div>

        </div>
    )
}
