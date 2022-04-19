# React MOVIE APP

1.기술
 - html
 - css
 - react.js
 
<br/>


2.배운점
 - 영화 API : API 두번째 도전! object를 만들어 API에서 제공하는 정보를 확인하고 영화값에 입력해서 출력했다.
 - switch -> routes 변경 : 만들다가 버전 업그레이드를 시켰다. route 부모역할을 하던 스위치를 routes로 변경해주는 작업을 했다.
 - react-player : 리액트 라이브러리 중에 찾아냈다. `npm i react-player` 로 설치하고 페이지에 유튜브 트레일러를 넣었다.
 - git 사용법 : 나는 깃 데스크탑을 사용하여 푸시를 사용했었다. 이번엔 과감히 데스크탑을 버리고, 터미널을 통해 푸시를 진행하였다. 
 - 배포과정 : git 다른 브런치가 생성되며(메인 브런치 x) `npm run deploy` 를 통해 빌드되어야 하는데 이 과정에서 많은 오류를 경험할 수 있었다. 
    - 첫 번째 오류 : 인덱스 빈화면 : 콘솔에 뜬 오류는 경로오류였다. 그러나 컴포넌트 경로는 아주 잘 잡혀있었고. 하는 수 없이 오류를 복사해서 구글에 검색했다. 내가 사용한 방법은 빌드한 index.html 안의  `/static` 를 `./static` 로 수정해주는 작업과, app.js 파일에 `basename={process.env.PUBLIC_URL}` 를 넣어주는 작업을 통해 인덱스를 띄울 수 있었다. 
    - 두 번째 오류 : 깃 배포가 아예 안 먹힘. 이건 맥북의 문제였다. 맥에 터미널 깃 용어를 사용할 수 있게 패치했다.
    
<br/>
3.결과물

http://7uckystrike.github.io/movie_app/
