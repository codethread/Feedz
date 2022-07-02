import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  BookmarkIcon,
  FeedIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
} from './icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsDrawer = createDrawerNavigator();

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const Add = () => {
  return (
    <View style={styles.container}>
      <Text>Add</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const Later = () => {
  return (
    <View style={styles.container}>
      <Text>Later</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const Home = () => {
  const nav = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MenuIcon color={color} size={size} />
          ),
        }}
        component={Feed}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            nav.dispatch(DrawerActions.openDrawer());
          },
        }}
      />
      <Tab.Screen
        name="Later"
        component={Later}
        options={{
          tabBarIcon: ({ size, color }) => (
            <BookmarkIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FeedIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ size, color }) => (
            <PlusIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SearchIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>hello</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export function Main() {
  return (
    <NavigationContainer>
      <SettingsDrawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'front',
          headerShown: false,
        }}
        drawerContent={Drawer}
      >
        <SettingsDrawer.Screen name="Home" component={Home} />
      </SettingsDrawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
