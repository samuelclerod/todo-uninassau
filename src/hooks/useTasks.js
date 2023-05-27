import { useContext } from 'react'
import { TaskContext } from '../containers/TaskProvider'

export const useTasks = () => {
  const { tasks, handleAdd, handleCheck, handleRemove } =
    useContext(TaskContext)

  return { tasks, handleAdd, handleCheck, handleRemove }
}
