import{_ as w}from"./B3zsl_CE.js";import{d as _,bu as x,G as u,i as a,w as j,g as e,f as l,an as v,E as h,t as d,H as y,al as k,z as $,B as z,c as p,F as C,as as B}from"./C_gU_ooo.js";import{r as m}from"./CS9cRILA.js";import{u as I}from"./BLisGlkt.js";import{q as N}from"./D3rGjJWZ.js";import"./DlAUqK2U.js";const D={class:"flex h-56 justify-center overflow-hidden rounded-lg"},U={class:"absolute bottom-0 flex w-full justify-center"},W={class:"rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3"},q={class:"flex items-center justify-between gap-2"},A={class:"flex items-center gap-2"},E={class:"flex items-center gap-2"},F={class:"whitespace-nowrap text-sm font-semibold text-white/90"},L={class:"whitespace-nowrap text-xs text-neutral-500"},O={class:"flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"},P=_({__name:"Card",props:{project:{}},setup(g){const o=x();return(t,r)=>{const n=v,s=y,c=k;return a(),u(c,{"aria-label":t.project.name+" project link",to:t.project.link,target:"_blank",class:"group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"},{default:j(()=>[r[0]||(r[0]=e("div",{class:"flex gap-1 px-1 py-[2px]"},[e("div",{class:"size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10"}),e("div",{class:"size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10"}),e("div",{class:"size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10"})],-1)),e("div",D,[l(n,{placeholder:h(o)(`${t.project.image}`),width:"1536",alt:t.project.name+" project image",class:"h-full rounded-lg object-cover transition-all duration-300 hover:scale-105",src:t.project.image,"aria-label":t.project.name+" project image"},null,8,["placeholder","alt","src","aria-label"])]),e("div",U,[e("div",W,[e("div",q,[e("div",A,[e("div",E,[e("span",F,d(t.project.name),1),e("span",L,d(t.project.release==="soon"?t.$t("global.soon")+"...":t.project.release),1)])]),e("div",O,[l(s,{name:"heroicons:arrow-right",class:"size-3 text-white"})])])])])]),_:1},8,["aria-label","to"])}}}),S=Object.assign(P,{__name:"ProjectCard"}),V={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},G={class:"font-newsreader italic text-white-shadow text-center text-4xl"},H={class:"text-center text-lg font-extralight italic text-muted"},J={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},K=_({__name:"Works",async setup(g){let o,t;const{locale:r}=$(),{data:n}=([o,t]=z(async()=>I("projects",async()=>{const s="projects_"+r.value;return await N(s).all()},{watch:[r]})),o=await o,t(),o);return(s,c)=>{const b=w,f=S;return a(),p("section",V,[e("h1",G,[m(s.$slots,"title",{mdcUnwrap:"p"})]),e("h2",H,[m(s.$slots,"subtitle",{mdcUnwrap:"p"})]),l(b,{class:"mb-8 mt-2"}),e("div",J,[(a(!0),p(C,null,B(h(n),i=>(a(),u(f,{key:i.name,project:i},null,8,["project"]))),128))])])}}}),Z=Object.assign(K,{__name:"Works"});export{Z as default};
