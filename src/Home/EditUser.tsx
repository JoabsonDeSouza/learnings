/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

const EditUser: React.FC = ({navigation}: any) => {
  // const user = route.params.user;

  const [value, setValue] = useState('');

  return (
    <View>
      <TextInput value={value} onChangeText={text => setValue(text)} />

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: 'blue',
          height: 30,
          width: '50%',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditUser;
