import { StatusBar } from 'expo-status-bar'

import { Home } from './src/screens/Home/home.screen'

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="inverted" />
    </>
  )
}
