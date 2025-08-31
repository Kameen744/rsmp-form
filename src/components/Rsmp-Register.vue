<template>
  <div class="form-container" ref="mainFormRefRegister">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-6"
      >Partner Registration</h2
    >
    <hr />
    <form>
      <div class="mb-8 row">
        <!-- <h3 class="text-xl font-semibold text-gray-700 mb-4"
          >Basic User Information</h3
        > -->

        <div class="mb-3 col-md-4">
          <label for="fullName" class="form-label">Full Name *</label>
          <input
            required
            placeholder="John Doe"
            type="text"
            class="form-control"
            :class="err('fullName') ? 'is-invalid' : ''"
            id="fullName"
            v-model="form.fullName"
          />

          <div class="invalid-feedback d-block" v-if="err('fullName')">
            {{ err("fullName") }}
          </div>
        </div>

        <div class="mb-3 col-md-4">
          <label for="email" class="form-label">Official Email Address *</label>
          <input
            required
            placeholder="email@example.com"
            type="email"
            class="form-control"
            :class="err('email') ? 'is-invalid' : ''"
            id="email"
            v-model="form.email"
          />

          <div class="invalid-feedback d-block" v-if="err('email')">
            {{ err("email") }}
          </div>
        </div>

        <div class="mb-3 col-md-4">
          <label for="phoneNumber" class="form-label">Phone Number *</label>
          <input
            required
            placeholder="08090909090"
            type="text"
            class="form-control"
            :class="err('email') ? 'is-invalid' : ''"
            id="phoneNumber"
            v-model="form.phoneNumber"
          />

          <div class="invalid-feedback d-block" v-if="err('phoneNumber')">
            {{ err("phoneNumber") }}
          </div>
        </div>
      </div>

      <div class="mb-8 row">
        <!-- <h3 class="text-xl font-semibold text-gray-700 mb-4"
          >2. Organizational Details</h3
        > -->
        <div class="mb-3 col-md-6">
          <label for="organizationName" class="form-label"
            >Organization/Agency Name *</label
          >

          <input
            required
            placeholder="ResourceTrackr Inc."
            type="organizationName"
            class="form-control"
            :class="err('organizationName') ? 'is-invalid' : ''"
            id="organizationName"
            v-model="form.organizationName"
          />

          <div class="invalid-feedback d-block" v-if="err('organizationName')">
            {{ err("organizationName") }}
          </div>
        </div>

        <div class="mb-3 col-md-6">
          <label for="organizationType" class="form-label"
            >Type of Organization *</label
          >
          <select
            v-model="form.organizationType"
            id="organizationType"
            class="form-control"
            required
          >
            <option disabled value="">Select an option</option>
            <option
              v-for="orgType in organizationTypes"
              :key="orgType"
              :value="orgType"
              >{{ orgType }}</option
            >
          </select>
          <div class="invalid-feedback d-block" v-if="err('organizationType')">
            {{ err("organizationType") }}
          </div>
        </div>
      </div>

      <div class="mb-3 col">
        <label for="isFocalPerson" class="form-label"
          >Are you the official liaison/focal person? *</label
        >

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            v-model="form.isFocalPerson"
            type="radio"
            :value="true"
            id="focalYes"
            name="focalPersonStatus"
          />
          <label class="form-check-label" for="flexRadioDefault1"> Yes </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            v-model="form.isFocalPerson"
            class="form-check-input"
            type="radio"
            :value="false"
            name="focalPersonStatus"
            id="focalNo"
            checked
          />
          <label class="form-check-label" for="focalNo"> No </label>
        </div>

        <transition name="fade">
          <div
            v-if="form.isFocalPerson"
            class="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-md"
          >
            <div class="flex items-center h-5">
              <input
                v-model="form.consent"
                id="consent"
                type="checkbox"
                class="form-checkbox"
                required
              />
            </div>
            <div class="ml-3 text-sm leading-relaxed">
              <label
                for="consent"
                class="font-medium text-yellow-800 cursor-pointer"
              >
                I consent to my contact details being visible to other partners
                and government stakeholders for coordination purposes.
              </label>
            </div>
          </div>
        </transition>
      </div>

      <div class="mb-3 col">
        <label for="alternateContact" class="form-label"
          >Alternate Contact Person
          <span class="text-gray-500"> (Optional)</span></label
        >
        <input
          v-model="form.alternateContact"
          type="text"
          id="alternateContact"
          class="form-control"
          placeholder="Email, or Phone for continuity"
        />

        <div class="invalid-feedback d-block" v-if="err('alternateContact')">
          {{ err("alternateContact") }}
        </div>
      </div>

      <div class="mb-8 row">
        <!-- <h3 class="text-xl font-semibold text-gray-700 mb-4"
          >Coordination & Consent</h3
        > -->

        <div class="mb-3 col-md-6">
          <label for="password" class="form-label">Password *</label>

          <input
            required
            type="password"
            class="form-control"
            :class="err('password') ? 'is-invalid' : ''"
            id="password"
            v-model="form.password"
          />

          <div class="invalid-feedback d-block" v-if="err('password')">
            {{ err("password") }}
          </div>
        </div>

        <div class="mb-3 col-md-6">
          <label for="confirmPassword" class="form-label"
            >Confirm Password *</label
          >

          <input
            required
            type="password"
            class="form-control"
            :class="err('confirmPassword') ? 'is-invalid' : ''"
            id="confirmPassword"
            v-model="form.confirmPassword"
          />
          <div class="invalid-feedback d-block" v-if="err('confirmPassword')">
            {{ err("confirmPassword") }}
          </div>

          <input
            required
            type="text"
            class="form-control ipt-btt"
            id="iptbtt"
            v-model="form.bot"
          />
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <button
          class="btn btn-secondary"
          @click.prevent="router.push({ name: 'login' })"
        >
          Back to login
        </button>
        <div class="m-2"></div>
        <button
          :disabled="isLoading"
          class="btn btn-primary"
          @click.prevent="submitForm"
        >
          <span v-if="isLoading" class="loading loading-spinner p-0 m-0"></span>
          <span v-else>Register Account</span>
        </button>
      </div>
    </form>

    <div v-if="isSuccess" class="alert alert-success mt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Registration successful!</span>
    </div>
    <div v-if="isError" class="alert alert-error mt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>An error occurred. Please try again.</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PocketBase from "pocketbase";
import validateRegFormData from "../validateRegForm";
import { useRouter } from "vue-router";

const pb = new PocketBase("https://pb-api.resourcetrackr.com");
const router = useRouter();

// Reactive form data
const form = ref({
  fullName: "",
  email: "",
  phoneNumber: "",
  organizationName: "",
  organizationType: "",
  isFocalPerson: false,
  consent: false,
  alternateContact: "",
  password: "",
  confirmPassword: "",
  bot: "",
});

// UI state variables
const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);
const formErrors = ref({});

const err = (field) => {
  if (formErrors.value.hasOwnProperty(field)) {
    return formErrors.value[field];
  }

  return false;
};

const organizationTypes = ref([
  "Government - National",
  "Government - State",
  "Government - LGA",
  "Partner",
  "Independent Consultant",
]);

const submitForm = async () => {
  if (form.value.bot || form.value.bot != "") {
    return;
  }

  const formJsonData = JSON.parse(JSON.stringify(form.value));
  const validate = validateRegFormData(formJsonData);
  if (validate.isValid === false) {
    formErrors.value = validate.errors;
    console.log(formErrors.value);
    return;
  }

  isLoading.value = true;
  isSuccess.value = false;
  isError.value = false;

  try {
    const record = await pb.collection("users").create({
      name: form.value.fullName,
      email: form.value.email,
      phone_number: form.value.phoneNumber,
      organization_name: form.value.organizationName,
      organization_type: form.value.organizationType,
      is_focal_person: form.value.isFocalPerson,
      consent_for_contact: form.value.consent,
      alternate_contact_person: form.value.alternateContact,
      password: form.value.password,
      passwordConfirm: form.value.confirmPassword,
    });

    // console.log("Record created:", record);
    isSuccess.value = true;

    // Optional: Reset form after successful submission
    form.value = {
      fullName: "",
      email: "",
      phoneNumber: "",
      organizationName: "",
      organizationType: "",
      isFocalPerson: false,
      consent: false,
      alternateContact: "",
    };
  } catch (error) {
    console.error("Submission error:", error);
    isError.value = true;
  } finally {
    isLoading.value = false;
    router.push({ name: "login" });
  }
};
</script>
<style scoped>
.ipt-btt {
  visibility: hidden;
}
</style>
