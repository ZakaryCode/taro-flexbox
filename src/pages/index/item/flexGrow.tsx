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
    <View style={styles.title}>默认: 0 如果存在剩余空间，不放大</View>
    <View style={Object.assign({
      maxHeight: '15rem',
    }, styles.container)}>
      <View style={Object.assign({ flexGrow: 0 }, styles.item)}>
        <Text style={styles.itemText}>0</Text>
      </View>
      <View style={Object.assign({ flexGrow: 0 }, styles.item)}>
        <Text style={styles.itemText}>0</Text>
      </View>
      <View style={Object.assign({ flexGrow: 0 }, styles.item)}>
        <Text style={styles.itemText}>0</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={styles.title}>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间(如果有的话)</View>
    <View style={Object.assign({
      maxHeight: '15rem',
    }, styles.container)}>
      <View style={Object.assign({ flexGrow: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
      <View style={Object.assign({ flexGrow: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
      <View style={Object.assign({ flexGrow: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={styles.title}>如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍</View>
    <View style={Object.assign({
      maxHeight: '15rem',
    }, styles.container)}>
      <View style={Object.assign({ flexGrow: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
      <View style={Object.assign({ flexGrow: 2 }, styles.item)}>
        <Text style={styles.itemText}>2</Text>
      </View>
      <View style={Object.assign({ flexGrow: 1 }, styles.item)}>
        <Text style={styles.itemText}>1</Text>
      </View>
    </View>
  </View>
</View>