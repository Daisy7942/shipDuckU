import React from 'react';

function LoginButton({ onClick }) {
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '50px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#45a049';
    e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#4CAF50';
    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    e.target.style.transform = 'translateY(0)';
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      로그인
    </button>
  );
}

export default LoginButton;