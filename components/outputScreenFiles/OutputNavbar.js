import React, { useEffect } from "react";
import { Text, View, StyleSheet, Pressable, BackHandler } from "react-native";
import ArrowLeft from "react-native-vector-icons/Octicons";
import { useGlobalContext } from "../../context";
import { LinearGradient } from "expo-linear-gradient";

const OutputNavbar = ({ navigation }) => {
  const { setScanned } = useGlobalContext();

  const handleBackButton = () => {
    setScanned(false);

    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 100);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );
    return () => backHandler.remove();
  }, []);

  return (
    <LinearGradient
    colors={['#434343', '#121917']}
    style={styles.outputNavbarContainer}>
      <View style={styles.innerWrapper}>
        <Pressable
          android_ripple={{ color: "grey", borderless: true, radius: 30 }}
          onPress={handleBackButton}
        >
          <ArrowLeft
            name="arrow-left"
            size={30}
            color="white"
            style={{ marginTop: 5 }}
          />
        </Pressable>
        <Text style={styles.outputNavbarText}>Output</Text>
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  outputNavbarContainer: {
    flex: 1.05,
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    flexDirection: "row",
  },
  innerWrapper: {
    alignItems: "center",
    marginTop: 38,
    marginLeft: 30,
    flexDirection: "row",
    gap: 30,
  },
  outputNavbarText: {
    color: "white",
    fontSize: 21,
    letterSpacing: 0.8,
  },
});

export default OutputNavbar;
