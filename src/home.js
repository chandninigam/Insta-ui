import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
import { DummyData } from "./dummyData/home/userData";

const { height } = Dimensions.get("window");

export default function Home() {
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
            </TouchableOpacity>
            <Text style={styles.storyName}>Your Story</Text>
          </View>
        </TouchableOpacity>
        {/*  Stories COntainer
         */}
        <View style={styles.storiesOtherUserView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DummyData.map((eachUser) => (
              <UserStories eachUser={eachUser} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

function UserStories({ eachUser }) {
  return (
    // Story Container for single user, 2 parts --->
    // - Image (user)
    // - label (name)
    <View style={styles.storyOtherUserViewContainer}>
      <TouchableOpacity>
        <Image
          source={{ uri: eachUser.imageUrl }}
          style={styles.userOtherUserImage}
        />
        <Text style={styles.storyOtherUserName}>{eachUser.displayName}</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    marginRight: height / 120,
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
    marginRight: height / 300,
  },
  userImage: {
    height: height / 16,
    width: height / 16,
    borderRadius: height / 16,
  },
  storyName: {
    display: "flex",
    flexDirection: "row",
    marginTop: height / 100,
  },
  storiesOtherUserView: {
    marginHorizontal: height / 80,
  },
  storyOtherUserViewContainer: {
    paddingHorizontal: height / 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userOtherUserImage: {
    height: height / 16,
    width: height / 16,
    borderRadius: height / 16,
  },
  storyOtherUserName: {
    display: "flex",
    alignSelf: "center",
    fontSize: 12,
    marginTop: height / 100,
  },
});
