<template>
  <div>
    <button :class="{ 'open': showMenu }" class="menu-icon" for="menu-btn" @click="showMenu = !showMenu">
      <span class="navicon" />
    </button>
    <nav :class="{ 'open': showMenu }" class="navbar">
      <ul @click="showMenu = !showMenu">
        <li v-if="!loggedIn" class="navbar-item">
          <router-link :to="{ name: 'Meer informatie' }">
            Huis verkopen
          </router-link>
        </li>
        <li v-if="!loggedIn" class="navbar-item">
          <router-link :to="{ name: 'Woning' }">
            Huis kopen
          </router-link>
        </li>
        <li v-if="loggedIn && !(['DashboardSeller'].includes($route.name) || ['Huis'].includes($route.name))"
          class="navbar-item">
          <router-link :to="{ name: 'Dashboard' }" tag="button">
            Woning dossier
          </router-link>
        </li>
        <li v-if="!loggedIn" class="navbar-item">
          <router-link :to="{ name: 'Inloggen' }">
            Inloggen
          </router-link>
        </li>
        <li v-if="loggedIn && (['DashboardSeller'].includes($route.name) || ['Huis'].includes($route.name))"
          class="navbar-item">
          <router-link :to="{ name: 'Uitloggen' }" tag="button">
            Uitloggen
          </router-link>
        </li>
        <li v-if="!loggedIn" class="navbar-item">
          <router-link :to="{ name: 'Registreren' }" tag="button">
            Huis aanmelden
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Navigation",
  props: {
    showBranding: {
      required: false,
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      showMenu: false
    };
  },
  computed: {
    ...mapGetters(["loggedIn"]),
    ...mapState({
      userType: state => state.user.userType
    })
  }
};
</script>
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
