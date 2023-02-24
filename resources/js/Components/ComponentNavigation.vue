<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);

defineProps({
  Login: Boolean
});

</script>

<template>
  <div>     
    <!-- No authentication NAV -->
    <nav class="bg-white border-b border-gray-100" v-if="!Login" >

      <!-- Primary Navigation Menu -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
              <div class="flex">
                  <!-- Logo -->
                  <div class="shrink-0 flex items-center">
                      <Link :href="route('home')">
                          <ApplicationLogo
                              class="block h-9 w-auto fill-current text-gray-800"
                          />
                      </Link>
                  </div>

                  <!-- Navigation Links -->
                  <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                      <NavLink :href="route('adviseur-index')" :active="route().current('adviseur-index')">
                          Adviseur
                      </NavLink>
                      <NavLink :href="route('admin-index')" :active="route().current('admin-index')">
                          Admin
                      </NavLink>
                  </div>
              </div>

              <!-- Hamburger -->
              <div class="-mr-2 flex items-center sm:hidden">
                  <button
                      @click="showingNavigationDropdown = !showingNavigationDropdown"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path
                              :class="{
                                  hidden: showingNavigationDropdown,
                                  'inline-flex': !showingNavigationDropdown,
                              }"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                          />
                          <path
                              :class="{
                                  hidden: !showingNavigationDropdown,
                                  'inline-flex': showingNavigationDropdown,
                              }"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                          />
                      </svg>
                  </button>
              </div>
          </div>
      </div>

      <!-- Responsive Navigation Menu -->
      <div
          :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
          class="sm:hidden"
      >
          <div class="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink :href="route('adviseur-index')" :active="route().current('adviseur-index')">
                Adviseur
            </ResponsiveNavLink>
            <ResponsiveNavLink :href="route('admin-index')" :active="route().current('admin-index')">
                Admin
            </ResponsiveNavLink>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pt-4 pb-1 border-t border-gray-200">
              <div class="px-4">
                  <div class="font-medium text-base text-gray-800">
                  </div>
                  <!-- <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div> -->
              </div>

              <div class="mt-3 space-y-1">
              </div>
          </div>
      </div>
  </nav>


    <!-- YES authentication NAV -->

    <nav class="bg-white border-b border-gray-100" v-if="Login" >
      <!-- Primary Navigation Menu -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
              <div class="flex">
                  <!-- Logo -->
                  <div class="shrink-0 flex items-center">
                      <Link :href="route('home')">
                          <ApplicationLogo
                              class="block h-9 w-auto fill-current text-gray-800"
                          />
                      </Link>
                  </div>

                  <!-- Navigation Links -->
                  <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink :href="route('adviseur-index')" :active="route().current('adviseur-index')">
                          Adviseur
                      </NavLink>
                      <NavLink :href="route('admin-index')" :active="route().current('admin-index')">
                          Admin
                      </NavLink>
                  </div>
              </div>

              <div class="hidden sm:flex sm:items-center sm:ml-6">
                  <!-- Settings Dropdown -->
                  <div class="ml-3 relative">
                      <Dropdown align="right" width="48">
                          <template #trigger>
                              <span class="inline-flex rounded-md">
                                  <button
                                      type="button"
                                      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                  >
                                      {{ $page.props.auth.user.name }}

                                      <svg
                                          class="ml-2 -mr-0.5 h-4 w-4"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                      >
                                          <path
                                              fill-rule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                              clip-rule="evenodd"
                                          />
                                      </svg>
                                  </button>
                              </span>
                          </template>

                          <template #content>
                              <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                              <DropdownLink :href="route('logout')" method="post" as="button">
                                  Log Out
                              </DropdownLink>
                          </template>
                      </Dropdown>
                  </div>
              </div>

              <!-- Hamburger -->
              <div class="-mr-2 flex items-center sm:hidden">
                  <button
                      @click="showingNavigationDropdown = !showingNavigationDropdown"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path
                              :class="{
                                  hidden: showingNavigationDropdown,
                                  'inline-flex': !showingNavigationDropdown,
                              }"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                          />
                          <path
                              :class="{
                                  hidden: !showingNavigationDropdown,
                                  'inline-flex': showingNavigationDropdown,
                              }"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                          />
                      </svg>
                  </button>
              </div>
          </div>
      </div>

      <!-- Responsive Navigation Menu -->
      <div
          :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
          class="sm:hidden"
      >
          <div class="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink :href="route('adviseur-index')" :active="route().current('adviseur-index')">
                Adviseur
            </ResponsiveNavLink>
            <ResponsiveNavLink :href="route('admin-index')" :active="route().current('admin-index')">
                Admin
            </ResponsiveNavLink>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pt-4 pb-1 border-t border-gray-200">
              <div class="px-4">
                  <div class="font-medium text-base text-gray-800">
                      {{ $page.props.auth.user.name }}
                  </div>
                  <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
              </div>

              <div class="mt-3 space-y-1">
                  <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                  <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                      Log Out
                  </ResponsiveNavLink>
              </div>
          </div>
      </div>
  </nav>
  </div>
</template>


<style scoped>
.navbar {
  z-index: -1;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  display: none;
}

.navbar ul {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

.navbar-item {
  display: inline-block;
  vertical-align: middle;
  margin-right: 40px;
}

.navbar-item:last-child {
  margin-right: 0;
}

.navbar-item a {
  color: #000;
  font-weight: 500;
}

.navbar-item a:hover {
  color: #fff;
}

.navbar-item button,
.navbar-mobile-item button {
  background: #94b0d3;
  color: #000;
  padding: 5px 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.6s ease;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar-item button:hover {
  color: #000;
  background-color: #fff;
}

.menu-btn {
  display: none;
}

.menu-icon {
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  margin-right: -20px;
  position: relative;
  user-select: none;
  z-index: 999;
}

.menu-icon .navicon {
  background: #000;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.menu-icon .navicon:before,
.menu-icon .navicon:after {
  background: #000;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.menu-icon .navicon:before {
  top: 5px;
}

.menu-icon .navicon:after {
  top: -5px;
}

@media screen and (max-width: 767.9px) {
  .navbar.open {
    display: block;
  }

  .navbar.open ul {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
    padding-top: 25%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
  }

  .menu-icon.open .navicon {
    background: transparent;
  }

  .menu-icon.open .navicon:before {
    transform: rotate(-45deg);
    background: #fff;
  }

  .menu-icon.open .navicon:after {
    transform: rotate(45deg);
    background: #fff;
  }

  .menu-icon.open:not(.steps) .navicon:before,
  .menu-icon.open:not(.steps) .navicon:after {
    top: 0;
  }

  .navbar.open ul {
    flex-direction: column;
    margin: auto 0;
  }

  .navbar.open ul li {
    margin-right: 0;
  }

  .navbar.open ul li a {
    padding: 8px;
    text-decoration: none;
    font-size: 30px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .navbar.open ul li button {
    margin-top: 20px;
    font-size: 28px;
    padding: 10px 20px;
    width: auto;
  }
}

@media (min-width: 768px) {
  .navbar {
    display: block;
    max-height: inherit;
  }

  .menu-icon {
    display: none;
  }

  .navbar-item button,
  .navbar-mobile-item button {
    padding: 7px 20px;
    width: 150px;
  }
}

@media screen and (max-height: 450px) {
  .navbar.open ul {
    padding-top: 5%;
  }

  .navbar.open ul li a {
    font-size: 14px;
  }

  .navbar.open ul li button {
    font-size: 12px;
  }
}
</style>
