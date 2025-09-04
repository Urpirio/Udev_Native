import { LayoutScreen } from "@/components/Test_components";
import { View, Text, TouchableOpacity } from "react-native";
import { Card_Simple } from "udev_ultime_native";

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
          label: "Home",
          onPress: () => console.log("Home Pressed"),
          icon_in: <Text style={{ fontSize: 24 }}>🏠</Text>,
          icon_out: <Text style={{ fontSize: 24 }}>🏠</Text>,
          isInScreen: true,
        },
        {
          label: "Settings",
          onPress: () => console.log("Settings Pressed"),
          icon_in: <Text style={{ fontSize: 24 }}>⚙️</Text>,
          icon_out: <Text style={{ fontSize: 24 }}>⚙️</Text>,
          isInScreen: true,
        },
        {
          label: "Noti",
          onPress: () => console.log("Notifications Pressed"),
          icon_in: <Text style={{ fontSize: 24 }}>🔔</Text>,
          icon_out: <Text style={{ fontSize: 24 }}>🔔</Text>,
          isInScreen: true,
        },
        {
          label: "perfil",
          onPress: () => console.log("perfil Pressed"),
          icon_in: <Text style={{ fontSize: 24 }}>👤</Text>,
          icon_out: <Text style={{ fontSize: 24 }}>👤</Text>,
          isInScreen: true,
        },
        {
          label: "search",
          onPress: () => console.log("search Pressed"),
          icon_in: <Text style={{ fontSize: 24 }}>🔍</Text>,
          icon_out: <Text style={{ fontSize: 24 }}>🔍</Text>,
          isInScreen: true, //USando el Path de Expo router podras mandar un booleano el cula permitira evaluar si es o no la ruta
        },
      ]}

      floating_button={
        <TouchableOpacity
          style={{
            borderWidth: 1,
            height: 60,
            width: 60,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"white"
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      }
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
          <Card_Simple/>
          <Card_Simple/>
          <Card_Simple/>
          <Card_Simple/>
        </View>
      }
    />
  );
}
