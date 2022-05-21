const Claim = () => {
    return (
        <div className="claim-reward">
            <div className="container">
                <div className="d-flex justify-content-start"><img src="/assets/images/arrow.png" style={{ marginRight: "10px" }} width="25" /><div className="claim-backtext">BACK</div></div>
                <div className="single-line claim-rewardgap">
                    <div className="claim-rewardtext">YOUR REWARDS:&nbsp;</div>
                    <div className="claim-rewardtext" style={{ color: "white" }}>92&nbsp;</div>
                    <div className="claim-rewardopacity d-flex align-items-center fitfi">fITFI</div>
                </div>
                <div className="claim-rewardopacity">+0 PER DAT / +0 PER DAT</div>
            </div>
        </div>
    )
}

export default Claim;