import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Torch from 'react-native-torch';

function FlashLight(): JSX.Element {
  const [isTorchOn, setIsTorchOn] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flash Light</Text>
      <TouchableOpacity
        style={btn(isTorchOn)}
        onPress={() => handleFlashLight(isTorchOn, setIsTorchOn)}>
        <Text style={styles.btnText}>{isTorchOn ? 'Turn On' : 'Turn Off'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FlashLight;

async function handleFlashLight(
  isTorchOn: any,
  setIsTorchOn: any,
): Promise<void> {
  if (Platform.OS === 'ios') {
    try {
      Torch.switchState(isTorchOn);
      setIsTorchOn(!isTorchOn);
    } catch (e) {
      ToastAndroid.show(
        'We seem to have an issue accessing your torch',
        ToastAndroid.SHORT,
      );
    }
  } else {
    const cameraAllowed = await Torch.requestCameraPermission(
      'Camera Permissions', // dialog title
      'We require camera permissions to use the torch on the back of your phone.', // dialog body
    );

    if (cameraAllowed) {
      try {
        Torch.switchState(isTorchOn);
        setIsTorchOn(!isTorchOn);
      } catch (e) {
        ToastAndroid.show(
          'We seem to have an issue accessing your torch',
          ToastAndroid.SHORT,
        );
      }
    }
  }
}

const btn = (isTorchOn: any): ViewStyle => ({
  borderRadius: 10,
  margin: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60%',
  height: 150,
  shadowColor: 'black',
  borderWidth: 1,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 3,
  backgroundColor: isTorchOn ? '#D32626' : '#79D70F',
});

const styles = StyleSheet.create({
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EDF4F2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
