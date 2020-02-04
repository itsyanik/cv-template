<template>
  <div class="experiences">
    <h3>Working experience</h3>

    <div v-for="(expObj, i) in experiences" :key="i" class="about-experiences">
      <div class="experience" v-for="(exp, j) in expObj" :key="j">
        <!-- Basic Info -->
        <span class="duration">{{ exp.duration }}&nbsp;</span>
        <span class="company">|&nbsp;{{ exp.company }}, {{ exp.location }}</span>
        <span class="job-title">&nbsp;- <i>{{ exp.jobTitle }}</i></span>
        <!-- What did you do? -->
        <ul class="job-characteristcs">
          <li class="job-characteristc" v-for="(char, k) in exp.jobCharacteristcs" :key="k">
            {{ char }}
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Experiences",
  data() {
    return {
      experiences: []
    }
  },
  methods: {
    async getExperiences() {
      await axios.get('experiences.json')
        .then(resp => {

          this.experiences = resp.data
        })
    }
  },
  mounted() {
    this.getExperiences()
  }
}
</script>

<style scoped>
  .experiences {
    margin: 0 2rem;
  }

  .experience {
    padding-top: .2cm;
  }

  .duration {
    font-size: 13.5px;
    color: #2227;
  }

  .company {
    font-size: 16px;
    font-weight: bold;
  }

  .job-title {
    font-size: 16px;
  }

  .job-characteristcs {
    font-size: 15px;
  }

  .job-characteristc {
    margin: 5px 0;
  }
</style>