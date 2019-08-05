import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { JustifyContentProperty } from "csstype";
import clnx from "classnames";

function JustifyContent (props: JustifyContentProps): JSX.Element {
  const list = [
    { class: ['pink-bg'] },
    { class: ['green-bg'] },
    { class: ['yellow-bg'] },
  ];
  return <View className={clnx(['flex', 'blue-bg3', 'padding_10'])} style={{
    justifyContent: props.justifyContent,
  }}>
    {list.map((e, i) => <View  className={clnx([
      'flex', 'height2', 'width2', 'borderW', 'margin_10', 'align-center'], e.class)}>
      <Text className={clnx([
        'withe', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1', 'borderW', 'radius50'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

JustifyContent.options = {
  addGlobalClass: true,
}

export default JustifyContent;

export interface JustifyContentProps extends StandardProps {
  justifyContent: JustifyContentProperty;
}
