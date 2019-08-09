import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";
import '../index.scss';

function Flex(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>
          默认: 0 1 auto (后两个属性可选) 该属性有两个快捷值: auto (1 1 auto) 和 none (0 0 auto) 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。快应用上这两个值都是无效值。
        </Text>
      </View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ /* flex: 'auto' */ }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>auto</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ /* flex: '1 1 auto' */ }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1 1 auto</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ /* flex: 'none' */ }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>none</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ /* flex: '0 0 auto' */ }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0 0 auto</Text>
        </View>
      </View>
    </View>
  </View>
}

Flex.options = {
  addGlobalClass: true,
}

export default Flex;
