# Prenetics Test

Pulls in weather from openweathermap.org based on city location or lat / lon.

### Demo: 

(https://prenetics-test.firebaseapp.com/)[https://prenetics-test.firebaseapp.com/]

### Decisions:

- Used React (with Hooks), redux and redux saga because it separates code with
  side effects nicely.
- If I had more time, I would break down Home component into smaller chunks as 
  I prefer to aim for Components that are around 50 lines of code for clarity
  and testings  purposes.
- Most functions are separated out of the Component. Decoupling them  makes it
  easier to test.
- Some tests can be found in `./src/components/Pages/Home/funcs/` so you can 
  see that I've thought about this. Given more time, I would concentrate on
  writing a lot more.
- The Location plug was developed as a HOC, that can be wrapped around any 
  component that needed it. `./src/components/hoc`
- Also includes React.lazy and Suspense. I would extend this out to use a 
  better loading component for production.
- I've also left the API key in `./src/api.js`. I would want to move this
  into a config if I had more time.

### Setup

- Run: `yarn install`
- Start: `yarn start`

### Uses:

- react (^16.9.0)
- redux (^7.1.0)
- redux-saga (^1.0.5)

### Includes: 

- superagent (^5.1.0) 
- file-loader (4.2.0) 
- connected-react-router (^6.5.2)
- Simple folder structure to quick project start
- Pages Lazy loading out-the-box
- Initially created  with CRA

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

