import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
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

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter()']);
