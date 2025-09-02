import type { InputText_Props } from '../types';
import { View, TextInput } from 'react-native';

export function InputTextarea({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  style_container,
  style_input,
  iconLeft,
  iconRight,
  onFocus,
  onBlur,
  onLayout,
  onSubmitEditing,
  onKeyPress,
  onChange,
  onContentSizeChange,
  onEndEditing,
  onSelectionChange,
  onAccessibilityAction,
  onAccessibilityEscape,
  onAccessibilityTap,
  onMagicTap,
  onPress,
  onPressIn,
  onPressOut,
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
        onBlur={onBlur}
        onFocus={onFocus}
        onLayout={onLayout}
        onAccessibilityAction={onAccessibilityAction}
        onAccessibilityEscape={onAccessibilityEscape}
        onAccessibilityTap={onAccessibilityTap}
        onChange={onChange}
        onContentSizeChange={onContentSizeChange}
        onEndEditing={onEndEditing}
        onKeyPress={onKeyPress}
        onMagicTap={onMagicTap}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onSelectionChange={onSelectionChange}
        onSubmitEditing={onSubmitEditing}
        readOnly={readOnly}
        clearTextOnFocus={clearTextOnFocus}
        selectTextOnFocus={selectTextOnFocus}
        showSoftInputOnFocus={showSoftInputOnFocus}
        numberOfLines={numberOfLines}
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
