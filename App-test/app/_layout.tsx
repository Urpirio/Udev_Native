import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'


export default function _layout() {
  return (
    <Tabs screenOptions={{tabBarStyle:{display:"none"}}}>
        <Tabs.Screen name="index" options={{
            header:()=>{
              return  <View style={{backgroundColor: "#343a40",height:30}}></View>
            },
             
        }} />
        <Tabs.Screen name="Screen1" options={{
            header:()=>{
              return  <View style={{backgroundColor: "#343a40",height:30}}></View>
            },
            
        }} />
        <Tabs.Screen name="Screen2" options={{
            header:()=>{
              return  <View style={{backgroundColor: "#343a40",height:30}}></View>
            },
            
        }} />
        <Tabs.Screen name="Screen3" options={{
            header:()=>{
              return  <View style={{backgroundColor: "#343a40",height:30}}></View>
            },
           
        }} />
    </Tabs>
  )
}