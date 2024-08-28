// REACT HOOKSSS..
// useRef,useEffect,useContext,useReducer, useCallbacks, useMemo and how to create a custom hooks..

import ComponentUseCallbacks from "./components/ComponentUseCallbacks"
import ComponentUseMemo from "./components/ComponentUseMemo"
import ComponentUseReducer from "./components/ComponentUseReducer"


// import ComponentUseEffect from "./components/ComponentUseEffect"
// import ComponentUseRef from "./components/ComponentUseRef"
// import ThemeProvider from "./components/ThemeProvider"
// import ToggleButton from "./components/ToggleButton"

function App() {
  
  return (
    <>
     
      {/* useContext
      <ThemeProvider>
        <ComponentUseRef/>
       <ComponentUseEffect/>
          <ToggleButton/>  Components that need context
      </ThemeProvider> */}

      <ComponentUseReducer/>
      <ComponentUseCallbacks/>
      <ComponentUseMemo/>
    </>
  )
}

export default App
