import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign as Icon, Entypo as Icon1 } from "@expo/vector-icons";
import { DummyData } from "./dummyData/home/userData";
import { useFonts } from "expo-font";
import { DummyPostData } from "./dummyData/home/postData";

const { height } = Dimensions.get("window");

export default function Home() {
  const [loaded] = useFonts({
    billabong: require("../assets/fonts/billabong.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    // Main Container
    <View style={styles.mainContainer}>
      {/* Header Container having three
            - Heading Container
            - Icon(Plus)
            - Icon(message)
       */}
      <View style={styles.headerView}>
        {/* Heading Container having two parts 
             - Heading (Instagram)
             - Icon (down)
        */}
        <View style={styles.headingView}>
          <Text style={styles.heading}>Instagram</Text>
          <Icon name="down" style={styles.headingDownIcon} size={16} />
        </View>
        <TouchableOpacity style={styles.plusIcon}>
          <Icon name="plussquareo" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="message1" size={24} />
        </TouchableOpacity>
      </View>
      {/* 
          Story Container (2 parts)
           - Your Story 
           - Others Stories
      */}
      <View style={styles.storiesMainContainer}>
        {/*  Your Story Container havoing two parts
              - Image 
              - label (Your Story)
         */}
        <TouchableOpacity>
          <View style={styles.storyViewContainer}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                }}
                style={styles.userImage}
              />
              <View style={styles.plusCircleStory}>
                <Icon name="pluscircle" color="#1885f2" size={16} />
              </View>
            </TouchableOpacity>
            <Text style={styles.storyName}>Your Story</Text>
          </View>
        </TouchableOpacity>
        {/*  Stories Container
         */}
        <View style={styles.storiesOtherUserView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DummyData.map((eachUser) => (
              <UserStories eachUser={eachUser} />
            ))}
          </ScrollView>
        </View>
      </View>
      {/* 
       Posts Container
      */}
      <View style={styles.postsMainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {DummyPostData.map((eachPost) => (
            <Posts eachPost={eachPost} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

/**
 * Other Users Stories
 * @param  eacUser --- having detail of each story like url, aname of person
 * @returns ViewContainer
 */
function UserStories({ eachUser }) {
  return (
    // Story Container for single user, 2 parts --->
    // - Image (user)
    // - label (name)
    <View style={styles.storyOtherUserViewContainer}>
      <TouchableOpacity>
        <View style={styles.storiesImageView}>
          <Image
            source={{ uri: eachUser.imageUrl }}
            style={styles.userOtherUserImage}
          />
        </View>
        <Text style={styles.storyOtherUserName}>{eachUser.displayName}</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Posts of Other Users
 */
function Posts({ eachPost }) {
  return (
    // MainContainer having 1
    // -> Post Header
    <View style={styles.postMainView}>
      {/* Post Header
          -> User Profile Image
          -> User Name
          -> Three Dots Icon
      */}
      <View style={styles.postHeaderContainer}>
        <Image
          source={{ uri: eachPost.userProfile }}
          style={styles.postUserProfile}
        />
        <Text style={styles.postUserName}>{eachPost.userName}</Text>
        <Icon1 name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: height / 20,
  },
  headerView: {
    marginHorizontal: height / 50,
    display: "flex",
    flexDirection: "row",
  },
  headingView: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 36,
    marginRight: height / 120,
    fontFamily: "billabong",
  },
  plusIcon: {
    marginHorizontal: height / 40,
  },
  storiesMainContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: height / 50,
    marginTop: height / 60,
    alignItems: "center",
  },
  storyViewContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginRight: height / 300,
  },
  userImage: {
    height: height / 16,
    width: height / 16,
    borderRadius: height / 30,
    marginTop: height / 170,
  },
  plusCircleStory: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "white",
    borderWidth: 2,
    bottom: 0,
    right: 0,
  },
  storyName: {
    display: "flex",
    flexDirection: "row",
    marginTop: height / 100,
    fontSize: 12,
  },
  storiesOtherUserView: {
    marginHorizontal: height / 80,
  },
  storyOtherUserViewContainer: {
    paddingHorizontal: height / 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  storiesImageView: {
    borderRadius: 50,
    borderColor: "#fa8b2a",
    borderWidth: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: height / 13,
    width: height / 13,
  },
  userOtherUserImage: {
    height: height / 16,
    width: height / 16,
    borderRadius: height / 30,
  },
  storyOtherUserName: {
    display: "flex",
    alignSelf: "center",
    fontSize: 12,
    marginTop: height / 200,
  },
  postsMainContainer: {
    display: "flex",
    marginHorizontal: height / 80,
  },
  postMainView: {
    display: "flex",
    marginTop: height / 80,
  },
  postHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  postUserProfile: {
    height: height / 24,
    width: height / 24,
    borderRadius: height / 12,
  },
  postUserName: {
    flex: 1,
    fontSize: height / 50,
    paddingLeft: height / 60,
  },
});
