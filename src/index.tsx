import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import MyContext from './context/MyContext';

interface IUser {
  name: string;
  year: number;
}

export default function App() {
  const [user, setUser] = useState<IUser>({
    name: 'Context Api funcionou',
    year: 29,
  });

  return (
    <NavigationContainer>
      <MyContext.Provider value={{user, setUser}}>
        <Routes />
      </MyContext.Provider>
    </NavigationContainer>
  );
}
