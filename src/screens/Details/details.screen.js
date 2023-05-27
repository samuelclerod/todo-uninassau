import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants'

export const Details = ({ route }) => {
  const { task } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.id}</Text>
      <Text style={styles.text}>{task.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[600],
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: colors.gray[300],
  },
})
