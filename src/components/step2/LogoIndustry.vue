<template>
  <div id="wizard-step-1" class="inner-wrapper" data-step-title="Logo for">
    <!--src/partials/pages/wizard/wizard-v1/-->
    <div class="step-content">
      <div class="step-title">
        <h1 class="dark-inverted">What's your logo for?</h1>
        <h2 class="dark-inverted">Add your business or industry to get the best options for you.</h2>
      </div>
      <div class="wizard-types">
        <v-container id="logoindustry" fluid>
          <v-row class="form" style="display:flex;align-items:center;">
            <v-col md="6" offset="3" class="text-center">
              <v-autocomplete
                label="Select Industry"
                dense
                rounded
                solo
                v-model="industry"
                :items="industries"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import listIndustries from '../../../public/assets/data/industries.json';
export default {
  name: "LogoIndustry",
  data() {
    return {
    industry: null,
    industries:listIndustries.industries,
  }
  },
};
</script>
<style lang="scss" scoped>
    @import './LogoIndustry.scss'
</style>