import { useState, useEffect } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';

interface TabPanelProps {
  style_container?: object;
  Data_Tabs?: {
    label: string;
    description: string | undefined;
    value: string;
    style_description?: StyleProp<TextStyle>;
  }[];
  style_tab_container?: object;
  style_text_tab?: object;
  style_description?: object;
  border_tab_selected?: string;
  border_tab_unselected?: string;
}

export const TabPanel = ({
  style_container,
  Data_Tabs,
  style_text_tab,
  style_description,
  style_tab_container,
  border_tab_selected,
  border_tab_unselected,
}: TabPanelProps) => {
  const [selectedTab, setSelectedTab] = useState<string>();
  const [description, setDescription] = useState<string | undefined>();
  const [style_descriptions, setStyle_description] = useState<object>({});

  useEffect(() => {
    if (!description) {
      setSelectedTab(Data_Tabs?.[0]?.value);
      setDescription(Data_Tabs?.[0]?.description);
      setStyle_description(Data_Tabs?.[0]?.style_description || {});
    } else {
      const tab = Data_Tabs?.filter((t) => t.value === selectedTab)[0];
      setDescription(tab?.description);
      setStyle_description(tab?.style_description || {});
    }
  }, [selectedTab, description]);

  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: '#000000',
          padding: 10,
          width: '100%',
          borderRadius: 10,
          backgroundColor: '#ffffff',
        },
        style_container,
      ]}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[
          {
            borderBottomWidth: 1,
            borderColor: '#0000002d',
            flexDirection: 'row',
          },
          style_tab_container,
        ]}
      >
        {Data_Tabs?.map((tab) => (
          <TouchableOpacity
            key={tab.value}
            onPress={() => setSelectedTab(tab.value)}
            style={[
              {
                alignSelf: 'flex-start',
                padding: 10,
                borderBottomWidth: 2,
                borderColor:
                  selectedTab === tab.value
                    ? border_tab_selected
                      ? border_tab_selected
                      : '#000000'
                    : border_tab_unselected
                      ? border_tab_unselected
                      : '#ffffff',
              },
            ]}
          >
            <Text
              style={[
                {
                  color:
                    selectedTab === tab.value
                      ? border_tab_selected
                        ? border_tab_selected
                        : '#000000'
                      : border_tab_unselected
                        ? border_tab_unselected
                        : 'gray',
                },
                style_text_tab,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ paddingVertical: 10 }}>
        <Text style={[style_descriptions, style_description]}>
          {description}
        </Text>
      </View>
    </View>
  );
};
