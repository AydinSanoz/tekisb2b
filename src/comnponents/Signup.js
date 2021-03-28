// Formik x React Native example
import React from 'react';
import {View, TextInput} from 'react-native';
import {Formik} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Button} from '.';
import {input} from '../styles';

export function Signup({setModalVisible}) {
  return (
    <Formik
      initialValues={{fname: '', lname: '', email: '', password: ''}}
      onSubmit={values => {
        console.log(values);
        setModalVisible(false);
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Ionicons
            name="ios-reorder-three"
            size={30}
            style={{textAlign: 'center'}}
          />

          <TextInput
            style={input.container}
            placeholder="Enter firstName"
            keyboardType="default"
            onChangeText={handleChange('fname')}
            onBlur={handleBlur('fname')}
            value={values.fname}
          />
          <TextInput
            style={input.container}
            placeholder="Enter lastName"
            keyboardType="default"
            onChangeText={handleChange('lname')}
            onBlur={handleBlur('lname')}
            value={values.lname}
          />
          <TextInput
            style={input.container}
            placeholder="Enter email"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <TextInput
            style={input.container}
            placeholder="Enter password"
            keyboardType="default"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <Button onPress={handleSubmit} text="Submit" />
        </View>
      )}
    </Formik>
  );
}
