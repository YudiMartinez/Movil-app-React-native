import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 



const HomeScreen = (props) => {
  
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation(); // Inicializa la navegación

  const toggleMenu = () => {
    console.log('Toggling menu...');
    setMenuVisible(!isMenuVisible);
  };

  // Función para navegar a TodasScreen
  const  handleNavigateToTodasScreen = () => {
    navigation.navigate('TodasScreen',); // Navega a la pantalla TodasScreen
  };

  const handleNavigateToAplicadasScreen = () => {
    navigation.navigate('AplicadasScreen'); // Navegar a la pantalla AplicadasScreen
  };
  const handleNavigateToPendientesScreen = () => {
    navigation.navigate('PendientesScreen'); // Navegar a la pantalla AplicadasScreen
  };

  return (
    <View style={{ flex: 1 }}> 
      <TouchableOpacity onPress={toggleMenu}>
        <FontAwesome5 name="bars" size={24} color="#333" style={styles.burgerIcon} />  
      </TouchableOpacity> 
      

      <Swiper Swiper style={styles.wrapper} > 
         <View style={styles.slide}>
            <Image
              style={styles.vacunas}
               source={require('../src/img/vacuna1.png')}  //imagenes del carrusel
            />
          </View>

            <View style={styles.slide}>
              <Image
                 style={styles.vacunas}
                  source={require('../src/img/vacunacion.jpg')}
              />
             </View>

            <View style={styles.slide}>
                <Image
                  style={styles.vacunas}
                  source={require('../src/img/paciente.jpg')}
                 />
            </View>
      </Swiper>
        
        <View  style = {styles.info}>
          
          <View style = {styles.informacion}>
            <Text style = {styles.texto} >
              ¿ Las Vacunas mas comunes?
            </Text>
          </View>

          <View style = {styles.informacion}>
            <Text style = {styles.textoinfo} //informacion
            >
            Dentro de las vacunas más comunes que puedes encontrar están:
           </Text>
          </View>

         <View style = {styles.informacion}>
           <Text style = {styles.textoinformass} >° Vacuna contra la parotiditis..</Text>
           <Text  style = {styles.textoinformass}>° Vacuna contra rubéola.</Text>
           <Text  style = {styles.textoinformass}>° Vacuna contra sarampión. </Text>
           <Text  style = {styles.textoinformass}>° Vacuna difteria, tétanos y tosferina.</Text>
           <Text  style = {styles.textoinformass}>° Vacuna hepatitis B.</Text>
           <Text  style = {styles.textoinformass}>° Vacuna neumococo.</Text>
           <Text  style = {styles.textoinformass}>° Vacuna rotavirus.</Text>
           <Text  style = {styles.textoinformass}>° Vacuna tuberculosis.</Text>
           <Text  style = {styles.textoinformass}>° Vacuna virus papiloma humano. </Text>
         </View>
        </View>
        

      <SafeAreaView>
        <Modal visible={isMenuVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <FontAwesome5 name="times" size={20} color="#333" />
            </TouchableOpacity>
            <View style={styles.menuContent}>
              <View style={styles.Cborde}>
                <Image
                  source={require('../src/img/imagen1.jpg')} 
                  style={styles.imagenStyle}
                />
              </View>
              <TouchableOpacity style={styles.menuItem} onPress={handleNavigateToTodasScreen}>
                <Text>Todas las Vacunas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem} onPress={handleNavigateToPendientesScreen }>
                <Text>Vacunas Pendientes</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem} onPress={handleNavigateToAplicadasScreen}>
                 <Text>vacunas Aplicadas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  burgerIcon: {
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  menuContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  menuItem: {
    borderBottomWidth: 5, 
    borderColor: '#00CDF9', 
    paddingBottom: 10,
    borderRadius: 120,
    marginTop: 30,
    alignSelf: 'center',
  },
  Cborde: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenStyle: {
    width:200,
    height:200,
    borderRadius:100,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  vacunas:{
    width:376,
    height:440,
  },

  texto:{
    textAlign:'center',
    marginTop:20,
    padding: 10,
  },
  textoinfo:{
    textAlign:'center',
    marginTop:20,
    
  },

  textoinformass:{
    textAlign:'center',
    marginTop:10,
    padding: 1,
  },
});

export default HomeScreen;