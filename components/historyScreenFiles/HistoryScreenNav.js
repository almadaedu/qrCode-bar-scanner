import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import ArrowLeft from "react-native-vector-icons/Octicons";
import { useGlobalContext } from "../../context";
import TrashIcon from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

const HistoryScreenNav = ({ navigation }) => {
  const { historyList, clearHistoryList } = useGlobalContext();

  const navProps = {
    style: stylesofHistoryNav.navContainer,
  };
  return (
    <LinearGradient 
    colors={['#434343', '#121917']}
    {...navProps}>
      <View style={stylesofHistoryNav.innerWrapper}>
        <Pressable
          android_ripple={{ color: "grey", borderless: true, radius: 30 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeft
            name="arrow-left"
            size={30}
            color="white"
            style={{ marginTop: 5 }}
          />
        </Pressable>
        <Text style={stylesofHistoryNav.navText}>Histórico</Text>
      </View>

      {historyList.length !== 0 && (
        <View style={stylesofHistoryNav.clearHistoryButton}>
          <Pressable
            android_ripple={{ color: "grey", borderless: true, radius: 84 }}
            onPress={clearHistoryList}
          >
            <TrashIcon name="trash-2" size={25} color="gold" />
          </Pressable>
        </View>
      )}
    </LinearGradient>
  );
};

export const stylesofHistoryNav = StyleSheet.create({
  navContainer: {
    flex: 0.97,
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    flexDirection: "row",
    alignItems: "center",
  },
  innerWrapper: {
    alignItems: "center",
    marginTop: 35,
    marginLeft: 27,
    flexDirection: "row",
    gap: 30,
  },
  navText: {
    color: "white",
    fontSize: 21,
    letterSpacing: 0.8,
  },
  clearHistoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 40,
    marginRight: 27,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121917",
  },
});
export default HistoryScreenNav;
