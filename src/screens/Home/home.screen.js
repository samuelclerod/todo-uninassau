import { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'

import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { TaskList } from '../../components/TaskList'

import { styles } from './home.styles'
import { DateTime } from 'luxon'

import { save, load } from '../../storage'
import { tasksKey } from '../../constants'

export function Home() {
  const [tasks, setTasks] = useState([])

  async function loadTasks() {
    const tasksSalvas = await load(tasksKey)
    setTasks(tasksSalvas)
  }

  async function saveTasks(tasksData) {
    const ok = await save(tasksData, tasksKey)
    if (ok) setTasks(tasksData)
  }

  useEffect(() => {
    loadTasks()
  }, []) // array vazio atualizar no primeiro carregamento

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

    saveTasks(newTasks)
  }

  function handleCheck(id) {
    newTasks = [...tasks]

    const task = tasks.find((task) => task.id === id)
    if (!task) {
      return
    }

    task.completed = !task.completed

    saveTasks(newTasks)
  }

  function handleRemove(id) {
    const confirm = {
      text: 'sim',
      onPress: () => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        saveTasks(updatedTasks)
      },
    }

    const cancel = {
      text: 'não',
      style: 'cancel',
    }

    Alert.alert('Remover tarefa', 'Certeza que deseja apagar?', [
      confirm,
      cancel,
    ])
  }

  return (
    <View style={styles.container}>
      <Header />

      <Form placeholder="Digite uma task" onSubmit={handleAdd} />

      <View style={styles.content}>
        <TaskList onCheck={handleCheck} onRemove={handleRemove} tasks={tasks} />
      </View>
    </View>
  )
}
