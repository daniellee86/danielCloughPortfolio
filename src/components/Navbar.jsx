import styled from 'styled-components'
import resume from "../assets/icons8-cv-64.png"
import cv from "../downloads/cv.pdf"
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
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 3%;
`
// ${mobile({ padding: "10px 0px" })}


const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-start;
`
const Logo = styled.h1`
font-weight: bold;
font-size: 15px;
color: black;
`
// ${mobile({ fontsize: "24px" })}

const LogoCircle = styled.div`
border-radius: 50%;
background-color: white;
padding: 7px;
`

const Center = styled.div`
flex: 1;
text-align: center;
border-left: solid 1px white;
border-right: solid 1px white;
display: flex;
justify-content: space-around;
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`
// ${mobile({ flex: 2, justifyContent: "center" })}

const NavLink = styled.a`
     color: white;
     cursor: "pointer";
     text-decoration: none;
     transition: all 0.5s ease-in-out;

     &:hover{
    color: #FFBD35 ;
    transform: scale(1.08) translate(0%, -5%);
}
`
// ${mobile({ fontSize: "12px", marginLeft: "5px" })}

const Icon = styled.img`
height: 35px;
filter: invert(100%);
transition: all 0.5s ease-in-out;
padding-top: 2px;

&:hover{
    transform:scale(1.1) ;
}
`

const A = styled.a`
   text-decoration: none;
`


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
             <NavLink  href="#about">ABOUT</NavLink>
             <NavLink  href="#projects">PROJECTS</NavLink>
             <NavLink  href="#contact">CONTACT</NavLink>
         </Center>

        
         <Right>
         <A href={cv}
        download="Daniel Clough Web Developer CV">
         <Icon src={resume}/>
          </A>   
  
         
         </Right>

        </Wrapper>
    </Container>
    </nav>

  )
}

export default Navbar

