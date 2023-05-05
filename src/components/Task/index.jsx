import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../../constants'

export const TaskItem = ({ task }) => {
  return (
    <View key={task} style={styles.TaskContent}>
      <Text style={styles.TaskText}>{task}</Text>
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
