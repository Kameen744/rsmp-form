<template>
  <!-- <RsmpTForm></RsmpTForm> -->
  <!-- <RsmpRegister></RsmpRegister> -->
  <!-- <LoginPage></LoginPage> -->

  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
    loader="dots"
    :z-index="99999999999"
    color="#1F3559"
    style="position: absolute"
  />
  <!-- <LoaderContainer></LoaderContainer> -->
  <router-view></router-view>
</template>

<script setup>
import { useAdminStore } from "./stores/admin-store";
import { storeToRefs } from "pinia";
import Loading from "vue-loading-overlay";
const store = useAdminStore();
const { isLoading, userToken } = storeToRefs(store);
</script>
