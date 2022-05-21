import React, { useState, useEffect } from "react";
const Navbar = () => {
    const [pageExchange, setPageExchange] = useState("main1");
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
                                <button className="btn-staking">Go to Staking</button>
                            </div>
                        </div>
                    </div>) : (
                    <div className="claim-navbar">
                        <div className="container d-flex">
                            <div className="col-sm-6 col-6 d-flex justify-content-start align-items-center">
                                <img className="logo" src="/assets/images/logo.png" />
                            </div>
                            <div className="col-sm-6 col-6 d-flex justify-content-end">
                                <button className="btn-connectwallet">CONNECT WALLET</button>
                            </div>
                        </div>
                    </div>)
            }
        </>

    )
}

export default Navbar;