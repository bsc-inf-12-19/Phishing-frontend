import "./Navbar.css"
// import { IconName } from "react-icons/fa";
function Navbar (){
    return(
        <nav>

            {/* my hamberger very userfull */}
            <ul>
            <li><svg viewBox="0 0 100 80" width="30" height="30">
              <rect width="70" height="10"></rect>
              <rect y="25" width="70" height="10"></rect>
              <rect y="50" width="70" height="10"></rect>
           </svg></li>
                <li><img alt="logo" src ="juiceShop_Logo.png"/></li>
                <li><p>OWASP Juice Shop</p></li>
            </ul>
            {/* <div  className="list1">
            <ul>
                <li><p>Account En</p></li>
                <li><p>En</p></li>
            </ul>
            </div> */}
        </nav>
    )
}
export default Navbar