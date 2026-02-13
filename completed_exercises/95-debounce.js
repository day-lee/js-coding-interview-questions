import {useState, useEffect } from 'react'
import './App.css'
/*
debounce 

useDebounce - setTimeout for set the searchTerm, delay/ useEffect for timeout, dependency list: term, 
App - search input, show term on the page/ useEffect for console.log, dependency list is search input 
*/
function useDebounce(term, delay) {
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(()=>{
      setDebouncedTerm(term)
    }, delay)    // useEffect의 클린업은 함수를 반환해야한다. 실행() 말고 
    return () => clearTimeout(timer); // cleanup 익명함수! 화살표 함수 형태가 아니면 바로 트리거되어 즉시 취소. 영원히 실행되지 않음  
  }, [term, delay])

  return debouncedTerm;
}

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setInputValue(term);
  }

  const searchTerm = useDebounce(inputValue, 1000); // use it outside of useEffect 

  useEffect(() => {
    if (searchTerm) {
      console.log(searchTerm);
    }
   
  }, [searchTerm])

  return (
    <div>
      <h1> Search debounce </h1>
      <input value={inputValue} onChange={(e) => handleChange(e)} placeholder="Search here" />
      <div>Search Term: {searchTerm}</div>
    </div>
  )
}

export default App