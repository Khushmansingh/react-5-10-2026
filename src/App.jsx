import './App.css'
import Nav from './Nav.jsx'
import { useState } from 'react';
import { UserContext } from './Context/UserContest.js';
import { ThemeContext } from './Context/ThemeContext.js'

function App() {

  {/* M-1 */}

  const name = "Khushman";
  const age = 18;

  // M-2

  const user = {
    name : "Khushman",
    age : 18
  }


  // ======

  const [theme , setTheme] = useState("Light");

  function toogleTheme(){
      setTheme(prev=>prev === "light" ? "dark" : "light");
  }

  return (
    <>
      {/* M-1 */}

      {/* <UserContext.Provider value={{name,age}}>
      <h1>App Component</h1>
      <hr />
      <Nav />
      </UserContext.Provider> */}

      {/* M-2 */}
      <UserContext.Provider value={user}>
      <h1>App Component</h1>
      <hr />
      <Nav />
      </UserContext.Provider>


      {/*========*/}

      <h1>2nd concept</h1>

      <ThemeContext.Provider value = {{theme,toogleTheme}}>
        <Nav/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
