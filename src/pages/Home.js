import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {home} from '../styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={home.container}>
      <View style={home.content}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}
