[![nodejs-react-app](https://circleci.com/gh/nelltqf/nodejs-react-app.svg?style=shield)](https://app.circleci.com/pipelines/github/nelltqf/nodejs-react-app)

# nodejs-react-app

This is a test project to play around NodeJS and React. No meaning intended.

## How to 

To build:
`npm install`

To run backend:
`node server/src/app.js`

To run frontend:
`npx webpack`

Serves at localhost:3000 by default
To turn off the automatic updates on FE, go to `webpack.config.js` and set `module.exports.watch` to false (unless I already changed everything and forgot to update the readme, of course)
