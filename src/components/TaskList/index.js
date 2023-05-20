import React from 'react'

import { TaskItem } from './Task'
import { FlatList, View, StyleSheet } from 'react-native'

import { EmptyState } from './EmptyState'
import { Info } from './Info'

export const TaskList = ({ tasks, onCheck, onRemove }) => {
  const isEmpty = tasks.length === 0

  return (
    <View style={styles.container}>
      {!isEmpty && <Info tasks={tasks} />}
      <View style={styles.content}>
        {isEmpty ? (
          <EmptyState />
        ) : (
          <FlatList
            data={tasks.sort((a, b) => a.completed - b.completed)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem task={item} onCheck={onCheck} onRemove={onRemove} />
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
