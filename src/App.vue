<template>
  <div id="cv">
    <PersonalInfo 
      fullName="John Doe"
      email="john.doe@example.com"
      phone="(xxx) xxx-xxxxx"
      birthday="05/NOV/1991"
    />
  </div>
</template>

<script>
import PersonalInfo from './components/PersonalInfo.vue'

export default {
  name: 'cv',
  components: {
    PersonalInfo
  }
}
</script>

<style>
html {
  background: rgb(204,204,204);
}

body {
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}

h3 {
  text-align: left;
  font-size: 17px;
  margin-top: 0;
  margin-bottom: 0;
  padding: .4cm 0;
}

* {
  box-sizing: border-box;
}

#cv {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
