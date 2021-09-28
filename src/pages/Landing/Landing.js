import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as DoneIcon } from '../../icons/done_icon.svg';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_left_icon.svg';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow_right_icon.svg';
import homepageSS from './images/1_homepage.jpg';
import taskeditorSS from './images/2_taskeditor.jpg';
import calendarpageSS from './images/3_calendarpage.jpg';
import taskperdaySS from './images/4_tasksperday.jpg';
import pomodoropageSS from './images/5_pomodoropage.jpg';
import projectspageSS from './images/6_projectspage.jpg';
import responsivepagesSS from './images/7_responsivepages.jpg';

import {
  Background,
  Container,
  AnimatedCircle,
  Hero,
  HeroListItem,
  HeroContent,
  HeroButtons,
  LoginButton,
  SourceButton,
  Section,
  SectionContent,
  ImageSlider,
  Slider,
  Image,
  Footer,
  Link,
} from './Landing.styles';

const screenShots = [
  homepageSS,
  taskeditorSS,
  calendarpageSS,
  taskperdaySS,
  pomodoropageSS,
  projectspageSS,
  responsivepagesSS,
];

export const Landing = () => {
  const history = useHistory();
  const [current, setCurrent] = useState(0);
  const { length } = screenShots;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  useEffect(() => {
    const timeoutId = setTimeout(() => nextSlide(), 5000);
    return () => clearTimeout(timeoutId);
  }, [current]);

  return (
    <Background>
      <Container>
        <Hero>
          {window.innerWidth > 900 && <AnimatedCircle />}
          <HeroContent>
            <h1>make****done</h1>
            <HeroListItem>
              Pomodoro Technique
              <DoneIcon fill="#FFFFFF" />
            </HeroListItem>
            <HeroListItem>
              Time Management
              <DoneIcon fill="#FFFFFF" />
            </HeroListItem>
            <HeroListItem>
              Task List
              <DoneIcon fill="#FFFFFF" />
            </HeroListItem>
            <HeroButtons>
              <LoginButton type="button" onClick={() => history.replace('/login')}>Try it out!</LoginButton>
              <SourceButton href="https://github.com/JakubMaslanka/Make-IT-Done">Source Code</SourceButton>
            </HeroButtons>
          </HeroContent>
        </Hero>
        <Section>
          <SectionContent>
            <h2>Make Your Tasks Smarter</h2>
            <p>
              Make-IT-Done is a web application, that increases your productivity.
              <br />
              It helps better track your tasks, manage them, and focus on the current ones.
              App provides a great method of keeping you focused - the Pomodoro Technique.
              <br />
              You can read about it
              <Link bigger href="https://www.forbes.com/sites/bryancollinseurope/2020/03/03/the-pomodoro-technique/"> here.</Link>
              <br />
              <b>Try it out! It&apos;s completely free.</b>
            </p>
          </SectionContent>
          <ImageSlider>
            <ArrowLeftIcon onClick={prevSlide} />
            {screenShots.map((image, index) => (
              <Slider active={index === current} key={image}>
                {index === current && <Image url={image} />}
              </Slider>
            ))}
            <ArrowRightIcon onClick={nextSlide} />
          </ImageSlider>
        </Section>
        <Footer>
          {window.innerWidth > 900 && <h5>make****done</h5>}
          <Link href="https://github.com/JakubMaslanka">About Me</Link>
          <Link href="https://github.com/JakubMaslanka/Make-IT-Done#technologies-used">Technology</Link>
          <Link href="https://github.com/JakubMaslanka/Make-IT-Done">GitHub</Link>
          <h5>&copy; Jakub Maslanka 2021</h5>
        </Footer>
      </Container>
    </Background>
  );
};
