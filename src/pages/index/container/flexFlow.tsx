import { View, Text } from "@tarojs/components";
import { StandardProps, TStyle } from "types/common";
import { FlexFlowProperty } from "csstype";

export function FlexFlow (props: FlexFlowProps): JSX.Element {
  const list = new Array(9).fill('');
  return <View style={Object.assign({
    flexFlow: props.flexFlow,
    overflow: 'scroll',
    maxHeight: '15rem',
  }, styles.container)}>
    {list.map((_e, i) => <View style={styles.item}>
      <Text style={styles.itemText}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

export interface FlexFlowProps extends StandardProps {
  flexFlow: FlexFlowProperty;
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
    <View style={styles.title}>row nowrap: 默认</View>
    <FlexFlow flexFlow='row nowrap' />
    <View style={styles.title}>row wrap</View>
    <FlexFlow flexFlow='row wrap' />
    <View style={styles.title}>row wrap-reverse</View>
    <FlexFlow flexFlow='row wrap-reverse' />
    <View style={styles.title}>row-reverse nowrap</View>
    <FlexFlow flexFlow='row-reverse nowrap' />
    <View style={styles.title}>row-reverse wrap</View>
    <FlexFlow flexFlow='row-reverse wrap' />
    <View style={styles.title}>row-reverse wrap-reverse</View>
    <FlexFlow flexFlow='row-reverse wrap-reverse' />
    <View style={styles.title}>column nowrap</View>
    <FlexFlow flexFlow='column nowrap' />
    <View style={styles.title}>column wrap</View>
    <FlexFlow flexFlow='column wrap' />
    <View style={styles.title}>column wrap-reverse</View>
    <FlexFlow flexFlow='column wrap-reverse' />
    <View style={styles.title}>column-reverse nowrap</View>
    <FlexFlow flexFlow='column-reverse nowrap' />
    <View style={styles.title}>column-reverse wrap</View>
    <FlexFlow flexFlow='column-reverse wrap' />
    <View style={styles.title}>column-reverse wrap-reverse</View>
    <FlexFlow flexFlow='column-reverse wrap-reverse' />
  </View>
</View>