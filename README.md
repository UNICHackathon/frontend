# Chat Bot React App

This project was bootstrapped with Create React App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
Optimizes the build for the best performance.

### `npm run eject`

**Note: This is a one-way operation.**\
Ejecting gives you full control over the build configuration.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## License

MIT

## Example to call to API function from express

Make sure to have dependencies such as: 
Install dependencies:
```
npm install express axios cors dotenv
```
Make sure to have a .env.local file with these params:
```
# Backend Server URL
REACT_APP_API_URL=http://localhost:5000/api/boc

# API Endpoints (Optional)
REACT_APP_ACCOUNT_ENDPOINT=/account
REACT_APP_BALANCE_ENDPOINT=/balance
REACT_APP_TRANSACTION_ENDPOINT=/transaction

# Other Optional Variables
REACT_APP_ENV=development
REACT_APP_DEFAULT_JOURNEY_ID=3802988197969920
REACT_APP_DEFAULT_SUBSCRIPTION_ID=31.204.105.234
```
Example usage:
```
const API_URL = process.env.REACT_APP_API_URL;
const ACCOUNT_ENDPOINT = process.env.REACT_APP_ACCOUNT_ENDPOINT;
const BALANCE_ENDPOINT = process.env.REACT_APP_BALANCE_ENDPOINT;
const TRANSACTION_ENDPOINT = process.env.REACT_APP_TRANSACTION_ENDPOINT;

// Example usage to fetch account details
export const getAccountDetails = async (accountId, token) => {
  try {
    const response = await fetch(`${API_URL}${ACCOUNT_ENDPOINT}/${accountId}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch account details');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
```
Start the server:
```
node server.js
```
