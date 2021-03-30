import {Dimensions, StyleSheet} from 'react-native';

export const home = StyleSheet.create({
  container: {
    backgroundColor: '#ffffee',
    flex: 1,
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
    backgroundColor: '#ffccbc',
    padding: 10,
    margin: 10,
    borderColor: '#cb9b8c',
    borderWidth: 2,
    borderRadius: 20,
    width: Dimensions.get('window').width / 2,
  },
  img: {},
});

export const button = StyleSheet.create({
  container: {
    backgroundColor: '#888',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    width: 300,
  },
  text: {
    fontSize: 20,
  },
});

export const input = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#bdb9b7',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
  },
});
