This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

## npm install
Install all packages

## npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Main APP logic
The APP starts from "index.jsx", and it injects both "fetchDataContext" and "transactionsContext". They contain some of the app's logic and can be used by all <App /> children components.

In the "components" folder you'll find "userWallet", where it renders information about a specific user.
In the "core" folder are all the re-usable components.

I've added comments to explain what are some of the functions doing.

Test are still work in progress. I'm using Material UI styled components in this app, and for this reason I did't yet have time to fix the correct test configuration for Material UI components.