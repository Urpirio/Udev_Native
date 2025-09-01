import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import type { Button_Props, InputText_Props, DropDown_Props } from './types';
import { useState } from 'react';

export function Button({
  style_button,
  style_text,
  title,
  onPress,
  onLongPress,
  iconLeft,
  iconRight,
  type_button,
}: Button_Props) {
  switch (type_button) {
    case 'Pressable':
      return (
        <Pressable
          style={style_button}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {iconLeft && iconLeft}
          <Text style={style_text}>{title}</Text>
          {iconRight && iconRight}
        </Pressable>
      );
    case 'TouchableHighlight':
      return (
        <TouchableHighlight
          style={style_button}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {iconLeft && iconLeft}
          <Text style={style_text}>{title}</Text>
          {iconRight && iconRight}
        </TouchableHighlight>
      );
    case 'TouchableOpacity':
      return (
        <TouchableOpacity
          style={style_button}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {iconLeft && iconLeft}
          <Text style={style_text}>{title}</Text>
          {iconRight && iconRight}
        </TouchableOpacity>
      );
  }
}

export function InputText({
  style_input,
  onChangeText,
  value,
  keyboardType,
  placeholder,
  secureTextEntry,
  editable,
  multiline,
  iconLeft,
  iconRight,
  iconPasswordShow,
  iconPasswordHide,
  setShowPassword,
  ShowPassword,
  style_container,
  placeholderTextColor,
}: InputText_Props) {
  return (
    <View style={style_container}>
      {iconLeft && iconLeft}
      <TextInput
        multiline={multiline}
        editable={editable}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={style_input}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={placeholderTextColor}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() =>
            setShowPassword ? setShowPassword(!ShowPassword) : null
          }
        >
          {ShowPassword ? iconPasswordHide : iconPasswordShow}
        </TouchableOpacity>
      )}
      {iconRight && iconRight}
    </View>
  );
}

export function InputPassword({
  setShowPassword,
  ShowPassword,
  iconPasswordShow,
  iconPasswordHide,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  style_container,
  style_input,
}: InputText_Props) {
  return (
    <View style={style_container}>
      <TextInput
        style={style_input}
        secureTextEntry={ShowPassword}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <TouchableOpacity
        onPress={() =>
          setShowPassword ? setShowPassword(!ShowPassword) : null
        }
      >
        {ShowPassword ? iconPasswordHide : iconPasswordShow}
      </TouchableOpacity>
    </View>
  );
}

export function InputTextarea({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  style_container,
  style_input,
  iconLeft,
  iconRight
}: InputText_Props) {
  return (
    <View style={style_container}>
      {iconLeft && iconLeft}
      <TextInput
        value={value}
        multiline={true}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={style_input}
      />
      {iconRight && iconRight}
    </View>
  );
};

export function DropDown({
  style_container,
  style_container_option,
  style_button_option,
  style_text_option,
  style_text_placeholder,
  style_text_selected,
  Value,
  setValue,
  data_option,
  placeholder,
}: DropDown_Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={style_container}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        onPressOut={() => setIsOpen(false)}
      >
        <Text style={style_text_placeholder}>
          {Value ? Value : placeholder}
        </Text>
      </TouchableOpacity>
      <View style={style_container_option}>
        {data_option?.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={style_button_option}
            onPress={() => (setValue ? setValue(item.value) : null)}
          >
            <Text
              style={
                Value === item.value ? style_text_selected : style_text_option
              }
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
