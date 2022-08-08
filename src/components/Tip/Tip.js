import React from "react";

import "./style.css";


class Tip extends React.Component {
    state = {
        amount: "",
        procent: ""
    };

    handleAmount = (event) => {
        const keyAmount = event.target.name;
        this.setState = { [keyAmount]: event.target.value }
    }

    render() {
        return (
            <form className="form">
                 <h3>Set your tip</h3>
                    <label htmlFor="tip"></label>Bill
                    <input type="number" placeholder="net amount" name="amount" onChange={this.handleAmount}></input>
                    <select className="form-select" name="amounts">
                        <option name="procent" value="5%">5%</option>
                        <option name="procent" value="10%">10%</option>
                        <option name="procent" value="15%">15%</option>
                        <option name="procent" value="20%">20%</option>
                    </select>
             <button className="form-button-submit" type="submit">Count your tip</button>
             </form>
        )
    }
}

// function Tip() {

//     return (
//         <form className="form">
//             <h3>Set your tip</h3>
//             <label htmlFor="tip"></label>Bill
//             <input type="number" placeholder="net amount" name="tip"></input>
//             <select className="form-select" name="amounts">
//                 <option value="5%">5%</option>
//                 <option value="10%">10%</option>
//                 <option value="15%">15%</option>
//                 <option value="20%">20%</option>
//             </select>
//             <button className="form-button-submit" type="submit">Count your tip</button>
//         </form>
//     )
// };

export default Tip;