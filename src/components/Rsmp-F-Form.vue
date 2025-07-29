<template>
  <div class="container my-5">
    <div class="card p-4 shadow-sm">
      <h2 class="card-title text-center mb-4">PARTNER RESOURCE MAPPING FORM</h2>
      <p class="text-muted text-center mb-4">
        [cite_start]In line with Government's plans for a successful integrated
        MR campaign, Sydani Group has been engaged to conduct a Partners'
        Resource Mapping to ensure coordinated planning, equitable resource
        distribution, and efficient execution of the integrated campaigns.
        [cite: 2]
      </p>
      <p class="text-muted text-center mb-4">
        [cite_start]This form has been developed to document your organization's
        role, scope of support, planned activities, and geographical areas of
        intervention during the integrated campaign. [cite: 4] [cite_start]The
        information you provide will be used to strengthen coordination,
        minimize duplication, identify resource gaps, and promote accountability
        throughout the campaign lifecycle. [cite: 5]
      </p>

      <div class="alert alert-info" role="alert">
        [cite_start]<h5 class="alert-heading">Kindly note: [cite: 6]</h5>
        <ul>
          [cite_start]<li
            >Participation in this exercise is voluntary and non-binding however
            it is in your best interest to participate. [cite: 8]</li
          >
          [cite_start]<li
            >Please complete all sections of the form with clarity and accuracy
            to support transparent and evidence-informed planning. [cite: 9]</li
          >
          [cite_start]<li
            >The information provided will be treated with confidentiality and
            used solely for campaign coordination and planning purposes. [cite:
            10]</li
          >
        </ul>
      </div>

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

      <form @submit.prevent="nextStep">
        <div v-show="currentStep === 1">
          <h3>Step 1: Basic Information</h3>
          <div class="mb-3">
            <label for="nameOfRespondent" class="form-label"
              >1. Name of Respondent <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="nameOfRespondent"
              v-model="formData.Name_of_Respondent"
              required
            />
          </div>
          <div class="mb-3">
            <label for="designationOfRespondent" class="form-label"
              >2. Designation of respondent
              <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="designationOfRespondent"
              v-model="formData.Designation_of_respondent"
              required
            />
          </div>
          <div class="mb-3">
            <label for="nameOfOrganizationAgency" class="form-label"
              >3. Name of Organization/Agency
              <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="nameOfOrganizationAgency"
              v-model="formData.Name_of_Organization_Agency"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label"
              >4. Type of Organization/Agency (Single Choice)
              <span class="text-danger">*</span></label
            >
            <div
              v-for="type in ['Donor', 'Implementing Partner', 'Government']"
              :key="type"
              class="form-check"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="type"
                :id="`typeOfOrg-${type}`"
                v-model="formData.Type_of_Organization_Agency"
              />
              <label class="form-check-label" :for="`typeOfOrg-${type}`">
                [cite_start]{{ type }} [cite: 16, 17, 18]
              </label>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">Next</button>
          </div>
        </div>

        <div v-show="currentStep === 2">
          <h3>Step 2: Support Details</h3>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="startDateOfSupport" class="form-label"
                >5. Start date of support
                <span class="text-danger">*</span></label
              >
              <input
                type="date"
                class="form-control"
                id="startDateOfSupport"
                v-model="formattedStartDate"
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="endDateOfSupport" class="form-label"
                >6. End date of support
                <span class="text-danger">*</span></label
              >
              <input
                type="date"
                class="form-control"
                id="endDateOfSupport"
                v-model="formattedEndDate"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label"
              >7. Status of support <span class="text-danger">*</span></label
            >
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="statusNotStarted"
                value="Not started"
                v-model="formData.Status_of_support"
                required
              />
              [cite_start]<label class="form-check-label" for="statusNotStarted"
                >Not started [cite: 23]</label
              >
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="statusInProgress"
                value="In Progress"
                v-model="formData.Status_of_support"
              />
              [cite_start]<label class="form-check-label" for="statusInProgress"
                >In Progress [cite: 24]</label
              >
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="statusCompleted"
                value="Completed"
                v-model="formData.Status_of_support"
              />
              [cite_start]<label class="form-check-label" for="statusCompleted"
                >Completed [cite: 25]</label
              >
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label"
              >8. Level of support (Multiple Choice)
              <span class="text-danger">*</span></label
            >
            <div
              v-for="level in ['National', 'State', 'LGA']"
              :key="level"
              class="form-check"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="level"
                :id="`levelOfSupport-${level}`"
                v-model="formData.Level_of_support"
              />
              <label class="form-check-label" :for="`levelOfSupport-${level}`">
                [cite_start]{{ level }} [cite: 28, 29, 30]
              </label>
            </div>
          </div>

          <div v-if="formData.Level_of_support.includes('State')" class="mb-3">
            <label class="form-label"
              >8b. States supported? (If states were selected) (Multiple Choice)
              <span class="text-danger">*</span></label
            >
            <div
              v-for="state in availableStates"
              :key="state"
              class="form-check"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="{ state: state }"
                :id="`stateSupported-${state}`"
                v-model="formData.States_supported"
              />
              <label class="form-check-label" :for="`stateSupported-${state}`">
                {{ state }}
              </label>
            </div>
          </div>

          <div v-if="formData.Level_of_support.includes('LGA')" class="mb-3">
            <label class="form-label"
              >8c. LGA supported? (If LGA were selected) (Multiple Choice)
              <span class="text-danger">*</span></label
            >
            <div
              v-for="(lgaEntry, index) in formData.LGA_supported"
              :key="index"
              class="mb-2 p-2 border rounded"
            >
              <div class="row">
                <div class="col-md-5">
                  <select
                    class="form-select"
                    v-model="lgaEntry.state"
                    @change="updateLGAOptions(index)"
                    required
                  >
                    <option value="">Select State</option>
                    <option
                      v-for="state in availableStates"
                      :key="state"
                      :value="state"
                      >{{ state }}</option
                    >
                  </select>
                </div>
                <div class="col-md-5">
                  <select
                    class="form-select"
                    v-model="lgaEntry.lga"
                    :disabled="!lgaEntry.state"
                    required
                  >
                    <option value="">Select LGA</option>
                    <option
                      v-for="lga in lgaOptions[lgaEntry.state]"
                      :key="lga"
                      :value="lga"
                      >{{ lga }}</option
                    >
                  </select>
                </div>
                <div class="col-md-2 d-flex align-items-center">
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="removeLGA(index)"
                    >Remove</button
                  >
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-sm" @click="addLGA"
              >Add LGA</button
            >
          </div>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" @click="prevStep"
              >Previous</button
            >
            <button type="submit" class="btn btn-primary">Next</button>
          </div>
        </div>

        <div v-show="currentStep === 3">
          <h3>Step 3: Campaign and Type of Support</h3>
          <div class="mb-3">
            <label class="form-label"
              >9. Campaign Focus? (Multiple Choice)
              <span class="text-danger">*</span></label
            >
            <div
              v-for="focus in [
                'Measles Rubella',
                'Polio',
                'HPV',
                'NTDs',
                'Malaria',
                'Nutrition',
                'Routine Immunization',
              ]"
              :key="focus"
              class="form-check"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="focus"
                :id="`campaignFocus-${focus}`"
                v-model="formData.Campaign_Focus"
              />
              <label class="form-check-label" :for="`campaignFocus-${focus}`">
                [cite_start]{{ focus }} [cite: 34, 35, 36, 37, 38, 39, 40]
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="campaignFocusOther"
                value="Other"
                v-model="campaignFocusOtherSelected"
              />
              <label class="form-check-label" for="campaignFocusOther">
                [cite_start]Other (If other, explain briefly: [cite: 41]
              </label>
              <input
                type="text"
                class="form-control mt-2"
                v-if="campaignFocusOtherSelected"
                v-model="formData.Campaign_Focus_Other"
                placeholder="Specify other campaign focus"
              />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label"
              >10. Type of Support? (Multiple Choice)
              <span class="text-danger">*</span></label
            >
            <div class="card p-3 mb-3">
              <div class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="technicalSupport"
                  value="Technical Support"
                  v-model="selectedSupportTypes"
                />
                [cite_start]<label
                  class="form-check-label"
                  for="technicalSupport"
                  >Technical Support [cite: 46]</label
                >
              </div>
              <div
                v-if="selectedSupportTypes.includes('Technical Support')"
                class="ms-4 p-2 border rounded bg-light"
              >
                <div class="mb-2">
                  <label class="form-label"
                    >Was any personnel deployed for the campaign? (Yes/No)
                    [cite_start][cite: 48]</label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="personnelDeployedYes"
                      :value="true"
                      v-model="technicalSupportDetails.personnel_deployed"
                    />
                    <label class="form-check-label" for="personnelDeployedYes"
                      >Yes</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="personnelDeployedNo"
                      :value="false"
                      v-model="technicalSupportDetails.personnel_deployed"
                    />
                    <label class="form-check-label" for="personnelDeployedNo"
                      >No</label
                    >
                  </div>
                </div>
                <div
                  v-if="technicalSupportDetails.personnel_deployed"
                  class="mb-2"
                >
                  [cite_start]<label for="numPersonnel" class="form-label"
                    >How many TA/personnel did you deploy? [cite: 49]</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="numPersonnel"
                    v-model.number="technicalSupportDetails.number_of_personnel"
                  />
                </div>
                <div
                  v-if="technicalSupportDetails.personnel_deployed"
                  class="mb-2"
                >
                  <label class="form-label"
                    >What states were they deployed to? (Multiple Choice -
                    National & List of States) [cite_start][cite: 50]</label
                  >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="National"
                      id="deploymentNational"
                      v-model="technicalSupportDetails.deployment_states"
                    />
                    <label class="form-check-label" for="deploymentNational"
                      >National</label
                    >
                  </div>
                  <div
                    v-for="state in availableStates"
                    :key="state"
                    class="form-check"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="state"
                      :id="`deploymentState-${state}`"
                      v-model="technicalSupportDetails.deployment_states"
                    />
                    <label
                      class="form-check-label"
                      :for="`deploymentState-${state}`"
                    >
                      {{ state }}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="card p-3 mb-3">
              <div class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="funding"
                  value="Funding"
                  v-model="selectedSupportTypes"
                />
                [cite_start]<label class="form-check-label" for="funding"
                  >Funding [cite: 51]</label
                >
              </div>
              <div
                v-if="selectedSupportTypes.includes('Funding')"
                class="ms-4 p-2 border rounded bg-light"
              >
                [cite_start]<label class="form-label"
                  >Organizations funded [cite: 52]</label
                >
                <input
                  type="text"
                  class="form-control mb-2"
                  v-model="newFundedOrg"
                  @keyup.enter="addFundedOrg"
                  placeholder="Add organization and press Enter"
                />
                <div class="d-flex flex-wrap">
                  <span
                    v-for="(org, index) in fundingDetails.organizations_funded"
                    :key="index"
                    class="badge bg-secondary me-2 mb-2"
                  >
                    {{ org }}
                    <button
                      type="button"
                      class="btn-close btn-close-white ms-1"
                      aria-label="Remove"
                      @click="removeFundedOrg(index)"
                    ></button>
                  </span>
                </div>
              </div>
            </div>

            <div class="card p-3 mb-3">
              <div class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="provisionOfCommodities"
                  value="Provision of Commodities"
                  v-model="selectedSupportTypes"
                />
                [cite_start]<label
                  class="form-check-label"
                  for="provisionOfCommodities"
                  >Provision of Commodities [cite: 53]</label
                >
              </div>
              <div
                v-if="selectedSupportTypes.includes('Provision of Commodities')"
                class="ms-4 p-2 border rounded bg-light"
              >
                [cite_start]<label class="form-label"
                  >Commodities Supplied [cite: 54]</label
                >
                <input
                  type="text"
                  class="form-control mb-2"
                  v-model="newCommodity"
                  @keyup.enter="addCommodity"
                  placeholder="Add commodity and press Enter"
                />
                <div class="d-flex flex-wrap">
                  <span
                    v-for="(
                      commodity, index
                    ) in commoditiesDetails.commodities_supplied"
                    :key="index"
                    class="badge bg-secondary me-2 mb-2"
                  >
                    {{ commodity }}
                    <button
                      type="button"
                      class="btn-close btn-close-white ms-1"
                      aria-label="Remove"
                      @click="removeCommodity(index)"
                    ></button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" @click="prevStep"
              >Previous</button
            >
            <button type="submit" class="btn btn-primary">Next</button>
          </div>
        </div>

        <div v-show="currentStep === 4">
          <h3>Step 4: Thematic Areas and KPIs</h3>
          <div class="mb-3">
            <label for="funderOfProject" class="form-label"
              >11. [cite_start]Who is the Funder of your project? [cite:
              55]</label
            >
            <input
              type="text"
              class="form-control"
              id="funderOfProject"
              v-model="formData.Who_is_the_Funder_of_your_project"
            />
          </div>

          <div class="mb-3">
            <label class="form-label"
              >12. Thematic areas supported? (Multiple Choice)
              <span class="text-danger">*</span></label
            >
            <div
              v-for="area in thematicAreas"
              :key="area.main"
              class="card p-3 mb-3"
            >
              <div class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`thematicArea-${area.main}`"
                  :value="area.main"
                  v-model="selectedThematicAreas"
                />
                [cite_start]<label
                  class="form-check-label"
                  :for="`thematicArea-${area.main}`"
                  >{{ area.main }} [cite: 57, 62, 67, 74, 80, 81, 86, 97]</label
                >
              </div>
              <div
                v-if="selectedThematicAreas.includes(area.main)"
                class="ms-4 p-2 border rounded bg-light"
              >
                <div v-for="sub in area.sub" :key="sub" class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="sub"
                    :id="`subArea-${area.main}-${sub}`"
                    v-model="thematicAreaDetails[area.main].sub_areas"
                  />
                  [cite_start]<label
                    class="form-check-label"
                    :for="`subArea-${area.main}-${sub}`"
                    >{{ sub }} [cite: 58, 59, 60, 64, 65, 66, 70, 71, 72, 76,
                    77, 78, 82, 83, 84, 88, 89, 90, 91, 94, 95, 99]</label
                  >
                </div>
                <div v-if="area.hasOther" class="mb-2">
                  [cite_start]<label
                    :for="`other-${area.main}`"
                    class="form-label"
                    >Others, please specify: [cite: 61, 68, 73, 79, 85, 96,
                    100]</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :id="`other-${area.main}`"
                    v-model="thematicAreaDetails[area.main].other"
                    @input="updateThematicOther(area.main)"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="kpi" class="form-label"
              >13. [cite_start]Key Performance Indicators (KPI) (Text box)
              [cite: 101]</label
            >
            <textarea
              class="form-control"
              id="kpi"
              rows="3"
              v-model="formData.Key_Performance_Indicators"
            ></textarea>
            <small class="form-text text-muted"
              >eg. [cite_start]Number of States that have released counterpart
              funding, Number of states that have received IEC materials [cite:
              102, 103]</small
            >
          </div>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" @click="prevStep"
              >Previous</button
            >
            <button type="submit" class="btn btn-primary">Next</button>
          </div>
        </div>

        <div v-show="currentStep === 5">
          <h3>Step 5: Collaboration</h3>
          <div class="mb-3">
            <label class="form-label"
              >14. [cite_start]Are you collaborating with any other partners?
              [cite: 104]</label
            >
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="collaboratingYes"
                value="Yes"
                v-model="formData.Are_you_collaborating_with_any_other_partners"
              />
              [cite_start]<label class="form-check-label" for="collaboratingYes"
                >Yes [cite: 105]</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="collaboratingNo"
                value="No"
                v-model="formData.Are_you_collaborating_with_any_other_partners"
              />
              [cite_start]<label class="form-check-label" for="collaboratingNo"
                >No [cite: 106]</label
              >
            </div>
          </div>

          <div
            v-if="
              formData.Are_you_collaborating_with_any_other_partners === 'Yes'
            "
            class="mb-3"
          >
            <label class="form-label"
              >14b. [cite_start]List the Partners (If yes) [cite: 108]</label
            >
            <div
              v-for="partner in predefinedPartners"
              :key="partner"
              class="form-check"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :value="partner"
                :id="`partner-${partner}`"
                v-model="formData.List_the_Partners"
              />
              <label class="form-check-label" :for="`partner-${partner}`">
                [cite_start]{{ partner }} [cite: 109, 111, 113, 114, 116, 117,
                118, 119, 120, 121, 123, 124, 125, 126, 127]
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="partnerOther"
                value="Other"
                v-model="otherPartnerSelected"
              />
              <label class="form-check-label" for="partnerOther">
                [cite_start]Others [cite: 128]
              </label>
              <input
                type="text"
                class="form-control mt-2"
                v-if="otherPartnerSelected"
                v-model="otherPartnerDetail"
                placeholder="Detail other partner"
              />
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" @click="prevStep"
              >Previous</button
            >
            <button type="button" class="btn btn-success" @click="submitForm"
              >Submit</button
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.io"); // Replace with your PocketBase instance URL

const currentStep = ref(1);
const totalSteps = 5;

const progress = computed(() => (currentStep.value / totalSteps) * 100);

const formData = ref({
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
  Type_of_Support: [],
  Who_is_the_Funder_of_your_project: "",
  Thematic_areas_supported: [],
  Key_Performance_Indicators: "",
  Are_you_collaborating_with_any_other_partners: "",
  List_the_Partners: [],
});

// Computed properties for date formatting
const formattedStartDate = computed({
  get: () => {
    if (formData.value.Start_date_of_support) {
      const date = new Date(formData.value.Start_date_of_support);
      return date.toISOString().split("T")[0];
    }
    return "";
  },
  set: (value) => {
    if (value) {
      formData.value.Start_date_of_support = new Date(value).toISOString();
    } else {
      formData.value.Start_date_of_support = "";
    }
  },
});

const formattedEndDate = computed({
  get: () => {
    if (formData.value.End_date_of_support) {
      const date = new Date(formData.value.End_date_of_support);
      return date.toISOString().split("T")[0];
    }
    return "";
  },
  set: (value) => {
    if (value) {
      formData.value.End_date_of_support = new Date(value).toISOString();
    } else {
      formData.value.End_date_of_support = "";
    }
  },
});

const availableStates = ref([
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
]);

const lgaOptions = ref({
  Kaduna: ["Zaria", "Kaduna North", "Chikun"],
  Lagos: ["Ikeja", "Badagry", "Apapa"],
  // Add more states and their LGAs as needed
});

const campaignFocusOtherSelected = ref(false);

const selectedSupportTypes = ref([]);
const technicalSupportDetails = ref({
  support_type: "Technical Support",
  personnel_deployed: false,
  number_of_personnel: null,
  deployment_states: [],
});
const fundingDetails = ref({
  support_type: "Funding",
  organizations_funded: [],
});
const commoditiesDetails = ref({
  support_type: "Provision of Commodities",
  commodities_supplied: [],
});

const newFundedOrg = ref("");
const newCommodity = ref("");

const thematicAreas = ref([
  {
    main: "Planning and Coordination",
    sub: ["Microplanning", "Technical Working Group", "Readiness dashboard"],
    hasOther: true,
  },
  {
    main: "Service Delivery",
    sub: [
      "Training",
      "Health workers’ team deployment",
      "Supportive supervision",
    ],
    hasOther: true,
  },
  {
    main: "ACSM",
    sub: [
      "Program Advocacy",
      "Media Advocacy",
      "Risk and Crisis communication",
      "Social Mobilization",
    ],
    hasOther: true,
  },
  {
    main: "Monitoring, Evaluation, Research, Learning and Accountability (MERLA)",
    sub: ["Data Management", "Research", "Knowledge management and learning"],
    hasOther: true,
  },
  {
    main: "Vaccine and commodities deployment",
    sub: ["Cold chain/Logistics", "Waste Management", "Transportation"],
    hasOther: true,
  },
  {
    main: "Finance",
    sub: [
      "Donor",
      "Payments - Social Mobilization",
      "Payments - Logistics",
      "Payments - Training",
      "Payments - Vaccination Teams Payment",
    ],
    hasOther: true,
  },
  {
    main: "Surveillance",
    sub: ["AEFI"],
    hasOther: true,
  },
]);

const selectedThematicAreas = ref([]);
const thematicAreaDetails = ref({});

// Initialize thematicAreaDetails
onMounted(() => {
  thematicAreas.value.forEach((area) => {
    thematicAreaDetails.value[area.main] = {
      area: area.main,
      sub_areas: [],
      other: "",
    };
  });
});

watch(selectedThematicAreas, (newVal) => {
  // Clear sub-areas and other text for deselected main areas
  Object.keys(thematicAreaDetails.value).forEach((mainArea) => {
    if (!newVal.includes(mainArea)) {
      thematicAreaDetails.value[mainArea].sub_areas = [];
      thematicAreaDetails.value[mainArea].other = "";
    }
  });
});

const updateThematicOther = (mainArea) => {
  const otherText = thematicAreaDetails.value[mainArea].other;
  if (
    otherText &&
    !thematicAreaDetails.value[mainArea].sub_areas.includes(
      `Other: ${otherText}`
    )
  ) {
    const existingOtherIndex = thematicAreaDetails.value[
      mainArea
    ].sub_areas.findIndex((item) => item.startsWith("Other: "));
    if (existingOtherIndex !== -1) {
      thematicAreaDetails.value[mainArea].sub_areas.splice(
        existingOtherIndex,
        1
      );
    }
    thematicAreaDetails.value[mainArea].sub_areas.push(`Other: ${otherText}`);
  } else if (!otherText) {
    const existingOtherIndex = thematicAreaDetails.value[
      mainArea
    ].sub_areas.findIndex((item) => item.startsWith("Other: "));
    if (existingOtherIndex !== -1) {
      thematicAreaDetails.value[mainArea].sub_areas.splice(
        existingOtherIndex,
        1
      );
    }
  }
};

const predefinedPartners = ref([
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
]);
const otherPartnerSelected = ref(false);
const otherPartnerDetail = ref("");

const addLGA = () => {
  formData.value.LGA_supported.push({ state: "", lga: "" });
};

const removeLGA = (index) => {
  formData.value.LGA_supported.splice(index, 1);
};

const updateLGAOptions = (index) => {
  const selectedState = formData.value.LGA_supported[index].state;
  if (!lgaOptions.value[selectedState]) {
    // If the selected state doesn't have predefined LGAs, clear the LGA
    formData.value.LGA_supported[index].lga = "";
  }
};

const addFundedOrg = () => {
  if (newFundedOrg.value.trim() !== "") {
    fundingDetails.value.organizations_funded.push(newFundedOrg.value.trim());
    newFundedOrg.value = "";
  }
};

const removeFundedOrg = (index) => {
  fundingDetails.value.organizations_funded.splice(index, 1);
};

const addCommodity = () => {
  if (newCommodity.value.trim() !== "") {
    commoditiesDetails.value.commodities_supplied.push(
      newCommodity.value.trim()
    );
    newCommodity.value = "";
  }
};

const removeCommodity = (index) => {
  commoditiesDetails.value.commodities_supplied.splice(index, 1);
};

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const submitForm = async () => {
  // Construct Type_of_Support array
  formData.value.Type_of_Support = [];
  if (selectedSupportTypes.value.includes("Technical Support")) {
    formData.value.Type_of_Support.push(technicalSupportDetails.value);
  }
  if (selectedSupportTypes.value.includes("Funding")) {
    formData.value.Type_of_Support.push(fundingDetails.value);
  }
  if (selectedSupportTypes.value.includes("Provision of Commodities")) {
    formData.value.Type_of_Support.push(commoditiesDetails.value);
  }

  // Construct Thematic_areas_supported array
  formData.value.Thematic_areas_supported = selectedThematicAreas.value.map(
    (area) => {
      const detail = thematicAreaDetails.value[area];
      return {
        area: area,
        sub_areas: detail.sub_areas.filter(
          (sub) => sub !== `Other: ${detail.other}`
        ), // Remove the "Other: " entry if not actual selection
      };
    }
  );
  // Add the 'Other' thematic area if specified
  thematicAreas.value.forEach((area) => {
    if (area.hasOther && thematicAreaDetails.value[area.main].other) {
      const existingEntry = formData.value.Thematic_areas_supported.find(
        (item) => item.area === area.main
      );
      if (existingEntry) {
        if (!existingEntry.sub_areas.some((sub) => sub.startsWith("Other: "))) {
          existingEntry.sub_areas.push(
            `Other: ${thematicAreaDetails.value[area.main].other}`
          );
        }
      } else {
        formData.value.Thematic_areas_supported.push({
          area: area.main,
          sub_areas: [`Other: ${thematicAreaDetails.value[area.main].other}`],
        });
      }
    }
  });

  // Handle "Other" for Campaign Focus
  if (campaignFocusOtherSelected.value && formData.value.Campaign_Focus_Other) {
    if (
      !formData.value.Campaign_Focus.includes(
        formData.value.Campaign_Focus_Other
      )
    ) {
      formData.value.Campaign_Focus.push(formData.value.Campaign_Focus_Other);
    }
  } else if (
    !campaignFocusOtherSelected.value &&
    formData.value.Campaign_Focus.includes(formData.value.Campaign_Focus_Other)
  ) {
    formData.value.Campaign_Focus = formData.value.Campaign_Focus.filter(
      (item) => item !== formData.value.Campaign_Focus_Other
    );
  }

  // Handle "Other" for List of Partners
  if (otherPartnerSelected.value && otherPartnerDetail.value) {
    if (!formData.value.List_the_Partners.includes(otherPartnerDetail.value)) {
      formData.value.List_the_Partners.push(otherPartnerDetail.value);
    }
  } else if (
    !otherPartnerSelected.value &&
    formData.value.List_the_Partners.includes(otherPartnerDetail.value)
  ) {
    formData.value.List_the_Partners = formData.value.List_the_Partners.filter(
      (item) => item !== otherPartnerDetail.value
    );
  }

  try {
    const record = await pb.collection("rsmp_data").create(formData.value);
    console.log("Form submitted successfully:", record);
    alert("Form submitted successfully!");
    // Optionally, reset the form
    resetForm();
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit form. Please try again.");
  }
};

const resetForm = () => {
  formData.value = {
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
    Type_of_Support: [],
    Who_is_the_Funder_of_your_project: "",
    Thematic_areas_supported: [],
    Key_Performance_Indicators: "",
    Are_you_collaborating_with_any_other_partners: "",
    List_the_Partners: [],
  };
  campaignFocusOtherSelected.value = false;
  selectedSupportTypes.value = [];
  technicalSupportDetails.value = {
    support_type: "Technical Support",
    personnel_deployed: false,
    number_of_personnel: null,
    deployment_states: [],
  };
  fundingDetails.value = {
    support_type: "Funding",
    organizations_funded: [],
  };
  commoditiesDetails.value = {
    support_type: "Provision of Commodities",
    commodities_supplied: [],
  };
  newFundedOrg.value = "";
  newCommodity.value = "";
  selectedThematicAreas.value = [];
  thematicAreaDetails.value = {};
  onMounted(() => {
    // Re-initialize thematicAreaDetails
    thematicAreas.value.forEach((area) => {
      thematicAreaDetails.value[area.main] = {
        area: area.main,
        sub_areas: [],
        other: "",
      };
    });
  });
  otherPartnerSelected.value = false;
  otherPartnerDetail.value = "";
  currentStep.value = 1; // Reset to first step
};
</script>

<style scoped>
/* Add any custom styles here if needed */
.form-check-label {
  margin-left: 0.5rem;
}
.card {
  border-radius: 0.75rem;
}
.alert {
  border-radius: 0.5rem;
}
.progress-bar {
  transition: width 0.5s ease-in-out;
}
</style>
