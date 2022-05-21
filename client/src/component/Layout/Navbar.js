import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
// import { utils } from 'ethers'
// import Web3 from 'web3';
import { ethers } from "ethers";

const Navbar = () => {
    const [pageExchange, setPageExchange] = useState("main");
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });

    const ConnectWallet = async () => {
        if (window.ethereum) {

            // res[0] for fetching a first wallet

            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));

        } else {
            alert("install metamask extension!!");
        }
    }


    const accountChangeHandler = (account) => {
        // Setting an address data
        window.location.href = "/Approve";
        setdata({
            address: account,
        });

        // Setting a balance
        getbalance(account);
    };

    const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                // Setting balance
                setdata({
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };

    useEffect(() => {
        if (window.location.href.includes("/claim")) {
            setPageExchange("claim");
        } else {
            setPageExchange("main");
        }
    }, [window.location.href])

    return (
        <>
            {
                pageExchange === "main" ? (
                    <div className="main-navbar">
                        <div className="container d-flex">
                            <div className="col-sm-6 col-6 d-flex justify-content-start align-items-center">
                                <img className="logo" src="/assets/images/Vector.png" />
                            </div>
                            <div className="col-sm-6 col-6 d-flex justify-content-end">
                                <Link to="/claim"><button className="btn-staking">Go to Staking</button></Link>
                            </div>
                        </div>
                    </div>) : (
                    <div className="claim-navbar">
                        <div className="container d-flex">
                            <div className="col-sm-6 col-6 d-flex justify-content-start align-items-center">
                                <img className="logo" src="/assets/images/logo.png" />
                            </div>
                            <div className="col-sm-6 col-6 d-flex justify-content-end">
                                <button className="btn-connectwallet" onClick={ConnectWallet}>CONNECT WALLET</button>
                            </div>
                        </div>
                    </div>)
            }
        </>

    )
}

export default Navbar;