import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  // Animated,
  // Easing,
  ScrollView,
  FlatList,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useState, useRef, useEffect } from "react";
import type { Dispatch, JSX, ReactNode, SetStateAction } from "react";
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
// import { Button } from "udev_ultime_native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
}

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

interface Card_Simple_Props {
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

export const Card_Simple = ({
  title,
  imageUri,
  description,
  style_title,
  style_container,
  style_image,
  style_description,
  style_button,
  Button: ButtonProp,
  style_text_button,
  text_button,
  style_container_button,
}: Card_Simple_Props) => {
  return (
    <View
      style={[
        {
          borderWidth: 1,
          width: 300,
          borderRadius: 10,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        },
        style_container,
      ]}
    >
      <Image
        style={[
          {
            width: "100%",
            height: 200,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
          style_image,
        ]}
        source={{
          uri: imageUri
            ? imageUri
            : "https://i.pinimg.com/736x/10/85/b4/1085b4fe0da87e732381d3e98c73d2df.jpg",
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={[{ fontSize: 18, fontWeight: "bold" }, style_title]}>
          {title
            ? title.split("").length > 25
              ? title.slice(0, 25) + "..."
              : title
            : "Title Simple"}
        </Text>
        <Text style={style_description}>
          {description
            ? description
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque adipisci! Minima ea, harum et veniam iure soluta? Ea quod quas sapiente beatae repellendus sunt facilis odio asperiores sed quisquam?"}
        </Text>
      </View>
      <View style={[{ padding: 10 }, style_container_button]}>
        {ButtonProp ? (
          ButtonProp
        ) : (
          <Button
            title={text_button ? text_button : "Click Me"}
            type_button="Pressable"
            style_button={[
              { width: "100%", height: 40, backgroundColor: "black" },
              style_button,
            ]}
            style_text={[
              { textAlign: "center", color: "white" },
              style_text_button,
            ]}
          />
        )}
      </View>
    </View>
  );
};

interface FloatingButtonProps {
  icon_hide: ReactNode;
  icon_show?: ReactNode;
  Data_Button?: {
    icon: ReactNode;
    onPress: () => void;
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
  SelectFun_onLongPress,
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

const TopBar = {};

const TypeBody = {
  ScrollView: (bodyScreen: ReactNode) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {bodyScreen}
      </ScrollView>
    );
  },
  View: (bodyScreen: ReactNode) => {
    return <View style={{ flex: 1 }}>{bodyScreen}</View>;
  },
};

const TypeBottomBar = {
  Default: (Data: DataBottomBar[], style_bottomBar: StyleProp<ViewStyle>) => {
    return (
      <View
        style={[
          {
            paddingHorizontal: 18,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#f8f9fa",
            position: "relative",
          },
          style_bottomBar,
        ]}
      >
        {Data?.map((items, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                {
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                },
                items?.style_button,
              ]}
              onLongPress={items?.onLongPress}
              onPress={items?.onPress}
            >
              {items?.isInScreen ? items?.icon_in : items?.icon_out}
              <Text
                style={[
                  { fontSize: 10, fontWeight: "bold" },
                  items?.style_text,
                ]}
              >
                {items?.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  },
  Bar_Floating: (
    Data: DataBottomBar[],
    style_bottomBar: StyleProp<ViewStyle>
  ) => {
    return (
      <View
        style={[
          {
            paddingHorizontal: 18,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#f8f9fa",
            position: "relative",
          },
        ]}
      >
        <View
          style={[
            {
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              position: "absolute",
              bottom: 0,
              transform: [{ translateY: -30 }],
              padding: 10,
              borderRadius: 20,
              backgroundColor: "white",
              borderColor: "#c3c3c453",
            },
            style_bottomBar,
          ]}
        >
          {Data?.map((items, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  items?.style_button,
                ]}
                onLongPress={items?.onLongPress}
                onPress={items?.onPress}
              >
                {items?.isInScreen ? items?.icon_in : items?.icon_out}
                <Text
                  style={[
                    { fontSize: 10, fontWeight: "bold" },
                    items?.style_text,
                  ]}
                >
                  {items?.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  },
  BarWithFloatingButton: (
    Data: DataBottomBar[],
    style_bottomBar: StyleProp<ViewStyle>,
    floating_button: ReactNode,
    style_container_floating_button: StyleProp<ViewStyle>
  ) => {
    return (
      <View
        style={[
          {
            paddingHorizontal: 18,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "flex-end",
            borderWidth: 1,
            borderColor: "#f8f9fa",
            position: "relative",
          },
          style_bottomBar,
        ]}
      >
        <View
          style={[
            {
              position: "absolute",
              transform: [{ translateY: -70 }],
              paddingRight: 10,
              right: 0,
            },
            style_container_floating_button,
          ]}
        >
          {floating_button}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {Data?.map((items, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  items?.style_button,
                ]}
                onLongPress={items?.onLongPress}
                onPress={items?.onPress}
              >
                {items?.isInScreen ? items?.icon_in : items?.icon_out}
                <Text
                  style={[
                    { fontSize: 10, fontWeight: "bold" },
                    items?.style_text,
                  ]}
                >
                  {items?.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  },
};

type DataBottomBar = {
  label?: string;
  onPress: () => void;
  icon_in: ReactNode;
  icon_out?: ReactNode;
  isInScreen?: boolean;
  style_text?: StyleProp<TextStyle>;
  style_button?: StyleProp<ViewStyle>;
  onLongPress?: () => void;
};

interface LayoutScreenProps {
  topBar?: ReactNode;
  bottomBar?: ReactNode;
  type_BottomBar?: keyof typeof TypeBottomBar;
  style_bottomBar?: StyleProp<ViewStyle>;
  bodyScreen: ReactNode;
  type_Body?: keyof typeof TypeBody;
  Data_BottomBar?: DataBottomBar[];
  floating_button?: ReactNode;
  style_container_floating_button?: StyleProp<ViewStyle>;
}

export const LayoutScreen = ({
  topBar,
  bottomBar,
  bodyScreen,
  type_Body,
  type_BottomBar,
  Data_BottomBar,
  style_bottomBar,
  floating_button,
  style_container_floating_button,
}: LayoutScreenProps) => {
  return (
    <SafeAreaProvider>
      {topBar ? topBar : null}
      {type_Body && TypeBody[type_Body](bodyScreen)}
      {bottomBar
        ? bottomBar
        : type_BottomBar &&
          TypeBottomBar[type_BottomBar](
            Data_BottomBar ? Data_BottomBar : [],
            style_bottomBar,
            floating_button,
            style_container_floating_button
          )}
    </SafeAreaProvider>
  );
};
