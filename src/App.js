import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./features/counterSlice";
import { ourNameActions } from "./features/nameSlice";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.storeData.value;
  });
  const handleInc = () => {
    dispatch(counterActions.increment());
  };
  const handleDec = () => {
    dispatch(counterActions.decrement());
  };

  const name = useSelector((state) => {
    return state.ourNamess.value;
  });

  const handName = () => {
    dispatch(ourNameActions.myName());
  };
  const handYourName = () => {
    dispatch(ourNameActions.yourName());
  };
  const handleHide = () => {
    dispatch(ourNameActions.hideName());
  };
  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <h3>What is your Name: {name}</h3>
      <button onClick={handName}>Show My Name</button>
      <button onClick={handYourName}>Show your Name</button>
      <button onClick={handleHide}>Dont Click Me</button>
      <button onClick={handleInc}>Add</button>
      <button onClick={handleDec}>Remove</button>
    </div>
  );
}

export default App;
