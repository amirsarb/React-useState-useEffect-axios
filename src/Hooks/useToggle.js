import {useState} from 'react'


 function useToggle(initVal) {
    const [item,setItem] = useState(initVal)

    const toggle = () =>{

      setItem(!item)
    
    }

return [item,toggle]
}

export default useToggle