import{$t as e,Er as t,Gn as n,Jn as r,Nn as i,Rn as a,Yt as o,Z as s,_t as c,an as l,bt as u,ct as d,dt as f,fn as p,gr as m,lt as h,sn as g,st as _,t as v,ut as y,vt as b,yr as x}from"./framework.BQkCPPpt.js";import{t as S}from"./theme.Bt_yc7lh.js";import"./chunks/vue-i18n.vTFSufhp.js";import{a as C,i as w}from"./chunks/vue-router.CTGJ9cB7.js";import{a as T,i as E,n as D,r as O,t as k}from"./abcjsHandler.BwxRzEBn.js";var A={class:`play-note`},j={class:`note-display`},M={key:0},N={key:0,class:`header-indicator`},P={key:1,class:`error-message`},F=v(u({__name:`YueLiNotes`,props:{notationType:{},notes:{},conversionOptions:{default:()=>({key:`C`,meter:`4/4`,tempo:`120`,unitNoteLength:`1/4`,title:`Notation`})},showSheetMusic:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!1},showNotes:{type:Boolean,default:!0}},setup(t){let a=t,u=m(null),p=m(null),h=m(null),g=_(()=>{switch(a.notationType){case`abc`:return`ABC Notation`;case`jianpu`:return`Jianpu Notation`;case`scientific`:return`Scientific Notation`;default:return`Notation`}}),v=_(()=>({key:`C`,meter:`4/4`,tempo:`120`,unitNoteLength:`1/4`,title:g.value,...a.conversionOptions})),b=_(()=>a.notationType===`abc`&&T(a.notes)),x=_(()=>{if(!a.notes||!a.notes.trim())return``;try{switch(a.notationType){case`abc`:return E(a.notes,v.value);case`jianpu`:return O(a.notes,v.value);case`scientific`:return D(a.notes,v.value);default:return``}}catch(e){return console.error(`Error converting notation:`,e),u.value=e.message,``}});e(async()=>{p.value=new k({abcString:x.value,enablePlayback:!0,enableRender:a.showSheetMusic,container:a.showSheetMusic?h.value:void 0,showTitle:a.showTitle,tempo:parseInt(v.value.tempo,10),onPlay:()=>{},onStop:()=>{}}),a.showSheetMusic&&p.value&&await p.value.render()}),i(x,async e=>{p.value&&e&&await p.value.updateAbcString(e)}),i(()=>a.showSheetMusic,async e=>{p.value&&(p.value.dispose(),p.value=new k({abcString:x.value,enablePlayback:!0,enableRender:e,container:e?h.value:void 0,showTitle:a.showTitle,tempo:parseInt(v.value.tempo,10),onPlay:()=>{},onStop:()=>{}}),e&&await p.value.render())}),i(()=>a.showTitle,async e=>{p.value&&a.showSheetMusic&&await p.value.render()}),o(()=>{p.value&&=(p.value.dispose(),null)});async function S(){if(!(!x.value||!p.value)){console.log(`Playing ABC string:`,x.value);try{u.value=null,await p.value.play()}catch(e){console.error(`Error playing audio:`,e),u.value=e.message}}}return(e,i)=>(l(),f(`div`,A,[y(` 显示音符信息 `),t.showNotes?(l(),f(`div`,{key:0,class:n([`note-info`,{clickable:a.notes&&a.notes.trim()}]),onClick:i[0]||=e=>a.notes&&a.notes.trim()?S():null},[d(`div`,j,[t.notationType===`abc`?(l(),f(`pre`,M,r(a.notes||`无乐谱`),1)):(l(),f(s,{key:1},[c(r(a.notes||`无音符`),1)],64))]),b.value?(l(),f(`div`,N,` 📝 包含头部信息 `)):y(`v-if`,!0),u.value?(l(),f(`div`,P,r(u.value),1)):y(`v-if`,!0)],2)):y(`v-if`,!0),y(` 显示五线谱（可选） `),t.showSheetMusic&&x.value?(l(),f(`div`,{key:1,class:n([`sheet-music-container`,{clickable:x.value}]),onClick:i[1]||=e=>x.value?S():null},[d(`div`,{ref_key:`sheetMusicContainer`,ref:h,class:`abc-render-container`},null,512)],2)):y(`v-if`,!0)]))}}),[[`__scopeId`,`data-v-4439aa89`]]),I={__name:`ABCNotation`,setup(e,{expose:n}){let r=x(JSON.parse(`{"title":"ABC 记谱法","description":"","frontmatter":{"title":"ABC 记谱法"},"headers":[],"relativePath":"pages/yueli/ABCNotation.md","lastUpdated":1774772779000}`)),i=C(),o=w(),s=Object.assign(o.meta.frontmatter||{},r.value?.frontmatter||{});return i.currentRoute.value.data=r.value,g(`valaxy:frontmatter`,s),globalThis.$frontmatter=s,n({frontmatter:{title:`ABC 记谱法`}}),(e,n)=>{let r=F,i=S;return l(),h(i,{frontmatter:t(s)},{"main-content-md":a(()=>[n[0]||=d(`h2`,{id:`abc-记谱法`,tabindex:`-1`},[c(`ABC 记谱法 `),d(`a`,{class:`header-anchor`,href:`#abc-记谱法`,"aria-label":`Permalink to "ABC 记谱法"`},`​`)],-1),n[1]||=d(`p`,null,[d(`a`,{href:`./`},`ABC 记谱法`),c(`是一种采用ASCII字符，记录音乐的方法，它有一套规则，可以映射到五线谱记谱法。`)],-1),n[2]||=d(`h2`,{id:`播放音符测试`,tabindex:`-1`},[c(`播放音符测试 `),d(`a`,{class:`header-anchor`,href:`#播放音符测试`,"aria-label":`Permalink to "播放音符测试"`},`​`)],-1),b(r,{notationType:`jianpu`,notes:`6/2 1'/2 |
2' 2'/2 1'/2 2'/2 3'/4 2'/4 1'/2 2'/2  |
3'/2 5'/2 5'/2 6'/2 3'  3'/2 5'/2 |
2' 2'/2 1'/2 2'/2 1'/2 1'/2 2'/2 |
3'2 0 |
6/2 1'/2 |
2' 2' 2'/2 3'/4 2'/4 1'/2 2'/2 |
3'/2 5'/2 5'/2 6'/2 3' 5'/2 3'/2 |
2' 5'/2 3'/2 2'/2 6/2 6/2 1'/2 |
1'2 0 |`,showSheetMusic:!0,showTitle:!0}),b(r,{notationType:`scientific`,notes:`A4/2 C5/2 |
D5 D5/2 C5/2 D5/2 E5/4 D5/4 C5/2 D5/2  |
E5/2 G5/2 G5/2 A5/2 E5  E5/2 G5/2 |
D5 D5/2 C5/2 D5/2 C5/2 C5/2 D5/2 |
E52 z |
A4/2 C5/2 |
D5 D5 D5/2 E5/4 D5/4 C5/2 D5/2 |
E5/2 G5/2 G5/2 A5/2 E5 G5/2 E5/2 |
D5 G5/2 E5/2 D5/2 A4/2 A4/2 C5/2 |
C52 z |`,showSheetMusic:!0,showTitle:!0}),b(r,{notationType:`abc`,notes:`X:1
T:人生如棋
M:4/4
L:1/4
Q:120
K:C
A/2 c/2 |
d d/2 c/2 d/2 e/4 d/4 c/2 d/2 |
e/2 g/2 g/2 a/2 e e/2 g/2 |
d d/2 c/2 d/2 c/2 c/2 d/2 |
e2 z |
A/2 c/2 |
d d d/2 e/4 d/4 c/2 d/2 |
e/2 g/2 g/2 a/2 e g/2 e/2 |
d g/2 e/2 d/2 A/2 A/2 c/2 |
c2 z |`,showSheetMusic:!0,showNotes:!0,showTitle:!0})]),"main-header":a(()=>[p(e.$slots,`main-header`)]),"main-header-after":a(()=>[p(e.$slots,`main-header-after`)]),"main-nav":a(()=>[p(e.$slots,`main-nav`)]),"main-content-before":a(()=>[p(e.$slots,`main-content-before`)]),"main-content":a(()=>[p(e.$slots,`main-content`)]),"main-content-after":a(()=>[p(e.$slots,`main-content-after`)]),"main-nav-before":a(()=>[p(e.$slots,`main-nav-before`)]),"main-nav-after":a(()=>[p(e.$slots,`main-nav-after`)]),comment:a(()=>[p(e.$slots,`comment`)]),footer:a(()=>[p(e.$slots,`footer`)]),aside:a(()=>[p(e.$slots,`aside`)]),"aside-custom":a(()=>[p(e.$slots,`aside-custom`)]),default:a(()=>[p(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{I as default};