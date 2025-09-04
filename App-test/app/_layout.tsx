import { Stack } from 'expo-router'
import { View, Text } from 'react-native'


export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            header:()=>{
              return  <View style={{backgroundColor: "#343a40",height:30}}></View>
            }
        }} />
    </Stack>
  )
}