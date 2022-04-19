import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks';
import ScanHeader from '../containers/ScanHeader';
import ScanPaymentMethods from '../containers/ScanPaymentMethods';
import ScanFocus from '../containers/ScanFocus';

export default function Scan({navigation} ) {
    const[{cameraRef}, {takePicture}]= useCamera(null)

    function onBarCodeRead(result) {
        console.log(result.data)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "transparent"  }}>
            <RNCamera
                ref={cameraRef}
                style={{ flex: 1 }}
                captureAudio={false}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                onBarCodeRead={onBarCodeRead}
                androidCameraPermissionOptions={{
                    title: "Permission to use camera",
                    message: "Camera is required for barcode scanning",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }}
            >
                <ScanHeader navigation={navigation} />
                <ScanFocus/>
                <ScanPaymentMethods navigation={navigation} />
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
});