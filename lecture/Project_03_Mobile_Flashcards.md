# Mobile Flashcards



## Project Details

### Project Overview

UdaciCards 프로젝트의 경우 사용자가 플래시 카드 모음을 연구 할 수 있는 모바일 응용 프로그램 (Android 또는 iOS 또는 둘 다)을 빌드합니다. 이 응용 프로그램을 통해 사용자는 "decks"라고 하는 다양한 종류의 플래시 카드를 만들고 해당 decks에 플래시 카드를 추가 한 다음 해당 decks에서 퀴즈를 풀 수 있습니다.



### Why this project?

이 프로젝트는 무한 목록 처리, 라우팅 및 사용자 입력을 포함하여 기본 애플리케이션을 구축하는 기본 측면을 포함합니다. 이 프로젝트를 빌드하면 React Native를 사용하여 iOS 및 Android 애플리케이션을 빌드하는 방법을 이해하게됩니다.



### Specification

create-react-native-app를 사용하여 프로젝트를 만듭니다. 다운로드 해야 할 스타터 코드가 없습니다.

이 [rubric](https://review.udacity.com/#!/rubrics/1021/view)에 제공된 사양은이 프로젝트에 필요한 최소값입니다. 원하는대로 프로젝트를 확장 할 수 있습니다.



#### Specific Requirements

- create-react-native-app를 사용하여 프로젝트를 빌드하십시오.
- 사용자가 무제한의 카드를 담을 수 있는 데크를 만들 수 있습니다. 
- 사용자가 특정 데크에 카드를 추가 할 수 있습니다.
- 카드 앞면에 질문이 표시되어야합니다.
- 카드 뒷면에 답이 표시되어야합니다.
- 사용자는 특정 데크에서 퀴즈를 풀고 완료되면 점수를받을 수 있어야합니다.
- 해당 날짜에 아직 공부하지 않았다면 사용자에게 학습 알림을 받아야합니다.



#### Views

응용 프로그램에는 최소한 5 개의 뷰가 있어야합니다.



| Deck List View                                               | Individual Deck View                                         | Quiz View - 1                                                | Quiz View - 2                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://video.udacity-data.com/topher/2017/September/59c19a6a_20170919-151343/20170919-151343.png) | ![](https://video.udacity-data.com/topher/2017/September/59c19b96_20170919-153231/20170919-153231.png) | ![](https://video.udacity-data.com/topher/2017/September/59c19ca8_20170919-151227/20170919-151227.png) | ![](https://video.udacity-data.com/topher/2017/September/59c19d22_20170919-151123/20170919-151123.png) |



| **New Deck View**                                            | New Question View                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://video.udacity-data.com/topher/2017/September/59c19f5a_20170919-151320/20170919-151320.png) | ![](https://video.udacity-data.com/topher/2017/September/59c19f82_20170919-151259/20170919-151259.png) |



**Deck List View (Default View)**

- displays the title of each Deck // 각 Deck의 제목을 표시합니다
- displays the number of cards in each deck // 각 deck의 카드 수를 표시합니다



**Individual Deck View**

- displays the title of the Deck // Deck에 제목을 표시합니다.
- displays the number of cards in the deck // Deck에 카드의 수를 표시합니다.
- displays an option to start a quiz on this specific deck // 이 특정 Deck에서 퀴즈를 시작하는 옵션을 표시합니다.
- An option to add a new question to the deck // Deck에 새로운 질문을 추가할 수 있도록 합니다.



**Quiz View**

- displays a card question // 카드 질문을 표시합니다.
- an option to view the answer (flips the card) // 답을 볼 수 있는 옵션(카드를 넘기다)
- a "Correct" button
- an "Incorrect" button
- the number of cards left in the quiz // 퀴즈에 남은 카드 수
- Displays the percentage correct once the quiz is complete // 퀴즈 완료 시 정확한 백분율 표시



**New Deck View**

- An option to enter in the title for the new deck // 새로운 Deck 제목을 입력할 수 있는 옵션
- An option to submit the new deck title // 새로운 Deck 제목을 제출하는 옵션



**New Question View**

- An option to enter in the question // 질문을 입력하는 옵션
- An option to enter in the answer // 답변에 입력하는 옵션
- An option to submit the new question // 새로운 질문을 제출하는 옵션



### Data

` AsyncStorage`를 사용하여 데크와 플래시 카드를 저장합니다. 이 프로젝트에서는 `Redux`가 선택사항입니다. `AsyncStorage`를 사용하여 모양이 다음과 비슷한 객체를 관리합니다.

```js
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```

각 deck는 객체에 새 키를 만듭니다. 각 deck에는 제목과 질문 키가 있습니다. 제목은 특정 deck의 제목이며 질문은 해당 deck에 대한 질문과 답변의 배열입니다.



### Tip

`AsyncStorage` 데이터베이스를 관리하려면 네 가지 도우미 메서드를 만들어야합니다

- `getDecks` : 모든 데크와 제목, 질문 및 답변을 반환합니다.
- `getDeck` : 단일 id 인수를 받아서 해당 id와 관련된 데크를 반환합니다.
- `saveDeckTitle` : 단일 제목 인수를 사용하여 데크에 추가하십시오. 
- `addCardToDeck` : 제목과 카드라는 두 가지 인수를 취하고 해당 제목과 함께 덱에 대한 질문 목록에 카드를 추가합니다.





## Project Instructions & Rubric

### Project Instructions

- `install create-react-native-app` (아직없는 경우)
- 새로운 React Native 프로젝트 작성 : `create-react-native-app mobile-flashcards`
- 기본 앱을 빌드하십시오. 
- 프로젝트 루 브릭을 정기적으로 참조하십시오. 이것이 프로젝트 사양에 대한 진실의 근원입니다.



> 로컬 개발 환경을 설정하는 데 문제가 있습니까?
>
> 낙심하지 마십시오! [Expo Snack](https://snack.expo.io/)🍎에서 프로젝트를 빌드하십시오. 프로젝트를 제출하려면 zip 파일을 다운로드하여 해당 파일을 제출하십시오.



> 제출하기 전에 프로젝트가 다음을 확인하십시오.
>
> - 루 브릭에 요약 된 모든 사양을 충족하는지 확인하십시오. 
> - 프로젝트가 HTML, CSS, JavaScript 및 Git 스타일 지침을 준수하는지 확인하십시오.



### Sample Project

(프로젝트가 루 브릭의 모든 사양을 충족하는지 확인한 후) 추가 기능 및 / 또는 스타일을 추가하여 프로젝트가 창의성을 발휘할 것을 권장합니다! 예를 들면 다음과 같습니다.

<iframe width="770" height="433" src="https://www.youtube.com/embed/_72MNWWaJuE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





## Step by Step Guide - Mobile Flashcards Project

### Planning Stage 📐

#### Step 1 - Draw All of the Views of the App

앱에서 각 뷰의 모양과 기능을 결정해야합니다. 가장 좋은 방법 중 하나는 앱에 대한 각 뷰를 종이에 그려서 각 페이지에 어떤 정보와 데이터를 계획하고 있는지 파악하는 것입니다.

종이와 연필 대신에 좀 더 디지털화하고 모형을 만들기 위해 소프트웨어를 사용할 수 있습니다. 프로젝트 루 브릭에 대해 모의를 확인하여 필요한 기능이 모두 있는지 확인하십시오.



#### Step 2 - Break Each View Into a Hierarchy of Components

이 단계에서는 

- 모든 구성 요소 주위에 상자를 그립니다.
- 구성 요소를 계층 구조로 배열



#### Step 3 - Determine What Events Happen in the App

프로젝트는 `AsyncStorage`를 사용하여 데이터를 저장해야합니다. Redux를 사용할 계획이라면 (더 많은 연습을하기 위해 권장) store에 어떤 데이터를 저장하고 어떤 데이터가 자신의 데이터를 보유 할 것인지 계획해야합니다. React / Redux Apps에 대한 단계별 가이드를 따라 주시기 바랍니다. 작업 목록



### Coding Stage🔨

#### Step 1 - Create the Required Views.

이 단계에서는 구성 요소의 스타일을 지정하지 말고 구성 요소에 데이터 나 기능을 넣는 것에 대해 걱정하지 마십시오. bare-bones 컴포넌트만 만들면됩니다.



#### Step 2 - Use React Native Navigation to Connect the Views.



#### Step 3 - Work on the Views and State.

Redux 사용 여부에 따라 React 앱 단계별 가이드 또는 React / Redux 앱 단계별 가이드에 따라보기 및 상태를 작업하십시오.



#### Step 4 - Add `AsyncStorage`.

#### Step 5 - Add notifications.

#### Step 6 - Add finishing touches and make sure the project meets the [rubric](https://review.udacity.com/#!/rubrics/1021/view).





## Step by Step Guide - React/Redux Apps

### *Template for Building React/ Redux Projects*



### Planning Stage 📐

#### Step 1 - Draw All of the Views of the App

앱에서 각 뷰의 모양과 기능을 결정해야합니다. 가장 좋은 방법 중 하나는 앱에 대한 각 뷰를 종이에 그려서 각 페이지에 어떤 정보와 데이터를 계획하고 있는지 파악하는 것입니다.

종이와 연필 대신 좀 더 디지털화하고 모형을 만들기 위해 소프트웨어를 사용할 수 있습니다. 프로젝트 사양이 제공된 경우 모의 객체와 비교하여 필요한 기능이 모두 있는지 확인하십시오.



#### Step 2 - Break Each View Into a Hierarchy of Components

이 단계에서는 

- 모든 구성 요소 주위에 상자를 그립니다.
- 구성 요소를 계층 구조로 배열



#### Step 3 - Determine What Events Happen in the App

우리는 각 구성 요소에서 일어나는 일을 살펴볼 필요가 있습니다. 앱 또는 사용자가 데이터에서 수행하는 작업을 결정합시다. 데이터가 설정, 수정 또는 삭제됩니까? ... 그런 다음 해당 이벤트를 추적하기위한 조치가 필요합니다!



#### Step 4 - Determine What Data Lives in the Store

Redux (및 react-redux 바인딩!)가 해결해야 할 주요 문제는 다음과 같습니다.

- 전체 component tree를 통한 props의 전파.
- 앱에서 state의 일관성 및 예측 가능성 보장

Redux의 작성자 인 Dan Abramov에 따르면, 상점 또는 React 컴포넌트에 데이터를 저장할지 여부를 결정하기 위해 다음 원칙을 따라야합니다.

> "전 세계적으로 중요하거나 복잡한 방식으로 변형된 state에는 Redux를 사용하십시오. 경험상 규칙은 덜 어색한 것을 수행하는 것입니다."

이에 대한 자세한 내용은 [Organizing State](https://redux.js.org/faq/organizing-state)와 [How to choose between Redux's store and React's state?](https://github.com/reactjs/redux/issues/1287)를 살펴보세요



### Coding Stage🔨

1 단계- state 모양을 디자인하고 reducer를 만듭니다.

2 단계- Redux store를 만듭니다. logger middleware(옵션)와 Redux Thunk middleware를 연결하십시오 (또는 Redux Saga 등을 사용할 수 있음).

3 단계- store에 액세스해야하는 각 보기마다 component를 작성하고 store에 연결하십시오.

4 단계- 마지막 단계에서 작성한 component에 대해 action 및 action creator를 작성하십시오. 모든 것이 올바르게 작동하는지 확인하십시오.

5 단계- store에 액세스 해야하는 각 component에 대해 3 단계 및 4 단계를 반복하십시오. 

6 단계- presentational components를 작성하고 모든 것이 올바르게 작동하는지 확인하십시오.

7 단계- React Router 추가

8 단계- 마무리 손질을 추가하고 프로젝트가 루브릭을 충족하는지 확인하십시오.

이것은 단지 템플릿 일뿐입니다. 더 많은 프로젝트를 구축할수록 필요에 따라이 템플릿을 수정하게됩니다. 다른 접근 방식을 사용하는 것이 더 직관적 일 수도 있습니다. 그러나 접근 방식에 관계없이 앱을 계획하는 것은 성공의 필수 요소입니다.





## Step by Step Guide - React Apps

### *Step by Step Guide for Building React Apps*



### Planning Stage 📐

#### Step 1 - Draw All of the Views of the App

앱에서 각 뷰의 모양과 기능을 결정해야합니다. 가장 좋은 방법 중 하나는 앱에 대한 각 뷰를 종이에 그려서 각 페이지에 어떤 정보와 데이터를 계획하고 있는지 파악하는 것입니다.

종이와 연필 대신 좀 더 디지털화하고 모형을 만들기 위해 소프트웨어를 사용할 수 있습니다. 프로젝트 사양이 제공된 경우 모의 객체와 비교하여 필요한 기능이 모두 있는지 확인하십시오.



#### Step 2 - Break Each View Into a Hierarchy of Components

이 단계에서는 

- 모든 구성 요소 주위에 상자를 그립니다.
- 구성 요소를 계층 구조로 배열



#### Step 3 - Determine the Data Each Component Needs

각 구성 요소에 대해 구성 요소가 액세스, 가져 오기, 수정 또는 표시 할 데이터를 판별하십시오.



#### Step 4 - Determine Which Component Each Piece of Data Should Live in

여러 component에 동일한 데이터가 필요한 경우 component의 가장 가까운 공통 조상에 데이터를 저장하십시오. 이 예제를 통해 어떻게 수행되는지 살펴보십시오 : [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) and [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).



### Coding Stage🔨

1 단계- 데이터를 보유하는 components를 작성하십시오. 

2 단계- 데이터가 필요한 components를 작성하십시오. 

3 단계- 데이터가있는 components에서 필요한 components로 데이터를 전달하십시오.

 4 단계- 디버그하고 모든 것이 예상대로 작동하는지 확인하십시오.

5 단계- 역 데이터 흐름 추가 (의미 한 것이 무엇인지 혼동되는 경우  [this](https://reactjs.org/docs/thinking-in-react.html)를 살펴보십시오. 

6 단계- navigation 추가.

7 단계- 마무리 손질을 추가하고 프로젝트가 루브릭을 충족하는지 확인하십시오.

이것은 단지 템플릿 일뿐입니다. 더 많은 프로젝트를 구축할수록 필요에 따라이 템플릿을 수정하게됩니다. 다른 접근 방식을 사용하는 것이 더 직관적 일 수도 있습니다. 그러나 접근 방식에 관계없이 앱을 계획하는 것은 성공의 필수 요소입니다.