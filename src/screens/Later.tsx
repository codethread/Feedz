import { Button, Text, View } from 'react-native';
import { styles } from '@styles';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const Later = () => {
  const [count, setCount] = useState(0);
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Later</Text>
      <Button
        title={'click me'}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text>count: {count}</Text>
      <Button
        title={'travel'}
        onPress={() => {
          navigate('Search');
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
