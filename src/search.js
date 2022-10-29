import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { SearchImageUrl } from "./dummyData/search/imageurl";

const { height } = Dimensions.get("window");

export default function Search() {
  return (
    <View style={styles.mainContainer}>
      {/* Search Container */}
      <View style={styles.searchView}>
        <Icon name="search" size={24} color="white" />
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          placeholderTextColor="white"
        />
      </View>
      {/* Automatic suggested */}
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        <View style={styles.storyAutoSuggContainer}>
          {SearchImageUrl.map((eachImage) => (
            <ImagesComponent eachImage={eachImage} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function ImagesComponent({ eachImage }) {
  return <Image style={styles.storyImage} source={{ uri: eachImage.imgurl }} />;
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  searchView: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: height / 80,
    marginTop: height / 80,
    backgroundColor: "#949490",
    padding: height / 120,
    borderRadius: height / 70,
  },
  textInput: {
    paddingLeft: 8,
    fontSize: height / 50,
  },
  scroll: {
    marginTop: height / 70,
  },
  storyAutoSuggContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  storyImage: {
    height: height / 5,
    width: height / 6.5,
  },
});
