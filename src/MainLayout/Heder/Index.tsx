import { Link } from "react-router-dom";
import Styles from  "./Layout.module.css"
import Logo from "../../IMG/React-logo.jpg"


export const Heder = () => {
  return (
   <nav>
     <header className={Styles.Layout}>

         
<Link to={"/"}>
<img src={Logo} alt="React"/>
</Link>    

<ul className={Styles.List}>

  <li className={Styles.item}  >
  <Link to={"/Home"}>Home</Link>
  </li>

  <li className={Styles.item}>
  <Link to={"/Comments"}>Comments</Link>
  </li>

  <li className={Styles.item}>
  <Link to={"/Photos"}>Photos</Link>
  </li>
</ul>

</header>
   </nav>
  )
}
