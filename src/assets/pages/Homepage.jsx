import React from 'react'
import '../styles/home.css'
import Header from '../components/Header'
import '../styles/responsiveness.css'
import Chart from '../components/Chart'
import '../styles/header.css'

export default function Homepage() {
    return (
        <div>
            <Header />
            <div className='containers'>
                <div className='containers-1'>
                    <div className='body-1'>
                        <h2>Start Your Crypto Journey with us.....</h2>
                        <h3>Discover the new entry of currency</h3>
                        <div className='text'>
                            <p>
                                Welcome to the exciting world of crypto! With its innovative technology and potential for financial growth, it's no wonder that more and more people are getting involved in this exciting industry. Whether you're a seasoned crypto trader or just getting started, we hope you'll find our platform to be a valuable resource for all your crypto needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='containers-2'>
                    <div className='body-2'>
                        <div className='chose'>WHY CHOSE US</div>
                        <div className='body-2i'>
                            <div className='body-2a'>
                                <h3>Secure storage</h3>
                                <p>We store the vast majority of the digital assets in secure offline storage.</p>
                            </div>
                            <div className='body-2a'>
                                <h3>Protected assets</h3>
                                <p>Our risk management measures are designed to protect your assets.</p>
                            </div>
                            <div className='body-2a'>
                                <h3>Industry best practices</h3>
                                <p>We supports a variety of the most popular digital currencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Chart/>
            </div>
        </div>
    )
}
