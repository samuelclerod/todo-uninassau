import { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'

import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { TaskList } from '../../components/TaskList/tasklist.component'

import { styles } from './home.styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <Form />

      <View style={styles.content}>
        <TaskList />
      </View>
    </View>
  )
}
