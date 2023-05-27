import { StatusBar } from 'expo-status-bar'

import { Home } from './src/screens/Home/home.screen'
import { TaskProvider } from './src/containers/TaskProvider'

export default function App() {
  return (
    <TaskProvider>
      <Home />
      <StatusBar style="inverted" />
    </TaskProvider>
  )
}
