import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import ArrowRight from "react-native-vector-icons/FontAwesome";

const HistoryScreenListItem = ({ item, navigation }) => {
  const handleLongPress = (id) => {
    navigation.navigate("HistoryScreenOnSelect", {
      id,
    });
  };

  const handlePress = () => {
    navigation.navigate("HistoryItemDetail", {
      item,
    });
  };

  return (
    <TouchableHighlight
      activeOpacity={0.65}
      style={stylesofListItem.itemView}
      onLongPress={() => handleLongPress(item.id)}
      onPress={() => handlePress()}
    >
      <View style={stylesofListItem.insideItemView}>
        <Text style={stylesofListItem.text}>Escaneado em {item.currentDate} </Text>
        <Text style={stylesofListItem.timeText}>
          {item.currentTime} {item.amOrPm}
        </Text>

        <ArrowRight name="long-arrow-right" size={20} color="white" />

        <Text style={stylesofListItem.dataText}>
          {item.data.substring(0, 25)}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export const stylesofListItem = StyleSheet.create({
  itemView: {
    borderWidth: 0.3,
    borderRadius: 7,
    borderColor: "white",
    backgroundColor: "#254250",
    marginTop: 40,
    marginHorizontal: 19,
    padding: 18,
  },
  insideItemView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  dataText: {
    color: "white",
    fontSize: 12,
    color: "rgb(10,170,220)",
    fontStyle: "italic",
  },
  timeText: {
    color: "grey",
    fontSize: 12,
    fontStyle: "italic",
  },
});

export default HistoryScreenListItem;
