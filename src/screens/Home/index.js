import { useState } from 'react'
import { View, Text, Alert } from 'react-native'

import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { TaskList } from '../../components/TaskList'
import { EmptyState } from '../../components/EmptyState'

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

    console.log(task)

    const newTasks = [...tasks, task]

    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Form placeholder="Digite uma task" onAdd={handleAdd} />

        {tasks.length ? <TaskList tasks={tasks} /> : <EmptyState />}
      </View>
    </View>
  )
}
