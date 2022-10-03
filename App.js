import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather as Icon1, AntDesign as Anticon } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import Home from "./src/home";
import Search from "./src/search";
import Reel from "./src/reel";
import Favourite from "./src/favourite";
import Profile from "./src/profile";

const BottomNavigator = createBottomTabNavigator();

/**
 * CustomTabButton in BottomNavigation bar
 */
const CustomTabButton = (props) => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, { borderBottomColor: "black", borderBottomWidth: 2 }]
        : props.style
    }
  />
);

/**
 * Starting of App
 */
export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator.Navigator tabBarOptions={{ showLabel: false }}>
        <BottomNavigator.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ size }) => (
              <Icon name="home" color="black" size={size} />
            ),
            tabBarButton: CustomTabButton,
          }}
        />
        <BottomNavigator.Screen
          name="search"
          component={Search}
          options={{
            headerShown: false,
            tabBarIcon: ({ size }) => (
              <Icon name="search" color="black" size={size} />
            ),
            tabBarButton: CustomTabButton,
          }}
        />
        <BottomNavigator.Screen
          name="real"
          component={Reel}
          options={{
            headerShown: false,
            tabBarIcon: ({ size }) => (
              <Icon name="message" color="black" size={size} />
            ),
            tabBarButton: CustomTabButton,
          }}
        />
        <BottomNavigator.Screen
          name="favourite"
          component={Favourite}
          options={{
            headerShown: false,
            tabBarIcon: ({ size }) => (
              <Icon name="star" color="black" size={size} />
            ),
            tabBarButton: CustomTabButton,
          }}
        />
        <BottomNavigator.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ size }) => (
              // <Icon name="person" color="black" size={size} />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                }}
                style={{ height: 30, width: 30, borderRadius: 15 }}
              />
            ),
            tabBarButton: CustomTabButton,
          }}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
}
