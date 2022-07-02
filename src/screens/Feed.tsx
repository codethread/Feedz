import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles';

export const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <StatusBar style='auto' />
    </View>
  );
};
