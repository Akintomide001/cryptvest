import React from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/dashboard.css'
import Data1 from '../components/Data1'
import MobileDrop from '../components/MobileDrop';


export default function Analytics() {
    return (
        <div>
            <div className="mobile-con">
                <MobileDrop />
            </div>
            <div className="mobile-account">

                <div className="analytics">
                    <div className="analytics-data">
                        Daily transaction :
                    </div>
                    <div className="tab">
                        <table>
                            <thead>
                                <tr className="transaction">
                                    <th>Id</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Transaction type</th>

                                </tr>
                            </thead>
                            <tbody >
                                {
                                    Data1.map((Data1) => {
                                        return (
                                            <tr key={Data1.id} className="body-transact">
                                                <td>{Data1.ids}</td>
                                                <td>{Data1.amount}</td>
                                                <td>{Data1.date}</td>
                                                <td>{Data1.time}</td>
                                                <td>{Data1.transaction_type}</td>
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
