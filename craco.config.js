const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      assets: resolvePath('./src/assets'),
      generic: resolvePath('./src/shared/generic'),
      containers: resolvePath('./src/shared/containers'),
      layouts: resolvePath('./src/shared/layouts'),
      config: resolvePath('./src/config'),
      contexts: resolvePath('./src/contexts'),
      helpers: resolvePath('./src/helpers'),
      hooks: resolvePath('./src/hooks'),
      i18n: resolvePath('./src/i18n'),
      icons: resolvePath('./src/icons'),
      libs: resolvePath('./src/libs'),
      pages: resolvePath('./src/pages'),
      styles: resolvePath('./src/styles'),
      services: resolvePath('./src/services'),
      modules: resolvePath('./src/modules'),
      types: resolvePath('./src/types'),
    },
  },
}
