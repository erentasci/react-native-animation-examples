import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function SimpleTouchFollow() {
  const translateX = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const pressed = useSharedValue<boolean>(false);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      translateX.value = translateX.value + event.changeX;
      translateY.value = translateY.value + event.changeY;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedCirceCtyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
      {
        scale: withTiming(pressed.value ? 1.5 : 1),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>Drag & Bounce</Text>
      <Text style={styles.subtitle}>Sürükleyin ve bırakın</Text>

      <View style={styles.gestureArea}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, animatedCirceCtyle]} />
        </GestureDetector>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 40,
  },
  gestureArea: {
    flex: 1,
    backgroundColor: "#16213e",
    margin: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#B58DF1",
    shadowColor: "#B58DF1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
