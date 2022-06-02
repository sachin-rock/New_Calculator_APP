import React, {useState} from 'react';
import './App.css'

const App = () => {

  const [result, setResult] = useState('')

  const handleCLick = (e)=>{
    setResult(result.concat(e.target.value));
    console.log(result.concat(e.target.value))
  }
  const clear=()=>{
    setResult('')
  }
  const deleteScreen=()=>{
    setResult(result.slice(0, result.length- 1))
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult('syntax error')
    }
  }
  return (
    <div className='container'>
      <form>
        <input className='current-operand output' type={'text'} value={result} />
      </form>

      <div className='buttons'>
        <button className='ac span-two' onClick={clear} >AC</button>
        <button onClick={deleteScreen} >Del</button>

        <button value='/' onClick={handleCLick} >&divide;</button>
        <button value='7' onClick={handleCLick} >7</button>
        <button value='8' onClick={handleCLick} >8</button>
        <button value='9' onClick={handleCLick} >9</button>
        <button value='*' onClick={handleCLick} >&times;</button>
        <button value='4' onClick={handleCLick} >4</button>
        <button value='5' onClick={handleCLick} >5</button>
        <button value='6' onClick={handleCLick} >6</button>
        <button value='-' onClick={handleCLick} >-</button>
        <button value='1' onClick={handleCLick} >1</button>
        <button value='2' onClick={handleCLick} >2</button>
        <button value='3' onClick={handleCLick} >3</button>
        <button value='+' onClick={handleCLick} >+</button>
        <button value='0' onClick={handleCLick} >0</button>
        <button value='.' onClick={handleCLick} >.</button>
        <button className='span-two' onClick={calculate} >=</button>
      </div>
    </div>
  );
};

export default App;