<template>
<div class="min-h-screen flex bg-cover bg-no-repeat bg-center bg-[url('assets/images/background.jpg')]">
    
    <div class="h-screen flex flex-col w-64 bg-gray-800 text-white">
        
      <div class="flex items-center justify-center h-16 bg-gray-900">
        <span class="text-lg font-semibold">Home</span>
      </div>
      <nav class="flex-1 px-2 py-4 space-y-1">
        <NuxtLink to="/dashboard">
          <div class="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
            <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
              Home
            </a>
          </div>
        </NuxtLink>
        <NuxtLink to="/profile"> 
          <div class="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
            <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
              Profile
            </a>
          </div>
        </NuxtLink>
        <NuxtLink to="/">
          <div class="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
            <a href="#" class="flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700">
              Logout
            </a>
          </div>
        </NuxtLink>
        <form @submit.prevent="submitData">
          <div class="relative gap-1 mb-3">
            <input
              class="mt-1 block sm:w-60 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
              type="time"
              v-model="time"
              id="timeInput"
              required
            />
            <br />
            <input
              class="mt-1 block sm:w-60 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
              type="date"
              v-model="date"
              id="dateInput"
              required
            />
            <br />
            <select
              class="mt-1 block sm:w-60 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
              v-model="status"
              id="statusInput"
              required
            >
              <option value="" disabled>IN / OUT</option>
              <option value="IN">IN</option>
              <option value="OUT">OUT</option>
            </select>
            <br />
            <button
              class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm font-medium text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </nav>
    </div>
    <dashboardpage />
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from '@/store/useDataStore';
const time = ref('');
const date = ref('');
const status = ref('');
const { addData } = useDataStore();



const submitData = async () => {
  // Create a plain object with values
  const newData = {
    time: time.value,
    date: date.value,
    status: status.value
  };

  // Log the newData object for debugging
  console.log('Submitting data:', newData);

  try {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (response.ok) {
      addData(newData);
      time.value = '';
      date.value = '';
      status.value = '';
    } else {
      console.error('Failed to submit data:', response.statusText);
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

// Function to format time from 24-hour to 12-hour format

</script>