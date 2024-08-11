import React from 'react';

function Login() {
  return (
    <div>
      <h2>소셜 로그인</h2>
      <button onClick={() => window.location.href='http://localhost:5000/auth/google'}>
        Google 로그인
      </button>
      <button onClick={() => window.location.href='http://localhost:5000/auth/kakao'}>
        Kakao 로그인
      </button>
      <button onClick={() => window.location.href='http://localhost:5000/auth/naver'}>
        Naver 로그인
      </button>
    </div>
  );
}

export default Login;