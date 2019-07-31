import { View } from "@tarojs/components";
import AlignContent from "./alignContent";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>stretch: 默认 轴线占满整个交叉轴</View>
    <AlignContent alignContent='stretch' />
    <View className={clnx(['demo-box-title'])}>flex-start 与交叉轴的起点对齐</View>
    <AlignContent alignContent='flex-start' />
    <View className={clnx(['demo-box-title'])}>flex-end 与交叉轴的终点对齐</View>
    <AlignContent alignContent='flex-end' />
    <View className={clnx(['demo-box-title'])}>center 与交叉轴的中点对齐</View>
    <AlignContent alignContent='center' />
    <View className={clnx(['demo-box-title'])}>space-between 与交叉轴两端对齐，轴线之间的间隔平均分布</View>
    <AlignContent alignContent='space-between' />
    <View className={clnx(['demo-box-title'])}>space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍</View>
    <AlignContent alignContent='space-around' />
  </View>
</View>