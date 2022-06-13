import { vueJsxTransform , vueJsxTransformConfig } from './transform'

export default (transformConfig:vueJsxTransformConfig = {}) => {
  return {
    transforms: [vueJsxTransform()]
  }
}