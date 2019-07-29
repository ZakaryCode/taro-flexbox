import FlexPanel, { FlexPanelProps } from './flex';

export interface PanelProps extends FlexPanelProps {};

const Panel = (props: PanelProps) => <FlexPanel {...props}/>;

export default Panel;