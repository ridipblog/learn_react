import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from './actions/index';
function App() {
    const myState = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Increment And Decrement Counter</h1>
            <button className='minus' onClick={() => dispatch(decNumber())}>-</button>
            <input type='text' value={myState} />
            <button className='plus' onClick={() => dispatch(incNumber(5))}>+</button>
        </>
    );
}

export default App;
