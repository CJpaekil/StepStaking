const ApproveStake = () => {
    return (
        <div className="wallet-connect">
            <div className="container">
                <div className="wallet-bg">
                    <div className="row" style={{ width: "100%" }}>
                        <div className="claim-approve">
                            <div className="claim-backtext" style={{ color: "white" }}>How much do you want to stake</div>
                            <div className="d-flex">
                                <div className="numbertext">1.3828&nbsp;</div>
                                <div className="fitfitext opsvoty-fitfi">FITFI</div>
                            </div>
                            <div className="maxtext">Max: 0 fitfi</div>
                        </div>
                        <div className="claim-approve" style={{ position: "relative" }}>
                            <div className="withrawCombine">
                                <div className="d-flex">
                                    <div className="claim-backtext" style={{ color: "#FFB449", borderBottom: "1px solid #FFB449" }}>
                                        Withdraw
                                    </div>
                                    <div className="claim-backtext" style={{ color: "#FFB449" }}>
                                        &nbsp;/&nbsp;
                                    </div>
                                    <div className="claim-backtext" style={{ color: "#FFB449", borderBottom: "1px solid #FFB449" }}>
                                        How It Works?
                                    </div>
                                </div>
                            </div>
                            <div style={{ position: "absolute", bottom: "0", right: "0" }}>
                                <div className="d-flex">
                                    <div className="maxtext">Staked by You: 0&nbsp;<span style={{ opacity: "1" }}>FItFI</span></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="claim-approve">
                            <button className="btn-approve">
                                <div className="d-flex"><img src="/assets/images/circlecheck.png" style={{ marginRight: "10px" }} width="25" /><div className="claim-backtext">APPROVE</div></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproveStake;