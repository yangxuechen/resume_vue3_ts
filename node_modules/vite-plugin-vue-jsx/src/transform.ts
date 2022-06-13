import { Transform } from 'vite'

export type vueJsxTransformConfig = {
  // automatically unwrap ref
  autoUnref?:boolean
}

export const vueJsxTransform = ():Transform => ({
  test({ path, isBuild }) {
    if (!/\.(t|j)sx?$/.test(path)) {
      return false
    }
    if ((path.startsWith(`/@modules/`) || path.includes('node_modules')) && !path.endsWith('x')) {
      return false
    }

    return true
  },
  transform({ id, code, path, isBuild }) {
    
    if (code.includes("import { jsx } from")) {
      code = code.replace(/import \{ jsx \} from[^\r\n]+/, "import { jsx } from 'vite-plugin-vue-jsx/dist/jsx'")
      code = code.replace(/(?<=v-model":\s)(\[?)([^,\r\n\s\]}]+)/g,($0,$1,$2) => $1 ? `${$1}v => ${$2} = v,${$2}` : `[v => ${$2} = v,${$2}]`)
    }
    return {
      code: `${code}`,
      // map: result.map
    }
    
  }
})
