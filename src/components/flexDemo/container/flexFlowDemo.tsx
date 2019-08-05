import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import FlexFlow from "./flexFlow";
import clnx from "classnames";

function FlexFlowDemo(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box', 'font-size_75'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>row nowrap: 默认</View>
      <FlexFlow flexFlow='row nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>row wrap</View>
      <FlexFlow flexFlow='row wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>row wrap-reverse</View>
      <FlexFlow flexFlow='row wrap-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>row-reverse nowrap</View>
      <FlexFlow flexFlow='row-reverse nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>row-reverse wrap</View>
      <FlexFlow flexFlow='row-reverse wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>row-reverse wrap-reverse</View>
      <FlexFlow flexFlow='row-reverse wrap-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column nowrap</View>
      <FlexFlow flexFlow='column nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column wrap</View>
      <FlexFlow flexFlow='column wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column wrap-reverse</View>
      <FlexFlow flexFlow='column wrap-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column-reverse nowrap</View>
      <FlexFlow flexFlow='column-reverse nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column-reverse wrap</View>
      <FlexFlow flexFlow='column-reverse wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>column-reverse wrap-reverse</View>
      <FlexFlow flexFlow='column-reverse wrap-reverse' />
    </View>
  </View>
}

FlexFlowDemo.options = {
  addGlobalClass: true,
}

export default FlexFlowDemo;
