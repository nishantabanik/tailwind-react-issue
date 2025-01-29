
const Counter = ({ counter, setCounter }) => {

    const increment = () => {
        setCounter((prev) => prev + 1)
    }

    const decrement = () => {
        setCounter((prev) => prev - 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            {counter}
            <button onClick={increment}>+</button>
            <br />
        </div>
    )
}

export default Counter;