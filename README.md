# Prototyping Take Home

There are two main platforms here. `frontend` and `backend`. You will be required to have node as well as npm or yarn to complete the following:

`frontend` is a Create React App (CRA) application with one current dependency: [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api).

`backend` is a nodeJS [express](https://www.npmjs.com/package/express) application with multiple dependencies which are set up for you to allow the `frontend` app to send JSON data via API.

Your goal is to do the following:
* Accept a string of latitude and longitude value from the input field in `frontend` that are comma seperated and send them to the express API endpoint supplied.
* Parse the latitutde and logitude values from the string and push the data back to the `frontend` via a websocket or [socket.io](https://www.npmjs.com/package/socket.io). Your choice.
* Once the `frontend` recieves the socket data, add a [`<Marker />`](https://react-google-maps-api-docs.netlify.app/#marker) to the corresponding lat, lng.

The goal is to demonstrate the ability to send state to the backend, mutate it, and send it back via websocket and handle the data accordingly. Feel free to add any libraries of your choosing to help you complete the assignment.

## Available Scripts

In the project directory, you can run:

### `cd backend && yarn`

Installs all of the required dependencies for the backend

### `cd frontend && yarn`

Installs all of the required dependencies for the frontend

### `cd frontend  && yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `cd backend && yarn dev`

Runs the app in dev mode as well.\
App should be available at [http://localhost:3333](http://localhost:3333)