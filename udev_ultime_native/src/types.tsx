import type { Dispatch, JSX, SetStateAction } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Button_Props {
  title: string;
  style_button?: StyleProp<ViewStyle>;
  style_text?: StyleProp<TextStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onShowUnderlay?: () => void;
  onAccessibilityAction?: () => void;
  onAccessibilityEscape?: () => void;
  onAccessibilityTap?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onHideUnderlay?: () => void;
  onLayout?: () => void;
  onMagicTap?: () => void;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  type_button?: 'TouchableOpacity' | 'Pressable' | 'TouchableHighlight';
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
  label?: JSX.Element;
  onFocus?: () => void;
  onBlur?: () => void;
  onLayout?: () => void;
  onSubmitEditing?: () => void;
  onKeyPress?: () => void;
  onChange?: () => void;
  onContentSizeChange?: () => void;
  onEndEditing?: () => void;
  onSelectionChange?: () => void;
  onTextInput?: () => void;
  onAccessibilityAction?: () => void;
  onAccessibilityEscape?: () => void;
  onAccessibilityTap?: () => void;
  onMagicTap?: () => void;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  readOnly?: boolean;
  clearTextOnFocus?: boolean;
  selectTextOnFocus?: boolean;
  showSoftInputOnFocus?: boolean;
  numberOfLines?: number;
}

export interface DropDown_Props {
  style_container?: StyleProp<ViewStyle>;
  style_container_option?: StyleProp<ViewStyle>;
  style_button_option?: StyleProp<ViewStyle>;
  style_text_option?: StyleProp<TextStyle>;
  style_text_placeholder?: StyleProp<TextStyle>;
  style_text_selected?: StyleProp<TextStyle>;
  setValue?: Dispatch<SetStateAction<string | number | undefined>>;
  Value?: string | number | undefined;
  data_option?:
    | {
        label: string;
        value: string | number | undefined;
      }[]
    | null;
  placeholder?: string;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  style_buttonOpen_option?: StyleProp<ViewStyle>;
  icon?: JSX.Element | null;
}

export interface ProgressBar_Props {
  progress: number;
  height_bar?: number;
  bg_color_progress?: string;
  bg_container_bar?: string;
  style_container?: StyleProp<ViewStyle>;
  show_percentage?: boolean;
  iconRight?: JSX.Element | null;
  iconLeft?: JSX.Element | null;
  status_bar?: {
    color: string;
    status?: string;
    progress: number;
  }[];
  text_style_percentage?: StyleProp<TextStyle>;
  text_percentage?: JSX.Element | null;
  style_progress_bar?: StyleProp<ViewStyle>;
}

export interface Card_Simple_Props {
  title?: string;
  imageUri?: string;
  description?: string;
  style_title?: StyleProp<TextStyle>;
  style_container?: StyleProp<ViewStyle>;
  style_image?: StyleProp<ImageStyle>;
  style_description?: StyleProp<TextStyle>;
  style_button?: StyleProp<ViewStyle>;
  Button?: JSX.Element | null;
  style_text_button?: StyleProp<TextStyle>;
  style_container_button?: StyleProp<ViewStyle>;
  text_button?: string;
}

export interface FloatingButtonProps {
  icon_hide: JSX.Element;
  icon_show?: JSX.Element;
  Data_Button?: {
    icon?: JSX.Element;
    onPress?: () => void;
    style_button?: StyleProp<ViewStyle>;
    onLongPress?: () => void;
  }[];
  timing_animation_buttons?: number;
  style_container_button?: StyleProp<ViewStyle>;
  style_floating_button?: StyleProp<ViewStyle>;
  style_main_container?: StyleProp<ViewStyle>;
  onLongPress?: () => void;
  onPress?: () => void;
  SelectFun_onPress: "onPress" | "Data_Button";
  SelectFun_onLongPress: "onLongPress" | "Data_Button";
}
