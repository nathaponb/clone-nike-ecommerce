import { useState, useEffect, useCallback } from 'react'
import './App.scss';
import { Header, Content } from './components'

function App() {

  const [ lastPos, setlastPos ] = useState(0);
  const [ isScrollUp, setIsScrollUp ] = useState(false);

  const handleScroll = useCallback(() => {
    const currentPos = window.pageYOffset;

    lastPos > currentPos ? setIsScrollUp(true) : setIsScrollUp(false);
    setlastPos(currentPos);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ lastPos, isScrollUp, handleScroll ])

  return (
    <div className="app">
      <Header lastPos={ lastPos } isScrollUp={ isScrollUp } />
      <Content lastPos={ lastPos } isScrollUp={ isScrollUp } />
    </div>
  );
}

export default App;
