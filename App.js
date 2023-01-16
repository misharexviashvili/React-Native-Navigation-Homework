import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function HomeScreen({ navigation }) {
  const navigateToDetails = () => {
    navigation.navigate("Details");
  };
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>Hello! This is Home Screen</Text>
      <Button title="Go to Details" onPress={navigateToDetails} />
    </View>
  );
}
function DetailsScreen({ navigation }) {
  const navigateToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.detailsScreen}>
      <View style={styles.detailsScreenBorder}>
        <Text style={styles.detailsScreenText}>Details Screen</Text>
      </View>
        <Button title="Go to Home" onPress={navigateToHome} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    flex: 1,
  },
  homeScreenText: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 24,
  },
  detailsScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#777",
  },
  detailsScreenBorder: {
    padding: 18,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    marginBottom:24
  },
  detailsScreenText: {
    fontSize: 32,
    color: "#000",
  },
});
