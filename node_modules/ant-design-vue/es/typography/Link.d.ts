import type { AnchorHTMLAttributes, FunctionalComponent } from 'vue';
import type { BlockProps } from './Base';
export interface LinkProps extends BlockProps, Omit<AnchorHTMLAttributes, 'type'> {
    ellipsis?: boolean;
}
declare const Link: FunctionalComponent<LinkProps>;
export default Link;
