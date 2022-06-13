import { PresetColorTypes } from '../_util/colors';
export function isPresetColor(color) {
  return PresetColorTypes.indexOf(color) !== -1;
}