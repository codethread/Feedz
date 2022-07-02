import { Text, View } from 'react-native';
import { styles } from '@styles';
import { StatusBar } from 'expo-status-bar';

export const Later = () => {
  return (
    <View style={styles.container}>
      <Text>Later</Text>
      <StatusBar style="auto" />
    </View>
  );
};
