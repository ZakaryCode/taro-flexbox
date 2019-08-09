import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";
import '../index.scss';

function FlexBasis(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>
          默认: auto 项目的本来大小 它可以设为跟width或height属性一样的值(比如350px)，则项目将占据固定空间。
        </Text>
      </View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexBasis: 'auto' }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>auto</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexBasis: '25%' }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>25%</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexBasis: '50%' }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>50%</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexBasis: '75%' }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>75%</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexBasis: 'auto' }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>auto</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexBasis: '25%' }}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>25%</Text>
        </View>
      </View>
    </View>
  </View>
}

FlexBasis.options = {
  addGlobalClass: true,
}

export default FlexBasis;
