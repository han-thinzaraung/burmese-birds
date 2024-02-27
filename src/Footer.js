import { Link } from "react-router-dom/cjs/react-router-dom";
const Footer = () => {

    return ( 
        <>
        <div className="row">
            <div className="col-md-6">
            <Link to="/" className="nav-link">Home</Link>
            </div>
            <div className="col-md-6">
            <Link to="/birds" className="nav-link">Birds</Link>
            </div>
        </div>
        <p>© All rights reserved by WordPress River</p>
        </>
     );
}
 
export default Footer;