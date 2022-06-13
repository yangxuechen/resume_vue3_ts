import PropTypes from '../../_util/vue-types';

var collapseProps = function collapseProps() {
  return {
    prefixCls: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]),
    defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]),
    accordion: PropTypes.looseBool,
    destroyInactivePanel: PropTypes.looseBool,
    bordered: PropTypes.looseBool,
    expandIcon: PropTypes.func,
    openAnimation: PropTypes.object,
    expandIconPosition: PropTypes.oneOf(['left', 'right']),
    onChange: PropTypes.func
  };
};

var panelProps = function panelProps() {
  return {
    openAnimation: PropTypes.object,
    prefixCls: PropTypes.string,
    header: PropTypes.any,
    headerClass: PropTypes.string,
    showArrow: PropTypes.looseBool,
    isActive: PropTypes.looseBool,
    destroyInactivePanel: PropTypes.looseBool,
    disabled: PropTypes.looseBool,
    accordion: PropTypes.looseBool,
    forceRender: PropTypes.looseBool,
    expandIcon: PropTypes.func,
    extra: PropTypes.any,
    panelKey: PropTypes.any
  };
};

export { collapseProps, panelProps };