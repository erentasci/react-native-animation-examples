import { SafeAreaView } from "react-native";

import AnimatedProgressBar from "@/components/AnimatedProgressBar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*  Animated Progress Bar Example */}
      <AnimatedProgressBar />
    </SafeAreaView>
  );
}
