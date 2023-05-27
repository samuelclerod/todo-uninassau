import React, { useContext } from 'react'

import { TaskItem } from './Task'
import { FlatList, View, StyleSheet } from 'react-native'

import { EmptyState } from './EmptyState'
import { Info } from './Info'
import { TaskContext } from '../../containers/TaskProvider'

export const TaskList = () => {
  const { tasks } = useContext(TaskContext)

  const isEmpty = tasks.length === 0

  return (
    <View style={styles.container}>
      {!isEmpty && <Info tasks={tasks} />}
      <View style={styles.content}>
        {isEmpty ? (
          <EmptyState />
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TaskItem task={item} />}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 20,
  },
  content: {
    width: '100%',
    justifyContent: 'flex-start',
  },
})
