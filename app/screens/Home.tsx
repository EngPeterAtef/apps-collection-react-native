import {
  faCamera,
  faLightbulb,
  faMicrophone,
  faMugSaucer,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Home({navigation}: any): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.text}>Home</Text>
          <View style={styles.navigationContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('FlashLight')}>
              <FontAwesomeIcon size={30} color="blue" icon={faLightbulb} />
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
              onPress={() => navigation.navigate('Details')}>
              <FontAwesomeIcon size={30} icon={faMugSaucer} />
              <Text style={styles.btnText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Camera')}>
              <FontAwesomeIcon size={30} icon={faCamera} />
              <Text style={styles.btnText}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;

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
  btnText: {color: 'black', fontSize: 20, fontWeight: 'bold'},
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
  },
  text: {color: 'black', fontSize: 32, fontWeight: 'bold', margin: 10},
});
