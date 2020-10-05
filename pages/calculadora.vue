<template>
<div class="wrapper starter-page d-flex justify-content-center align-items-center">
  <div class="row">
    <div class="col-3 ">
      <div class="row">
        <info-contract></info-contract>
      </div>
      <div class="row">
        <save-result></save-result>
      </div>
    </div>
    <div class="col-9">
      <evo-table></evo-table>
    </div>
  </div>
</div>
</template>

<script>
import InfoContract from '@/components/pages/calculator/infoContract'
import evoTable from '@/components/pages/calculator/evolutionTable'
import saveResult from '@/components/pages/calculator/saveResult'
export default {
  layout: 'white-nav',
  components: {
    InfoContract,
    evoTable,
    saveResult
  }
}
</script>

<style scoped>
.starter-page {
  min-height: calc(100vh - 79px)
}
</style>
