import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CameraRecorder, FaceAuth, FlashLight, Home, TextToSpeech } from '../screens';
import GoogleMapsScreen from '../screens/google-maps/index';
const Stack = createStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Face Auth"
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
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FlashLight" component={FlashLight} />
      <Stack.Screen name="TextToSpeech" component={TextToSpeech} />
      <Stack.Screen name="Camera" component={CameraRecorder} />
      <Stack.Screen name="Face Auth" component={FaceAuth} options={{ headerShown: false }} />
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
