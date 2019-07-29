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
    <View style={styles.title}>默认: 0 如果空间不足，该项目将缩小 负值对该属性无效</View>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      <View style={Object.assign({ flexShrink: 0 }, styles.item)}>
        <Text style={styles.itemText}>0</Text>
      </View>
      <View style={Object.assign({ flexShrink: 3 }, styles.item)}>
        <Text style={styles.itemText}>3</Text>
      </View>
      <View style={Object.assign({ flexShrink: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
      <View style={Object.assign({ flexShrink: 2 }, styles.item)}>
        <Text style={styles.itemText}>2</Text>
      </View>
      <View style={Object.assign({ flexShrink: 3 }, styles.item)}>
        <Text style={styles.itemText}>3</Text>
      </View>
      <View style={Object.assign({ flexShrink: 0 }, styles.item)}>
        <Text style={styles.itemText}>0</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      <View style={Object.assign({ flexShrink: 0 }, styles.item)}>
        <Text style={styles.itemText}>0</Text>
      </View>
      <View style={Object.assign({ flexShrink: 3 }, styles.item)}>
        <Text style={styles.itemText}>3</Text>
      </View>
      <View style={Object.assign({ flexShrink: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
      <View style={Object.assign({ flexShrink: 2 }, styles.item)}>
        <Text style={styles.itemText}>2</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={styles.title}>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小</View>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      {(new Array(8).fill('')).map(() => <View style={Object.assign({ flexShrink: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>)}
    </View>
  </View>
  <View style={styles.box}>
    <View style={styles.title}>如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小</View>
    <View style={Object.assign({
      maxHeight: '15rem',
      overflow: 'scroll',
    }, styles.container)}>
      <View style={Object.assign({ flexShrink: 0 }, styles.item)}>
        <Text style={styles.itemText}>0</Text>
      </View>
      {(new Array(7).fill('')).map(() => <View style={Object.assign({ flexShrink: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>)}
    </View>
  </View>
</View>