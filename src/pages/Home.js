import * as React from 'react';
import {
  View,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';

import {Signup, Card, Button} from '../comnponents';
import {home} from '../styles';

export default function HomeScreen() {
  console.log('HomScreen render');
  const [modalVisible, setModalVisible] = React.useState(false);

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );

  const toggleModel = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={home.container}>
      <View style={home.content}>
        <KeyboardAvoidingView behavior="padding">
          <Modal
            isVisible={modalVisible}
            deviceWidth={deviceWidth}
            deviceHeight={deviceHeight}
            onBackdropPress={toggleModel}
            onSwipeComplete={toggleModel}
            swipeDirection="down">
            <View style={home.modal}>
              <Signup setModalVisible={setModalVisible} />
            </View>
          </Modal>
          <Card></Card>
          <Button text="SignIn" onPress={toggleModel} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
