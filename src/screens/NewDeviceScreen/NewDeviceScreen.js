import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomSelect from '../../components/CustomSelect/CustomSelect';

const NewDeviceScreen = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState('');
  const tiposDispositivos = [
    {key: 1, value: 'Lâmpada Inteligente'},
    {key: 2, value: 'Termostato'},
    {key: 3, value: 'Fechadura Eletrônica'},
    {key: 4, value: 'Câmera de Segurança'},
    {key: 5, value: 'Portão'},
    {key: 6, value: 'Outros...'},
  ];
  const aoConfirmarNovoApertado = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.titulo}>Cadastrar Novo Dispositivo</Text>
      <CustomSelect
        placeholder="Escolha tipo de dispositivo"
        value={selected}
        setValue={setSelected}
        listaSelecionar={tiposDispositivos}
      />
      <CustomInput nome="nome" placeholder="Nome Dispositivo" />
      <CustomInput nome="local" placeholder="Apelido Localização" />
      <CustomButton
        texto="Confirmar Novo Dispositivo"
        eventoPressionar={aoConfirmarNovoApertado}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 15,
  },
  titulo: {
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default NewDeviceScreen;
