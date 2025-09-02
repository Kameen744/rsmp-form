<script setup>
import { ref, onMounted } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import DataView from "./DataView.vue";
import "@bhplugin/vue3-datatable/dist/style.css";
import { useAdminStore } from "./../stores/admin-store";
import { storeToRefs } from "pinia";
import PocketBase from "pocketbase";
const pb = new PocketBase("https://pb-api.resourcetrackr.com");

const store = useAdminStore();
const { isLoading, authUser, records, view, selectedMarker } =
  storeToRefs(store);

const tabLoading = ref(false);
const totalRows = ref(0);
const currentPage = ref(1);
const searchTxt = ref("");
const pageSize = ref(20);
const rows = ref([]);

// Fetch paginated records from the 'posts' collection
const handleUpdateTableLoader = (val) => {
  tabLoading.value = val;
};

const getPaginatedData = async (pagination = null) => {
  tabLoading.value = true;
  if (pagination) {
    currentPage.value = pagination.current_page;
    pageSize.value = pagination.pagesize;
  }

  try {
    // const result = await pb.collection("rsmp_data").getFullList({
    //   filter: "Name_of_Organization_Agency = 'WHO'",
    // });

    const result = await pb
      .collection("rsmp_data")
      .getList(currentPage.value, pageSize.value, {
        filter: "Name_of_Organization_Agency='WHO'",
        sort: "-created",
      });

    // console.log(result);
    currentPage.value = result.page;
    pageSize.value = result.perPage;
    totalRows.value = result.totalItems;
    rows.value = result.items;
    // result.totalPages
  } catch (error) {
    console.error("Error fetching records:", error.message);
  }
  tabLoading.value = false;
};

// Example usage
// getPaginatedPosts(1, 50);

const cols = ref([
  { field: "Name_of_Organization_Agency", title: "Organization/Agency" },
  { field: "Name_of_Respondent", title: "Respondent Name" },
  { field: "Email_Address_of_Respondent", title: "Respondent Email" },
  { field: "Phone_Number_of_Respondent", title: "Respondent Phone" },
  { field: "Designation_of_respondent", title: "Designation" },

  { field: "Who_is_the_Funder_of_your_project", title: "Funder" },
  { field: "Status_of_support", title: "Support Status", filter: true }, // Filterable
  {
    field: "Start_date_of_support",
    title: "Start Date",
    cellRenderer: (item) => {
      return formatDate(item.Start_date_of_support);
    },
  },
  {
    field: "End_date_of_support",
    title: "End Date",
    cellRenderer: (item) => {
      return formatDate(item.End_date_of_support);
    },
  },
]);

const formatDate = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month] = inputDate.split("-");
  const formattedDate = `${months[parseInt(month) - 1]} ${year}`;

  return formattedDate;
};

const handleRowClick = (rowData) => {
  selectedMarker.value = rowData;
};

onMounted(() => {
  getPaginatedData();
});
</script>
<template>
  <div class="dash-container">
    <DataView
      @UpdateTableLoader="handleUpdateTableLoader"
      v-if="selectedMarker"
    ></DataView>
    <vue3-datatable
      v-else
      :rows="rows"
      :columns="cols"
      :loading="tabLoading"
      :totalRows="totalRows"
      :page="currentPage"
      :isServerMode="true"
      :search="searchTxt"
      :stickyHeader="true"
      :pageSize="pageSize"
      :selectRowOnClick="true"
      skin="bh-table-hover"
      @change="getPaginatedData"
      @row-click="handleRowClick"
    >
    </vue3-datatable>
  </div>
</template>
<style scoped>
/* .dash-container {
  background-color: red;
} */
</style>
