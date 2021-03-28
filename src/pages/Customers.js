import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {customers} from '../styles';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={customers.container}>
      <View style={customers.content}>
        <Text>Customers!</Text>
      </View>
    </SafeAreaView>
  );
}
