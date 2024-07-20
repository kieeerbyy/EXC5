<template>
    <Navbar />
    <div class="min-h-screen flex bg-cover bg-no-repeat bg-center bg-[url('assets/images/background.jpg')]">
      <div class="h-screen flex flex-col w-64 bg-gray-800 text-white">
        <div class="flex items-center justify-center h-16 bg-gray-900">
          <span class="text-lg font-semibold ease">Profile</span>
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
        </nav>
      </div>
      <div class="flex-1">
            <main class=" justify-center items-center p-4 min-h-screen">
                <div class="bg-white p-8 rounded-lg shadow-lg text-center">
                    <img src="/assets/images/user.jpeg" alt="Profile Picture" class="text-right w-32 h-32 rounded-full mx-auto mb-4">

                <h1 class="text-2xl font-bold mb-2">Alyasa Sumo</h1>
                <p class="text-gray-600 mb-4">As a devoted student of Computer Science, I am actively pursuing an internship opportunity that will provide me with a platform to elevate my aptitude and expertise in this esteemed discipline. I am seeking an immersive experience wherein I can foster my skills and knowledge in the field of Computer Science. Passionate about creating interactive applications and experiences on the web.</p>

                

                <div class="btn-group space-x-4">
                    <a href="#" class="btn bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600">Edit</a>
                    <a href="#" class="btn bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Contact</a>
                </div>
                </div>
                <div class="flex-1 py-6">

                <div class="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700 text-white">Project 1</div>
                        <div class="p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">FINISH</div></div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700 text-white">Project 2</div>
                        <div class="p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">FINISH</div></div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700 text-white">Project 3</div>
                        <div class="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">FINISH</div></div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700 text-white">Project 4</div>
                        <div class="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">FINISH</div></div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700 text-white">Project 5</div>
                        <div class="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">PENDING</div></div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700 text-white">Project 6</div>
                        <div class="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">PENDING</div></div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700 text-white">Project 7</div>
                        <div class="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">PENDING</div></div>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="mb-2 text-lg font-semibold text-gray-700">Project 8</div>
                        <div class="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center w-full h-48 bg-cover bg-no-repeat bg-center bg-[url('assets/images/project.jpg')]"><div class="mt-1 block w-full sm:w-60 p-3 bg-emerald-500 border border-transparent rounded-md text-white text-sm font-medium text-center">PENDING</div></div>
                    </div>
                </div>
                </div>

            </main>
        </div>
    </div>
  </template>
  
  <script setup>

  
  
  </script>
  
  <style scoped>
  /* Custom styles for the dashboard */
  </style>
  