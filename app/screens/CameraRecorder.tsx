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
import Video from 'react-native-video';
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
  const [recordedVideo, setRecordedVideo]: [any, any] = React.useState(null);
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
      onRecordingFinished: video => {
        console.log(video);
        setRecordedVideo(video);
      },
      onRecordingError: error => console.error(error),
    });
  }
  async function stopRecording() {
    if (!camera?.current) {
      return;
    }
    await camera.current.stopRecording();
    setIsRecording(false);
    setCameraOpen(false);
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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.openBtn}
          onPress={() => setCameraOpen(!cameraOpen)}>
          <Text style={styles.openBtnText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
      {recordedVideo && !cameraOpen && (
        <View style={styles.videoContainer}>
          <Video
            source={{uri: recordedVideo.path}}
            style={styles.video}
            controls={true}
          />
        </View>
      )}
      {cameraOpen && (
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

export default CameraRecorder;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  openBtn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  openBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  recordButton: {
    padding: 20,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
  },
});
