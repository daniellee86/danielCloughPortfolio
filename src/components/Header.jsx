import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { Link } from 'react-scroll'
import { mobile, tablet } from "../responsive"
//
import Navbar from "./Navbar"
//
import noise from "../assets/noise.gif"
import email from "../assets/004-email.png"
import scroll from "../assets/002-scroll.png"
import linked from "../assets/linkedin.png"
import git from "../assets/003-github.png"
//  

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
//
const Wrapper = styled.div`
flex-grow: 1;
display: flex;
padding: 3%;
background-color: #1B1A17;
${mobile({ flexDirection: "column"})}
${tablet({ flexDirection: "column"})}
`
//
const Left = styled.div`
flex: 1.2;
display: flex;
justify-content: center;
align-items: center;
color: #E6D5B8;
background-color: #1B1A17;
`
//
const LeftContent = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
${mobile({ alignItems: "center"})}
${tablet({ alignItems: "center"})}
`

//TITLE ANIMATION
const TitleAnimation = keyframes`
  0% {clip: rect(99px, 9999px, 70px, 0);}
    5% { clip: rect(7px, 9999px, 120px, 0);}
    10% {clip: rect(52px, 9999px, 79px, 0);}
    15% {clip: rect(51px, 9999px, 42px, 23px);}
    20% {clip: rect(37px, 9999px, 43px, 0)}
    25% {clip: rect(38px, 9999px, 9px, 0);}
    30% {clip: rect(34px, 9999px, 140px, 0);}
    35% {clip: rect(18px, 9999px, 84px, 72px);}
    40% {clip: rect(100px, 9999px, 75px, 0);}
    45% {clip: rect(15px, 9999px, 4px, 0);}
    50% {clip: rect(14px, 9999px, 10px, 0);}
    55% {clip: rect(4px, 9999px, 75px, 150px);}
    60% {clip: rect(17px, 9999px, 55px, 0);}
    65% {clip: rect(75px, 9999px, 57px, 0);}
    70% {clip: rect(39px, 9999px, 84px, 0);}
    75% {clip: rect(96px, 9999px, 94px, 0);}
    80% {clip: rect(45px, 9999px, 25px, 500px);}
    85% {clip: rect(60px, 9999px, 117px, 0);}
    90% {clip: rect(5px, 9999px, 6px, 0);  }
    95% {clip: rect(49px, 9999px, 73px, 0); }
    100% {clip: rect(54px, 9999px, 90px, 0); }
`

//TITLES
const HeaderTitleOne = styled.h1`
font-size: 120px;
font-family: 'Montserrat', sans-serif;
font-weight: 800;
font-style: italic;
color: #FFBD35 ;

&:after { 
 content: attr(data-text);
  position: absolute;
  left: 5px;
  text-shadow: -2px 0 #FA1E0E;
  color: #FFBD35 ;
  background-color: #1B1A17;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: ${TitleAnimation} 3.3s infinite linear alternate-reverse;
};

&:before { 
  content: attr(data-text);
  position: absolute;
  left: -5px;
  white-space: pre;
  text-shadow: 2px 0 #4E9F3D;
  color: #FFBD35 ;
  background-color: #1B1A17;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: ${TitleAnimation} 2.3s infinite linear alternate-reverse;
  };

  ${mobile({ fontSize: "70px"})}
  ${tablet({ fontSize: "110px"})}
`
//
const HeaderTitleTwo = styled.h1`
font-size: 120px;
font-family: 'Montserrat', sans-serif;
font-weight: 800;
font-style: italic;
color: #FFBD35 ;

&:after { 
 content: attr(data-text);
  position: absolute;
  left: 5px;
  text-shadow: -2px 0 #FA1E0E;
  color: #FFBD35 ;
  background-color: #1B1A17;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: ${TitleAnimation} 3.5s infinite linear alternate-reverse ;
};

&:before { 
  content: attr(data-text);
  position: absolute;
  left: -5px;
  white-space: pre;
  text-shadow: 2px 0 #4E9F3D;
  color: #FFBD35 ;
  background-color: #1B1A17;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: ${TitleAnimation} 2.5s infinite linear alternate-reverse ;
  };

  ${mobile({ fontSize: "65px"})}
  ${tablet({ fontSize: "100px"})}
`
//

const SubTitle = styled.h2`
    font-size: 35px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    margin-top: 20px;
    font-weight: 800;
    color:  #1B1A17;
    text-shadow: -2px 2px white;
    ${mobile({ fontSize: "20px"})}
    ${tablet({ fontSize: "25px"})}
`
//
const Right = styled.div`
flex:1;
background-color: #1B1A17;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${mobile({ flex: "0.5" })}
`
//
const TextWrapper = styled.div`
${mobile({ display: "none"})}
${tablet({ display: "none"})}

`
//
const HeaderText = styled.div`
position: relative;
font-size: 20px;
color: white;
font-weight: 300;
z-index: 1;
`
//
const Window = styled.div`
border: solid 2px white;
border-radius: 10px;
box-shadow: 5.5px 5px white;
`
//
const WindowTop = styled.div`
height: 40px;
border-bottom: solid 2px white;
display: flex;
`
//
const WindowBottom = styled.div`
position: relative;
padding: 50px;
`
//
const Noise = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  background-image: url(${noise});
  opacity: 0.2;
  background-size: cover;
  z-index: 0;
`
//
const TopLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
//
const Button = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${props => props.color};
  border-radius: 50% ;
  box-shadow: 0 0 .2rem ${props => props.color},
              0 0 .2rem ${props => props.color},
              0 0 2rem ${props => props.color},
              0 0 0.8rem ${props => props.color},
              0 0 2.8rem ${props => props.color},
              inset 0 0 1.3rem ${props => props.color};
`
//
const TopRight = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: solid 2px white;
`
//
const Search = styled.div`
  height: 70%;
  width: 70%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
//
const IconContainer = styled.div`
  margin-top: 20px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  ${mobile({ 
    width: "100%",
    margin:"0",
    justifyContent: "center"
    })}
      ${tablet({ 
    width: "100%",
    margin:"0",
    justifyContent: "center"
    })}
`
//
const IconLeft = styled.div`
`
//
const IconRight = styled.div`
${mobile({ display: "none"})}
${tablet({ display: "none"})}
`
//
const Icon = styled.img`
height: ${props => props.height};
filter: invert(100%);
margin: 0 10px;
transition: all 0.5s ease-in-out;

&:hover{
    transform:${props=>props.hoverscale} ;
}

${tablet({ margin: "0 30px"})}
`
//
const A = styled.a`
   text-decoration: none;
`
//


const Header = ({props}) => {
  return (
    <Container id="home">
    <Navbar/>

    <Wrapper>
    <Left>
        <LeftContent>
        <HeaderTitleOne data-text="DANIEL">DANIEL</HeaderTitleOne>
        <HeaderTitleTwo data-text="CLOUGH">CLOUGH</HeaderTitleTwo>
        <SubTitle>Web Developer.</SubTitle>
        </LeftContent>
    </Left>

    <Right>
   <TextWrapper>
     
<Window>
  <WindowTop>
    <TopLeft>
    <Button color="#FA1E0E"></Button>
    <Button color="#F0A500"></Button>
    <Button color="#4E9F3D"></Button>
    </TopLeft>
    <TopRight>
      <Search>WWW</Search>
    </TopRight>
  </WindowTop>

  <WindowBottom>
    <HeaderText>
     const headerText = &#40; &#41; =&#62; &#123; <br/>
     let developer = &#123;<br/>
     name: daniel,<br/>
     skills: development & design,<br/>
     message: welcome to my portfolio<br/>
    &#125;<br/>
    return developer<br/>
    &#125;
    </HeaderText>
    <Noise> </Noise>
  </WindowBottom>

</Window>
    </TextWrapper>

    <IconContainer>
      <IconLeft>
      <A href='https://linkedin.com/in/danielclough86' target="_blank"><Icon src={linked} height="35px" hoverscale="scale(1.1)"/></A>
      <A href='https://github.com/daniellee86' target="_blank">  <Icon src={git} height="35px" hoverscale="scale(1.1)"/></A>
    
      <Link to="contact" spy={true} smooth={true} offset={0} duration={1000} >
      <Icon src={email} height="35px" hoverscale="scale(1.1)"/>
      </Link>
      </IconLeft>
      <IconRight>
      <Icon src={scroll}  height="50px"/>
      </IconRight>
    </IconContainer>

    </Right>
   
    
    </Wrapper>
     </Container>
  )
}

export default Header


