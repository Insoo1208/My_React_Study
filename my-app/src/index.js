import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/jsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropUse';
import Comment from './chapter5/5.6/Comment';
import CommentList from './chapter5/5.7/CommentList';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import CounterEffect from './chapter7/7.3/CounterEffect';
import FriendStatus from './chapter7/7.3/FriendStatus';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import EffectContainer from './chapter7/7.3/EffectContainer';
import TimerContainer from './chapter7/7.3/TimerContainer';
import HeavyCalculator from './chapter7/7.4/HeavyClaculator';
import ParentComponent from './chapter7/7.5/ParentComponent';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import InputContainer from './chapter7/7.8/ex2/InputContainer';
import Accommodate from './chapter7/7.8/Accommodate';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import MailBox from './chapter9/9.3/MailBox';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import MyCalculator from './MyCalculator/MyCalculator';
import NumberList from './chapter10/10.1/NumberList';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import FileInput from './chapter11/11.3/FileInput';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import SignUp from './chapter11/SignUp';
import Calculator from './chapter12/Calculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import Dialogcontainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

// 3장 예제
// root.render(
//   // <JsxUse />
//   <Library />
// );

// 4장 예제
// 1초 마다 Clock 컴포넌트를 root div에 렌더링
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// 5장 예제
// root.render(
//   // <PropUse />
//   // <Comment 
//   //   author = {{
//   //     name: 'Insoo',
//   //     avatarUrl: 'https://via.placeholder.com/150x150'
//   //   }}
//   //   text = '반갑습니다.'
//   //   date = {new Date().toLocaleTimeString()}
//   // />
//   <CommentList />
// );

// 6장 예제
// root.render(
//   <NotificationList />
// );

// 7장 예제
// root.render(
//   // <Counter />
//   // <CounterEffect />
//   // <SetStateMerge />
//   // <FriendStatus />
//   // <EffectContainer />
//   // <TimerContainer />
//   // <HeavyCalculator />
//   // <ParentComponent />
//   // <TextInputWithFocusButton />
//   // <ComponentVariable />
//   // <InputContainer />
//   <Accommodate />
// );

// 8장 예제
// root.render(
//   // <Toggle />
//   // <MyButton />
//   <ConfirmButton />
// );
  
// 9장 예제
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// root.render(
//   // <Greeting isLoggedIn={true}/>
//   // <LoginControl />
//   // <MailBox unreadMessages={messages}/>
//   // <MainPage />
//   <LandingPage />
// );

// 10장 예제
// const numbers =[1,2,3,4,5];
// root.render(
//   // <NumberList numbers={numbers}/>
//   // <AttendanceBook />
// );

// 11장 예제
// root.render(
//   // <NameForm />
//   // <EssayForm />
//   // <FlavorForm />
//   // <FileInput />
//   <ReservationRefactoring />
//   // <SignUp />
// );

// 12장 예제
// root.render(
//   <Calculator />
// );

// 13장 예제
root.render(
  // <WelcomeDialog />
  // <SplitPaneSection />
  // <Dialogcontainer />
  <SignUpDialog />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
