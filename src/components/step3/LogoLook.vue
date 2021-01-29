<template>
  <div id="wizard-step-2" class="inner-wrapper" data-step-title="Logo Look">
    <!--src/partials/pages/wizard/wizard-v1/-->
    <div class="step-content">
      <div class="step-title">
        <h1 class="dark-inverted">How should your logo look & feel?</h1>
        <h2 class="dark-inverted">We'll tailor the font, icons and colors to match your style.</h2>
      </div>
      <div class="wizard-types">
        <v-container id="logoname" fluid>
          <v-row class="form" style="display:flex;align-items:center;">
            <v-col md="6" offset="3" class="text-center">
              <v-chip-group v-model="logotype" column multiple>
                <v-chip large filter outlined class="yellow">Dynamic</v-chip>
                <v-chip large filter outlined class="blue">Fun</v-chip>
                <v-chip large filter outlined class="green">Playful</v-chip>
                <v-chip large filter outlined class="red">Timless</v-chip>
                <v-chip large filter outlined class="purple">Creative</v-chip>
                <v-chip large filter outlined class="yellow">Techy</v-chip>
                <v-chip large filter outlined class="blue">Fress</v-chip>
                <v-chip large filter outlined class="green">Formal</v-chip>
                <v-chip large filter outlined class="red">Hipster</v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"LogoLook",
    data:() => ({
    logotype: "",
  }),
    
}
</script>
<style lang="scss" scoped>
    @import './LogoLook.scss'
</style>