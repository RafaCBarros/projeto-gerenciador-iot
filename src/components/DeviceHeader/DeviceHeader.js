import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DeviceHeader = ({
  nomeDispositivo = 'Dispositivo desconhecido',
  localDispositivo = 'Local não informado',
  tipoDispositivo = 'Tipo não registrado',
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.image} />
      <View style={styles.textos}>
        <Text style={styles.nomeD}>{nomeDispositivo}</Text>
        <Text style={styles.tipoD}>{tipoDispositivo}</Text>
      </View>
      <Text style={styles.localD}>{localDispositivo} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flexDirection: 'row', marginVertical: 5},
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'grey',
  },
  textos: {flexDirection: 'column', marginHorizontal: 10},
  nomeD: {fontWeight: 'bold', fontSize: 16, color: '#3b71F3'},
  tipoD: {fontSize: 16},
});
export default DeviceHeader;
