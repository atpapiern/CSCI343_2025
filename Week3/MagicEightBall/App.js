import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, Modal, Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  const [userQuestion, setUserQuestion] = useState("");
  const [questionResult, setResult] = useState("");
  const [modalVisibility, setModalIsVisible] = useState(false);

  function shakeEightBall(){
    const rndNum = Math.floor(Math.random() * responses.length);

    setResult(responses[rndNum]);
    setModalIsVisible(true);
  }
  function closeEightBallAnswer(){
    setModalIsVisible(false);
  }

  let result = (
    <Text style={styles.resultText}>{questionResult}</Text>
  );

  return (
    <>
      <StatusBar style='light'/>
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic 8 Ball</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Ask the Magic 8 Ball a Question</Text>
        </View>

        <TextInput 
          style={styles.textInput}
          placeholder="Enter your question"
          onChangeText={setUserQuestion}
          value={userQuestion}
        />

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={shakeEightBall}
            style = {({pressed}) => {return pressed && styles.pressedButton}}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Ask</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalVisibility} animationType='fade'>
          <SafeAreaView style={styles.modalRoot}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>"{userQuestion}"</Text>
            </View>

            <View style={styles.resultContainer}>
              {result}
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                onPress={closeEightBallAnswer}
                style = {({pressed}) => {return pressed && styles.pressedButton}}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Close</Text>
                </View>
              </Pressable>
            </View>

          </SafeAreaView>
        </Modal>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1, 
    backgroundColor: '#65185bff', 
    width: '90%', 
    justifyContent: 'center', 
    borderColor: '#3c0f37ff', 
    borderWidth: 5, 
    borderRadius: 30, 
    marginTop: 50
  },
  title: {
    fontSize: 40,
    color: 'white', 
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent:'center'
  },
  text: {
    fontSize: 25, 
    color: 'white', 
    textAlign: 'center', 
    marginTop: 20
  }, 
  textInput: {
    borderWidth: 1, 
    borderColor: 'white', 
    backgroundColor: 'white', 
    color: 'black', 
    borderRadius: 6,  
    width: '90%', 
    padding: 12, 
    marginBottom: 30
  },
  buttonContainer: {
    flex: 2,
  },
  button: {
    backgroundColor: 'white', 
    borderRadius: 50, 
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonText: {
    color: 'black', 
    fontSize: 25, 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  pressedButton: {
    opacity: 0.5
  },
  modalRoot: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center', 
    justifyContent: 'center',
  }, 
  resultContainer: {
    flex: 1,
    justifyContent:'center',
    width: 200,
    height: 200,
    padding: 5,
    backgroundColor: '#0b006bff',
    borderColor: '#0b006bff', 
    borderRadius: '50%',
    marginBottom: 50,
  },
  resultText: {
    fontSize: 25, 
    color: 'white', 
    textAlign: 'center', 
    fontStyle: 'italic'
  }, 
});
