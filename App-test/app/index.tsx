import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Button,
  DropDown,
  InputPassword,
  InputText,
  InputTextarea,
} from "udev_ultime_native";

export default function index() {
  const [showPassword, setShowPassword] = useState(true);
  const [DropDownValue, setDropdownValue] = useState<string | number | undefined>();

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
          title="Press me"
          onPress={() => alert("Button pressed!")}
          type_button="Pressable"
        />
        <InputPassword
          placeholder="Enter your password"
          style_input={{ width: "80%" }}
          placeholderTextColor="gray"
          setShowPassword={setShowPassword}
          ShowPassword={showPassword}
          iconPasswordHide={<Text>Show</Text>}
          iconPasswordShow={<Text>Hide</Text>}
        />
        <InputText
          placeholder="Enter your text"
          style_container={{
            borderWidth: 1,
            width: "100%",
            borderColor: "gray",
            borderRadius: 10,
            padding: 10,
          }}
          style_input={{ width: "80%" }}
          placeholderTextColor="gray"
        />
        <InputTextarea
          placeholder="Enter your textarea"
          style_container={{
            borderWidth: 1,
            width: "100%",
            borderColor: "gray",
            borderRadius: 10,
            padding: 10,
          }}
          style_input={{ width: "80%" }}
          placeholderTextColor="gray"
        />

        <DropDown
          data_option={[
            { label: "Option 1", value: "Option 1" },
            { label: "Option 2", value: "Option 2" },
            { label: "Option 3", value: "Option 3" },
          ]}
          style_container={{
            borderWidth: 1,
            borderRadius: 10,
            width: "100%",
            paddingVertical: 10,
          }}
          placeholder="Select an option"
          style_container_option={{
            borderWidth: 1,
            position: "absolute",
            marginTop: 55,
            width: "100%",
            padding: 5,
            borderRadius: 15,
            gap: 10,
          }}
          style_buttonOpen_option={{
            width: "100%",
            paddingVertical: 5,
            flexDirection: "row",
            justifyContent: "center",
          }}
        
          setValue={setDropdownValue}
          Value={DropDownValue}
          style_text_placeholder={{ color: "black", alignItems: "center" }}
          style_button_option={{
            width: "100%",
            borderRadius: 10,
            padding: 10,
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
