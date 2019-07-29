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
    <View style={styles.title}>默认: 0 数值越小，排列越靠前</View>
    <View style={Object.assign({
      maxHeight: '15rem',
    }, styles.container)}>
      <View style={Object.assign({ order: 0 }, styles.item)}>
        <Text style={styles.itemText}>index: 1<br />order: 0</Text>
      </View>
      <View style={Object.assign({ order: 2 }, styles.item)}>
        <Text style={styles.itemText}>index: 2<br />order: 2</Text>
      </View>
      <View style={Object.assign({ order: 4 }, styles.item)}>
        <Text style={styles.itemText}>index: 3<br />order: 4</Text>
      </View>
      <View style={Object.assign({ order: 0 }, styles.item)}>
        <Text style={styles.itemText}>index: 4<br />order: 0</Text>
      </View>
    </View>
  </View>
  <View style={styles.box}>
    <View style={Object.assign({
      maxHeight: '15rem',
      flexDirection: 'column',
    }, styles.container)}>
      <View style={Object.assign({ order: 0 }, styles.item)}>
        <Text style={styles.itemText}>index: 1<br />order: 0</Text>
      </View>
      <View style={Object.assign({ order: -1 }, styles.item)}>
        <Text style={styles.itemText}>index: 2<br />order: -1</Text>
      </View>
      <View style={Object.assign({ order: 1 }, styles.item)}>
        <Text style={styles.itemText}>index: 3<br />order: 1</Text>
      </View>
    </View>
  </View>
</View>