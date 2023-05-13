import { useState } from 'react'
import { View, Text, Alert } from 'react-native'

import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { TaskList } from '../../components/TaskList'

import { styles } from './styles'
import { DateTime } from 'luxon'

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

    const task = {
      id: DateTime.now().toString(),
      description: text,
      completed: false,
    }

    const newTasks = [...tasks, task]

    setTasks(newTasks)
  }

  function handleCheck(id) {
    newTasks = [...tasks]

    const task = tasks.find((task) => task.id === id)

    task.completed = !task.completed

    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header />

      <Form placeholder="Digite uma task" onAdd={handleAdd} />

      <View style={styles.content}>
        <TaskList tasks={tasks} onCheck={handleCheck} />
      </View>
    </View>
  )
}
