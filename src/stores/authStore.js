import { defineStore } from 'pinia'
import { db, auth } from '@/utility/firebaseConfig'
import { setDoc, doc } from 'firebase/firestore'
import { computed, ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  const signUpUser = async (email, password) => {
    isLoading.value = true
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredentials.user
      error.value = null
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return { user, error, isLoading, signUpUser }
})
