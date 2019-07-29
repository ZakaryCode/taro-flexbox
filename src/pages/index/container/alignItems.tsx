import { View, Text } from "@tarojs/components";
import { StandardProps, TStyle } from "types/common";
import { AlignItemsProperty } from "csstype";

export function AlignItems (props: AlignItemsProps): JSX.Element {
  const list = [
    { label: 1, color: '#E0A3E0', height: '4rem' },
    { label: 2, color: '#C2E0A3', height: '3rem' },
    { label: 3, color: '#E0E0A3', height: '5rem' }];
  return <View style={Object.assign({
    alignItems: props.alignItems,
    minHeight: '6rem',
  }, styles.container)}>
    {list.map(e => <View style={Object.assign({
      backgroundColor: e.color, height: props.alignItems === 'stretch' ? 'auto' : e.height
    }, styles.item)}>
      <Text style={styles.itemText}>{e.label}</Text>
    </View>)}
  </View>
}

export interface AlignItemsProps extends StandardProps {
  alignItems: AlignItemsProperty;
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
    <View style={styles.title}>stretch: 默认 如果项目未设置高度或设为auto，将占满整个容器的高度</View>
    <AlignItems alignItems='stretch' />
    <View style={styles.title}>flex-start 交叉轴的起点对齐</View>
    <AlignItems alignItems='flex-start' />
    <View style={styles.title}>flex-end 交叉轴的终点对齐</View>
    <AlignItems alignItems='flex-end' />
    <View style={styles.title}>center 交叉轴的中点对齐</View>
    <AlignItems alignItems='center' />
    <View style={styles.title}>baseline 项目的第一行文字的基线对齐</View>
    <AlignItems alignItems='baseline' />
  </View>
</View>