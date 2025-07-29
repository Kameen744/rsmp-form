<template>
  <div class="form-container">
    <!-- Step Indicator -->
    <!-- <div class="step-indicator-container">
      <div class="step-indicator-line"></div>
      <div
        class="step"
        :class="{ active: currentStep === 1, completed: currentStep > 1 }"
        >1</div
      >
      <div
        class="step"
        :class="{ active: currentStep === 2, completed: currentStep > 2 }"
        >2</div
      >
      <div
        class="step"
        :class="{ active: currentStep === 3, completed: currentStep > 3 }"
        >3</div
      >
      <div
        class="step"
        :class="{ active: currentStep === 4, completed: currentStep > 4 }"
        >4</div
      >
      <div
        class="step"
        :class="{ active: currentStep === 5, completed: currentStep > 5 }"
        >5</div
      >
      <div
        class="step"
        :class="{ active: currentStep === 6, completed: currentStep > 6 }"
        >6</div
      >
      <div class="step" :class="{ active: currentStep === 7 }">7</div>
    </div> -->
    <div class="progress mb-4" style="height: 25px">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: progress + '%' }"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        Step {{ currentStep }} of {{ totalSteps }}
      </div>
    </div>

    <form @submit.prevent="submitForm">
      <!-- Step 1: Welcome -->
      <div
        class="form-step welcome-step"
        :class="{ active: currentStep === 1 }"
      >
        <h2 class="text-center mb-4">PARTNER RESOURCE MAPPING FORM</h2>
        <!-- <p
          >In line with Government’s plans for a successful integrated MR
          campaign, Sydani Group has been engaged to conduct a Partners’
          Resource Mapping to ensure coordinated planning, equitable resource
          distribution, and efficient execution of the integrated campaigns. We
          are conducting a comprehensive mapping of Government and Partner
          support across all levels.
        </p> -->
        <p
          >This form has been developed to document your organization’s role,
          scope of support, planned activities, and geographical areas of
          intervention during the integrated campaign. The information you
          provide will be used to strengthen coordination, minimize duplication,
          identify resource gaps, and promote accountability throughout the
          campaign lifecycle.</p
        >
        <p><strong>Kindly note: </strong></p>
        <ul>
          <li
            >Participation in this exercise is voluntary and non-binding however
            it is in your best interest to participate
          </li>
          <li
            >Please complete all sections of the form with clarity and accuracy
            to support transparent and evidence-informed planning
          </li>
          <li
            >The information provided will be treated with confidentiality and
            used solely for campaign coordination and planning purposes
          </li>
        </ul>
      </div>

      <!-- Step 2: Basic Information -->
      <div class="form-step" :class="{ active: currentStep === 2 }">
        <h4>Step 2: Respondent & Organization Details</h4>
        <div class="mb-3">
          <label for="Name_of_Respondent" class="form-label"
            >Name of Respondent</label
          >
          <input
            type="text"
            class="form-control"
            id="Name_of_Respondent"
            v-model="formData.Name_of_Respondent"
          />
        </div>
        <div class="mb-3">
          <label for="Designation_of_respondent" class="form-label"
            >Designation of Respondent</label
          >
          <input
            type="text"
            class="form-control"
            id="Designation_of_respondent"
            v-model="formData.Designation_of_respondent"
          />
        </div>
        <div class="mb-3">
          <label for="Name_of_Organization_Agency" class="form-label"
            >Name of Organization/Agency</label
          >
          <input
            type="text"
            class="form-control"
            id="Name_of_Organization_Agency"
            v-model="formData.Name_of_Organization_Agency"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Type of Organization/Agency</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="Type_of_Organization_Agency"
              id="donor"
              value="Donor"
              v-model="formData.Type_of_Organization_Agency"
            />
            <label class="form-check-label" for="donor">Donor</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="Type_of_Organization_Agency"
              id="implementing"
              value="Implementing Partner"
              v-model="formData.Type_of_Organization_Agency"
            />
            <label class="form-check-label" for="implementing"
              >Implementing Partner</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="Type_of_Organization_Agency"
              id="government"
              value="Government"
              v-model="formData.Type_of_Organization_Agency"
            />
            <label class="form-check-label" for="government">Government</label>
          </div>
        </div>
      </div>

      <!-- Step 3: Support Details -->
      <div class="form-step" :class="{ active: currentStep === 3 }">
        <h4>Step 3: Support Details</h4>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="Start_date_of_support" class="form-label"
              >Start Date of Support</label
            >
            <input
              type="date"
              class="form-control"
              id="Start_date_of_support"
              v-model="formData.Start_date_of_support"
            />
          </div>
          <div class="col-md-6 mb-3">
            <label for="End_date_of_support" class="form-label"
              >End Date of Support</label
            >
            <input
              type="date"
              class="form-control"
              id="End_date_of_support"
              v-model="formData.End_date_of_support"
            />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Status of Support</label>
          <select class="form-select" v-model="formData.Status_of_support">
            <option>Not started</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Level of Support</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="National"
              id="national"
              v-model="formData.Level_of_support"
            />
            <label class="form-check-label" for="national">National</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="State"
              id="state"
              v-model="formData.Level_of_support"
            />
            <label class="form-check-label" for="state">State</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="LGA"
              id="lga"
              v-model="formData.Level_of_support"
            />
            <label class="form-check-label" for="lga">LGA</label>
          </div>
        </div>
        <div v-if="formData.Level_of_support.includes('State')" class="mb-3">
          <label class="form-label">States Supported</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter states, comma separated"
            @change="updateStates"
          />
        </div>
        <div v-if="formData.Level_of_support.includes('LGA')" class="mb-3">
          <label class="form-label"
            >LGAs Supported (format: State,LGA; State,LGA)</label
          >
          <input
            type="text"
            class="form-control"
            placeholder="e.g., Kaduna,Zaria; Lagos,Ikeja"
            @change="updateLGAs"
          />
        </div>
      </div>

      <!-- Step 4: Campaign Focus -->
      <div class="form-step" :class="{ active: currentStep === 4 }">
        <h4>Step 4: Campaign Focus</h4>
        <div class="mb-3">
          <label class="form-label">Select Campaign Focus Areas</label>
          <div class="row">
            <div
              class="col-md-6"
              v-for="focus in campaignFocusOptions"
              :key="focus"
            >
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="focus"
                  :id="focus.toLowerCase()"
                  v-model="formData.Campaign_Focus"
                />
                <label class="form-check-label" :for="focus.toLowerCase()">{{
                  focus
                }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="Campaign_Focus_Other" class="form-label"
            >Other (Please specify)</label
          >
          <input
            type="text"
            class="form-control"
            id="Campaign_Focus_Other"
            v-model="formData.Campaign_Focus_Other"
          />
        </div>
      </div>

      <!-- Step 5: Type of Support -->
      <div class="form-step" :class="{ active: currentStep === 5 }">
        <h4>Step 5: Type of Support</h4>
        <div
          v-for="(support, index) in typeOfSupportOptions"
          :key="index"
          class="card"
        >
          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :id="'support_' + index"
                @change="toggleSupport(support.name)"
              />
              <label class="form-check-label h5" :for="'support_' + index">{{
                support.name
              }}</label>
            </div>
            <div v-if="isSupportSelected(support.name)" class="mt-3">
              <div v-if="support.name === 'Technical Support'">
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="personnel_deployed"
                    v-model="getSupport('Technical Support').personnel_deployed"
                  />
                  <label class="form-check-label" for="personnel_deployed"
                    >Was any personnel deployed?</label
                  >
                </div>
                <div v-if="getSupport('Technical Support').personnel_deployed">
                  <div class="mb-2">
                    <label for="number_of_personnel" class="form-label"
                      >Number of Personnel</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="number_of_personnel"
                      v-model.number="
                        getSupport('Technical Support').number_of_personnel
                      "
                    />
                  </div>
                  <div>
                    <label class="form-label"
                      >Deployment States (comma separated)</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      @change="updateDeploymentStates"
                    />
                  </div>
                </div>
              </div>
              <div v-if="support.name === 'Funding'">
                <label class="form-label"
                  >Organizations Funded (comma separated)</label
                >
                <input
                  type="text"
                  class="form-control"
                  @change="updateFundedOrgs"
                />
              </div>
              <div v-if="support.name === 'Provision of Commodities'">
                <label class="form-label"
                  >Commodities Supplied (comma separated)</label
                >
                <input
                  type="text"
                  class="form-control"
                  @change="updateCommodities"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 mt-4">
          <label for="Who_is_the_Funder_of_your_project" class="form-label"
            >Who is the Funder of your project?</label
          >
          <input
            type="text"
            class="form-control"
            id="Who_is_the_Funder_of_your_project"
            v-model="formData.Who_is_the_Funder_of_your_project"
          />
        </div>
      </div>

      <!-- Step 6: Thematic Areas -->
      <div class="form-step" :class="{ active: currentStep === 6 }">
        <h4>Step 6: Thematic Areas Supported</h4>
        <div
          v-for="(theme, themeIndex) in thematicAreasOptions"
          :key="themeIndex"
          class="card"
        >
          <div class="card-header">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :id="'theme_' + themeIndex"
                @change="toggleThematicArea(theme.area)"
              />
              <label class="form-check-label h6" :for="'theme_' + themeIndex">{{
                theme.area
              }}</label>
            </div>
          </div>
          <div v-if="isThematicAreaSelected(theme.area)" class="card-body">
            <div class="row">
              <div
                class="col-md-6"
                v-for="(sub, subIndex) in theme.sub_areas"
                :key="subIndex"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="sub"
                    :id="'sub_' + themeIndex + '_' + subIndex"
                    v-model="getThematicArea(theme.area).sub_areas"
                  />
                  <label
                    class="form-check-label"
                    :for="'sub_' + themeIndex + '_' + subIndex"
                    >{{ sub.replace("Other: ", "") }}</label
                  >
                </div>
                <input
                  v-if="sub.startsWith('Other:')"
                  type="text"
                  class="form-control form-control-sm mt-1"
                  placeholder="Please specify"
                  @change="updateThematicOther($event, theme.area, sub)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 7: KPIs & Collaboration -->
      <div class="form-step" :class="{ active: currentStep === 7 }">
        <h4>Step 7: KPIs & Collaboration</h4>
        <div class="mb-3">
          <label for="Key_Performance_Indicators" class="form-label"
            >Key Performance Indicators (KPIs)</label
          >
          <textarea
            class="form-control"
            id="Key_Performance_Indicators"
            rows="4"
            v-model="formData.Key_Performance_Indicators"
            placeholder="e.g., Number of States that have released counterpart funding..."
          ></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label"
            >Are you collaborating with any other partners?</label
          >
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="collaboration"
              id="collab_yes"
              value="Yes"
              v-model="formData.Are_you_collaborating_with_any_other_partners"
            />
            <label class="form-check-label" for="collab_yes">Yes</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="collaboration"
              id="collab_no"
              value="No"
              v-model="formData.Are_you_collaborating_with_any_other_partners"
            />
            <label class="form-check-label" for="collab_no">No</label>
          </div>
        </div>
        <div
          v-if="
            formData.Are_you_collaborating_with_any_other_partners === 'Yes'
          "
          class="mb-3"
        >
          <label class="form-label">List the Partners</label>
          <div class="row">
            <div
              class="col-md-4"
              v-for="partner in partnerOptions"
              :key="partner"
            >
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="partner"
                  :id="partner.toLowerCase()"
                  v-model="formData.List_the_Partners"
                />
                <label class="form-check-label" :for="partner.toLowerCase()">{{
                  partner
                }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="d-flex justify-content-between mt-5">
        <button
          type="button"
          class="btn btn-secondary"
          @click="prevStep"
          :disabled="currentStep === 1"
          >Previous</button
        >
        <button
          type="button"
          class="btn btn-primary"
          @click="nextStep"
          v-if="currentStep < totalSteps"
          >Next</button
        >
        <button
          type="submit"
          class="btn btn-success"
          v-if="currentStep === totalSteps"
          >Submit</button
        >
      </div>
    </form>

    <!-- Success Message -->
    <div id="successMessage" class="alert alert-success mt-4" role="alert">
      <strong>Success!</strong> Your form has been submitted. Thank you.
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import PocketBase from "pocketbase";

// const pb = new PocketBase("http://127.0.0.1:8090");
const pb = new PocketBase("https://pb-api.resourcetrackr.com");
const collectionName = "rsmp_data";

const currentStep = ref(1);
const totalSteps = 7; // Increased total steps
const progress = computed(() => (currentStep.value / totalSteps) * 100);

const formData = reactive({
  Name_of_Respondent: "",
  Designation_of_respondent: "",
  Name_of_Organization_Agency: "",
  Type_of_Organization_Agency: "",
  Start_date_of_support: "",
  End_date_of_support: "",
  Status_of_support: "Not started",
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
});

const campaignFocusOptions = [
  "Measles Rubella",
  "Polio",
  "HPV",
  "NTDs",
  "Malaria",
  "Nutrition",
  "Routine Immunization",
];
const partnerOptions = [
  "UNICEF",
  "WHO",
  "USCDC",
  "AFFENET",
  "Red Cross",
  "IVAC",
  "C-WINS",
  "e-Health Africa",
  "SCIDAR",
  "GRID3",
  "CHAI",
  "McKinsey",
  "McKing",
  "Acasus",
  "Sydani Group",
  "Others",
];
const typeOfSupportOptions = [
  { name: "Technical Support", details: {} },
  { name: "Funding", details: {} },
  { name: "Provision of Commodities", details: {} },
];
const thematicAreasOptions = [
  {
    area: "Planning and Coordination",
    sub_areas: [
      "Microplanning",
      "Technical Working Group",
      "Readiness dashboard",
      "Other: ",
    ],
  },
  {
    area: "Service Delivery",
    sub_areas: [
      "Training",
      "Health workers’ team deployment",
      "Supportive supervision",
      "Other: ",
    ],
  },
  {
    area: "ACSM",
    sub_areas: [
      "Program Advocacy",
      "Media Advocacy",
      "Risk and Crisis communication",
      "Social Mobilization",
      "Other: ",
    ],
  },
  {
    area: "MERLA",
    sub_areas: [
      "Data Management",
      "Research",
      "Knowledge management and learning",
      "Other: ",
    ],
  },
  {
    area: "Cold chain/Logistics",
    sub_areas: [
      "Vaccine and commodities deployment",
      "Waste Management",
      "Transportation",
      "Other: ",
    ],
  },
  {
    area: "Finance",
    sub_areas: [
      "Donor",
      "Payments - Social Mobilization",
      "Payments - Training",
      "Payments - Logistics",
      "Payments - Vaccination Teams",
      "Other: ",
    ],
  },
  { area: "Surveillance", sub_areas: ["AEFI", "Other: "] },
];

const nextStep = () => {
  if (currentStep.value < totalSteps) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--;
};

const updateStates = (event) => {
  const states = event.target.value
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s);
  formData.States_supported = states.map((state) => ({ state }));
};

const updateLGAs = (event) => {
  const lgas = event.target.value
    .split(";")
    .map((l) => l.trim())
    .filter((l) => l);
  formData.LGA_supported = lgas.map((lga) => {
    const [state, lgaName] = lga.split(",").map((s) => s.trim());
    return { state, lga: lgaName };
  });
};

const toggleSupport = (supportType) => {
  const index = formData.Type_of_Support.findIndex(
    (s) => s.support_type === supportType
  );
  if (index > -1) {
    formData.Type_of_Support.splice(index, 1);
  } else {
    let newSupport = { support_type: supportType };
    if (supportType === "Technical Support") {
      newSupport.personnel_deployed = false;
      newSupport.number_of_personnel = 0;
      newSupport.deployment_states = [];
    }
    if (supportType === "Funding") {
      newSupport.organizations_funded = [];
    }
    if (supportType === "Provision of Commodities") {
      newSupport.commodities_supplied = [];
    }
    formData.Type_of_Support.push(newSupport);
  }
};

const isSupportSelected = (supportType) => {
  return formData.Type_of_Support.some((s) => s.support_type === supportType);
};

const getSupport = (supportType) => {
  return formData.Type_of_Support.find((s) => s.support_type === supportType);
};

const updateDeploymentStates = (event) => {
  const support = getSupport("Technical Support");
  if (support) {
    support.deployment_states = event.target.value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);
  }
};

const updateFundedOrgs = (event) => {
  const support = getSupport("Funding");
  if (support) {
    support.organizations_funded = event.target.value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);
  }
};

const updateCommodities = (event) => {
  const support = getSupport("Provision of Commodities");
  if (support) {
    support.commodities_supplied = event.target.value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);
  }
};

const toggleThematicArea = (areaName) => {
  const index = formData.Thematic_areas_supported.findIndex(
    (a) => a.area === areaName
  );
  if (index > -1) {
    formData.Thematic_areas_supported.splice(index, 1);
  } else {
    formData.Thematic_areas_supported.push({ area: areaName, sub_areas: [] });
  }
};

const isThematicAreaSelected = (areaName) => {
  return formData.Thematic_areas_supported.some((a) => a.area === areaName);
};

const getThematicArea = (areaName) => {
  return formData.Thematic_areas_supported.find((a) => a.area === areaName);
};

const updateThematicOther = (event, areaName, subAreaTemplate) => {
  const area = getThematicArea(areaName);
  if (area) {
    const otherIndex = area.sub_areas.findIndex((sa) =>
      sa.startsWith("Other:")
    );
    if (otherIndex > -1) {
      area.sub_areas.splice(otherIndex, 1);
    }
    area.sub_areas.push(`Other: ${event.target.value}`);
  }
};

const submitForm = async () => {
  const formJsonData = JSON.parse(JSON.stringify(formData));
  const record = await pb.collection("rsmp_data").create(formJsonData);
  console.log("Form data to be submitted:", record);
  const successMessage = document.getElementById("successMessage");
  if (successMessage) successMessage.style.display = "block";

  setTimeout(() => {
    if (successMessage) successMessage.style.display = "none";
    currentStep.value = 1;

    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key] = [];
      } else if (typeof formData[key] === "string") {
        formData[key] = "";
      }
    });
    formData.Status_of_support = "Not started";
    formData.Are_you_collaborating_with_any_other_partners = "No";
  }, 5000);
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
  background-color: #f8f9fa;
}
#app {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align to top to see full form */
  min-height: 100vh;
  padding: 1rem;
}
.form-container {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.form-step {
  display: none;
}
.form-step.active {
  display: block;
}
.step-indicator-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
}
.step-indicator-line {
  position: absolute;
  top: 50%;
  left: 15%;
  right: 15%;
  height: 2px;
  background-color: #e9ecef;
  z-index: 1;
}
.step {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e9ecef;
  color: #6c757d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  z-index: 2;
  margin: 0 1rem;
  transition: background-color 0.3s, color 0.3s;
}
.step.active {
  background-color: #0d6efd;
  color: white;
}
.step.completed {
  background-color: #0d6efd;
  color: white;
}
.form-header h2 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.form-header p {
  color: #6c757d;
}
.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
}
.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
}
.form-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.form-check-label {
  font-weight: 500;
}
.card {
  margin-bottom: 1.5rem;
}
.alert-success {
  display: none;
  margin-top: 2rem;
}
.welcome-step p {
  line-height: 1.8;
  color: #495057;
}
</style>
