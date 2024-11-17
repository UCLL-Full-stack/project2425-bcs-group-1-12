import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#000',
        color: '#C2FF9C',
        padding: '40px 20px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Newsletter Section */}
        <div style={{ flex: 1, marginRight: '20px', textAlign: 'left' }}>
          <h3 style={{ marginBottom: '4vh' }}>Subscribe to our newsletter for the latest updates</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="email"
              placeholder="real.hero@gmail.com"
              style={{
                padding: '10px',
                backgroundColor: '#222',
                border: '2px solid #C2FF9C',
                borderRadius: '5px',
                color: '#C2FF9C',
                outline: 'none',
                flex: 1,
                marginRight: '10px',
                fontSize: '14px',
              }}
            />
            <button
              style={{
                backgroundColor: 'red',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Done
            </button>
          </div>
        </div>

        {/* About Us Section */}
        <div
          style={{
            flex: 1,
            textAlign: 'left',
            marginBottom: '20px',
            marginLeft: '13vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Выровнять все элементы по левой линии
          }}
        >
          <h3 style={{ marginBottom: '4vh' }}>About us</h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              lineHeight: '2em',
            }}
          >
            <li><a href="#donate" style={{ color: '#C2FF9C', textDecoration: 'none' }}>Donate</a></li>
            <li><a href="#volunteer" style={{ color: '#C2FF9C', textDecoration: 'none' }}>Volunteer</a></li>
            <li><a href="#terms" style={{ color: '#C2FF9C', textDecoration: 'none' }}>Terms of services</a></li>
            <li><a href="#privacy" style={{ color: '#C2FF9C', textDecoration: 'none' }}>Privacy policy</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div style={{ flex: 1, marginLeft: '20px', textAlign: 'right' }}>
          <h3 style={{ marginBottom: '4vh' }}>Follow us</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', marginRight: '4vw' }}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linked-in.png" alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.png" alt="YouTube" style={{ width: '47px', height: '30px' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>©Rohignya Organization. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
