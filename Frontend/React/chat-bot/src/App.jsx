
import Chatinput from './Components/Chatinput'
import Chatmessages from './Components/Chatmessages'
// import Practice from './Components/Practice'

function App() {

  return (
    <div className="mx-auto max-w-4xl px-4 mt-6 flex flex-col justify-center items-center">
      <h1 className='text-center'>Chat-bot!</h1>
      <Chatinput />
      <Chatmessages/>
      {/* <Practice /> */}
    </div>
  )
}

export default App
