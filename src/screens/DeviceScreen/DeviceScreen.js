import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from '../../components/CustomButton/CustomButton';

import {useNavigation} from '@react-navigation/native';

const DeviceScreen = ({route}) => {
  const navigation = useNavigation();

  const aoVoltarApertado = () => {
    navigation.navigate('Home');
  };

  const aoDeletarApertado = () => {
    console.warn('DELETAR');
    navigation.navigate('Home');
  };

  let temperaturaTermostato = route.params.device.temperatura || null;

  return (
    <View style={styles.root}>
      <Text style={styles.nome}>{route.params.device.nome}</Text>
      <Text style={styles.tipo}>
        <Text style={{fontWeight: 'bold'}}>Tipo: </Text>
        {route.params.device.tipo}
      </Text>
      <Text style={styles.local}>
        <Text style={{fontWeight: 'bold'}}>Localização: </Text>
        {route.params.device.local}
      </Text>

      {route.params.device.tipo === 'Termostato' && (
        <View>
          <Text style={styles.tipo}>
            <Text style={{fontWeight: 'bold'}}>Temperatura: </Text>
            {route.params.device.temperatura}°
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <CustomButton
              tipo="SMALL"
              bgColor=""
              fgColor="red"
              texto="SUBIR"
              eventoPressionar={() => temperaturaTermostato++}
            />
            <CustomButton
              tipo="SMALL"
              bgColor=""
              fgColor="blue"
              texto="ABAIXAR"
              eventoPressionar={() => temperaturaTermostato--}
            />
          </View>
        </View>
      )}

      {route.params.device.tipo === 'Câmera de Segurança' && (
        <Text style={{fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10}}>
          Feed:
          <Text style={{color: 'red'}}>[INDISPONÍVEL]</Text>
        </Text>
      )}

      <CustomButton texto="Voltar" eventoPressionar={aoVoltarApertado} />
      <CustomButton
        texto="DELETAR"
        eventoPressionar={aoDeletarApertado}
        tipo="RED"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    paddingVertical: 15,
  },
  tipo: {
    fontSize: 18,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  nome: {
    fontSize: 24,
    marginVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  local: {
    fontSize: 18,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default DeviceScreen;
