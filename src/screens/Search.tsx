import { Text, View } from 'react-native';
import { styles } from '../styles';
import { StatusBar } from 'expo-status-bar';

export const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <StatusBar style='auto' />
    </View>
  );
};
