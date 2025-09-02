import { View, TextInput, TouchableOpacity } from 'react-native';
import type { InputText_Props } from '../types';

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
