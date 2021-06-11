/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import MyContext from '../context/MyContext';

const EditUser: React.FC = ({navigation}: any) => {
  const {user, setUser}: any = useContext(MyContext);

  const [value, setValue] = useState(user.name);

  return (
    <View>
      <TextInput value={value} onChangeText={text => setValue(text)} />

      <TouchableOpacity
        onPress={() => {
          setUser({...user, name: value});
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
