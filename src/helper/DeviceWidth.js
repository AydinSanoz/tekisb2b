import {Dimensions, Platform} from 'react-native';

export const size = {
  width: Dimensions.get('window').width,
  height:
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        ),
};
