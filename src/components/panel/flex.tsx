import { View } from '@tarojs/components';
import { TStyle, StandardProps } from 'types/common';

export default function FlexPanel(props: FlexPanelProps) {
  const classes = props.classes || {};
  console.log(Object.assign(props.style || {}, classes.root))
    return <View style={Object.assign(props.style || {}, classes.root)}>
        <View style={Object.assign({
          position: 'sticky',
          top: 0,
          backgroundColor: '#DDD',
          boxShadow: '0 2px 4px #AAA',
          padding: '.25rem .5rem',
        }, classes.title)}>
          {props.renderTitle}
        </View>
        <View style={Object.assign({
          padding: '.25rem .5rem',
        }, classes.content)}>
          {props.renderContent || props.children}
        </View>
    </View>;
}

export interface FlexPanelProps extends StandardProps {
  classes?: {
    root?: TStyle;
    title?: TStyle;
    content?: TStyle;
  };
  children?: React.ReactNode;
  renderTitle?: string | JSX.Element;
  renderContent?: string | JSX.Element;
}
