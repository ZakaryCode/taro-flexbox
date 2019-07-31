import { View, Text } from "@tarojs/components";
import clnx from "../../../utils/clnx";
import '../index.scss';


export default (): JSX.Element => <View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>默认: 0 如果空间不足，该项目将缩小 负值对该属性无效</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 0 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 3 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>3</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 2 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>2</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 3 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>3</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 0 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 0 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 3 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>3</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 2 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>2</Text>
      </View>
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      {(new Array(8).fill('')).map(() => <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>)}
    </View>
  </View>
  <View className={clnx(['demo-box'])}>
    <View className={clnx(['demo-box-title'])}>如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小</View>
    <View className={clnx(['demo-box-container', 'demo-box-container-scroll'])}>
      <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 0 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>0</Text>
      </View>
      {(new Array(7).fill('')).map(() => <View className={clnx(['demo-box-container-item', 'demo-box-container-itemW'])} style={{ flexShrink: 1 }}>
        <Text className={clnx(['demo-box-container-itemText'])}>1</Text>
      </View>)}
    </View>
  </View>
</View>