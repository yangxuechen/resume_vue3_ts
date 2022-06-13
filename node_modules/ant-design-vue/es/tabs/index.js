import _extends from "@babel/runtime/helpers/esm/extends";
import Tabs from './tabs';
import TabPane from '../vc-tabs/src/TabPane';
import TabContent from '../vc-tabs/src/TabContent';
Tabs.TabPane = _extends(_extends({}, TabPane), {
  name: 'ATabPane',
  __ANT_TAB_PANE: true
});
Tabs.TabContent = _extends(_extends({}, TabContent), {
  name: 'ATabContent'
});
/* istanbul ignore next */

Tabs.install = function (app) {
  app.component(Tabs.name, Tabs);
  app.component(Tabs.TabPane.name, Tabs.TabPane);
  app.component(Tabs.TabContent.name, Tabs.TabContent);
  return app;
};

export default Tabs;
export { TabPane, TabContent };