export const urls = {
  status: () => ({
    url:
      'https://mtxserv.com/api/v1/viewers/game?type=minecraft&ip=game-fr-10.mtxserv.com&port=27180',
    mock: 'server-status'
  }),
  news: () => ({
    url: '/news',
    mock: 'news'
  })
}
