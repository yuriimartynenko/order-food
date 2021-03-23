<template>
  <div class="max-w-980 mx-auto mb-4">
    <div class="">
      Profile
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { vuex } from '@/store'
import { router } from '@/router'

import useAuth from '@/hooks/auth'

export default defineComponent({
  name: 'Profile'
})
</script>
