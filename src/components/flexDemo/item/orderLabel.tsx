import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";

export default ({index, order}: OrderLabelProps) => <View>
    <View>
      <Text>index: {index}</Text>
    </View>
    <View>
      <Text>order: {order}</Text>
    </View>
  </View>;

export interface OrderLabelProps extends StandardProps {
  index: number;
  order: number;
}
