import React from "react";
import { StyleSheet, View } from "react-native";
import HistoryScreenContent from "../components/historyScreenOnSelectFiles/HistoryScreenContent";
import HistoryScreenNav from "../components/historyScreenOnSelectFiles/HistoryScreenNav";
import { useGlobalContext } from "../context";

const HistoryScreenOnSelectItem = ({ navigation, route }) => {
  const { historyList } = useGlobalContext();
  return (
    <View style={styles.mainScreen}>
      <HistoryScreenNav navigation={navigation} route={route} />
      <HistoryScreenContent historyList={historyList} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});

export default HistoryScreenOnSelectItem;
