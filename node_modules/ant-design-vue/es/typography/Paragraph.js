import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Omit from 'omit.js';
import Base, { baseProps } from './Base';

var Paragraph = function Paragraph(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;

  var paragraphProps = _extends(_extends(_extends({}, props), {
    component: 'div'
  }), attrs);

  return _createVNode(Base, paragraphProps, slots);
};

Paragraph.displayName = 'ATypographyParagraph';
Paragraph.inheritAttrs = false;
Paragraph.props = Omit(baseProps(), ['component']);
export default Paragraph;