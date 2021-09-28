# Make-IT-Done

> Make-IT-Done is a SPA created in React. The application provides for the user several functions, like a To-Do list, calendar view including tasks, "projects" that are used to group tasks, and a Pomodoro technique timer that can be configured according to user needs.



**[Live page](https://www.makeitdone.online/)**

## Table of Contents

- [General Info](https://github.com/JakubMaslanka/Make-IT-Done#general-information)
- [Technologies Used](https://github.com/JakubMaslanka/Make-IT-Done#technologies-used)
- [Presentation](https://github.com/JakubMaslanka/Make-IT-Done#presentation)
- [Setup](https://github.com/JakubMaslanka/Make-IT-Done#setup)
- [Project Status](https://github.com/JakubMaslanka/Make-IT-Done#project-status)
- [Future Plans](https://github.com/JakubMaslanka/Make-IT-Done#future-plans)
- [Acknowledgements](https://github.com/JakubMaslanka/Make-IT-Done#acknowledgements)
- [Contact](https://github.com/JakubMaslanka/Make-IT-Done#contact)

## General Information

- Make-IT-Done is an application that helps increase the productivity of daily tasks. It's composed of 3 smaller applications such as To-Do, Calendar, and Pomodoro timer. Provides some practical views to help the user manage his tasks. The application also requires user authentication, JSON-server-auth library takes care of it. App has been adapted to work on mobile devices and wide screens.

- The application is targeting unorganized people who have problems with keeping their focus on one task. Make-It-Done allows users to create a task, estimate how much time is needed to complete it, and then work on it with 4x25min, 3x5min, and 1x15min intervals.

- The project was created mainly to test my skills in writing React apps. 
  Make-it-done is a specific culmination of the [course](https://kursreacta.pl/) provided by Michał Taszycki.

> **Credentials for testing account**
> 
> email: test@makeitdone.online
> password: p@ssword

## Technologies Used

###### Frontend
<img src="https://raw.githubusercontent.com/JakubMaslanka/Make-IT-Done/master/img/React_Logo.svg" alt="React_Logo" style="width: 42px;" />  React *@17.0.2*

- Prop-Types *@15.7.2*
- React-Router *@5.2.0*

###### State Management
<img src="https://raw.githubusercontent.com/JakubMaslanka/Make-IT-Done/master/img/Redux_Logo.svg" alt="Redux_Logo" style="width: 42px;" />  React-Redux *@7.2.5*

- Redux Toolkit *@1.6.1*

###### Styles
<img src="https://raw.githubusercontent.com/JakubMaslanka/Make-IT-Done/master/img/StyledComponents_Logo.png" alt="StyledComponents_Logo" style="width: 52px;" />  Styled-Components *@5.3.0*

###### Backend (other repository)
<img src="https://raw.githubusercontent.com/JakubMaslanka/Make-IT-Done/master/img/JWT_Logo.svg" alt="JWT_Logo" style="width: 42px;" />  Json Web Token *@8.5.1*

- Json-server *@0.16.3*
- Json-server-auth *@2.1.0*

###### Tests
<img src="https://raw.githubusercontent.com/JakubMaslanka/Make-IT-Done/master/img/Cypress_Logo.svg" alt="Cypress_Logo" style="width: 42px;" />  Cypress *@8.4.1*

###### Other libraries
- Eslint *@7.30.0*
- Moment *@2.29.1*
- React-calendar *@3.4.0*
- React-countdown-circle-timer *@2.5.3*
- React-loading-skeleton *@2.2.0*

## Presentation

[![Gif presentation, may take a long time to load](/img/Gif_Demo.gif)](/img/Gif_Demo.gif)

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). So the setup is pretty simple. Just make sure that on your local development machine is installed Node 14.0.0 or later version.

Then clone this repository and run the command:

`npm install`

When all dependencies are installed, run the command:

`npm start`

## Project Status

The project is **pre-completed**, the main functionalities it provides are complete. However, I have plans to develop the app in the future.

## Future Plans

Future Plans:

- Replace backend for dedicated Express server, handling API and user authentication. Currently, the project is based on JSON-server and JSON-server-auth. I'd like to abandon this solution and switch to my own backend.
- Add more information about the task completing progress. Statistics showing how much time we put into the specific task, activity graphs, and so on.
- Add the possibility of interaction between users. 
I'd like users to be able to send tasks among themselves or assign them to other logged-in users.

## Acknowledgements

- Part of Pomodoro Timer logic was based on [this tutorial](https://youtu.be/0PnSEPm2UKY).
- Many thanks to Michał Taszycki [@mehowte](https://github.com/mehowte) for code review, and improvement ideas. Also thanks to [@ritaly](https://github.com/ritaly) for this great README template. 😅

## Contact

Created by [@JakubMaslanka](https://github.com/JakubMaslanka) - feel free to contact me!
