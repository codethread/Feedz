import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

export const Drawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>hello</Text>
      </View>
    </DrawerContentScrollView>
  );
};
