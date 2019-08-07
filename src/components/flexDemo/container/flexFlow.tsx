import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexFlowProperty } from "csstype";
import clnx from "classnames";

function FlexFlow (props: FlexFlowProps): JSX.Element {
  const list = new Array(9).fill('');
  return <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'scroll'])} style={{
    flexFlow: props.flexFlow,
  }}>
    {list.map((_e, i) => <View key={`${i}`} className={clnx([
      'flex', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding_10', 'flex-shrink_0'])}>
      <Text className={clnx([
        'white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1', 'borderW', 'radius1'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

FlexFlow.options = {
  addGlobalClass: true,
}

export default FlexFlow;

export interface FlexFlowProps extends StandardProps {
  flexFlow: FlexFlowProperty;
}
