import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import User from '../Home/User';
import EditUser from '../Home/EditUser';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="EditUser" component={EditUser} />
    </Stack.Navigator>
  );
}

export default App;
