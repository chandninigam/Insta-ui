import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

export default function Favourite() {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <Text style={styles.header}>Notifications</Text>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Pending Request */}
        <PendingRequest />
        {/* New On Insta */}
        <TileHeader title="New" />
        {/* New posts posted by friends */}
        <NewOnInsta />
        {/* Yesterday on Insta */}
        <TileHeader title="Yesterday" />
        {/* Likes User Details */}
        <PostMentionLikedYour
          img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwReS2zO2XC-8w7ZUyfkorOH-BtSjScAxxkmDrVOZ3JwDnVHjPunCMLFl8HKRSd-mLYL0&usqp=CAU"
          img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqnaftc5SB-Vij9YpI49oLipoAo8w06Mpor5fwESQuSEL1ELfFU5x8wV87dp0YqcEkbY&usqp=CAU"
          img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrSFjk_Q_lHSTTvYduOM8wHYj00O_vWLSwLzMU5pwil0LCeZ95EEKVy4ARXfskXjnpxE&usqp=CAU"
        />
        {/* This Week on Insta */}
        <TileHeader title="This Week" />
        {/* New posts posted by friends */}
        <NewOnInsta />
        {/* New posts posted by friends */}
        <NewOnInsta />
        {/* This Week on Insta */}
        <TileHeader title="Previous Week" />
        {/* Likes User Details */}
        <PostMentionLikedYour
          img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLDEajEW8QIw_X_Zt5S-1rxj0-lhuljenolf6zjfThRco-WTZIlp_QU-BIFFBhjhp9uM&usqp=CAU"
          img2="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/profile/user-uploads/user-04.jpg"
          img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqnaftc5SB-Vij9YpI49oLipoAo8w06Mpor5fwESQuSEL1ELfFU5x8wV87dp0YqcEkbY&usqp=CAU"
        />
        {/* New posts posted by friends */}
        <NewOnInsta />
        {/* New posts posted by friends */}
        <NewOnInsta />
      </ScrollView>
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

// Like Your Post , Mentioned u and commented
function PostMentionLikedYour({ img1, img2, img3 }) {
  return (
    <View style={styles.newOnInstaContainer}>
      {/* Image Users */}
      <Image
        source={{
          uri: img1,
        }}
        style={styles.likedPersonImage}
      />
      <Image
        source={{
          uri: img2,
        }}
        style={styles.otherLikedPersonImage}
      />
      {/* Liked Post User Names */}
      <View style={styles.postRelatedInfo}>
        <View style={styles.postNameText}>
          <Text style={styles.postDetail}>priyanka17999</Text>
          <Text style={styles.textBetweenText}>and</Text>
          <Text style={styles.postDetail}>m.a.d.h.u.09</Text>
        </View>
        <View style={styles.postNameText}>
          <Text>liked your story.</Text>
          <Text style={styles.textHour}>1d</Text>
        </View>
      </View>
      {/* Post */}
      <Image
        source={{
          uri: img3,
        }}
        style={styles.recentPost}
      />
    </View>
  );
}

// New On Insta
function NewOnInsta() {
  return (
    <View style={styles.newOnInstaContainer}>
      {/* Image Users */}
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
      {/* User Who Posted Names */}
      <View style={styles.postRelatedInfo}>
        <Text style={styles.suggText}>Suggested:</Text>
        <View>
          <Text style={styles.postDetail}>makeoverbyaanchalbhatia,</Text>
          <View style={styles.postNameText}>
            <Text style={styles.postDetail}>hiteshchoudharyofficial</Text>
            <Text style={styles.textBetweenText}>and</Text>
          </View>
          <View style={styles.postNameText}>
            <Text style={styles.postDetail}>urvashi_kiran_sharma</Text>
            <View style={styles.checkView}>
              <Icon name="checkcircle" color="#0e94c9" />
            </View>
            <Text>recently</Text>
          </View>
          <View style={styles.postNameText}>
            <Text>shared new reels.</Text>
            <Text style={styles.textHour}>21h</Text>
          </View>
        </View>
      </View>
      {/* Post Posted By first User */}
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
    paddingVertical: height / 80,
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
    bottom: height / 20,
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
  textBetweenText: {
    fontWeight: "400",
    display: "flex",
    paddingHorizontal: 4,
  },
  postNameText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkView: {
    paddingHorizontal: 4,
  },
  textHour: {
    fontWeight: "200",
    paddingLeft: 4,
  },
  likedPersonImage: {
    position: "relative",
    height: height / 24,
    width: height / 24,
    borderRadius: height / 12,
  },
  otherLikedPersonImage: {
    position: "absolute",
    height: height / 24,
    width: height / 24,
    borderRadius: height / 12,
    borderColor: "white",
    borderWidth: 1,
    bottom: height / 170,
    left: 16,
  },
});
