// import logo from "./logo.svg";
import "./App.css";
import TextApp from "./components/TextApp/TextApp";
import CompA from "./components/useContext/CompA";
import UseCallBack from "./components/UseCallBack/UseCallBack";
import UseMemo from "./components/UseMemo/UseMemo";
import UseReducer from "./components/UseReducer/UseReducer";
import UseReducerObject from "./components/UseReducer/UseReducerObject";
import UseRefApp from "./components/UseRefApp/UseRefApp";
import UseRefAppDom from "./components/UseRefApp/UseRefAppDom";
import UseRefPrev from "./components/UseRefApp/UseRefPrev";
import CustomHook from "./components/customHook/CustomHook";
function App() {
  const TextAppProps = {
    title: "Text App",
    place: "Enter Text To Count Place",
  };
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod bibendum sapien, eget vestibulum ipsum venenatis eu. Cras vel tortor ut justo bibendum feugiat. Nulla facilisi. Vestibulum nec quam elit. Praesent posuere libero nec libero cursus, at venenatis purus semper. Integer eget urna id purus euismod aliquam. Vestibulum bibendum mauris vel turpis feugiat, in sagittis elit efficitur.Suspendisse eget augue sit amet purus lacinia venenatis. Quisque nec feugiat enim, ut viverra sapien. Fusce eu facilisis nisl. Nullam volutpat diam quis fermentum auctor. Duis vulputate bibendum urna, id egestas dolor. Sed convallis ex vel libero congue, a lacinia neque cursus. Proin vel metus nec lectus varius mattis. Vivamus convallis, est in luctus vulputate, lectus odio lacinia velit, eu lacinia orci tortor id libero.Vestibulum euismod elit ut justo tristique, eget interdum metus vehicula. Sed ac varius odio";
  return (
    <>
      <TextApp TextAppProps={TextAppProps} dummyTextProps={dummyText} />

      {/* Use Context Api */}

      <CompA />

      {/* Use Ref Hook  */}
      <UseRefApp />
      <UseRefAppDom />
      <UseRefPrev />

      {/* Use Reducer Hook */}

      <UseReducer />
      <UseReducerObject />

      {/* Use Callback Hooks */}

      <UseCallBack />

      {/* Use Memo Hook  */}
      <UseMemo />

      {/* Custom hook */}

      <CustomHook />
    </>
  );
}

export default App;
