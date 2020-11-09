import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Close, Button } from './styles/player';

export const PlayerContext = createContext<any | null>(false);

export interface IPlayerProps {
  children: React.ReactNode;
}

export default function Player({ children, ...restProps }: IPlayerProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }: any) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body,
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }: any) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => setShowPlayer((showPlayer: any) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};
