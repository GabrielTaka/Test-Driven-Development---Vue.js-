
import { shallowMount } from '@vue/test-utils'
import SignIn from './sign-in.vue'

import EventBus from '@/plugins/event-bus.js'
import Vuelidate from 'vuelidate'

import Vue from 'vue'

Vue.use(EventBus)
Vue.use(Vuelidate)

describe('SignIn', () => {
  
  let wrapper 
  beforeAll( () => {
    wrapper = shallowMount(SignIn)
  })

  test('Se o estado do validation é inicialmente $invalid == true', () => {
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
  })

  test('Se o estado do validation é $invalid == false quando todos os campos obrigatórios forem preenchidos', () => {
    wrapper.setData({
      username: 'gabriel',
      password: '12345'

    })
    expect(wrapper.vm.$v.$invalid).toBeFalsy()
  })

  test('é uma instância do Vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

})
