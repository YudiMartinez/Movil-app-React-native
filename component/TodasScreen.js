import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TodasScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Cargar los datos iniciales
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulamos una solicitud de red con un retardo de 1 segundo
    setLoading(true);
    setTimeout(() => {
      const newData = [
        { id: 1, vacuna: 'Vacuna contra la varicela',  edad: '19-20' },
        { id: 2, vacuna: 'Vacuna contra el COVID-19',  edad: '19-20' },
        { id: 3, vacuna: 'Vacuna contra la influenza',  edad: '19-20' },
        { id: 4, vacuna: 'Vacuna contra la hepatitis B',  edad: '19-20' },
        { id: 5, vacuna: 'Vacuna contra el VPH',  edad: '19-20' },
        { id: 6, vacuna: 'Vacuna MMR', edad: '19-20' },
        { id: 7, vacuna: 'Vacuna Tdap ',  edad: '19-20' },
    
        { id: 8, vacuna: 'Vacuna contra el COVID-19',  edad: '27-49' },
        { id: 9, vacuna: 'Vacuna contra la influenza ',  edad: '27-49' },
        { id: 10, vacuna: 'Vacuna contra la hepatitis B',  edad: '27-49' },
        { id: 11, vacuna: 'Vacuna MMR',  edad: '27-49' },
        { id: 12, vacuna: 'Vacuna Tdap',  edad: '27-49' },
    
        { id: 13, vacuna: 'Vacuna contra el COVID-19',  edad: '50-64' },
        { id: 14, vacuna: 'Vacuna contra la influenza ',  edad: '50-64' },
        { id: 15, vacuna: 'Vacuna contra la culebrilla',  edad: '50-64' },
        { id: 16, vacuna: 'Vacuna Tdap',  edad: '50-64' },
    
        { id: 17, vacuna: 'Vacuna contra el COVID-19',  edad: '65 o más' },
        { id: 18, vacuna: 'Vacuna contra la influenza',  edad: '65 o más' },
        { id: 19, vacuna: 'Vacuna antineumocócica',  edad: '65 o más' },
        { id: 20, vacuna: 'Vacuna contra la culebrilla',  edad: '65 o más' },
        { id: 21, vacuna: 'Vacuna Tdap',  edad: '65 o más' },
       

     

      ];
      setData(prevData => [...prevData, ...newData]);
      setLoading(false);
    }, 3);
  };

  const renderItem = ({ item }) => (
    <>
      <Text style={styles.texto}>TABLA DE VACUNAS EXISTENTES - {item.edad} años</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vacuna:</Text>
      </View>
      <FlatList
        data={data.filter(vaccine => vaccine.edad === item.edad)}
        renderItem={todasFila}
        keyExtractor={vaccine => vaccine.id.toString()}
        // No es necesario el manejo de onEndReached para este FlatList interno
      />
      <View style={styles.separator} />
    </>
  );

  const todasFila = ({ item }) => (
    <View style={styles.fila}>
      <Text style={styles.celda}>{item.vacuna}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[{ edad: '19-20' }, { edad: '27-49' }, { edad: '50-64' }, { edad: '65 o más' }]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  separator: {
    height: 10,
    backgroundColor: '#DDD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ADD8E6',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  celda: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#80E8FB',
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#1F2020',
  },
  texto: {
    textAlign: 'center',
    padding: 30,
  },
  headerText: {
    color: '#1F2020',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default TodasScreen;