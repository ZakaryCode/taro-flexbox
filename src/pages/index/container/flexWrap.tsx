import { View, Text } from "@tarojs/components";
import { StandardProps, TStyle } from "types/common";
import { FlexWrapProperty } from "csstype";

export function FlexWrap (props: FlexWrapProps): JSX.Element {
  const list = new Array(9).fill('');
  return <View style={Object.assign({
    flexWrap: props.flexWrap,
    overflow: 'scroll',
    maxHeight: '15rem',
  }, styles.container)}>
    {list.map((_e, i) => <View style={styles.item}>
      <Text style={styles.itemText}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

export interface FlexWrapProps extends StandardProps {
  flexWrap: FlexWrapProperty;
}

const styles: TStyle = {
  box: {
    margin: '.2rem 0 .3rem',
    fontSize: '.7rem',
  },
  title: {
    backgroundColor: '#F7DFBF',
    padding: '0 .5rem',
  },
  container: {
    backgroundColor: '#4785C2',
    padding: '.25rem',
    display: 'flex',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    margin: '.25rem',
    width: '2rem',
    height: '2rem',
    border: '1px #FFF solid',
    backgroundColor: '#BFF3F7',
  },
  itemText: {
    borderRadius: '50%',
    border: '1px #FFF solid',
    color: '#FFF',
    margin: 'auto',
    width: '1rem',
    height: '1rem',
    lineHeight: '1rem',
    textAlign: 'center',
  },
}

export default (): JSX.Element => <View>
  <View style={styles.box}>
    <View style={styles.title}>nowrap: 默认 不换行</View>
    <FlexWrap flexWrap='nowrap' />
    <View style={styles.title}>wrap 换行，第一行在上方</View>
    <FlexWrap flexWrap='wrap' />
    <View style={styles.title}>wrap-reverse 换行，第一行在下方</View>
    <FlexWrap flexWrap='wrap-reverse' />
  </View>
</View>