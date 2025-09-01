import { TouchableOpacity, Text } from "react-native";
import { Btn_Types } from "./Type";

export const Button = ({
  title,
  style_btn,
  style_text,
  onPress,
}: Btn_Types) => {
  return (
    <TouchableOpacity style={style_btn} onPress={onPress}>
      <Text style={style_text}>{title}</Text>
    </TouchableOpacity>
  );
};
