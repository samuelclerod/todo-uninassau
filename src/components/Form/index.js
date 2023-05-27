import React, { useContext, useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../constants'
import { styles } from './styles'
import { TaskContext } from '../../containers/TaskProvider'

export const Form = () => {
  const [text, setText] = useState()

  const { handleAdd } = useContext(TaskContext)

  const onChangeInput = (value) => {
    setText(value)
  }

  const handleAddTask = () => {
    handleAdd(text.trim())
    setText('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma task"
        placeholderTextColor={colors.gray[300]}
        keyboardType="default"
        onChangeText={onChangeInput}
        value={text}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Image source={require('../../../assets/icons/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}
