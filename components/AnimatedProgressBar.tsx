import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedProgressBar() {
  const progress = useSharedValue(0);

  const progressBarStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        progress.value,
        [0, 100],
        [0, 350],
        Extrapolation.CLAMP
      ),
      backgroundColor: interpolateColor(
        progress.value,
        [0, 50, 100],
        ["#ef6120", "#1492d2", "#14d243"]
      ),
    };
  });

  const fullProgress = () => {
    progress.value = withTiming(100, { duration: 2000 });
  };

  const resetProgress = () => {
    progress.value = withTiming(0, { duration: 2000 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animated Progress Bar</Text>

      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, progressBarStyle]} />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={resetProgress}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={fullProgress}>
          <Text style={styles.buttonText}>Full</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
  },
  progressBarContainer: {
    width: 350,
    height: 15,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#007AFF",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
