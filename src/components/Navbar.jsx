import styled from 'styled-components'
import { NavLink } from "react-router-dom"
//


const Container = styled.div`
height: 50px;
background-color: #1B1A17;
color: #E0C097;
` 
// ${mobile({ height: "40px" })}

const Wrapper = styled.div`
height: 100%;
width: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
// ${mobile({ padding: "10px 0px" })}


const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`


const Center = styled.div`
flex: 1;
text-align: center;
border-left: solid 1px white;
border-right: solid 1px white;
display: flex;
justify-content: space-around;
`
const Logo = styled.h1`
font-weight: bold;
font-size: 15px;
color: black
`
// ${mobile({ fontsize: "24px" })}

const LogoCircle = styled.div`
border-radius: 50%;
background-color: white;
padding: 7px;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
// ${mobile({ flex: 2, justifyContent: "center" })}

const navStyle = ({isActive}) =>{
    return{
    color:"white",
    fontSize: "14px",
    fontWeight: isActive ? "800" : "normal",
    cursor: "pointer",
    margin: " 0 10px 0 10px",
    textDecoration: isActive ? "underline" : "none"
}

}


// ${mobile({ fontSize: "12px", marginLeft: "5px" })}

//
const Navbar = () => {

  return (
    <nav>
    <Container>
        <Wrapper>
            
         <Left>
         <LogoCircle>
         <Logo>DC</Logo>
         </LogoCircle>
         </Left>

         <Center>
             <NavLink style={navStyle} to="/">HOME</NavLink>
             <NavLink style={navStyle} to="/About">ABOUT</NavLink>
             <NavLink style={navStyle} to="/Projects">PROJECTS</NavLink>
             <NavLink style={navStyle} to="/Contact">CONTACT</NavLink>
         </Center>

        

         <Right>
            
         </Right>

        </Wrapper>
    </Container>
    </nav>

  )
}

export default Navbar