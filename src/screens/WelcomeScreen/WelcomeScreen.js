import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onRegistrarPress = () => {
    console.log('Registrar');

    navigation.navigate('SingUp');
  };

  const onLogarPress = () => {
    console.log('Logar');

    navigation.navigate('SingIn');
  };
  return (
    <View>
      <Text style={styles.titulo}>Seja bem-vindo!</Text>
      <Text style={styles.texto}>
        Gerenice seus dispositivos IoTs com facilidade, configure, desligue e
        controle do conforto do seu celular
      </Text>

      <View style={styles.botoes}>
        <CustomButton
          texto={'Faça seu Login'}
          eventoPressionar={onLogarPress}
        />
        <CustomButton
          texto={'Crie sua Conta'}
          eventoPressionar={onRegistrarPress}
          tipo="TERTIARY"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
    position: 'relative',
    top: '20%',
  },
  texto: {
    position: 'relative',
    top: '30%',
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 5,
    letterSpacing: 1,
  },
  botoes: {
    position: 'relative',
    top: '100%',
  },
});

export default WelcomeScreen;
