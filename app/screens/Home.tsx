import {
  faCamera,
  faIdBadge,
  faLightbulb,
  faMapPin,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const image = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
};
function Home({ navigation }: any): JSX.Element {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>
              Welcome To React Native{' '}
              <Image
                source={image}
                style={{
                  padding: 10,
                  resizeMode: 'contain',
                  width: 60,
                  height: 60,
                }}
              />
            </Text>
            <View style={styles.navigationContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('FlashLight')}>
                <FontAwesomeIcon size={30} color="black" icon={faLightbulb} />
                <Text style={styles.btnText}>Flash Light</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('TextToSpeech')}>
                <FontAwesomeIcon size={30} icon={faMicrophone} />
                <Text style={styles.btnText}>Text To Speech</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Camera')}>
                <FontAwesomeIcon size={30} icon={faCamera} />
                <Text style={styles.btnText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Maps')}>
                <FontAwesomeIcon size={30} icon={faMapPin} />
                <Text style={styles.btnText}>Maps</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Face Auth')}>
                <FontAwesomeIcon size={30} icon={faIdBadge} />
                <Text style={styles.btnText}>Face Auth</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  btnText: { color: 'black', fontSize: 20, fontWeight: 'bold' },
  btn: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 150,
    elevation: 10,
    shadowColor: 'red',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

export default Home;
