import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

interface ButtonBarProps {
  type_button: keyof typeof Type_button;
  onPress?: () => void;
  onLongPress?: () => void;
  style_button?: StyleProp<ViewStyle>;
  style_text?: StyleProp<ViewStyle>;
};

const Type_button = {
  Pressable: (
    onPress?: () => void,
    onLongPress?: () => void,
    style_button?: StyleProp<ViewStyle>,
    style_text?: StyleProp<ViewStyle>
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
        <Text style={[{}, style_text]}>Pressable</Text>
      </Pressable>
    );
  },
  Button: (onPress?: () => void) => {
    return <Button title="Button" onPress={onPress} />;
  },
  TouchableOpacity: (
    onPress?: () => void,
    onLongPress?: () => void,
    style_button?: StyleProp<ViewStyle>,
    style_text?: StyleProp<ViewStyle>
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
        <Text style={[{}, style_text]}>TouchableOpacity</Text>
      </TouchableOpacity>
    );
  },
  TouchableHighlight: (
    onPress?: () => void,
    onLongPress?: () => void,
    style_button?: StyleProp<ViewStyle>,
    style_text?: StyleProp<ViewStyle>
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
        <Text style={[{}, style_text]}>TouchableHighlight</Text>
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
}: ButtonBarProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {Type_button[type_button](onPress, onLongPress, style_button, style_text)}
    </View>
  );
}
