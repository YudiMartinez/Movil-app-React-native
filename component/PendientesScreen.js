import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const PendientesScreen = () => {
   const data =[
    { id: 1, vacuna: 'Vacuna contra la varicela' , DosisPendientes: '2', },
    { id: 2, vacuna: 'Vacuna contra la influenza ' , DosisPendientes: '1',},
    { id: 3, vacuna: 'Vacuna contra el COVID-19', DosisPendientes: '3', },
    { id: 4, vacuna: 'Vacuna MMR ', DosisPendientes: '1', },
    { id: 5, vacuna: 'Vacuna contra la culebrilla', DosisPendientes: '1', },
   ]

   const renderItem = ({item, index}) =>(
    <View style={[styles.item, index % 2 === 0 ? styles.itemEven : styles.itemOdd]}>
      <Text style={styles.itemText}>{item.vacuna}</Text>
      <Text style={styles.itemText}>{item.DosisPendientes}</Text>
    </View>
   )
   return(
    <View style={styles.container}>
      <Text style={styles.texto}>VACUNAS PENDIENTES</Text>

      <View style={styles.header}>
        <Text style={[styles.itemText, styles.headerText]}>Vacuna</Text>
        <Text style={[styles.itemText, styles.headerText]}>Dosis Pendientes</Text>
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
    color: '#F45858',
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
    backgroundColor: '#F3F3F3',
  },

  itemOdd: {
    backgroundColor: '#F7DDDD',
  },

  itemText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },

  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#FBAFAF',
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

export default PendientesScreen;
