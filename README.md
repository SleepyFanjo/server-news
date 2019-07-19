# Server news

This project is a small web app that displays a minecraft server status (up/down, version, connected players) aswell as an interactive map in background.

Frontend done with React + SASS
Api server with node and using the MtxServer API

## Resources

- Live version deployed on heroku : server-news.herokuapp.com

- Static version with mock data : sleepyfanjo.github.io/server-news/

## Get started

You'll need `node` and `yarn` installed

### Installation
Run `yarn install` to install the dependencies.

By default and for development purpose, all API calls are mocked. You can modify the data for testing in `src/js/data/mock/server-status.json`

If you need to turn on the live API you need a MTXServ account, with client_id, client_secret and api_token.

### Running

#### client
Run `yarn start` to run a development webserver, by default it runs on `localhost:3000`

#### optional api server (require setup described in "Installation")
- Create a `credentials.json` file with this data :
```
{
    'client_id': 'YOURID',
    'client_secret': 'YOURSECRET',
    'api_key': 'YOUR_API_KEY'
}
```
- Turn on live api mode in `src/js/data/fetchData.js` and modify the line from 
```const SELECTED_FETCH_MODE = FETCH_MODES.mock```
to
```const SELECTED_FETCH_MODE = FETCH_MODES.url```

- Run `yarn server` to run the node API server