import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SplashScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={["#0d1f2d", "#0a2538"]} // gradiente azul escuro
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={require("../assets/images/logo.png")} // coloque sua logo aqui
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>NEXUS</Text>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
  },
}); 