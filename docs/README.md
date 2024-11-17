# Currency Conversion
This is a simple currency conversion application that allows users to convert between different currencies.

The application uses the [ExchangeRate-API](https://api.currencybeacon.com/) to get the latest exchange rates.

# Technologies used
This application can be build using much simpler technologies,
however as a technology demonstrator, you will find things admittedly are a bit more spiced up to reflect the tech stack of a bigger web app.

- `Vite` as the build tool
- `Node`, make sure you have the correct Node version. This application uses Node version 20.18.0.
You can use `nvm` to manage your Node versions. After you have the correct node version, you can run `nvm use 20.18.0` to use the correct version.
- `React` for the frontend
- `TypeScript` for static type checking
- `Material-UI`, a popular React component library to take advantage of the pre-built components
- `TailwindCSS`, a utility-first CSS framework to style the application
- `PostCSS`, a tool for transforming CSS with JavaScript plugins

# Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create your own API key from [https://currencybeacon.com](https://currencybeacon.com/register) and use it to replace the `VITE_SECRET_CURRENCY_BEACON_API_KEY` in the `.env` file
4. Run `npm start` to start the application

# Further Improvements
While the application is functional, there are a few improvements that can be made to make it better but is out of the scope of this technology demonstrator. Feel free to play around and implement them.

1. At the moment the app uses dotenv npm package for communicating the value of the `.env` file to the react app. This is not secure as the API key is exposed to the client and should not be used in a production environment.
You can improve this by adding a simple BFF (Backend for Frontend) to handle the API requests. In this way, the API key will not exposed to the client.
2. Currently it is possible you can format wrongly the amounts and make an invalid request to the API. The users as well is not necessary to see all the digits of the conversion it would be nice to adjust the presicion. For this You can improve further the amount inputs by creating a utility function that formats the numbers according to User locale and the currency. You can do this by using the powerful and nowdays widely supported browser's built in Intl API. No need for any fancy external libraries. You can read more about it in the MDN docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
3. We should debounce the fetch requests so we don't spam the API.
4. We can improve the UI by adding loading states and a toaster notification in case of an error to inform the user when something is wrong.
5. We can add to the select dropdowns a search functionality to make it easier for the user to find the currency they are looking for.
6. In a production application we should have alerts(i.e Sentry) and monitoring(i.e prometheus) in place to monitor the application and be aware of any issues that might arise.
