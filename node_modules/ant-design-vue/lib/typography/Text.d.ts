import type { FunctionalComponent } from 'vue';
import type { BlockProps, EllipsisConfig } from './Base';
export interface TextProps extends BlockProps {
    ellipsis?: boolean | Omit<EllipsisConfig, 'expandable' | 'rows' | 'onExpand'>;
}
declare const Text: FunctionalComponent<TextProps>;
export default Text;
