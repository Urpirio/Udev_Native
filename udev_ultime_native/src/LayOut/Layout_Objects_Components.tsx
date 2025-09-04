import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import type { DataBottomBar } from './Layout_Types';
import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export const TypeBottomBar = {
  Default: (Data: DataBottomBar[], style_bottomBar: StyleProp<ViewStyle>) => {
    return (
      <View
        style={[
          {
            paddingHorizontal: 18,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: '#f8f9fa',
            position: 'relative',
          },
          style_bottomBar,
        ]}
      >
        {Data?.map((items, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                {
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                items?.style_button,
              ]}
              onLongPress={items?.onLongPress}
              onPress={items?.onPress}
            >
              {items?.isInScreen ? items?.icon_in : items?.icon_out}
              <Text
                style={[
                  { fontSize: 10, fontWeight: 'bold' },
                  items?.style_text,
                ]}
              >
                {items?.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  },
  Bar_Floating: (
    Data: DataBottomBar[],
    style_bottomBar: StyleProp<ViewStyle>
  ) => {
    return (
      <View
        style={[
          {
            paddingHorizontal: 18,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#f8f9fa',
            position: 'relative',
          },
        ]}
      >
        <View
          style={[
            {
              borderWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              position: 'absolute',
              bottom: 0,
              transform: [{ translateY: -30 }],
              padding: 10,
              borderRadius: 20,
              backgroundColor: 'white',
              borderColor: '#c3c3c453',
            },
            style_bottomBar,
          ]}
        >
          {Data?.map((items, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  items?.style_button,
                ]}
                onLongPress={items?.onLongPress}
                onPress={items?.onPress}
              >
                {items?.isInScreen ? items?.icon_in : items?.icon_out}
                <Text
                  style={[
                    { fontSize: 10, fontWeight: 'bold' },
                    items?.style_text,
                  ]}
                >
                  {items?.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  },
  BarWithFloatingButton: (
    Data: DataBottomBar[],
    style_bottomBar: StyleProp<ViewStyle>,
    floating_button: ReactNode,
    style_container_floating_button: StyleProp<ViewStyle>
  ) => {
    return (
      <View
        style={[
          {
            paddingHorizontal: 18,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            borderWidth: 1,
            borderColor: '#f8f9fa',
            position: 'relative',
          },
          style_bottomBar,
        ]}
      >
        <View
          style={[
            {
              position: 'absolute',
              transform: [{ translateY: -70 }],
              paddingRight: 10,
              right: 0,
            },
            style_container_floating_button,
          ]}
        >
          {floating_button}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {Data?.map((items, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  items?.style_button,
                ]}
                onLongPress={items?.onLongPress}
                onPress={items?.onPress}
              >
                {items?.isInScreen ? items?.icon_in : items?.icon_out}
                <Text
                  style={[
                    { fontSize: 10, fontWeight: 'bold' },
                    items?.style_text,
                  ]}
                >
                  {items?.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  },
};

export const TypeBody = {
  ScrollView: (bodyScreen: ReactNode) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {bodyScreen}
      </ScrollView>
    );
  },
  View: (bodyScreen: ReactNode) => {
    return <View style={{ flex: 1 }}>{bodyScreen}</View>;
  },
};
