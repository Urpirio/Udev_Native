import type { DropDown_Props } from "../types";
import { View,TouchableOpacity,Text } from "react-native";
import { useState } from "react";

export function DropDown({
  style_container,
  style_container_option,
  style_button_option,
  style_text_option,
  style_text_placeholder,
  style_text_selected,
  Value,
  setValue,
  data_option,
  placeholder,
  style_buttonOpen_option,
  icon,
}: DropDown_Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View
      style={
        style_container
          ? style_container
          : {
              borderWidth: 1,
              borderRadius: 10,
              width: '100%',
              paddingVertical: 10,
            }
      }
    >
      <TouchableOpacity
        style={
          style_buttonOpen_option
            ? style_buttonOpen_option
            : {
                width: '100%',
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'center',
              }
        }
        onPress={() => setIsOpen(!isOpen)}
        onPressOut={() => setIsOpen(false)}
      >
        <Text
          style={
            style_text_placeholder
              ? style_text_placeholder
              : { color: 'black', alignItems: 'center' }
          }
        >
          {Value ? Value : placeholder}
        </Text>
        {icon}
      </TouchableOpacity>
      {isOpen && (
        <View
          style={
            style_container_option
              ? style_container_option
              : {
                  borderWidth: 1,
                  position: 'absolute',
                  marginTop: 55,
                  width: '100%',
                  padding: 5,
                  borderRadius: 15,
                  gap: 10,
                }
          }
        >
          {data_option?.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={
                style_button_option
                  ? style_button_option
                  : {
                      width: '100%',
                      borderRadius: 10,
                      padding: 10,
                    }
              }
              onPress={() => {
                setValue ? setValue(item.value) : null;
                setIsOpen(false);
              }}
            >
              <Text
                style={
                  Value === item.value
                    ? style_text_selected
                      ? style_text_selected
                      : {
                          fontWeight: 'bold',
                          color: 'black',
                        }
                    : style_text_option
                      ? style_text_option
                      : { fontWeight: '300', color: 'black' }
                }
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}