<template>
  <div class="w-full">
    <div class="flex justify-center content-center flex-wrap h-screen">
      <div class="max-w-lg">
        <div class="card p-7">
          <img src="~/assets/img/logo.svg" class="logo mb-4" />
          <h4 class="mb-5">LOGIN</h4>
          <form>
            <div class="form-group">
              <label class="mb-2">Username/Email Address</label>
              <input type="text" class="w-full rounded">
            </div>
            <div class="form-group">
              <label class="mb-2">Password</label>
              <input type="password" class="w-full rounded">
            </div>
            <div class="form-group">
              <input type="checkbox" class="mr-2"> Remember me
            </div>
            <div class="form-group">
              <button class="bg-primary px-5 py-2 text-white rounded">Login</button>
            </div>
          </form>
          <div>
            Not yet registerd yet ? <nuxt-link :to="{ name: 'dashboard-register' }"> Register</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Login'
  }
}
</script>
<script setup>
</script>