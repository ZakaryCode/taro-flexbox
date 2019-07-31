import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexFlowProperty } from "csstype";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default function FlexFlow (props: FlexFlowProps): JSX.Element {
  const list = new Array(9).fill('');
  return <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])} style={{
    flexFlow: props.flexFlow,
  }}>
    {list.map((_e, i) => <View className={clnx(['demo-box-container-item', 'demo-box-container-itemB'])}>
      <Text className={clnx(['demo-box-container-itemText', 'demo-box-container-itemTextR'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

export interface FlexFlowProps extends StandardProps {
  flexFlow: FlexFlowProperty;
}
