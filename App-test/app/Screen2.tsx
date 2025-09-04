import { View, Text } from "react-native";
import { LayoutScreen } from "udev_ultime_native";
import { navigate } from "expo-router/build/global-state/routing";
import { TabPanel } from "@/components/test_components2";

export default function Screen2() {
  return (
    <LayoutScreen
      topBar={
        <View style={{ backgroundColor: "green", padding: 20 }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Screen2
          </Text>
        </View>
      }
      type_Body="ScrollView"
      bodyScreen={
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TabPanel
            // border_tab_selected="blue"
            // border_tab_unselected="gray"
            // style_text_tab={{ color: "blue" }}
            Data_Tabs={[
              {
                label: "Tab 1",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                value: "tab1",
                style_description: { fontStyle: 'italic' },
              },
              {
                label: "Tab 2",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                value: "tab2",
              },
            ]}
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
