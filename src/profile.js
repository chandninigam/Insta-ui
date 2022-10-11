import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Feather as Icon,
  AntDesign as Icon2,
  Ionicons as Icon3,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      {/* Header     */}
      <View style={styles.headerContainer}>
        <Icon name="lock" size={24} />
        <Text style={styles.profileName}>Wanda_Klein</Text>
        <Icon2 name="down" size={16} />
        <TouchableOpacity style={styles.plusIcon}>
          <Icon2 name="plussquareo" size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.threeLines}>
          <Icon3 name="reorder-three-outline" size={48} />
        </TouchableOpacity>
        <View style={styles.overLayCircle}>
          <Text>1</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: height / 80,
  },
  profileName: {
    fontSize: 24,
    paddingHorizontal: height / 80,
    fontWeight: "500",
  },
  plusIcon: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    paddingHorizontal: height / 80,
  },
  threeLines: {
    position: "relative",
  },
  overLayCircle: {
    position: "absolute",
    backgroundColor: "red",
    right: 16,
    height: height / 50,
    width: height / 50,
    display: "flex",
    alignItems: "center",
    borderRadius: height / 40,
    fontSize: 12,
    color: "black",
    top: 8,
  },
});
