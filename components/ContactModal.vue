<template>
  <div class="relative my-auto mt-48 mx-2 md:mx-auto">
    <div class="bg-gray-400 rounded-md opacity-100 relative mx-auto max-w-md md:max-w-xl">
      <h2 class=" text-center text-3xl text-gray-900">
        Request Your Free Consultation
      </h2>
      <form class="">
        <div :class="{ 'form-group--error': $v.name.$error }" class="text-center">
          <input v-model.trim="$v.name.$model" placeholder="Name" class="bg-gray-900 text-gray-300 border-gray-900 rounded py-2 pl-4 w-10/12 md:w-3/4 my-2">
        </div>
        <div v-if="!$v.name.required" class="text-red-500 pl-12 md:pl-20">
          * required
        </div>
        <div v-if="!$v.name.minLength" class=" text-red-500 pl-12 md:pl-20">
          Name must have at least {{ $v.name.$params.minLength.min }} letters.
        </div>

        <div :class="{ 'form-group--error': $v.emailAdd.$error }" class="text-center">
          <input v-model.trim="$v.emailAdd.$model" placeholder="Email" class="bg-gray-900 text-gray-300 border-gray-900 rounded py-2 pl-4 w-10/12 md:w-3/4 my-2">
        </div>
        <div v-if="!$v.emailAdd.required" class="text-red-500 pl-12 md:pl-20">
          * required
        </div>
        <div v-if="!$v.emailAdd.email" class="text-red-500 pl-12 md:pl-20">
          Email is invalid
        </div>

        <div :class="{ 'form-group--error': $v.message.$error }" class="text-center">
          <textarea v-model.trim="$v.message.$model" rows="4" placeholder="Message" class="bg-gray-900 text-gray-300 border-gray-900 rounded py-2 pl-4 w-10/12 md:w-3/4 my-2" />
        </div>
        <div v-if="!$v.message.maxLength" class=" text-red-500 pl-12 md:pl-20">
          Please limit your message to {{ $v.message.$params.maxLength.max }} characters.
        </div>
        <div v-if="$v.termsAgree.$error" class="mx-6 text-red-600">
          Accept Terms and Conditions
        </div>
        <div :class="{ 'form-group--error': $v.termsAgree.$error }" class="text-sm text-left text-gray-900 my-3 mx-6">
          <span>
            <input
              id="terms"
              v-model="$v.termsAgree.$model"
              @change="$v.termsAgree.$touch()"
              type="checkbox"
            >
          </span> By submitting this form, I agree to the
          <a class=" text-green-600 hover:text-green-800" href="/tos" rel="blank">
            Terms and Conditions
          </a> For more information about our
          privacy practices, see our
          <a class=" text-green-600 hover:text-green-800" href="privacy" rel="blank">
            Privacy Statement
          </a>
        </div>
        <div class="text-center py-3">
          <button @click.prevent="close" class="px-4 py-2 rounded bg-red-600 text-gray-300">
            close
          </button>
          <button @click.prevent="reset" class="px-4 py-2 rounded bg-orange-600 text-gray-300">
            reset
          </button>
          <button @click.prevent="submit" :disabled="submitStatus === 'PENDING'" type="submit" class="px-4 py-2 rounded bg-green-600 text-gray-300">
            submit
          </button>
        </div>
        <p v-if="submitStatus === 'OK'" class="text-green-600 text-center text-lg pb-2">
          Thank you for your interest. I will get in contact with you as soon as possible.
        </p>
        <p v-if="submitStatus === 'ERROR'" class="text-red-600 text-center pb-2">
          Please fix the errors indicated.
        </p>
        <p v-if="submitStatus === 'PENDING'" class=" text-orange-600 text-center pb-2">
          Sending...
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleModal: false
    }
  }
}
</script>
