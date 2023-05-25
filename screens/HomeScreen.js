import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  BackHandler,
  Alert,
  ActivityIndicator,
} from "react-native";
import DefaultCamera from "../components/homeScreenFiles/DefaultCameraView";
import Navbar from "../components/homeScreenFiles/Navbar";
import CameraView from "../components/homeScreenFiles/CameraView";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const handlePermission = () => {
    requestPermission();
  };

  const exitApp = () => {
    Alert.alert(
      "Fechar QR Scanner",
      "Tem certeza que deseja fechar a aplicação?",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: true,
      }
    );
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      exitApp
    );
    return () => backHandler.remove();
  }, []);

  if (!permission) {
    return (
      <>
        <ActivityIndicator
          size="large"
          style={styles.loadingContainer}
          color="#ffffff"
        />
        <StatusBar style="light" />
      </>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.appContainer}>
        <DefaultCamera onPress={handlePermission} />
        <StatusBar style="light" />
      </View>
    );
  }

  return (
    <LinearGradient
    colors={['#434343', '#121917']}
    style={styles.appContainer}>
      <Navbar exitApp={exitApp} navigation={navigation} />
      <CameraView navigation={navigation} />
      <StatusBar style="light" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  appContainer: {
    flex: 1,
  },
});

export default HomeScreen;
