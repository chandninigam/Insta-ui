import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
});
