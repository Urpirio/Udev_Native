// import { LayoutScreen } from "@/components/Test_components";
import { navigate } from "expo-router/build/global-state/routing";
import { View, Text, TouchableOpacity } from "react-native";
import { Card_Simple,LayoutScreen } from "udev_ultime_native";

export default function index() {
  return (
    <LayoutScreen
      type_Body="ScrollView"
      topBar={
        <View style={{ backgroundColor: "black", padding: 20 }}>
          <Text style={{ textAlign: "center",color:"white" ,fontWeight:"bold",fontSize:20}}>Top Bar</Text>
        </View>
      }
      type_BottomBar="Bar_Floating"
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

      // floating_button={
      //   <TouchableOpacity
      //     style={{
      //       borderWidth: 1,
      //       height: 60,
      //       width: 60,
      //       borderRadius: 20,
      //       justifyContent: "center",
      //       alignItems: "center",
      //       backgroundColor:"white"
      //     }}
      //   >
      //     <Text>+</Text>
      //   </TouchableOpacity>
      // }
      bodyScreen={
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap:10,
            height: "100%",
            paddingTop: 10,
            paddingBottom:120,
          }}
        >

        </View>
      }
    />
  );
}
