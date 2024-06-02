# ECOMEANS

> 경제 용어 + 기사 사이드 프로젝트

## 목차

- [프로젝트 소개](##프로젝트 소개)

## 프로젝트 소개

### Package

| Skill         | Version | Note              |
| ------------- | ------- | ----------------- |
| Node          | 20.xx   |                   |
| PNPM          | 9.xx    | 패키지 설치 관리  |
| React         | 18.xx   |                   |
| React Router  | 6.xx    | SPA 라우팅        |
| React Cookie  | 7.xx    | 쿠키 관리         |
| Zustand       | 4.xx    | 상태 관리         |
| Apollo Client | 4.xx    | GraphQl 상태 관리 |
| GraphQL       | 16.xx   |                   |
| Tailwind CSS  | 3.xx    |                   |
| Sass(SCSS)    | 1.xx    |                   |

### Command Line

```bash
 # 로컬 프로젝트 실행
 $ pnpm dev

 # 로컬 빌드
 $ pnpm start

 # 배포 빌드
 $ pnpm build
```

### SSL 인증서 발급

```
$ mkdir cert
$ cd cert

# mkcert 설치
# mac Os
$ brew install mkcert
# windows
$ choco install mkcert

# 로컬 인증 기관 등록
$ mkcert -install

# 인증서 생성
$ mkcert localhost
```

### Directory

```
.
├── public
└── src
   ├── components    // 재사용 컴포넌트
   │  └── common     // 공통 사용 컴포넌트
   ├── apollo        // GraphQL 상태관리
   ├── pages         // 페이지 컴포넌트
   ├── router        // 페이지 라우터
   ├── sass          // Sass(SCSS) 스타일
   ├── store         // zustand 상태 관리
   ├── graphql       // GraphQL query
   ├── App.tsx
   └── index.tsx
```
