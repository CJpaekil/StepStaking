import { Link } from "react-router-dom";
const Rules = () => {

    return (
        <div className="home-rules">
            <div className="container">
                <div className="home-rules-bg">
                    <div>
                        <div className="home-whitebigtext">Rules</div>
                        <div className="d-flex home-rules-textgap">
                            <div><img src="/assets/images/check.png" style={{ marginRight: "13px" }} width="20" /></div>
                            <div>
                                <div className="home-whitegeneraltext">STAKING HAVE 25% APY WITH SHORT LOCK TIME</div>
                                <div className="home-about-littletext" style={{ color: "white", opacity: "0.5", margin: "1.3% 0" }}>Holders can unstake deposit and claim rewards in any time after lock period. </div>
                            </div>
                        </div>
                        <div className="d-flex" style={{ marginBottom: "2%" }}>
                            <div><img src="/assets/images/check.png" style={{ marginRight: "13px" }} width="20" /></div>
                            <div>
                                <div className="home-whitegeneraltext">User can withdraw FitFi before the lock period</div>
                                <div className="home-about-littletext" style={{ color: "white", opacity: "0.5", margin: "1.3% 0" }}>but he will receive a penalty of 5% and no rewards.</div>
                            </div>
                        </div>
                        <div className="single-line" style={{ marginBottom: "2%" }}>
                            <div className="d-flex">
                                <div><img src="/assets/images/check.png" style={{ marginRight: "13px" }} width="20" /></div>
                                <div className="d-flex"><div className="home-whitegeneraltext" style={{ opacity: "0.5" }}>0.3% fees&nbsp;</div> <span className="home-whitegeneraltext" style={{ opacity: "1" }}>on claiming rewards.&nbsp;</span></div>
                            </div>
                            <div className="d-flex">
                                <Link to="/claim" style={{ textDecoration: "none" }}><div className="home-whitegeneraltext claimlink">Claim</div></Link>
                                <div><img src="/assets/images/rightarrow.png" width="20" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules;