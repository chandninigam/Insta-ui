import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Feather as Icon,
  AntDesign as Icon2,
  Fontisto as Icon3,
  Ionicons as Icon4,
  Entypo as Icon5,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function Reel() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Actual Reel */}
        <Image
          source={{
            uri: "https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/profile/user-uploads/user-13.jpg",
          }}
          style={styles.reelImage}
        />
        {/* Container which is display on Image  */}
        <View style={styles.textContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.textHeading}>Reels</Text>
            <TouchableOpacity style={styles.camera}>
              <Icon name="camera" color="white" size={32} />
            </TouchableOpacity>
          </View>
          {/* favourite */}
          <View style={styles.favView}>
            <Icon2 name="hearto" size={32} color="white" />
            <Text style={styles.likeNum}>36.5K</Text>
          </View>
          {/* Comment */}
          <View style={styles.commentView}>
            <Icon3 name="comment" size={32} color="white" />
            <Text style={styles.likeNum}>11.7K</Text>
          </View>
          {/* Share */}
          <View style={styles.commentView}>
            <Icon4 name="paper-plane-outline" size={32} color="white" />
          </View>
          {/* More Option */}
          <View style={styles.commentView}>
            <Icon5 name="dots-three-vertical" size={24} color="white" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  reelImage: {
    height: height,
    width: width,
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    paddingHorizontal: height / 80,
    height: height,
    width: width,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: height / 50,
  },
  textHeading: {
    fontSize: 24,
    flex: 1,
    fontWeight: "600",
    color: "white",
  },
  camera: {
    display: "flex",
    marginRight: 0,
  },
  favView: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: height / 2.5,
  },
  likeNum: {
    color: "white",
    paddingTop: 8,
    display: "flex",
    justifySelf: "center",
  },
  commentView: {
    display: "flex",
    alignItems: "flex-end",
    paddingTop: height / 30,
  },
});
