<template>
  <div class="graduation">
    <h3>Graduation</h3>
    <div class="about-course">
      <span class="course-duration">MONTH YYYY - MONTH YYYY</span>
      <span class="course-college">&nbsp;| Example University, Georgia -</span>
      <span class="course-name">
        <i>&nbsp;Computer Science.</i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Graduation"
}
</script>

<style scoped>
  .graduation {
    margin: 0 2rem;
  }

  .about-course {
    margin-bottom: .4cm;
  }

  .course-duration {
    font-size: 13.5px;
    color: #2227;
  }

  .course-college {
    font-size: 16px;
    font-weight: bold;
  }

  .course-name {
    font-size: 16px;
  }
</style>