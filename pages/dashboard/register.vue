<template>
  <div class="w-full">
    <div class="flex justify-center content-center flex-wrap h-screen">
      <div class="max-w-lg">
        <div class="card p-7">
          <nuxt-link to="/"><img src="~/assets/img/logo.svg" class="logo mb-4" /></nuxt-link>
          <h4 class="mb-5">REGISTER</h4>
          <form>
            <div class="form-group">
              <label class="mb-2">Username</label>
              <input type="text" class="w-full rounded">
            </div>
            <div class="form-group">
              <label class="mb-2">Email Address</label>
              <input type="text" class="w-full rounded">
            </div>
            <div class="form-group">
              <label class="mb-2">Password</label>
              <input type="password" class="w-full rounded">
            </div>
            <div class="form-group">
              <label class="mb-2">Confirm Password</label>
              <input type="password" class="w-full rounded">
            </div>
            <div class="form-group">
              <button class="bg-primary px-5 py-2 text-white rounded">Register</button>
            </div>
          </form>
          <div>
            Already have an account? <nuxt-link :to="{ name: 'dashboard-login' }"> Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Register'
  }
}
</script>
<script setup>
</script>