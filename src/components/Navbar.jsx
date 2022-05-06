import styled from 'styled-components'
import resume from "../assets/icons8-cv-64.png"
import cv from "../downloads/cv.pdf"
import { Link } from "react-scroll"
import { mobile, tablet} from "../responsive"
//

const Container = styled.div`
height: 50px;
background-color: #1B1A17;
color: #E0C097;
` 

const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 3%;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-start;
${mobile({ display: "none" })}
`
const Logo = styled.h1`
font-weight: bold;
font-size: 15px;
color: black;
`

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
${mobile({ flex: "4" })}
${tablet({ flex: "2" })}
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`

const LinkText = styled.p`
     color: white;
     cursor: "pointer";
     text-decoration: none;
     transition: all 0.5s ease-in-out;

     &:hover{
    color: #FFBD35 ;
    transform: scale(1.08) translate(0%, -5%);
}
`

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
             <Link to="about" spy={true} smooth={true} offset={0} duration={1000} ><LinkText>ABOUT</LinkText></Link>
             <Link to="projects" spy={true} smooth={true} offset={0} duration={1000} ><LinkText>WORK</LinkText></Link>
             <Link to="contact" spy={true} smooth={true} offset={0} duration={1000} ><LinkText>CONTACT</LinkText></Link>
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

