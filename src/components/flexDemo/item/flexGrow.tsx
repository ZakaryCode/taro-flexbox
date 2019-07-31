import { View, Text } from "@tarojs/components";
import clnx from "../../../utils/clnx";
import '../index.scss';

export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>默认: 0 如果存在剩余空间，不放大</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 0 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 0 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 0 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间(如果有的话)</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 2 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>2</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexGrow: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
    </View>
  </View>
</View>