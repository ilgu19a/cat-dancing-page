import { useState, useEffect, useRef } from 'react';
import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const NOTES = ['♪', '♫', '♬', '🎵', '🎶'];
const COLORS = ['#e94560', '#f4a261', '#a8edea', '#fed9b7', '#ff6b8a'];

function MusicNote({ id, onDone }) {
  const note = NOTES[id % NOTES.length];
  const color = COLORS[id % COLORS.length];
  const left = 30 + (id * 37) % 140;

  return (
    <span
      style={{
        position: 'absolute',
        left: `${left}px`,
        bottom: '220px',
        color,
        fontSize: `${1.2 + (id % 3) * 0.4}rem`,
        animation: 'float-note 1.4s ease-out forwards',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      onAnimationEnd={onDone}
    >
      {note}
    </span>
  );
}

export default function DancingCat({ isPlaying, speed }) {
  const [notes, setNotes] = useState([]);
  const noteId = useRef(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const id = noteId.current++;
      setNotes(prev => [...prev, id]);
    }, 600 / speed);
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const removeNote = (id) => setNotes(prev => prev.filter(n => n !== id));

  const duration = `${1.2 / speed}s`;

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '200px' }}>
      {notes.map(id => (
        <MusicNote key={id} id={id} onDone={() => removeNote(id)} />
      ))}
      <img
        src={catSvg}
        alt="댄싱 고양이"
        width={200}
        height={220}
        className={isPlaying ? 'dancing' : 'idle'}
        style={isPlaying ? { animationDuration: duration } : {}}
      />
    </div>
  );
}
