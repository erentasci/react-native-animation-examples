import SimpleTouchFollow from "@/components/SimpleTouchFollow";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/*  Animated Progress Bar Example */}
        {/* <AnimatedProgressBar /> */}

        {/*  Animated Loading Dots Example */}
        {/* <LoadingDots /> */}

        {/*  Simple Touch Follow Example - SUPER EASY! */}
        <SimpleTouchFollow />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
