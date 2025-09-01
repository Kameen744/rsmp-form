<template>
  <!-- Floating Background Shapes -->
  <!-- <div class="bg-shape"></div>
  <div class="bg-shape"></div>
  <div class="bg-shape"></div> -->

  <div class="login-container">
    <!-- Logo Section -->
    <div class="logo">
      <h1>
        <img :src="logo" class=" w-100"></img>
      </h1>
      <small class=" text-white">
        Integrated Measles-Rubella Campaign Resource Tracker
      </small>
      <hr>
    </div>

    <!-- Login Form -->
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email" class="form-label">Email Address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="form-input"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          class="form-input"
          placeholder="Enter your password"
          required
        />
      </div>

      <!-- Remember Me & Forgot Password -->
      <div class="remember-forgot">
        <div class="checkbox-group">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            class="checkbox"
          />
          <label for="remember" class="checkbox-label">Remember me</label>
        </div>
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>

      <!-- Login Button -->
      <button type="submit" class="login-btn" :disabled="isLoading">
        {{ isLoading ? "Signing In..." : "Sign In" }}
      </button>
    </form>

    <div v-if="errorMessage" class="mb-4 text-sm text-center text-red-600">
      {{ errorMessage }}
    </div>

    <!-- Sign Up Link -->
    <div class="signup-link">
      Don't have an account?
      <a href="#" @click.prevent="register">Create one now</a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import PocketBase from "pocketbase";
import { useAdminStore } from "./../stores/admin-store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import logo from "./../assets/ResourceTrackerlogo.png"

const router = useRouter();
const store = useAdminStore();
const { isLoading, userToken } = storeToRefs(store);

const email = ref("");
const password = ref("");
// const isLoading = ref(false);
const errorMessage = ref("");

const pb = new PocketBase("https://pb-api.resourcetrackr.com");
const register = () => {
  console.log("register");
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
  } finally {
    isLoading.value = false;
  }
};

// onMounted(async () => {
//   const token = localStorage.getItem("userToken");
//   if (token) {
//     userToken.value = token;
//   }
// });
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #1F3559;
  --primary-dark: #4f46e5;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --dark: #0f172a;
  --dark-light: #1e293b;
  --gray: #64748b;
  --gray-light: #f1f5f9;
  --white: #ffffff;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --border-radius: 12px;
  --transition: all 0.3s ease;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(
    135deg,
    var(--primary) 0%,
    var(--secondary) 50%,
    var(--accent) 100%
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

/* Animated Background Elements */
body::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
  background-size: 50px 50px;
  animation: float 20s infinite linear;
  pointer-events: none;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
  }
}

/* Floating Shapes */
.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: floatShapes 15s infinite ease-in-out;
  pointer-events: none;
}

.bg-shape:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.bg-shape:nth-child(2) {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 10%;
  animation-delay: 5s;
}

.bg-shape:nth-child(3) {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 10s;
}

@keyframes floatShapes {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
}

/* Login Container */
.login-container {
  background: #1F3559;
  color: #e2e8f0;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: var(--shadow-xl);
  position: relative;
  z-index: 10;
  align-self: center;
  animation: slideUp 0.8s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Logo */
.logo {
  text-align: center;
  padding: 0px;
  margin-bottom: 2rem;
}

/* .logo h1 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
} */

.logo p {
  color: var(--gray);
  font-size: 1rem;
  font-weight: 500;
}

/* Form */
.login-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--white);
  font-size: 0.95rem;
}

.form-input {
  width: 100%;
  padding: 16px 20px 16px 50px;
  border: 2px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
  background: white;
  transform: translateY(-2px);
}

.form-input:valid {
  border-color: var(--success);
}

.input-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: var(--gray);
  transition: var(--transition);
  margin-top: 1.5rem;
}

.form-input:focus + .input-icon {
  fill: var(--primary);
}

/* Password Toggle */
.password-toggle {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: var(--transition);
}

.password-toggle:hover {
  background: rgba(99, 102, 241, 0.1);
}

.password-toggle svg {
  width: 20px;
  height: 20px;
  fill: var(--gray);
  transition: var(--transition);
}

.password-toggle:hover svg {
  fill: var(--primary);
}

/* Remember Me */
.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
  cursor: pointer;
}

.checkbox-label {
  font-size: 0.9rem;
  color: var(--gray);
  cursor: pointer;
}

.forgot-link {
  color: var(--primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition);
}

.forgot-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Login Button */
.login-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.login-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: var(--transition);
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.login-btn:hover::before {
  left: 100%;
}

.login-btn:active {
  transform: translateY(0);
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  color: var(--gray);
  font-size: 0.9rem;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.divider span {
  padding: 0 1rem;
}

/* Social Login */
.social-login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: var(--border-radius);
  background: white;
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.social-btn:hover {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.05);
  transform: translateY(-2px);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

/* Sign Up Link */
.signup-link {
  text-align: center;
  color: var(--gray);
  font-size: 0.95rem;
}

.signup-link a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.signup-link a:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Security Badge */
.security-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--border-radius);
  color: var(--success);
  font-size: 0.9rem;
  font-weight: 500;
}

.security-badge svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

/* Loading State */
.loading {
  position: relative;
  pointer-events: none;
}

.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  body {
    padding: 1rem;
  }

  .login-container {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }

  .logo h1 {
    font-size: 2rem;
  }

  .social-login {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .login-container {
    padding: 1.5rem 1rem;
    margin: 0.5rem;
  }

  .logo h1 {
    font-size: 1.8rem;
  }

  .form-input {
    padding: 14px 18px 14px 45px;
  }

  .input-icon {
    left: 15px;
    width: 18px;
    height: 18px;
  }
}

/* Focus visible for accessibility */
.login-btn:focus-visible,
.form-input:focus-visible,
.checkbox:focus-visible,
.social-btn:focus-visible,
.forgot-link:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Error State */
.form-input.error {
  border-color: var(--danger);
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

.error-message {
  color: var(--danger);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Success State */
.form-input.success {
  border-color: var(--success);
}

/* Pulse Animation for Logo */
.logo h1 {
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Enhanced Hover Effects */
.login-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.2);
}

/* Glassmorphism Enhancement */
.login-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
}
</style>
