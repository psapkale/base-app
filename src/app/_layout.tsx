import { Tabs } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ReduxProvider } from "../common/providers/redux-provider";
import { RootState } from "../store";
import { AuthStatus, login, logout } from "../store/reducers/auth-reducer";

// Temporary login button
const LoginButton = () => {
  const status = useSelector((state: RootState) => state.auth.status);
  const dispatch = useDispatch();

  const pressHandler = () => {
    if (status === AuthStatus.Unauthenticated) {
      dispatch(login({ id: '1', name: 'John Doe', email: 'john@example.com' }));
    } else {
      dispatch(logout());
    }
  };

  return (
    <Pressable onPress={pressHandler} style={styles.loginButton}>
      <Text>{status === AuthStatus.Unauthenticated ? 'Login' : 'Logout'}</Text>
    </Pressable>
  );
};

export default function RootLayout() {
  // INFO: The routes will be mounted irrespective of any condition (auth, conditional checks, etc.)
  // INFO: To totally protect a route, desired screen should be controlled by a AuthChecker component which will have a early return based on the condition

  return (
    <ReduxProvider>
      <LoginButton />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <></>,
          }}
        />
        <Tabs.Screen
          name="id/[omegaId]"
          options={{
            title: 'Id',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <></>,
            href: null, // ! Hides the screen but route still mounts (accessible)
          }}
        />
        <Tabs.Screen
          name="auth/index"
          options={{
            title: 'Auth',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <></>,
          }}
        />
        <Tabs.Screen
          name="socials"
          options={{
            title: 'Socials',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <></>,
          }}
        />
        <Tabs.Screen
          name="(protected-routes)/protected/[id]" // INFO: Must include the group name in the path
          options={{
            title: 'Protected',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <></>,
            href: null, // ! Hides the screen but route still mounts (accessible)
          }}
        />
        <Tabs.Screen
          name="(public-routes)/public/[id]" // INFO: Must include the group name in the path
          options={{
            title: 'Public',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <></>,
            href: null, // ! Hides the screen but route still mounts (accessible)
          }}
        />
      </Tabs>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: 'black',
  },
});