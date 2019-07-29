import { View, Text } from "@tarojs/components";
import { TStyle } from "types/common";

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
    padding: '0 .25rem',
    border: '1px #FFF solid',
    backgroundColor: '#BFF3F7',
  },
  itemText: {
    color: '#FFF',
    margin: 'auto',
    fontSize: '.5rem',
    lineHeight: '1rem',
    textAlign: 'center',
  },
}

export default (): JSX.Element => <View>
  <View style={styles.box}>
    <View style={styles.title}>默认: auto 继承父元素的align-items属性，如果没有父元素，则等同于stretch</View>
    <View style={Object.assign({
      maxHeight: '15rem',
      flexDirection: 'column',
    }, styles.container)}>
      <View style={Object.assign({ alignSelf: 'auto' }, styles.item)}>
        <Text style={styles.itemText}>auto</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={styles.title}>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</View>
    <View style={Object.assign({
      maxHeight: '15rem',
      flexDirection: 'column',
    }, styles.container)}>
      <View style={Object.assign({ width: '5rem', alignSelf: 'flex-start' }, styles.item)}>
        <Text style={styles.itemText}>flex-start</Text>
      </View>
      <View style={Object.assign({ width: '5rem', alignSelf: 'center' }, styles.item)}>
        <Text style={styles.itemText}>center</Text>
      </View>
      <View style={Object.assign({ width: '5rem', alignSelf: 'flex-end' }, styles.item)}>
        <Text style={styles.itemText}>flex-end</Text>
      </View>
      <View style={Object.assign({ alignSelf: 'flex-stretch' }, styles.item)}>
        <Text style={styles.itemText}>flex-stretch</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={styles.title}>baseline</View>
    <View style={Object.assign({
      maxHeight: '15rem',
    }, styles.container)}>
      <View style={Object.assign({ height: '7rem', alignSelf: 'baseline' }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
      <View style={Object.assign({ height: '5rem', alignSelf: 'baseline' }, styles.item)}>
        <Text style={styles.itemText}>2</Text>
      </View>
      <View style={Object.assign({ height: '3rem', alignSelf: 'baseline' }, styles.item)}>
        <Text style={styles.itemText}>3</Text>
      </View>
    </View>
  </View>
</View>