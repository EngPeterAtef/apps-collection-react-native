import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
export default function GoogleMapsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.contaier}>
      <View style={styles.appBar}>
        {/* <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={'../../assets/icons/chevron-left.png'}
            resizeMode="contain"
            style={styles.btnImg('60%')}
          />
        </TouchableOpacity> */}
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
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
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
    // backgroundColor: 'white',
    borderRadius: 12 / 1.25,
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
