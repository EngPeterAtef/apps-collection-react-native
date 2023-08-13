import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FingerprintAuth({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.btnContainer}>
            <Image
              source={require('../assets/icons/chevron-left.png')}
              style={styles.btnImg(25)}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Fingerprint Auth</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appBar: {
    height: 50,
    // backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 50,
    marginVertical: 10,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  btnImg: dimension => ({
    width: dimension,
    height: dimension,
    borderRadius: 12 / 1.25,
    tintColor: 'white',
  }),
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
