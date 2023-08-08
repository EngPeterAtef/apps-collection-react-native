import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../screens';

const Stack = createStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
