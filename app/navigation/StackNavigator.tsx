import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CameraRecorder, FlashLight, Home, TextToSpeech} from '../screens';

const Stack = createStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomEndRadius: 30,
          height: 100,
          borderBottomStartRadius: 30,
        },
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
          padding: 10,
          textAlign: 'center',
        },
        headerBackgroundContainerStyle: {
          backgroundColor: '#2e1980',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FlashLight" component={FlashLight} />
      <Stack.Screen name="TextToSpeech" component={TextToSpeech} />
      <Stack.Screen name="Camera" component={CameraRecorder} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
