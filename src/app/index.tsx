import { Link } from "expo-router";
import { Text, View } from "react-native";

const omegaIds = [123, 456, 789, 'asdf'];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {omegaIds.map((id) => (
        <Link key={id} href={`/id/${id}`}>
          Go to Id {id}
        </Link>
      ))}
    </View>
  );
}
