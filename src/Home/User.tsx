/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const User: React.FC = ({navigation, route}: any) => {
  const user = route.params.user;

  return (
    <View>
      <Text>{user.name}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('EditUser', {user})}
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
