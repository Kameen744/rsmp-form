<template>
  <div class="p-2 pt-0">
    <!-- Support Info -->
    <div class="mb-4">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-sm btn-primary" @click="store.closePopup">
            Back to list
          </button>
        </div>
        <div class="h4 fw-semibold p-0 m-0">
          <div>Support Info</div>
        </div>
        <div>
          <button class="btn btn-sm btn-info" @click="store.editRecord">
            Edit record
          </button>
        </div>
      </div>
      <hr />
      <div class="row g-3 mt-2">
        <div class="col-sm-6">
          <p
            ><span class="fw-medium">Organization: </span>
            {{ selectedMarker.Name_of_Organization_Agency }}</p
          >
        </div>
        <div class="col-sm-6">
          <p
            ><span class="fw-medium">Type: </span>
            {{ selectedMarker.Type_of_Organization_Agency[0] }}</p
          >
        </div>
        <div class="col-sm-6">
          <p
            ><span class="fw-medium">Collaborating with other partners: </span>
            {{
              selectedMarker.Are_you_collaborating_with_any_other_partners
            }}</p
          >
        </div>
        <div class="col-sm-6">
          <p
            ><span class="fw-medium">Funder: </span>
            {{ selectedMarker.Who_is_the_Funder_of_your_project }}</p
          >
        </div>
      </div>
    </div>

    <!-- Campaign Focus -->
    <div class="mb-4">
      <h2 class="h4 fw-semibold mb-2">Campaign Focus</h2>
      <div class="d-flex flex-wrap gap-2">
        <span
          v-for="focus in selectedMarker.Campaign_Focus"
          class="badge text-bg-primary px-3 py-2 rounded-pill"
          >{{ focus }}</span
        >
      </div>
    </div>

    <!-- Summary -->
    <div class="mb-4">
      <h2 class="h4 fw-semibold mb-2">Summary of Support</h2>
      <p class="text-muted">
        {{ limtString(selectedMarker.Summary_of_Support, 300) }}
      </p>
    </div>

    <!-- Partners -->
    <div class="mb-4">
      <h2 class="h4 fw-semibold mb-2">List of Partners</h2>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-2">
        <!-- Repeat below for each partner -->
        <div v-for="patner in selectedMarker.List_the_Partners" class="col">
          <span class="badge text-bg-light px-3 py-2 d-block text-center">
            {{ patner }}
          </span>
        </div>
      </div>
    </div>

    <!-- States Supported -->
    <div class="mb-4">
      <h2 class="h4 fw-semibold mb-2">States Supported</h2>
      <div class="d-flex flex-wrap gap-2">
        <span
          v-for="state in selectedMarker.States_supported"
          class="badge text-bg-success px-2 py-1"
          >{{ state.state }}</span
        >
      </div>
    </div>

    <div class="mb-4">
      <h2 class="h4 fw-semibold mb-2">LGA's Supported</h2>
      <div class="d-flex flex-wrap gap-2">
        <span
          v-for="lga in selectedMarker.LGA_supported"
          class="badge text-bg-success px-2 py-1"
          >{{ lga.lga }}</span
        >
      </div>
    </div>

    <!-- Thematic Areas -->
    <div class="mb-4">
      <h2 class="h4 fw-semibold mb-3">Thematic Areas Supported</h2>
      <div class="d-grid gap-3">
        <!-- Repeat for each thematic area -->
        <div
          v-for="area in selectedMarker.Thematic_areas_supported"
          class="card bg-light"
        >
          <div class="card-body">
            <h3 class="h5 fw-semibold mb-2">{{ area.area }}</h3>
            <div class="small mb-2">
              <strong>Sub-areas:</strong>
              <div class="d-flex flex-wrap mt-1">
                <span
                  class="badge bg-secondary me-1 mb-1"
                  v-for="sub in area.sub_areas"
                  >{{ sub }}</span
                >
              </div>
            </div>

            <div class="small mb-2">
              <strong>Support Levels:</strong>
              <div class="d-flex flex-wrap mt-1">
                <span
                  class="badge bg-secondary me-1 mb-1"
                  v-for="level in area.support_level"
                  >{{ level }}</span
                >
              </div>
            </div>
            <p v-if="area.kpi != ''" class="small mb-0">
              <strong>KPI:</strong> {{ area.kpi }}
            </p>
          </div>
        </div>
        <!-- ... repeat for other areas -->
      </div>
    </div>

    <!-- Type of Support -->
    <div class="mb-4">
      <h2 class="h4 fw-semibold mb-2">Type of Support</h2>
      <div class="d-grid gap-2 small text-dark">
        <div v-for="tps in selectedMarker.Type_of_Support">
          <p
            ><strong>{{ tps.support_type }}</strong></p
          >
          <p v-if="tps?.number_of_personnel" class="mb-2">
            Number of personel deployed: {{ tps.number_of_personnel }}
          </p>

          <div v-if="tps?.organizations_funded" class="mb-2">
            Organizations:
            <div class="d-flex flex-wrap mt-1">
              <span
                class="badge bg-secondary me-1 mb-1"
                v-for="org in tps.organizations_funded"
                >{{ org }}</span
              >
            </div>
          </div>

          <div v-if="tps?.commodities_supplied" class="mb-2">
            Commodities Supplied:
            <div class="d-flex flex-wrap mt-1">
              <span
                class="badge bg-secondary me-1 mb-1"
                v-for="com in tps.commodities_supplied"
                >{{ com }}</span
              >
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PocketBase from "pocketbase";
import { onMounted, ref } from "vue";
import { useAdminStore } from "./../stores/admin-store";
import { storeToRefs } from "pinia";

const store = useAdminStore();
const pb = new PocketBase("https://pb-api.resourcetrackr.com");

const { isLoading, authUser, records, view, selectedMarker } =
  storeToRefs(store);

const listOfSuports = ref(new Set());
const collapseKey = ref(null);
const expand = (key) => {
  if (collapseKey.value) {
    collapseKey.value = null;
  } else {
    collapseKey.value = key;
  }
};
const limtString = (txt, limit) => {
  if (txt.length > limit) {
    return txt.slice(0, limit) + "...";
  }
  return txt;
};
const statusNameChange = (status) => {
  if (status == "In Progress") {
    return "Ongoing";
  }
  return status;
};
const verifySpList = (spName) => {
  if (selectedLgaMarker.value.supports) {
    selectedLgaMarker.value.supports.forEach((sp) => {
      listOfSuports.value.add(sp.type_of_support);
    });
  }
  return listOfSuports.value;
};
// const getSpBg = (spName) => {
//   let sp = store.getValFromData(supportTypes.value, "name", spName);
//   return sp.bg;
// };

// const props = defineProps({
//   selectedMarker: {
//     type: Object,
//     default: {},
//   },
// });

// const enableAndDisableRec = async (rec) => {
//   emit("updateTableLoader", true);

//   if (rec.approved) {
//     rec.approved = false;
//   } else {
//     rec.approved = true;
//   }
//   const r = await pb.collection(rec.collectionName).update(rec.id, rec);

//   emit("updateTableLoader", false);
//   // location.reload();
// };

onMounted(() => {});
</script>

<style scoped>
.flex-full {
  flex: 0 0 100%;
}
.left-panel {
  position: absolute;
  width: 560px;
  height: 1078px;
  right: 0px;
  top: 0px;

  background: #f5f5f5;
  border-radius: 8px 0px 0px 8px;
}
.left-panel-header {
  /* Frame 2147225925 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 24px;

  position: absolute;
  width: 560px;
  height: 76px;
  left: 0px;
  top: 0px;

  background: #ee7422;
}
</style>
