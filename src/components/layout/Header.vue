<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src="../../assets/logo.png" style="width: 40px" class="mx-3" alt="ShopOPedia" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.HOME }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.PRODUCT_LIST }"
              >Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.PRODUCT_UPSERT }"
              >Add Product</router-link
            >
          </li>
        </ul>

        <ul class="d-flex navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-laptop"></i>
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li>
                <button @click="themeStore.setTheme('light')" class="dropdown-item">
                  <i class="bi bi-sun"></i> &nbsp;Light
                </button>
              </li>
              <li>
                <button @click="themeStore.setTheme('dark')" class="dropdown-item">
                  <i class="bi bi-moon-stars-fill"></i> &nbsp;Dark
                </button>
              </li>
              <li><hr class="dropdown-divider" /></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.SIGN_IN }"
              >Sign In</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.SIGN_UP }"
              >Sign Up</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { useThemeStore } from '@/stores/themeStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const themeStore = useThemeStore()
</script>
