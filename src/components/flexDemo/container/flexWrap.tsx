import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexWrapProperty } from "csstype";
import clnx from "classnames";
function FlexWrap (props: FlexWrapProps): JSX.Element {
  const list = new Array(9).fill('');
  const isBlock: boolean = process.env.TARO_ENV === 'rn' && props.flexWrap === 'wrap-reverse';
  return <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])} style={isBlock ? {} : {
    flexWrap: props.flexWrap,
  }}>
    {list.map((_e, i) => <View className={clnx([
      'flex', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding_10', 'flex-shrink_0'])}>
      <Text className={clnx([
        'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1', 'borderW', 'radius50'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

FlexWrap.options = {
  addGlobalClass: true,
}

export default FlexWrap;

export interface FlexWrapProps extends StandardProps {
  flexWrap: FlexWrapProperty;
}