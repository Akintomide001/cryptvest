import React from 'react'
import Sidebar from '../components/Sidebar'
import { Icon } from '@iconify/react'
import btcIcon from '@iconify/icons-cryptocurrency/btc';
import { useState } from 'react';
import Chart from '../components/Chart';
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/dashboard.css'
import Table from '../components/Table';
import '../styles/responsiveness.css'
import MobileDrop from '../components/MobileDrop';
import Analytics from '../components/Analytics';
import Profile from '../components/Profile';
import Editprofile from '../components/Editprofile';


export default function Dashboard() {
  const [currentRoute, setCurrentRoute] = useState(1);
  return (
    <div>
       <div className="mobile-con">
                <MobileDrop />
            </div>
      <div className="dashboard">
                <div className="dashboard-1">
                    <Sidebar setCurrentRoute={setCurrentRoute} currentRoute={currentRoute} />
                </div>
                <div className="dashboard-2">
                    {currentRoute === 1 && <div className="container">
                        <div className="dash">Dashboard</div>
                        <div className="container-1">
                            <div className="container-1a">
                                <div className="container-ii" id="bit">
                                    <h3>Connected Account :</h3>
                                    <div className="connected">
                                        < div className="connected-1">

                                            <Icon icon={btcIcon} className="btc" />
                                        </div>
                                        <div className="btc-1">
                                            Bitcoin
                                        </div>
                                    </div>
                                </div>
                                <div className="container-ii" id="balance">
                                    <h3>Account balance :</h3>
                                    <h2>₦70,000</h2>
                                </div>
                                <div className="container-ii">
                                    <h3>Wallet Balance :</h3>
                                    <h2>₦700,000</h2>
                                </div>
                            </div>
                        </div>
                        <div className="vase">
                            <Chart />
                        </ div>
                        {/*  */}
                       
                    </div>}
                    {currentRoute === 2 && <div><Table /></div>}
                    {currentRoute === 3 && <div><Analytics /></div>}
                    {currentRoute === 4 && <div><Profile /></div>}
                    {currentRoute === 5 && <div><Editprofile /></div>}
                </div>

            </div>

    </div>
  )
}
