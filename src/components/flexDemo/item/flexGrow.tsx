import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";

function FlexGrow(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>默认: 0 如果存在剩余空间，不放大</View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 0 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 0 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 0 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间(如果有的话)</View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍</View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 2 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>2</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexGrow: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
      </View>
    </View>
  </View>
}

FlexGrow.options = {
  addGlobalClass: true,
}

export default FlexGrow;