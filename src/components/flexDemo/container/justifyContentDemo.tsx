import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import JustifyContent from "./justifyContent";
import clnx from "classnames";

function JustifyContentDemo(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>flex-start: 默认 左对齐</View>
      <JustifyContent justifyContent='flex-start' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>flex-end 右对齐</View>
      <JustifyContent justifyContent='flex-end' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>center 居中</View>
      <JustifyContent justifyContent='center' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>space-between 两端对齐，项目之间的间隔都相等</View>
      <JustifyContent justifyContent='space-between' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>space-around 每个项目两侧的间隔相等(所以，项目之间的间隔比项目与边框的间隔大一倍)</View>
      <JustifyContent justifyContent='space-around' />
    </View>
  </View>
}

JustifyContentDemo.options = {
  addGlobalClass: true,
}

export default JustifyContentDemo;
