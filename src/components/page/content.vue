<template lang="html">
    <div>
        <appHeader/>
        <appFooter/>
    </div>
</template>

<script>
import appHeader from '@/components/layout/header.vue'
import appFooter from '@/components/layout/footer.vue'

export default {
    components: {
      appHeader,
      appFooter
    },
}
</script>

<style lang="css" scoped>
</style>
