# Currency Conversion

# Introduction
This is a simple currency conversion application that allows users to convert between different currencies.
You can find a live demo of the application [here](https://stavrostomas.eu/currency-conversion/).

# Technologies and APIs used
The application uses the [ExchangeRate-API](https://api.currencybeacon.com/) to get the latest exchange rates.

While this application could be built with simpler technologies, it has been intentionally designed with a more sophisticated tech stack to demonstrate the capabilities of a larger web application.

- `Vite` as the build tool
- `Node`, make sure you have the correct Node version. This application uses Node version 20.18.0.
You can use `nvm` to manage your Node versions. After you have the correct node version, you can run `nvm use 20.18.0` to use the correct version.
- `React` for the frontend
- `TypeScript` for static type checking
- `Material-UI`, a popular React component library to take advantage of the pre-built components
- `TailwindCSS`, a utility-first CSS framework to style the application
- `PostCSS`, a tool for transforming CSS with JavaScript plugins

# Installation
A working version of the app can be found on the link mentioned in the introduction section.
If nevertheless you would like to install it in your local machine please follow the next steps.

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create your own API key from [https://currencybeacon.com](https://currencybeacon.com/register) and use it to replace the `VITE_SECRET_CURRENCY_BEACON_API_KEY` in the `.env` file
4. Run `npm start` to start the application

# Further Improvements
While the application is functional, there are several enhancements that can be made to improve it further.
These improvements are beyond the scope of this technology demonstrator, but you are encouraged to explore and implement them on your own.

1. At the moment the app uses dotenv for communicating the value of the `.env` file to the react app. This is not secure as the API key is exposed to the client and should not be used in a production environment.
You can improve this by adding a simple BFF (Backend for Frontend) to handle the API requests. In this way, the API key will not exposed to the client.
2. Currently it is possible you can format wrongly the amounts and make an invalid request to the API. It would also be nice to adjust the presicion(amount of decimal points). For both of these can be fixed by using the powerful and nowdays widely supported browser's built in Intl API. No need for any fancy external libraries nor any need to use the api.currencybeacon api for this. You can read more about it in the MDN docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
3. We should debounce the fetch requests so we don't spam the API.
4. We can improve the UI by adding loading states
5. We can add a toaster notification in case of an error to inform the user when something is wrong.
6. We can add to the select dropdowns a search functionality to make it easier for the user to find the currency they are looking for.
7. In a production application we should have alerts(i.e Sentry) and monitoring(i.e prometheus) in place to monitor the application and be aware of any issues that might arise.
8. Increase the coverage of tests and why not introduce integration tests with Playwright/Cypress.
9. 🚀 Sky is the limit! 🚀
