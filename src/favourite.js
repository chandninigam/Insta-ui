import { StyleSheet, Text, View } from "react-native";

export default function Favourite() {
  return (
    <View style={styles.mainContainer}>
      <Text>Favourite Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
});
