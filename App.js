import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from 'react-native';
  
const loadFonts = async () => {
  await Font.loadAsync({
    "Silkscreen-Regulat": require("./assets/fonts/Silkscreen-Regular.ttf"),
    "Silkscreen-Bold": require("./assets/fonts/Silkscreen-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmale] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = text => setName(text);
  const emailHandler = text => setEmale(text);
  const passwordHandler = text => setPassword(text);

  const onLogin = () => {
    Alert.alert("Your credentials", `${name} + ${email} + ${password}`);
    setName("");
    setEmale("");
    setPassword("");
  };

  if (!isReady) 
    return 
      <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={console.warn} />;

  return (
    // !isReady ? <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={console.warn} /> : 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text>Fill the form to signup!!!</Text>
      <StatusBar style="auto" />
        <View style={styles.form}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput
              value={name}
              onChangeText={nameHandler}
              placeholder="Username"
              style={styles.input}
            />
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Password"
              style={styles.input}
            />
          </KeyboardAvoidingView>
          <Button title={"Signup"} style={styles.input} onPress={onLogin}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Silkscreen-Bold',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop:20,
    backgroundColor: '#ecf0f1',
    flex: 0,
    alignItems: "center",
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'Silkscreen-Regulat',
    width: 150,
    height: 40,
    padding: 5,
    marginBottom: 10,
    backgroundColor: Platform.OS === "ios" ? "#ecd0d5" : '#fff',
    border: 'solid',
    borderColor: '#FF6D99',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  }
});
