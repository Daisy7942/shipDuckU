import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Strategy as NaverStrategy } from 'passport-naver';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 환경 변수 로드
dotenv.config();

const app = express();

// CORS 설정
app.use(cors({
  origin: 'http://localhost:3000', // React 앱의 주소
  credentials: true // 쿠키를 주고받을 수 있게 설정
}));

// 세션 미들웨어 설정
app.use(session({
  secret: 'your_session_secret', // 세션을 암호화하기 위한 키 (변경 필요)
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000 // 쿠키 유효기간 1일
  }
}));

// Passport 초기화 및 세션 연결
app.use(passport.initialize());
app.use(passport.session());

// Passport 세션 설정
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google 전략 설정
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

// Kakao 전략 설정
passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_CLIENT_ID,
    callbackURL: "http://localhost:5000/auth/kakao/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
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
    return cb(null, profile);
  }
));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../public')));

// 로그인 라우트
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/kakao', passport.authenticate('kakao'));
app.get('/auth/naver', passport.authenticate('naver'));

// 콜백 라우트
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000');
  }
);

app.get('/auth/kakao/callback', 
  passport.authenticate('kakao', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000');
  }
);

app.get('/auth/naver/callback', 
  passport.authenticate('naver', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000');
  }
);

// 모든 GET 요청에 대해 index.html 제공
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));