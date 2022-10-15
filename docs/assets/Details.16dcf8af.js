import{a,c as i,b as s,e as n,F as u,_ as f,m as P,j as g,t as l,u as d,q as V,d as x,p as B,f as C,s as L,v as j,r as v,x as E,o as N,i as T,k as _,y as w,w as I}from"./index.f4991f5a.js";import{a as r,l as S,c as H,g as O,L as A}from"./Loading.a36b4025.js";const F={class:"columns is-multiline is-mobile is-centered"},G={class:"column is-3"},R={class:"image"},q=["src","alt"],z={class:"column is-3"},M={class:"image"},W=["src","alt"],J={key:0,class:"column is-3"},K={class:"image"},Q=["src","alt"],U={key:1,class:"column is-3"},X={class:"image"},Y=["src","alt"],Z={class:"columns is-multiline is-mobile is-centered"},ss={class:"column is-3"},es={class:"image"},ts=["src","alt"],as={class:"column is-3"},is={class:"image"},os=["src","alt"],ls={key:0,class:"column is-3"},cs={class:"image"},ns=["src","alt"],_s={key:1,class:"column is-3"},ds={class:"image"},rs=["src"],us={__name:"Sprites",props:{sprites:Object},setup(e){return(o,c)=>(a(),i(u,null,[s("div",F,[s("div",G,[s("figure",R,[s("img",{src:e.sprites.front_default,alt:e.sprites.front_default},null,8,q)])]),s("div",z,[s("figure",M,[s("img",{src:e.sprites.front_shiny,alt:e.sprites.front_shiny},null,8,W)])]),e.sprites.front_female?(a(),i("div",J,[s("figure",K,[s("img",{src:e.sprites.front_female,alt:e.sprites.front_female},null,8,Q)])])):n("",!0),e.sprites.front_shiny_female?(a(),i("div",U,[s("figure",X,[s("img",{src:e.sprites.front_shiny_female,alt:e.sprites.front_shiny_female},null,8,Y)])])):n("",!0)]),s("div",Z,[s("div",ss,[s("figure",es,[s("img",{src:e.sprites.back_default,alt:e.sprites.back_default},null,8,ts)])]),s("div",as,[s("figure",is,[s("img",{src:e.sprites.back_shiny,alt:e.sprites.back_shiny},null,8,os)])]),e.sprites.back_female?(a(),i("div",ls,[s("figure",cs,[s("img",{src:e.sprites.back_female,alt:e.sprites.back_female},null,8,ns)])])):n("",!0),e.sprites.back_shiny_female?(a(),i("div",_s,[s("figure",ds,[s("img",{src:e.sprites.back_shiny_female},null,8,rs)])])):n("",!0)])],64))}};const ms={class:"stat"},hs=["value"],vs={__name:"Stats",props:{stats:Object,color:String},setup(e){return P(o=>({"487f617d":e.color})),(o,c)=>(a(!0),i(u,null,g(e.stats,t=>(a(),i("div",{key:t.stat.name},[s("div",ms,l(t.stat.name),1),s("progress",{class:"progress is-info",value:t.base_stat,max:"255"},null,8,hs)]))),128))}},fs=f(vs,[["__scopeId","data-v-fdcb681b"]]);const D=e=>(B("data-v-420e0f6e"),e=e(),C(),e),gs={class:"pokemon-profile"},ks={class:"image"},ps=["src","alt"],bs={class:"columns is-mobile types is-centered"},ys={class:"subtitle has-text-weight-semibold"},$s=D(()=>s("span",{class:"has-text-weight-bold"}," HEIGHT:",-1)),xs=D(()=>s("span",{class:"ml-4 has-text-weight-bold"}," WEIGHT:",-1)),ws={__name:"PokemonProfile",props:{pokemon:Object},setup(e){return(o,c)=>(a(),i("div",gs,[s("figure",ks,[s("img",{src:d(r)(e.pokemon.id),alt:e.pokemon.name},null,8,ps)]),s("div",bs,[(a(!0),i(u,null,g(e.pokemon.types,t=>(a(),i("div",{class:"column is-6",key:t.type.name},[s("div",{class:V(["type",t.type.name])},l(t.type.name),3)]))),128))]),s("div",ys,[$s,x(" "+l(e.pokemon.height/10)+"m ",1),xs,x(" "+l(e.pokemon.weight/10)+"kg ",1)])]))}},Is=f(ws,[["__scopeId","data-v-420e0f6e"]]);const m=e=>(B("data-v-85b6b85c"),e=e(),C(),e),Ss={class:"container"},Ps={key:0,class:"details"},Bs={key:1,class:"details"},Cs={class:"details-title"},Ds={key:0},Vs=m(()=>s("i",{class:"fa-solid fa-arrow-left"},null,-1)),Ls={class:"image is-64x64"},js=["src","alt"],Es={key:2},Ns={class:"image is-64x64"},Ts=["src","alt"],Hs=m(()=>s("i",{class:"fa-solid fa-arrow-right"},null,-1)),Os={class:"details-data p-4"},As={class:"columns"},Fs={class:"column is-6"},Gs={class:"column is-6"},Rs={class:"pokemon-info"},qs=m(()=>s("h2",{class:"subtitle has-text-weight-bold mb-2"}," ABILITIES",-1)),zs={class:"tags are-medium"},Ms={class:"mb-2"},Ws=m(()=>s("h2",{class:"subtitle has-text-weight-bold mb-2"}," STATS",-1)),Js={__name:"Details",setup(e){P(b=>({"7a38e0d0":h.value}));const o=L(),c=j(),t=v(void 0),k=v(!0),h=v();E(()=>o.params.id,b=>{p()});const p=async()=>{t.value=await H(o.params.id),h.value=await O(r(t.value.id)),console.log(t.value),k.value=!1};return N(async()=>{o.params.id>S&&c.push({name:"home"}),p()}),(b,Ks)=>{const y=T("router-link");return a(),i("div",Ss,[k.value?(a(),i("div",Ps,[_(A)])):(a(),i("div",Bs,[s("div",Cs,[t.value.id==1?(a(),i("div",Ds)):(a(),w(y,{key:1,class:"nav-pokemon",to:{name:"details",params:{id:t.value.id-1}}},{default:I(()=>[Vs,s("figure",Ls,[s("img",{src:d(r)(t.value.id-1),alt:t.value.name},null,8,js)])]),_:1},8,["to"])),s("h1",null,"#"+l(t.value.id)+" "+l(t.value.name),1),t.value.id==d(S)?(a(),i("div",Es)):(a(),w(y,{key:3,class:"nav-pokemon",to:{name:"details",params:{id:t.value.id+1}}},{default:I(()=>[s("figure",Ns,[s("img",{src:d(r)(t.value.id+1),alt:t.value.name},null,8,Ts)]),Hs]),_:1},8,["to"]))]),s("div",Os,[s("div",As,[s("div",Fs,[_(Is,{pokemon:t.value},null,8,["pokemon"])]),s("div",Gs,[s("div",Rs,[_(us,{sprites:t.value.sprites},null,8,["sprites"]),s("div",null,[qs,s("div",zs,[(a(!0),i(u,null,g(t.value.abilities,$=>(a(),i("div",{class:"tag",key:$.ability.name},l($.ability.name),1))),128))])]),s("div",Ms,[Ws,_(fs,{stats:t.value.stats,color:h.value},null,8,["stats","color"])])])])])])]))])}}},Xs=f(Js,[["__scopeId","data-v-85b6b85c"]]);export{Xs as default};
