import './App.css'
import Alert from './component/ui/Alert/Alert'
import { Bell,Ban,Move } from "lucide-react";

function App() {


  return (
    <>
      <Alert type={'type'} headerIcon={<Bell />} title='all things' />
      <Alert type={'type'} headerIcon={<Ban />} title='all bans' />
      <Alert type={'type'} headerIcon={<Move />} title='move' />

    </>
  )
}

export default App
  