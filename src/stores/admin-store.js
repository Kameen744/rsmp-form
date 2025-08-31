import { defineStore } from "pinia";
import * as localForage from "localforage";
import PocketBase from "pocketbase";
const pbUrl = "https://pb-api.resourcetrackr.com";
const pb = new PocketBase(pbUrl);

export const useAdminStore = defineStore("useAdminStore", {
  state: () => ({
    view: "records",
    authUser: null,
    isLoading: false,
    records: null,
  }),
  actions: {
    login() {},
    async logout() {
      await localForage.removeItem("authPartnerUser");
      pb.authStore.clear();
      window.location.reload();
    },
    async getUser() {
      const user = await localForage.getItem("authPartnerUser");
      this.authUser = user;
      return user;
    },
    async setUser(user) {
      await localForage.setItem("authPartnerUser", user);
      this.authUser = user;
    },
  },
});
