import HomeScreen from "./screens/HomeScreen.js";
import { AppProvider } from "./context.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QrScanOutput from "./screens/QrScanOutput.js";
import HistoryScreen from "./screens/HistoryScreen.js";
import HistoryScreenOnSelectItem from "./screens/HistoryScreenOnSelectItem";
import HistoryItemDetail from "./screens/HistoryItemDetails.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              animation: "fade",
            }}
          />
          <Stack.Screen
            name="OutputScreen"
            component={QrScanOutput}
            options={{
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="HistoryScreen"
            component={HistoryScreen}
            options={{
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="HistoryScreenOnSelect"
            component={HistoryScreenOnSelectItem}
            options={{
              animation: "none",
            }}
          />
          <Stack.Screen
            name="HistoryItemDetail"
            component={HistoryItemDetail}
            options={{
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
