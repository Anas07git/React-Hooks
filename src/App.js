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
import React from "react";
import ReduceOne from "./components/ReduceOne";
import ReduceTwo from "./components/ReduceTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
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
      <ReduceTwo/>
    </div>
  );
}

export default App;
