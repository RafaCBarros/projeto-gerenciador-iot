import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import DeviceHeader from '../DeviceHeader/DeviceHeader';

const FeedCard = ({comentario, dispositivo = null, evento}) => {
  return (
    <Pressable onPress={evento} style={styles.cartao}>
      <DeviceHeader
        localDispositivo={dispositivo ? dispositivo.local : ''}
        nomeDispositivo={dispositivo ? dispositivo.nome : ''}
        tipoDispositivo={dispositivo ? dispositivo.tipo : ''}
      />
      <Text style={styles.legenda}>
        {dispositivo ? dispositivo.comentario : ''}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cartao: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 5,

    alignItems: 'flex-start',
  },
  legenda: {
    fontSize: 16,
  },
});

export default FeedCard;
