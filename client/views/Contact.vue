<template>
  <div class="page">
    <el-nav />

    <div class="body-container" @click="$store.commit('SET_CART_VISIBLE', false)">
      <div class="content">
        <div class="form-container">
          <h3>Contact</h3>
          <div class="field">
            <label class="label">Name</label>
            <p class="control">
              <input v-model="name" class="input" type="text" placeholder="Your name">
            </p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
              <input v-model="email" class="input" type="email" placeholder="Your email" value="">
            </p>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <p class="control">
              <span class="select">
                <select v-model="subject">
                  <option value="0">Technical Issue</option>
                  <option value="1">Order Issue</option>
                  <option value="2">Complaint</option>
                  <option value="3">Other</option>
                </select>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <p class="control">
              <textarea v-model="message" class="textarea" placeholder="Your message"></textarea>
            </p>
          </div>

          <div class="field is-grouped">
            <p class="control">
              <button @click="submit" class="button is-primary">Submit</button>
            </p>
          </div>
        </div>
        <p>
          <strong class="is-block">Point of Contact</strong>
          <span class="icon is-small"><i class="fa fa-envelope"></i></span> John Doe
          <br>
          <span class="icon is-small"><i class="fa fa-phone"></i></span> (555) 555-5555
          <br>
          <span class="icon is-small"><i class="fa fa-fax"></i></span> (555) 555-5556
        </p>
      </div>
    </div>

    <el-footer />
  </div>
</template>

<script>
import ElNav from 'components/Navigation'
import ElFooter from 'components/Footer'

export default {
  components: {
    ElNav,
    ElFooter
  },
  data() {
    return {
      name: '',
      email: '',
      subject: 0,
      message: ''
    }
  },
  methods: {
    submit() {
      // SUBMIT FORM

      this.$store.dispatch('addAlert', {
        type: 'is-success',
        message: 'Message successfully sent!'
      })

      // Clear fields
      this.name = ''
      this.email = ''
      this.subject = 0
      this.message = ''
    }
  }
}
</script>

<style scoped>
  .form-container {
    margin-right: 1em;
    width: 50%;
  }

  .body-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-bottom: 120px;
  }

  .content {
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .content > p {
    font-size: 16px;
    margin-left: 20px;
    margin-top: 7em;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .content {
      margin: 0.5em;
    }

    .form-container {
      width: 100%;
    }

    .form-container:first-child {
      margin-top: 0.3em;
    }

    .content > p {
      margin-top: 1em;
      margin-left: -10.4em;
    }
  }
</style>
