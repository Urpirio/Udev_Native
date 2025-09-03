import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Button,
  DropDown,
  InputPassword,
  InputText,
  InputTextarea,
  ProgressBar,
  FloatingButton,
  Card_Simple,
  // Card_Simple,
} from "udev_ultime_native";

export default function Index() {
  const [showPassword, setShowPassword] = useState(true);
  const [DropDownValue, setDropdownValue] = useState<
    string | number | undefined
  >();

  return (
    <SafeAreaProvider
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          gap: 10,
          height: "100%",
          width: "100%",
          paddingHorizontal: 20,
          borderWidth: 1,
          paddingBottom: 50,
        }}
      >
        {/* <Text>index</Text> */}
        {/* <Button title="Click Me" /> */}
        {/* <InputPassword
          // placeholder="Enter your password"
          style_input={{ width: "80%" }}
          // placeholderTextColor="gray"
          setShowPassword={setShowPassword}
          ShowPassword={showPassword}
          iconPasswordHide={<Text>Show</Text>}
          iconPasswordShow={<Text>Hide</Text>}
        /> */}
        {/* <InputText
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
        /> */}

        {/* <InputTextarea
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
        /> */}

        {/* <DropDown
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
            zIndex: 1000,
            backgroundColor: "white",
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
        /> */}
        {/* <ProgressBar progress={50} show_percentage={true} /> */}
        {/* <Card_Simple
        /> */}

        <Card_Simple
          imageUri="https://i.pinimg.com/736x/c7/0c/11/c70c1141aca40688b2cfd52b2010edd1.jpg"
          style_button={{ backgroundColor: "gray" }}
          
        />
      </View>
    </SafeAreaProvider>
  );
}
