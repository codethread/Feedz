import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { BookmarkIcon, FeedIcon, MenuIcon, PlusIcon, SearchIcon } from '@icons';
import { Feed } from './Feed';
import { Later } from './Later';
import { Add } from './Add';
import { Search } from './Search';
import { colors } from '@styles';

const Tab = createBottomTabNavigator();

export const Home = () => {
  const nav = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ size, color }) => {
            return <MenuIcon color={color} size={size} />;
          },
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
          tabBarIcon: ({ size, color }) => {
            console.log({ color });
            return <BookmarkIcon color={color} size={size} />;
          },
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
