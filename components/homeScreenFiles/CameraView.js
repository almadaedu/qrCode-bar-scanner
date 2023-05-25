import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, View, Text, Vibration } from "react-native";
import { useGlobalContext } from "../../context";
import { useIsFocused } from "@react-navigation/native";
import QrCodeContainer from "../outputScreenFiles/QrCodeContainer";
import ZoomControlSlider from "./ZoomControlSlider";
import { getCurrentDate, getCurrentTime } from "../../utils/getDT";
import { getData, setData } from "../../utils/handleAsyncStorage";
import uuid from "react-native-uuid";

const CameraView = ({navigation}) => {
  const { isFlashLightOn, historyList, setHistoryList } = useGlobalContext();
  const isFocused = useIsFocused();
  const [zoom, setZoom] = useState(0);
  const { scanned, setScanned } = useGlobalContext();

  useEffect(() => {
    getData(historyList, setHistoryList);
  }, []);

  useEffect(() => {
    setData(historyList);
  }, [historyList]);

  const handleqrCodeScan = ({ data, type }) => {
    setScanned(true);
    let currentDate = getCurrentDate();
    let currentTime = getCurrentTime();
    let amOrPm;
    const id = uuid.v4();
    const newHistoryListItem = {
      id,
      data,
      type,
      currentDate,
      currentTime,
      amOrPm,
    };

    if (parseInt(currentTime.substring(0, currentTime.indexOf(":"))) > 11) {
      amOrPm = "PM";
    } else {
      amOrPm = "AM";
    }
    Vibration.vibrate(100);

    setHistoryList([newHistoryListItem, ...historyList]);

    setTimeout(() => {
      navigation.navigate("OutputScreen", {
        data,
        type,
        currentDate,
        currentTime,
        amOrPm,
      });
    }, 90);
  };
  return (
    <View style={styles.cameraContainer}>
      {isFocused && (
        <Camera
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleqrCodeScan}
          flashMode={
            isFlashLightOn
              ? Camera.Constants.FlashMode.torch
              : Camera.Constants.FlashMode.off
          }
          style={styles.camera}
          type={CameraType.back}
          zoom={zoom}
        >
          <QrCodeContainer />
        </Camera>
      )}

      <ZoomControlSlider zoom={zoom} setZoom={setZoom} />

      <View style={styles.zoomTextView}>
        <Text style={styles.zoomText}>
          Zoom : {zoom <= 0.05 ? 0 : zoom.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 4,
    justifyContent: "center",
    borderTopWidth: 0.5,
    borderTopColor: "grey",
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  zoomTextView: {
    position: "absolute",
    top: "90%",
    left: "43%",
  },
  zoomText: {
    color: "grey",
    fontSize: 13,
  },
});

export default CameraView;
