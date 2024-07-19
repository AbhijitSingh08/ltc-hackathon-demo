import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onChangeId = (e: string) => {
    setId(e);
  };

  const onChangePassword = (e: string) => {
    setPassword(e);
  };

  const onLoginButtonClick = () => {
    console.log(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Login / Sign In</Text>
        <Separator />
        <TextInput
          style={styles.input}
          onChangeText={(e) => onChangeId(e)}
          value={id}
          placeholder="Enter your employee id"
          placeholderTextColor={"rgba(0,0,0,0.25)"}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => onChangePassword(e)}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor={"rgba(0,0,0,0.25)"}
        />
        <View style={styles.loginBtn}>
          <Button onPress={onLoginButtonClick} title="Login" color="#F56045"/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginStart: 20,
    marginEnd: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 35,
    marginBottom: 25,
    textAlign: 'center'
  },
  input: {
    height: 40,
    marginTop: 15,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 17.5,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  loginBtn: {
    marginTop: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
