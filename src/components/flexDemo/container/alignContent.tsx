import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { AlignContentProperty } from "csstype";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default function AlignContent (props: AlignContentProps): JSX.Element {
  const list = [
    { class: ['pink-box', 'width4'] },
    { class: ['green-box', 'width3'] },
    { class: ['yellow-box', 'width5'] },
    { class: ['green-box', 'width3'] },
    { class: ['yellow-box', 'width5'] },
    { class: ['green-box', 'width3'] },
    { class: ['pink-box', 'width4'] }];
  return <View className={clnx(['demo-box-container', 'min-height10'])} style={{
    alignContent: props.alignContent,
    flexWrap: 'wrap',
  }}>
    {list.map((e, i) => <View className={clnx(['demo-box-container-item'], e.class)}>
      <Text className={clnx(['demo-box-container-itemText', 'demo-box-container-itemTextR'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

export interface AlignContentProps extends StandardProps {
  alignContent: AlignContentProperty;
}