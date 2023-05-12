import React from 'react'

import { TaskItem } from './Task'
import { FlatList } from 'react-native'

export const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ task }) => <TaskItem task={task} />}
      keyExtractor={(task) => task.id}
    />
  )
}
