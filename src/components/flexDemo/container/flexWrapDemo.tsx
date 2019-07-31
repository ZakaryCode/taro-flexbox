import { View } from "@tarojs/components";
import FlexWrap from "./flexWrap";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>nowrap: 默认 不换行</View>
    <FlexWrap flexWrap='nowrap' />
    <View className={clnx(['demo-box-title'])}>wrap 换行，第一行在上方</View>
    <FlexWrap flexWrap='wrap' />
    <View className={clnx(['demo-box-title'])}>wrap-reverse 换行，第一行在下方</View>
    <FlexWrap flexWrap='wrap-reverse' />
  </View>
</View>