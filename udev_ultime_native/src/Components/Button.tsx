import type { Button_Props } from '../types';
import {
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Button,
  Text,
} from 'react-native';

export function Button_Template({
  style_button,
  style_text,
  title,
  onPress,
  onLongPress,
  iconLeft,
  iconRight,
  type_button,
  onPressIn,
  onPressOut,
  onShowUnderlay,
  onAccessibilityAction,
  onAccessibilityEscape,
  onAccessibilityTap,
  onBlur,
  onFocus,
  onHideUnderlay,
  onLayout,
  onMagicTap,
}: Button_Props) {
  switch (type_button) {
    case 'Pressable':
      return (
        <Pressable
          style={[
            {
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              padding: 10,
            },
            style_button,
          ]}
          onPress={onPress}
          onLongPress={onLongPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onAccessibilityAction={onAccessibilityAction}
          onAccessibilityEscape={onAccessibilityEscape}
          onAccessibilityTap={onAccessibilityTap}
          onBlur={onBlur}
          onFocus={onFocus}
          onLayout={onLayout}
          onMagicTap={onMagicTap}
        >
          {iconLeft && iconLeft}
          <Text style={[{ color: 'white' }, style_text]}>{title}</Text>
          {iconRight && iconRight}
        </Pressable>
      );
    case 'TouchableHighlight':
      return (
        <TouchableHighlight
          style={[
            {
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              padding: 10,
            },
            style_button,
          ]}
          onPress={onPress}
          onLongPress={onLongPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onShowUnderlay={onShowUnderlay}
          onAccessibilityAction={onAccessibilityAction}
          onAccessibilityEscape={onAccessibilityEscape}
          onAccessibilityTap={onAccessibilityTap}
          onBlur={onBlur}
          onFocus={onFocus}
          onHideUnderlay={onHideUnderlay}
          onLayout={onLayout}
          onMagicTap={onMagicTap}
        >
          {iconLeft && iconLeft}
          <Text style={[{ color: 'white' }, style_text]}>{title}</Text>
          {iconRight && iconRight}
        </TouchableHighlight>
      );
    case 'TouchableOpacity':
      return (
        <TouchableOpacity
          style={[
            {
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              padding: 10,
            },
            style_button,
          ]}
          onPress={onPress}
          onLongPress={onLongPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onAccessibilityAction={onAccessibilityAction}
          onAccessibilityEscape={onAccessibilityEscape}
          onAccessibilityTap={onAccessibilityTap}
          onBlur={onBlur}
          onFocus={onFocus}
          onLayout={onLayout}
          onMagicTap={onMagicTap}
        >
          {iconLeft && iconLeft}
          <Text style={[{ color: 'white' }, style_text]}>{title}</Text>
          {iconRight && iconRight}
        </TouchableOpacity>
      );
    default:
      return <Button title={title} onPress={onPress} />;
  }
}
