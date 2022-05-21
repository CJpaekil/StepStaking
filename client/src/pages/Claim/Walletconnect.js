
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
const Walletconnect = () => {

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

    // const WalletConnect = new WalletConnectConnector({
    //     rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    //     bridge: "https://bridge.walletconnect.org",
    //     qrcode: true,
    // });

    return (
        <div className="wallet-connect">
            <div className="container">
                <div className="wallet-bg">
                    <div className="row">
                        <div className="walletconnection-left">
                            <div className="d-flex">
                                <div className="d-flex align-items-center"><img className="signal" src="/assets/images/signal.png" /></div>
                                <div className="claim-rewardopacity" style={{ color: "white", opacity: "1" }}>connect your wallet to continue</div>
                            </div>
                        </div>
                        <div className="claim-approve">
                            <button className="btn-approve">
                                <div className="d-flex"><img src="/assets/images/wallet.png" style={{ marginRight: "10px" }} width="25" /><div className="claim-backtext" onClick={ConnectWallet}>CONNECT WALLET</div></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walletconnect;