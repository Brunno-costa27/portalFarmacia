import Vue from 'vue';
import Router from 'vue-router';
import login from './view/login.vue';
// import tabela from './view/tabela.vue';
// import preco from './view/preco.vue';
import painel from './view/painel.vue';
// import cadastroFuncionario from './view/cadastroFuncionario.vue';

import Funcionario from '../src/services/funcionarios'




Vue.use(Router);

const router = new Router({

  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,  
    },
    {
      path: '/',
      redirect: 'login'  
    },
    
    // {
    //   path: '/tabela',
    //   name: 'tabela',
    //   component: tabela,
    // },

    // {
    //   path: '/preco',
    //   name: 'preco',
    //   component: preco,
    //   beforeEnter: (to , from , next)  => {
    //     if (!Funcionario.user) {
    //       next({
    //         name: "login"
    //       })
    //     } else {
    //       next();
    //     }
    //   } 
    // },
    // {
    //   path: '/cadastro',
    //   name: 'cadastro',
    //   component: cadastroFuncionario,
    //   beforeEnter: (to , from , next)  => {
    //     if (!Funcionario.user) {
    //       next({
    //         name: "login"
    //       })
    //     } else {
    //       next();
    //     }
    //   } 
    // },
    {
      path: '/painel',
      name: 'painel',
      component: painel,
      beforeEnter: (to , from , next)  => {
        if (!Funcionario.user) {
          next({
            name: "login"
          })
        }else {
          next();
        }
      }      
    },
  ]
})

// router.beforeEach((to, from, next) => {

//   if (to.meta.requiresAuth) {
//     if (!Funcionario.user) {
//       next({
//         name: "login"
//       })
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// })



export default router