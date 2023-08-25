import React from 'react'
import '../styles/coin.css'

export default function Coin({ name, image, symbol, price, volume, priceChange, marketcap }) {
    // const Coin = ({name, image, price, volume,Symbol}) => {
    return (
        <div>
            <div className='coin-container'>
                <div className='coin-row'>
                    <div className='coin'>
                        <img src={image} alt='cryto' className='etc' />
                        <div className='coin-1'>
                            <h1 className='small'>{name}</h1>
                            <p className='coin-symbol'>{symbol}</p>
                        </div>

                    </div>
                    <div className='coin-data'>
                        <p className='coin-price'>${price}</p>
                        <div className='volume'>
                            <p className='coin-volume'>${volume?.toLocaleString()}</p>
                        </div>
                        {priceChange < 0 ? (
                            <p className='coin-percent red'>{priceChange?.toFixed(2)}%</p>
                        ) : (<p className='coin-percent green'>{priceChange?.toFixed(2)}%</p>)
                        }
                        <p className='coin-marketcap'>
                            Mkt Cap : ${marketcap?.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
