import { View, Text, Image, Pressable } from 'react-native';
// import { Button } from 'udev_ultime_native';
import type { Card_Simple_Props } from '../types';

export const Card_Simple = ({
  title,
  imageUri,
  description,
  style_title,
  style_container,
  style_image,
  style_description,
  style_button,
  Button: ButtonProp,
  style_text_button,
  text_button,
  style_container_button,
}: Card_Simple_Props) => {
  return (
    <View
      style={[
        {
          borderWidth: 1,
          width: 300,
          borderRadius: 10,
        },
        style_container,
      ]}
    >
      <Image
        style={[
          {
            width: '100%',
            height: 200,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
          style_image,
        ]}
        source={{
          uri: imageUri
            ? imageUri
            : 'https://i.pinimg.com/736x/10/85/b4/1085b4fe0da87e732381d3e98c73d2df.jpg',
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={[{ fontSize: 18, fontWeight: 'bold' }, style_title]}>
          {title
            ? title?.split('')?.length > 25
              ? title?.slice(0, 25) + '...'
              : title
            : 'Title Simple'}
        </Text>
        <Text style={style_description}>
          {description
            ? description
            : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque adipisci! Minima ea, harum et veniam iure soluta? Ea quod quas sapiente beatae repellendus sunt facilis odio asperiores sed quisquam?'}
        </Text>
      </View>
      <View style={[{ padding: 10 }, style_container_button]}>
        {ButtonProp ? (
          ButtonProp
        ) : (
          <Pressable
            onPress={() => console.log('Button pressed')}
            style={[
              { 
                width: '100%', 
                height: 40, 
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              },
              style_button,
            ]}
          >
            <Text
              style={[
                { textAlign: 'center', color: 'white' },
                style_text_button,
              ]}
            >
              {text_button ? text_button : 'Click Me'}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};
