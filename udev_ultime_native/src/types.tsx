import type { Dispatch, JSX,  SetStateAction } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Button_Props {
  title: string;
  style_button?: StyleProp<ViewStyle>;
  style_text?: StyleProp<TextStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  type_button: 'TouchableOpacity' | 'Pressable' | 'TouchableHighlight';
}

export interface InputText_Props {
  style_input?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  multiline?: boolean;
  iconLeft?: JSX.Element | null;
  iconRight?: JSX.Element | null;
  iconPasswordShow?: JSX.Element | null;
  iconPasswordHide?: JSX.Element | null;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
  ShowPassword?: boolean;
  style_container?: StyleProp<ViewStyle>;
  placeholderTextColor?: string;
}

export interface DropDown_Props {
  style_container?: StyleProp<ViewStyle>;
  style_container_option?: StyleProp<ViewStyle>;
  style_button_option?: StyleProp<TextStyle>;
  style_text_option?: StyleProp<TextStyle>;
  style_text_placeholder?: StyleProp<TextStyle>;
  style_text_selected?: StyleProp<TextStyle>;
  setValue?: Dispatch<SetStateAction<string | number>>;
  Value?: string | number;
  data_option?: {
    label: string;
    value: string | number;
  }[] | null;
  placeholder?: string;
}
