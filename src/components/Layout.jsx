export default function Layout({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      backgroundSize: '300% 300%',
      animation: 'bg-pulse 8s ease infinite',
      padding: '20px',
    }}>
      <h1 style={{
        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
        fontWeight: 800,
        marginBottom: '8px',
        background: 'linear-gradient(90deg, #e94560, #f4a261, #a8edea)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      }}>
        🐱 댄싱 냥이
      </h1>
      <p style={{ color: '#a0a0b0', marginBottom: '40px', fontSize: '0.95rem' }}>
        고양이가 신나게 춤을 춥니다!
      </p>
      {children}
    </div>
  );
}
