import {useState} from 'react';

//Button increment
function Button(props) {    
    const handleClick = () => props.onClickFunction(props.increment);
    return (        
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

//Display
function Display({message}){
    return (
        <div>{message}</div>
    );
}

function Counter() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </div>
    )
}

export default Counter;