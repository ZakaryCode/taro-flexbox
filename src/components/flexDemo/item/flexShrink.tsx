import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";

function FlexShrink(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>默认: 0 如果空间不足，该项目将缩小 负值对该属性无效</View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 0 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 3 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>3</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 2 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>2</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 3 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>3</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 0 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 0 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 3 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>3</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 2 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>2</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小</View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        {(new Array(8).fill('')).map(() => <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>)}
      </View>
    </View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小</View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 0 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        {(new Array(7).fill('')).map(() => <View className={clnx(['flex', 'height2', 'width4', 'borderW', 'blue-bg2', 'margin_10', 'align-center'])} style={{ flexShrink: 1 }}>
          <Text className={clnx([
            'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>)}
      </View>
    </View>
  </View>
}

FlexShrink.options = {
  addGlobalClass: true,
}

export default FlexShrink;