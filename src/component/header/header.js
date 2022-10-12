import "./header.css";
import {Link} from 'react-router-dom';
const Header= ()=>{
    return(
        <>
        <nav className="header">
            <section className="logo">
                <img src={require("../../image/instaclon.png")} alt="log"/>
            </section>
            <section className="camera">
            <Link to="/form">
                <img src={require("../../image/camera-outline-icon-27.png")} alt="cam"/></Link>          
            </section>
        </nav>
        </>
    )
}
export default Header;