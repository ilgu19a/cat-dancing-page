import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  const toggle = useCallback(() => setIsPlaying(p => !p), []);
  const changeSpeed = useCallback((s) => setSpeed(s), []);

  return { isPlaying, speed, toggle, changeSpeed };
}
