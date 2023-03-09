import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import HelpView from '../views/HelpView.vue'
import ContactView from '../views/ContactView.vue'
import AccederView from '../views/AccederView.vue'
import AboutView from '../views/AboutViews.vue'
import InfoView from '../views/InfoView.vue'
import SomosView from '../views/SomosView.vue'


const routes = [
  {
  path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/help',
      name: 'help',
      component: HelpView
    },
    {
      path: '/contactanos',
        name: 'Contactanos',
        component: ContactView
      },
      {
        path: '/acceder',
          name: 'Acceder',
          component: AccederView
        },
        {
          path: '/about',
            name: 'About',
            component: AboutView
          },
          {
            path: '/info',
              name: 'Info',
              component: InfoView
            },
            {
              path: '/somos',
                name: 'Quienes Somos',
                component: SomosView
              },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
