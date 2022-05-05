import styled from "styled-components"
import noise from "../assets/noise.gif"
import click from "../assets/click.png"
import { mobile} from "../responsive"
//
const Noise = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  background-image: url(${noise});
  opacity: 0.3;
  background-size: contain;
  background-repeat: repeat;
  z-index: 0;
`
//
const Container = styled.div`
position: relative;
  height: 100vh;
  display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 3%;
    ${mobile({ height: "100vh"})}  
`
//
const AboutWrapper = styled.div`
position: relative;
z-index: 1;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* overflow: hidden; */
padding: 20px;
${mobile({ justifyContent: "center"})}
`
//
const AboutBackground = styled.h1`
font-size: 260px;
color: #FFBD35;
text-shadow: -7px 5px #E6D5B8;
font-family: 'Montserrat', sans-serif;
font-weight: 600;
${mobile({ display: "none"})}
`
//
const TopText = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
${mobile({ height: "98%"})}
`
//
const BottomText = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
//
const AboutInfo = styled.div`
position: relative;
  height: 100%;
  flex-grow: 2;
  padding: 0 40px;
  display: flex;
  align-items: flex-end; 
  ${mobile({ padding: "0" })}
`
//
const CircleTop = styled.div`
height: 200px;
width: 200px;
border: solid 3px #FFBD35 ;
border-radius: 50%;
position: absolute;
top: 60px;
left: -15px;
z-index: -1;
${mobile({ display: "none"})}
`
//
const InfoContainer = styled.div`
height: 75%;
width: 100%;
box-shadow: -7px 7px #E6D5B8;
border: solid 1.5px #E6D5B8;
${mobile({ height: "100%"})}
`
//
const ContentContainer = styled.div`
position: relative;
display: flex;
height: 100%;
  padding: 20px;
  z-index: 1;
  overflow: hidden;
`
//
const TextOverlay = styled.div`
background-color:  #1B1A17;
position: absolute;
height: 100%;
width: 100%;
top:0;
right: -100%;
transition: 1s;
z-index: 2;
padding: 20px 50px;

${ContentContainer}:hover & {
    right: 0;
  }
`
//
const Content = styled.div`
padding: 20px 50px;
background-color: #E6D5B8;
${mobile({ 
  padding: "10px 25px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
   })}  
`
//
const TextTitle = styled.h3`
  font-weight: 400;
  color: ${props=>props.color};
  ${mobile({ fontSize: "20px" })}  
`
//
const Text = styled.p`
  font-size: 15px;
  margin-top: 10px;
  line-height: 1.5;
  color: ${props=>props.color};
  ${mobile({ fontSize: "13px" })}  
`
//
const InfoBottom = styled.div`
height: 100%;
width:100%;
background-color:#E6D5B8 ;
display: flex;
justify-content: center;
align-items: center;
`
//

const Border = styled.div`
position: relative;
height: 75%;
width: 300px;
box-shadow: 0 7px #E6D5B8;
border: solid 1.5px #E6D5B8;
  padding: 20px;
  margin: 0 65px 20px 0;
  overflow: hidden;
  ${mobile({ display: "none" })}   
`
//
const TextOverlayBottom = styled.div`
background-color:  #1B1A17;
position: absolute;
height: 100%;
width: 100%;
top:-100%;
right: 0;
transition: 1s;
z-index: 2;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;

${Border}:hover & {
    top: 0;
  }
`
//
const ContentLeft = styled.div`
flex:1 ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
//
const ContentRight = styled.div`
flex:1 ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 `
//
const Icon = styled.img`
height: ${props => props.height};
filter: invert(100%);
margin-top: 20px;
${mobile({ display: "none"})}
`
//


const About = () => {
  return (
    <Container id="about">
     <AboutWrapper>
       <TopText>

         <AboutInfo>
           <CircleTop></CircleTop>
           <InfoContainer>
             <ContentContainer>

               <TextOverlay>
                 <TextTitle color="#E6D5B8">WHAT I HAVE LEARNED:</TextTitle>
                     <Text color="#E6D5B8">Effectively breakdown problems and apply computational thinking to discuss possible solutions.</Text>
                     <Text color="#E6D5B8">Dynamic communication, technical and non-technical. Ability to discuss technicalities whilst also being
                     empathetic, understanding and a good team member.</Text>
                     <Text color="#E6D5B8">A refined approach to development; best practices, research, resillience and knowing when and how to ask for help.</Text>
                </TextOverlay>

                 <Content>
                  <TextTitle color="#1B1A17"> 
                    DEVELOPER AND GRADUATE<br/>
                     OF A SOFTWARE DEVELOPMENT<br/>
                     BOOTCAMP. 
                  </TextTitle>
                  <Text color="#1B1A17">
                  I have experience building dynamic websites and progressive
                  web applications. I seek to continuously learn and grow.
                  Currently looking for an entry level developer role and 
                  looking forward to working collaboratively as part
                  of a team.
                  </Text>
                 </Content>
                 
             </ContentContainer>
           </InfoContainer>
         </AboutInfo>

            <AboutBackground>AB</AboutBackground>
      </TopText>




      <BottomText>
      <AboutBackground>OUT</AboutBackground>
      <Icon src={click}  height="50px"/>

      <Border>

      <TextOverlayBottom>
      <TextTitle color="#E6D5B8">CODE<br/>FRIENDS: </TextTitle>
        <Text color="#E6D5B8">
          Early in '22 I helped build a small online community of 
          developers that collaborate and meet twice weekly 
          to take part in pair and group programming sessions.
        </Text>
      </TextOverlayBottom>

      <InfoBottom>
        <ContentLeft>
                     <Text color="#1B1A17">HTML CSS JS</Text>
                     <Text color="#1B1A17">REACT</Text>
                     <Text color="#1B1A17">NODE.JS</Text>
                     <Text color="#1B1A17">EXPRESS.JS</Text>
                     <Text color="#1B1A17">AXIOS</Text>
        </ContentLeft>
        <ContentRight>
                     <Text color="#1B1A17">REDUX</Text>
                     <Text color="#1B1A17">REST API'S</Text>
                     <Text color="#1B1A17">MONGO DB</Text>
                     <Text color="#1B1A17">JWT</Text>
                     <Text color="#1B1A17">STRIPE</Text>
                    

        </ContentRight>
      </InfoBottom>

      </Border>
      </BottomText>
        </AboutWrapper>
      <Noise> </Noise>
    </Container>
  )
}

export default About