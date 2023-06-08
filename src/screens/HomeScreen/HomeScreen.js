import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

import CustomButton from '../../components/CustomButton/CustomButton';

import FeedSection from '../../components/FeedSection/FeedSection';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const aoNovoDispositivoApertado = () => {
    navigation.navigate('NewDevice');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tela}>
      <View style={styles.root}>
        <CustomButton
          texto="Adicionar Dispositivo"
          eventoPressionar={aoNovoDispositivoApertado}
        />
        <Text style={styles.titulo}> Dispositivos </Text>
        <FeedSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tela: {},
  titulo: {
    fontSize: 24,
    marginVertical: 5,
    color: 'black',
  },
  root: {
    paddingHorizontal: 15,
    paddingTop: 25,
  },
});

export default HomeScreen;
