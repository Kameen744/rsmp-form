<template>
  <div class="w-100 h-100 m-0 p-0">
    <input
      type="checkbox"
      id="mobile-menu-toggle"
      aria-label="Toggle mobile menu"
    />

    <label
      for="mobile-menu-toggle"
      class="mobile-toggle"
      aria-label="Open menu"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M3 12h18M3 6h18M3 18h18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </label>

    <div class="overlay"></div>

    <div class="container">
      <aside class="sidebar">
        <div class="logo">
          <h1>{{ authUser?.record.name }}</h1>
        </div>
        <nav>
          <ul class="nav-menu">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                @click="changeView('records')"
                :class="view == 'records' ? 'active' : ''"
              >
                <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Dashboard
              </a>
            </li>

            <li class="nav-item">
              <a
                href="#"
                class="nav-link"
                @click="changeView('form')"
                :class="view == 'form' ? 'active' : ''"
              >
                <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
                Create Record
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                  />
                </svg>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <header class="header">
        <div class="search-box">
          <!-- <input
            type="search"
            class="search-input"
            placeholder="Search anything..."
          />
          <svg class="search-icon" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg> -->
        </div>

        <div class="user-profile">
          <button class="btn btn-danger btn-sm" @click="store.logout"
            >Logout</button
          >
        </div>
      </header>

      <main class="main fade-in">
        <!-- <div class="page-header" v-if="view == 'records'">
          <h1 class="page-title">Dashboard Overview</h1>
          <p class="page-subtitle">Welcome back!</p>
        </div> -->

        <!-- <div class="stats-grid">
          <div class="stat-card hover-lift">
            <div class="stat-value">24,531</div>
            <div class="stat-label">Total Users</div>
            <div class="stat-change positive">+12% from last month</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
          </div>

          <div class="stat-card hover-lift">
            <div class="stat-value">$142,840</div>
            <div class="stat-label">Revenue</div>
            <div class="stat-change positive">+8% from last month</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 60%"></div>
            </div>
          </div>

          <div class="stat-card hover-lift">
            <div class="stat-value">1,429</div>
            <div class="stat-label">Orders</div>
            <div class="stat-change negative">-3% from last month</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 45%"></div>
            </div>
          </div>

          <div class="stat-card hover-lift">
            <div class="stat-value">94.2%</div>
            <div class="stat-label">Satisfaction</div>
            <div class="stat-change positive">+2% from last month</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 94%"></div>
            </div>
          </div>
        </div> -->

        <!-- <div class="content-grid">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Recent Orders</h3>
            </div>
            <div class="card-content">
              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-001</td>
                      <td>John Smith</td>
                      <td>$249.99</td>
                      <td><span class="status active">Complete</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-002</td>
                      <td>Sarah Johnson</td>
                      <td>$89.50</td>
                      <td><span class="status pending">Processing</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-003</td>
                      <td>Mike Davis</td>
                      <td>$159.75</td>
                      <td><span class="status active">Complete</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-004</td>
                      <td>Emily Brown</td>
                      <td>$299.00</td>
                      <td><span class="status inactive">Cancelled</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-005</td>
                      <td>Alex Wilson</td>
                      <td>$199.25</td>
                      <td><span class="status pending">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Recent Activity</h3>
            </div>
            <div
              class="card-content"
              style="position: relative; padding-left: 3rem"
            >
              <div class="activity-item">
                <div class="activity-time">2 minutes ago</div>
                <div class="activity-title">New user registered</div>
                <div class="activity-desc"
                  >Sarah Connor joined the platform</div
                >
              </div>
              <div class="activity-item">
                <div class="activity-time">15 minutes ago</div>
                <div class="activity-title">Order completed</div>
                <div class="activity-desc"
                  >Order #ORD-001 was successfully processed</div
                >
              </div>
              <div class="activity-item">
                <div class="activity-time">1 hour ago</div>
                <div class="activity-title">Payment received</div>
                <div class="activity-desc">$249.99 payment from John Smith</div>
              </div>
              <div class="activity-item">
                <div class="activity-time">3 hours ago</div>
                <div class="activity-title">Product updated</div>
                <div class="activity-desc">MacBook Pro inventory updated</div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div class="card" v-if="view == 'records'">
          <template v-if="records && records.length > 1">
            <div class="card-header">
              <h3 class="card-title">Recent Orders</h3>
            </div>
            <div class="card-content">
              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-001</td>
                      <td>John Smith</td>
                      <td>$249.99</td>
                      <td><span class="status active">Complete</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-002</td>
                      <td>Sarah Johnson</td>
                      <td>$89.50</td>
                      <td><span class="status pending">Processing</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-003</td>
                      <td>Mike Davis</td>
                      <td>$159.75</td>
                      <td><span class="status active">Complete</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-004</td>
                      <td>Emily Brown</td>
                      <td>$299.00</td>
                      <td><span class="status inactive">Cancelled</span></td>
                    </tr>
                    <tr>
                      <td>#ORD-005</td>
                      <td>Alex Wilson</td>
                      <td>$199.25</td>
                      <td><span class="status pending">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </template>
          <template v-else>
            <h4 class="text-center">No records</h4>
          </template>
        </div> -->
        <DataTable v-if="view == 'records'"></DataTable>
        <DataForm v-if="view == 'form'" :key="dataFormKey"></DataForm>

        <!-- <div class="card">
          <div class="card-header">
            <h3 class="card-title">Quick Actions</h3>
          </div>
          <div class="card-content">
            <div
              style="
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
              "
            >
              <div class="form-group">
                <label class="form-label">Add New User</label>
                <input
                  type="email"
                  class="form-input"
                  placeholder="Enter email address"
                />
                <button class="btn btn-primary" style="margin-top: 0.5rem"
                  >Add User</button
                >
              </div>

              <div class="form-group">
                <label class="form-label">Quick Report</label>
                <select class="form-select">
                  <option>Sales Report</option>
                  <option>User Analytics</option>
                  <option>Revenue Summary</option>
                  <option>Product Performance</option>
                </select>
                <button class="btn btn-secondary" style="margin-top: 0.5rem"
                  >Generate</button
                >
              </div>

              <div class="form-group">
                <label class="form-label">System Status</label>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem">
                  <button class="btn btn-primary">All Systems</button>
                  <button class="btn btn-secondary">Check Health</button>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import PocketBase from "pocketbase";
import { useAdminStore } from "./../stores/admin-store";
import { storeToRefs } from "pinia";
// import RsmpTForm from "./Rsmp-T-Form.vue";
import DataForm from "./DataForm.vue";
import DataTable from "./DataTable.vue";

const pbUrl = "https://pb-api.resourcetrackr.com";
const pb = new PocketBase(pbUrl);
const store = useAdminStore();
const { isLoading, authUser, records, view, selectedMarker, dataFormKey } =
  storeToRefs(store);

const changeView = (v) => {
  selectedMarker.value = null;
  view.value = v;
  dataFormKey.value = Math.random();
};

onMounted(async () => {
  isLoading.value = false;
  await store.getUser();
  // // console.log(authUser.value);
  // try {
  //   const record = await pb.collection("rsmp_data").getFullList({
  //     filter: "Name_of_Organization_Agency = 'WHO'",
  //   });
  //   // await axios.post(`${pbUrl}/api/support/lgas`, filter).then((res) => {
  //   //   this.mapLgaData[this.view] = null;
  //   //   this.mapLgaData[this.view] = res.data;
  //   // });

  //   records.value = record;
  //   console.log(records.value);
  // } catch (error) {
  //   console.log(error);
  // }
  // isLoading.value = false;
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #6366f1;
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
  --border-radius: 12px;
  --transition: all 0.3s ease;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, var(--gray-light) 0%, #e2e8f0 100%);
  color: var(--dark);
  line-height: 1.6;
  max-width: 100vw;
  overflow-x: hidden;
}

.container {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  min-height: 100vh;
  min-width: 100vw;
  padding: 0px;
  margin: 0px;
  padding-right: 0px;
  transition: var(--transition);
  overflow: hidden;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 1000;
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: var(--border-radius);
  cursor: pointer;
  box-shadow: var(--shadow);
}

.mobile-toggle:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background: linear-gradient(180deg, var(--dark) 0%, var(--dark-light) 100%);
  color: white;
  padding: 2rem 0;
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
  overflow-y: auto;
}

.logo {
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-menu {
  list-style: none;
}

.nav-item {
  margin-bottom: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: #cbd5e1;
  text-decoration: none;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: var(--primary);
  transform: scaleY(0);
  transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
  background: rgba(99, 102, 241, 0.1);
  color: white;
  transform: translateX(8px);
}

.nav-link:hover::before,
.nav-link.active::before {
  transform: scaleY(1);
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  fill: currentColor;
}

/* Header */
.header {
  grid-area: header;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: var(--shadow);
  border-bottom: 1px solid #e2e8f0;
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 400px;
  margin: 0 2rem;
}

.search-input {
  width: 100%;
  padding: 12px 20px 12px 50px;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: var(--transition);
  background: var(--gray-light);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background: white;
}

.search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  fill: var(--gray);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.profile-img:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow);
}

/* Main Content */
.main {
  grid-area: main;
  padding: 1rem;
  overflow-y: auto;
  max-height: 95vh;
}

.page-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.page-subtitle {
  color: var(--gray);
  font-size: 1.1rem;
}

/* Stats Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  border: 1px solid #e2e8f0;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--gray);
  font-weight: 500;
  margin-bottom: 1rem;
}

.stat-change {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
}

.stat-change.positive {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.stat-change.negative {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.card {
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.card-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  background: var(--gray-light);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark);
}

.card-content {
  padding: 2rem;
}

/* Table */
.table-container {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.table th {
  background: var(--gray-light);
  font-weight: 600;
  color: var(--dark);
}

.table tr:hover {
  background: rgba(99, 102, 241, 0.05);
}

.status {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status.active {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.status.pending {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning);
}

.status.inactive {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

/* Activity Feed */
.activity-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  position: relative;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-item::before {
  content: "";
  position: absolute;
  left: -2rem;
  top: 2rem;
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
}

.activity-time {
  font-size: 0.8rem;
  color: var(--gray);
  margin-bottom: 0.5rem;
}

.activity-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.activity-desc {
  color: var(--gray);
  font-size: 0.9rem;
}

/* Form Elements */
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--dark);
}

.form-input,
.form-select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: white;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: var(--gray-light);
  color: var(--dark);
  border: 2px solid #e2e8f0;
}

.btn-secondary:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
}

/* Mobile Menu Toggle */
#mobile-menu-toggle {
  display: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: -280px;
    width: 280px;
    height: 100vh;
    z-index: 999;
    transition: var(--transition);
  }

  #mobile-menu-toggle:checked ~ .container .sidebar {
    left: 0;
  }

  .header {
    padding-left: 80px;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .main {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .header {
    padding: 0 1rem 0 80px;
  }

  .search-box {
    margin: 0 1rem;
  }

  .table-container {
    font-size: 0.9rem;
  }
}

/* Overlay for mobile menu */
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

@media (max-width: 768px) {
  #mobile-menu-toggle:checked ~ .overlay {
    display: block;
  }
}

/* Progress Bar */
.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 4px;
  transition: width 0.6s ease;
}

/* Badges */
.badge {
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 20px;
  margin-left: 0.5rem;
}

.badge-new {
  background: rgba(6, 182, 212, 0.1);
  color: var(--accent);
}

/* Animation Classes */
.fade-in {
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover Effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Focus visible for accessibility */
.nav-link:focus-visible,
.btn:focus-visible,
.form-input:focus-visible,
.form-select:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
</style>
