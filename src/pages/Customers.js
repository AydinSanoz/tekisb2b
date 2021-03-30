import * as React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import {customers} from '../styles';

export default function SettingsScreen() {
  console.log('CustomerScreen render');
  return (
    <SafeAreaView style={customers.container}>
      <View style={customers.content}>
        <Text>Customers!</Text>
        <TextInput placeholder="search" />
      </View>
    </SafeAreaView>
  );
}
