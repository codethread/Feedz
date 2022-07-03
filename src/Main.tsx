import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './screens/Home';
import { Drawer } from './screens/Drawer';
import { RSSProvider } from '@hooks';

const SettingsDrawer = createDrawerNavigator();

export function Main() {
  return (
    <RSSProvider>
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
    </RSSProvider>
  );
}
