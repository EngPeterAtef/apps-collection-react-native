import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Tts from 'react-native-tts';

const TextToSpeech = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const handleButtonPress = () => {
    // Handle button press logic here
    console.log(`Text to speech: ${inputText}`);
    Tts.speak(inputText);
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      resizeMode="cover"
      style={{
        // flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter text..."
          onChangeText={handleInputChange}
          value={inputText}
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Speak</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TextToSpeech;
