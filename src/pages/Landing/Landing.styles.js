import styled from 'styled-components';

export const Background = styled.div`
width: 100vw;
height: 193vh;
background-color: #2D3E50;`;

export const Container = styled.div`
max-width: 920px;
margin: 0px auto;
background-color: #2D3E50;
font-family: Lato;`;

export const AnimatedCircle = styled.div`
position: absolute;
padding: 440px;
border: 1px solid white;
background-color: transparent;
border-radius: 50%;
overflow: hidden;
animation: slideIn 1s ease-in-out .5s alternate;
@keyframes slideIn {
  0%   {padding: 0px; background-color: #2D3E50;}
  25%  {padding: 0px; background-color: #2D3E50;}
  50%  {background-color: #2D3E50;}
  75%  {background-color: #2D3E50;}
  100% {padding: 440px; background-color: transparent;}
}`;

export const Hero = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`;

export const HeroContent = styled.div`
opacity: 1;
overflow: hidden;
animation: fadeIn 2s ease-in-out alternate;
z-index: 10;
h1{
  text-align: center;
  font-size: 3.75rem;
  color: white;
  font-weight: 200;
  border-bottom: 1px solid white;
  padding-bottom: 30px;
  margin-bottom: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@keyframes fadeIn {
  0%   {opacity: 0;}
  80%   {opacity: 0;}
  100% {opacity: 1;}
}`;

export const HeroListItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: white;
font-weight: 300;
font-size: 1.25rem;
line-height: 2rem;
display: flex;
align-items: center;
text-transform: uppercase;`;

export const HeroButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;`;

export const LoginButton = styled.button`
padding: 12px 20px;
color: #1BBC9B;
background: transparent;
border: 5px solid #1BBC9B;
border-radius: 5px;
cursor: pointer;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 1.1rem;
font-weight: 100;
text-transform: uppercase;
transition: all .15s ease;
&:hover{
    color: #2D3E50;
    background: #1BBC9B;
}`;

export const SourceButton = styled.a`
text-decoration: none;
padding: 12px 20px;
color: #2D3E50;
background: #AEAEAE;
border: 5px solid #AEAEAE;
border-radius: 5px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 1.1rem;
font-weight: 300;
text-transform: uppercase;
transition: all .15s ease;
&:hover{
    color: #AEAEAE;
    background: #2D3E50;
}`;

export const Section = styled.div`
width: 100%;
height: 80vh;
background-color: #2D3E50;
color: white;
display: flex;
flex-direction: column;
@media screen and (min-width: 900px) {
  flex-direction: row;
  align-items: center;
  height: 80vh;
}`;

export const SectionContent = styled.div`
height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 0px 30px;
h2{
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin: 0px;
}
p{
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  padding: 20px 0px;
}
@media screen and (min-width: 580px) {
  height: 30vh;
}`;

export const ImageSlider = styled.div`
height: 40vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
svg{
  fill: #FFFFFF;
  width: 52px;
  height: 52px;
  cursor: pointer;
}
@media screen and (min-width: 580px) {
  height: 50vh;
}
`;

export const Slider = styled.div`
opacity: 1;
transition-duration: .5s ease-in-out;
transform: scale(0.9);
${({ active }) => active && (
    `opacity: 1;
    transition-duration: .3s;
    transform: scale(1);`
  )}
`;

export const Image = styled.div`
width: 270px;
height: 220px;
${({ url }) => url && `background: center / contain no-repeat url(${url});`}
&::after {
  content: "";
  position: absolute;
  top: 0;
  z-index: -10;
  width: 270px;
  height: 140px;
  display: flex;
  margin: 0px 10px;
  background: #128069;
}
&::before {
  content: "";
  position: absolute;
  bottom: 0;
  z-index: -20;
  width: 270px;
  height: 140px;
  display: flex;
  margin: 0px -10px;
  background: #1BBC9B;
}
@media screen and (min-width: 580px) {
  width: 470px;
  height: 420px;
  &::before {
    width: 460px;
    height: 240px;
  } 
  &::after {
    width: 480px;
    height: 240px;
  }
}`;

export const Footer = styled.div`
height: 20vh;
background: #2D3E50;
border-top: 1px solid grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
color: white;
h5{
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 100;
  margin: 0px;
  padding: 5px 0px;
}
@media screen and (min-width: 900px) {
  height: 10vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}`;

export const Link = styled.a`
list-style: none;
color: white;
font-size: 0.8rem;
font-weight: 600;
margin: 0px;
margin-top: 10px;
padding: 5px 0px;
cursor: pointer;
text-decoration: none;
${({ bigger }) => bigger && (`
    font-size: 1rem;
    color: #1BBC9B;
`)}
&:hover{
  text-decoration: underline;
}`;
