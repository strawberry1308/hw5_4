import {useState, useEffect} from "react";

export default function Example() {
    const[count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return(
        <div className="count-block">
            <h2>Counter</h2>
            <p className="count-descr">you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </div>
    )
}