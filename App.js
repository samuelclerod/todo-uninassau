import { StatusBar } from 'expo-status-bar'

import { Home } from './src/screens/Home/home.screen'
import { TaskProvider } from './src/containers/TaskProvider'
import { Details } from './src/screens/Details/details.screen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { colors } from './src/constants'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Detalhes da Tarefa',
              headerStyle: {
                backgroundColor: colors.gray[700],
              },
              headerTintColor: colors.purple,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="inverted" />
    </TaskProvider>
  )
}
