import { User } from "types";

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false);
  const isAlertVisible = ref(false);
  const alertData = ref({
    type: 'info',
    title: '',
    message: ''
  })

  function setLoading(loading: boolean) {
    isLoading.value = loading;
  }

  function setAlertVisible(visible: boolean) {
    isAlertVisible.value = visible;
  }

  function showAlert(type: 'info' | 'error' | 'success', title: string, message: string) {
    isAlertVisible.value = true;
    alertData.value = {
      type,
      title,
      message
    }
  }

  return { isLoading, setLoading, alertData, isAlertVisible, showAlert, setAlertVisible }
})

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);

  const isAuthenticated = computed(() => Boolean(user.value));

  function setUser(newUser: User) {
    user.value = newUser;
  }

  return { user, isAuthenticated, setUser }
})
