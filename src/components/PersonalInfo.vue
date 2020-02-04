<template>
  <div class="about-me">
    <!-- About you -->
    <header class="personal-info">
      <h2 class="name">{{ fullName.toUpperCase() }}</h2>
      <div class="contact">
        <div class="email">
          <strong>Email:&nbsp;</strong> {{ email }}
        </div>
        <div class="phone">
          <strong>Phone:&nbsp;</strong> {{ phone }}
        </div>
        <div class="birthday">
          <strong>Born:&nbsp;</strong> {{ birthday }}
        </div>
      </div>

      <!-- Goals and etc -->
      <div class="goals">
        Webdeveloper focused in <i>Frontend</i> development with JavaScript, VueJS and NodeJS.
      </div>
    </header>

    <Experiences />
    <Graduation />
    <ExtraCourses />

    <!-- How many languages do you speak? What's their level? -->
    <div class="languages">
      <h3>Languages</h3>
      <ul>
        <li class="language">Brazillian Portuguese - <i>Native</i></li>
        <li class="language">English - <i>Fluent / Advanced</i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Experiences from './Experiences'
import Graduation from './Graduation'
import ExtraCourses from './ExtraCourses'

export default {
  name: 'personalInfo',
  props: {
    fullName: String,
    email: String,
    phone: String,
    birthday: String
  },
  components: {
    Experiences,
    Graduation,
    ExtraCourses
  }
}
</script>

<style scoped>
  .about-me {
    height: inherit;
  }

  .name {
    margin: 0;
    padding: 0.4cm 0 0;
    font-size: 21px;
  }

  .name, .goals {
    text-align: center;      
  }

  .contact {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.4cm 0 0;
    font-size: 14px;
  }

  .goals {
    font-size: 15px;
    padding: 0.4cm 0;
  }

  .languages {
    margin: 0 2rem;
  }

  .language {
    font-size: 15px;
  }
</style>
