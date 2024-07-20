<template>
    <div class="flex-1">
        <main class="flex-1 overflow-y-auto p-4">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TIME
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DATE
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(entry, index) in data"
                :key="index"
                class="bg-white divide divide-gray-200"
              >
                <td class="px-6 py-4 whitespace-nowrap">{{ formatTime(entry.time) }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ entry.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ entry.status }}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
</template>

<script setup>


import { useDataStore } from '@/store/useDataStore';

const { data } = useDataStore();

// Call fetchData to initialize data when the component is set up
// Function to handle form submission
const fetchData = async () => {
  const response = await fetch('/api/user');
  const fetchedData = await response.json();
  data.value = [...data.value, ...fetchedData];
};

// Call fetchData to initialize data when the component is set up
fetchData();

// Function to format time from 24-hour to 12-hour format
const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = ((hours % 12) || 12).toString().padStart(2, '0');
  return `${formattedHours}:${minutes} ${period}`;
};

  </script>
