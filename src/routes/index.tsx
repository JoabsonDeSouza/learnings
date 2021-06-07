/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeRoutes from './home.routes';
import Profile from '../Profile';
import Settings from '../Settings';

function MyTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={String(index)}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                height: 50,
                backgroundColor: 'orange',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: isFocused ? '#673ab7' : '#fff',
                  fontWeight: isFocused ? 'bold' : 'normal',
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeRoutes} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
