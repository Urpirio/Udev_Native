import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  type StyleProp,
  type ViewStyle,
  // type ButtonProps,
} from 'react-native';

interface ButtonBarProps {
  type_button: keyof typeof Type_button;
  onPress?: () => void;
  onLongPress?: () => void;
  style_button?: StyleProp<ViewStyle>;
  style_text?: StyleProp<ViewStyle>;
  text?: string | any;
};

const Type_button = {
  Pressable: (
    onPress?: () => void,
    onLongPress?: () => void,
    style_button?: StyleProp<ViewStyle>,
    style_text?: StyleProp<ViewStyle>,
    text?: string,
  ) => {
    return (
      <Pressable
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style_button,
        ]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={[{}, style_text]}>{text}</Text>
      </Pressable>
    );
  },
  Button: (onPress?: () => void, text?: any) => {
    return <Button title={text} onPress={onPress} />;
  },
  TouchableOpacity: (
    onPress?: () => void,
    onLongPress?: () => void,
    style_button?: StyleProp<ViewStyle>,
    style_text?: StyleProp<ViewStyle>,
    text?: string
  ) => {
    return (
      <TouchableOpacity
        style={[
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
          style_button,
        ]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={[{}, style_text]}>{text}</Text>
      </TouchableOpacity>
    );
  },
  TouchableHighlight: (
    onPress?: () => void,
    onLongPress?: () => void,
    style_button?: StyleProp<ViewStyle>,
    style_text?: StyleProp<ViewStyle>,
    text?: string
  ) => {
    return (
      <TouchableHighlight
        style={[
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
          style_button,
        ]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={[{}, style_text]}>{text}</Text>
      </TouchableHighlight>
    );
  },
};

export function ButtonBar({
  type_button,
  onPress,
  onLongPress,
  style_button,
  style_text,
  text,
}: ButtonBarProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {Type_button[type_button](onPress, onLongPress, style_button, style_text, text)}
    </View>
  );
}
