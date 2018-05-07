<style lang="scss" scoped>

.uivWrap {
    margin: 0 auto;
    width: 960px;
    padding: 20px;
}

</style>


<template lang="html">
  <div class="uivWrap">
    <dropdown ref="dropdown">
      <btn type="primary" class="dropdown-toggle">Dropdown <span class="caret"></span></btn>
      <template slot="dropdown">
        <li><a role="button">Action</a></li>
        <li><a role="button">Another action</a></li>
        <li><a role="button">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a role="button">Separated link</a></li>
      </template>
    </dropdown>

  </div>
</template>

<script>
import * as uiv from 'uiv'

export default {

};

</script>
