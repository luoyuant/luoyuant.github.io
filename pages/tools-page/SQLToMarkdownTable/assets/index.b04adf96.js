import{o as e,c as t,w as a,v as l,a as r,b as i,d as n,e as s}from"./vendor.019d05f9.js";const d={name:"App",data:()=>({inputSql:"",outputMdText:"",mdTableInfoText:"数据表说明：...\r\r",mdTableHeaderText:"| 字段 | 类型 | 是否为空 | 默认值 | 说明 |\r| :--: | :--: | :--: | :--: | :--: |\r",mdTableContentText:"",mdTableUpdateLogText:"\r\r数据表更新日志\r\r| 修改内容 | 修改时间 | 修订人 |\r| :--: | :--: | :--: |\r| 修改了xxx | 2021-6-8 | 张三 |",isCreateMdTableHeader:!0,isCreateMdTableOthers:!0,primaryKey:"",defaultValueList:[],descList:[]}),watch:{inputSql:function(e,t){this.clearContent(),this.handleSql(e)},isCreateMdTableHeader:function(e,t){this.getResultOutputText()},isCreateMdTableOthers:function(e,t){this.getResultOutputText()}},mounted(){},methods:{clearContent:function(){this.outputMdText="",this.mdTableContentText="",this.primaryKey="",this.defaultValueList=[],this.descList=[]},handleSql:function(e){var t=e.split("GO"),a=(t=t.map((e=>{var t=e.trimLeft("\n");return t=t.trimRight("\n")}))).filter((function(e){return-1!=e.indexOf("ALTER TABLE")&&-1!=e.indexOf("DEFAULT")}));this.handleSqlPropertiesDefaultValue(a);var l=t.filter((function(e){return-1!=e.indexOf("EXEC sys.sp_addextendedproperty")&&-1!=e.indexOf("MS_Description")}));this.handleSqlPropertiesDesc(l);var r=t.filter((function(e){return-1!=e.indexOf("CREATE TABLE")}));if(r&&r.length){var i=r[0],n=i.match(/CREATE TABLE \[dbo\]\.\[.*\]/);if(n&&n.length){var s=(n=n[0]).split("[dbo].")[1];s=(s=s.replace("[","")).replace("]","");var d="";if(-1==i.indexOf("CONSTRAINT")){u=(d=(u=i.split(") ON"))[0]).split(s+"]("),d=u[1]}else{var u;d=(u=i.split("CONSTRAINT"))[0];var h=u[1];if(u=d.split(s+"]("),d=u[1],-1!=h.indexOf("PRIMARY KEY")){var p=h.match(/\(\n\t.*\n\)/);if(p&&p.length){var o=p[0];o=(o=o.split("[")[1]).split("]")[0],this.primaryKey=o}}}this.handleSqlProperties(d)}}},handleSqlPropertiesDefaultValue:function(e){if(e&&e.length){var t=[];for(var a in e){var l=e[a],r=l.match(/FOR \[.*\]/),i=r.length?r[0]:null;i&&(i=(i=(i=i.split(" ")[1]).replace("[","")).replace("]",""));var n=l.match(/DEFAULT \(.*\)/),s=n.length?n[0]:"";if(s){for(s=s.split(" ")[1];-1!=s.indexOf("(");)s=s.replace("(","");for(;-1!=s.indexOf(")");)s=s.replace(")","")}if(i){var d={};d.name=i,d.defaultValue=s,t.push(d)}}this.defaultValueList=t}},handleSqlPropertiesDesc:function(e){if(e&&e.length){var t=[];for(var a in e){var l=e[a],r=l.match(/@level2name\=[^@]*'/),i=r&&r.length?r[0]:null;i&&(r=i.split("'"),i=r.length>=3?r[1]:"");var n=l.match(/@value=[^@]*\'/),s=n.length?n[0]:null;if(s&&(n=s.split("'"),s=n.length>=3?n[1]:""),i){var d={};d.name=i,d.desc=s,t.push(d)}}this.descList=t}},handleSqlProperties:function(e){var t=e.split("\t");t=t.map(this.handleSqlPropertiesItemLevelOne),this.getSQLProperties(t)},handleSqlPropertiesItemLevelOne:function(e,t){var a=e.split("] ");if(2==(a=a.map(this.handleSqlPropertiesItemLevelTwo)).length){var l=a.pop();if(-1!=l.indexOf("(")&&-1!=l.indexOf(")")){var r=(l=(l=l.trimRight()).trimRight(",")).split(") ");r=r.map((e=>{var t=e;return-1!=t.indexOf("(")&&(t+=")"),t})),a=a.concat(r)}}return a},handleSqlPropertiesItemLevelTwo:function(e,t){var a=e;switch(t){case 0:a=a.replace("[","");break;case 1:a=(a=a.replace("[","")).replace("]","");break;case 2:a=(a=a.trimRight()).trimRight(",")}return a},getSQLProperties:function(e){var t=[];for(var a in e){var l=e[a];if(l.length&&l.length>=3){var r,i=new Object;for(var n in l){var s=l[n];switch(Number(n)){case 0:i.name=s;break;case 1:i.type=s;break;case 2:i.isNull=-1==s.indexOf("NOT NULL"),i.desc=-1!=s.indexOf("IDENTITY(1,1)")?"[自增]":""}}if(i.defaultValue="",this.defaultValueList.length>0)(r=this.defaultValueList.filter((function(e){return e.name==i.name}))).length&&(i.defaultValue=r[0].defaultValue);if(this.descList.length>0)(r=this.descList.filter((function(e){return e.name==i.name}))).length&&(i.desc=r[0].desc+i.desc);t.push(i)}}this.getMdText(t)},getMdText:function(e){var t=[];for(var a in e){var l=e[a],r="| "+l.name+" "+("| "+l.type+" ")+("| "+(l.isNull?"是":"否")+" ")+("| "+l.defaultValue+" ")+("| "+l.desc+" |");t.push(r)}this.mdTableContentText=t.join("\r"),this.getResultOutputText()},getResultOutputText:function(){var e=this.isCreateMdTableHeader?this.mdTableHeaderText+this.mdTableContentText:this.mdTableContentText,t=this.isCreateMdTableOthers?this.mdTableInfoText+e+this.mdTableUpdateLogText:e;this.outputMdText=t}}},u=n("生成表头 "),h=n("生成其他信息 ");d.render=function(n,s,d,p,o,c){return e(),t("div",null,[a(r("textarea",{"onUpdate:modelValue":s[1]||(s[1]=e=>o.inputSql=e),class:"sql_input",placeholder:"请输入SQL语句"},null,512),[[l,o.inputSql]]),a(r("input",{class:"create_header_checkbox",type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=e=>o.isCreateMdTableHeader=e)},null,512),[[i,o.isCreateMdTableHeader]]),u,a(r("input",{class:"create_header_checkbox",type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=e=>o.isCreateMdTableOthers=e)},null,512),[[i,o.isCreateMdTableOthers]]),h,a(r("textarea",{"onUpdate:modelValue":s[4]||(s[4]=e=>o.outputMdText=e),class:"sql_output"},null,512),[[l,o.outputMdText]])])};s(d).mount("#app");