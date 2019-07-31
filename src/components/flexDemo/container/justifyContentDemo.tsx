import { View } from "@tarojs/components";
import JustifyContent from "./justifyContent";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>flex-start: 默认 左对齐</View>
    <JustifyContent justifyContent='flex-start' />
    <View className={clnx(['demo-box-title'])}>flex-end 右对齐</View>
    <JustifyContent justifyContent='flex-end' />
    <View className={clnx(['demo-box-title'])}>center 居中</View>
    <JustifyContent justifyContent='center' />
    <View className={clnx(['demo-box-title'])}>space-between 两端对齐，项目之间的间隔都相等</View>
    <JustifyContent justifyContent='space-between' />
    <View className={clnx(['demo-box-title'])}>space-around 每个项目两侧的间隔相等(所以，项目之间的间隔比项目与边框的间隔大一倍)</View>
    <JustifyContent justifyContent='space-around' />
  </View>
</View>