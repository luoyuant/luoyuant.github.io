import{o as t,c as e,a as r,w as n,v as i,t as o,b as s,d as p,e as a}from"./vendor.12a37abf.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const r of t)if("childList"===r.type)for(const t of r.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const c={data:()=>({inputPropertyText:"",inputCommentText:"",propertyList:[],commentList:[],outputText:"",tipsText:""}),watch:{inputPropertyText:function(t,e){this.parsePropertyText(t)},inputCommentText:function(t,e){this.parseCommentText(t)}},methods:{parsePropertyText:function(t){var e=t.split("\n"),r=[];if(e.length>0)for(var n in e){var i=e[n];if(0==i.indexOf("@property")){var o=i.split(" ").pop(),s={propertyName:o=(o=o.replace(";","")).replace("*",""),text:i};r.push(s)}}this.propertyList=r,this.handleOutText()},parseCommentText:function(t){var e=t.split("\n"),r=[];if(e.length>0)for(var n in e){var i=e[n].split("\t"),o={propertyName:i[0],propertyType:i[1],comment:i[2]};r.push(o)}this.commentList=r,this.handleOutText()},handleOutText:function(){if(!(this.propertyList.length<=0||this.commentList.length<=0)){var t="";for(var e in this.commentList){var r=this.commentList[e];if(i=this.propertyList.filter((function(t,e){return t.propertyName==r.propertyName})).shift())r.comment,i.text,t+="/** "+r.comment+" */\n"+i.text+"\n",i.didAdd=!0}for(var n=0;n<this.propertyList.length;n++){var i;(i=this.propertyList[n]).didAdd||(t+="\n"+i.text)}this.outputText=t}}}},l={class:"content_container"},u={class:"input_container"},d=r("span",{class:"input_title_span"},"Object-C属性",-1),m={class:"tips_span"},f={class:"output_container"},h={key:0,class:"input_title_span"},x={class:"output_item_container"},y={class:"output_div",placeholder:"生成内容预览"},v={class:"output_pre"};c.render=function(p,a,c,T,L,_){return t(),e("div",l,[r("div",u,[d,n(r("textarea",{class:"input_textarea",placeholder:"请输入Object-C属性","onUpdate:modelValue":a[0]||(a[0]=t=>L.inputPropertyText=t)},null,512),[[i,L.inputPropertyText]]),n(r("textarea",{class:"input_textarea",placeholder:"请输入说明","onUpdate:modelValue":a[1]||(a[1]=t=>L.inputCommentText=t)},null,512),[[i,L.inputCommentText]]),r("span",m,o(L.tipsText),1)]),r("div",f,[L.outputText.length>0?(t(),e("span",h,"生成内容")):s("",!0),r("div",x,[r("div",y,[r("pre",v,o(L.outputText),1)])])])])};a({setup:e=>(e,r)=>(t(),p(c))}).mount("#app");
