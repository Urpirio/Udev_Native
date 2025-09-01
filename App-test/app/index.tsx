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
  const [isOpen,setIsOpen] = useState(false);

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
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 },
            { label: "Option 3", value: 3 },
          ]}
          style_container={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            width: "100%",
            alignItems:"center"
          }}
          placeholder="Select an option"
          style_container_option={{
            borderWidth: 1,
            position: "absolute",
            marginTop: 40,
            width: "100%",
            padding: 10,
            borderRadius:10,
            gap:10,
          }}
          style_text_placeholder={{ color: "gray",padding:10 }}
          style_button_option={{
            width: "100%",
            borderWidth:1,
            borderRadius:10,
            padding:10,
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
