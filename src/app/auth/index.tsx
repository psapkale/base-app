import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const publicRoutes = [123, 456, 789];
const protectedRoutes = [123, 456, 789];

const auth = () => {
  return (
    <View style={styles.container}>
      <Text>Public Routes</Text>
      {publicRoutes.map((route) => (
        <Link key={route} href={`/public/${route}`} style={styles.publicRoutes}>
          {route}
        </Link>
      ))}
      <Text>Protected Routes</Text>
      {protectedRoutes.map((route) => (
        <Link
          key={route}
          href={`/protected/${route}`}
          style={styles.protectedRoutes}
        >
          {route}
        </Link>
      ))}
    </View>
  );
};

export default auth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  publicRoutes: {
    color: 'green',
  },
  protectedRoutes: {
    color: 'maroon',
  },
});