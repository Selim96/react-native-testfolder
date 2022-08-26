import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useFonts } from 'expo-font';
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
  Image,
  ImageBackground
} from 'react-native';

export default function App() {
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

  const [fontsLoaded] = useFonts({
    "Silkscreen-Regulat": require("./assets/fonts/Silkscreen-Regular.ttf"),
    "Silkscreen-Bold": require("./assets/fonts/Silkscreen-Bold.ttf"),
  });

  if (!fontsLoaded) 
    return 
      <Text>
        Loading...
      </Text>;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/Hulk.jpg')}  resizeMode="cover" style={styles.background}>
        <Text style={styles.text}>Fill the form to signup!</Text>
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
        <Image source={require('./assets/icon.png')} style={styles.image} />
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Silkscreen-Bold',
    fontSize: 16,
    color: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: 300,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'transparent',
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
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto', 
    width: 100,
    height:100,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  }
});
