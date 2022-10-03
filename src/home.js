import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
});
