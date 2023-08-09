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
      <Stack.Screen name="Maps" component={GoogleMapsScreen} options={{
        headerShown: false, headerBackAllowFontScaling: true, animationEnabled: true,
        headerTitle: 'Google Maps', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 20, fontWeight: 'bold', color: 'black' },
        headerBackAccessibilityLabel: 'Go back to home screen',
        headerMode: 'float',
      }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
