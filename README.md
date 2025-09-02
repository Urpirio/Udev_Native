# udev_ultime_native

Librería de componentes UI para React Native que incluye botones personalizables, campos de texto, áreas de texto, campos de contraseña, menús desplegables y barras de progreso.

## Installation

```sh
npm install udev_ultime_native
```

## Componentes

Esta librería incluye los siguientes componentes:

### Button

Componente de botón personalizable que soporta diferentes tipos de interacción con estilos por defecto.

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
- `style_button` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor del botón (tiene estilos por defecto)
- `style_text` (StyleProp\<TextStyle>, opcional): Estilos del texto (tiene estilos por defecto)
- `iconLeft` (JSX.Element, opcional): Icono a la izquierda del texto
- `iconRight` (JSX.Element, opcional): Icono a la derecha del texto

### InputText

Campo de texto con funcionalidades avanzadas como iconos, modo contraseña y estilos por defecto.

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
  label={<Text>Email:</Text>}
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
- `style_input` (StyleProp\<TextStyle>, opcional): Estilos del input (tiene estilos por defecto)
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor (tiene estilos por defecto)
- `placeholderTextColor` (string, opcional): Color del placeholder (por defecto 'gray')
- `iconLeft` (JSX.Element, opcional): Icono a la izquierda
- `iconRight` (JSX.Element, opcional): Icono a la derecha
- `iconPasswordShow` (JSX.Element, opcional): Icono para mostrar contraseña
- `iconPasswordHide` (JSX.Element, opcional): Icono para ocultar contraseña
- `setShowPassword` (function, opcional): Función para controlar visibilidad de contraseña
- `ShowPassword` (boolean, opcional): Estado de visibilidad de contraseña
- `label` (JSX.Element, opcional): Etiqueta o label del campo

### InputPassword

Campo de entrada específico para contraseñas con funcionalidad de mostrar/ocultar y manejo interno del estado.

```js
import { InputPassword } from 'udev_ultime_native';

<InputPassword
  placeholder="Ingresa tu contraseña"
  value={password}
  onChangeText={setPassword}
  iconPasswordShow={<Icon name="eye" />}
  iconPasswordHide={<Icon name="eye-off" />}
  style_container={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
  style_input={{ fontSize: 16 }}
  placeholderTextColor="gray"
/>
```

**Props:**

- `value` (string, opcional): Valor del campo de contraseña
- `onChangeText` (function, opcional): Función ejecutada al cambiar el texto
- `placeholder` (string, opcional): Texto de placeholder
- `placeholderTextColor` (string, opcional): Color del placeholder (por defecto 'gray')
- `style_input` (StyleProp\<TextStyle>, opcional): Estilos del input (tiene estilos por defecto)
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor (tiene estilos por defecto con flexDirection row)
- `iconPasswordShow` (JSX.Element, opcional): Icono para mostrar contraseña
- `iconPasswordHide` (JSX.Element, opcional): Icono para ocultar contraseña

**Nota:** El estado de visibilidad de contraseña (`ShowPassword`) ahora se maneja internamente por el componente, no necesitas manejarlo externamente.

### InputTextarea

Campo de texto multilínea para entradas de texto más largas con estilos por defecto.

```js
import { InputTextarea } from 'udev_ultime_native';

<InputTextarea
  placeholder="Escribe tu mensaje aquí..."
  value={message}
  onChangeText={setMessage}
  style_container={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
  style_input={{ height: 100, textAlignVertical: 'top' }}
  placeholderTextColor="gray"
  iconLeft={<Icon name="message" />}
  iconRight={<Icon name="send" />}
/>
```

**Props:**

- `value` (string, opcional): Valor del campo de texto
- `onChangeText` (function, opcional): Función ejecutada al cambiar el texto
- `placeholder` (string, opcional): Texto de placeholder
- `placeholderTextColor` (string, opcional): Color del placeholder (por defecto 'gray')
- `style_input` (StyleProp\<TextStyle>, opcional): Estilos del input (tiene estilos por defecto)
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor (tiene estilos por defecto)
- `iconLeft` (JSX.Element, opcional): Icono a la izquierda
- `iconRight` (JSX.Element, opcional): Icono a la derecha

### DropDown

Menú desplegable personalizable con opciones seleccionables, estilos por defecto y funcionalidad mejorada.

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
  icon={<Icon name="chevron-down" />}
/>
```

**Props:**

- `data_option` (Array, opcional): Array de objetos con `label` y `value`
- `Value` (string | number | undefined, opcional): Valor seleccionado
- `setValue` (function, opcional): Función para establecer el valor seleccionado
- `placeholder` (string, opcional): Texto de placeholder
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor principal (tiene estilos por defecto)
- `style_container_option` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor de opciones (tiene estilos por defecto con posición absoluta)
- `style_button_option` (StyleProp\<ViewStyle>, opcional): Estilos de los botones de opción (tiene estilos por defecto)
- `style_text_option` (StyleProp\<TextStyle>, opcional): Estilos del texto de las opciones (tiene estilos por defecto)
- `style_text_placeholder` (StyleProp\<TextStyle>, opcional): Estilos del texto placeholder (tiene estilos por defecto)
- `style_text_selected` (StyleProp\<TextStyle>, opcional): Estilos del texto seleccionado (tiene estilos por defecto)
- `style_buttonOpen_option` (StyleProp\<ViewStyle>, opcional): Estilos del botón para abrir el dropdown (tiene estilos por defecto)
- `icon` (JSX.Element, opcional): Icono para el botón del dropdown
- `isOpen` (boolean, opcional): Estado de apertura del dropdown (manejado internamente)
- `setIsOpen` (function, opcional): Función para controlar el estado de apertura (manejado internamente)

### ProgressBar_Template

Barra de progreso personalizable con soporte para porcentajes, iconos y estados múltiples.

```js
import { ProgressBar_Template } from 'udev_ultime_native';

const statusBars = [
  { color: '#ff4444', status: 'Bajo', progress: 25 },
  { color: '#ffaa00', status: 'Medio', progress: 50 },
  { color: '#44ff44', status: 'Alto', progress: 75 },
  { color: '#0088ff', status: 'Completo', progress: 100 },
];

<ProgressBar_Template
  progress={75}
  height_bar={40}
  bg_color_progress="#4CAF50"
  bg_container_bar="#E0E0E0"
  show_percentage={true}
  status_bar={statusBars}
  iconLeft={<Icon name="star" />}
  iconRight={<Icon name="check" />}
  style_container={{ marginVertical: 10 }}
  text_style_percentage={{ fontSize: 14, fontWeight: 'bold' }}
/>
```

**Props:**

- `progress` (number): Valor del progreso (0-100)
- `height_bar` (number, opcional): Altura de la barra (por defecto 30)
- `bg_color_progress` (string, opcional): Color del progreso (por defecto 'black')
- `bg_container_bar` (string, opcional): Color del contenedor (por defecto '#f8f9fa')
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor principal
- `show_percentage` (boolean, opcional): Mostrar porcentaje en la barra
- `iconLeft` (JSX.Element, opcional): Icono a la izquierda del porcentaje
- `iconRight` (JSX.Element, opcional): Icono a la derecha del porcentaje
- `status_bar` (Array, opcional): Array de objetos con estados (color, status, progress)
- `text_style_percentage` (StyleProp\<TextStyle>, opcional): Estilos del texto de porcentaje
- `text_percentage` (JSX.Element, opcional): Elemento personalizado para mostrar en lugar del porcentaje
- `style_progress_bar` (StyleProp\<ViewStyle>, opcional): Estilos de la barra de progreso interna

## Ejemplo de uso completo

```js
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, InputText, InputPassword, InputTextarea, DropDown, ProgressBar_Template } from 'udev_ultime_native';

export default function App() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [progress, setProgress] = useState(65);

  const options = [
    { label: 'Opción 1', value: 'option1' },
    { label: 'Opción 2', value: 'option2' },
    { label: 'Opción 3', value: 'option3' },
  ];

  const statusBars = [
    { color: '#ff4444', status: 'Bajo', progress: 25 },
    { color: '#ffaa00', status: 'Medio', progress: 50 },
    { color: '#44ff44', status: 'Alto', progress: 75 },
    { color: '#0088ff', status: 'Completo', progress: 100 },
  ];

  return (
    <View style={{ padding: 20 }}>
      <InputText
        placeholder="Ingresa tu nombre"
        value={text}
        onChangeText={setText}
        style_container={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />
      
      <InputPassword
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        style_container={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />
      
      <InputTextarea
        placeholder="Escribe tu mensaje..."
        value={message}
        onChangeText={setMessage}
        style_container={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 10 }}
        style_input={{ height: 80, textAlignVertical: 'top' }}
      />
      
      <DropDown
        placeholder="Selecciona una opción"
        data_option={options}
        Value={selectedValue}
        setValue={setSelectedValue}
        style_container={{ marginBottom: 10 }}
      />
      
      <ProgressBar_Template
        progress={progress}
        height_bar={35}
        show_percentage={true}
        status_bar={statusBars}
        style_container={{ marginBottom: 10 }}
      />
      
      <Button
        title="Enviar"
        type_button="TouchableOpacity"
        onPress={() => console.log('Datos:', { text, password, message, selectedValue, progress })}
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
