import { TouchableOpacity, View, Text } from "react-native";
import type { Dispatch, SetStateAction} from "react";

interface RadioButtonProps {
  value?: string;
  value_selected: string | undefined;
  label?: string;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  style_container?: object;
  style_label?: object;
  style_radio?: object;
  style_point_radio?: object;
};

export const RadioButton = ({
  value,
  value_selected,
  label,
  setValue,
  style_container,
  style_label,
  style_radio,
  style_point_radio,
}: RadioButtonProps) => {

  return (
    <TouchableOpacity
      onPress={() => {
        setValue && setValue(value);
      }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          padding: 5,
        },
        style_container,
      ]}
    >
      <View
        style={[
          {
            borderWidth: 1,
            borderColor: "#dee2e6",
            padding: 3,
            borderRadius: 10,
            height: 20,
            width: 20,
            justifyContent: "center",
            alignItems: "center",
          },
          style_radio,
        ]}
      >
        {value_selected == value && (
          <View
            style={[
              {
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "#000000",
              },
              style_point_radio,
            ]}
          ></View>
        )}
      </View>
      <Text style={style_label}>{label}</Text>
    </TouchableOpacity>
  );
};
