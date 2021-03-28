import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {button} from '../styles';

export function Button({onPress, text}) {
  console.log('Button render');
  return (
    <TouchableOpacity style={button.container} onPress={onPress}>
      <Text style={button.text}>{text}</Text>
    </TouchableOpacity>
  );
}
