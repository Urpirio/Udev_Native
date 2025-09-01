import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, InputPassword } from "udev_ultime_native";

export default function index() {
  const [showPassword, setShowPassword] = React.useState(true);

  return (
    <SafeAreaProvider
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <Text>index</Text>
        <Button
          style_button={{
            borderWidth: 1,
            backgroundColor: "black",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
          style_text={{ color: "white" }}
          title="Press me"
          onPress={() => alert("Button pressed!")}
          type_button="Pressable"
        />
        <InputPassword
          placeholder="Enter your password"
          style_container={{
            borderWidth: 1,
            width: "100%",
            borderColor: "gray",
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          style_input={{ width: "80%" }}
          placeholderTextColor="gray"
          setShowPassword={setShowPassword}
          ShowPassword={showPassword}
          iconPasswordHide={<Text>Show</Text>}
          iconPasswordShow={<Text>Hide</Text>}
        />
      </View>
    </SafeAreaProvider>
  );
}
