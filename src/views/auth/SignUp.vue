<template>
  <div class="container py-5 my-3">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4 border rounded">
        <div class="shadow-sm">
          <div class="card-body p-4">
            <h4 class="text-center mb-4">Create Account</h4>
            <form @submit.prevent="handleSignup">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" id="email" required />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  id="password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-success w-100">
                <span class="spinner-border spinner-border-sm me-2"></span>
                Create Account
              </button>
              <div v-if="error" class="alert alert-danger mt-3 mb-0">{{ error }}</div>
            </form>
            <p class="mt-3 form-label text-center">
              Already have an account?
              <router-link :to="APP_ROUTE_NAMES.SIGN_IN">Login here</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useSwal } from '@/utility/useSwal'
import { useRouter } from 'vue-router'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { useAuthStore } from '@/stores/authStore'

const form = reactive({
  email: '',
  password: '',
})
const error = ref('')
const router = useRouter()
const { showSuccess, showError } = useSwal()
const authStore = useAuthStore()

const handleSignup = async () => {
  console.log('submitting')
  try {
    error.value = ''
    console.log(form)
    authStore.signUpUser(form.email, form.password)
    showSuccess('Account created successfully!')
  } catch (err) {
    error.value = err.message
    showError(error.value)
  }
}
</script>
