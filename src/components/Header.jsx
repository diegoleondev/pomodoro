import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ setTime, setCurrentTime, currentTime }) {
  function handlePress(index) {
    const newTime = { 0: 25, 1: 5, 2: 15 }[index];

    setCurrentTime(index);
    setTime(newTime * 60);
  }

  const items = options.map((option, index) => {
    const activeStyle = currentTime === index && { borderColor: "#FFF" };

    return (
      <TouchableOpacity
        onPress={() => handlePress(index)}
        key={index}
        style={[styles.item, activeStyle]}
      >
        <Text style={styles.label}>{option}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View style={styles.nav}>{items}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
  },
  item: {
    paddingTop: 8,
    paddingBottom: 8,
    lineHeight: "1",
    borderRadius: 8,
    alignItems: "center",
    width: "33%",
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: 3,
  },
  label: {
    fontWeight: "bold",
  },
});
