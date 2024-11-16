# Currency Conversion
This is a simple currency conversion application that allows users to convert between different currencies.

The application uses the [ExchangeRate-API](https://api.currencybeacon.com/) to get the latest exchange rates.

# Technologies used
- `Vite` as the build tool
- `Node`, make sure you have the correct Node version. This application uses Node version 20.18.0.
You can use `nvm` to manage your Node versions. After you have the correct node version, you can run `nvm use 20.18.0` to use the correct version.
- `React` for the frontend
- `TypeScript` for static type checking
- `Material-UI`, a popular React component library that in this case was useful to create the app without spending too much time on individual components creation.

# Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create your own API key from [https://currencybeacon.com](https://currencybeacon.com/register) and use it to replace the `API_KEY` in the `.env` file
3. Run `npm start` to start the application
