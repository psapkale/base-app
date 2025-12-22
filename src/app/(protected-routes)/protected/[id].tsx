import { AuthController } from '@/src/common/components/auth/AuthController';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProtectedId = () => {
  const { id } = useLocalSearchParams();

  return (
    <AuthController>
      <View>
        <Text>🔐 Protected Route {id}</Text>
      </View>
    </AuthController>
  );
};

export default ProtectedId;