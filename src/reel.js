import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

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
          <View style={styles.header}>
            <Text style={styles.textHeading}>Reels</Text>
            <TouchableOpacity style={styles.camera}>
              <Icon name="camera" color="white" size={24} />
            </TouchableOpacity>
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
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: height / 50,
    zIndex: -1,
    backgroundColor: "red",
  },
  textHeading: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  camera: {
    display: "flex",
  },
});
