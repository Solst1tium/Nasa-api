<template>
  <v-container>
  <v-row justify="center">
    <v-col cols="3">
      <v-date-picker @click:date="getPicture" v-model="picker"></v-date-picker>
    </v-col> 
    <v-col cols="9">
      <v-img v-if="imageApod" :src="imageApod.url"></v-img>      
    </v-col> 
  </v-row>
  </v-container>
  
</template>

<script>
import{mapActions, mapState} from 'vuex'
  export default {
    data: () => ({
      picker: new Date().toISOString().substring(0, 10),
    }),
    methods: {
      ...mapActions(['setImage']),
      getPicture(date){
        this.setImage(date)       
      }      
    },
    computed: {
      ...mapState(['imageApod'])
    },
  }
</script>