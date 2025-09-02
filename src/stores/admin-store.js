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
    selectedMarker: null,
    dataFormKey: Math.random(),
    emptyFormData: {
      Name_of_Respondent: "",
      Phone_Number_of_Respondent: "",
      Email_Address_of_Respondent: "",
      Designation_of_respondent: "",
      Name_of_Organization_Agency: "",
      Type_of_Organization_Agency: "",
      Start_date_of_support: "",
      End_date_of_support: "",
      Status_of_support: "Select status",
      Level_of_support: [],
      States_supported: [],
      LGA_supported: [],
      Campaign_Focus: [],
      Campaign_Focus_Other: "",
      Type_of_Support: [],
      Who_is_the_Funder_of_your_project: "",
      Thematic_areas_supported: [],
      Key_Performance_Indicators: "",
      Are_you_collaborating_with_any_other_partners: "No",
      List_the_Partners: [],
      Summary_of_Support: "",
    },
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
    closePopup() {
      this.selectedMarker = null;
    },
    editRecord() {
      this.view = "form";
    },
    formatDateForInput(dateString) {
      const date = new Date(dateString);
      return date.toISOString().split("T")[0];
    },
  },
});
