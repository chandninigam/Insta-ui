import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function Favourite() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Notifications</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: height / 20,
    marginHorizontal: height / 80,
  },
  header: {
    fontSize: height / 32,
    fontWeight: "500",
  },
});
