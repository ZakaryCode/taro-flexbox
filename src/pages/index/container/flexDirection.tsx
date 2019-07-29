import { View, Text } from "@tarojs/components";
import { StandardProps, TStyle } from "types/common";
import { FlexDirectionProperty } from "csstype";

export function FlexDirection (props: FlexDirectionProps): JSX.Element {
  const list = [{ label: 1, color: '#E0A3E0' }, { label: 2, color: '#C2E0A3' }, { label: 3, color: '#E0E0A3' }];
  return <View style={Object.assign({
    flexDirection: props.flexDirection,
  }, styles.container)}>
    {list.map(e => <View style={Object.assign({ backgroundColor: e.color }, styles.item)}>
      <Text style={styles.itemText}>{e.label}</Text>
    </View>)}
  </View>
}

export interface FlexDirectionProps extends StandardProps {
  flexDirection: FlexDirectionProperty;
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
    <View style={styles.title}>row: 默认 主轴为水平方向，起点在左端</View>
    <FlexDirection flexDirection='row' />
    <View style={styles.title}>row-reverse 主轴为水平方向，起点在右端</View>
    <FlexDirection flexDirection='row-reverse' />
    <View style={styles.title}>column 主轴为垂直方向，起点在上沿</View>
    <FlexDirection flexDirection='column' />
    <View style={styles.title}>column-reverse 主轴为垂直方向，起点在下沿</View>
    <FlexDirection flexDirection='column-reverse' />
  </View>
</View>