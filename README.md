# 반응형 웹사이트 만들기 실습
- 프로젝트 설명 및 후기 : https://smallgarden.netlify.app/resources/project/%EB%B0%98%EC%9D%91%ED%98%95%20%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0/
- 기간 : 2024/01/17 ~ 2024/01/23 (7일)
- 목표 : HTML, CSS, Javascript, Bootstrap을 사용해서 반응형 웹 페이지를 만든다.
- 인원 : 1명

| 환경        | 내용                    |
| --------- | --------------------- |
| OS        | Window 11             |
| 언어        | HTML, CSS, Javascript |
| IDE       | Visual Studio Code    |
| Framework | Bootstrap             |


## 레이아웃 구상
- 실제 구현은 초기 구상도에서 많이 변경되었다.
	- 로그인 항목을 section으로 분리하지 않고 header로 옮겼으며, menu bar 외의 gnb를 하나 더 추가해서 커뮤니티 전체 목록을 볼 수 있도록 변경했다.
	- 평가 기준 중 section의 수가 4개 이상이어야 했기에 section을 게임 뉴스, 인기글, 새로 추가된 글, 게임 평가로 다시 설계했다.
	- 광고 구역을 넣기엔 다른 컨텐츠를 넣는 구역을 배정하기에도 너무 좁아서 구현할 땐 삭제했다.
	- section 3 인기글과 section 4 새로 추가된 글에 menu를 넣을 계획이었으나, gnb를 따로 생성하면서 각 section에 들어가는 menu는 제거했다.

## 섹션별 주제
- header : 로고, 검색창, 사이트 메뉴바, 전체메뉴, 로그인
	- 로고
	- 검색창
	- 사이트 메뉴바 : 게임1, 게임2, 게임3, 게임4
	- 전체메뉴
	- 로그인 버튼
- visual : 게임 이미지
- section1 : 게임 뉴스
	- 글 : 새 게임 기사 및 소식
- section2 : 인기글
	- 글 : 카테고리별 인기 글(아티클 형식)
- section3 : 새로 추가된 글
	- 글 : 카테고리별 신규 글(아티클 형식)
- section4 : 게임 평가
	- 평점
	- 평가
- footer : 로고, 회사 소개

## 개인 소감
- 건강 상의 이유로 Bootstrap 수업 내용을 듣지 못해 혼자서 Bootstrap 레이아웃을 대략적으로만 작성한 상태로 시작해서 후반에 레이아웃을 다시 수정하는데 오래 걸렸고 어려웠다.
	- 공식 사이트를 보고 작성했는데도 section 별 형식이 맞지 않거나, flex-box 설정을 할 때 css에서 미디어 쿼리로만 작성했다가 나중에 class에 작성하는 것을 알아서 수정을 전부 다시 했다.
	- 특히 시간이 많이 부족했기 때문에 반응형 부분들을 breakpoint별로 상세하게 확인하지 못해서 페이지를 많이 줄이면 화면 배치가 예상보다 많이 일그러졌다.
- 주제 선정 역시 수업을 결석해서 어떤 주제로 해야 하는지 구체적으로 듣지 못했었다. 그래서 주말에 뒤늦게 시작할 때 개인 주제로 설정해서 레이아웃과 디자인을 작성할 때 여러 커뮤니티 사이트를 참조해서 작성하느라 구조도 엉망이었고 디자인도 깔끔하지 못했다.
- Bootstrap으로 반응형을 만들 때 미디어 쿼리에 breakpoint별로 일일이 지정하던 것과 다르게 container 구조와 class만 잘 작성하면 알아서 wrap 등이 적용되어 편리했지만, 일부 반응형은 원하는 대로 수정하는 방법을 몰라서 화면을 줄일 때 박스들 크기와 배치의 일관성이 많이 망가졌다.
- header와 전체 메뉴를 작성할 때가 가장 어려웠다.
	- header는 Bootstrap 레이아웃을 사용해서 각 기능들을 수평 배치했는데, 이 수평 배치 때 position 속성을 사용할 때 원하는 위치에 배치가 잘 안되서 어려웠다.
	- 결국 배치가 꼬여서 전체 메뉴를 header의 바로 하위 항목으로 빼서 왼쪽으로 배치했고, 페이지 너비를 줄였을 때 로고와 로그인 버튼과의 배치를 그나마 수평선 상에 둘 수 있도록 했었다.
- visual은 여러 웹 페이지에서 자동으로 사진이 넘어가는 기능을 추가했기에 관련 기능을 검색해서 swiper로 사용했다. visual에 사용한 기능이 게임 평가 section에도 사용하면 좋을 것 같아서 게임 평가도 자동으로 넘어가는 박스로 설정했다.
- 여러 사이트의 내용들을 조합하고 게임 로고와 사진, 기사 사진 외에는 다른 이미지를 넣지 못해 웹 페이지 전체 디자인은 다른 기능보단 그냥 그라데이션이나 단색으로만 채워서 부실해 보인다. (디자인과가 아니라서 이건..)

---------------
## 참고 사이트
- 사진 자료 : google image 검색, IGN ( https://kr.ign.com/ )
- p 줄바꿈 : https://myhappyman.tistory.com/169
- 글자 테두리 지정 : https://yam-cha.tistory.com/162
- footer 하단에 고정: https://jineecode.tistory.com/103
- web 효과 : https://wsss.tistory.com/
- 반응형 2차 메뉴바 : https://me-in-journey.com/entry/HTMLCSS-%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94-%EB%A9%94%EB%89%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%82%98%ED%83%80%EB%82%98%EB%8A%94-2%EC%B0%A8-%EB%A9%94%EB%89%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0-feat-transform-translate
- 투명 이펙트 사이트 : https://hype4.academy/tools/glassmorphism-generator
- swiper bullet custom : https://velog.io/@yejine2/TIL-10-swiper-pagination-bullet-%EC%BB%A4%EC%8A%A4%ED%85%80

---------
