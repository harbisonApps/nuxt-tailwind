<template>
  <div class="">
    <div class=" flex-col text-center mx-auto justify-center items-center">
      <div>
        <h2 class=" text-gray-300 text-4xl">
          Thank You
        </h2>
      </div>
      <Newsletter />
    </div>
  </div>
</template>

<script>
import Newsletter from '@/components/NewsLetter'
import {
  required,
  email
} from 'vuelidate/lib/validators'

export default {
  components: { Newsletter },
  data () {
    return {
      userForm: {
        name: '',
        email: '',
        accept: ''
      },
      isSubmitted: false
    }
  },
  validations: {
    userForm: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      accept: {
        required (val) {
          return val
        }
      }
    }
  },
  methods: {
    handleSubmit () {
      this.isSubmitted = true

      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      alert('SUCCESS!' + JSON.stringify(this.userForm))
    }
  }
}
</script>
