<template>
    <div class="nav-menu">
        <a class="menulinks"><i></i></a>
        <ul class="mainmenu">
            <li v-for="item in menuItems" v-bind:key="item"><a href="javascript:void(0)">{{ item }}</a></li>		                        
        </ul>
    </div>		            
</template>

<script>

export default {
  name: 'NavMenu',  
  data() {
      return {
          menuItems: ['Science', 'Partners', 'Try it free']
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
