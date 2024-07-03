import './App.css';
import { useState } from 'react';

function App() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <div>헬로! {number}</div>;
            <button
                onClick={() => {
                    setNumber((currentNumber) => currentNumber + 1);
                    setNumber((currentNumber) => currentNumber + 1);
                    setNumber((currentNumber) => currentNumber + 1);
                }}
            >
                누르면 up!
            </button>
            <button
                onClick={() => {
                    setNumber(number - 1);
                }}
            >
                누르면 Down!
            </button>
        </>
    );
}

export default App;
