import type { ReactNode } from 'react';
import type { TextStyle, ViewStyle, StyleProp } from 'react-native';
import { TypeBottomBar, TypeBody } from './Layout_Objects_Components';

export type DataBottomBar = {
  label?: string;
  onPress: () => void;
  icon_in: ReactNode;
  icon_out?: ReactNode;
  isInScreen?: boolean;
  style_text?: StyleProp<TextStyle>;
  style_button?: StyleProp<ViewStyle>;
  onLongPress?: () => void;
};

export interface LayoutScreenProps {
  topBar?: ReactNode;
  bottomBar?: ReactNode;
  type_BottomBar?: keyof typeof TypeBottomBar;
  style_bottomBar?: StyleProp<ViewStyle>;
  bodyScreen: ReactNode;
  type_Body?: keyof typeof TypeBody;
  Data_BottomBar?: DataBottomBar[];
  floating_button?: ReactNode;
  style_container_floating_button?: StyleProp<ViewStyle>;
};
