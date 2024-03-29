import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./components/HookCounter";
import PrevCount from "./components/PrevCount";
import ObjState from "./components/ObjState";
import ArrState from "./components/ArrState";
import EffectHook from "./components/EffectHook";
import OnceEffect from "./components/OnceEffect";
import ToggleMouse from "./components/ToggleMouse";
import IntervalHook from "./components/IntervalHook";
import DataFetch from "./components/DataFetch";
import ComponentA from "./components/ComponentA";
import React,{useReducer} from "react";
import ReduceOne from "./components/ReduceOne";
import ReduceTwo from "./components/ReduceTwo";
import ComponentP from "./components/ComponentP";
import ComponentQ from "./components/ComponentQ";
import ComponentR from "./components/ComponentR";
import RedFetchOne from "./components/RedFetchOne";
import RedFetchTwo from "./components/RedFetchTwo";
import Parent from "./components/useCallback/Parent";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import ClassTImer from "./components/ClassTImer";
import HookTimer from "./components/HookTimer";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UseForm from "./components/UseForm";
import StateImmutability from "./components/StateImmutability";
import OptParent from "./components/OptParent";
import OptChild from "./components/OptChild";
import OptGrand from "./components/OptGrand";
import IncParent from "./components/IncParent";
import ContextParent from "./components/ContextParent";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext()

const intialState=0
const reducer=(state,action)=>{
    // console.log(state)
    // console.log(action)
    // console.log('reducer')
    switch(action){
        case "inc": return state+1
        case "dec": return state-1
        case "reset": return intialState
        default: return state
    }

}

function App() {
  const[count,dispatch]=useReducer(reducer,intialState)

  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <PrevCount/> */}
      {/* <ObjState/> */}
      {/* <ArrState/> */}
      {/* <EffectHook/> */}
      {/* <OnceEffect/> */}
      {/* <ToggleMouse/> */}
      {/* <IntervalHook/> */}
      {/* <DataFetch/> */}
      {/* <UserContext.Provider value="Anas">
        <ChannelContext.Provider value="FrontEnd">
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReduceOne/> */}
      {/* <ReduceTwo/> */}
      {/* <CountContext.Provider value={{count,dispatch}}>

        COUNT -{count}

      <ComponentP/>
      <ComponentQ/>
      <ComponentR/>
      </CountContext.Provider> */}
      {/* <RedFetchOne/> */}
      {/* <RedFetchTwo/> */}
      {/* <Parent/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      {/* <ClassTImer/> */}
      {/* <HookTimer/>   */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <UseForm/> */}
      {/* <StateImmutability/> */}
       {/* <OptGrand/> */}
       {/* <OptParent/> */}
       {/* <IncParent/> */}
       <ContextParent/>
    </div>
  );
}

export default App;
