import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { AlignItemsProperty } from "csstype";
import clnx from '../../../utils/clnx';
import '../index.scss';

export default function AlignItems (props: AlignItemsProps): JSX.Element {
  const list = [
    { label: 1, class: ['pink-box', 'height4'] },
    { label: 2, class: ['green-box', 'height3'] },
    { label: 3, class: ['yellow-box', 'height5'] }];
  return <View className={clnx(['demo-box-container', 'min-height6'])} style={{
    alignItems: props.alignItems,
  }}>
    {list.map(e => <View className={clnx(['demo-box-container-item'], e.class)}
      style={props.alignItems === 'stretch' ? {
        height: 'auto!important'
    }: {}}>
      <Text className={clnx(['demo-box-container-itemText', 'demo-box-container-itemTextR'])}>{e.label}</Text>
    </View>)}
  </View>
}

export interface AlignItemsProps extends StandardProps {
  alignItems: AlignItemsProperty;
}