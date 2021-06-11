/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyContext from '../context/MyContext';

interface IUser {
  name: string;
  year: number;
}

const userDaApi = {
  name: 'Joabson',
  year: 31,
};

const Home: React.FC = ({navigation}: any) => {
  const {user, setUser}: any = useContext(MyContext);

  useEffect(() => {
    setTimeout(() => setUser(userDaApi), 1500);
  }, [setUser]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Usuário logado:</Text>
      <Text style={{fontWeight: 'bold'}}>{`${user?.name || ''}`}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('User', {user})}
        style={{
          backgroundColor: 'red',
          height: 30,
          width: '50%',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Ver Usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
