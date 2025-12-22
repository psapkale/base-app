import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const PublicId = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>🌐 Public Route {id}</Text>
    </View>
  );
};

export default PublicId;
