<template>
  <!-- Main Application Container -->

  <!-- <div class="card shadow-lg border-0 rounded-4">
    
  </div> -->
  <div class="row d-flex justify-content-center">
    <div class="pt-2 p-sm-3 col-md-6">
      <!-- Header Section -->

      <div class="text-center">
        <!-- <i class="bi bi-journal-text text-primary" style="font-size: 3rem"></i> -->
        <h1 class="mt-3">Partner Resource Mapping</h1>
        <p class="lead text-muted"
          >Integrated Measles-Rubella (MR) Campaign Coordination</p
        >
      </div>

      <!-- Stepper Navigation -->
      <div class="mt-2">
        <ol class="d-flex align-items-center justify-content-center px-0">
          <template v-for="(step, index) in steps" :key="step.id">
            <li class="d-flex flex-column align-items-center">
              <button
                @click="currentStep = index"
                :disabled="index > maxStep"
                :class="[
                  'btn rounded-circle d-flex align-items-center justify-content-center',
                  currentStep === index ? 'btn-primary' : '',
                  currentStep > index ? 'btn-success' : '',
                  currentStep < index && index <= maxStep
                    ? 'btn-secondary'
                    : '',
                  currentStep < index && index > maxStep
                    ? 'btn-light border'
                    : '',
                ]"
                style="width: 2.5rem; height: 2.5rem"
              >
                <i v-if="currentStep > index" class="bi bi-check-lg"></i>
                <span v-else>{{ index + 1 }}</span>
              </button>
              <span
                class="d-none d-sm-block small mt-2"
                :class="{ 'fw-bold': currentStep === index }"
                >{{ step.name }}</span
              >
            </li>
            <li
              v-if="index < steps.length - 1"
              class="stepper-line mx-3"
              :class="
                currentStep > index ? 'bg-success' : 'bg-secondary-subtle'
              "
            ></li>
          </template>
        </ol>
      </div>

      <!-- Form Content -->
      <form @submit.prevent="submitForm" class="mt-5">
        <!-- Step 1: Introduction -->
        <transition name="fade">
          <div v-if="currentStep === 0">
            <div class="bg-light rounded-3 text-dark">
              <h3 class="h5">Welcome</h3>
              <p
                >The Gates Foundation has engaged Sydani Group to conduct a
                Partner Resource Mapping to ensure coordinated planning,
                equitable resource distribution, and efficient execution of the
                Integrated Measles-Rubella (MR) Campaign.</p
              >
              <p
                >This form will document your organization’s role, scope of
                support, planned activities, and geographical areas of
                intervention.</p
              >

              <ul class="small">
                <li>Participation is voluntary and non-binding.</li>
                <li>Please complete all sections with clarity and accuracy.</li>
                <li
                  >The information provided will be treated with
                  confidentiality.</li
                >
              </ul>
            </div>
          </div>
        </transition>

        <!-- Step 2: Respondent & Organization Details -->
        <transition name="fade">
          <div v-if="currentStep === 1">
            <h2 class="fs-4 fw-semibold border-bottom pb-2 mb-4"
              >1. Organization Details</h2
            >
            <div class="mb-3">
              <label for="respondentName" class="form-label"
                >Name of Respondent</label
              >
              <input
                type="text"
                v-model="form.respondentName"
                id="respondentName"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="respondentDesignation" class="form-label"
                >Designation of Respondent</label
              >
              <input
                type="text"
                v-model="form.respondentDesignation"
                id="respondentDesignation"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="organizationName" class="form-label"
                >Name of Organization/Agency</label
              >
              <input
                type="text"
                v-model="form.organizationName"
                id="organizationName"
                class="form-control"
                required
              />
            </div>
            <div>
              <label class="form-label">Type of Organization/Agency</label>
              <div class="btn-group w-100" role="group">
                <template
                  v-for="orgType in options.organizationTypes"
                  :key="orgType"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    :value="orgType"
                    v-model="form.organizationType"
                    :id="'orgType-' + orgType"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-primary"
                    :for="'orgType-' + orgType"
                    >{{ orgType }}</label
                  >
                </template>
              </div>
            </div>
          </div>
        </transition>

        <!-- Step 3: Scope of Support -->
        <transition name="fade">
          <div v-if="currentStep === 2">
            <h2 class="fs-4 fw-semibold border-bottom pb-2 mb-4"
              >2. Scope of Support</h2
            >
            <div class="row g-3 mb-3">
              <div class="col-md-6">
                <label for="supportStartDate" class="form-label"
                  >Start date of support</label
                >
                <input
                  type="date"
                  v-model="form.supportStartDate"
                  id="supportStartDate"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="supportEndDate" class="form-label"
                  >End date of support</label
                >
                <input
                  type="date"
                  v-model="form.supportEndDate"
                  id="supportEndDate"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Status of support</label>
              <div class="btn-group w-100" role="group">
                <template v-for="status in options.supportStatus" :key="status">
                  <input
                    type="radio"
                    class="btn-check"
                    :value="status"
                    v-model="form.supportStatus"
                    :id="'status-' + status"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-primary"
                    :for="'status-' + status"
                    >{{ status }}</label
                  >
                </template>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Level of support (select all that apply)</label
              >
              <div class="mt-2">
                <div
                  v-for="level in options.supportLevels"
                  :key="level"
                  class="form-check"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="level"
                    v-model="form.supportLevels"
                    :id="'level-' + level"
                  />
                  <label class="form-check-label" :for="'level-' + level">{{
                    level
                  }}</label>
                </div>
              </div>
            </div>
            <div
              v-if="form.supportLevels.includes('State')"
              class="p-3 rounded bg-primary-subtle mb-3"
            >
              <label for="supportedStates" class="form-label"
                >States supported? (comma-separated)</label
              >
              <input
                type="text"
                v-model="form.supportedStates"
                id="supportedStates"
                placeholder="e.g., Lagos, Kano, Rivers"
                class="form-control"
              />
            </div>
            <div
              v-if="form.supportLevels.includes('LGA')"
              class="p-3 rounded bg-primary-subtle"
            >
              <label for="supportedLGAs" class="form-label"
                >LGAs supported? (comma-separated)</label
              >
              <input
                type="text"
                v-model="form.supportedLGAs"
                id="supportedLGAs"
                placeholder="e.g., Ikeja, Fagge, Port Harcourt"
                class="form-control"
              />
            </div>
          </div>
        </transition>

        <!-- Step 4: Campaign & Thematic Focus -->
        <transition name="fade">
          <div v-if="currentStep === 3">
            <h2 class="fs-4 fw-semibold border-bottom pb-2 mb-4"
              >3. Campaign & Thematic Focus</h2
            >
            <div class="mb-4">
              <label class="form-label"
                >Campaign Focus? (select all that apply)</label
              >
              <div class="row">
                <div
                  v-for="focus in options.campaignFocus"
                  :key="focus"
                  class="col-md-4 col-6"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="focus"
                      v-model="form.campaignFocus"
                      :id="'focus-' + focus"
                    />
                    <label class="form-check-label" :for="'focus-' + focus">{{
                      focus
                    }}</label>
                  </div>
                </div>
              </div>
              <div v-if="form.campaignFocus.includes('Other')" class="mt-3">
                <label for="otherCampaignFocus" class="form-label"
                  >If Other, please explain:</label
                >
                <input
                  type="text"
                  v-model="form.otherCampaignFocus"
                  id="otherCampaignFocus"
                  class="form-control"
                />
              </div>
            </div>
            <div>
              <label class="form-label"
                >Thematic areas supported? (select all that apply)</label
              >
              <div class="mt-2">
                <div
                  v-for="(group, groupName) in options.thematicAreas"
                  :key="groupName"
                  class="mb-3"
                >
                  <h4 class="fs-6 fw-semibold">{{ groupName }}</h4>
                  <div class="ps-3 border-start border-2 border-primary-subtle">
                    <div
                      v-for="area in group.items"
                      :key="area"
                      class="form-check"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :value="area"
                        v-model="form.thematicAreas"
                        :id="'theme-' + area"
                      />
                      <label class="form-check-label" :for="'theme-' + area">{{
                        area
                      }}</label>
                    </div>
                    <div v-if="group.hasOther" class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :value="groupName + ' - Other'"
                        v-model="form.thematicAreas"
                        :id="'theme-other-' + groupName"
                      />
                      <label
                        class="form-check-label"
                        :for="'theme-other-' + groupName"
                        >Others, specify</label
                      >
                      <input
                        v-if="
                          form.thematicAreas.includes(groupName + ' - Other')
                        "
                        type="text"
                        v-model="form.otherThematicAreas[groupName]"
                        class="form-control form-control-sm mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Step 5: Technical Support & Funding -->
        <transition name="fade">
          <div v-if="currentStep === 4">
            <h2 class="fs-4 fw-semibold border-bottom pb-2 mb-4"
              >4. Technical Support & Funding</h2
            >
            <div class="mb-3">
              <label class="form-label"
                >Was any personnel deployed for the campaign?</label
              >
              <div class="btn-group w-100" role="group">
                <input
                  type="radio"
                  class="btn-check"
                  :value="true"
                  v-model="form.personnelDeployed"
                  id="personnel-yes"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="personnel-yes"
                  >Yes</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  :value="false"
                  v-model="form.personnelDeployed"
                  id="personnel-no"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="personnel-no"
                  >No</label
                >
              </div>
            </div>
            <div
              v-if="form.personnelDeployed"
              class="p-3 rounded bg-primary-subtle mb-3"
            >
              <div class="mb-3">
                <label for="personnelCount" class="form-label"
                  >How many TA/personnel did you deploy?</label
                >
                <input
                  type="number"
                  v-model.number="form.personnelCount"
                  id="personnelCount"
                  class="form-control"
                  min="1"
                />
              </div>
              <div>
                <label for="personnelStates" class="form-label"
                  >What states were they deployed to? (comma-separated)</label
                >
                <input
                  type="text"
                  v-model="form.personnelStates"
                  id="personnelStates"
                  placeholder="e.g., Abuja (FCT), Borno, Yobe"
                  class="form-control"
                />
              </div>
            </div>
            <div>
              <label for="funderName" class="form-label"
                >Who is the Funder of your project?</label
              >
              <input
                type="text"
                v-model="form.funderName"
                id="funderName"
                class="form-control"
              />
            </div>
          </div>
        </transition>

        <!-- Step 6: KPIs & Collaboration -->
        <transition name="fade">
          <div v-if="currentStep === 5">
            <h2 class="fs-4 fw-semibold border-bottom pb-2 mb-4"
              >5. KPIs & Collaboration</h2
            >
            <div class="mb-3">
              <label for="kpis" class="form-label"
                >Key Performance Indicators (KPIs)</label
              >
              <p class="form-text mt-0 mb-1"
                >e.g. Number of States that have released counterpart funding,
                Number of states that have received IEC materials</p
              >
              <textarea
                v-model="form.kpis"
                id="kpis"
                rows="4"
                class="form-control"
              ></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Are you collaborating with any other partners?</label
              >
              <div class="btn-group w-100" role="group">
                <input
                  type="radio"
                  class="btn-check"
                  :value="true"
                  v-model="form.isCollaborating"
                  id="collab-yes"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="collab-yes"
                  >Yes</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  :value="false"
                  v-model="form.isCollaborating"
                  id="collab-no"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="collab-no"
                  >No</label
                >
              </div>
            </div>
            <div
              v-if="form.isCollaborating"
              class="p-3 rounded bg-primary-subtle"
            >
              <label class="form-label"
                >List the Partners (select all that apply)</label
              >
              <div class="row">
                <div
                  v-for="partner in options.partners"
                  :key="partner"
                  class="col-md-4 col-6"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="partner"
                      v-model="form.collaboratingPartners"
                      :id="'partner-' + partner"
                    />
                    <label
                      class="form-check-label"
                      :for="'partner-' + partner"
                      >{{ partner }}</label
                    >
                  </div>
                </div>
              </div>
              <div
                v-if="form.collaboratingPartners.includes('Others')"
                class="mt-3"
              >
                <label for="otherPartners" class="form-label"
                  >If Other partners, please specify:</label
                >
                <input
                  type="text"
                  v-model="form.otherPartners"
                  id="otherPartners"
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- Step 7: Review & Submit -->
        <transition name="fade">
          <div v-if="currentStep === 6">
            <h2 class="fs-4 fw-semibold border-bottom pb-2 mb-4"
              >6. Review and Submit</h2
            >
            <div class="p-4 bg-light rounded border">
              <h3 class="h5">Please review your answers before submitting.</h3>
              <dl class="row mt-3">
                <template v-for="(value, key) in reviewData" :key="key">
                  <dt class="col-sm-4 fw-semibold text-muted">{{ key }}</dt>
                  <dd class="col-sm-8 mb-2">{{ value || "Not provided" }}</dd>
                </template>
              </dl>
            </div>
            <div
              class="alert alert-warning d-flex align-items-center mt-4"
              role="alert"
            >
              <i class="bi bi-exclamation-triangle-fill me-2"></i>
              <div>
                By clicking "Submit Form", you confirm that the information
                provided is accurate to the best of your knowledge.
              </div>
            </div>
          </div>
        </transition>

        <!-- Submission Success/Error Message -->
        <div
          v-if="submissionStatus"
          class="alert mt-4"
          :class="
            submissionStatus === 'success' ? 'alert-success' : 'alert-danger'
          "
        >
          {{ submissionMessage }}
        </div>

        <!-- Navigation Buttons -->
        <div class="d-flex justify-content-between pt-4 border-top mt-5">
          <button
            type="button"
            @click="prevStep"
            v-if="currentStep > 0 && !submissionStatus"
            class="btn btn-secondary"
          >
            <i class="bi bi-arrow-left me-2"></i>Back
          </button>
          <div v-else></div>
          <!-- Placeholder to keep "Next" on the right -->

          <button
            type="button"
            @click="nextStep"
            v-if="currentStep < steps.length - 1"
            class="btn btn-primary"
          >
            Next<i class="bi bi-arrow-right ms-2"></i>
          </button>

          <button
            type="submit"
            v-if="currentStep === steps.length - 1 && !submissionStatus"
            :disabled="isLoading"
            class="btn btn-success"
          >
            <span
              v-if="isLoading"
              class="spinner-border spinner-border-sm me-2"
              aria-hidden="true"
            ></span>
            {{ isLoading ? "Submitting..." : "Submit Form" }}
          </button>
        </div>
      </form>
    </div>
  </div>
  <footer class="text-center mt-5 text-muted small">
    <p>A Sydani Group initiative for the Gates Foundation.</p>
  </footer>
</template>

<script setup>
import PocketBase from "pocketbase";
import { ref, reactive, computed, watch } from "vue";

const pb = new PocketBase("http://127.0.0.1:8090");

const COLLECTION_NAME = "partner_resources";

// --- FORM STATE MANAGEMENT ---
const currentStep = ref(0);
const maxStep = ref(0);
const isLoading = ref(false);
const submissionStatus = ref(null); // null, 'success', or 'error'
const submissionMessage = ref("");

const steps = [
  { id: "intro", name: "Intro" },
  { id: "org", name: "Organization" },
  { id: "scope", name: "Scope" },
  { id: "focus", name: "Focus" },
  { id: "tech", name: "Support" },
  { id: "kpi", name: "KPIs" },
  { id: "review", name: "Review" },
];

// Reactive object to hold all form data
const form = reactive({
  respondentName: "",
  respondentDesignation: "",
  organizationName: "",
  organizationType: "Implementing Partner",
  supportStartDate: "",
  supportEndDate: "",
  supportStatus: "Not started",
  supportLevels: [],
  supportedStates: "",
  supportedLGAs: "",
  campaignFocus: [],
  otherCampaignFocus: "",
  thematicAreas: [],
  otherThematicAreas: {},
  personnelDeployed: null,
  personnelCount: null,
  personnelStates: "",
  funderName: "",
  kpis: "",
  isCollaborating: null,
  collaboratingPartners: [],
  otherPartners: "",
});

// Options for select, radio, and checkbox fields
const options = {
  organizationTypes: ["Donor", "Implementing Partner", "Government"],
  supportStatus: ["Not started", "In Progress", "Completed"],
  supportLevels: ["National", "State", "LGA"],
  campaignFocus: [
    "Measles Rubella",
    "Polio",
    "HPV",
    "NTDs",
    "Malaria",
    "Nutrition",
    "Routine Immunization",
    "Other",
  ],
  thematicAreas: {
    "Planning and Coordination": {
      items: [
        "Microplanning",
        "Technical Working Group",
        "Readiness dashboard",
      ],
      hasOther: true,
    },
    "Service Delivery": {
      items: [
        "Training",
        "HCW team deployment",
        "Supportive supervision",
        "Monitoring and Accountability",
      ],
      hasOther: true,
    },
    ACSM: {
      items: [
        "Program Advocacy",
        "Media Advocacy",
        "Communication",
        "Risk and Crisis communication",
        "Social Mobilization",
      ],
      hasOther: true,
    },
    MERLA: {
      items: [
        "Data Management",
        "Research",
        "Knowledge management and learning",
      ],
      hasOther: true,
    },
    "Cold chain/Logistics": {
      items: [
        "Vaccine and commodities deployment",
        "Waste Management",
        "Transportation",
      ],
      hasOther: true,
    },
    Finance: {
      items: [
        "Donor",
        "Payments",
        "Social Mobilization",
        "Logistics",
        "Training",
        "Vaccination Teams Payment",
      ],
      hasOther: true,
    },
    AEFI: { items: ["Reporting", "Detection"], hasOther: true },
  },
  partners: [
    "WHO",
    "UNICEF",
    "USCDC",
    "AFFENET",
    "Red Cross",
    "IVAC",
    "C-WINS",
    "e-Health Africa",
    "SOLINA",
    "Grid 3",
    "CHAI",
    "McKinsey",
    "McKing",
    "Acasus",
    "Others",
  ],
};

// --- NAVIGATION LOGIC ---
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
    if (currentStep.value > maxStep.value) {
      maxStep.value = currentStep.value;
    }
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

// Watch for step changes to scroll to top
watch(currentStep, () => {
  window.scrollTo(0, 0);
});

// --- DATA HANDLING & SUBMISSION ---

// Computed property to format data for the review step
const reviewData = computed(() => {
  const data = {
    "Respondent Name": form.respondentName,
    "Respondent Designation": form.respondentDesignation,
    "Organization Name": form.organizationName,
    "Organization Type": form.organizationType,
    "Support Start Date": form.supportStartDate,
    "Support End Date": form.supportEndDate,
    "Support Status": form.supportStatus,
    "Support Levels": form.supportLevels.join(", ") || "None",
    "Campaign Focus": form.campaignFocus.join(", ") || "None",
    "Thematic Areas": form.thematicAreas.join(", ") || "None",
    "Personnel Deployed":
      form.personnelDeployed === null
        ? "Not specified"
        : form.personnelDeployed
        ? "Yes"
        : "No",
    Funder: form.funderName,
    Collaborating:
      form.isCollaborating === null
        ? "Not specified"
        : form.isCollaborating
        ? "Yes"
        : "No",
  };
  if (form.supportLevels.includes("State"))
    data["Supported States"] = form.supportedStates;
  if (form.supportLevels.includes("LGA"))
    data["Supported LGAs"] = form.supportedLGAs;
  if (form.personnelDeployed) {
    data["Personnel Count"] = form.personnelCount;
    data["Personnel Deployed To"] = form.personnelStates;
  }
  if (form.isCollaborating)
    data["Collaborating Partners"] = form.collaboratingPartners.join(", ");
  if (form.kpis) data["KPIs"] = form.kpis;

  return data;
});

// Main submission function
const submitForm = async () => {
  isLoading.value = true;
  submissionStatus.value = null;
  submissionMessage.value = "";

  // Prepare data for PocketBase. It's good practice to create a clean
  // copy to avoid sending any extra reactive properties from Vue.
  const dataToSend = { ...form };

  try {
    // This is the API call to your PocketBase collection
    // const record = await pb.collection(COLLECTION_NAME).create(dataToSend);

    console.log("Successfully submitted to PocketBase:", record);
    submissionStatus.value = "success";
    submissionMessage.value =
      "Thank you! Your submission has been received successfully.";
  } catch (error) {
    console.error("PocketBase submission error:", error);
    submissionStatus.value = "error";
    submissionMessage.value = `Submission failed. Please try again. Error: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};
</script>
