import './App.css'
import Nav from './Nav.jsx'
import { UserContext } from './Context/UserContest.js';

function App() {

  {/* M-1 */}

  const name = "Khushman";
  const age = 18;

  // M-2

  const user = {
    name : "Khushman",
    age : 18
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
    </>
  )
}

export default App
