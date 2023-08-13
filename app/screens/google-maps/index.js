import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '../../config/constants';

export default function GoogleMapsScreen({navigation}) {
  // map of markers
  const [markers, setMarkers] = useState([
    {
      id: 0,
      latlng: {
        latitude: 30.016316,
        longitude: 31.19451,
      },
      title: 'Home',
      description: 'This my home location',
    },
    {
      id: 1,
      latlng: {
        latitude: 30.018482,
        longitude: 31.194252,
      },
      title: 'work',
      description: 'This my work location',
    },
  ]);
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const mapRef = useRef(null);

  const MyCustomCalloutView = ({title, description, latlng}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
          borderColor: 'black',
          borderWidth: 1,
          flex: 1,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            alignSelf: 'center',
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: 'bold',
            fontSize: 12,
            alignSelf: 'center',
          }}>
          {latlng.latitude},{latlng.longitude}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            alignSelf: 'center',
          }}>
          {description}
        </Text>
      </View>
    );
  };

  // const MyCustomMarkerView = () => {
  //   return <FontAwesomeIcon size={30} icon={faMapPin} color="red" />;
  // };

  function onMapPress(e) {
    console.log('map pressed');
    console.log(e.nativeEvent.coordinate);
    const newMarker = {
      id: markers.length,
      latlng: e.nativeEvent.coordinate,
      title: 'new marker',
      description: `${e.nativeEvent.coordinate.latitude},${e.nativeEvent.coordinate.longitude}`,
    };
    setMarkers([...markers, newMarker]);
    console.log(markers);
  }

  async function moveToLocation(latitude, longitude) {
    console.log('moveToLocation');
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000,
    );
  }

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
        {/* <TextInput
          placeholder="Search..."
          placeholderTextColor="black"
          style={styles.searchInput}
        /> */}
        <View style={styles.searchInput}>
          <GooglePlacesAutocomplete
            placeholder="Search..."
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(JSON.stringify(data));
              console.log(JSON.stringify(details?.geometry?.location));
              moveToLocation(
                details?.geometry?.location?.lat,
                details?.geometry?.location?.lng,
              );
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            onFail={error => console.error(error)}
            styles={{
              color: 'black',
            }}
          />
        </View>
      </View>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 30.016316,
          longitude: 31.19451,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onLongPress={e => onMapPress(e)}
        showsBuildings={true}
        showsCompass={true}
        showsIndoors={true}
        showsIndoorLevelPicker={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsTraffic={true}
        showsScale={true}>
        {markers.map((marker, index) => (
          <Marker
            draggable
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            onDragEnd={e =>
              setMarkers([
                ...markers.filter(item => item.id !== marker.id),
                {
                  ...markers[index],
                  latlng: e.nativeEvent.coordinate,
                  description: `${e.nativeEvent.coordinate.latitude} , ${e.nativeEvent.coordinate.longitude}`,
                },
              ])
            }>
            {origin !== undefined && destination !== undefined ? (
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
              />
            ) : null}
            {/* <MyCustomMarkerView /> */}
            <Callout>
              <MyCustomCalloutView {...marker} />
            </Callout>
          </Marker>
        ))}
        <Circle
          center={{
            latitude: 30.016316,
            longitude: 31.19451,
          }}
          radius={100}
          fillColor="rgba(255, 255, 0, 0.2)"
          strokeColor="rgba(255, 255,0,0.5)" //border of the circle
          zIndex={2}
        />
        {/* <Polyline
          coordinates={[
            {
              latitude: 30.016316,
              longitude: 31.19451,
            },
            {
              latitude: 30.018482,
              longitude: 31.194252,
            },
          ]}
          strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          ]}
          strokeWidth={1}
        /> */}
        {/* <Polygon
          coordinates={[
            {
              latitude: 30.016316,
              longitude: 31.19451,
            },
            {
              latitude: 30.018482,
              longitude: 31.194252,
            },
            {
              latitude: 50.018482,
              longitude: 41.194252,
            },
          ]}
          strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          ]}
          strokeWidth={1}
        /> */}
      </MapView>
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
    zIndex: 0,
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
    zIndex: 1,
    // flex: 1,
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
