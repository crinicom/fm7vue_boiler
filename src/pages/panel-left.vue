<template>
  <f7-page>
    <f7-navbar title="Left Panel"></f7-navbar>
    <f7-block strong>
      <p>Left panel content goes here</p>
    </f7-block>
    <f7-block-title>Load page in panel</f7-block-title>
    <f7-list>
      
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>
    <f7-block-title>Load page in main view</f7-block-title>
    <f7-list>
      <f7-list-item  v-for="item in menuItems" :keu="item.title" :link="item.link" :title="item.title" v-on:click="handle_function_call(item.handler)" view="#main-view" panel-close></f7-list-item>
    </f7-list>
     <!-- <f7-list-item link="/form/" title="Form" view="#main-view" panel-close></f7-list-item>
      <f7-list-item v-on:click="logout" link="/login/" title="Logout" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/login/" title="Login" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/register/" title="Register" view="#main-view" panel-close></f7-list-item> -->
  </f7-page>
</template>
<script>

import firebase from 'firebase';

export default {
    name:'panel',
    data() {
      return {
        isLoggedIn: false,
        currentUser: false,
        menuItems: [
          {icon:'', title:'Register', link: '/register/'},
          {icon:'', title:'Login', link: '/login/'},
          {icon:'', title:'Logout', link: '/login/', handler:"logout"},
          {icon:'', title:'item1', link: '/'},
          {icon:'', title:'item2', link: '/'},
          {icon:'', title:'item3', link: '/'}
          
        ]
      }
    },
    methods: {
      
      logout: function() {
        const self = this;
        const router = self.$f7router;
        firebase.auth().signOut().then(() => {
          this.isLoggedIn = false;
          console.log("logged out!");
           //router.navigate('/login/');
          });
      },
      handle_function_call(function_name) {
      this[function_name]()
    }
    }
}
</script>