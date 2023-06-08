import React from 'react';
import {View, StyleSheet} from 'react-native';

import {SelectList} from 'react-native-dropdown-select-list';

const CustomSelect = ({value, setValue, placeholder, listaSelecionar}) => {
  return (
    <View style={styles.campo}>
      <SelectList
        placeholder={placeholder}
        onSelect={() => console.log(value)}
        setSelected={setValue}
        data={listaSelecionar}
        save="value"
        boxStyles={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#e8e8e8',
          backgroundColor: 'white',
          width: '100%',
          paddingHorizontal: 10,
        }}
        dropdownStyles={{
          borderWidth: 0,
          borderRadius: 0,
          marginTop: 0,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  campo: {
    marginVertical: 5,
  },
});

export default CustomSelect;
