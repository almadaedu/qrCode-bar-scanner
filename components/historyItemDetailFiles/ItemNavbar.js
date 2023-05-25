import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert,
  ToastAndroid,
} from "react-native";
import ArrowLeft from "react-native-vector-icons/Octicons";
import TrashIcon from "react-native-vector-icons/Feather";
import { useGlobalContext } from "../../context";
import { LinearGradient } from "expo-linear-gradient";

const ItemNavbar = ({ navigation, currentDate, id }) => {
  const { deleteItem } = useGlobalContext();

  const handleBackButton = () => {
    navigation.goBack();
  };

  const helperDelete = () => {
    deleteItem(id);
    navigation.goBack();

    ToastAndroid.show("Escaneamento removido do histórico", ToastAndroid.SHORT);
  };

  const handleDeleteItemAndNavBack = () => {
    Alert.alert(
      "Deletar escaneamento",
      "Deseja excluir este escaneamento do histórico?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",

          onPress: () => helperDelete(),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const deleteButtonProps = {
    style: styles.clearItemButton,
  };

  return (
    <LinearGradient 
    colors={['#434343', '#121917']}
    style={styles.navContainer}>
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
        <Text style={styles.navText}>Escaneado em {currentDate}</Text>
      </View>

      <View {...deleteButtonProps}>
        <Pressable
          android_ripple={{ color: "white", borderless: true, radius: 52 }}
          onPress={handleDeleteItemAndNavBack}
        >
          <TrashIcon name="trash-2" size={25} color="white" />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 1.1,
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
    fontSize: 17,
    letterSpacing: 0.6,
  },
  clearItemButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 40,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(100,100,100,0.4)",
  },
});

export default ItemNavbar;
