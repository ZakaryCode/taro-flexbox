import { View } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";

export default ({index, order}: OrderLabelProps) => <View><View>index: {index}</View><View>order: {order}</View></View>;

export interface OrderLabelProps extends StandardProps {
  index: number;
  order: number;
}
