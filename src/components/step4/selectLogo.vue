<template>
  <div id="wizard-step-3" class="inner-wrapper" data-step-title="Select Layout">
    <!--src/partials/pages/wizard/wizard-v1/-->
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">Choose a logo to customize</h2>
        <p>Edit your font, icon, colors and more.</p>
      </div>
      <div
        id="grid-cards"
        class="view-wrapper"
        data-naver-offset="214"
        data-menu-item="#layouts-sidebar-menu"
        data-mobile-item="#home-sidebar-menu-mobile"
      >
        <div class="page-content-wrapper">
          <div class="page-content is-relative">
            <div class="card-grid-toolbar">
              <div class="control has-icon">
                <input
                  class="input custom-text-filter"
                  placeholder="Search..."
                  data-filter-target=".column"
                />
                <div class="form-icon">
                  <i data-feather="search"></i>
                </div>
              </div>

              <div class="buttons">
                <div class="field h-hidden-mobile">
                  <div class="control">
                    <div class="h-select">
                      <div class="select-box">
                        <span>All Projects</span>
                      </div>
                      <div class="select-icon">
                        <i data-feather="chevron-down"></i>
                      </div>
                      <div class="select-drop has-slimscroll-sm">
                        <div class="drop-inner">
                          <div class="option-row">
                            <input type="radio" name="grid_filter" />
                            <div class="option-meta">
                              <span>Web Apps</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="grid_filter" />
                            <div class="option-meta">
                              <span>Mobile Apps</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="grid_filter" />
                            <div class="option-meta">
                              <span>Dashboards</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="grid_filter" />
                            <div class="option-meta">
                              <span>Landing Pages</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="button h-button is-primary is-raised">
                  <span class="icon">
                    <i class="fas fa-plus"></i>
                  </span>
                  <span>New Project</span>
                </button>
              </div>
            </div>

            <div class="page-content-inner">
              <div class="card-grid card-grid-v3">
                <!--List Empty Search Placeholder -->
                <div
                  class="page-placeholder custom-text-filter-placeholder is-hidden"
                >
                  <div class="placeholder-content">
                    <img
                      class="light-image"
                      src="assets/img/illustrations/placeholders/search-3.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="assets/img/illustrations/placeholders/search-3-dark.svg"
                      alt=""
                    />
                    <h3>We couldn't find any matching results.</h3>
                    <p class="is-larger">
                      Too bad. Looks like we couldn't find any matching results
                      for the search terms you've entered. Please try different
                      search terms or criteria.
                    </p>
                  </div>
                </div>

                <!--Card Grid v3-->
                <div class="columns is-multiline">
                  <!--Grid Item-->

                  <div
                    class="column is-4"
                    v-for="sample in samples"
                    :key="sample.id"
                  >
                    <div class="card-grid-item">
                      <div class="people">
                        <canvas :id="sample.id" width="400"></canvas>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <i data-feather="eye"></i>
                          </span>
                          <span>View</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <i data-feather="edit-2"></i>
                          </span>
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sample_data from "../../../public/assets/data/sample_logo";
import { fabric } from "fabric";
import Logo from "../../models/logo";
import Storage from '../../services/storage'

let __canvas = null;
let __svg = null;
let __text = null;
let __bg = null;
export default {
  name: "SelectLogo",
  data: () => ({
    samples: sample_data.logoSamples,
    processing: false,
    canvasWidth: Number,
    iconWidth: Number,
    mode: "hexa",
    showTextColorPalet: false,
    showBgColorPalet: false,
    showIconColorPalet: false,
    textColor: "",
    iconColor: "",
    bgColor: "",
    bgStatus: 1,
    iconX: Number,
    iconY: "",
    svgURL: "",
    textTop: Number,
    textLeft: Number,
    iconLeft: Number,
    iconTop: Number,
    textScaleX: Number,
    textScaleY: Number,
    iconScale: Number,
    iconScaleX: 0.5,
    iconScaleY: 0.5,
    fontSize: "",
  }),

  mounted() {
    this.generateSamples();
  },
  methods: {
    save(logoObj) {
      this.processing = true;
      const storage = new Storage();
      let canvasToSvg = __canvas.toSVG();
      const svgURL = "data:image/svg+xml," + encodeURIComponent(canvasToSvg);
      __bg.set({
        backgroundColor: "transparent",
      });
      const transparentPngUrl = __canvas.toDataURL("image/png");
      const logo = Logo.instance;
      logo.transparentPngUrl = transparentPngUrl;
      logo.svgUrl = svgURL;
      __bg.set({
        backgroundColor: logoObj.bgColor,
      });
      const pngURL = __canvas.toDataURL("image/png");
      const jpgURL = __canvas.toDataURL({
        format: "jpeg",
        quality: 1,
      });
      logo.pngUrl = pngURL;
      logo.jpgUrl = jpgURL;
      logo.svgEl = canvasToSvg;
      logo.save();
      __canvas.renderAll();
      const logoArray = storage.getAll();
      logoArray[logoObj.id - 1] = logoObj;
      storage.setAll(logoArray);
      this.processing = false;
    },
    generateSamples() {
      for (let i = 1; i <= this.samples.length-1; i++) {
        this.__canvas = null;
        this.__svg = null;
        this.__text = null;
        this.__bg = null;
        const logo = Logo.instance;
        logo.canvasWidth = 400;
        logo.calculateWidths();
        logo.save();
        this.textLeft = this.samples[i].textLeft;
        this.textTop = this.samples[i].textTop;
        this.iconLeft = this.samples[i].iconLeft;
        this.iconTop = this.samples[i].iconTop;
        this.iconScaleX = this.samples[i].iconScaleX;
        this.iconScaleY = this.samples[i].iconScaleY;
     
        __canvas = new fabric.Canvas("'" + this.samples[i].id + "'");
        __bg = __canvas.setDimensions({
          width: this.samples[i].canvasWidth,
          height: (this.samples[i].canvasWidth * 3) / 4,
        });
        __bg.set({
          backgroundColor: this.samples[i].bgColor,
        });
        const {
          iconScaleX,
          iconScaleY,
          iconColor,
          iconLeft,
          iconTop,
        } = this.samples[i];
        fabric.loadSVGFromURL(this.samples[i].icon, function(objects, options) {
          __svg = fabric.util.groupSVGElements(objects, options);
          __svg.set({
            scaleX: iconScaleX,
            scaleY: iconScaleY,
            originX: "center",
            originY: "center",
            fill: iconColor,
            left: iconLeft,
            top: iconTop,
          });
          if (Object.hasOwnProperty.call(__svg, "_objects"))
            __svg._objects.forEach((_) => _.set({ fill: iconColor }));
          __canvas.add(__svg);
        });
        __text = new fabric.Text(this.samples[i].name, {
          textAlign: "center",
          fontSize: this.samples[i].fontSize,
          fontFamily: this.samples[i].font,
          fill: this.samples[i].textColor,
        });
        __canvas.add(__text);
        __text.set({
          originX: "center",
          originY: "center",
          left: this.samples[i].textLeft,
          top: this.samples[i].textTop,
        });
        __text.setCoords();
        __canvas.renderAll();

        const _this = this;
        __canvas.on("object:modified", function(e) {
          if (
            Object.hasOwnProperty.call(e, "target") &&
            e.target &&
            e.target.get("type") === "text"
          ) {
            _this.textLeft = e.target.left;
            _this.textTop = e.target.top;
            _this.textScaleX = e.target.scaleX;
            _this.textScaleY = e.target.scaleY;
          }
          if (
            (Object.hasOwnProperty.call(e, "target") &&
              e.target &&
              e.target.get("type") === "path") ||
            e.target.get("type") === "group"
          ) {
            _this.iconLeft = e.target.left;
            _this.iconTop = e.target.top;
            _this.iconScaleX = e.target.scaleX;
            _this.iconScaleY = e.target.scaleY;
          }
          
          __canvas.renderAll();
        });
      
        this.save(this.samples[i]);
      }
    },
  },
};
</script>
