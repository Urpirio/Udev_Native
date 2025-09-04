import { View, Text } from "react-native";
import { LayoutScreen } from "udev_ultime_native";
import { navigate } from "expo-router/build/global-state/routing";
import { RadioButton } from "@/components/test_components2";
import { useState } from "react";

export default function Screen3() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  return (
    <LayoutScreen
      topBar={
        <View style={{ backgroundColor: "orange", padding: 20 }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Screen3
          </Text>
        </View>
      }
      type_Body="ScrollView"
      bodyScreen={
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <RadioButton
            label="Option 1"
            value="Option 1"
            value_selected={selectedValue}
            setValue={setSelectedValue}
          />

          <RadioButton
            label="Option 2"
            value="Option 2"
            value_selected={selectedValue}
            setValue={setSelectedValue}
          />

          <RadioButton
            label="Option 3"
            value="Option 3"
            value_selected={selectedValue}
            setValue={setSelectedValue}
          />
          <RadioButton
            label="Option 4"
            value="Option 4"
            value_selected={selectedValue}
            setValue={setSelectedValue}
          />
        </View>
      }
      Data_BottomBar={[
        {
          label: "Screen1",
          icon_in: <Text style={{ fontSize: 24 }}>🔵</Text>,
          // icon_out: <Text style={{ fontSize: 24 }}>🏠</Text>,
          isInScreen: true,
          onPress: () => navigate("/Screen1"),
        },
        {
          label: "Screen2",
          icon_in: <Text style={{ fontSize: 24 }}>🟢</Text>,
          // icon_out: <Text style={{ fontSize: 24 }}>🏠</Text>,
          isInScreen: true,
          onPress: () => navigate("/Screen2"),
        },
        {
          label: "Screen3",
          icon_in: <Text style={{ fontSize: 24 }}>🟠</Text>,
          // icon_out: <Text style={{ fontSize: 24 }}>🏠</Text>,
          isInScreen: true,
          onPress: () => navigate("/Screen3"),
        },
      ]}
      type_BottomBar="Bar_Floating"
    />
  );
}
