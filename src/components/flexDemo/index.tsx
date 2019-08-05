import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { StandardProps } from "@tarojs/components/types/common";
import Panel from '../panel';
import PickContent from './Content';
import clnx from "classnames";

function RenderPanel({title, list = []}: PanelProps): JSX.Element {
  return <Panel 
    classes={{ title: clnx([
      'z-index1', 'top0', 'height2', 'line-height2', 'font-size1_25', 'bolder', 'gray-bgCB', 'padding1'
    ]), content: clnx('padding2') }}
    renderTitle={<Text>{title}</Text>}>
    {list.map(e => {
      return <Panel
        classes={{ title: clnx([
          'top98', 'gray-bgD', 'padding1']), content: clnx('padding2') }}
        renderTitle={<View className={clnx(['inner'])}>
          <View className={clnx(['font-size1', 'bolder'])}>{e.title}</View>
          <View className={clnx(['font-size_75', 'gray4'])}>{e.subtitle}</View>
        </View>}
      >
        <PickContent name={e.contentName}/>
      </Panel>
    })}
  </Panel>
}

export interface PanelProps extends StandardProps {
    title: string;
    list: any[];
}

RenderPanel.options = {
  addGlobalClass: true,
  // styleIsolation: 'shared',
}

export default RenderPanel;