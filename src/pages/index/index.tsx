import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Panel from '../../components/panel';
import { TStyle } from 'types/common';
import FlexDirection from './container/flexDirection';
import FlexWrap from './container/flexWrap';
import FlexFlow from './container/flexFlow';
import JustifyContent from './container/justifyContent';
import AlignItems from './container/alignItems';
import AlignContent from './container/alignContent';
import Order from './item/order';
import FlexGrow from './item/flexGrow';
import FlexShrink from './item/flexShrink';
import FlexBasis from './item/flexBasis';
import Flex from './item/flex';
import AlignSelf from './item/alignSelf';

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'FlexBox 布局'
  }

  state = {
    containerList: [
      {
        title: 'flex-direction',
        subtitle: '决定主轴的方向(即 item 的排列方向)',
        content: <FlexDirection />,
      }, {
        title: 'flex-wrap',
        subtitle: '定义，如果一条轴线排不下，如何换行',
        content: <FlexWrap />,
      }, {
        title: 'flex-flow',
        subtitle: '是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap',
        content: <FlexFlow />,
      }, {
        title: 'justify-content',
        subtitle: '定义了 item 在主轴上的对齐方式',
        content: <JustifyContent />,
      }, {
        title: 'align-items',
        subtitle: '定义 item 在交叉轴上如何对齐',
        content: <AlignItems />,
      }, {
        title: 'align-content',
        subtitle: '定义了多根轴线的对齐方式(如果 item 只有一根轴线，该属性不起作用)',
        content: <AlignContent />,
      },
    ],
    itemList: [
      {
        title: 'order',
        subtitle: '定义 item 的排列顺序',
        content: <Order />,
      }, {
        title: 'flex-grow',
        subtitle: '定义 item 的放大比例',
        content: <FlexGrow />,
      }, {
        title: 'flex-shrink',
        subtitle: '定义了 item 的缩小比例',
        content: <FlexShrink />,
      }, {
        title: 'flex-basis',
        subtitle: '定义了在分配多余空间之前， item 占据的主轴空间(main size)。浏览器根据这个属性，计算主轴是否有多余空间。',
        content: <FlexBasis />,
      }, {
        title: 'flex',
        subtitle: 'flex-grow, flex-shrink 和 flex-basis的简写',
        content: <Flex />,
      }, {
        title: 'align-self',
        subtitle: '允许单个 item 有与其他 item 不一样的对齐方式，可覆盖align-items属性',
        content: <AlignSelf />,
      },
    ],
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getPanel = (title: string, list: any[]) => <Panel 
    classes={{
      title: { height: '2rem', lineHeight: '2rem', fontWeight: 'bolder', backgroundColor: '#CBCBCB', zIndex : '1' },
      content: { padding: '.25rem 0' }
    }}
    renderTitle={<Text>{title}</Text>}>
    {list.map(e => <Panel
      classes={{
        title: { top: '2rem' },
        content: { padding: '.25rem 0' }
      }}
      renderTitle={this.getTitle(e)}>
      {e.content}
    </Panel>)}
  </Panel>

  getTitle = ({title, subtitle}) => <View>
    <View style={{ fontSize: '1rem', fontWeight: 'bolder' }}>{title}</View>
    <View style={{ fontSize: '.75rem', color: '#444' }}>{subtitle}</View>
  </View>

  render () {
    const { containerList, itemList } = this.state;
    return (
      <View style={{ maxWidth: '20rem', margin: 'auto' }}>
        <View style={styles.head}>
          <Text>FlexBox 布局</Text>
        </View>
        <View style={{ padding: '.25rem', marginBottom: '.25rem', fontSize: '.75rem', textIndent: '1.5rem', backgroundColor: '#EFEFEF' }}>
          <View>采用<Text style={styles.span}>Flex 布局</Text>的元素，称为<Text style={styles.span}>Flex 容器</Text>(flex container)。<Text style={styles.span}>Flex 容器</Text>的所有子元素自动成为容器成员，称为<Text style={styles.span}>Flex 项目</Text>(flex item)。</View>
          <View><Text style={styles.span}>Flex 容器</Text>默认存在两根轴: 水平的主轴(main axis)和垂直的交叉轴(cross axis)。</View>
          <View><Text style={styles.span}>Flex 项目</Text>默认沿主轴排列。主轴的开始位置(与边框的交叉点)叫做main start，结束位置叫做main end;交叉轴的开始位置叫做cross start，结束位置叫做cross end;单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。</View>
          <View style={{ color: 'orange' }}>注意，设为 Flex 布局以后，子元素的 *float* 、 *clear* 和 *vertical-align* 属性将失效。</View>
        </View>
        {this.getPanel('Flex Container 属性', containerList)}
        {this.getPanel('Flex Item 属性', itemList)}
      </View>
    )
  }
}

const styles: TStyle = {
  head: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    verticalAlign: 'baseline',
    lineHeight: '3rem',
    height: '3rem',
    width: '100%',
    fontWeight: 'bolder',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px #AAA',
    position: 'sticky',
    top: 0,
  },
  span: {
    padding: '0 .25rem',
    fontWeight: 'bolder',
  },
};
