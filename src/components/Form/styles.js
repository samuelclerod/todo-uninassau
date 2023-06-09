import { StyleSheet } from 'react-native'

import { colors } from '../../constants'

export const styles = StyleSheet.create({
  form: {
    marginTop: -24,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    backgroundColor: colors.gray[500],
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
