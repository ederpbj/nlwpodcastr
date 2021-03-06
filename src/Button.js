import {useState} from 'react';

export default function Button(props){
const [counter, setCounter] = useState(1); //valor inicial vai ser 1

function increment() {
  setCounter(counter +1);
}

  //variáveis javascript dentro do html ficam entre {}
  return(
    <>
      <span>{counter}</span>
      <button onClick={increment} >{props.children}</button>
      <br/>
    </>
  )
}