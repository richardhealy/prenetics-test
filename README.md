# Prenetics Test

Pulls in weather from openweathermap.org based on city location or lat / lon.

Decisions:

- Used redux and redux saga because it separates code with side effects nicley
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

### Setup

- Run: `yarn install`
- Start: `yarn start`

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

