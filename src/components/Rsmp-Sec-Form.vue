<!-- PartnerResourceMappingForm.vue -->
<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Wizard progress indicator -->
    <ul class="steps w-full mb-8">
      <li
        v-for="(s, i) in stepTitles"
        :key="s"
        class="step"
        :class="{ 'step-primary': i <= step }"
      >
        {{ i + 1 }}
      </li>
    </ul>

    <!-- STEP 0 ─ Respondent & Organisation -->
    <div v-if="step === 0" class="card bg-base-100 shadow-xl">
      <div class="card-body space-y-4">
        <h2 class="card-title">Respondent &amp; Organisation</h2>

        <div class="form-control">
          <label class="label">Name of Respondent</label>
          <input
            v-model="form.Name_of_Respondent"
            type="text"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">Designation of Respondent</label>
          <input
            v-model="form.Designation_of_respondent"
            type="text"
            class="input input-bordered"
          />
        </div>

        <div class="form-control">
          <label class="label">Name of Organisation / Agency</label>
          <input
            v-model="form.Name_of_Organization_Agency"
            type="text"
            class="input input-bordered"
          />
        </div>

        <div class="form-control">
          <label class="label">Type of Organisation / Agency</label>
          <div class="flex flex-wrap gap-4">
            <label v-for="t in orgTypes" :key="t" class="label cursor-pointer">
              <input
                type="checkbox"
                class="checkbox mr-2"
                :value="t"
                v-model="form.Type_of_Organization_Agency"
              />
              <span class="label-text">{{ t }}</span>
            </label>
          </div>
        </div>

        <div class="flex gap-4">
          <button class="btn btn-primary ml-auto" @click="next">Next</button>
        </div>
      </div>
    </div>

    <!-- STEP 1 ─ Support timeline & status -->
    <div v-if="step === 1" class="card bg-base-100 shadow-xl">
      <div class="card-body space-y-4">
        <h2 class="card-title">Support Timeline &amp; Status</h2>

        <div class="grid sm:grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label">Start Date of Support</label>
            <input
              v-model="form.Start_date_of_support"
              type="date"
              class="input input-bordered"
            />
          </div>

          <div class="form-control">
            <label class="label">End Date of Support</label>
            <input
              v-model="form.End_date_of_support"
              type="date"
              class="input input-bordered"
            />
          </div>
        </div>

        <div class="form-control">
          <label class="label">Status of Support</label>
          <select
            v-model="form.Status_of_support"
            class="select select-bordered"
          >
            <option disabled value="">-- choose --</option>
            <option>Not started</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div class="flex gap-4">
          <button class="btn" @click="prev">Back</button>
          <button class="btn btn-primary ml-auto" @click="next">Next</button>
        </div>
      </div>
    </div>

    <!-- STEP 2 ─ Scope -->
    <div v-if="step === 2" class="card bg-base-100 shadow-xl">
      <div class="card-body space-y-4">
        <h2 class="card-title">Scope of Support</h2>

        <!-- Level -->
        <div class="form-control">
          <label class="label">Level of Support</label>
          <div class="flex flex-wrap gap-4">
            <label
              v-for="lvl in levels"
              :key="lvl"
              class="label cursor-pointer"
            >
              <input
                type="checkbox"
                class="checkbox mr-2"
                :value="lvl"
                v-model="form.Level_of_support"
              />
              <span class="label-text">{{ lvl }}</span>
            </label>
          </div>
        </div>

        <!-- States -->
        <div
          v-if="form.Level_of_support.includes('State')"
          class="form-control"
        >
          <label class="label">States Supported</label>
          <select
            multiple
            class="select select-bordered h-40"
            v-model="stateSelection"
          >
            <option v-for="s in NIGERIAN_STATES" :key="s">{{ s }}</option>
          </select>
        </div>

        <!-- LGAs -->
        <div v-if="form.Level_of_support.includes('LGA')" class="form-control">
          <label class="label">LGAs Supported (by state)</label>
          <div v-for="s in stateSelection" :key="s" class="mb-2">
            <label class="label text-sm opacity-70">{{ s }}</label>
            <select
              multiple
              class="select select-bordered h-32"
              v-model="lgaSelection[s]"
            >
              <option v-for="lga in LGAS_BY_STATE[s]" :key="lga">{{
                lga
              }}</option>
            </select>
          </div>
        </div>

        <!-- sync State/LGA selections into final object -->
        <div class="flex gap-4">
          <button class="btn" @click="prev">Back</button>
          <button class="btn btn-primary ml-auto" @click="next">Next</button>
        </div>
      </div>
    </div>

    <!-- STEP 3 ─ Campaign focus -->
    <div v-if="step === 3" class="card bg-base-100 shadow-xl">
      <div class="card-body space-y-4">
        <h2 class="card-title">Campaign Focus</h2>
        <div class="form-control">
          <label class="label"
            >Which campaigns does your support focus on?</label
          >
          <div class="flex flex-wrap gap-4">
            <label v-for="c in campaigns" :key="c" class="label cursor-pointer">
              <input
                type="checkbox"
                class="checkbox mr-2"
                :value="c"
                v-model="form.Campaign_Focus"
              />
              <span class="label-text">{{ c }}</span>
            </label>
            <!-- Other -->
            <input
              v-if="form.Campaign_Focus.includes('Other')"
              v-model="form.Campaign_Focus_Other"
              type="text"
              placeholder="Specify other…"
              class="input input-bordered w-full mt-2"
            />
          </div>
        </div>

        <div class="flex gap-4">
          <button class="btn" @click="prev">Back</button>
          <button class="btn btn-primary ml-auto" @click="next">Next</button>
        </div>
      </div>
    </div>

    <!-- STEP 4 ─ Type of support -->
    <TypeOfSupport
      v-if="step === 4"
      v-model="form.Type_of_Support"
      @back="prev"
      @next="next"
    />

    <!-- STEP 5 ─ Funder & KPIs -->
    <div v-if="step === 5" class="card bg-base-100 shadow-xl">
      <div class="card-body space-y-4">
        <h2 class="card-title">Funder &amp; KPIs</h2>

        <div class="form-control">
          <label class="label">Who is the Funder of your project?</label>
          <input
            v-model="form.Who_is_the_Funder_of_your_project"
            type="text"
            class="input input-bordered"
          />
        </div>

        <div class="form-control">
          <label class="label">Key Performance Indicators</label>
          <textarea v-model="kpiHtml" class="textarea textarea-bordered h-40" />
        </div>

        <div class="flex gap-4">
          <button class="btn" @click="prev">Back</button>
          <button class="btn btn-primary ml-auto" @click="next">Next</button>
        </div>
      </div>
    </div>

    <!-- STEP 6 ─ Thematic areas -->
    <ThematicAreas
      v-if="step === 6"
      v-model="form.Thematic_areas_supported"
      @back="prev"
      @next="next"
    />

    <!-- STEP 7 ─ Collaboration -->
    <Collaboration
      v-if="step === 7"
      v-model:collaborating="form.Are_you_collaborating_with_any_other_partners"
      v-model:list="form.List_the_Partners"
      @back="prev"
      @next="next"
    />

    <!-- STEP 8 ─ Review & submit -->
    <div v-if="step === 8" class="card bg-base-100 shadow-xl">
      <div class="card-body space-y-4">
        <h2 class="card-title">Review &amp; Submit</h2>
        <p class="text-sm opacity-70">
          Please review your answers. You can go back to make changes, or submit
          when ready.
        </p>
        <pre class="bg-base-200 p-4 rounded text-xs overflow-x-auto">{{
          form
        }}</pre>
        <div class="flex gap-4">
          <button class="btn" @click="prev">Back</button>
          <button
            class="btn btn-success ml-auto"
            :disabled="submitting"
            @click="submit"
          >
            <span v-if="submitting" class="loading loading-spinner"></span>
            Submit
          </button>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="toast" class="toast toast-top toast-end">
      <div
        :class="`alert ${
          toast.type === 'error' ? 'alert-error' : 'alert-success'
        }`"
      >
        {{ toast.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import PocketBase from "pocketbase";
import TypeOfSupport from "./steps/TypeOfSupport.vue";
import ThematicAreas from "./steps/ThematicAreas.vue";
import Collaboration from "./steps/Collaboration.vue";

/* ─────────────────────────────────── Config ─────────────────────────────────── */
const PB_URL = "https://your-pocketbase-instance.com";
const pb = new PocketBase(PB_URL);
const COLLECTION = "rsmp_data";

/* ────────────────────────────── Static references ───────────────────────────── */
const orgTypes = ["Donor", "Implementing Partner", "Government"];
const levels = ["National", "State", "LGA"];
const campaigns = [
  "Measles Rubella",
  "Polio",
  "HPV",
  "NTDs",
  "Malaria",
  "Nutrition",
  "Routine Immunization",
  "Other",
];

/* Placeholder states/LGAs – replace with full list or fetch dynamically */
const NIGERIAN_STATES = ["Kaduna", "Lagos", "Abuja"];
const LGAS_BY_STATE = {
  Kaduna: ["Zaria", "Kaduna North", "Kaduna South"],
  Lagos: ["Ikeja", "Alimosho", "Eti‑Osa"],
  Abuja: ["Gwagwalada", "Kuje", "Abaji"],
};

/* ─────────────────────────────── Form reactive object ───────────────────────── */
const initial = {
  Name_of_Respondent: "",
  Designation_of_respondent: "",
  Name_of_Organization_Agency: "",
  Type_of_Organization_Agency: [],
  Start_date_of_support: "",
  End_date_of_support: "",
  Status_of_support: "",
  Level_of_support: [],
  States_supported: [],
  LGA_supported: [],
  Campaign_Focus: [],
  Campaign_Focus_Other: "",
  Type_of_Support: [], // handled in child component
  Who_is_the_Funder_of_your_project: "",
  Thematic_areas_supported: [], // handled in child component
  Key_Performance_Indicators: "",
  Are_you_collaborating_with_any_other_partners: "",
  List_the_Partners: [],
};

const form = reactive(JSON.parse(JSON.stringify(initial)));

/* ────────────────────────── Wizard bookkeeping ───────────────────────── */
const stepTitles = [
  "Respondent",
  "Timeline",
  "Scope",
  "Campaign",
  "Support Type",
  "Funders & KPI",
  "Thematic Areas",
  "Collaboration",
  "Review",
];
const step = ref(0);
const next = () =>
  (step.value = Math.min(step.value + 1, stepTitles.length - 1));
const prev = () => (step.value = Math.max(step.value - 1, 0));

/* ────────────────────────── Scope helpers ────────────────────────────── */
const stateSelection = ref([]);
const lgaSelection = reactive({}); // state -> [lgas]

watch(stateSelection, (val) => {
  // keep States_supported in sync
  form.States_supported = val.map((state) => ({ state }));
  // remove deselected states from lgaSelection
  Object.keys(lgaSelection).forEach((k) => {
    if (!val.includes(k)) delete lgaSelection[k];
  });
});

watch(lgaSelection, () => {
  form.LGA_supported = Object.entries(lgaSelection).flatMap(([state, lgas]) =>
    lgas.map((lga) => ({ state, lga }))
  );
});

/* ─────────────────────────── KPI helper ─────────────────────────────── */
const kpiHtml = ref("");
watch(kpiHtml, (v) => {
  form.Key_Performance_Indicators = `<div>${v}</div>`;
});

/* ───────────────────────────── Submission ────────────────────────────── */
const submitting = ref(false);
const toast = ref(null);

async function submit() {
  submitting.value = true;
  try {
    await pb.collection(COLLECTION).create(form);
    toast.value = { type: "success", message: "Submitted successfully!" };
    Object.assign(form, JSON.parse(JSON.stringify(initial))); // reset
    step.value = 0;
  } catch (err) {
    toast.value = {
      type: "error",
      message: err.message ?? "Error submitting form",
    };
  } finally {
    submitting.value = false;
    setTimeout(() => (toast.value = null), 5000);
  }
}
</script>

<style scoped>
/* Optional – make the steps numbers bigger */
.steps .step {
  font-size: 0;
}
.steps .step:before {
  content: attr(title);
  font-size: 1rem;
}
</style>
