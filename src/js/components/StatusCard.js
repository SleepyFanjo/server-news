import React from 'react'
import useApi from 'js/hooks/useApi'
import path from 'ramda/src/path'

import LoadableText from 'js/components/LoadableText'
import minecraftIcon from 'assets/minecraft.ico'

const ressource = { urlKey: 'status' }

const StatusCard = () => {
  let { data, loading } = useApi(ressource)
  if (!data) {
    data = {}
  }

  let players = path(['params', 'players'], data) || []

  return (
    <div className="StatusCard__wrapper">
      <div
        className={`StatusCard__container ${loading ? 'loading ' : ''}${
          data.is_online ? 'online' : 'offline'
        }`}
      >
        <div className="StatusCard--title">
          <LoadableText loading={loading}>
            {data.ip}:{data.port}
          </LoadableText>
        </div>
        <div className="StatusCard--status">
          <LoadableText loading={loading}>
            {data.is_online ? 'Online' : 'Offline'}
          </LoadableText>
        </div>
        <div className="StatusCard__infos">
          <div className="StatusCard__infos--left">
            <div className="StatusCard__infos--title">Infos</div>
            <InfoItem
              loading={loading}
              icon={
                <img
                  className="StatusCard__infoItem--icon"
                  src={minecraftIcon}
                />
              }
              text={path(['params', 'version'], data)}
            />
            <InfoItem
              loading={loading}
              icon={
                <i className="material-icons StatusCard__infoItem--icon">
                  account_box
                </i>
              }
              text={`${path(['params', 'used_slots'], data)}/${path(
                ['params', 'max_slots'],
                data
              )}`}
            />
          </div>
          <div className="StatusCard__infos--right">
            <div className="StatusCard__infos--title">Joueurs Connectés</div>
            {players.map((player, index) => (
              <InfoItem
                key={index}
                icon={
                  <i className="material-icons StatusCard__infoItem--icon">
                    {player.player === 'Bloper' ? 'accessible' : 'face'}
                  </i>
                }
                text={player.player}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const InfoItem = ({ loading, icon, text }) => (
  <div className="StatusCard__infoItem">
    {icon}
    <div className="StatusCard__infoItem--text">
      <LoadableText loading={loading}>{text}</LoadableText>
    </div>
  </div>
)

export default StatusCard
