import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather as Icon, AntDesign as Icon2 } from "@expo/vector-icons";

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
              <Icon name="camera" color="white" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.favView}>
            <Icon2 name="hearto" size={24} color="white" />
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
  },
});
