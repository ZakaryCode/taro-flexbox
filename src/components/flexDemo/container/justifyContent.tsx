import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { JustifyContentProperty } from "csstype";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default function JustifyContent (props: JustifyContentProps): JSX.Element {
  const list = [
    { class: ['pink-box'] },
    { class: ['green-box'] },
    { class: ['yellow-box'] },
  ];
  return <View className={clnx(['demo-box-container'])} style={{
    justifyContent: props.justifyContent,
  }}>
    {list.map((e, i) => <View  className={clnx(['demo-box-container-item'], e.class)}>
      <Text className={clnx(['demo-box-container-itemText', 'demo-box-container-itemTextR'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

export interface JustifyContentProps extends StandardProps {
  justifyContent: JustifyContentProperty;
}
