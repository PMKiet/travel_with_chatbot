import { useSelector, useDispatch } from "react-redux"


//from action redux
import { increment, decrement } from "@/redux/actions/test"

export const Home = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Count: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Tang</button>
            <button onClick={() => dispatch(decrement())}>Giam</button>

        </>
    )
}