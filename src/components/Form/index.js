import React from 'react'
import {View, TextInput, TouchableOpacity, Image} from 'react-native'
import { colors } from '../../constants'
import { styles } from './styles'

export const Form = () => {
  
  return(
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray[300]}
        keyboardType="default"
      />

      <TouchableOpacity
        style={styles.button}
      >
        <Image source={require('../../../assets/icons/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}