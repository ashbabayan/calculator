import { useState, useEffect } from 'react';
import InputScreen from './InputScreen';

let result = 0;
let finalResult;

const Buttons = () => { 
    const [value, setValue] = useState('');
    const [mathAction, setMathAction] = useState ('');
    const [secondValue, setSecondValue] = useState('');
    const [clicked, setClicked] = useState(true);
    const addToInput = (e) => {         
        !mathAction ? setValue(value + e.target.innerHTML) : setSecondValue(secondValue + e.target.innerHTML)   
    }

    const selectAction = (e) => {
        setMathAction(e.target.innerHTML )
    }

    const clearInputs = () => {
        setValue("");
        setMathAction("");
        setSecondValue("");
        finalResult = '';
    }

    const sum = (value, secondValue, mathAction)=>{  
        if(mathAction === '+'){        
            result = Number(value) + Number(secondValue);
            return result
        } else if(mathAction === '-'){
            result = Number(value) - Number(secondValue);
            return result
        } else if(mathAction === '*'){
            result = Number(value) * Number(secondValue);
            return result
        } else if(mathAction === '/'){
            result = Number(value) / Number(secondValue);
            return result
        }
        console.log(finalResult)
    }

    const checkClick = () => {
       setClicked(!clicked)
    }
    
    useEffect(() => {
       finalResult =  sum(value, secondValue, mathAction)
    },[clicked])
       
    return (       
        <div className="buttons_container"  >
          <InputScreen value={value} mathAction={mathAction} secondValue={secondValue} finalResult={finalResult}/>            
            <div className="actions_container" >
                <div className="numbers" onClick={addToInput}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                    <button>,</button>
                </div>
                <button className="delete" onClick={clearInputs}>del</button>
                <div className="actions" onClick={selectAction}>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button> 
                </div>
                <button className="equals" onClick={checkClick}>=</button>
            </div>
        </div>
    )
}

export default Buttons
