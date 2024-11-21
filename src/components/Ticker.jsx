import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Ticker = () => {
    const [tickers, setTickers] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://quadb-backend-63um.onrender.com/api/v1/get-ticker");
                console.log("API Response:", response.data); 
                const data = response.data.slice(0, 10); 
                setTickers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <section>
                <div className="main_container">
                    <h2>Best Price to Sell</h2>
                    <div className="inner_div">
                        <div className="inner_list">
                            <h2>0.1 %</h2>
                            <h5>5 Min</h5>
                        </div>
                        <div className="inner_list">
                            <h2>0.96 %</h2>
                            <h5>1 Hour</h5>
                        </div>
                        <div className="inner_list_head">
                            <h1>₹ 26,56,110</h1>
                            <h5>Average BTC/INR net Price including commission</h5>
                        </div>
                        <div className="inner_list">
                            <h2>2.73 %</h2>
                            <h5>1 Day</h5>
                        </div>
                        <div className="inner_list">
                            <h2>7.51 %</h2>
                            <h5>7 Days</h5>
                        </div>
                    </div>
                    <div className="table_container">
                        {tickers.length > 0 ? ( 
                            <table className="custom-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Last Price</th>
                                        <th>Buy/ Sell Price </th>
                                        <th>Volume</th>
                                        <th>Base Unit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickers.map((ticker, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{ticker.name}</td>
                                            <td>₹ {ticker.last}</td>
                                            <td>₹ {ticker.buy}/ ₹ {ticker.sell}</td>
                                            <td>{ticker.volume}</td>
                                            <td>{ticker.base_unit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Loading data...</p> 
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Ticker;
