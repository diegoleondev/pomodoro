import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import { Audio } from "expo-av";

const colors = ["#f7dc6f", "#a2d9cd", "#D7BDE2"];

async function playSound() {
  const { sound } = await Audio.Sound.createAsync(
    require("./assets/click.wav")
  );

  await sound.playAsync().catch(console.log);
}

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);

  function handleStartStop() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((pev) => !pev);
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <Header
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Timer time={time} />
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={styles.buttonLabel}>{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    gap: 16,
  },
  button: {
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 16,
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
