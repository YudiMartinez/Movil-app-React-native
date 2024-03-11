import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/LoginScreen';
import RegistroScreen from './component/RegistroScreen';
import HomeScreen from './component/HomeScreen';
import TodasScreen from './component/TodasScreen';
import AplicadasScreen from './component/AplicadasScreen';
import PendientesScreen from './component/PendientesScreen'; 
import axios from 'axios';

const Stack = createStackNavigator();

const App = () => {
  const [credentials, setCredentials] = useState({
    usuario: '',
    contrasena: '',
  });

  const handleLogin = () => {
    const { usuario, contrasena } = credentials;

   
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen {...props} handleLogin={handleLogin} setCredentials={setCredentials} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodasScreen" component={TodasScreen} />
        <Stack.Screen name="AplicadasScreen" component={AplicadasScreen} />
        <Stack.Screen name="PendientesScreen" component={PendientesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;