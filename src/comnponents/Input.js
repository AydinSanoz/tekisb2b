import * as React from 'react';
import {TextInput, View} from 'react-native';
import {input} from '../styles';

export function Input({placeholder, type, value}) {
  return (
    <View style={input.container}>
      <TextInput
        style={input.text}
        placeholder={placeholder}
        keyboardType={type}
        value={value}
      />
    </View>
  );
}
