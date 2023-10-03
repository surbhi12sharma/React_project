// import logo from './logo.svg';
import './App.css';
import Classtype, {Functiontype} from './ComponentType/componnettype.js'
import Profile from './props/profileComponent';
import MessageComponent from './Day2/states/MessageComponent';
import UseEffectExample from './Day2/states/useEffectExample';
import ClassComponent from './Day2/class/classComponent';
import ClassState from './Day2/class/classState';
import PHeader from './ComponentType/Day3/ComponentComunication/PHeader';
import ProductList from './ComponentType/Day3/productlist/ProductList';
import LoginPage from './ComponentType/Day3/LoginPage/loginPage'
import { useState } from 'react';
import PageHeader from './ComponentType/Day3/LoginPage/Header';
import LoginJsx from './ComponentType/Day3/LoginJSX/login.jsx'
import ControlledComp from './ComponentType/Day3/Controlled_uncontrolled_Components/controlledComp'
import Uncontrolled from './ComponentType/Day3//Controlled_uncontrolled_Components/UncontollesComp'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SimpleRouting from './ComponentType/Day3/Routing/SimpleRouting';
import EmpList from './ComponentType/Day3/Routing/empList';


function App() {
  let user = {empid: 10, empName: 'surbhi'}
  let [userName, setUserName] = useState("")
  return (
    <div>
      {/* <Functiontype />
      <Classtype />
      <Profile userName = 'surbhi'  userId = '101' />
      <MessageComponent user = {user}/>

      <UseEffectExample/>

      <div>*************</div>
      <ClassComponent userName = 'surbhi'  userId = '101' /> */}
      {/* <ClassState/> */}

      {/* Day 3 */}
      {/* <PHeader/> */}
      {/* <ProductList/> */}
      {/* {userName===""  ? <LoginPage setUserName={setUserName} /> : <PageHeader userName={userName}/>} */}
      {/* <LoginJsx/> */}
      {/* <ControlledComp/> */}
      {/* <Uncontrolled/> */}

      <BrowserRouter>
      <SimpleRouting/>
      </BrowserRouter>
      {/* <EmpList/> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
