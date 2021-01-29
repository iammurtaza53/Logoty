

<template>
  <div id="huro-app" class="app-wrapper">
    <!-- Pageloader -->
    <div class="pageloader is-full"></div>
    <div class="infraloader is-full is-active"></div>
    <div class="minimal-wrapper darker">
      <!--Wizard Navbar-->
      <nav class="wizard-navigation">
        <a href="/" class="wizard-brand">
          <img class="light-image" src="assets/img/logos/logo/logo.svg" alt />
          <img class="dark-image" src="assets/img/logos/logo/logo-light.svg" alt />
        </a>

        <div class="navbar-item is-wizard-title">
          <span class="title-wrap">
            Step 1:
            <span>Logo Name</span>
          </span>
        </div>

        <div class="dropdown wizard-dropdown dropdown-trigger">
          <div class="is-trigger">
            <i data-feather="chevron-down"></i>
          </div>
          <div id="wizard-navigation-dropdown" class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a
                href="javascript:void(0);"
                class="dropdown-item kill-drop"
                data-dropdown-step="0"
              >Step 1: Logo Name</a>
              <a
                href="javascript:void(0);"
                class="dropdown-item kill-drop is-disabled"
                data-dropdown-step="1"
              >Step 2: Logo For</a>
              <a
                href="javascript:void(0);"
                class="dropdown-item kill-drop is-disabled"
                data-dropdown-step="2"
              >Step 3: Select Logo</a>
              <a
                href="javascript:void(0);"
                class="dropdown-item kill-drop is-disabled"
                data-dropdown-step="3"
              >Step 4: Project Files</a>
              <a
                href="javascript:void(0);"
                class="dropdown-item kill-drop is-disabled"
                data-dropdown-step="4"
              >Step 5: Team Members</a>
              <a
                href="javascript:void(0);"
                class="dropdown-item kill-drop is-disabled"
                data-dropdown-step="5"
              >Step 6: Project Tools</a>
              <a
                href="javascript:void(0);"
                class="dropdown-item kill-drop is-disabled"
                data-dropdown-step="6"
              >Step 7: Preview</a>
            </div>
          </div>
        </div>

        <div class="navbar-item is-dark-mode">
          <div class="navbar-icon">
            <label class="dark-mode">
              <input type="checkbox" checked />
              <span></span>
            </label>
          </div>
        </div>

        <div class="dropdown is-right dropdown-trigger user-dropdown">
          <div class="is-trigger" aria-haspopup="true">
            <div class="profile-avatar">
              <img
                class="avatar"
                src="https://via.placeholder.com/150x150"
                data-demo-src="assets/img/avatars/photos/8.jpg"
                alt
              />
            </div>
            <i data-feather="chevron-down"></i>
          </div>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <p class="is-size-7 dark-inverted">Murtaza Z</p>
              </div>
              <a href="#" class="dropdown-item">
                <i data-feather="user"></i>
                <span>Profile</span>
              </a>
              <a class="dropdown-item">
                <i data-feather="edit-2"></i>
                <span>Edit Profile</span>
              </a>
              <a class="dropdown-item">
                <i data-feather="box"></i>
                <span>Projects</span>
              </a>
              <a class="dropdown-item">
                <i data-feather="settings"></i>
                <span>Settings</span>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <i data-feather="log-out"></i>
                <span>Sign Out</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <!--Wizard Progress Bar-->
      <progress
        id="wizard-progress"
        class="progress is-smaller is-primary wizard-progress"
        value="10"
        max="100"
      ></progress>

      <!--Main Wrapper-->
      <div class="wizard-v1-wrapper">
        <LogoName />
        <LogoIndustry />
        <LogoLook />
        <SelectLogo />>

        <div id="wizard-step-2" class="inner-wrapper" data-step-title="Project Details">
          <!--src/partials/pages/wizard/wizard-v1/-->
          <div class="step-content">
            <div class="step-title">
              <h2 class="dark-inverted">Add more details</h2>
              <p>Add useful details to your project. You can edit this later.</p>
            </div>

            <div class="project-customer">
              <h4>Customer</h4>

              <div class="field is-autocomplete">
                <div class="control has-icon">
                  <input id="customers-search" class="input" placeholder="search..." />
                  <div class="form-icon">
                    <i data-feather="search"></i>
                  </div>
                </div>
              </div>
              <div class="media-flex-center is-hidden">
                <div class="h-avatar is-medium">
                  <img
                    id="customer-logo"
                    class="avatar"
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/photo/demo/brands/airbnb.svg"
                    alt
                  />
                </div>
                <div class="flex-meta">
                  <span id="customer-name">Airbnb</span>
                  <span id="customer-location">Los Angeles, CA</span>
                </div>
                <div class="flex-end">
                  <button id="remove-customer" class="button is-circle">
                    <span class="icon is-small">
                      <i data-feather="x"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div class="project-dates">
              <h4>Project Time Frame</h4>
              <div class="project-dates-inner">
                <div class="project-date">
                  <div class="date-icon">
                    <i data-feather="map-pin"></i>
                  </div>
                  <div class="control">
                    <input
                      id="project-start-date"
                      class="input form-datepicker"
                      placeholder="Start Date"
                    />
                  </div>
                </div>
                <div class="separator"></div>
                <div class="project-date">
                  <div class="date-icon">
                    <i data-feather="flag"></i>
                  </div>
                  <div class="control">
                    <input
                      id="project-end-date"
                      class="input form-datepicker"
                      placeholder="End Date"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="project-budget">
              <h4>Project Budget</h4>
              <div class="project-budget-inner">
                <div class="budget-item">
                  <a class="budget-item-inner is-active">
                    <span>&lt; 5K</span>
                  </a>
                  <a class="budget-item-inner">
                    <span>&lt; 30K</span>
                  </a>
                  <a class="budget-item-inner">
                    <span>&lt; 100K</span>
                  </a>
                  <a class="budget-item-inner">
                    <span>100K+</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Wizard Navigation Buttons-->
        <div class="wizard-buttons">
          <div class="wizard-buttons-inner">
            <button class="button h-button is-light is-bold wizard-button-previous">Previous</button>
            <button class="button h-button is-primary is-bold is-elevated wizard-button-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import LogoName from './step1/LogoName'
import LogoIndustry from './step2/LogoIndustry'
import LogoLook from './step3/LogoLook'
import SelectLogo from './step4/selectLogo'

export default {
  name: "Wizard",
   components: {
    LogoName,
    LogoIndustry,
    LogoLook,
    SelectLogo,
  },
  data: () => ({
    logoArray: "",
  }),
  methods: {
    addNewLogo() {
     
    },
    saveText() {
      
    },
    updateLogo() {
    
    },
  },
  props: {
    msg: String,
  },
  mounted() {
    this.$loadScript("./assets/js/main_app.js").then(() => {
      this.$loadScript("./assets/js/functions.js").then(() => {
        this.$loadScript("./assets/js/init.js").then(() => {
          this.$loadScript("./assets/js/components.js");
          this.$loadScript("./assets/js/popover.js");
          this.$loadScript("./assets/js/card-grid.js")
          this.$loadScript("./assets/js/touch.js");
          this.$loadScript("./assets/js/wizard-v1.js");
          this.$loadScript("./assets/js/syntax.js");
        });
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
