import { useState, useEffect } from 'react';
import sound from '../sound/check_sound.wav';

export const useSoundEffect = () => {
  const [audio] = useState(new Audio(sound));
  const [playing, setPlaying] = useState(false);
  const toggle = (para) => setPlaying(para);
  // necessary to avoid console errors
  window.HTMLMediaElement.prototype.play = () => { };
  window.HTMLMediaElement.prototype.pause = () => { };

  useEffect(() => {
    if (playing) {
      audio.currentTime = 0.2;
      audio.play();
    } else {
      audio.pause();
    }
  },
  [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  return [toggle];
};
