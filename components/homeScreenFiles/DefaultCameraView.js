import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Linking,
} from "react-native";
import CameraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsIcon from "react-native-vector-icons/Feather";

const DefaultCameraView = ({ onPress }) => {
  const openSettigs = () => {
    Linking.openSettings();
  };

  return (
    <View style={styles.defaultCameracontainer}>
      <Text style={styles.text}>
        Por favor, permita o acesso à câmera
      </Text>
      <TouchableOpacity
        style={styles.cameraIcon}
        onPress={onPress}
        activeOpacity={0.3}
      >
        <CameraIcon name="camera" size={40} color="white"></CameraIcon>
      </TouchableOpacity>
      <View style={styles.downView}>
        <Text style={styles.textD}>
          Você pode prover permissão pelas configurações sempre que possível{" "}
        </Text>
        <TouchableOpacity style={styles.settingsIcon} onPress={openSettigs}>
          <SettingsIcon name="settings" size={27} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultCameracontainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cameraIcon: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text: {
    color: "grey",
    marginBottom: 25,
    fontSize: 13,
    textAlign: "center",
  },
  downView: {
    position: "absolute",
    top: "83%",
    width: "50%",
    alignItems: "center",
    gap: 15,
  },
  textD: {
    color: "grey",
    fontSize: 13,
    textAlign: "center",
  },
});

export default DefaultCameraView;
