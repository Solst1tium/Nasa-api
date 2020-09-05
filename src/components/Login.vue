<template>
  <div>
    <v-card width="400px" class="mx-auto mt-5" >
      <v-card-title primary-title>
        <h1 class="mx-auto">Login</h1>
      </v-card-title>
      <v-card-text> 
        <v-form>
          <v-text-field name="name" label="userName" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field 
            @click:append= "showPassword = !showPassword" 
            :type="showPassword ? 'text' : 'password'" 
            label="showPassword" prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'">
          </v-text-field>
        </v-form>
      </v-card-text> 
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">login</v-btn>        
      </v-card-actions>
    </v-card>    
  </div>
</template>
<script>
export default {
   data: () => ({
    showPassword: false//para q no se vea l a contraseña
  }),
}
</script>