import { View, StyleSheet } from 'react-native';
import { Button, DropDown, InputText } from 'react-native-udev_ultime_native';


export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title=""
        style_button={{}}
        style_text={{}}
        onLongPress={() => {}}
        onPress={() => {}}
        type_button="TouchableOpacity"
      />
      <DropDown
        style_container={{}}
        style_container_option={{}}
        style_button_option={{}}
        style_text_option={{}}
        style_text_placeholder={{}}
        style_text_selected={{}}
        Value=""
        setValue={() => {}}
        data_option={[]}
        placeholder=""
      />
      <InputText
        style_input={{}}
        onChangeText={() => {}}
        value=""
        keyboardType="default"
        placeholder=""
        secureTextEntry={false}
        editable={true}
        multiline={false}
        iconLeft={null}
        iconRight={null}
        iconPasswordShow={null}
        iconPasswordHide={null}
        setShowPassword={() => {}}
        ShowPassword={false}
        style_container={{}}
        placeholderTextColor=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
