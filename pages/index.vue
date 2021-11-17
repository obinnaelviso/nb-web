<template>
  <div class="bg-white grid md:grid-cols-2 gap-4 px-4">
    <!-- Logo -->
    <div class="absolute top-5 left-5">
      <img src="~/assets/img/landing-bg.png">
    </div>
    <div class="absolute bg-landing-pattern top-20 left-0 right-0 ml-auto mr-auto w-20 h-20"></div>
    <div class="absolute bg-landing-pattern top-20 right-20 w-32 h-32"></div>
    <div class="absolute bg-landing-pattern top-52 left-1/4 w-48 h-48"></div>
    <div class="h-screen w-full flex flex-wrap content-center z-10">
      <div class="flex-1">
        <input type="text" class="w-full rounded focus:shadow-lg">
      </div>
    </div>
    <div class="h-screen w-full bg-black bg-opacity-50 z-10"></div>
  </div>
</template>

<script>
export default {}
</script>
