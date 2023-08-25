import React from 'react'
import Form from '../components/Form'
import Data from '../components/Data'
import { useState } from 'react'

export default function Table() {
    const [IsVisible, setIsVisible] = useState(false)
    const [data, setData] = useState(Data)

    const handleDelete = (id) => {
        const newData = data.filter((current, index) => index != id);
        setData(newData)
    }
  return (
    <div>
<div className="mobile-account">
                <div className="asset-create">
                    <button onClick={() => setIsVisible(current => !current)} className="visible">{IsVisible ? "Close form" : "Add Account"}</button>
                    {IsVisible && <Form setData={setData} />}

                </div>
                
                <div className="asset">
                    Your Assets
                </div>
                <div className="tab-1">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                {/* <th>Market value</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((current, index) => {
                                return (
                                    <tr key={index}>

                                        <td>{current.name}</td>
                                        {/* <td>{current.market}</td> */}
                                        <td><button onClick={() => handleDelete(index)}>Remove account</button></td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}
