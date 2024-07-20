// store/useDataStore.js
import { ref } from 'vue';

// Initial data
const initialData = [
  { time: '08:00', date: '2023-07-20', status: 'IN' },
  { time: '10:00', date: '2023-07-21', status: 'OUT' },
];

const data = ref(initialData);

export const useDataStore = () => {
  const addData = (newData) => {
    data.value.push(newData);
  };

  return {
    data,
    addData,
  };
};
