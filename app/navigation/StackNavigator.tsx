import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CameraRecorder, FlashLight, Home, TextToSpeech } from '../screens';
import GoogleMapsScreen from '../screens/google-maps/index';
const Stack = createStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="FlashLight" component={FlashLight} />
      <Stack.Screen name="TextToSpeech" component={TextToSpeech} />
      <Stack.Screen name="Camera" component={CameraRecorder} />
      <Stack.Screen name="Maps" component={GoogleMapsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
