# shipDuckU
> 애니메이션 팬들을 위한 각종 뉴스와 정보를 제공해 드립니다.
<br />

## 프로젝트 개요

### 1. 프로젝트 주제

- 뉴스처럼 빠르고 편하게 얻는 애니 정보

### 2. 메인/서브 기능

```markdown
1. User MVP: 로그인, 회원가입, 회원정보 수정, 회원 탈퇴
2. Search MVP: 키워드로 검색
3. Post MVP : 뉴스 / 정보 게시판
```

### 3. 프로젝트 팀원

| 이름   | 역할          |
| ------ | ------------- |
| 김서정 | 팀장 / 기획    |
| 최윤석 | 기획    |
| 김수현 | 풀스택    |
| 정혜주 | 풀스택 |

---

## 프로젝트 진행 규칙

### 1. 스크럼
- **open**: 10시 30분 - 할 일 notion에 적기
- **close**: 4시 30분 - 진행도, 이유

### 2. 코드 컨벤션

#### Front-end
- 변수, 함수 camelCase 사용, Class는 PascalCase 사용
- 상수는 Snack Case 활용해 대문자와 `_`를 사용

#### Back-end
- 변수, 함수 Snack Case 사용, Class는 PascalCase 사용
- 파일 구조는 MVC 패턴 따름
- Python은 기본적으로 PEP 8을 따름
- 문자열에선 기본적으로 `""`를 씀 (특수한 경우 제외)

## Branch 전략(Git Flow)

- **Main**: 제품으로 출시되는 브랜치
- **Develop**: 다음 출시 버전을 개발하는 브랜치, 여기서 개발한 후 메인으로 병합
- **Feature**: 기능을 개발하는 브랜치
- **Hotfix**: Main 브랜치에서 급하게 다이렉트로 수정할 때

### 커밋 메시지

- `type(타입): title(제목)`
- 제목 첫글자는 대문자로
- 제목 끝에 마침표 등 특수문자 X
- 제목은 명령문으로 사용, 과거형 X
- `type`은 아래 명시된 형태로

| Type 키워드 | 사용 시점 |
| ----------- | --------- |
| **feat**    | 새로운 기능 추가 |
| **fix**     | 버그 수정 |
| **docs**    | 문서 수정 |
| **style**   | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등) 기능 수정이 없는 경우 |
| **design**  | 사용자 UI 디자인 변경 (CSS 등) |
| **test**    | 테스트 코드, 리팩토링 테스트 코드 추가 |
| **refactor**| 코드 리팩토링 |
| **build**   | 빌드 파일 수정 |
| **ci**      | CI 설정 파일 수정 |
| **perf**    | 성능 개선 |
| **chore**   | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등) |
| **rename**  | 파일 혹은 폴더명을 수정만 한 경우 |
| **remove**  | 파일을 삭제만 한 경우 |
