import { View, Text } from "@tarojs/components";
import { StandardProps, TStyle } from "types/common";
import { AlignContentProperty } from "csstype";

export function AlignContent (props: AlignContentProps): JSX.Element {
  const list = [
    { label: 1, color: '#E0A3E0', width: '4rem' },
    { label: 2, color: '#C2E0A3', width: '3rem' },
    { label: 3, color: '#E0E0A3', width: '5rem' },
    { label: 4, color: '#C2E0A3', width: '3rem' },
    { label: 5, color: '#E0A3E0', width: '4rem' },
    { label: 6, color: '#E0E0A3', width: '5rem' }];
  return <View style={Object.assign({
    alignContent: props.alignContent,
    flexWrap: 'wrap',
    minHeight: '6rem',
  }, styles.container)}>
    {list.map(e => <View style={Object.assign({
      backgroundColor: e.color, width: e.width
    }, styles.item)}>
      <Text style={styles.itemText}>{e.label}</Text>
    </View>)}
  </View>
}

export interface AlignContentProps extends StandardProps {
  alignContent: AlignContentProperty;
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
    <View style={styles.title}>stretch: 默认 轴线占满整个交叉轴</View>
    <AlignContent alignContent='stretch' />
    <View style={styles.title}>flex-start 与交叉轴的起点对齐</View>
    <AlignContent alignContent='flex-start' />
    <View style={styles.title}>flex-end 与交叉轴的终点对齐</View>
    <AlignContent alignContent='flex-end' />
    <View style={styles.title}>center 与交叉轴的中点对齐</View>
    <AlignContent alignContent='center' />
    <View style={styles.title}>space-between 与交叉轴两端对齐，轴线之间的间隔平均分布</View>
    <AlignContent alignContent='space-between' />
    <View style={styles.title}>space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍</View>
    <AlignContent alignContent='space-around' />
  </View>
</View>