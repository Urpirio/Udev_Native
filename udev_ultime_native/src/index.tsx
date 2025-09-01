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
          style={
            style_button
              ? style_button
              : {
                  borderWidth: 1,
                  backgroundColor: 'black',
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }
          }
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {iconLeft && iconLeft}
          <Text style={style_text ? style_text : { color: 'white' }}>
            {title}
          </Text>
          {iconRight && iconRight}
        </Pressable>
      );
    case 'TouchableHighlight':
      return (
        <TouchableHighlight
          style={
            style_button
              ? style_button
              : {
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 10,
                  padding: 10,
                }
          }
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {iconLeft && iconLeft}
          <Text style={style_text ? style_text : { color: 'white' }}>
            {title}
          </Text>
          {iconRight && iconRight}
        </TouchableHighlight>
      );
    case 'TouchableOpacity':
      return (
        <TouchableOpacity
          style={
            style_button
              ? style_button
              : {
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 10,
                  padding: 10,
                }
          }
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {iconLeft && iconLeft}
          <Text style={style_text ? style_text : { color: 'white' }}>
            {title}
          </Text>
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
    <View
      style={
        style_container
          ? style_container
          : {
              borderWidth: 1,
              width: '100%',
              borderColor: 'gray',
              borderRadius: 10,
              padding: 10,
            }
      }
    >
      {iconLeft && iconLeft}
      <TextInput
        multiline={multiline}
        editable={editable}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={style_input ? style_input : { width: '80%' }}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : 'gray'
        }
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
  iconPasswordShow,
  iconPasswordHide,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  style_container,
  style_input,
}: InputText_Props) {
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View
      style={
        style_container
          ? style_container
          : {
              borderWidth: 1,
              width: '100%',
              borderColor: 'gray',
              borderRadius: 10,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }
      }
    >
      <TextInput
        style={style_input ? style_input : { width: '80%' }}
        secureTextEntry={ShowPassword}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : 'gray'
        }
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
  iconRight,
}: InputText_Props) {
  return (
    <View
      style={
        style_container
          ? style_container
          : {
              borderWidth: 1,
              width: '100%',
              borderColor: 'gray',
              borderRadius: 10,
              padding: 10,
            }
      }
    >
      {iconLeft && iconLeft}
      <TextInput
        value={value}
        multiline={true}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : 'gray'
        }
        style={style_input ? style_input : { width: '80%' }}
      />
      {iconRight && iconRight}
    </View>
  );
}

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
  style_buttonOpen_option,
  icon,
}: DropDown_Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View
      style={
        style_container
          ? style_container
          : {
              borderWidth: 1,
              borderRadius: 10,
              width: '100%',
              paddingVertical: 10,
            }
      }
    >
      <TouchableOpacity
        style={
          style_buttonOpen_option
            ? style_buttonOpen_option
            : {
                width: '100%',
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'center',
              }
        }
        onPress={() => setIsOpen(!isOpen)}
        onPressOut={() => setIsOpen(false)}
      >
        <Text
          style={
            style_text_placeholder
              ? style_text_placeholder
              : { color: 'black', alignItems: 'center' }
          }
        >
          {Value ? Value : placeholder}
        </Text>
        {icon}
      </TouchableOpacity>
      {isOpen && (
        <View
          style={
            style_container_option
              ? style_container_option
              : {
                  borderWidth: 1,
                  position: 'absolute',
                  marginTop: 55,
                  width: '100%',
                  padding: 5,
                  borderRadius: 15,
                  gap: 10,
                }
          }
        >
          {data_option?.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={
                style_button_option
                  ? style_button_option
                  : {
                      width: '100%',
                      borderRadius: 10,
                      padding: 10,
                    }
              }
              onPress={() => {
                setValue ? setValue(item.value) : null;
                setIsOpen(false);
              }}
            >
              <Text
                style={
                  Value === item.value
                    ? style_text_selected
                      ? style_text_selected
                      : {
                          fontWeight: 'bold',
                          color: 'black',
                        }
                    : style_text_option
                      ? style_text_option
                      : { fontWeight: '300', color: 'black' }
                }
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
