import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import FlexWrap from "./flexWrap";
import clnx from "classnames";

function FlexWrapDemo(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>nowrap: 默认 不换行</View>
      <FlexWrap flexWrap='nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>wrap 换行，第一行在上方</View>
      <FlexWrap flexWrap='wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>wrap-reverse 换行，第一行在下方 （RN 不支持）</View>
      {process.env.TARO_ENV === 'rn' ? <View>React Native 不支持该属性</View> : <FlexWrap flexWrap='wrap-reverse' />}
    </View>
  </View>
}

FlexWrapDemo.options = {
  addGlobalClass: true,
}

export default FlexWrapDemo;
