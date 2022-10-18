import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const { height } = Dimensions.get("window");

export default function Favourite() {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <Text style={styles.header}>Notifications</Text>
      {/* Pending Request */}
      <PendingRequest />
    </View>
  );
}

function PendingRequest() {
  return (
    // Container
    <View style={styles.prContainer}>
      {/* Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        }}
        style={styles.prImage}
      />
      {/* Circle top of the Image */}
      <View style={styles.prCircleImage}>
        <Text style={styles.textCircle}>123</Text>
      </View>
      {/* Request and Approve Container */}
      <View style={styles.prResquestContainer}>
        <Text style={styles.prResquestText}>Follow requests</Text>
        <Text style={styles.prApproveIgnore}>Approve and Ignore Request</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    marginTop: height / 20,
    marginHorizontal: height / 80,
  },
  header: {
    fontSize: height / 32,
    fontWeight: "500",
  },
  prContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: height / 40,
    alignItems: "center",
  },
  prImage: {
    height: height / 16,
    width: height / 16,
    borderRadius: height / 8,
    position: "relative",
  },
  prCircleImage: {
    position: "absolute",
    backgroundColor: "red",
    top: 1,
    left: height / 20,
    padding: height / 300,
    borderRadius: height / 20,
  },
  textCircle: {
    color: "white",
  },
  prResquestContainer: {
    paddingHorizontal: height / 40,
  },
  prResquestText: {
    fontSize: height / 56,
    fontWeight: "700",
  },
  prApproveIgnore: {
    paddingTop: height / 250,
    fontSize: height / 64,
    color: "#403f3f",
  },
});
