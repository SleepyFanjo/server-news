import React from 'react'
import useApi from 'js/hooks/useApi'

import LoadableText from 'js/components/LoadableText'

const ressource = { urlKey: 'status' }

const StatusCard = () => {
  let { data, loading } = useApi(ressource)
  if (!data) {
    data = {}
  }

  return (
    <div className="StatusCard__wrapper">
      <div
        className={`StatusCard__container ${loading ? 'loading' : ''} ${
          data.is_online ? 'online' : 'offline'
        }`}
      >
        <div className="StatusCard--title">
          <LoadableText loading={loading}>
            {data.ip}:{data.port}
          </LoadableText>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
