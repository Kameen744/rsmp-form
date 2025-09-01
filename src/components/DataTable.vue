<script setup>
import { ref, onMounted } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import DataView from "./DataView.vue";
import "@bhplugin/vue3-datatable/dist/style.css";

import PocketBase from "pocketbase";
const pb = new PocketBase("https://pb-api.resourcetrackr.com");

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

const selectedRow = ref(null);
const dialogRef = ref(null);

const handleRowClick = (rowData) => {
  selectedRow.value = rowData;
  console.log(selectedRow.value);
  // table_data_modal.showModal();
  // dialogRef.value.showModal();
};

const closePopup = () => {
  table_data_modal.hideModal();
};

onMounted(() => {
  getPaginatedData();
});
</script>
<template>
  <div>
    <dialog id="table_data_modal" ref="dialogRef" class="modal">
      <div class="modal-box min-w-[40vw] p-0">
        <DataView
          @UpdateTableLoader="handleUpdateTableLoader"
          v-if="selectedRow"
          :selectedMarker="selectedRow"
        ></DataView>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
  <div
    class="max-h-[89vh] min-h-[89vh] mt-4 min-w-[92vw] max-w-[92vw] overflow-y-auto"
  >
    <vue3-datatable
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
<style scoped></style>
