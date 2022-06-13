import Layout from './layout';
import Sider from './Sider';
Layout.Sider = Sider;
/* istanbul ignore next */

Layout.install = function (app) {
  app.component(Layout.name, Layout);
  app.component(Layout.Header.name, Layout.Header);
  app.component(Layout.Footer.name, Layout.Footer);
  app.component(Layout.Sider.name, Layout.Sider);
  app.component(Layout.Content.name, Layout.Content);
  return app;
};

export var LayoutHeader = Layout.Header;
export var LayoutFooter = Layout.Footer;
export var LayoutSider = Layout.Sider;
export var LayoutContent = Layout.Content;
export default Layout;