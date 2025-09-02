# udev_ultime_native

Librería de componentes UI optimizada para React Native que ofrece una colección completa de elementos de interfaz listos para usar: botones personalizables con múltiples tipos de interacción, campos de texto avanzados con soporte para iconos y validación, áreas de texto multilínea, campos de contraseña con visibilidad controlada, menús desplegables dinámicos y barras de progreso configurables. Diseñada con TypeScript para mejor tipado y rendimiento optimizado.

## Installation

```sh
npm install udev_ultime_native
```

## Versión Actual: 3.3.0

### Cambios Recientes (v3.3.0)

- ✅ **Optimización de interfaces**: Eliminación de propiedades no utilizadas en `InputText_Props`
- ✅ **Limpieza de código**: Removed unused pointer, responder, touch, y scroll event handlers
- ✅ **Mejor rendimiento**: Interfaces más ligeras y componentes optimizados
- ✅ **Documentación actualizada**: Props sincronizadas con la implementación real

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
- `type_button` ('TouchableOpacity' | 'Pressable' | 'TouchableHighlight', opcional): Tipo de componente de botón
- `onPress` (function, opcional): Función ejecutada al presionar
- `onLongPress` (function, opcional): Función ejecutada al presionar prolongadamente
- `onPressIn` (function, opcional): Función ejecutada al iniciar presión
- `onPressOut` (function, opcional): Función ejecutada al finalizar presión
- `onShowUnderlay` (function, opcional): Función ejecutada al mostrar underlay (TouchableHighlight)
- `onHideUnderlay` (function, opcional): Función ejecutada al ocultar underlay (TouchableHighlight)
- `onAccessibilityAction` (function, opcional): Función para acciones de accesibilidad
- `onAccessibilityEscape` (function, opcional): Función para escape de accesibilidad
- `onAccessibilityTap` (function, opcional): Función para tap de accesibilidad
- `onBlur` (function, opcional): Función ejecutada al perder foco
- `onFocus` (function, opcional): Función ejecutada al ganar foco
- `onLayout` (function, opcional): Función ejecutada al cambiar layout
- `onMagicTap` (function, opcional): Función para magic tap de accesibilidad
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
- `numberOfLines` (number, opcional): Número de líneas para el input
- `readOnly` (boolean, opcional): Campo de solo lectura
- `clearTextOnFocus` (boolean, opcional): Limpiar texto al enfocar
- `selectTextOnFocus` (boolean, opcional): Seleccionar texto al enfocar
- `showSoftInputOnFocus` (boolean, opcional): Mostrar teclado al enfocar
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
- `onFocus` (function, opcional): Función ejecutada al ganar foco
- `onBlur` (function, opcional): Función ejecutada al perder foco
- `onLayout` (function, opcional): Función ejecutada al cambiar layout
- `onSubmitEditing` (function, opcional): Función ejecutada al enviar
- `onKeyPress` (function, opcional): Función ejecutada al presionar tecla
- `onChange` (function, opcional): Función ejecutada al cambiar
- `onContentSizeChange` (function, opcional): Función ejecutada al cambiar tamaño del contenido
- `onEndEditing` (function, opcional): Función ejecutada al terminar edición
- `onSelectionChange` (function, opcional): Función ejecutada al cambiar selección
- `onTextInput` (function, opcional): Función ejecutada en input de texto
- `onPress` (function, opcional): Función ejecutada al presionar
- `onPressIn` (function, opcional): Función ejecutada al iniciar presión
- `onPressOut` (function, opcional): Función ejecutada al finalizar presión
- `onAccessibilityAction` (function, opcional): Función para acciones de accesibilidad
- `onAccessibilityEscape` (function, opcional): Función para escape de accesibilidad
- `onAccessibilityTap` (function, opcional): Función para tap de accesibilidad
- `onMagicTap` (function, opcional): Función para magic tap de accesibilidad

**Nota:** En la versión 3.3.0, se optimizaron las props eliminando eventos no utilizados para mejor rendimiento.

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

**Nota:** El estado de visibilidad de contraseña (`ShowPassword`) se maneja internamente por el componente. En la versión 3.3.0, se optimizaron las props eliminando eventos no utilizados.

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
- `numberOfLines` (number, opcional): Número de líneas para el textarea
- `readOnly` (boolean, opcional): Campo de solo lectura
- `clearTextOnFocus` (boolean, opcional): Limpiar texto al enfocar
- `selectTextOnFocus` (boolean, opcional): Seleccionar texto al enfocar
- `showSoftInputOnFocus` (boolean, opcional): Mostrar teclado al enfocar
- `placeholderTextColor` (string, opcional): Color del placeholder (por defecto 'gray')
- `style_input` (StyleProp\<TextStyle>, opcional): Estilos del input (tiene estilos por defecto)
- `style_container` (StyleProp\<ViewStyle>, opcional): Estilos del contenedor (tiene estilos por defecto)
- `iconLeft` (JSX.Element, opcional): Icono a la izquierda
- `iconRight` (JSX.Element, opcional): Icono a la derecha
- `onFocus` (function, opcional): Función ejecutada al ganar foco
- `onBlur` (function, opcional): Función ejecutada al perder foco
- `onLayout` (function, opcional): Función ejecutada al cambiar layout
- `onSubmitEditing` (function, opcional): Función ejecutada al enviar
- `onKeyPress` (function, opcional): Función ejecutada al presionar tecla
- `onChange` (function, opcional): Función ejecutada al cambiar
- `onContentSizeChange` (function, opcional): Función ejecutada al cambiar tamaño del contenido
- `onEndEditing` (function, opcional): Función ejecutada al terminar edición
- `onSelectionChange` (function, opcional): Función ejecutada al cambiar selección
- `onPress` (function, opcional): Función ejecutada al presionar
- `onPressIn` (function, opcional): Función ejecutada al iniciar presión
- `onPressOut` (function, opcional): Función ejecutada al finalizar presión
- `onAccessibilityAction` (function, opcional): Función para acciones de accesibilidad
- `onAccessibilityEscape` (function, opcional): Función para escape de accesibilidad
- `onAccessibilityTap` (function, opcional): Función para tap de accesibilidad
- `onMagicTap` (function, opcional): Función para magic tap de accesibilidad

**Nota:** En la versión 3.3.0, se optimizaron las props eliminando eventos no utilizados (pointer, responder, touch, scroll events) para mejor rendimiento.

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

### ProgressBar

Barra de progreso personalizable con soporte para porcentajes, iconos y estados múltiples.

```js
import { ProgressBar } from 'udev_ultime_native';

const statusBars = [
  { color: '#ff4444', status: 'Bajo', progress: 25 },
  { color: '#ffaa00', status: 'Medio', progress: 50 },
  { color: '#44ff44', status: 'Alto', progress: 75 },
  { color: '#0088ff', status: 'Completo', progress: 100 },
];

<ProgressBar
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
      
      <ProgressBar
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
