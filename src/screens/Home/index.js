import { View, Text, Alert } from 'react-native'
import { styles } from './styles'

import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { useState } from 'react'
import { TaskItem } from '../../components/Task'

export function Home() {
  const [tasks, setTasks] = useState([])

  function handleAdd(text = '') {
    const existsTask = tasks.includes(text)

    if (existsTask) {
      return Alert.alert('Atenção', 'Essa task já foi inserida')
    }

    if (!text.length) {
      return
    }

    const newTasks = [...tasks, text]

    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header />

      <Form placeholder="Digite uma task" onAdd={handleAdd} />

      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </View>
  )
}
