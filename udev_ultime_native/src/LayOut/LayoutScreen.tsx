import type { LayoutScreenProps } from "./Layout_Types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TypeBody } from "./Layout_Objects_Components";
import { TypeBottomBar } from "./Layout_Objects_Components";

export const LayoutScreen = ({
  topBar,
  bottomBar,
  bodyScreen,
  type_Body,
  type_BottomBar,
  Data_BottomBar,
  style_bottomBar,
  floating_button,
  style_container_floating_button,
}: LayoutScreenProps) => {
  return (
    <SafeAreaProvider>
      {topBar ? topBar : null}
      {type_Body && TypeBody[type_Body](bodyScreen)}
      {bottomBar
        ? bottomBar
        : type_BottomBar &&
          TypeBottomBar[type_BottomBar](
            Data_BottomBar ? Data_BottomBar : [],
            style_bottomBar,
            floating_button,
            style_container_floating_button
          )}
    </SafeAreaProvider>
  );
};