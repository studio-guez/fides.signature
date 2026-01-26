<template>
  <main class="v-mail-signature-generator fp-page">
    <div class="fp-grid-coll-container fp-grid-coll-container--center">
      <div class="fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter">
        <h1>Générateur de&nbsp;signature mail Filogie</h1>

        <form
            class="v-mail-signature-generator__content fp-ui-form"
        >
          <input type="text" placeholder="prénom"   v-model="firstname">
          <input type="text" placeholder="nom"      v-model="name">
          <input type="text" placeholder="fonction" v-model="activity" >
          <input type="text" placeholder="email"   v-model="email" >
          <input type="text" placeholder="+41000…"   v-model="phone" >
        </form>

        <div
            @click="copySignatureInClipBoard"
            class="v-mail-signature-generator__container"
        >
          <div
              dir="ltr"
              ref="htmlContent"
              style="width: 100%"
          >
            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              ><b>{{getCleanedEmptyString(firstname, 'prénom')}} {{getCleanedEmptyString(name, '/ nom')}}</b></div>
            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              >{{getCleanedEmptyString(activity, 'fonction')}}</div>
            <div><br></div>
            <div
              ><img src="https://studio-guez.github.io/filogie.signature/logo.png" alt="logo Fondation Filogie" width="122" height="40" style="width: 122px; height: 40px; max-width: 122px; display: block;"></div>
            <div style="font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              ><b>Fondation Filogie</b></div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              ><a :href="'mailto:' + email"
                 target="_blank"
                 rel="noopener noreferrer"
                 style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              >
                <u>{{getCleanedEmptyString(email, 'email') }}</u>
              </a>
            </div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            ><a :href="'tel:' + phone"
                target="_blank"
                rel="noopener noreferrer"
                style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            >
              <u>{{getCleanedEmptyString(phone, 'votre numéro de téléphone', true) }}</u>
            </a>
            </div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            ><a href="https://filogie.ch/" target="_blank"
                    rel="noopener noreferrer">
                filogie.ch
              </a>
            </div>

            <div><br></div>

            <div style="color:#919191; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"><i>Accès bureau</i></div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;">Route de la Galaise 17</div>
            <div style="color:#919191; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"><i>Adresse postale</i></div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;">1228 Plan-les-Ouates</div>
          </div>
        </div>
        <button
            @click="copySignatureInClipBoard"
            class="fc-button"
        >Selectionner le texte de signature</button>

          <p
                  style="padding-top: 1rem"
                  class="fp-text-small" >
              Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre
              outil de messagerie mail, dans les paramètres de signatures automatiques.
          </p>

        <div class="v-mail-signature-generator__code-viewer"
        >
          <button @click="showCode = !showCode"
                  class="fc-button--small"
                  style="
                    background: black;
                    margin-bottom: 1rem;
                  "
          >voir le code</button>

          <textarea style="font-size: 12px; line-height: 14px"
                    readonly
                    v-if="showCode"
          >
            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              ><b>{{getCleanedEmptyString(firstname, 'prénom')}} {{getCleanedEmptyString(name, '/ nom')}}</b></div>
            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              >{{getCleanedEmptyString(activity, 'fonction')}}</div>
            <div><br></div>
            <div
              ><img src="https://studio-guez.github.io/filogie.signature/logo.png" alt="logo Fondation Filogie" width="122" height="40" style="width: 122px; height: 40px; max-width: 122px; display: block;"></div>
            <div style="font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              ><b>Fondation Filogie</b></div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              ><a :href="'mailto:' + email"
                 target="_blank"
                 rel="noopener noreferrer"
                 style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              >
                <u>{{getCleanedEmptyString(email, 'email') }}</u>
              </a>
            </div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            ><a :href="'tel:' + phone"
                target="_blank"
                rel="noopener noreferrer"
                style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            >
              <u>{{getCleanedEmptyString(phone, 'votre numéro de téléphone', true) }}</u>
            </a>
            </div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            ><a href="https://filogie.ch/" target="_blank"
                    rel="noopener noreferrer">
                filogie.ch
              </a>
            </div>

            <div><br></div>

            <div style="color:#919191; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"><i>Accès bureau</i></div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;">Route de la Galaise 17</div>
            <div style="color:#919191; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"><i>Adresse postale</i></div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;">1228 Plan-les-Ouates</div>
          </textarea>
        </div>

      </div>

    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({

  data() {
    return {
      firstname: '',
      name: '',
      activity: '',
      email: '',
      phone: '',
      showCode: false,
    }
  },

    methods: {
    copySignatureInClipBoard() {
      /* Get the text field */
      const htmlContentToCopy = this.$refs.htmlContent;

      if(!( htmlContentToCopy instanceof HTMLElement)) return

      const selection = window.getSelection()
      const range = document.createRange()

      range.selectNodeContents(htmlContentToCopy)

      if(! selection) return
      selection.removeAllRanges()
      selection.addRange(range)

      // todo: other methode to implement
      // function setClipboard(text) {
      //   const type = "text/html";
      //   const blob = new Blob(['<h1>'+text+'</h1>'], { type });
      //   const data = [new ClipboardItem({ [type]: blob })];
      //
      //   navigator.clipboard.write(data).then(
      //       function () {
      //         /* success */
      //         console.log('succcess')
      //       },
      //       function (e) {
      //         /* failure */
      //         console.log('failed')
      //         console.log(e)
      //       }
      //   );
      // }

    },

    getCleanedEmptyString(value: string, placeholder: string, removeWhiteSpace?: boolean):string {
      if(removeWhiteSpace) value = value.replace(/\s/g, '')
      if(value.length > 0) return value
      return placeholder + ' doit être rempli'
    }
  },

})</script>

<style lang="scss" scoped>

h1 {
  font-size: 3rem;
  line-height: 1em;
}

.v-mail-signature-generator {
  min-height: calc(100vh - 200px);
  padding-bottom: 1rem;

  *::selection {
    background-color: #83FFA0FF;
  }
}

.v-mail-signature-generator__container {
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;

  > table {
    pointer-events: none;
  }

}

.fp-ui-form {
  display: flex;
  flex-wrap: wrap;

  > input {
    all: unset;
    display: block;
    position: relative;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    background: var(--color-background);
    box-shadow: inset 0 0 0 2px currentColor;
    margin-bottom: 1rem;
    line-height: .5ex;
    padding: .5rem 1rem;
  }
}

.v-mail-signature-generator__code-viewer {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  textarea {
    display: block;
    width: 100%;
    height: 20rem;
    resize: none;
  }
}
</style>
