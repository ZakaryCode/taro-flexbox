import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import AlignItems from './alignItems';
import clnx from "classnames";
function AlignItemsDemo (): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>stretch: 默认 如果项目未设置高度或设为auto，将占满整个容器的高度</View>
      <AlignItems alignItems='stretch' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>flex-start 交叉轴的起点对齐</View>
      <AlignItems alignItems='flex-start' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>flex-end 交叉轴的终点对齐</View>
      <AlignItems alignItems='flex-end' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>center 交叉轴的中点对齐</View>
      <AlignItems alignItems='center' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>baseline 项目的第一行文字的基线对齐</View>
      <AlignItems alignItems='baseline' />
    </View>
  </View>
}

AlignItemsDemo.options = {
  addGlobalClass: true,
}

export default AlignItemsDemo;
