# MyReads: A Book Tracking App



## Approaching a Project

대규모 프로젝트를 개발하는 것은 어렵다. 그냥 뛰어들어 전체를 한번에 다루려고 하지마라.

`A goal without a plan is just a wish.`이라는 말도 있듯이 계획부터 시작하라.



프로젝트를 만들 때 따라야 할 몇가지 단계가 있다.

- 프로젝트를 구축하는 데 필요한 단계 개요 (outline the steps needed to build the project)
- 응용 프로그램을 그리기 (draw the application)
  - 개별 화면의 모양 (what individual screens would look like)
  - 구성 요소가 서로 연결되는 방법 (how the Components are connected to each other)
- 구조를 써내려가라 (write down the architecture)
- 앱을 하나씩 개발해라 (develop the app piece by piece)



그리고 제출하기 전에 

- 버그를 모두 잡아라 (squash all bugs)

- 프로젝트가 모든 요구 사항을 충족하는지 확인해라 (check the rubric and make sure that your project meets all requirements)





## Project Overview

MyReads App을 통해 새로운 기술을 시험해 볼 시간이다.

React를 사용하여 애플리케이션을 빌드한다. 처음부터 기억한다면 MyReads App을 사용하면 모든 책을 추적할 수 있다. 이 앱은 상태를 관리해야한다. Component를 구축하고 React Router를 활용해라.

앱 구축의 중요한 부분은 그것의 모든 React 측면을 구축하고 있다. 기본적인 스타일과 아이콘을 제공한다. 



MyReads 프로젝트에서 읽은 책, 현재 읽거나 읽은 책을 선택하고 분류할 수 있는 책장 앱을 만든다. 프로젝트는 React를 사용하여 애플리케이션을 빌드하는 것을 강조하고 애플리케이션과 상호 작용할 때 정보를 유지하는데 사용할 API 서버 및 클라이언트 라이브러리를 제공한다.



### Get the Project

- forking and cloning the [start repository](https://github.com/udacity/reactnd-project-myreads-starter)
- starting from scratch with [Create React App](https://github.com/facebookincubator/create-react-app)



### Starter Code

작업 공간은 Udacity 클래스 룸에 통합 된 개발 환경이며 MyReads 프로젝트 첫 단계 저장소로 사전 구성되어 있습니다.

Workspace와 Starter repo의 코드는 모두 사용될 수 있는 모든 CSS와 HTML 마크업을 포함하지만 프로젝트를 완료하는 데 필요한 React 코드를 생략한다. 이렇게 하면 모든 CSS와 HTML을 처음부터 쓰고 싶지 않다면 시간을 절약할 수 있다. 제공된 코드는 완료된 응용프로그램의 정적 HTML 페이지를 보여주지만 대화형 기능은 없다.



### Starting from Scratch

처음부터 완전히 시작하려면 React 앱 만들기를 사용하여 새로운 React 응용 프로그램을 만들 수 있습니다. 그러나 처음부터 자체 애플리케이션을 작성하더라도 시작 템플리트와 함께 제공되는 booksAPI.js 파일을 사용하여 백엔드 API와 상호 작용해야합니다. API 메소드 사용에 대한 지시 사항은 시작 템플리트 저장소의 README에서 제공됩니다.



### App Functionality

이 응용 프로그램에서 기본 페이지에는 "선반"(예 : 카테고리) 목록이 표시되며 각 책에는 여러 권의 책이 포함되어 있습니다. 세 가지 선반은 다음과 같습니다.

- Currently Reading
- Want to Read
- Read

각 책에는 해당 책의 서가를 선택할 수있는 컨트롤이 있습니다. 다른 서가를 선택하면 책이 그곳으로 이동합니다. 컨트롤의 기본값은 항상 책이있는 현재 선반이어야합니다.

기본 페이지에는 라이브러리에 추가 할 책을 찾을 수있는 검색 페이지 인 / search 링크도 있습니다.

검색 페이지에는 책을 찾는 데 사용할 수있는 텍스트 입력이 있습니다. 텍스트 입력 값이 변경되면 해당 쿼리와 일치하는 책이 페이지에 표시되며 책을 라이브러리에 추가 할 수있는 컨트롤과 함께 표시됩니다.

책이 책장에 있으면 주 응용 프로그램 페이지와 검색 페이지 모두에서 동일한 상태 여야합니다.

검색 페이지에는 / (루트 URL) 링크가있어 기본 페이지로 돌아갑니다.

검색 페이지에서 기본 페이지로 다시 이동하면 라이브러리의 검색 페이지에서 선택한 모든 항목을 즉시 볼 수 있습니다.



### Submission Requirements

제출에는 로컬 웹 서버에서 웹 응용 프로그램을 설치하고 시작하는 데 필요한 모든 파일이 포함되어야합니다. JSX가 포함 된 파일의 경우 .jsx 확장자를 사용하지 마십시오 (.js를 선호 할 수 있음). 검토자가 해당 컴퓨터에 npm을 설치했다고 가정 할 수 있습니다.

시작 코드를 사용하지 않더라도 프로젝트 검토자가 앱을 설치하고 실행하는 데 필요한 모든 것을 확보하는 가장 쉬운 방법이기 때문에 Create React App을 사용하여 제출물을 생성해야 할 것입니다.



### Considerations

이 프로젝트의 초점은 페이지를 아름답게 만드는 것이 아니라 기능적인 React 코드를 작성하는 것입니다. 원하는 경우 레이아웃과 CSS 작업에 시간을 할애하지 말고이 프로젝트의 목표는 올바른 기능입니다.





## Project Instructions & Rubric

### Before Submitting

코드가 HTML, CSS, JavaScript 및 Git 스타일 지침을 준수하는지 확인하십시오.

- [Udacity's HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity's CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity's JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Udacity's Git Style Guide](https://udacity.github.io/git-styleguide/)

처음부터 Git을 사용하는 것이 좋습니다. 자주 커밋하고 [guidelines](https://udacity.github.io/git-styleguide/)을 준수하는 올바른 형식의 커밋 메시지를 사용해야합니다.



### How will this project be evaluated?

Udacity Code Reviewer가  [rubric](https://review.udacity.com/#!/rubrics/918/view)에 따라 프로젝트를 평가합니다. 제출하기 전에 철저히 검토하십시오. 통과하려면 모든 기준이 "사양을 충족"해야합니다.

프로젝트 루 브릭은이 프로젝트를 구축하는 동안 진실의 원천입니다. 브라우저 북마크에 저장하면 쉽게 액세스 할 수 있습니다!



## Submission Instructions

작업 공간에서 프로젝트를 개발하기로 선택한 경우 작업 공간에서 직접 제출할 수 있습니다. 제출할 준비가되면 "프로젝트 제출"버튼을 클릭하십시오.

로컬 시스템에서 개발을 선택하는 경우 (시작 프로젝트로 시작하거나 React 앱 작성으로 처음부터 시작) 다음을 수행해야합니다.

- 프로젝트를 GitHub로 푸시하고 마스터 브랜치를 푸시하십시오.

- 프로젝트 제출 페이지에서 "GitHub로 제출"옵션을 선택하십시오.

- 이 프로젝트의 저장소를 선택하십시오 (먼저 GitHub 계정을 연결해야 할 수도 있습니다).





---



## Step by Step Guide - React Apps



### Planning Stage 📐



#### 1단계 - 앱의 모든 뷰 그리기

앱에서 각 뷰의 모양과 기능을 결정해야합니다. 가장 좋은 방법 중 하나는 앱에 대한 각 뷰를 종이에 그려서 각 페이지에 어떤 정보와 데이터를 계획하고 있는지 파악하는 것입니다.

종이와 연필 대신 좀 더 디지털화하고 모형을 만들기 위해  [software for creating mockups](https://codingsans.com/blog/mockup-tools)를 사용할 수 있습니다.

프로젝트 사양이 제공된 경우 모의 객체와 비교하여 필요한 기능이 모두 있는지 확인하십시오. 다음 연습에서는 종이로 만들려는 것을 그릴 수 있습니다.



#### 2단계 - 각 뷰를 구성 요소 계층으로 나누기

- 모든 component 주위에 상자를 그립니다.
- component를 계층 구조로 배열



#### 3 단계 - 각 구성 요소에 필요한 데이터 결정

각 구성 요소에 대해 구성 요소가 액세스, 가져 오기, 수정 또는 표시 할 데이터를 판별하십시오.



#### 4단계 - 각 데이터 조각이 어느 구성 요소에 있어야하는지 결정





### Coding Stage🔨

여러 구성 요소에 동일한 데이터가 필요한 경우 구성 요소의 가장 가까운 공통 조상에 데이터를 저장하여 상태를 높이십시오. 이 예제를 통해 어떻게 수행되는지 살펴보십시오 : [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) and [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).



1 단계-데이터를 보유하는 컴포넌트를 작성하십시오.

 API 호출을 포함하여 데이터를 보유하는 모든 구성 요소를 빌드하고 모든 것이 올바르게 작동하는지 확인하십시오 (예 : 구성 요소가 올바른 방식으로 데이터를 요청하고 데이터가 예상대로 입력 됨).



2 단계-데이터가 필요한 구성 요소를 작성하십시오.



3 단계-데이터가있는 컴포넌트에서 필요한 컴포넌트로 데이터를 전달하십시오.



4 단계-디버그하고 모든 것이 예상대로 작동하는지 확인하십시오.



5 단계-역 데이터 흐름 추가 (의미 한 것이 무엇인지 혼동되는 경우  [this](https://reactjs.org/docs/thinking-in-react.html)를 살펴보십시오.



6 단계-navigation 추가



7 단계-마무리 손질을 추가하고 프로젝트가 루 브릭을 충족하는지 확인하십시오.



이것은 단지 템플릿 일뿐입니다. 더 많은 프로젝트를 구축할수록 필요에 따라이 템플릿을 수정하게됩니다.

다른 접근 방식을 사용하는 것이 더 직관적 일 수도 있습니다. 그러나 접근 방식에 관계없이 앱을 계획하는 것은 성공의 필수 요소입니다.







