import styled from 'styled-components'
import emailjs from 'emailjs-com'
import {useState} from 'react'
import { init } from 'emailjs-com';
init('K-cYWtuOULleJE9t4');
//

const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: 3%;
   background-color: #1B1A17;
`
//
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px;
   background-color: #1B1A17;
`
//
const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
   display: flex;
`
//
const ContentLeft = styled.div`
flex:1; 
background-color: #1B1A17;
color:  #E6D5B8;
padding: 20px 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border-top: solid 1.5px white;
border-bottom: solid 1.5px white;
border-left: solid 1.5px white;
`
//
const InfoTop = styled.div`
flex:1; 
border-bottom: solid 1.5px #E6D5B8;
`
//
const InfoMiddle = styled.div`
flex:2; 
border-bottom: solid 1.5px #E6D5B8;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
`
//
const InfoBottom = styled.div`
flex:1; 
display: flex;
align-items: center;
`
//
const Title = styled.h1`
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size: 50px;
`
//
const SubTitle = styled.h2`
  font-weight: 300;
  margin-bottom: 20px;
`
//
const Desc = styled.p`
font-size: 15px;
line-height: 1.5;
font-weight: 300;
`
//
const ContentRight = styled.div`
flex:1; 
padding: 20px 50px;
border-top: solid 1.5px white;
border-bottom: solid 1.5px white;
border-right: solid 1.5px white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
//
const FormTop = styled.div`
flex:1;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
//
const FormMiddle = styled.div`
flex:2;
width: 100%;
margin-top: 10px;
display: flex;
align-items: center;
`
//
const FormBottom = styled.div`
flex:1;
color: #E6D5B8;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
//
const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    background-color: transparent;
    color:#E6D5B8;
    font-size: 15px;
    border: none;
    border-bottom: solid 1.5px #E6D5B8;

   &::placeholder{
    color:#E6D5B8;
    font-size: 25px;
    font-weight: 300;
   };

   &:focus{
    outline: none;
    border-bottom: solid 1.5px #FFBD35;
   }
`
//
const TextArea = styled.textarea`
     height: 50%;
     width: 100%;
     padding: 10px;
     font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    border: solid 1.5px #E6D5B8;
    background-color: transparent;
    color:#E6D5B8;
    resize: none;

    &::placeholder{
    color:#E6D5B8;
    font-size: 25px;
    font-weight: 300;
   }

   &:focus{
    outline: none;
    border: solid 1.5px #FFBD35;
   }
`
//
const Response = styled.span`
    display: ${props=>props.response};
    margin-top: 20px;
`
//
const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;  
  border-radius: 20px;
  color: #E6D5B8;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 300;
  padding: 10px 18px;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(.23, 1, 0.32, 1);
  touch-action: manipulation;
  will-change: transform;

  &:hover{
    box-shadow: rgba(0, 0, 0, 1) 0 2px 15px;
  transform: translateY(-2px);
  }
`
//

const Contact = () => {
    // STATES
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    // SETS EMAIL SENT TO FALSE AND CHANGES CSS TO CLEAR THE SPAN MESSAGE
    const clearSent = () => {
        setEmailSent(false)
    }


    //SUBMIT FUNCTION FOR EMAIL.JS. 
    const submit = () => {
        if (name && email && message) {
            const templateParams = {
                name: name,
                email: email,
                message: message
            };
            emailjs.send("service_brsf12r", "template_l9gnqeb", templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            setTimeout(clearSent, 3000);
        } else {
            alert('Please fill in all fields.');
        }}

    // FUNCTION TO CHECK IF EMAIL IS VALID    
    // const isValidEmail = email => {
    //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(String(email).toLowerCase());
    // };


  return (
      <Container id="contact">
          <Wrapper>

              <ContentWrapper>
                  <ContentLeft>
                  <InfoTop>
                  <Title>CONTACT</Title>
                  <SubTitle>LET'S WORK TOGETHER</SubTitle>
                  </InfoTop>

                  <InfoMiddle>
                  <Desc>danielleeclough86@hotmail.co.uk</Desc>
                  <Desc>Coding Bootcamp graduate, looking for an entry level web developer role or apprenticeship. 
                      Broad range of technical ability and experience using the MERN tech stack. 
                      Built and contributed to projects in self starting and collaborative environments.
                      Developed strong soft skills such as; problem solving, communication skills and collaborative ways of working.
                  </Desc>
                  </InfoMiddle>
             
                  <InfoBottom>
                  <a href='#home'><Button>SCROLL UP</Button></a>
                  </InfoBottom>

                  </ContentLeft>


                   <ContentRight id="contact-form">
                   <FormTop>
                   <Input type="text" placeholder="NAME" value={name} onChange={e => setName(e.target.value)} />
                   <Input type="email" placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)} />
                   </FormTop>
                   <FormMiddle>
                   <TextArea placeholder="MESSAGE" value={message} onChange={e => setMessage(e.target.value)}></TextArea>
                   </FormMiddle>
                   <FormBottom>
                   <Button onClick={submit}>SEND</Button>
                   <Response response={emailSent ? 'block' : 'none'}>Thank you for your message, I will be in touch as soon as possible.</Response>
                   </FormBottom>

                   </ContentRight>


              </ContentWrapper>


          </Wrapper>
      </Container>
   
  )
}

export default Contact