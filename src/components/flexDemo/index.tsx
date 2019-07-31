import { View, Text } from '@tarojs/components';
import { StandardProps } from "@tarojs/components/types/common";
import Panel from '../panel/flex';
import PickContent from './Content';
import clnx from "../../utils/clnx";
import './index.scss';

function RenderPanel({title, list = []}: PanelProps): JSX.Element {
  return <Panel 
    classes={{ root: 'wapper', title: 'wapper-title', content: 'wapper-content' }}
    renderTitle={<Text>{title}</Text>}>
    {list.map(e => {
      return <Panel
        classes={{ root: 'panel', title: 'panel-title', content: 'panel-content' }}
        renderTitle={<View className={clnx(['inner'])}>
          <View className={clnx(['title'])}>{e.title}</View>
          <View className={clnx(['subtitle'])}>{e.subtitle}</View>
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
  styleIsolation: 'shared',
}

export default RenderPanel;