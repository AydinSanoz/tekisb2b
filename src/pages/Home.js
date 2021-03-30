import * as React from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';

import {Signup, Card, Button, Input} from '../comnponents';
import {home} from '../styles';
import axios from 'axios';
import {useEffect} from 'react';
import {size} from '../helper/DeviceWidth';

export default function HomeScreen() {
  console.log('HomScreen render');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [data, setData] = React.useState([]);

  const toggleModel = () => {
    setModalVisible(!modalVisible);
  };
  const onFilteredData = val => {
    console.log(val);
  };

  const renderItem = ({item}) => <Card {...item} />;

  useEffect(() => {
    axios
      .get('http://localhost:3000/inventory')
      .then(res => setData(res.data))
      .catch(err => console.log('error occured', err));
  }, []);

  return (
    <SafeAreaView style={home.container}>
      <View style={home.container}>
        <KeyboardAvoidingView behavior="padding">
          <Input placeholder="Search KeyWord" onChangeText={onFilteredData} />
          <Modal
            isVisible={modalVisible}
            deviceWidth={size.width}
            deviceHeight={size.height}
            onBackdropPress={toggleModel}
            onSwipeComplete={toggleModel}
            swipeDirection="down">
            <View style={home.modal}>
              <Signup setModalVisible={setModalVisible} />
            </View>
          </Modal>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            horizontal
          />
          <Button text="SignIn" onPress={toggleModel} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
