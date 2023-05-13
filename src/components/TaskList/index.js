import React from 'react'

import { TaskItem } from './Task'
import { FlatList, View, StyleSheet } from 'react-native'

import { EmptyState } from './EmptyState'

export const TaskList = ({ tasks, onCheck }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem task={item} onCheck={onCheck} />
            )}
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
