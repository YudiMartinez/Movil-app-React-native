import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, Alert } from 'react-native';

const RegistroScreen = ({ onRegistro }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [tipodesangre, setTipoDeSangre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    switch (field) {
      case 'nombre':
        setNombre(value);
        break;
      case 'correo':
        setCorreo(value);
        break;
      case 'contrasena':
        setContrasena(value);
        break;
      case 'tipodesangre':
        setTipoDeSangre(value);
        break;
      case 'telefono':
        setTelefono(value);
        break;
      default:
        break;
    }
  };

  const handleRegistro = async () => {
    if (!nombre || !correo || !contrasena || !tipodesangre || !telefono) {
      Alert.alert('Error', 'Por favor complete todos los campos.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, contrasena, tipodesangre, telefono }),
      });

      const data = await response.json();
      console.log(data);

      Alert.alert('Exito', 'Registro exitoso.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un error en el registro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgStyle}
        source={require('../src/img/imagenDoc2.jpg')}
      />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => handleChange('nombre', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Tipo de Sangre"
          value={tipodesangre}
          onChangeText={(text) => handleChange('tipodesangre', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={(text) => handleChange('telefono', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={correo}
          onChangeText={(text) => handleChange('correo', text)}
          keyboardType='email-address'
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={contrasena}
          onChangeText={(text) => handleChange('contrasena', text)}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegistro}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: 300,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 16,
    padding: 8,
    marginTop: 10,
  },
  imgStyle:{
    width:'110%',
    height:'50%',    
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 120,
    width: '30%', 
    backgroundColor: 'green',
    marginTop: 9, 
    alignSelf: 'center',
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default RegistroScreen;