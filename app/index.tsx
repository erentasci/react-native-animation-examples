import LoadingDots from "@/components/LoadingDots";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*  Animated Progress Bar Example */}
      {/* <AnimatedProgressBar /> */}

      {/*  Animated Loading Dots Example */}
      <LoadingDots />
    </SafeAreaView>
  );
}
