import {faCircle, faStop} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useRef} from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

async function requestCameraPermission(): Promise<void> {
  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  }
  const newCameraPermission = await Camera.requestCameraPermission();
  console.log(`CameraPermission: ${newCameraPermission}`);
  const newMicrophonePermission = await Camera.requestMicrophonePermission();
  console.log(`MicrophonePermission: ${newMicrophonePermission}`);
}

function CameraRecorder() {
  const [isRecording, setIsRecording] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [cameraOpen, setCameraOpen] = React.useState(false);
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  useEffect(() => {
    if (!mounted) {
      return;
    }
    requestCameraPermission();
  }, [mounted]);

  async function startRecording() {
    if (!camera?.current) {
      return;
    }
    setIsRecording(true);
    camera.current.startRecording({
      flash: 'on',
      onRecordingFinished: video => console.log(video),
      onRecordingError: error => console.error(error),
    });
  }
  function stopRecording() {
    if (!camera?.current) {
      return;
    }
    setIsRecording(false);
    camera.current.stopRecording();
  }

  if (device == null) {
    return (
      <View>
        <Text>No Camera Was Found!</Text>
      </View>
    );
  }

  return (
    <>
      {!cameraOpen && (
        <>
          <Camera
            video={true}
            audio={false}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            ref={camera}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                if (isRecording) {
                  stopRecording();
                } else {
                  startRecording();
                }
              }}
              style={[
                styles.recordButton,
                {backgroundColor: isRecording ? 'red' : 'green'},
              ]}>
              <FontAwesomeIcon
                icon={isRecording ? faStop : faCircle}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    zIndex: 1,
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraRecorder;
