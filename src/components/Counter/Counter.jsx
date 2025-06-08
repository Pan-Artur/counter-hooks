import { useState } from "react";
import { Info } from "../Info/Info";

export const Counter = () => {
    const [value, setValue] = useState(0);

    return(
        <>
            <button onClick={() => {setValue(value + 1)}} type="button">Increment</button>
            <Info value={value} />
            <button onClick={() => {setValue(value - 1)}} type="button">Decrement</button>
        </>
    )
}