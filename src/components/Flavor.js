import React, { useState } from "react";
const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };
    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };
    const calculate = (operator) => {
        switch (operator) {
            case "+":
                setResult(+num1 + +num2);
                break;
            case "-":
                setResult(num1 - num2);
                break;
            case "*":
                setResult(num1 * num2);
                break;
            case "/":
                setResult(num1 / num2);
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <h2>Калькулятор</h2>
            <div>
                <input type="number" value={num1} onChange={handleNum1Change} />
                <select onChange={(e) => calculate(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="number" value={num2} onChange={handleNum2Change} />
                <button onClick={() => calculate("+")}>Рассчитать</button>
            </div>
            <div>
                <p>Результат: {result}</p>
            </div>
        </div>
    );
};
export default Calculator;

