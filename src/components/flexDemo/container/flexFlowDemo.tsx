import { View } from "@tarojs/components";
import FlexFlow from "./flexFlow";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>row nowrap: 默认</View>
    <FlexFlow flexFlow='row nowrap' />
    <View className={clnx(['demo-box-title'])}>row wrap</View>
    <FlexFlow flexFlow='row wrap' />
    <View className={clnx(['demo-box-title'])}>row wrap-reverse</View>
    <FlexFlow flexFlow='row wrap-reverse' />
    <View className={clnx(['demo-box-title'])}>row-reverse nowrap</View>
    <FlexFlow flexFlow='row-reverse nowrap' />
    <View className={clnx(['demo-box-title'])}>row-reverse wrap</View>
    <FlexFlow flexFlow='row-reverse wrap' />
    <View className={clnx(['demo-box-title'])}>row-reverse wrap-reverse</View>
    <FlexFlow flexFlow='row-reverse wrap-reverse' />
    <View className={clnx(['demo-box-title'])}>column nowrap</View>
    <FlexFlow flexFlow='column nowrap' />
    <View className={clnx(['demo-box-title'])}>column wrap</View>
    <FlexFlow flexFlow='column wrap' />
    <View className={clnx(['demo-box-title'])}>column wrap-reverse</View>
    <FlexFlow flexFlow='column wrap-reverse' />
    <View className={clnx(['demo-box-title'])}>column-reverse nowrap</View>
    <FlexFlow flexFlow='column-reverse nowrap' />
    <View className={clnx(['demo-box-title'])}>column-reverse wrap</View>
    <FlexFlow flexFlow='column-reverse wrap' />
    <View className={clnx(['demo-box-title'])}>column-reverse wrap-reverse</View>
    <FlexFlow flexFlow='column-reverse wrap-reverse' />
  </View>
</View>