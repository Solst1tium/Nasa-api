<template>
  <div class="home">
    <v-img height= "100vh" :src="image.url">  
    <Login/>
    </v-img> 
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    Login
  }, 
  methods: {
    ...mapActions (['setApod'])
  },
  created() {
    this.setApod()   
    
  },
  computed: {
    ...mapState(['image'])
  },
}

</script>
