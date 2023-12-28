import React, { useState } from 'react';
import "./calculator.css";
const Butt = prop=>{
    const handleClick = prop.handleClick
    return <button onClick={()=> handleClick(prop.num)}>{prop.num}</button>
}

const XCalculator = () => {
    const [str, setStr] = useState("");
    const [answer, setAnswer] = useState(null);
    const displayButts = ()=>{
        const arr = [7,8,9,"+",4,5,6,"-",1,2,3,"*","C",0,"=","/"];

        return arr.map(i=> {
            let clickFunction;
            switch(i){
                case "=": 
                    clickFunction = calculate
                    break;
                case "C":
                    clickFunction = clearInput
                    break;
                default:
                    clickFunction = handleClick
            }
            return(
                <Butt 
                    num={i} 
                    handleClick={clickFunction}
                />
            )
        });
    }

    const handleClick = (data)=>{
        setStr(prev=> prev.concat(data));
        // console.log(data)
    }

    const clearInput = ()=>{
        setStr("");
        setAnswer(null);
    }

    const operation = (a, b, type)=>{
        a = +a, b = +b;
        switch (type) {
            case "+": return a+b;
            case "-": return a - b;
            case "/": return a / b;
            case "*": return a * b;
        }
    }
    const calculate = ()=>{
        if(!str) return setAnswer("Error");
        let opArr = ['+', '-', "*", "/"], calculatedAnswer = 0;

        if(opArr.includes(str[str.length - 1])){
            //if last element is operator return error
            return setAnswer("Error");
        }
        // let operands = [], higherOperator, operators = [+,-]
        // loop str
        //     if(str[i] is number) temp.concat(str[i])
        //     else {
        //         if(str[i] is * or /){
        //             higherOperator = * or /;
        //         }else{
        //             if(higherOperator){
        //                 let temp = operands.pop() higherOperator temp;
        //             }
        //             operators.push(str[i])
        //         }
        //         operands.push(temp)
        //         temp = ""
        //     }
        let operands = [], higherOperator = null, operators = [], temp = "";
        for(let i = 0; i < str.length; i++){
            if(+str[i] || i === 0 || +str[i]===0){
                temp = temp.concat(str[i]);
            }
            else{
                if(str[i] === "/" || str[i] === "*"){
                    if(higherOperator){
                        temp = operation(operands.pop(), temp, higherOperator);
                    }
                    higherOperator = str[i];
                }else{
                    if(higherOperator){
                        temp = operation(operands.pop(), temp, higherOperator);
                        higherOperator = null;
                    }
                    operators.push(str[i]);
                }
                operands.push(temp);
                temp = ""
            }
            if(i === str.length-1){
                if(higherOperator){
                    temp = operation(operands.pop(), temp, higherOperator);
                }
                operands.push(`${temp}`);
            }
        }
        console.log(operands, operators)
        
        while(operators.length){
            let a = operands.shift();
            let b = operands.shift();
            let op = operators.shift();
            let c = operation(a,b,op);
            operands.unshift(c)
        }

        console.log(operands, operators)
        setAnswer(`${operands[0]}`);
    }
     return (
        <div>
            <h1>React Calculator</h1>
            <input value={str} type='text'/>
            {answer ? <p>{answer}</p> : null}
            <div className='buttonGrid'>
                {displayButts()}
            </div>
        </div>
    );
};



export default XCalculator;

/**
let temp1 = "", temp2="", currOperator = null

start loop
    if(temp1 is NAN or Infinity) return temp1
    if i is 0, concat str[i] to temp1
    else if str[i] is number{
        check if currOperator has value
        if yes temp2.concat(str[i])
        else temp1.concat(str[i])
    }

    else if str[i] is operator{
        check if currOperator has value
        if yes{
            do operation according to currOperator type
            temp1 = temp1 currOperator temp2

            currOperator = str[i]
        }
        else currOperator = str[i]
    }

    if i is last and currOperator has value{
        temp2.concat(str[i]);
        temp1 = temp1 currOperator temp2
    }
8 + 2
    i
tmep = "", 
[12, 155*12,]
let operands = [8], higherOperator, operators = [+]
loop str
    if(str[i] is number) temp.concat(str[i])
    else {
        if(str[i] is * or /){
            higherOperator = * or /;
        }else{
            if(higherOperator){
                let temp = operands.pop() higherOperator temp;
            }
            operators.push(str[i])
        }
        operands.push(temp)
        temp = ""
    }
    if(i is last) temp.concat(str[i])
    temp.push(operands)

 */