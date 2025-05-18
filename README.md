# nextjs-task-template

Next.js(App Router) 기반의 프론트엔드 과제 템플릿입니다.  
TailwindCSS, Zustand, React Query 등 실무에서 자주 사용되는 스택을 미리 구성하여 빠르게 개발을 시작할 수 있습니다.

## 🚀 기술 스택

| 범주             | 사용 기술                         |
| ---------------- | --------------------------------- |
| 기본 세팅        | Next.js (App Router) + TypeScript |
| 스타일링         | TailwindCSS                       |
| 상태관리         | Zustand                           |
| 데이터 패칭/캐싱 | React Query                       |
| HTTP 통신        | Axios                             |
| 라우팅           | App Router                        |
| 배포             | Vercel                            |

## 📁 폴더 구조

```plaintext
src/
┣ app/                   # App Router 페이지 구조
┃ ┣ layout.tsx           # 루트 Layout (Provider, 공통 레이아웃)
┃ ┣ page.tsx             # 홈 페이지
┃ ┗ (routes)/            # 라우팅 그룹 디렉토리
┣ components/            # 공통 UI 컴포넌트
┃ ┗ ui/                  # 디자인 시스템 기반 구성
┣ features/              # 도메인별 기능 단위 (예: community, product)
┃ ┗ community/
┃   ┣ components/
┃   ┣ hooks/
┃   ┣ api.ts
┃   ┗ types.ts
┣ stores/                # Zustand 전역 상태
┣ hooks/                 # 공통 커스텀 훅
┣ services/              # Axios 인스턴스 등 API 유틸
┣ types/                 # 전역 타입
┣ styles/                # Tailwind 및 전역 스타일
┣ constants/             # 상수 모음
┗ utils/                 # 공통 유틸 함수
```

## 🌿 브랜치 전략

이 프로젝트는 다음과 같은 브랜치 구조 및 명명 규칙을 따릅니다.

### 📌 기본 브랜치

| 브랜치명  | 설명                       |
| --------- | -------------------------- |
| `main`    | 최종 제출 및 배포용 브랜치 |
| `develop` | 기능 개발 통합 브랜치      |

### 🛠️ 작업 브랜치 규칙

| 타입      | 네이밍 예시             | 설명                            |
| --------- | ----------------------- | ------------------------------- |
| 초기 세팅 | `chore/init-project`    | 프로젝트 세팅 및 공통 구조 구성 |
| 기능 구현 | `feat/community-list`   | 기능별 도메인 구현              |
| 제출 준비 | `release/final-cleanup` | 제출 전 코드 정리 및 리팩터링   |

## 🛠 사용법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 🌐 배포

Vercel을 통해 자동 배포됩니다.
main 브랜치에 머지 시 production 배포가 트리거됩니다.
