import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import MyContext from './context/MyContext';

// import { Container } from './styles';

const Settings: React.FC = () => {
  const {user}: any = useContext(MyContext);

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default Settings;
