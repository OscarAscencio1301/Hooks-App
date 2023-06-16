// import Counter from "./useState/Counter"
// import CounterCustomHook from "./useState/CounterCustomHook"
// import SimpleForm from "./useEffect/SimpleForm"
// import FormCustomHook from "./useEffect/FormCustomHook" 
// import MultipleCutomHooks from "./examples/MultipleCutomHooks"
// import FocusScreen from "./useRef/FocusScreen"
// import Memorize from "./memos/Memorize"
// import MemoHook from "./memos/useMemo"
// import CallbackHook from "./memos/CallbackHook"
// import { Padre } from "./07-tarea-memo/Padre"
// import TodoApp from "./useReducer/TodoApp"
// import MainApp from "./useContext/MainApp"
import MainApp from "./useContext/MainApp"
import UserProvider from "./useContext/context/UserProvider"




const App = () => {
  return (
    <div className="container pt-5">
      {/* <Counter /> */}
      {/* <CounterCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormCustomHook /> */}
      {/* <MultipleCutomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      {/* <Padre /> */}
      {/* <TodoApp /> */}
      <UserProvider>
        <MainApp />
      </UserProvider>
    </div>
  )
}

export default App
