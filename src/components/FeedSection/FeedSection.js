import React from 'react';
import {View, StyleSheet} from 'react-native';
// import CommentCard from '../CommentCard/CommentCard';
import FeedCard from '../FeedCard/FeedCard';

import {useNavigation} from '@react-navigation/native';

const FeedSection = () => {
  const navigation = useNavigation();
  const dispositivos = [
    {
      key: 1,
      tipo: 'Câmera de Segurança',
      nome: 'Camera Quintal 1',
      local: 'quintal-casa',
    },
    {
      key: 2,
      tipo: 'Câmera de Segurança',
      nome: 'Camera Quintal 2',
      local: 'quintal-casa',
    },
    {
      key: 3,
      tipo: 'Termostato',
      nome: 'Termostato da Sala',
      local: 'sala-casa',
      temperatura: 29,
    },
  ];

  return (
    <View style={styles.cartoes}>
      {dispositivos.map(dispositivo => {
        return (
          <FeedCard
            key={dispositivo.key}
            evento={() =>
              navigation.navigate('DeviceDetail', {device: dispositivo})
            }
            dispositivo={dispositivo}
            comentario={dispositivo.comentario}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cartoes: {},
});

export default FeedSection;
