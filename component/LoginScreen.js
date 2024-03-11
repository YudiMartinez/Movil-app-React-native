import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({
    usuario: '',
    contrasena: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const navigation = useNavigation();

  const handleLoginPress = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        navigation.navigate('Home');
      } else {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgStyle}
        source={require('../src/img/imagenDoct.jpg')}
      />
      <Text style={styles.title}>Inicio de Sesión</Text>

      <View style={styles.inputContainer}>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <View style={styles.containerusa}>
          <Icon name="user" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder='Usuario'
            value={credentials.usuario}
            onChangeText={(text) => setCredentials({ ...credentials, usuario: text })}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.containerusa}>
          <Icon name="lock" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            value={credentials.contrasena}
            onChangeText={(text) => setCredentials({ ...credentials, contrasena: text })}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.linkButtonText}>Ir a registrarse</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imgStyle: {
    width: '120%',
    height: '50%',

  },
  inputContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 30,
  },
  containerusa: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 16,
    padding: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 8,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 120,
    width: '50%',
    backgroundColor: 'green',
    marginTop: 30,
    alignSelf: 'center',
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  linkButtonText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  }
});

export default LoginScreen;