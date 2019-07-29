import { View, Text } from "@tarojs/components";
import { StandardProps, TStyle } from "types/common";
import { JustifyContentProperty } from "csstype";

export function JustifyContent (props: JustifyContentProps): JSX.Element {
  const list = [{ label: 1, color: '#E0A3E0' }, { label: 2, color: '#C2E0A3' }, { label: 3, color: '#E0E0A3' }];
  return <View style={Object.assign({
    justifyContent: props.justifyContent,
  }, styles.container)}>
    {list.map(e => <View style={Object.assign({ backgroundColor: e.color }, styles.item)}>
      <Text style={styles.itemText}>{e.label}</Text>
    </View>)}
  </View>
}

export interface JustifyContentProps extends StandardProps {
  justifyContent: JustifyContentProperty;
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
    margin: '.25rem',
    width: '2rem',
    height: '2rem',
    border: '1px #FFF solid',
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
    <View style={styles.title}>flex-start: 默认 左对齐</View>
    <JustifyContent justifyContent='flex-start' />
    <View style={styles.title}>flex-end 右对齐</View>
    <JustifyContent justifyContent='flex-end' />
    <View style={styles.title}>center 居中</View>
    <JustifyContent justifyContent='center' />
    <View style={styles.title}>space-between 两端对齐，项目之间的间隔都相等</View>
    <JustifyContent justifyContent='space-between' />
    <View style={styles.title}>space-around 每个项目两侧的间隔相等(所以，项目之间的间隔比项目与边框的间隔大一倍)</View>
    <JustifyContent justifyContent='space-around' />
  </View>
</View>