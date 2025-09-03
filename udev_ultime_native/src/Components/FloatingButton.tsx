import {
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useState } from "react";

import type { FloatingButtonProps } from "../types";

export const FloatingButton = ({
  icon_hide,
  icon_show,
  Data_Button,
  timing_animation_buttons,
  style_floating_button,
  style_container_button,
  style_main_container,
  onLongPress,
  onPress,
  SelectFun_onPress,
  SelectFun_onLongPress
}: FloatingButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const opacity = useSharedValue<number>(1);
  const scale = useSharedValue<number>(0);

  const ShowOptions = () => {
    setIsOpen(true);
    opacity.value = withTiming(1, {
      duration: timing_animation_buttons ? timing_animation_buttons : 500,
      easing: Easing.inOut(Easing.quad),
    });
    scale.value = withTiming(1, {
      duration: timing_animation_buttons ? timing_animation_buttons : 300,
      easing: Easing.inOut(Easing.quad),
    });
  };

  const HideOptions = () => {
    opacity.value = withTiming(0, {
      duration: timing_animation_buttons ? timing_animation_buttons : 300,
      easing: Easing.quad,
    });
    scale.value = withTiming(0, {
      duration: timing_animation_buttons ? timing_animation_buttons : 300,
      easing: Easing.inOut(Easing.quad),
    });
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const Select = {
    onPress: onPress,
    Data_Button: isOpen ? HideOptions : ShowOptions,
    onLongPress: onLongPress,
  };

  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
        style_main_container,
      ]}
    >
      {isOpen && (
        <View
          style={[
            { position: "absolute", bottom: 60, gap: 10 },
            style_container_button,
          ]}
        >
          {Data_Button?.map((item, index) => {
            return (
              <Animated.View
                key={index}
                style={{
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <TouchableOpacity
                  onLongPress={item?.onLongPress}
                  onPress={item?.onPress}
                  style={[
                    {
                      height: 50,
                      width: 50,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: "black",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#f8f9fa",
                    },
                    item?.style_button,
                  ]}
                >
                  {item?.icon ? item.icon : null}
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      )}
      <TouchableOpacity
        onLongPress={Select[SelectFun_onLongPress]}
        onPress={Select[SelectFun_onPress]}
        style={[
          {
            height: 50,
            width: 50,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "black",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          },
          style_floating_button,
        ]}
      >
        {isOpen ? icon_show : icon_hide}
      </TouchableOpacity>
    </View>
  );
};
