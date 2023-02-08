import {useState} from 'react'

 function useInput(initVal) {
    const [item,setItem] = useState(initVal)

    const handleChange = (e)=>{
        setItem(e.target.value)
    }

    const handleReset = ()=>{
        setItem("")
    }



  return [item,handleChange,handleReset]
}
export default useInput
