import { StyleProp } from "react-native";

export interface Btn_Types {
  title: string;
  style_btn: StyleProp<any>;
  style_text: StyleProp<any>;
  onPress: () => void;
}
