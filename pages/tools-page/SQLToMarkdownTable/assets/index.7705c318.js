import{o as e,c as t,w as a,v as n,a as l,b as r,d as i,e as s}from"./vendor.019d05f9.js";const d={name:"App",data:()=>({inputSql:"",outputMdText:"",mdTableHeaderText:"| 字段 | 类型 | 是否为空 | 默认值 | 说明 |\r| :--: | :--: | :--: | :--: | :--: |\r",mdTableContentText:"",isCreateMdTableHeader:!0}),watch:{inputSql:function(e,t){this.handleSql(e)},isCreateMdTableHeader:function(e,t){this.outputMdText=e?this.mdTableHeaderText+this.mdTableContentText:this.mdTableContentText}},mounted(){},methods:{handleSql:function(e){var t=e.split("\t");t=t.map(this.handleSqlItemLevelOne),this.getSQLProperties(t)},handleSqlItemLevelOne:function(e,t){var a=e.split("] ");if(2==(a=a.map(this.handleSqlItemLevelTwo)).length){var n=a.pop();if(-1!=n.indexOf("(")&&-1!=n.indexOf(")")){var l=(n=(n=n.trimRight()).trimRight(",")).split(" ");a=a.concat(l)}}return a},handleSqlItemLevelTwo:function(e,t){var a=e;switch(t){case 0:a=a.replace("[","");break;case 1:a=(a=a.replace("[","")).replace("]","");break;case 2:a=(a=a.trimRight()).trimRight(",")}return a},getSQLProperties:function(e){var t=[];for(var a in e){var n=e[a];if(n.length&&n.length>=3){var l=new Object;for(var r in n){var i=n[r];switch(Number(r)){case 0:l.name=i;break;case 1:l.type=i;break;case 2:l.isNull=-1==i.indexOf("NOT NULL"),l.desc=-1!=i.indexOf("IDENTITY(1,1)")?"[自增]":""}}t.push(l)}}this.getMdText(t)},getMdText:function(e){var t=[];for(var a in e){var n=e[a],l="| "+n.name+" "+("| "+n.type+" ")+("| "+(n.isNull?"是":"否")+" ")+"|  "+("| "+n.desc+" |");t.push(l)}this.mdTableContentText=t.join("\r"),this.outputMdText=this.isCreateMdTableHeader?this.mdTableHeaderText+this.mdTableContentText:this.mdTableContentText}}},o=i("生成表头 ");d.render=function(i,s,d,u,h,p){return e(),t("div",null,[a(l("textarea",{"onUpdate:modelValue":s[1]||(s[1]=e=>h.inputSql=e),class:"sql_input",placeholder:"请输入SQL语句"},null,512),[[n,h.inputSql]]),a(l("input",{class:"create_header_checkbox",type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=e=>h.isCreateMdTableHeader=e)},null,512),[[r,h.isCreateMdTableHeader]]),o,a(l("textarea",{"onUpdate:modelValue":s[3]||(s[3]=e=>h.outputMdText=e),class:"sql_output"},null,512),[[n,h.outputMdText]])])};s(d).mount("#app");
