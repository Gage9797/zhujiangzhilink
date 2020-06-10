/*
 * @version: 
 * @Author: 龙国治
 * @Date: 2020-05-25 13:06:29
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => {
      return import('../views/home.vue')
    }
  },
  {
    path: '/smartEducation/businessIntroduce',
    name: 'businessIntroduce',
    component: () => {
      return import('../views/smartEducation/businessIntroduction/index.vue')
    }
  },
  {
    path: '/smartEducation/experimetalTraining',
    name: 'experimetalTraining',
    component: () => {
      return import('../views/smartEducation/experimetalTraining/index.vue')
    }
  },
  {
    path: '/smartEducation/tvClass',
    name: 'tvClass',
    component: () => {
      return import('../views/smartEducation/tvClass/index.vue')
    }
  },
  {
    path: '/smartEducation/healthEducation',
    name: 'healthEducation',
    component: () => {
      return import('../views/smartEducation/healthEducation/index.vue')
    }
  },
  {
    path: '/smartEducation/smartLibary',
    name: 'smartLibary',
    component: () => {
      return import('../views/smartEducation/smartLibary/index.vue')
    }
  },
  {
    path: '/smartEducation/smartClassroom',
    name: 'smartClassroom',
    component: () => {
      return import('../views/smartEducation/smartClassroom/index.vue')
    }
  },
  {
    path: '/infomationSystem/securitySolution',
    name: 'securitySolution',
    component: () => {
      return import('../views/infomationSystem/securitySolution.vue')
    }
  },
  {
    path: '/infomationSystem/bigdataSolution',
    name: 'bigdataSolution',
    component: () => {
      return import('../views/infomationSystem/bigdataSolution.vue')
    }
  },
  {
    path: '/infomationSystem/weekEngineering',
    name: 'weekEngineering',
    component: () => {
      return import('../views/infomationSystem/weekEngineering.vue')
    }
  },
  {
    path: '/infomationSystem/smartParty',
    name: 'smartParty',
    component: () => {
      return import('../views/infomationSystem/smartParty.vue')
    }
  },
  {
    path: '/infomationSystem/smartTv',
    name: 'smartTv',
    component: () => {
      return import('../views/infomationSystem/smartTv.vue')
    }
  },
  {
    path: '/infomationSystem/smartOffice',
    name: 'smartOffice',
    component: () => {
      return import('../views/infomationSystem/smartOffice.vue')
    }
  },
  {
    path: '/infomationSystem/audioSolution',
    name: 'audioSolution',
    component: () => {
      return import('../views/infomationSystem/audioSolution.vue')
    }
  },
  {
    path: '/infomationSystem/remoteSolution',
    name: 'remoteSolution',
    component: () => {
      return import('../views/infomationSystem/remoteSolution.vue')
    }
  },
  {
    path: '/smartMedical/financialMedical',
    name: 'financialMedical',
    component: () => {
      return import('../views/smartMedical/financialMedical.vue')
    }
  },
  {
    path: '/smartMedical/internetHospital',
    name: 'internetHospital',
    component: () => {
      return import('../views/smartMedical/internetHospital.vue')
    }
  },
  {
    path: '/smartMedical/medicalCommunity',
    name: 'medicalCommunity',
    component: () => {
      return import('../views/smartMedical/medicalCommunity.vue')
    }
  },
  {
    path: '/smartMedical/hospitalSide',
    name: 'hospitalSide',
    component: () => {
      return import('../views/smartMedical/hospitalSide.vue')
    }
  },
  {
    path: '/smartMedical/rationalDrug',
    name: 'rationalDrug',
    component: () => {
      return import('../views/smartMedical/rationalDrug.vue')
    }
  },
  {
    path: '/smartMedical/remoteMedical',
    name: 'remoteMedical',
    component: () => {
      return import('../views/smartMedical/remoteMedical.vue')
    }
  },
  {
    path: '/smartMedical/smartHospital',
    name: 'smartHospital',
    component: () => {
      return import('../views/smartMedical/smartHospital.vue')
    }
  },
  {
    path: '/project/niukou',
    name: 'niukou',
    component: () => {
      return import('../views//project/niukou.vue')
    }
  },
  {
    path: '/project/zhenhao',
    name: 'zhenhao',
    component: () => {
      return import('../views/project/zhenhao.vue')
    }
  },
  {
    path: '/about/about',
    name: 'about',
    component: () => {
      return import('../views/about/about.vue')
    }
  },
  {
    path: '/artical/news1',
    name: 'news1',
    component: () => {
      return import('../views/artical/news1')
    }
  },
  {
    path: '/artical/news2',
    name: 'news2',
    component: () => {
      return import('../views/artical/news2')
    }
  },
  {
    path: '/artical/news3',
    name: 'news3',
    component: () => {
      return import('../views/artical/news3')
    }
  },
  {
    path: '/artical/news4',
    name: 'news4',
    component: () => {
      return import('../views/artical/news4')
    }
  },
  {
    path: '/artical/news5',
    name: 'news5',
    component: () => {
      return import('../views/artical/news5')
    }
  },
  {
    path: '/artical/news6',
    name: 'news6',
    component: () => {
      return import('../views/artical/news6')
    }
  },
  {
    path: '/artical/news7',
    name: 'news7',
    component: () => {
      return import('../views/artical/news7')
    }
  },
  {
    path: '/artical/more',
    name: 'more',
    component: () => {
      return import('../views/artical/more')
    }
  }
]
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const router = new VueRouter({
  routes,
  linkActiveClass: 'router-link-active'
})
router.beforeEach((to, from, next) => {
  if(to.path.split('/')[1]===from.path.split('/')[1]) {
    window.scrollTo(780,780);
    next()
  }
  else if (to.path.split('/')[1]==='about') {
    next()
  }
  else {
    document.documentElement.scrollTop = 0
    next()
  }
  // }
})
export default router
