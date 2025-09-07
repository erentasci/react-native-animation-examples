import AnimatedCardStack from "@/components/AnimatedCardStack";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/*  Animated Progress Bar Example */}
        {/* <AnimatedProgressBar /> */}

        {/*  Animated Loading Dots Example */}
        {/* <LoadingDots /> */}

        {/*  Simple Touch Follow Example */}
        {/* <SimpleTouchFollow /> */}

        {/*  Animated Card Stack Example */}
        <AnimatedCardStack />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
