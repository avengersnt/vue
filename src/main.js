import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDoX0k_TXCtdymsTdksBg-HY_CRrUIqLNk',
    libraries: 'places'}})
