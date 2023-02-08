import React from 'react'
import useToggle from './Hooks/useToggle'
import useInput from './Hooks/useInput'

export default function Togglemoji() {
    const [isBlack, setToggleBlack] = useToggle(1)
    const [isNoEntry, setToggleEntry]  = useToggle(1)
    const [mytext,handleChangeText,handleResetText] = useInput("")


    return (
        <div>
    <h1 onClick={setToggleBlack}>{isBlack?"⚫️":"⚪️"}</h1>
    <h1 onClick={setToggleEntry}>{isNoEntry?"⛔️":"🟢"}</h1>
    <div>

        <h1>This is my text...{mytext}</h1>
        <input type="text" name="name" onChange={handleChangeText} value={mytext} />
        <br />
        <button onClick={handleResetText}> Reset</button>
    </div>

    </div>
  )



}
