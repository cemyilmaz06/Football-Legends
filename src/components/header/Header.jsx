import { Container } from "react-bootstrap"
import Image from 'react-bootstrap/Image';
import logo from "../../assets/logo.png"
import headerStyle from "./Header.module.css"
const Header=()=>{
    return(
        <Container>
            <Image src={logo} rounded width={"200px"} /> <br />
            <h1 className={`${headerStyle.title} my-2`}>FOOTBALL LEGENDS</h1>
        </Container>
    )
}
export default Header;