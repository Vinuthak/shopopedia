import { defineStore } from 'pinia'
import { db, auth } from '@/utility/firebaseConfig'
import { setDoc, doc } from 'firebase/firestore'
import { computed, ref } from 'vue'
import { ROLE_ADMIN, ROLE_USER } from '@/constants/appConstants'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  const signUpUser = async (email, password) => {
    isLoading.value = true
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'users', userCredentials.user.uid), {
        email: userCredentials.user.email,
        role: ROLE_USER,
        createAt: new Date(),
      })
      user.value = userCredentials.user
      user.role = ROLE_USER
      error.value = null
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return { user, error, isLoading, signUpUser }
})
