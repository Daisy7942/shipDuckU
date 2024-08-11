import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // App 컴포넌트를 import

// ReactDOM.createRoot를 사용하여 루트 엘리먼트에 App 컴포넌트를 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);