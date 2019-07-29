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
    <View style={styles.title}>默认: auto 项目的本来大小 它可以设为跟width或height属性一样的值(比如350px)，则项目将占据固定空间。</View>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      <View style={Object.assign({ flexBasis: 'auto' }, styles.item)}>
        <Text style={styles.itemText}>auto</Text>
      </View>
      <View style={Object.assign({ flexBasis: '25%' }, styles.item)}>
        <Text style={styles.itemText}>25%</Text>
      </View>
      <View style={Object.assign({ flexBasis: '50%' }, styles.item)}>
        <Text style={styles.itemText}>50%</Text>
      </View>
      <View style={Object.assign({ flexBasis: '75%' }, styles.item)}>
        <Text style={styles.itemText}>75%</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      <View style={Object.assign({ flexBasis: 'auto' }, styles.item)}>
        <Text style={styles.itemText}>auto</Text>
      </View>
      <View style={Object.assign({ flexBasis: '25%' }, styles.item)}>
        <Text style={styles.itemText}>25%</Text>
      </View>
    </View>
  </View>
</View>