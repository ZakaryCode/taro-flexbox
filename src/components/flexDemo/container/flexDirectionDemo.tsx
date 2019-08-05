import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import FlexDirection from './flexDirection';
import clnx from "classnames";

function FlexDirectionDemo(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>row: 默认 主轴为水平方向，起点在左端</View>
      <FlexDirection flexDirection='row' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>row-reverse 主轴为水平方向，起点在右端</View>
      <FlexDirection flexDirection='row-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column 主轴为垂直方向，起点在上沿</View>
      <FlexDirection flexDirection='column' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column-reverse 主轴为垂直方向，起点在下沿</View>
      <FlexDirection flexDirection='column-reverse' />
    </View>
  </View>
}

FlexDirectionDemo.options = {
  addGlobalClass: true,
}

export default FlexDirectionDemo;
