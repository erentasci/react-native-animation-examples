import { useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  BounceIn,
  BounceOut,
  SlideInLeft,
  SlideInRight,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

interface CardData {
  id: number;
  title: string;
  color: string;
  enteringAnimation: any;
  exitingAnimation: any;
}

// Animasyonları component dışında tanımla (re-render'da yeniden oluşturulmasın)
const ANIMATIONS = {
  slideInRight: SlideInRight.duration(1000),
  slideOutLeft: SlideInLeft.duration(1000),
  bounceIn: BounceIn.duration(1000),
  bounceOut: BounceOut.duration(1000),
  zoomIn: ZoomIn.duration(1000),
  zoomOut: ZoomOut.duration(1000),
} as const;

export default function AnimatedCardStack() {
  // useMemo ile cards array'ini memoize et
  const cards: CardData[] = useMemo(
    () => [
      {
        id: 1,
        title: "Card 1",
        color: "#80cbf9",
        enteringAnimation: ANIMATIONS.slideInRight,
        exitingAnimation: ANIMATIONS.slideOutLeft,
      },
      {
        id: 2,
        title: "Card 2",
        color: "#7791ff",
        enteringAnimation: ANIMATIONS.slideOutLeft,
        exitingAnimation: ANIMATIONS.slideInRight,
      },
      {
        id: 3,
        title: "Card 3",
        color: "#f2933a",
        enteringAnimation: ANIMATIONS.bounceIn,
        exitingAnimation: ANIMATIONS.bounceOut,
      },
      {
        id: 4,
        title: "Card 4",
        color: "#f96dd8",
        enteringAnimation: ANIMATIONS.zoomIn,
        exitingAnimation: ANIMATIONS.zoomOut,
      },
    ],
    []
  );

  // useCallback ile renderCard fonksiyonunu memoize et
  const renderCard = useCallback(
    (card: CardData) => (
      <Animated.View
        key={card.id}
        entering={card.enteringAnimation}
        exiting={card.exitingAnimation}
      >
        <View style={[styles.card, { backgroundColor: card.color }]}>
          <Text style={styles.cardText}>{card.title}</Text>
        </View>
      </Animated.View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animated Card Stack</Text>
      <Text style={styles.subtitle}>Farklı animasyon türleriyle kartlar</Text>

      <Animated.ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        removeClippedSubviews={true}
      >
        {cards.map(renderCard)}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
    gap: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
