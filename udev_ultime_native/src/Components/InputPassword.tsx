import type { InputText_Props } from '../types';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export function InputPassword({
  iconPasswordShow,
  iconPasswordHide,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  style_container,
  style_input,
  onAccessibilityAction,
  onAccessibilityEscape,
  onAccessibilityTap,
  onBlur,
  onChange,
  onContentSizeChange,
  onEndEditing,
  onFocus,
  onKeyPress,
  onLayout,
  onSelectionChange,
  onMagicTap,
  onPress,
  onPressIn,
  onPressOut,
  onSubmitEditing,
  readOnly,
  clearTextOnFocus,
  selectTextOnFocus,
  showSoftInputOnFocus,
  numberOfLines,
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
        style={[{ width: '80%' }, style_input]}
        secureTextEntry={ShowPassword}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        onLayout={onLayout}
        onKeyPress={onKeyPress}
        onChange={onChange}
        onContentSizeChange={onContentSizeChange}
        onEndEditing={onEndEditing}
        onSelectionChange={onSelectionChange}
        onMagicTap={onMagicTap}
        onAccessibilityAction={onAccessibilityAction}
        onAccessibilityEscape={onAccessibilityEscape}
        onAccessibilityTap={onAccessibilityTap}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onSubmitEditing={onSubmitEditing}
        readOnly={readOnly}
        clearTextOnFocus={clearTextOnFocus}
        selectTextOnFocus={selectTextOnFocus}
        showSoftInputOnFocus={showSoftInputOnFocus}
        numberOfLines={numberOfLines}
        placeholder={placeholder ? placeholder : 'Enter your password'}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : 'gray'
        }
      />
      <TouchableOpacity
        onPress={() =>
          setShowPassword ? setShowPassword(!ShowPassword) : null
        }
      >
        {ShowPassword ? (
          iconPasswordHide ? (
            iconPasswordHide
          ) : (
            <Text>Hide</Text>
          )
        ) : iconPasswordShow ? (
          iconPasswordShow
        ) : (
          <Text>Show</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
