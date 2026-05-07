import './App.css'
import RandomUsers from './Components/APIdata'
import ReusableCard from './Components/ReusableCard'
import UserProfileCard from './Components/UserProfile'
// import APIdata from './Components/APIdata'
import Counter from './counter'
import DisplayElmt from './DisplayElmt'


function App() {
 
  return (
    <>
    <h1>Hello React!</h1>
    <Counter />
    <DisplayElmt />
    {/* <APIdata /> */}
    <ReusableCard />
    <UserProfileCard />
    <RandomUsers />
    </>
  )
}

export default App
