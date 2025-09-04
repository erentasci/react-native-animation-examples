import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function LoadingDots() {
  const opacityDot1 = useSharedValue(0);
  const opacityDot2 = useSharedValue(0);
  const opacityDot3 = useSharedValue(0);

  const createAnimateDots = (shared: { value: number }, delay: number) => {
    shared.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 500 }),
          withTiming(0.3, { duration: 500 })
        ),
        -1,
        false
      )
    );
  };

  const useDotStyle = (shared: { value: number }) =>
    useAnimatedStyle(() => ({
      opacity: shared.value,
      transform: [{ scale: shared.value * 0.5 * 0.5 }],
    }));

  useEffect(() => {
    createAnimateDots(opacityDot1, 0);
    createAnimateDots(opacityDot2, 200);
    createAnimateDots(opacityDot3, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dotStyle1 = useDotStyle(opacityDot1);
  const dotStyle2 = useDotStyle(opacityDot2);
  const dotStyle3 = useDotStyle(opacityDot3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading Dots</Text>
      <View style={styles.dotContainer}>
        <Animated.View style={[styles.dot, dotStyle1]} />
        <Animated.View style={[styles.dot, dotStyle2]} />
        <Animated.View style={[styles.dot, dotStyle3]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  dot: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#325ede",
  },
});
