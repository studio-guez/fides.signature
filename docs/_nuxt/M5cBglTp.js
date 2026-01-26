import{d as f,_ as p,v as r,x as t,J as s,K as a,y as o,L as g,M as m,t as d}from"./BEP0slJ9.js";const v=f({data(){return{firstname:"",name:"",activity:"",email:"",phone:"",showCode:!1}},methods:{copySignatureInClipBoard(){const e=this.$refs.htmlContent;if(!(e instanceof HTMLElement))return;const i=window.getSelection(),l=document.createRange();l.selectNodeContents(e),i&&(i.removeAllRanges(),i.addRange(l))},getCleanedEmptyString(e,i,l){return l&&(e=e.replace(/\s/g,"")),e.length>0?e:i+" doit être rempli"}}}),h={class:"v-mail-signature-generator fp-page"},y={class:"fp-grid-coll-container fp-grid-coll-container--center"},u={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},x={class:"v-mail-signature-generator__content fp-ui-form"},c={dir:"ltr",ref:"htmlContent",style:{width:"100%"}},E={style:{"font-family":"Helvetica, sans-serif",margin:"0","font-size":"15px","line-height":"18px"}},C={style:{"font-family":"Helvetica, sans-serif",margin:"0","font-size":"15px","line-height":"18px"}},b={style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},z=["href"],H={style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},S=["href"],k={class:"v-mail-signature-generator__code-viewer"},w={key:0,style:{"font-size":"12px","line-height":"14px"},readonly:""};function F(e,i,l,B,V,A){return d(),r("main",h,[t("div",y,[t("div",u,[i[12]||(i[12]=t("h1",null,"Générateur de signature mail Filogie",-1)),t("form",x,[s(t("input",{type:"text",placeholder:"prénom","onUpdate:modelValue":i[0]||(i[0]=n=>e.firstname=n)},null,512),[[a,e.firstname]]),s(t("input",{type:"text",placeholder:"nom","onUpdate:modelValue":i[1]||(i[1]=n=>e.name=n)},null,512),[[a,e.name]]),s(t("input",{type:"text",placeholder:"fonction","onUpdate:modelValue":i[2]||(i[2]=n=>e.activity=n)},null,512),[[a,e.activity]]),s(t("input",{type:"text",placeholder:"email","onUpdate:modelValue":i[3]||(i[3]=n=>e.email=n)},null,512),[[a,e.email]]),s(t("input",{type:"text",placeholder:"+41000…","onUpdate:modelValue":i[4]||(i[4]=n=>e.phone=n)},null,512),[[a,e.phone]])]),t("div",{onClick:i[5]||(i[5]=(...n)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...n)),class:"v-mail-signature-generator__container"},[t("div",c,[t("div",E,[t("b",null,o(e.getCleanedEmptyString(e.firstname,"prénom"))+" "+o(e.getCleanedEmptyString(e.name,"/ nom")),1)]),t("div",C,o(e.getCleanedEmptyString(e.activity,"fonction")),1),i[8]||(i[8]=t("div",null,[t("br")],-1)),i[9]||(i[9]=t("div",null,[t("img",{src:"https://studio-guez.github.io/filogie.signature/logo.png",alt:"logo Fondation Filogie",width:"122",height:"39",style:{width:"122px",height:"39px","max-width":"122px",display:"block"}})],-1)),i[10]||(i[10]=t("div",{style:{"font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},[t("b",null,"Fondation Filogie")],-1)),t("div",b,[t("a",{href:"mailto:"+e.email,target:"_blank",rel:"noopener noreferrer",style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},[t("u",null,o(e.getCleanedEmptyString(e.email,"email")),1)],8,z)]),t("div",H,[t("a",{href:"tel:"+e.phone,target:"_blank",rel:"noopener noreferrer",style:{color:"#000000","font-family":"Helvetica, sans-serif","font-size":"15px","line-height":"18px"}},[t("u",null,o(e.getCleanedEmptyString(e.phone,"votre numéro de téléphone",!0)),1)],8,S)]),i[11]||(i[11]=g('<div style="color:#000000;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-469ee024><a href="https://filogie.ch/" target="_blank" rel="noopener noreferrer" data-v-469ee024> filogie.ch </a></div><div data-v-469ee024><br data-v-469ee024></div><div style="color:#919191;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-469ee024><i data-v-469ee024>Accès bureau</i></div><div style="color:#000000;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-469ee024>Route de la Galaise 17</div><div style="color:#919191;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-469ee024><i data-v-469ee024>Adresse postale</i></div><div style="color:#000000;font-family:Helvetica, sans-serif;font-size:15px;line-height:18px;" data-v-469ee024>1228 Plan-les-Ouates</div>',6))],512)]),t("button",{onClick:i[6]||(i[6]=(...n)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...n)),class:"fc-button"},"Selectionner le texte de signature"),i[13]||(i[13]=t("p",{style:{"padding-top":"1rem"},class:"fp-text-small"}," Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre outil de messagerie mail, dans les paramètres de signatures automatiques. ",-1)),t("div",k,[t("button",{onClick:i[7]||(i[7]=n=>e.showCode=!e.showCode),class:"fc-button--small",style:{background:"black","margin-bottom":"1rem"}},"voir le code"),e.showCode?(d(),r("textarea",w,`            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              ><b>`+o(e.getCleanedEmptyString(e.firstname,"prénom"))+" "+o(e.getCleanedEmptyString(e.name,"/ nom"))+`</b></div>
            <div style="font-family: Helvetica, sans-serif; margin: 0; font-size: 15px; line-height: 18px;"
              >`+o(e.getCleanedEmptyString(e.activity,"fonction"))+`</div>
            <div><br></div>
            <div
              ><img src="https://studio-guez.github.io/filogie.signature/logo.png" alt="logo Fondation Filogie" width="122" height="39" style="width: 122px; height: 39px; max-width: 122px; display: block;"></div>
            <div style="font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              ><b>Fondation Filogie</b></div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              ><a :href="'mailto:' + email"
                 target="_blank"
                 rel="noopener noreferrer"
                 style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
              >
                <u>`+o(e.getCleanedEmptyString(e.email,"email"))+`</u>
              </a>
            </div>
            <div style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            ><a :href="'tel:' + phone"
                target="_blank"
                rel="noopener noreferrer"
                style="color:#000000; font-family: Helvetica, sans-serif; font-size: 15px; line-height: 18px;"
            >
              <u>`+o(e.getCleanedEmptyString(e.phone,"votre numéro de téléphone",!0))+`</u>
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
          `,1)):m("",!0)])])])])}const U=p(v,[["render",F],["__scopeId","data-v-469ee024"]]);export{U as default};
