import { useState, useEffect, useCallback } from 'react'
import './App.scss';
import { Header, Content } from './components'

function App() {
  // init states to be passed as props
  const [ lastPos, setlastPos ] = useState(0);
  const [ isScrollUp, setIsScrollUp ] = useState(false);

  // `useCallback` returns memoize value instead of re-calculating this function everytimes when component re-randering.
  const handleScroll = useCallback(() => {
    const currentPos = window.pageYOffset;
    // in case scroll-down `lastPos` holds the val < currentPos, cuz it is being updated from currentPos and vice versa. 
    lastPos > currentPos ? setIsScrollUp(true) : setIsScrollUp(false);
    // update position of lastPos to current
    setlastPos(currentPos);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ lastPos, isScrollUp, handleScroll ])
  // when any of these [dependencies] value change, useEffect will re-render 

  return (
    <div className="app">
      <Header lastPos={ lastPos } isScrollUp={ isScrollUp } />
      <Content lastPos={ lastPos } isScrollUp={ isScrollUp } />
    </div>
  );
}

export default App;
