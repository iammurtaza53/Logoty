<template>
 <div id="wizard-step-0" class="inner-wrapper is-active" data-step-title="Logo Name">
          <!--src/partials/pages/wizard/wizard-v1/-->
          <div class="step-content">
            <div class="step-title">
              <h1 class="dark-inverted">Start designing your logo</h1>
              <h2 class="dark-inverted">Enter the name of your business or organization.</h2>
            </div>
            <div class="wizard-types">
             
                <v-container id="logoname" fluid>
                  <v-row class="form" style="display:flex;align-items:center;">
                    <v-col md="6" offset="3" class="text-center">
                      <v-text-field label="Enter Name"  hide-details="auto" ></v-text-field>
                       <v-text-field label="Enter Slogan"  hide-details="auto" ></v-text-field>
                     <v-col class="button-wrap">
                      <a  
                        href="#"
                        class="button h-button is-primary dark-inverted-hover is-rounded is-elevated is-bold type-select-button"
                      >Let's Go</a>
                    </v-col>
                    </v-col>
                  </v-row>
                </v-container>
                <!-- <div class="column is-4">
                  <div class="wizard-card">
                    <img src="assets/img/illustrations/wizard/type-1.svg" alt />
                    <h3 class="dark-inverted">UI/UX Design</h3>
                    <p>Some short explanation about the type goes here.</p>
                    <div class="button-wrap">
                      <a
                        href="#"
                        class="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                      >Continue</a>
                    </div>
                    <div class="learn-more-link">
                      <a href="#" class="dark-inverted-hover">Or Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="wizard-card">
                    <img src="assets/img/illustrations/wizard/type-2.svg" alt />
                    <h3 class="dark-inverted">Web Development</h3>
                    <p>Some short explanation about the type goes here.</p>
                    <div class="button-wrap">
                      <a
                        href="#"
                        class="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                      >Continue</a>
                    </div>
                    <div class="learn-more-link">
                      <a href="#" class="dark-inverted-hover">Or Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="wizard-card">
                    <img src="assets/img/illustrations/wizard/type-3.svg" alt />
                    <h3 class="dark-inverted">Marketing</h3>
                    <p>Some short explanation about the type goes here.</p>
                    <div class="button-wrap">
                      <a
                        href="#"
                        class="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                      >Continue</a>
                    </div>
                    <div class="learn-more-link">
                      <a href="#" class="dark-inverted-hover">Or Learn More</a>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
</template>


<script>

export default {
    name:"Logoname",
    data: () => ({
    logoText: "",
    logoSlogan:"",
  }),
  methods: {
    addNewLogo() {
     
    },
    saveText() {
      
    },
    updateLogo() {
    
    },
  },
}
</script>
<style lang="scss" scoped>
    @import './LogoName.scss'
</style>