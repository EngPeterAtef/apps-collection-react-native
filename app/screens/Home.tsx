import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
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
              onPress={() => navigation.navigate('Details')}>
              <FontAwesomeIcon size={30} icon={faMugSaucer} />
              <Text style={styles.btnText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Details')}>
              <FontAwesomeIcon size={30} icon={faMugSaucer} />
              <Text style={styles.btnText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Details')}>
              <FontAwesomeIcon size={30} icon={faMugSaucer} />
              <Text style={styles.btnText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Details')}>
              <FontAwesomeIcon size={30} icon={faMugSaucer} />
              <Text style={styles.btnText}>Details</Text>
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
    width: '100%',
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
  },
  text: {color: 'black', fontSize: 32, fontWeight: 'bold', margin: 10},
});
