import { View } from "@tarojs/components";
import AlignItems from "./alignItems";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>stretch: 默认 如果项目未设置高度或设为auto，将占满整个容器的高度</View>
    <AlignItems alignItems='stretch' />
    <View className={clnx(['demo-box-title'])}>flex-start 交叉轴的起点对齐</View>
    <AlignItems alignItems='flex-start' />
    <View className={clnx(['demo-box-title'])}>flex-end 交叉轴的终点对齐</View>
    <AlignItems alignItems='flex-end' />
    <View className={clnx(['demo-box-title'])}>center 交叉轴的中点对齐</View>
    <AlignItems alignItems='center' />
    <View className={clnx(['demo-box-title'])}>baseline 项目的第一行文字的基线对齐</View>
    <AlignItems alignItems='baseline' />
  </View>
</View>