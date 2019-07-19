import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4c4b9256 = () => interopDefault(import('../pages/FloatingBubbles.vue' /* webpackChunkName: "pages/FloatingBubbles" */))
const _4a73ac4f = () => interopDefault(import('../pages/processing.vue' /* webpackChunkName: "pages/processing" */))
const _83aa3152 = () => interopDefault(import('../pages/SearchBox.vue' /* webpackChunkName: "pages/SearchBox" */))
const _644e8da2 = () => interopDefault(import('../pages/ShuffleBurger.vue' /* webpackChunkName: "pages/ShuffleBurger" */))
const _3bf3eb9a = () => interopDefault(import('../pages/ShuffleText.vue' /* webpackChunkName: "pages/ShuffleText" */))
const _56dc42e3 = () => interopDefault(import('../pages/TeaMenu.vue' /* webpackChunkName: "pages/TeaMenu" */))
const _3fdee074 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/FloatingBubbles",
      component: _4c4b9256,
      name: "FloatingBubbles"
    }, {
      path: "/processing",
      component: _4a73ac4f,
      name: "processing"
    }, {
      path: "/SearchBox",
      component: _83aa3152,
      name: "SearchBox"
    }, {
      path: "/ShuffleBurger",
      component: _644e8da2,
      name: "ShuffleBurger"
    }, {
      path: "/ShuffleText",
      component: _3bf3eb9a,
      name: "ShuffleText"
    }, {
      path: "/TeaMenu",
      component: _56dc42e3,
      name: "TeaMenu"
    }, {
      path: "/",
      component: _3fdee074,
      name: "index"
    }],

    fallback: false
  })
}
