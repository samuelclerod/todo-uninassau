import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { useTasks } from '../../../hooks/useTasks'

const CheckButton = ({ id, checked }) => {
  const { handleCheck } = useTasks()

  return (
    <TouchableOpacity onPress={() => handleCheck(id)}>
      {checked ? (
        <Image source={require('../../../../assets/icons/checked.png')} />
      ) : (
        <Image source={require('../../../../assets/icons/unchecked.png')} />
      )}
    </TouchableOpacity>
  )
}

const DeleteButton = ({ id }) => {
  const { handleRemove } = useTasks()
  return (
    <TouchableOpacity onPress={() => handleRemove(id)}>
      <Image source={require('../../../../assets/icons/trash.png')} />
    </TouchableOpacity>
  )
}

export const TaskItem = ({ task }) => {
  const { navigate } = useNavigation()

  const textStyle = task.completed
    ? {
        ...styles.taskText,
        textDecorationLine: 'line-through',
        color: colors.gray[300],
      }
    : styles.taskText

  const moveToDetails = () => {
    navigate('Details', { task })
  }

  return (
    <View style={styles.container}>
      <CheckButton id={task.id} checked={task.completed} />

      <Text style={textStyle}>{task.description}</Text>

      <DeleteButton id={task.id} />

      <TouchableOpacity onPress={moveToDetails}>
        <Text>➡️</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  taskText: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
  },
  container: {
    marginTop: 8,
    flexDirection: 'row',
    padding: 12,
    gap: 8,
    borderRadius: 8,
    color: colors.gray[100],
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 64,
    backgroundColor: colors.gray[500],
  },
})
