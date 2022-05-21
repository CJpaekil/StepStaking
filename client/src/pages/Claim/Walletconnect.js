const Walletconnect = () => {
    return (
        <div className="wallet-connect">
            <div className="wallet-bg">
                <div className="row">
                    <div className="walletconnection-left">
                        <div className="d-flex">
                            <img className="signal" src="/assets/images/signal.png" />
                            <div className="claim-rewardopacity" style={{ color: "white" }}>connect your wallet to continue</div>
                        </div>
                    </div>
                    <div className="claim-approve">
                        <button className="btn-approve">
                            <div className="d-flex"><img src="/assets/images/wallet.png" style={{ marginRight: "10px" }} width="25" /><div className="claim-backtext">CONNECT WALLET</div></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walletconnect;