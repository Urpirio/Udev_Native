import type { DropDown_Props } from '../types';
import { View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

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
      style={[
        {
          borderWidth: 1,
          borderRadius: 10,
          width: '100%',
          paddingVertical: 10,
        },
        style_container,
      ]}
    >
      <TouchableOpacity
        style={[
          {
            width: '100%',
            paddingVertical: 5,
            flexDirection: 'row',
            justifyContent: 'center',
          },
          style_buttonOpen_option,
        ]}
        onPress={() => setIsOpen(!isOpen)}
        onPressOut={() => setIsOpen(false)}
      >
        <Text
          style={[
            { color: 'black', alignItems: 'center' },
            style_text_placeholder,
          ]}
        >
          {Value ? Value : placeholder ? placeholder : 'Select an option'}
        </Text>
        {icon}
      </TouchableOpacity>
      {isOpen && (
        <View
          style={[
            {
              borderWidth: 1,
              position: 'absolute',
              marginTop: 55,
              width: '100%',
              padding: 5,
              borderRadius: 15,
              gap: 10,
            },
            style_container_option,
          ]}
        >
          {data_option?.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                {
                  width: '100%',
                  borderRadius: 10,
                  padding: 10,
                },
                style_button_option,
              ]}
              onPress={() => {
                setValue ? setValue(item.value) : null;
                setIsOpen(false);
              }}
            >
              <Text
                style={
                  Value === item.value
                    ? [
                        {
                          fontWeight: 'bold',
                          color: 'black',
                        },
                        style_text_selected,
                      ]
                    : [{ fontWeight: '300', color: 'black' }, style_text_option]
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
