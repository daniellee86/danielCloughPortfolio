import styled from "styled-components"
//
import noise from "../images/noise.gif"

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

const Container = styled.div`
position: relative;
  height: 100vh;
  display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`

const AboutWrapper = styled.div`
position: relative;
z-index: 1;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
padding: 20px;
`
const AboutBackground = styled.h1`
font-size: 300px;
color: #FFBD35;
text-shadow: -7px 5px #E6D5B8;
font-family: 'Montserrat', sans-serif;
font-weight: 600;
`
const TopText = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const BottomText = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const AboutInfo = styled.div`
position: relative;
  height: 100%;
  flex-grow: 2;
  padding: 0 40px;
  display: flex;
  align-items: flex-end;
  
`

const CircleTop = styled.div`
height: 200px;
width: 200px;
border: solid 3px #FFBD35 ;
border-radius: 50%;
position: absolute;
top: 60px;
left: -15px;
z-index: -1;
`

const InfoContainer = styled.div`
height: 75%;
width: 100%;
border: solid 2px black;

`

const ContentContainer = styled.div`
position: relative;
display: flex;
height: 100%;
width: 100%;
  padding: 20px;
  z-index: 1;
  overflow: hidden;
`

const TextOverlay = styled.div`
background-color:  #1B1A17;
position: absolute;
height: 100%;
width: 100%;
top:0;
right: -100%;
transition: 1s;
z-index: 2;

${ContentContainer}:hover & {
    right: 0;
  }
`
const Content = styled.div`
flex:1;
background-color: #E6D5B8;
padding: 20px 50px;
`
const TextTitle = styled.h2`
  font-weight: 400;
`
const Text = styled.p`
  font-size: 18px;
  margin-top: 10px;
`

const InfoBottom = styled.div`
height: 100%;
width:100%;
padding: 20px;
background-color:#E6D5B8 ;
`

const Border = styled.div`
height: 75%;
width: 300px;
  border: solid 2px black;
  padding: 20px;
  margin: 0 65px 20px 0;
`


const About = () => {
  return (
    <Container>
     <AboutWrapper>
       <TopText>

         <AboutInfo>
           <CircleTop></CircleTop>
           <InfoContainer>
             <ContentContainer>
               <TextOverlay>
               </TextOverlay>
                 <Content>
                  <TextTitle> 
                    I AM A DEVELOPER AND RECENT GRADUATE<br/>
                     OF A SOFTWARE DEVELOPMENT<br/>
                     BOOTCAMP. 
                  </TextTitle>
                  <Text>
                  I have experience building dynamic websites and progressive
                  web applications. I seek to continuously learn and grow.
                  Currently looking for an entry level developer role and very 
                  much looking forward to communicating and problem solving as part
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
      <Border>
      <InfoBottom>
        <Text>
          Early in 2022 I helped build a small online community of 
          developers that collaborate and meet twice weekly 
          to take part in pair programming sessions.
        </Text>
      </InfoBottom>
      </Border>
      </BottomText>
        </AboutWrapper>
      <Noise> </Noise>
    </Container>
  )
}

export default About