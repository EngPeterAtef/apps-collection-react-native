import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import StackNavigator from './app/navigation/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

// import {LogBox} from 'react-native';
// LogBox.ignoreLogs(['new NativeEventEmitter()']);
