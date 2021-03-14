<template>
  <div class="dashboard-container">
    <line-chart-one 
      :customId="'exampleOne'"
      :customHeight="'500px'"
      :customWidth="'100%'">
    </line-chart-one>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import lineChartOne from '@/components/echats/lineChartOne'
export default {
  name: 'Dashboard',
  components: {
    lineChartOne
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    padding: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
