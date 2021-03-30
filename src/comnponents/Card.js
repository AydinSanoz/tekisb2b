import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {card} from '../styles';

export function Card({
  RecId,
  InventoryCode,
  InventoryName,
  OEM_Kod,
  OEM_Renk,
  Urun_Genislik,
}) {
  return (
    <TouchableOpacity style={card.container}>
      <Text>{RecId}</Text>
      <Text>{InventoryCode}</Text>
      <Text>{InventoryName}</Text>
      <Text>{OEM_Kod}</Text>
      <Text>{OEM_Renk}</Text>
      <Text>{Urun_Genislik}</Text>
    </TouchableOpacity>
  );
}
