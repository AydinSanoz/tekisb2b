import {Dimensions, StyleSheet} from 'react-native';

export const home = StyleSheet.create({
  container: {
    backgroundColor: '#ece',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    flex: 1,
    padding: 10,
    marginTop: 100,
    backgroundColor: 'red',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export const customers = StyleSheet.create({
  container: {
    backgroundColor: '#bcb',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {},
});

export const card = StyleSheet.create({
  container: {
    backgroundColor: '#ffc',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 2,
  },
});

export const button = StyleSheet.create({
  container: {
    backgroundColor: '#888',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});

export const input = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#ffffff95',
    borderRadius: 10,
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
});
