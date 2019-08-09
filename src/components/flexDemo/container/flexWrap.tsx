import Taro from '@tarojs/taro';
import { ScrollView, View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexWrapProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';

function FlexWrap (props: FlexWrapProps): JSX.Element {
  const list = new Array(9).fill('');
  const isBlock: boolean = process.env.TARO_ENV === 'rn' && props.flexWrap === 'wrap-reverse';
  return <ScrollView scrollX className={clnx(['blue-bg3'])}>
    <View className={clnx(['flex', 'padding_10', 'max-height15', 'flex-row'])} style={isBlock ? {} : {
      flexWrap: props.flexWrap,
    }}>
      {list.map((_e, i) => <View key={`${i}`} className={clnx([
        'flex', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding_10', 'flex-shrink_0'])}>
        <Text className={clnx([
          'white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>{i * 1 + 1}</Text>
      </View>)}
    </View>
  </ScrollView>
}

FlexWrap.options = {
  addGlobalClass: true,
}

export default FlexWrap;

export interface FlexWrapProps extends StandardProps {
  flexWrap: FlexWrapProperty;
}