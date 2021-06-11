/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyContext from '../context/MyContext';

// import { Container } from './styles';

const User: React.FC = ({navigation}: any) => {
  const {user}: any = useContext(MyContext);

  return (
    <View>
      <Text>{user.name}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('EditUser')}
        style={{
          backgroundColor: 'red',
          height: 30,
          width: '50%',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Editar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;
