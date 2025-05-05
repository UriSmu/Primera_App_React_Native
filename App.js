import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const frases = [
  "¡Hola, mundo!",
  "Matteria: DAI",
  "Profe: Jesi",
  "React Native",
  "Hola Vito"
];

const useGenerateRandomColor = () => {                              //ESTO FUE SACADO DE LA WEB
  const [color, setColor] = useState("000000");
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
    setColor(randomColor);
  };
  return { color, generateColor };
};

export default function App() {
  const { color, generateColor } = useGenerateRandomColor();
  const [texto, setTexto] = useState(frases[0]);

  const changeText = () => {                                          //ESTO FUE SACADO DE LA WEB
    const randomIndex = Math.floor(Math.random() * frases.length);
    setTexto(frases[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { color: `#${color}` }]}>{texto}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={generateColor} title="Cambiar Color" color={`#${color}`} />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={changeText} title="Cambiar Texto" color={`#${color}`} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 6,
    width: 200,
  },
});