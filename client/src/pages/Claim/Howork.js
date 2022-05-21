import { Link } from "react-router-dom";
const Howork = () => {
    return (
        <>
            <div className="claim-reward">
                <div className="container">
                    <Link to="/Approve" style={{ textDecoration: "none" }}><div className="d-flex justify-content-start"><img src="/assets/images/arrow.png" style={{ marginRight: "10px" }} width="25" /><div className="claim-backtext">BACK</div></div></Link>
                    <div className="single-line claim-rewardgap">
                        <div className="claim-rewardtext">HOW IT WORKS</div>
                    </div>
                </div>
            </div>

            <div className="howorks-text">
                <div className="container">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ipsum eget sapien rutrum auctor. In orci neque, ultricies sed nisi eget, egestas imperdiet nulla. Proin a ligula felis. Nunc eu feugiat arcu, eget tristique tortor. Cras tempus elit velit, ut egestas dui consectetur vel. Phasellus volutpat cursus arcu non imperdiet. Sed nec pulvinar neque. Quisque blandit lobortis ultrices.
                    <br />
                    Phasellus eu porta diam. Ut posuere dolor id turpis tincidunt vestibulum. In id feugiat mi. Quisque nec condimentum nisl, vitae tincidunt sem. Duis sit amet mauris in tortor placerat tristique vel in urna. Proin id ante at nibh bibendum maximus et quis dolor. Duis non erat velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    <br />
                    Aenean massa nunc, porttitor venenatis ullamcorper in, viverra at purus. Suspendisse accumsan molestie arcu, in congue ligula malesuada blandit. In placerat ex sodales lorem rhoncus aliquet. Vivamus aliquam neque et tortor ultrices, eget lobortis nulla sodales. Nunc pretium iaculis faucibus. Sed eget euismod velit. Sed et mi pharetra, pharetra dui sit amet, fringilla erat. Nulla faucibus imperdiet laoreet. Curabitur nisi augue, bibendum nec arcu sit amet, porttitor condimentum odio. Donec congue felis metus, a facilisis nunc malesuada sed. Vivamus quis enim quam. Maecenas id condimentum sapien, sit amet condimentum odio.
                    <br />
                    Mauris tellus augue, aliquet at lobortis id, cursus eget arcu. Quisque vehicula libero sed eros malesuada, a maximus justo rhoncus. Suspendisse ultrices finibus justo ut posuere. Donec lobortis nisi eget ligula convallis aliquam. Donec risus massa, ornare sed erat et, ornare fermentum purus. Nam egestas eget justo sed fringilla. Maecenas rhoncus non sapien non vestibulum. Vestibulum nec libero nec lectus molestie lacinia. Fusce commodo nisi scelerisque consequat ornare. Vivamus euismod tempor magna a vestibulum. Donec quis ipsum libero. Sed id lectus vehicula, pharetra ipsum nec, scelerisque lorem. Mauris dictum blandit est, id ultrices nibh faucibus quis. Duis tincidunt mollis porttitor.
                </div>
            </div>

        </>
    )
}

export default Howork;