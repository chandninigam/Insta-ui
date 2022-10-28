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
  MaterialIcons as Icon6,
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
          <View style={styles.moreOptionView}>
            <View style={styles.userDetail}>
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU",
                }}
                style={styles.reelPersonName}
              />
              <Text style={styles.userName}>ronishanmnakeovers</Text>
              <Text style={styles.followText}>Follow</Text>
            </View>
            <TouchableOpacity style={styles.options}>
              <Icon5 name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {/* PostTagLine */}
          <View style={styles.tagLineView}>
            {/* Text left hand side */}
            <View style={styles.audio}>
              <Text style={styles.tagText}>Teeth Whiteing home remedy ...</Text>
              <View style={styles.tagLineDetail}>
                <Icon6 name="multitrack-audio" color="white" size={24} />
                <Text style={styles.tagSubText}>Original aud ...</Text>
                <Text style={styles.tagSubText}>ronishanmnakeovers</Text>
              </View>
            </View>
            {/* Image right hand side */}
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-photo/self-portrait-beautiful-chinese-girl_1262-18293.jpg?w=2000",
                }}
                style={styles.tagLineImage}
              />
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
    height: height / 1.15,
    width: width,
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    paddingHorizontal: height / 80,
    height: height / 1.1,
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
  moreOptionView: {
    display: "flex",
    flexDirection: "row",
    paddingTop: height / 30,
  },
  userDetail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  reelPersonName: {
    height: height / 24,
    width: height / 24,
    borderRadius: height / 15,
  },
  userName: {
    fontSize: height / 50,
    paddingLeft: height / 90,
    paddingRight: height / 50,
    color: "white",
  },
  followText: {
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: height / 50,
    paddingVertical: height / 80,
    borderRadius: height / 90,
    fontSize: height / 60,
  },
  options: {
    display: "flex",
    alignSelf: "center",
  },
  tagLineView: {
    display: "flex",
    flexDirection: "row",
    paddingTop: height / 70,
    alignItems: "center",
  },
  audio: {
    display: "flex",
    flex: 1,
  },
  tagText: {
    color: "white",
    fontSize: height / 50,
  },
  tagLineImage: {
    height: height / 20,
    width: height / 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: height / 70,
  },
  tagLineDetail: {
    display: "flex",
    flexDirection: "row",
    paddingTop: height / 70,
  },
  tagSubText: {
    color: "white",
    fontSize: height / 60,
    paddingHorizontal: height / 80,
  },
});
