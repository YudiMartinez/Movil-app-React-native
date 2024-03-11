import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const AplicadasScreen = () => {
   const data = [
    { id: 1, vacuna: 'Vacuna contra el sarampión', fecha: '10/01/2008' },
    { id: 2, vacuna: 'Vacuna contra la gripe', fecha: '15/02/2011' },
    { id: 3, vacuna: 'Vacuna contra la hepatitis B', fecha: '20/03/2015' },
    { id: 4, vacuna: 'Vacuna contra el tétanos', fecha: '25/04/2020' },
    { id: 5, vacuna: 'Vacuna contra la fiebre amarilla', fecha: '30/05/2023' },
   ];

   const renderItem = ({item, index}) =>(
    <View style={[styles.item, index % 2 === 0 ? styles.itemEven : styles.itemOdd]}>
      <Text style={styles.itemText}>{item.vacuna}</Text>
      <Text style={styles.itemText}>{item.fecha}</Text>
    </View>
   )

   return (
    <View style={styles.container}>
      <Text style={styles.texto}>VACUNAS APLICADAS</Text>

      <View style={styles.header}>
        <Text style={[styles.itemText, styles.headerText]}>Vacuna</Text>
        <Text style={[styles.itemText, styles.headerText]}>Fecha</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.flatList}
      />
    </View>
   )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#08C96D',
  },

  item: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },

  itemEven: {
    backgroundColor: '#F9F9F9',
  },

  itemOdd: {
    backgroundColor: '#DDFBD2',
  },

  itemText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },

  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#C1F5AD',
    borderRadius: 8,
    marginBottom: 10,
  },

  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },

  flatList: {
    flex: 1,
  },
});

export default AplicadasScreen;


