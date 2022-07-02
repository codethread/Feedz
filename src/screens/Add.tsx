import { Text, View } from 'react-native';
import { styles } from '../styles';
import { StatusBar } from 'expo-status-bar';

export const Add = () => {
  return (
    <View style={styles.container}>
      <Text>Add</Text>
      <StatusBar style='auto' />
    </View>
  );
};
