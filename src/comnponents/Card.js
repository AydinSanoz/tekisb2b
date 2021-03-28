import * as React from 'react';
import {Text, View} from 'react-native';
import {card} from '../styles';

export function Card() {
  console.log('Card render');

  return (
    <View style={card.container}>
      <Text>Card</Text>
    </View>
  );
}
