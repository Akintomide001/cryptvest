import React from 'react'
import Swal from 'sweetalert2'

export default function Form({ setData }) {
    const coins = [
        {
            coin: "Bitcoin",
            price: "$5000"
        },
        {
            coin: "Wallet connect",
            price: "$6000"
        },
        {
            coin: "Metamask",
            price: "$9000"
        },
        {
            coin: "Ethereum",
            price: "$19000"
        },
        {
            coin: "Binance",
            price: "$19000"
        }
    ]
    // const [marketVal, setMarketVal] = useState(coins[0].price)


    function handleValues(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        // const market = event.target.elements.market.value;
        const newMember = {
            id: "",
            name,
        }
        if (name === "" ) {
            Swal.fire({
                title: "Form's Empty!!!!!",
                text: "Please add account",
                icon: "error",
                // button: "Ok"
            });
        }
        else {
            setData(prevData => [...prevData, newMember])
            Swal.fire({
                title: "Congratulations!!!",
                text: "Account successfully added",
                icon: "success",
                // button: "ok"
            });
        }
    }
  return (
    <div>
        <div className="form-account">
                <form name='name' onSubmit={handleValues} className="account-form">
                    <div className="form-1">
                        <div>
                            <label htmlFor="name">Select account : </label>
                        </div>
                        <div>
                            <select id='name' name='name' onChange={(e) => {
                                // const current = coins.filter((coin) => coin.coin === e.target.value);
                                // setMarketVal(current[0].price)
                            }}>
                                {
                                    coins.map((current, index) => <option key={index} value={current.coin}>{current.coin}</option>)
                                }

                            </select>
                        </div>
                    </div>
                    {/* <div>
                        <div className="value">
                            <label htmlFor="market">Market value : </label>
                        </div>
                        <div>
                            <input type='text' id='market' name='market' disabled value={marketVal} onChange={() => { }} />
                        </div>
                    </div> */}
                    <div className="submit">
                        <button className="form-button">Add Account</button>
                    </div>
                </form>
            </div>
    </div>
  )
}
