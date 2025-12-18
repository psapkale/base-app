import { Link } from 'expo-router';
import { View } from 'react-native';

const Socials = () => {
  return (
    <View>
      <Link href="/socials/feed">Feed</Link>
      <Link href="/socials/profile">Profile</Link>
    </View>
  );
};

export default Socials;
