<template>
  <div class="d-flex align-content-center align-self-lg-center">
    <div class="card">
      <div class="card-header"> Login </div>
      <div class="card-body">
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <div class="input-group">
              <span class="input-group-text">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                  />
                </svg>
              </span>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
              <span class="input-group-text">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </span>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div
            v-if="errorMessage"
            class="mb-4 text-sm text-center text-red-600"
          >
            {{ errorMessage }}
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="rememberMe" />
              <label class="form-check-label" for="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" class="text-decoration-none">Forgot password?</a>
          </div>
          <button
            type="submit"
            class="btn btn-login w-100 py-2"
            :disabled="isLoading"
          >
            {{ isLoading ? "Signing In..." : "Sign In" }}
          </button>
        </form>
        <div class="text-center mt-3">
          <p class="mb-0"
            >Don't have an account?
            <a href="#" class="text-decoration-none" @click.prevent="register"
              >Register here</a
            ></p
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PocketBase from "pocketbase";
import { useAdminStore } from "./../stores/admin-store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useAdminStore();
const { isLoading, userToken } = storeToRefs(store);

const email = ref("");
const password = ref("");
// const isLoading = ref(false);
const errorMessage = ref("");

const pb = new PocketBase("https://pb-api.resourcetrackr.com");
const register = () => {
  // console.log("register");
  router.push({ name: "register" });
};
const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email.value, password.value);
    store.setUser(authData);
    router.push({ name: "home" });
  } catch (error) {
    console.error("Login Failed:", error.message);
    errorMessage.value = "Login failed. Please check your credentials.";
  }

  // isLoading.value = false;
};

// onMounted(async () => {
//   const token = localStorage.getItem("userToken");
//   if (token) {
//     userToken.value = token;
//   }
// });
</script>
<style scoped>
body {
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-card {
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}
.card-header {
  background-color: #0d6efd;
  color: white;
  text-align: center;
  font-weight: bold;
}
.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.25);
}
.btn-login {
  background-color: #0d6efd;
  border: none;
}
.btn-login:hover {
  background-color: #0b5ed7;
}
</style>
