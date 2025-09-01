# udev_ultime_native

Librería de componentes UI para React Native que incluye botones personalizables, campos de texto y menús desplegables.

## Installation

```sh
npm install udev_ultime_native
```

## Componentes

Esta librería incluye los siguientes componentes:

### Button

Componente de botón personalizable que soporta diferentes tipos de interacción.

```js
import { Button } from 'udev_ultime_native';

<Button
  title="Mi Botón"
  type_button="TouchableOpacity"
  onPress={() => console.log('Presionado')}
  style_button={{ backgroundColor: 'blue', padding: 10 }}
  style_text={{ color: 'white' }}
  iconLeft={<Icon name="star" />}
  iconRight={<Icon name="arrow" />}
/>
```

**Props:**

- `title` (string): Texto del botón
- `type_button` ('TouchableOpacity' | 'Pressable' | 'TouchableHighlight'): Tipo de componente de botón
- `onPress` (function, opcional): Función ejecutada al presionar
- `onLongPress` (function, opcional): Función ejecutada al presionar prolongadamente
- `style_button` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor del botón
- `style_text` (StyleProp\<TextStyle>, opcional): Estilos del texto
- `iconLeft` (JSX.Element, opcional): Icono a la izquierda del texto
- `iconRight` (JSX.Element, opcional): Icono a la derecha del texto

### InputText

Campo de texto con funcionalidades avanzadas como iconos y modo contraseña.

```js
import { InputText } from 'udev_ultime_native';

<InputText
  placeholder="Ingresa tu texto"
  value={text}
  onChangeText={setText}
  keyboardType="email-address"
  secureTextEntry={isPassword}
  iconLeft={<Icon name="user" />}
  iconPasswordShow={<Icon name="eye" />}
  iconPasswordHide={<Icon name="eye-off" />}
  setShowPassword={setShowPassword}
  ShowPassword={showPassword}
/>
```

**Props:**

- `value` (string, opcional): Valor del campo de texto
- `onChangeText` (function, opcional): Función ejecutada al cambiar el texto
- `placeholder` (string, opcional): Texto de placeholder
- `keyboardType` ('default' | 'numeric' | 'email-address' | 'phone-pad', opcional): Tipo de teclado
- `secureTextEntry` (boolean, opcional): Modo contraseña
- `editable` (boolean, opcional): Si el campo es editable
- `multiline` (boolean, opcional): Soporte para múltiples líneas
- `style_input` (StyleProp\<TextStyle>, opcional): Estilos del input
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor
- `placeholderTextColor` (string, opcional): Color del placeholder
- `iconLeft` (JSX.Element, opcional): Icono a la izquierda
- `iconRight` (JSX.Element, opcional): Icono a la derecha
- `iconPasswordShow` (JSX.Element, opcional): Icono para mostrar contraseña
- `iconPasswordHide` (JSX.Element, opcional): Icono para ocultar contraseña
- `setShowPassword` (function, opcional): Función para controlar visibilidad de contraseña
- `ShowPassword` (boolean, opcional): Estado de visibilidad de contraseña

### DropDown

Menú desplegable personalizable con opciones seleccionables.

```js
import { DropDown } from 'udev_ultime_native';

const options = [
  { label: 'Opción 1', value: 1 },
  { label: 'Opción 2', value: 2 },
  { label: 'Opción 3', value: 3 },
];

<DropDown
  placeholder="Selecciona una opción"
  data_option={options}
  Value={selectedValue}
  setValue={setSelectedValue}
  style_container={{ borderWidth: 1, borderColor: 'gray' }}
  style_text_placeholder={{ color: 'gray' }}
  style_text_selected={{ color: 'blue', fontWeight: 'bold' }}
/>
```

**Props:**

- `data_option` (Array, opcional): Array de objetos con `label` y `value`
- `Value` (string | number, opcional): Valor seleccionado
- `setValue` (function, opcional): Función para establecer el valor seleccionado
- `placeholder` (string, opcional): Texto de placeholder
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor principal
- `style_container_option` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor de opciones
- `style_button_option` (StyleProp\<TextStyle>, opcional): Estilos de los botones de opción
- `style_text_option` (StyleProp\<TextStyle>, opcional): Estilos del texto de las opciones
- `style_text_placeholder` (StyleProp\<TextStyle>, opcional): Estilos del texto placeholder
- `style_text_selected` (StyleProp\<TextStyle>, opcional): Estilos del texto seleccionado

## Ejemplo de uso completo

```js
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, InputText, DropDown } from 'udev_ultime_native';

export default function App() {
  const [text, setText] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const options = [
    { label: 'Opción 1', value: 'option1' },
    { label: 'Opción 2', value: 'option2' },
    { label: 'Opción 3', value: 'option3' },
  ];

  return (
    <View style={{ padding: 20 }}>
      <InputText
        placeholder="Ingresa tu texto"
        value={text}
        onChangeText={setText}
        style_container={{ marginBottom: 10 }}
      />
      
      <DropDown
        placeholder="Selecciona una opción"
        data_option={options}
        Value={selectedValue}
        setValue={setSelectedValue}
        style_container={{ marginBottom: 10 }}
      />
      
      <Button
        title="Enviar"
        type_button="TouchableOpacity"
        onPress={() => console.log('Texto:', text, 'Selección:', selectedValue)}
        style_button={{ backgroundColor: 'blue', padding: 15, borderRadius: 5 }}
        style_text={{ color: 'white', textAlign: 'center' }}
      />
    </View>
  );
}


## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

https://github.com/Urpirio/Udev_Native
