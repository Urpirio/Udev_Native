import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import type { Dispatch, JSX, SetStateAction } from "react";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";

interface ProgressBar_Props {
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
    status: string;
    progress?: number;
  }[];
  text_style_percentage?: StyleProp<TextStyle>;
  text_percentage?: JSX.Element | null;
  style_progress_bar?: StyleProp<ViewStyle>;
};

export const ProgressBar = ({
  progress,
  bg_color_progress,
  bg_container_bar,
  show_percentage,
  height_bar,
  iconRight,
  iconLeft,
  status_bar,
  style_container,
  text_style_percentage,
  text_percentage,
  style_progress_bar,
}: ProgressBar_Props) => {
  return (
    <View
      style={[
        {
          height: height_bar ? height_bar : 30,
          width: "100%",
          backgroundColor: bg_container_bar ? bg_container_bar : "#f8f9fa",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#adadadff",
          padding: 2,
          overflow: "hidden",
        },
        style_container,
      ]}
    >
      <View
        style={[
          {
            height: "100%",
            width: `${progress > 100 ? 100 : progress}%`,
            backgroundColor: bg_color_progress
              ? bg_color_progress
              : status_bar
              ? status_bar.filter((item) => item?.progress == progress)[0]
                  ?.color
              : "black",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          },
          style_progress_bar,
        ]}
      >
        {show_percentage && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              position: "absolute",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {iconLeft && iconLeft}
            {text_percentage ? (
              text_percentage
            ) : (
              <Text
                style={[{ color: "white" }, text_style_percentage]}
              >{`${progress}%`}</Text>
            )}
            {iconRight && iconRight}
          </View>
        )}
      </View>
    </View>
  );
};
