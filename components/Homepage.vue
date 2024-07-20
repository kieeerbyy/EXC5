<template>
    <div class="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center bg-[url('assets/images/background.jpg')]">
    <div class="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-75 rounded-xl shadow-xl-rgb(0 0)">
      <h2 class="text-2xl font-bold text-center text-gray-900">Attendance Monitoring</h2>
      <form @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <nuxt-link to="/dashboard">
          <button
            type="submit"
            class="flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-emerald-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

const email = ref('')
const password = ref('')


const handleSubmit = () => {
router.push({
  path: '/Sidebar',
  query: { email: email.value, password: password.value }
})
}
</script>

<style>
/* Ensure full height of the viewport */
html, body {
  height: 100%;
  margin: 0;
}
</style>
