import "./Navbar.css"
function Navbar (){
    return(
        <nav>
            <ul>
           <li><img alt="menu" class="menu" src="menu.svg"/></li>
                <li><img alt="logo" src ="juiceShop_Logo.png"/></li>
                <li class="text"><p>OWASP Juice Shop</p></li>
            </ul>
            <ul class="ul2">
                <li><input class="inputlogo" type="text"/></li>
                {/* <li><img class="image1" alt="logo" src ="seach.svg"/></li> */}
                <li><img class="image1" alt="logo" src ="user.svg"/>Account</li>
                <li><img class="image1" alt="logo" src ="language.svg" />EN</li>
            </ul>
        </nav>
    )
}
export default Navbar