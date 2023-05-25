import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WebIcon from "react-native-vector-icons/MaterialCommunityIcons";

const OutputUtilityBar = ({ checkURL }) => {
  return (
    <View style={styles.outputUtilityBar}>
      <TouchableOpacity activeOpacity={0.4} onPress={checkURL}>
        <View style={styles.icon}>
          <WebIcon name="search-web" color="white" size={27} />
          <Text style={styles.IconText}>Abrir site</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  outputUtilityBar: {
    flex: 1,
    width: "100%",
    position: "absolute",
    top: "40%",
  },
  icon: {
    padding: 12,
    flexDirection: "row",
    margin: 12,
    gap: 13,
    borderWidth: 0.2,
    borderColor: "white",
    borderRadius: 50,
  },
  IconText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 0.5,
  },
});
export default OutputUtilityBar;
