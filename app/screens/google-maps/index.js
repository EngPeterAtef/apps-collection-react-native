import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function GoogleMapsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.appBar} onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-undo-circle-outline"
          size={20}
          color="white"
          style={styles.backArrow}
        />
        <Text>Google Maps Screen</Text>
      </Pressable>
      <View style={{backgroundColor: 'green', flex: 1}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
  },
  backArrow: {
    position: 'absolute',
    left: 10,
  },
});
