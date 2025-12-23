<script>
import PersonalInfos from "./PersonalInfos.vue";
import Skills from "./Skills.vue";

export default {
  components: {
    PersonalInfos,
    Skills,
  },
};
</script>
<template>
  <div class="pt-20 px-10 lg:pr-30 py-10">
    <PersonalInfos />
    <Skills />
  </div>
</template>
