const request = require('request')
const { promisify } = require('util')
const credentials = require('./credentials.json')

const rp = promisify(request)

// closure that updates the server status every 5min and returns it whenever asked
const statusListener = () => {
  let status = null

  setInterval(() => {
    getStatus()
    .then(data => {
      status = data
    })
  }, 5000 * 60) // Update status every 5min

  return () => {
    if (status) {
      return Promise.resolve(status)
    }
    return getStatus()
    .then(data => {
      status = data
      return data
    })
  }
}

// Get the status from the mtx server api
const getStatus = () => {
  return getToken()
  .then((token) => {
    const { access_token } = token

    return rp(`https://mtxserv.com/api/v1/viewers/game?type=minecraft&ip=game-fr-10.mtxserv.com&port=27180&access_token=${access_token}`, { json: true })
  })
  .then(data => {
    return data.body
  })
  .catch(err => {
    res.json({})
  })
}

// Get API token to use the mtx server api
const getToken = () => {
  const urlToken = 'https://mtxserv.com/oauth/v2/token';

  const query = {
    grant_type: 'https://mtxserv.com/grants/api_key',
    client_id: credentials.client_id,
    client_secret: credentials.client_secret,
    api_key: credentials.api_key
  }

  return rp(`${urlToken}?grant_type=${query.grant_type}&client_id=${query.client_id}&client_secret=${query.client_secret}&api_key=${query.api_key}`, {json: true})
  .then((res) => {
    return res.body
  })
}

module.exports = {
  statusListener
}
