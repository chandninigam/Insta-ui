import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const { height } = Dimensions.get("window");

export default function Favourite() {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <Text style={styles.header}>Notifications</Text>
      {/* Pending Request */}
      <PendingRequest />
      {/* New On Insta */}
      <TileHeader title="New" />
      <NewOnInsta />
    </View>
  );
}

// Tile Header
function TileHeader({ title }) {
  return <Text style={styles.tileHeader}>{title}</Text>;
}

// Pending Request Container
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

// New On Insta
function NewOnInsta() {
  return (
    <View style={styles.newOnInstaContainer}>
      <Image
        source={{
          uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=584",
        }}
        style={styles.onInstaImage}
      />
      <Image
        source={{
          uri: "https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg",
        }}
        style={styles.otherOnInstaImage}
      />
      <View style={styles.postRelatedInfo}>
        <Text style={styles.suggText}>Suggested:</Text>
        <Text style={styles.postDetail}>
          makeoverbyaanchalbhatia, hiteshchoudharyofficial and
          urvashi_kiran_sharma
        </Text>
      </View>
      <Image
        source={{
          uri: "https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png",
        }}
        style={styles.recentPost}
      />
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
  tileHeader: {
    paddingVertical: height / 48,
    fontSize: height / 44,
    fontWeight: "500",
  },
  newOnInstaContainer: {
    display: "flex",
    flexDirection: "row",
  },
  onInstaImage: {
    position: "relative",
    height: height / 24,
    width: height / 24,
    borderRadius: height / 12,
  },
  otherOnInstaImage: {
    position: "absolute",
    height: height / 24,
    width: height / 24,
    borderRadius: height / 12,
    borderColor: "white",
    borderWidth: 1,
    top: 8,
    left: 16,
  },
  postRelatedInfo: {
    display: "flex",
    paddingHorizontal: height / 32,
    flex: 1,
  },
  suggText: {
    fontSize: height / 56,
    color: "#5c5c5c",
  },
  postDetail: {
    fontSize: height / 64,
    fontWeight: "500",
  },
  recentPost: {
    height: height / 20,
    width: height / 20,
  },
});
