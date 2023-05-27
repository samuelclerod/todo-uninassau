import { createContext, useEffect, useState } from 'react'
import { tasksKey } from '../constants'
import { save, load } from '../storage'
import { Alert } from 'react-native'
import { DateTime } from 'luxon'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    const tasksSalvas = await load(tasksKey)
    setTasks(tasksSalvas)
  }

  async function saveTasks(tasksData) {
    const ok = await save(tasksData, tasksKey)
    if (ok) setTasks(tasksData)
  }

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
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        handleAdd,
        handleCheck,
        handleRemove,
        loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
