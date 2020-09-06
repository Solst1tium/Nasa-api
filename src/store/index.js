import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const DemoKey= 'NbHrk6roKbSsEmYSRXhyMsZfqKwSSbbPb4VRNuDg'

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    imageApod: undefined,
    image: {
      "copyright": "Andrew Klinger",
      "date": "2020-09-04",
      "explanation": "Open star cluster NGC 7380 is still embedded in its natal cloud of interstellar gas and dust popularly known as the Wizard Nebula. Seen on the left, with foreground and background stars along the plane of our Milky Way galaxy it lies some 8,000 light-years distant, toward the constellation Cepheus. In apparent size on the sky, a full moon would cover the 4 million year young cluster and associated nebula, normally much too faint to be seen by eye. Made with telescope and camera firmly planted on Earth, the image reveals multi light-year sized shapes and structures of cosmic gas and dust within the Wizard though, in a color palette made popular in Hubble Space Telescope images. Recorded with narrowband filters, the visible wavelength light from the nebula's hydrogen, oxygen, and sulfur atoms is transformed into green, blue, and red colors in the final digital composite.",
      "hdurl": "https://apod.nasa.gov/apod/image/2009/AndrewKlinger_wizard_sho_res25_sig.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Wizard Nebula",
      "url": "https://apod.nasa.gov/apod/image/2009/AndrewKlinger_wizard_sho_res25_sig1024.jpg"
    }
  },
  mutations: {
    SET_APOD(state, img){
      state.image = img
    },
    SET_USER(state, user){
      state.currentUser =  user
    },
    SET_IMAGE(state, img){
      state.imageApod= img
    }
  },
  actions: {
    setUser({commit}, user){
      commit('SET_USER', user)

    },
    setApod ({ commit }){
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${DemoKey}`).then((response) =>
      {
        if(response.data.url){
        commit('SET_APOD', response.data)
        }
      }).catch((error) => {
        console.log(error)
      })
    },

    setImage ({ commit }, mydate){
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${DemoKey}&date=${mydate}`).then((response) =>
      {
        if(response.data.url){
        commit('SET_IMAGE', response.data)
        }
      }).catch((error) => {
        console.log(error)
      })
    }




  },
  modules: {
  }
})
