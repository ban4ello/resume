<template>
  <v-row justify="center" align="center" class="pa-4">
    <v-col>
      <div class="typeWiriter">
        <div class="d-flex start-flex">
          <h1>
            Hi everyone! I'm a
            <span class="typed-text" :class="{ lightMode }">{{ typeValue }}</span>
            <span class="blinking-cursor">|</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h1>
        </div>
        <div class="d-flex justify-center">
          <transition appear>
            <span
              v-show="showBtn"
              id="about"
              v-scroll-to="'#main-content'"
              color="accent"
              class="action-btn"
            >
              About me
            </span>
          </transition>
        </div>
      </div>

      <div id="main-content" class="main" :class="screen">
        <div class="summary_block large-margin">
          <v-row class="font-size-extra-large">
            <v-col>
              <h2>Summary 👨‍💻</h2>
            </v-col>
          </v-row>

          <div class="d-flex justify-center gap-50">
            <div id="summary" class="d-flex flex-column justify-center">
              <h3 class="text-title bold mb-4">
                Ivan Miroshnichenko
              </h3>

              <p class="font-size-large">
                <span class="icon-size">&#128075;</span>&nbsp; My name is Ivan, I'm <span class="info--text bold">{{ myExactAge }}</span>&nbsp; years old and I'm a front-end developer
                with a taste for knowledge, work and study, with a strong sense of aesthetics and teamwork
              </p>
            </div>

            <div class="d-flex align-center">
              <img
                width="400px"
                height="400px"
                class="circle mobile-view"
                :src="require('~/static/preview.jpg')"
              >
            </div>
          </div>
        </div>

        <div id="skills" class="large-margin">
          <v-row class="font-size-extra-large">
            <v-col class="mb-4">
              <h2>🤹 Technical skills</h2>
            </v-col>
          </v-row>

          <div class="skills_block">
            <div class="d-flex flex-column justify-center">
              <p class="text-title bold mb-12">
                While working with web applications, I have worked with these technologies:
              </p>
            </div>

            <div class="items">
              <div class="items-col">
                <div class="item">
                  <img width="120px" :src="require('~/assets/html.png')">
                  <div>
                    <h3 class="bold text-subtitle">
                      HTML
                    </h3>
                    <span class="italic">its latest specifications.</span>
                  </div>
                </div>
                <div class="item">
                  <img width="120px" :src="require('~/assets/javascript.png')">
                  <div>
                    <h3 class="bold text-subtitle">
                      JavaScript
                    </h3>
                    <span class="italic">its latest specifications.</span>
                  </div>
                </div>
                <div class="item">
                  <img width="120px" :src="require('~/assets/react.png')">
                  <div>
                    <h3 class="bold text-subtitle">
                      React.js
                    </h3>
                    <span class="italic">used it, it scales well, I might use it again.</span>
                  </div>
                </div>
                <div class="item">
                  <img width="120px" :src="require('~/assets/blockchain.png')">
                  <div>
                    <h3 class="bold text-subtitle">
                      Blockchain
                    </h3>
                    <span class="italic">WEB3.0 is our future</span>
                  </div>
                </div>
              </div>

              <div class="items-col">
                <div class="item">
                  <img width="120px" :src="require('~/assets/css3.png')">
                  <h3 class="bold text-subtitle">
                    CSS, Vuetify, Bootstrap, Tailwind
                  </h3>
                </div>

                <div class="item">
                  <img width="120px" :src="require('~/assets/vue.png')">
                  <div>
                    <h3 class="bold text-subtitle">
                      VUE.JS, VUEX, NUXT.JS
                    </h3>
                    <span class="italic">because it is the best framework ever</span>
                  </div>
                </div>

                <div class="item">
                  <img width="120px" :src="require('~/assets/webpack.png')">
                  <div>
                    <h3 class="bold text-subtitle">
                      Webpack
                    </h3>
                    <span class="italic">but need to move on the Vite.js</span>
                  </div>
                </div>

                <div class="item">
                  <img width="120px" :src="require('~/assets/git.png')">
                  <div>
                    <h3 class="bold text-subtitle">
                      GIT
                    </h3>
                    <span class="italic">where would we be without it in web development?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="experience" class="large-margin">
          <v-row class="font-size-extra-large mb-8">
            <v-col>
              <h2>Working experience 🛠️</h2>
            </v-col>
          </v-row>

          <v-timeline>
            <v-timeline-item
              v-for="(item, i) in experienceList"
              :key="i"
              :color="item.color"
              small
            >
              <template #opposite>
                <span
                  :class="`headline font-weight-bold ${item.color}--text`"
                  v-text="item.year"
                />
              </template>
              <div class="py-4">
                <span :class="`text-title mb-4 ${item.color}--text`">
                  {{ item.experience.title }}
                </span>

                <div class="font-size-large">
                  {{ item.experience.text }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>

        <div id="hobby" class="large-margin">
          <v-row class="font-size-extra-large">
            <v-col>
              <h2>🎯 Hobby</h2>
            </v-col>
          </v-row>

          <div class="hobby_block">
            <div class="items large-margin">
              <div class="items-col">
                <h3 class="bold text-title">
                  I independently develop automation devices, Smart home systems and some extraordinary devices.
                </h3>
                <h3 class="bold text-title">
                  When developing, I use microcontrollers famalys: Atmel AVR (tinyAVR, megaAVR): RISC-V (ESP32/8266) and IoT
                </h3>
                <h3 class="bold text-title">
                  I program microcontrollers on C++ (with AVR-libs), js (used the Johnny-Five framework, executed in Node.js), used the "Mongoose OS" framework for ESP MC).
                </h3>
              </div>

              <div class="items-row">
                <img width="100px" :src="require('~/assets/smart-home.png')">
                <img width="100px" :src="require('~/assets/diy.png')">
                <img width="100px" :src="require('~/assets/microcontroller.png')">
                <img width="100px" :src="require('~/assets/microprocessor.png')">
                <img width="100px" :src="require('~/assets/nodejs.png')">
                <img width="100px" :src="require('~/assets/c.png')">
              </div>
            </div>

            <div class="d-flex justify-center flex-column align-center">
              <h3 class="text-title info--text">
                I also like to play chess <span class="icon-size">♛</span>. You can challenge me.
              </h3>
              <h3 class="text-title">
                Link for invitation : <a class="info--text" href="https://chess.com/play/ban4ello" target="_blank">fight me in chess</a>
              </h3>
            </div>
          </div>
        </div>

        <div id="contacts" class="large-margin">
          <v-row class="font-size-extra-large mb-8">
            <v-col>
              <h2>Contacts 📞</h2>
            </v-col>
          </v-row>

          <div class="contacts_block">
            <a class="item link" href="mailto:ban4ellog@gmail.com" target="_blank">
              <img width="100px" :src="require('~/assets/email.png')">
              <h3 class="bold text-title">
                E-mail
              </h3>
            </a>
            <a class="item link" href="https://github.com/ban4ello" target="_blank">
              <img width="100px" :src="require('~/assets/github.png')">
              <h3 class="bold text-title">
                Github
              </h3>
            </a>
            <a class="item link" href="https://www.linkedin.com/in/ivan-miroshnichenko-36b003190/" target="_blank">
              <img width="100px" :src="require('~/assets/linkedin.png')">
              <h3 class="bold text-title">
                Linkedin
              </h3>
            </a>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      myExactAge: '29 years',
      experienceList: [
        {
          color: 'disabled',
          year: 'mid 2018 - 2019',
          experience: {
            title: 'Self-study of web technologies',
            text: ''
          }
        },
        {
          color: 'info',
          year: '2019 - 2020',
          experience: {
            title: 'WOK-email',
            text: 'App for creating responsive HTML-email'
          }
        },
        {
          color: 'info',
          year: '2020 - sep 2020',
          experience: {
            title: '[noname] startup',
            text: 'Application for learning foreign languages'
          }
        },
        {
          color: 'info',
          year: 'sep 2020 - oct 2022',
          experience: {
            title: 'EventScouts',
            text: 'Decentralized app for searching events and activities using WEB 3.0'
          }
        },
        {
          color: 'info',
          year: 'oct 2022 - current time',
          experience: {
            title: 'Manzana Group',
            text: 'Management system for loyalty programs in retail, insurance, banking, healthcare and sports'
          }
        }
      ],
      typeValue: '',
      typeStatus: false,
      displayTextArray: ['person who loves programming...', 'creator...', 'Web-app developer.'],
      typingSpeed: 90,
      erasingSpeed: 30,
      newTextDelay: 1500,
      displayTextArrayIndex: 0,
      charIndex: 0,
      showBtn: false,
      timeoutId: null
    }
  },

  head () {
    const title = 'Ivan Miroshnichenko. Frontend Web Developer'
    const description = `I am Ivan. I'm ${new Date().getFullYear() - 1994} years old. And I really love developing software and electronic devices.`

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'key',
          name: 'key',
          content: 'main'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Ivan Miroshnichenko'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        }
      ]
    }
  },

  computed: {
    calculatedAge () {
      return new Date().getFullYear() - new Date('07.01.1994').getFullYear()
    },

    screen () {
      return this.$vuetify.breakpoint.name
    },

    lightMode () {
      return !this.$vuetify.theme.isDark
    }
  },

  created () {
    this.timeoutId = setTimeout(this.typeText, this.newTextDelay + 200)
    setInterval(this.ageCalculator, 1000)
  },

  methods: {
    ageCalculator () {
      const now = new Date()
      const birthdate = new Date('1994-01-07') // yyyy-mm-dd
      const diff = now.getTime() - birthdate.getTime()
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.24 / 12))) / (1000 * 60 * 60 * 24))
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      this.myExactAge = `${years} years, ${months} months, ${days} days, ${hours} hours : ${minutes} minutes : ${seconds} seconds`
    },

    typeText () {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) { this.typeStatus = true }

        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        )
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.displayTextArrayIndex === 1) {
        // needed for the fastest appearance of the "about me" text
        this.newTextDelay = 100
      }
      if (this.displayTextArrayIndex + 1 >= this.displayTextArray.length && this.charIndex === this.displayTextArray[this.displayTextArrayIndex].length) {
        clearTimeout(this.timeoutId)

        this.showBtn = true

        return
      }

      if (this.charIndex > 0) {
        if (!this.typeStatus) { this.typeStatus = true }
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.displayTextArrayIndex += 1
        if (this.displayTextArrayIndex >= this.displayTextArray.length) { this.displayTextArrayIndex = 0 }

        setTimeout(this.typeText, this.typingSpeed + 500)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.typeWiriter {
  width: 100%;
  height: calc(100vh);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  .start-flex {
    align-items: flex-start;
    width: 100%;
    margin-bottom: 75px;
  }

  h1 {
    font-size: 5rem;
    font-weight: normal;
    span.typed-text {
      color: #d2b94b;

      &.lightMode {
        color: #064663;
      }
    }
  }
}

.action-btn {
  font-size: 4em;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 833px) {
  .typeWiriter {
    height: calc(100vh);
    align-items: center;
    margin-top: 20px;

    h1 {
      font-size: 4rem;
    }
  }

  .action-btn {
    font-size: 3em;
  }

  .large-margin {
    margin-bottom: 50px
  }
}

@media screen and (max-width: 600px) {
  .typeWiriter h1 {
    font-size: 2.5rem;
  }

  .action-btn {
    font-size: 2em;
  }
}

.main {
  &.md {
    .mobile-view {
      width: 300px;
      height: 300px;
    }

    .font-size-extra-large {
      font-size: 2em;
    }

    .text-title {
      font-size: 1.5em;
    }
  }

  &.sm {
    .mobile-view {
      width: 250px;
      height: 250px;
    }
  }

  &.xs {
    .skills_block,
    .hobby_block {
      .items {
        flex-direction: column;
      }
    }
    .contacts_block {
      display: flex;
      justify-content: center;
      flex-direction: row;
      gap: 20px;
      flex-wrap: wrap;
    }
    .font-size-extra-large {
      font-size: 1.5em;
    }
    .text-title {
      font-size: 1em;
    }
    .mobile-view {
      width: 150px;
      height: 150px;
    }
    .font-size-large {
      font-size: 0.8em;
    }
    .italic {
      font-size: 1em;
    }
  }

  .skills_block,
  .hobby_block {
    display: grid;
    grid-template-columns: 1fr;

    .items {
      display: flex;
      gap: 25px;
      justify-content: center;

      .items-col {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        gap: 25px;
      }
      .items-row {
        display: flex;
        flex-direction: row;
        grid-gap: 25px;
        gap: 25px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .item {
        max-width: 450px;
        display: grid;
        gap: 15px;
        grid-template-columns: max-content 1fr;
        align-items: center;
      }
    }
  }

  .contacts_block {
    display: flex;
    justify-content: space-between;

    .item {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }

  .circle {
    border-radius: 50%;
    object-fit: cover;
  }

  .gap-50 {
    gap: 50px;
  }
  .font-size-large {
    font-size: 1.5em;
  }
  .font-size-extra-large {
    font-size: 3em;
  }
  .text-title {
    font-size: 2em;
  }
  .text-subtitle {
    font-size: 1.5em;
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-size: 1.5em;
    font-style: italic;
  }
  .large-margin {
    margin-bottom: 100px;
  }
  .icon-size {
    font-size: 1.7em;
  }
}

  // Cursor blinking CSS Starts...
  .blinking-cursor {
    font-size: 5rem;
    color: #2c3e50;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }
  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-webkit-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-ms-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-o-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  // Cursor blinking CSS Ends...

// transition animation for "about me" text
.v-enter-active {
  transition: all 1s ease-out;
}

.v-enter {
  transform: translateX(20px);
  opacity: 0;
}
</style>
<style lang="scss">
.v-application .link {
  color: #fff !important;
  text-decoration: none;
}
</style>
