<template>
  <div
    class="
      block
      p-8
      overflow-hidden
      border border-gray-100
      dark:border-gray-500
      rounded-lg
    "
  >
    <div class="justify-start sm:flex">
      <div class="flex-shrink-0 hidden mr-3 sm:block">
        <img
          alt="Paul Clapton"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="object-cover w-16 h-16 rounded-lg shadow-sm"
        />
      </div>
      <div>
        <h5 class="text-xl font-bold text-gray-900 dark:text-gray-200">
          Anonimak
        </h5>

        <p class="mt-1 text-xs font-medium text-teal-500">@anonimak</p>
      </div>
    </div>

    <div class="mt-4 sm:pr-8">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
        provident a, ipsa maiores deleniti consectetur nobis et eaque.
      </p>
    </div>

    <dl class="flex mt-6">
      <div class="flex flex-col-reverse">
        <dt class="text-sm font-medium text-gray-600 dark:text-gray-300">
          Published
        </dt>
        <dd class="text-xs text-gray-500">31st June, 2021</dd>
      </div>

      <div class="flex flex-col-reverse ml-3 sm:ml-6">
        <dt class="text-sm font-medium text-gray-600 dark:text-gray-300">
          Reading time
        </dt>
        <dd class="text-xs text-gray-500">3 minute</dd>
      </div>
    </dl>
  </div>
</template>