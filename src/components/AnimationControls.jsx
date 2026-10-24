const SPEEDS = [
  { label: '느리게', value: 0.5 },
  { label: '보통', value: 1 },
  { label: '빠르게', value: 2 },
];

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      marginTop: '32px',
    }}>
      <button
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        style={{
          padding: '14px 40px',
          fontSize: '1.1rem',
          fontWeight: 700,
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          background: isPlaying
            ? 'linear-gradient(135deg, #e94560, #c23152)'
            : 'linear-gradient(135deg, #2d6a4f, #1b4332)',
          color: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => { e.target.style.transform = 'scale(1.07)'; }}
        onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
      >
        {isPlaying ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>

      <div style={{ display: 'flex', gap: '10px' }}>
        {SPEEDS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => onSpeedChange(value)}
            aria-pressed={speed === value}
            style={{
              padding: '8px 18px',
              fontSize: '0.9rem',
              border: '2px solid',
              borderColor: speed === value ? '#e94560' : '#444',
              borderRadius: '20px',
              cursor: 'pointer',
              background: speed === value ? '#e94560' : 'transparent',
              color: speed === value ? 'white' : '#aaa',
              transition: 'all 0.2s',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
