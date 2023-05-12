import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { colors } from '../../../constants'

export const TaskItem = ({ task }) => {
  console.log('umt este de task: ', task)
  return (
    <View style={styles.TaskContent}>
      <Text style={styles.TaskText}>{task.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  TaskText: {
    color: colors.gray[100],
  },
  TaskContent: {
    backgroundColor: colors.gray[400],
  },
})
