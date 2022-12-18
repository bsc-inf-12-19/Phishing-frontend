import "./Navbar.css"
// import { IconName } from "react-icons/fa";
function Navbar (){
    return(
        <nav>

            {/* my hamberger very userfull */}
            <ul>
            {/* <li><svg viewBox="0 0 100 80" width="30" height="30">
              <rect width="70" height="10"></rect>
              <rect y="25" width="70" height="10"></rect>
              <rect y="50" width="70" height="10"></rect>
           </svg></li> */}
           <li><img alt="menu" class="menu" src="menu.svg"/></li>
                <li><img alt="logo" src ="juiceShop_Logo.png"/></li>
                <li class="text"><p>OWASP Juice Shop</p></li>
            </ul>
            <ul class="ul2">
                <li><img class="image1" alt="logo" src ="seach.svg"/></li>
                <li><img class="image1" alt="logo" src ="user.svg"/>Account</li>
                <li><img class="image1" alt="logo" src ="language.svg" />EN</li>
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