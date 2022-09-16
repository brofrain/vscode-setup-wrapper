import 'module-alias/register'

import { settings, theme } from '~/config'
import { updatePackageJson, writeJson } from '~/helpers'

writeJson('./tmp/themes/custom.json', theme)
writeJson('./dist/settings.json', settings)

updatePackageJson()
