import React, {useRef} from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

async function requestCameraPermission(): Promise<void> {
  if (Platform.OS === 'android') {
    const cameraAllowed = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (cameraAllowed === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  }
}

function CameraRecorder() {
  const [isRecording, setIsRecording] = React.useState(false);
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;
  requestCameraPermission();
  async function startRecording() {
    setIsRecording(true);
    if (!camera?.current) {
      return;
    }
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(newMicrophonePermission);
    camera.current.startRecording({
      flash: 'on',
      onRecordingFinished: video => console.log(video),
      onRecordingError: error => console.error(error),
    });
  }
  function stopRecording() {
    setIsRecording(false);
    if (!camera?.current) {
      return;
    }
    camera.current.stopRecording();
  }

  if (device == null) {
    return (
      <View>
        <Text>CameraRecorder</Text>
      </View>
    );
  }
  return (
    <>
      {/* <View style={{zIndex: 1}}>
        <Button title="Start" onPress={startRecording} />
        <Button title="Stop" onPress={stopRecording} />
      </View> */}
      <Camera
        video={true}
        audio={false}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={camera}
      />
    </>
  );
}
export default CameraRecorder;
