<template>
  <footer>
    <a href="mailto:aldwin.weber54@gmail.com">
      <div class="container-footer">
        <div class="liquidGlass-wrapper dark-bar">
          <div class="liquidGlass-effect"></div>
          <div class="liquidGlass-tint"></div>
          <div class="liquidGlass-shine"></div>
          <div class="liquidGlass-text footer-icon">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                :width="size"
                :height="size"
                :viewBox="viewBox"
                fill="none"
                :stroke="color"
                :stroke-width="strokeWidth"
                stroke-linecap="round"
                stroke-linejoin="round"
                :style="getStyle"
            >
              <path
                  fill="none"
                  :stroke="color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :stroke-width="strokeWidth"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>

    <!-- Filtre de distorsion, invisible, référencé par .liquidGlass-effect -->
    <svg style="position: absolute; width: 0; height: 0;">
      <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
      >
        <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5"/>
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0"/>
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5"/>
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap"/>
        <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lighting-color="white"
            result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300"/>
        </feSpecularLighting>
        <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
        />
        <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="60"
            xChannelSelector="R"
            yChannelSelector="G"
        />
      </filter>
    </svg>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    size: {type: Number, default: 22},
    color: {type: String, default: '#333'},
    strokeWidth: {type: Number, default: 1},
    background: {type: String, default: 'transparent'},
    opacity: {type: Number, default: 1},
    rotation: {type: Number, default: 0},
    shadow: {type: Number, default: 0},
    flipHorizontal: {type: Boolean, default: false},
    flipVertical: {type: Boolean, default: false},
    padding: {type: Number, default: 0},
  },
  computed: {
    viewBox() {
      const viewBoxSize = 24 + (this.padding * 2);
      const viewBoxOffset = -this.padding;
      return `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;
    },
    getStyle() {
      const transforms = [];
      if (this.rotation !== 0) transforms.push(`rotate(${this.rotation}deg)`);
      if (this.flipHorizontal) transforms.push('scaleX(-1)');
      if (this.flipVertical) transforms.push('scaleY(-1)');

      return {
        opacity: this.opacity,
        transform: transforms.length > 0 ? transforms.join(' ') : undefined,
        filter: this.shadow > 0 ? `drop-shadow(0 ${this.shadow}px ${this.shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: this.background !== 'transparent' ? this.background : undefined
      };
    }
  }
};
</script>

<style src="../assets/CSS/footer.css"></style>