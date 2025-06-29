// import { Counter } from './components/Counter/Counter';

import "./App.css";

// function App() {
//   const input1 = useRef(null);
//   const input2 = useRef(null);

//   // const [testValue, setTestValue] = useState("");
//   // Якщо нам потрібно зберегти у змінній дані, то хуки нам не підійдуть

//   // let value;
//   // створено глобальну змінну, яка може зберігати значення без ре-рендера, але глобальні змінні не погана практика

//   let value = useRef("");

//   const showValue = (e) => {
//     // setTestValue("1");
//     value = e.target.value;
//   }

//   const changeValue = () => {
//     // setTestValue("2");
//     console.log(value);
//   }

//   useEffect(() => {
//     console.dir(input1.current);
//     console.dir(input2.current);
//   }, []);

//   return (
//     <div className="App">
//       {/* <Counter /> */}
//       <form>
//         <input ref={input1} onChange={showValue} type="text" />
//         <input ref={input2} onChange={showValue} type="text" />
//       </form>
//     </div>
//   );
// }

// export default App;

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { Articles } from "./components/Articles/Artcles";

export const App = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <div className="App">
      {isLogin ? (
        <Articles />
      ) : (
        <LoginForm/>
      )}
    </div>
  );
};
