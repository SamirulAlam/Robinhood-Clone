import React from 'react';
import "./StatRow.css";
import StockSvg from "./stock.svg"

function StatRow(props) {

    const percentage = ((props.price-props.openPrice)/props.openPrice) * 100;
    

    return (
        <div className="statRow">
            <div className="statRow__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares + " shares")
                    }</p>
            </div>
            <div className="statRow__chart">
                <img src={StockSvg} height={16} alt=""/>
            </div>
            <div className="statRow__numbers">
                <p className="statRow__price">{props.price}</p>
                <p className="statRow__percentage">+{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StatRow
