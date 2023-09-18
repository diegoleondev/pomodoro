import { StyleSheet, Text, View } from "react-native";

export default function Timer({ time }) {
  const formattedTime = new Date(time * 1000).toISOString().slice(14, -5);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "#F2F2F2",
    borderRadius: 16,
    padding: 16,
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#575757",
  },
});
