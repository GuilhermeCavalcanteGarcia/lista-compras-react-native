import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const ItemCompra = ({ itemCompra, remover }) => {
  const [marcado, setMarcado] = useState(false);

  function removerItem() {
    Alert.alert('', 'Deseja remover ?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Remover', onPress: remover(itemCompra) },
    ]);
  }
  return (
    <View style={styles.container}>
      <CheckBox
        checked={marcado}
        containerStyle={styles.checkBoxContainer}
        checkedColor="#1CA3AF"
        uncheckedColor="#9FAFBb"
        onPress={() => setMarcado(!marcado)}
      />
      <Text style={[styles.nomeItem, marcado && styles.itemMarcado]}>
        {itemCompra.nome}
      </Text>
      <TouchableOpacity onPress={removerItem()}>
        <AntDesign name="minuscircle" size={20} color="#F9FAFB" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCompra;

const styles = StyleSheet.create({
  nomeItem: {
    color: '#F9FAFB',
    fontSize: 20,
    padding: 10,
  },
  container: {
    margin: 2,
    backgroundColor: '#374150',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
  },
  itemMarcado: {
    textDecorationLine: 'line-through',
    color: 'coral',
  },
});
