import React, { useEffect, useState } from 'react';
import "./Stats.css";
import axios from "axios";
import StatRow from './StatRow';
import { db } from './firebase';



const BASE_URL ="https://finnhub.io/api/v1/quote"
const TOKEN="bv1uf4v48v6o5ed6h88g"
function Stats() {

    const [stockData,setStockData]=useState([]);
    const [myStocks,setMyStocks]=useState([]);

    const getMyStocks=()=>{
        db.collection("myStocks").onSnapshot(snapshot=>{
           let promises=[];
           let tempData=[];
           snapshot.docs.map((doc)=>{
               promises.push(getStockData(doc.data().ticker).then(res=>{
                   tempData.push({
                       id:doc.id,
                       data:doc.data(),
                       info:res.data
                   })
               }))
           })
            Promise.all(promises).then(()=>{
                setMyStocks(tempData)
            })
        })
    }
    const getStockData = (stock)=>{
        return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`).catch((err)=>{
            console.error("Error",err.message)
        })
    }
    useEffect(()=>{
        let tempStockData =[];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        getMyStocks();
        let promises = [];
        stocksList.map((stock)=>{
            promises.push(getStockData(stock).then((res)=>{
                tempStockData.push({
                    name:stock,
                    ...res.data
                })
            }))
        })
        Promise.all(promises).then(()=>{
            setStockData(tempStockData);
        })

    },[])
    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {myStocks.map((stock)=>(
                            <StatRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                shares={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))}
                    </div>
                </div>
                <div className="stats__header stats__lists">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {stockData.map((stock)=>(
                            <StatRow 
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
