import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import FlexDirection from './flexDirection';
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>row: 默认 主轴为水平方向，起点在左端</View>
    <FlexDirection flexDirection='row' />
    <View className={clnx(['demo-box-title'])}>row-reverse 主轴为水平方向，起点在右端</View>
    <FlexDirection flexDirection='row-reverse' />
    <View className={clnx(['demo-box-title'])}>column 主轴为垂直方向，起点在上沿</View>
    <FlexDirection flexDirection='column' />
    <View className={clnx(['demo-box-title'])}>column-reverse 主轴为垂直方向，起点在下沿</View>
    <FlexDirection flexDirection='column-reverse' />
  </View>
</View>