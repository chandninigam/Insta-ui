import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import {
  Feather as Icon,
  AntDesign as Icon2,
  Ionicons as Icon3,
} from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MemoriesData } from "./dummyData/profile/memoryData";
import { useState } from "react";
import { PostsArray, TaggedPostArray } from "./dummyData/profile/post";

const { height, width } = Dimensions.get("window");
export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      {/*      
        - Top Header
      */}
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
      {/* Sub Header */}
      <View style={styles.subHeader}>
        {/* Profile with userName */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Wanda_Klein</Text>
        </View>
        <View style={styles.aboutProfileContainer}>
          {/* Posts */}
          <View style={styles.posts}>
            <Text style={styles.postNumber}>3</Text>
            <Text style={styles.postText}>Posts</Text>
          </View>
          {/* Followers */}
          <View style={styles.posts}>
            <Text style={styles.postNumber}>169</Text>
            <Text style={styles.postText}>Followers</Text>
          </View>
          {/* Following */}
          <View style={styles.posts}>
            <Text style={styles.postNumber}>221</Text>
            <Text style={styles.postText}>Following</Text>
          </View>
        </View>
      </View>
      {/* Edit Profile Container */}
      <View style={styles.editContainer}>
        {/* Edit Btn */}
        <View style={styles.editView}>
          <Text style={styles.editText}>Edit Profile</Text>
        </View>
        {/* User Icon */}
        <View style={styles.userIcon}>
          <Icon3 name="person-add-outline" size={20} />
        </View>
      </View>
      {/* Memories Container */}
      <View style={styles.memoryContainer}>
        {/* Memories Images */}
        {MemoriesData.map((eachMemories) => (
          <MemoriesImagesContainer eachMemories={eachMemories} />
        ))}
        {/*  Create New Memories Container */}
        <View style={styles.singleMemoryContainer}>
          <TouchableOpacity style={styles.memoryTouch}>
            <View style={styles.newIconContainer}>
              <Icon name="plus" size={32} />
            </View>
            <Text style={styles.memoryText}>New</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Post Tagged Container */}
      <ContentTabView />
    </View>
  );
}

function MemoriesImagesContainer({ eachMemories }) {
  return (
    <View style={styles.singleMemoryContainer}>
      <TouchableOpacity style={styles.memoryTouch}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: eachMemories.url }}
            style={styles.memoryImage}
          />
        </View>
        <Text style={styles.memoryText}>{eachMemories.tagName}</Text>
      </TouchableOpacity>
    </View>
  );
}

function Posts() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {PostsArray.map((eachPost) => (
        <ActualPost eachPost={eachPost} />
      ))}
    </View>
  );
}

// Actual Post Component
function ActualPost({ eachPost }) {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: eachPost.url,
        }}
        style={{
          height: height / 8,
          width: height / 9,
          marginRight: 4,
          marginBottom: 4,
        }}
      />
    </TouchableOpacity>
  );
}

// Tagged Post Component
function TaggedPosts() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {TaggedPostArray.map((eachPost) => (
        <ActualPost eachPost={eachPost} />
      ))}
    </View>
  );
}

const scene = SceneMap({
  posts: Posts,
  taggedPosts: TaggedPosts,
});

const renderTabBar = (props) => {
  const iconMap = {
    posts: "ios-card-outline",
    taggedPosts: "person-circle-outline",
  };
  return (
    <TabBar
      {...props}
      style={{
        backgroundColor: "white",
      }}
      pressColor="#000"
      renderTabBarItem={({
        defaultTabWidth,
        key,
        onPress,
        navigationState,
      }) => {
        const selected = navigationState.routes[navigationState.index].key;
        return (
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: defaultTabWidth,
              borderBottomWidth: key === selected ? 2 : 0,
            }}
            onPress={onPress}
          >
            <Icon3 name={iconMap[key]} size={32} color="black" />
          </TouchableOpacity>
        );
      }}
    />
  );
};

function ContentTabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "posts", title: "" },
    { key: "taggedPosts", title: "" },
  ]);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        marginTop: 24,
      }}
    >
      <TabView
        navigationState={{ index, routes }}
        renderScene={scene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, height: 200 }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    minHeight: height,
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
  subHeader: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: height / 80,
    marginTop: height / 48,
    alignItems: "center",
  },
  profileImage: {
    height: height / 12,
    width: height / 12,
    borderRadius: height / 12,
  },
  profileText: {
    fontSize: 16,
    marginTop: height / 62,
  },
  aboutProfileContainer: {
    display: "flex",
    flexDirection: "row",
    padding: height / 32,
    alignItems: "center",
    justifyContent: "center",
  },
  posts: {
    display: "flex",
    alignItems: "center",
    marginBottom: height / 56,
    paddingHorizontal: height / 56,
  },
  postNumber: {
    fontSize: 20,
    fontWeight: "700",
  },
  postText: {
    fontSize: 16,
    marginTop: height / 150,
  },
  editContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: height / 80,
    marginTop: height / 40,
  },
  editView: {
    backgroundColor: "white",
    flex: 1,
    padding: height / 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: height / 120,
  },
  editText: {
    fontWeight: "700",
  },
  userIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: height / 88,
    padding: height / 150,
    backgroundColor: "white",
    borderRadius: height / 120,
  },
  memoryContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: height / 80,
    marginTop: height / 40,
  },
  singleMemoryContainer: {
    paddingHorizontal: height / 120,
  },
  memoryTouch: {
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: height / 12,
    width: height / 12,
    borderRadius: height / 6,
    borderColor: "#919190",
    borderWidth: 1,
  },
  memoryImage: {
    height: height / 14,
    width: height / 14,
    borderRadius: height / 7,
  },
  memoryText: {
    marginTop: height / 150,
  },
  newIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: height / 13,
    width: height / 13,
    borderRadius: height / 7,
    borderColor: "black",
    borderWidth: 1,
  },
});
