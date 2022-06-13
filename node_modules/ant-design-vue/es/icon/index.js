import warning from '../_util/warning';
import { withInstall } from '../_util/type';

var Icon = function Icon() {
  warning(false, 'Icon', 'Empty Icon');
  return null;
};

Icon.displayName = 'AIcon';
export default withInstall(Icon);