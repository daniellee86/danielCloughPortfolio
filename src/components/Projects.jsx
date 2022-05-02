import styled from "styled-components"
import { useState, useEffect } from "react"
import { sliderItems, images } from "../data"
// import { mobile } from "../responsive";

//ASSETTS
import leftarrow from "../assets/left.png"
import rightarrow from "../assets/arrow-right.png"
import internet from "../assets/006-internet.png"
import github from "../assets/003-github.png"
import arrow from "../assets/down-arrow.png"



//
const SectionContainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color:  #1B1A17;
`
//
const SliderContainer = styled.div`
width: 80vw;
height: 80vh;
display: flex;
position: relative;
overflow: hidden;
background-color: #E6D5B8 ;
`
// ${mobile({ display: "none" })}
//

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #E6D5B8;
border-radius: 50%;
border: solid 0.1px black;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "30px"};
right: ${props=> props.direction === "right" && "30px"};
margin: auto;
cursor: pointer;
z-index: 2;
transition: all 0.5s ease-in-out;

&:hover{
    background-color: #FFBD35;
}
`
//
const ArrowIcon = styled.img`
width: 50px;
height: 50px;
`
//
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -80}vw);
`
//
const Slide = styled.div`
width: 80vw;
height: 80vh;
display: flex;
align-items: center;
padding: 20px;
`
//
const ImgContainer = styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
padding: 20px;
border-top: solid 1.5px black;
border-bottom: solid 1.5px black;
border-left: solid 1.5px black;
background-color: #FFBD35 ;
`
//
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
//
const InfoContainer = styled.div`
height: 100%;
flex: 1;
/* padding: 50px;  */
background-color: #FFBD35 ;
padding: 20px;
border-top: solid 1.5px black;
border-bottom: solid 1.5px black;
border-right: solid 1.5px black;
`
//
const Info = styled.div`
    height: 100%;
    border: solid 1.5px black;
    background-color: #E6D5B8;
    padding: 20px 50px;
    color: #1B1A17;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
//
const InfoTop = styled.div`
border-bottom: solid 1.5px #1B1A17;
`
//
const InfoMiddle = styled.div`
border-bottom: solid 1.5px #1B1A17;
`
//
const InfoBottom = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
//
const Title = styled.h1`
font-weight: 600;
`
//
const SubTitle = styled.h3`
  font-weight: 400;
  margin-bottom: 20px;
`
//
const Desc = styled.p`
font-size: 15px;
line-height: 1.5;
margin-bottom: 20px;
white-space: pre-wrap;
`
//
const Icon = styled.img`
  height: 35px;
  transition: all 0.5s ease-in-out;
&:hover{
    transform: scale(1.1) ;
}
`
//
const Pointer = styled.img`
height: 75px;
  transform: rotate(90deg) ;
`
//



const Projects = () => {
  //STATES
    const [slideIndex, setSlideIndex] = useState(0)
    const [count, setCount] = useState(0);
    const [mousedOver, setMousedOver] = useState(false);

   //SLIDER FUNCTION; MOVES THE WRAPPER slideIndex * slide width(80vw)  
    const handleClick = (direction)=> {
        if (direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3 ) 
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0 )
        } }

    //USE EFFECT FOR SLIDE IMAGE CHANGE ON HOVER     
    useEffect(() => {
      // set interval timer if currently moused over
      if (mousedOver) {
        const timer = setInterval(() => {
          // cycle prevCount using mod instead of checking for hard-coded length
          setCount((prevCount) => (prevCount + 1) % images[slideIndex].length);
        }, 300);
        // automatically clear timer the next time this effect is fired or
        // the component is "unmounted"
        return () => clearInterval(timer);
      } else {
        // otherwise (not moused over), reset the counter
        setCount(0);
      }
      // dependency on mousedOver means effect is fired
      // every time mousedOver changes
    }, [mousedOver, slideIndex]);
  

  return (
      <SectionContainer id="projects">

       <Arrow direction="left" onClick={()=>handleClick("left")}>
       <ArrowIcon alt="sliderarrow" src={leftarrow}></ArrowIcon>
       </Arrow>
       
   <SliderContainer     
   //EVENT LISTENERS FOR HOVER EFFECT
   onMouseOver={() => setMousedOver(true)}
    onMouseOut={() => setMousedOver(false)}>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (

            <Slide  key={item.id}>
              
             <ImgContainer>
              <Image  alt="sliderimage"  src={images[slideIndex][count]}  />
             </ImgContainer>
              
            <InfoContainer>
               <Info>
                  <InfoTop>
                    <Title>{item.title}</Title>
                    <SubTitle>{item.subtitle}</SubTitle>
                  </InfoTop>

                  <InfoMiddle>
                    <Desc>{item.desc}</Desc>
                  </InfoMiddle>
             
                  <InfoBottom>
                   <a href={item.url[0]} target="_blank" rel="noreferrer" ><Icon src={internet}/></a> 
                   <a href={item.url[1]} target="_blank" rel="noreferrer" ><Icon src={github}/></a> 
                    <Pointer src={arrow}/>
                  </InfoBottom>
                </Info>
            </InfoContainer>
            

            </Slide>
            ))}

        </Wrapper>
   </SliderContainer>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
         <ArrowIcon alt="sliderarrow" src={rightarrow}></ArrowIcon>
       </Arrow>


   </SectionContainer>
  )
}

export default Projects