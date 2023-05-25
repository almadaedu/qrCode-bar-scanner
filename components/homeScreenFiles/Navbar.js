import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import FlashLightIcon from "react-native-vector-icons/MaterialIcons";
import { useGlobalContext } from "../../context";
import AboutIcon from "react-native-vector-icons/FontAwesome";
import HistoryIcon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const Navbar = ({ navigation }) => {
  const { isFlashLightOn, toggleFlashLight } = useGlobalContext();

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        style={styles.flashLightIcon}
        onPress={toggleFlashLight}
      >
        <FlashLightIcon
          name={isFlashLightOn ? "flash-off" : "flash-on"}
          color="white"
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.flashLightIcon}
        onPress={() => {
          navigation.navigate("HistoryScreen");
        }}
      >
        <HistoryIcon name="history" color="white" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flex: 0.82,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginHorizontal: 45,
    marginTop: 25,
  },
  navbarIcon: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  flashLightIcon: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    paddingHorizontal: 13,
    paddingVertical: 12,
  },
});

export default Navbar;
