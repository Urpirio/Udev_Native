import { View, Text } from "react-native";
import { LayoutScreen } from "udev_ultime_native";
import { navigate } from "expo-router/build/global-state/routing";

export default function Screen1() {
  return (
    <LayoutScreen
      topBar={
        <View style={{ backgroundColor: "blue", padding: 20 }}>
          <Text style={{ textAlign: "center",color:"white" ,fontWeight:"bold",fontSize:20}}>Screen1</Text>
        </View>
      }
      type_Body="ScrollView"
      bodyScreen={
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center"}}
        >
          
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
