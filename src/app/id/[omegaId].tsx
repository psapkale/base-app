import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const IdHandler = () => {
  const { omegaId } = useLocalSearchParams();

  return (
    <View>
      <Text>IdHandler {omegaId}</Text>
    </View>
  );
};

export default IdHandler