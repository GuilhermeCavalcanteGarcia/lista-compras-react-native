import { StyleSheet, View } from 'react-native';
import { Input } from '@rneui/themed';
import React, { useState } from 'react';

const InputItemCompra = ({ adicionar }) => {
  const [textoInput, setTextoInput] = useState('');

  function submeterInput() {
    adicionar(textoInput);
  }
  return (
    <View>
      <Input
        placeholder="Adicionar item"
        inputStyle={styles.input}
        placeholderTextColor={'#F9FAFB'}
        leftIcon={{
          type: 'material',
          name: 'add',
          iconStyle: styles.icone,
        }}
        autoCorrect={false}
        value={textoInput}
        onChangeText={setTextoInput}
        onSubmitEditing={submeterInput}
      />
    </View>
  );
};

export default InputItemCompra;

const styles = StyleSheet.create({
  input: {
    color: '#F9FAFB',
  },
  icone: {
    color: '#F9FAFB',
  },
});
