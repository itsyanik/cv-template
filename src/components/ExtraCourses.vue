<template>
  <!-- 
    Taking extra courses? Good. List them, the teachers, 
    where it happened and if it's done
  -->
  <div class="extra-courses">
    <h3>Extra Courses</h3>
    <div v-for="(courseData, i) in extraCourses" :key="i" class="about-extraCourses">
      <ul class="courses">
        <li class="course" v-for="(course, j) in courseData" :key="j">
          <span class="course-name"><i>{{ course.name }}</i>,</span>
          <span class="course-tutor">&nbsp;{{ course.tutor }}</span>
          <span class="location">&nbsp;- {{ course.location }}</span>
          <span v-if="course.finished" class="finished">&nbsp;| Done in {{ course.conclusion }};</span>
          <span v-else class="finished">&nbsp;| In progress.</span>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  name: "ExtraCourses",
  data() {
    return {
      extraCourses: []
    }
  },
  methods: {
    async getextraCourses() {
      await axios.get('extraCourses.json')
        .then(resp => {

          this.extraCourses = resp.data
        })
    }
  },
  mounted() {
    this.getextraCourses()
  }
}
</script>

<style>
  .extra-courses {
    margin: 0 2rem;
  }

  .course {
    font-size: 14px;
    margin: 5px 0;
  }

  .course-tutor {
    font-weight: bold;
  }
</style>