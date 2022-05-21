import { Link } from "react-router-dom";
const Claim = () => {
    return (
        <div className="claim-reward">
            <div className="container">
                <Link to="/" style={{ textDecoration: "none" }}><div className="d-flex justify-content-start"><img src="/assets/images/arrow.png" style={{ marginRight: "10px" }} width="25" /><div className="claim-backtext">BACK</div></div></Link>
                <div className="single-line claim-rewardgap">
                    <div className="claim-rewardtext">YOUR REWARDS:&nbsp;</div>
                    <div className="d-flex">
                        <div className="claim-rewardtext reward-number" style={{ color: "white" }}>92&nbsp;</div>
                        <div className="claim-rewardopacity d-flex align-items-center fitfi">fITFI</div>
                    </div>
                </div>
                <div className="claim-rewardopacity">+0 PER DAT / +0 PER DAT</div>
            </div>
        </div>
    )
}

export default Claim;