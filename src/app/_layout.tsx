import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Woah',
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
        }}
      />
      <Tabs.Screen
        name="auth"
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
    </Tabs>
  );
}
