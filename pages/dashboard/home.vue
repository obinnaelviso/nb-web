<template>
  <div class="w-full">
    <div class="flex">
      <div class="d-sidebar flex-none px-2 py-10 border-r-3 border-opacity-75 shadow h-screen bg-white hidden absolute sm:relative sm:block">
        <DashboardSidebar />
      </div>
      <div class="main flex-grow col-span-10">
        <DashboardNavbar />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home'
  }
}
</script>
