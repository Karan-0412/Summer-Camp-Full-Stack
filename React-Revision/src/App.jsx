import "./App.css" 
import React, {useRef} from 'react' ;
import {useState} from 'react' ;


function App(){

  const [count, setCount] = useState(10) ;

  const it = useRef(0) ; 
  const handleClick = () => {
    it.current += 1 ;
    if(it.current % 3 == 0) setCount(count * 2) ;
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App ;