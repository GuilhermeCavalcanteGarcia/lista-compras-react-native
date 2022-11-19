import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import ItemCompra from './ItemCompra';
import InputItemCompra from './InputItemCompra';
import uuid from 'react-uuid';
const ListaCompras = () => {
  // Estados
  const [list, setList] = useState([
    {
      id: 1,
      nome: 'Biscoito',
    },
    {
      id: 2,
      nome: 'Pão',
    },
    {
      id: 3,
      nome: 'Manteiga',
    },
    {
      id: 4,
      nome: 'Os Danones',
    },
    {
      id: 5,
      nome: 'Maçã',
    },
    {
      id: 6,
      nome: 'Feijão',
    },
  ]);

  function adicionarNaLista(nomeItem) {
    setList([...list, { id: uuid(), nome: nomeItem }]);
  }

  const removerDaLista = (item) => {
    const listaTemp = list.filter((elemento) => elemento.id != item.id);
    setList(listaTemp);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Lista de Compras
        <AntDesign name="shoppingcart" size={30} color="#F9FAFB" />
      </Text>

      <InputItemCompra adicionar={adicionarNaLista} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ItemCompra itemCompra={item} remover={removerDaLista} />
        )}
      />
    </View>
  );
};

export default ListaCompras;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  titulo: {
    color: '#F9FAFB',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
});
