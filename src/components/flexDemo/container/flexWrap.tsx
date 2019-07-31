import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexWrapProperty } from "csstype";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default function FlexWrap (props: FlexWrapProps): JSX.Element {
  const list = new Array(9).fill('');
  return <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])} style={{
    flexWrap: props.flexWrap,
  }}>
    {list.map((_e, i) => <View className={clnx(['demo-box-container-item', 'demo-box-container-itemB'])}>
      <Text className={clnx(['demo-box-container-itemText', 'demo-box-container-itemTextR'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

export interface FlexWrapProps extends StandardProps {
  flexWrap: FlexWrapProperty;
}