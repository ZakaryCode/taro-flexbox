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
    margin: '.25rem',
    width: '3rem',
    height: '2rem',
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
    <View style={styles.title}>默认: 0 1 auto (后两个属性可选) 该属性有两个快捷值: auto (1 1 auto) 和 none (0 0 auto) 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</View>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      <View style={Object.assign({ flex: 'auto' }, styles.item)}>
        <Text style={styles.itemText}>auto</Text>
      </View>
      <View style={Object.assign({ flex: 'auto' }, styles.item)}>
        <Text style={styles.itemText}>1 1 auto</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      <View style={Object.assign({ flex: 'none' }, styles.item)}>
        <Text style={styles.itemText}>none</Text>
      </View>
      <View style={Object.assign({ flex: 'none' }, styles.item)}>
        <Text style={styles.itemText}>0 0 auto</Text>
      </View>
    </View>
  </View>
</View>