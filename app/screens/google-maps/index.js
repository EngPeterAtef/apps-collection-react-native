import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
export default function GoogleMapsScreen({navigation}) {
  const backBtn = '<';
  return (
    <SafeAreaView style={styles.contaier}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.btnContainer}>
            <Image
              source={require('../../assets/icons/chevron-left.png')}
              style={styles.btnImg(25)}
            />
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="black"
          style={styles.searchInput}
        />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 30.016316,
          longitude: 31.19451,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaier: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  // mapContainer: {
  //   // ...StyleSheet.absoluteFillObject,
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  map: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  appBar: {
    height: 50,
    backgroundColor: 'transparent',
    transparent: true,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 50,
    marginVertical: 10,
    backfaceVisibility: 'hidden',
    marginHorizontal: 10,
  },
  backArrow: {
    // position: 'absolute',
    // left: 10,
    marginHorizontal: 10,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  searchInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  btnContainer: {
    width: 40,
    height: 40,
    // backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: dimension => ({
    width: dimension,
    height: dimension,
    borderRadius: 12 / 1.25,
    tintColor: 'black',
  }),
});
