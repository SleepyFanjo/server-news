import React, { useEffect, useState } from 'react'
import useApi from 'js/hooks/useApi'
import path from 'ramda/src/path'

import LoadableText from 'js/components/LoadableText'
import minecraftIcon from 'assets/minecraft.ico'

const ressource = { urlKey: 'status' }

const StatusCard = ({ display }) => {
  let { data, loading } = useApi(ressource)
  let [wrapperHidden, setWrapperHidden] = useState(!display)

  useEffect(() => {
    if (display === true) {
      setWrapperHidden(false)
    } else {
      setTimeout(() => {
        setWrapperHidden(true)
      }, 400)
    }
  }, [display])

  if (!data) {
    data = {}
  }

  let players = path(['params', 'players'], data) || []

  return (
    <div className={`StatusCard__wrapper ${wrapperHidden ? 'hidden' : ''}`}>
      <div
        className={`StatusCard__container ${loading ? 'loading ' : ''}${
          data.is_online ? 'online' : 'offline'
        } ${display ? '' : 'hidden'}`}
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
                  alt="Minecract version"
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
                    face
                  </i>
                }
                text={player.player}
              />
            ))}
          </div>
        </div>
        <div className="StatusCard__infos">
          <div className="StatusCard--title">
            <LoadableText loading={loading}>
              Ouais super, y'a plus de serveur vanilla pour l'instant parce que
              on jouait plus. <br />
              <br />
              Je vais mettre la map en téléchargement bientôt ici pour ceux qui
              veulent continuer la map en solo
              <br />
              <br />
              Ca c'est mon serveur Ragnamod 5, si vous voulez venir viendez. Si
              vous voulez un autre modpack ca peut se négocier :D
              <br />
            </LoadableText>
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
