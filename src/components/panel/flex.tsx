import { View } from '@tarojs/components';
import { StandardProps } from "@tarojs/components/types/common";
import clnx from '../../utils/clnx';

import './flex.scss';


function FlexPanel(props: FlexPanelProps) {
  const classes = props.classes || {};
  return <View className={clnx('flex-panel', classes.root)} style={props.style}>
      <View className={clnx('flex-panel-title', classes.title)}>
        {props.renderTitle}
      </View>
      <View className={clnx('flex-panel-content', classes.content)}>
        {props.children}
      </View>
  </View>;
}

export interface FlexPanelProps extends StandardProps {
  classes?: {
    root?: string | string[];
    title?: string | string[];
    content?: string | string[];
  };
  children?: React.ReactNode;
  renderTitle?: string | JSX.Element;
  renderContent?: string | JSX.Element;
}

FlexPanel.options = {
  styleIsolation: 'apply-shared',
}

export default FlexPanel;
