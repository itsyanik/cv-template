# The Idea
The idea of making this came from the "Your CV must have one page at most" idea. I personally dislike writing my CV in Word or Google Docs, so I went with something that I feel comfortable with. I'm also not good when it comes to designing so I always stick to simple (but effective!) designs.

The original one was made with [VueJS](https://vuejs.org/) since I was studying it at the time. But after two years of working with [React](https://reactjs.org/) it just made it easier for maintenance to stick to it.

It was mainly for studying purposes, and this is why there is a lot of overkill but it was a fun project to do. I have personally tested this CV template and was able to land a job! Hope it can be of use for you too!

## About
Considering "Your CV must have one page at most" I made the body of the HTML to have the dimensions of an A4 Sheet, which is why the measurement is in centimeters. When working with this, you also have to keep in mind some marging for printing errors but those were kept in pixels because it is easier to work with. 

## Installing And Running
Here's what you need to have installed on your machine to be able to run this project:
 - [NodeJS](https://nodejs.org/en/)
 - - I highly recommend installing it from [NVM](https://github.com/nvm-sh/nvm)
 - [NPM](https://www.npmjs.com/)
 - [Git](https://git-scm.com/downloads)

 After that, clone this repo and access it's folder from the `Git Bash` terminal and run `npm install` to insall all the dependencies. After they're sucessfully installed, simply run `npm run start` and access the given url.

 Now all you have to do is to change the mock data with your data! Data is in `src/App.tsx`.

 ### Todo
 - Move data from components to JSON and fetch from there
 - Think of new layouts
