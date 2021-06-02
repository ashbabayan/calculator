const InputScreen = (props) => {
    return (
        <div className="calc_input">
            <div className="calc_input">
               { !props.mathAction ? <p>{props.value}</p> : (!props.finalResult ? <p>{props.secondValue} </p> : <p>{props.finalResult} </p>) }
            </div>            
        </div>    
    )
}

export default InputScreen
