import{d as f,_ as p,v as r,x as t,J as a,K as s,y as l,L as g,M as m,t as d}from"./BQQQDkwC.js";const v=f({data(){return{firstname:"",name:"",activity:"",email:"",phone:"",showCode:!1}},methods:{copySignatureInClipBoard(){const e=this.$refs.htmlContent;if(!(e instanceof HTMLElement))return;const i=window.getSelection(),o=document.createRange();o.selectNodeContents(e),i&&(i.removeAllRanges(),i.addRange(o))},getCleanedEmptyString(e,i,o){return o&&(e=e.replace(/\s/g,"")),e.length>0?e:i+" doit être rempli"}}}),h={class:"v-mail-signature-generator fp-page"},y={class:"fp-grid-coll-container fp-grid-coll-container--center"},u={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},x={class:"v-mail-signature-generator__content fp-ui-form"},c={dir:"ltr",ref:"htmlContent",style:{width:"100%"}},b={style:{"font-family":"Helvetica, sans-serif",margin:"0","font-size":"15px","line-height":"18px"}},E={style:{"font-family":"Helvetica, sans-serif",margin:"0","font-size":"15px","line-height":"18px"}},z={style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},C=["href"],H={style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},S=["href"],k={class:"v-mail-signature-generator__code-viewer"},w={key:0,style:{"font-size":"12px","line-height":"14px"},readonly:""};function F(e,i,o,B,V,A){return d(),r("main",h,[t("div",y,[t("div",u,[i[13]||(i[13]=t("h1",null,"Générateur de signature mail Filogie",-1)),t("form",x,[a(t("input",{type:"text",placeholder:"prénom","onUpdate:modelValue":i[0]||(i[0]=n=>e.firstname=n)},null,512),[[s,e.firstname]]),a(t("input",{type:"text",placeholder:"nom","onUpdate:modelValue":i[1]||(i[1]=n=>e.name=n)},null,512),[[s,e.name]]),a(t("input",{type:"text",placeholder:"fonction","onUpdate:modelValue":i[2]||(i[2]=n=>e.activity=n)},null,512),[[s,e.activity]]),a(t("input",{type:"text",placeholder:"email","onUpdate:modelValue":i[3]||(i[3]=n=>e.email=n)},null,512),[[s,e.email]]),a(t("input",{type:"text",placeholder:"+41000…","onUpdate:modelValue":i[4]||(i[4]=n=>e.phone=n)},null,512),[[s,e.phone]])]),t("div",{onClick:i[5]||(i[5]=(...n)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...n)),class:"v-mail-signature-generator__container"},[t("div",c,[t("div",b,[t("b",null,l(e.getCleanedEmptyString(e.firstname,"prénom"))+" "+l(e.getCleanedEmptyString(e.name,"/ nom")),1)]),t("div",E,l(e.getCleanedEmptyString(e.activity,"fonction")),1),i[8]||(i[8]=t("div",null,[t("br")],-1)),i[9]||(i[9]=t("div",null,[t("img",{src:"https://studio-guez.github.io/filogie.signature/logo.png",alt:"logo Fondation Filogie",width:"122",height:"40",style:{width:"122px",height:"40px","max-width":"122px",display:"block"}})],-1)),i[10]||(i[10]=t("div",null,[t("br")],-1)),i[11]||(i[11]=t("div",{style:{"font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},[t("b",null,"Fondation Filogie")],-1)),t("div",z,[t("a",{href:"tel:"+e.phone,target:"_blank",rel:"noopener noreferrer",style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},[t("u",null,l(e.getCleanedEmptyString(e.phone,"votre numéro de téléphone",!0)),1)],8,C)]),t("div",H,[t("a",{href:"mailto:"+e.email,target:"_blank",rel:"noopener noreferrer",style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},[t("u",null,l(e.getCleanedEmptyString(e.email,"email")),1)],8,S)]),i[12]||(i[12]=g('<div style="color:#000000;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-4693612a><a href="https://filogie.ch/" target="_blank" rel="noopener noreferrer" data-v-4693612a> filogie.ch </a></div><div data-v-4693612a><br data-v-4693612a></div><div style="color:#919191;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-4693612a><i data-v-4693612a>Accès bureau</i></div><div style="color:#000000;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-4693612a>Route de la Galaise 15b</div><div style="color:#000000;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-4693612a>1228 Plan-les-Ouates</div><div style="color:#919191;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-4693612a><i data-v-4693612a>Adresse postale</i></div><div style="color:#000000;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-4693612a>Route de la Galaise 17</div>',7))],512)]),t("button",{onClick:i[6]||(i[6]=(...n)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...n)),class:"fc-button"},"Selectionner le texte de signature"),i[14]||(i[14]=t("p",{style:{"padding-top":"1rem"},class:"fp-text-small"}," Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre outil de messagerie mail, dans les paramètres de signatures automatiques. ",-1)),t("div",k,[t("button",{onClick:i[7]||(i[7]=n=>e.showCode=!e.showCode),class:"fc-button--small",style:{background:"black","margin-bottom":"1rem"}},"voir le code"),e.showCode?(d(),r("textarea",w,`            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              ><b>`+l(e.getCleanedEmptyString(e.firstname,"prénom"))+" "+l(e.getCleanedEmptyString(e.name,"/ nom"))+`</b></div>
            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              >`+l(e.getCleanedEmptyString(e.activity,"fonction"))+`</div>
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
                <u>`+l(e.getCleanedEmptyString(e.email,"email"))+`</u>
              </a>
            </div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            ><a :href="'tel:' + phone"
                target="_blank"
                rel="noopener noreferrer"
                style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            >
              <u>`+l(e.getCleanedEmptyString(e.phone,"votre numéro de téléphone",!0))+`</u>
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
          `,1)):m("",!0)])])])])}const R=p(v,[["render",F],["__scopeId","data-v-4693612a"]]);export{R as default};
