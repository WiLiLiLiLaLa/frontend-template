<template>

</template>

<script>
  import { getAll, getById } from '@/api/student'

  export default {
    name: 'studentManage',
    data() {
      return {
        students: [],
        currentStudent: {}
      }
    },
    async mounted() {
      [this.students, this.currentStudent] = await Promise.all([getAll(), getById(3)])
    }
  }
</script>

<style scoped>

</style>
