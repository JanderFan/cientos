// https://vitepress.dev/guide/custom-theme
import 'uno.css'
import Theme from 'vitepress/theme'
import './style.css'

import TresLayout from './TresLayout.vue'
import WobbleMaterial from './components/WobbleMaterial.vue'
import LeviosoDemo from './components/LeviosoDemo.vue'

export default {
  ...Theme,
  Layout: TresLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('WobbleMaterial', WobbleMaterial)
    app.component('LeviosoDemo', LeviosoDemo)
  },
}