const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const NaverStrategy = require('passport-naver').Strategy;
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(passport.initialize());

// Google 전략 설정
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // 사용자 정보 처리
    return cb(null, profile);
  }
));

// Kakao 전략 설정
passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_CLIENT_ID,
    callbackURL: "http://localhost:5000/auth/kakao/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // 사용자 정보 처리
    return cb(null, profile);
  }
));

// Naver 전략 설정
passport.use(new NaverStrategy({
    clientID: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/naver/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // 사용자 정보 처리
    return cb(null, profile);
  }
));

// 로그인 라우트
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/kakao', passport.authenticate('kakao'));
app.get('/auth/naver', passport.authenticate('naver'));

// 콜백 라우트
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000');
  });

app.get('/auth/kakao/callback', 
  passport.authenticate('kakao', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000');
  });

app.get('/auth/naver/callback', 
  passport.authenticate('naver', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));