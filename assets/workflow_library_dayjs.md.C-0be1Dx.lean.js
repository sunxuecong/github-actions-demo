import{c as is,g as ns}from"./chunks/commonjsHelpers.Cpj98o6Y.js";import{l as ss,p as rs,B as ls,h as hs,q as H,f as L,e as K,a5 as as,o as ps}from"./chunks/framework.Bn2cMJQ3.js";var ts={exports:{}};(function(Z,z){(function(f,E){Z.exports=E()})(is,function(){var f=1e3,E=6e4,S=36e5,B="millisecond",v="second",A="minute",O="hour",M="day",T="week",F="month",Y="quarter",D="year",_="date",x="Invalid Date",G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],s=t%100;return"["+t+(n[(s-20)%10]||n[s]||n[0])+"]"}},w=function(t,n,s){var e=String(t);return!e||e.length>=n?t:""+Array(n+1-e.length).join(s)+t},R={s:w,z:function(t){var n=-t.utcOffset(),s=Math.abs(n),e=Math.floor(s/60),i=s%60;return(n<=0?"+":"-")+w(e,2,"0")+":"+w(i,2,"0")},m:function t(n,s){if(n.date()<s.date())return-t(s,n);var e=12*(s.year()-n.year())+(s.month()-n.month()),i=n.clone().add(e,F),h=s-i<0,p=n.clone().add(e+(h?-1:1),F);return+(-(e+(s-i)/(h?i-p:p-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:F,y:D,w:T,d:M,D:_,h:O,m:A,s:v,ms:B,Q:Y}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return t===void 0}},I="en",o={};o[I]=X;var r="$isDayjsObject",a=function(t){return t instanceof g||!(!t||!t[r])},u=function t(n,s,e){var i;if(!n)return I;if(typeof n=="string"){var h=n.toLowerCase();o[h]&&(i=h),s&&(o[h]=s,i=h);var p=n.split("-");if(!i&&p.length>1)return t(p[0])}else{var d=n.name;o[d]=n,i=d}return!e&&i&&(I=i),i||!e&&I},k=function(t,n){if(a(t))return t.clone();var s=typeof n=="object"?n:{};return s.date=t,s.args=arguments,new g(s)},l=R;l.l=u,l.i=a,l.w=function(t,n){return k(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var g=function(){function t(s){this.$L=u(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[r]=!0}var n=t.prototype;return n.parse=function(s){this.$d=function(e){var i=e.date,h=e.utc;if(i===null)return new Date(NaN);if(l.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var p=i.match(G);if(p){var d=p[2]-1||0,c=(p[7]||"0").substring(0,3);return h?new Date(Date.UTC(p[1],d,p[3]||1,p[4]||0,p[5]||0,p[6]||0,c)):new Date(p[1],d,p[3]||1,p[4]||0,p[5]||0,p[6]||0,c)}}return new Date(i)}(s),this.init()},n.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},n.$utils=function(){return l},n.isValid=function(){return this.$d.toString()!==x},n.isSame=function(s,e){var i=k(s);return this.startOf(e)<=i&&i<=this.endOf(e)},n.isAfter=function(s,e){return k(s)<this.startOf(e)},n.isBefore=function(s,e){return this.endOf(e)<k(s)},n.$g=function(s,e,i){return l.u(s)?this[e]:this.set(i,s)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(s,e){var i=this,h=!!l.u(e)||e,p=l.p(s),d=function(q,b){var N=l.w(i.$u?Date.UTC(i.$y,b,q):new Date(i.$y,b,q),i);return h?N:N.endOf(M)},c=function(q,b){return l.w(i.toDate()[q].apply(i.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(b)),i)},y=this.$W,$=this.$M,C=this.$D,V="set"+(this.$u?"UTC":"");switch(p){case D:return h?d(1,0):d(31,11);case F:return h?d(1,$):d(0,$+1);case T:var P=this.$locale().weekStart||0,W=(y<P?y+7:y)-P;return d(h?C-W:C+(6-W),$);case M:case _:return c(V+"Hours",0);case O:return c(V+"Minutes",1);case A:return c(V+"Seconds",2);case v:return c(V+"Milliseconds",3);default:return this.clone()}},n.endOf=function(s){return this.startOf(s,!1)},n.$set=function(s,e){var i,h=l.p(s),p="set"+(this.$u?"UTC":""),d=(i={},i[M]=p+"Date",i[_]=p+"Date",i[F]=p+"Month",i[D]=p+"FullYear",i[O]=p+"Hours",i[A]=p+"Minutes",i[v]=p+"Seconds",i[B]=p+"Milliseconds",i)[h],c=h===M?this.$D+(e-this.$W):e;if(h===F||h===D){var y=this.clone().set(_,1);y.$d[d](c),y.init(),this.$d=y.set(_,Math.min(this.$D,y.daysInMonth())).$d}else d&&this.$d[d](c);return this.init(),this},n.set=function(s,e){return this.clone().$set(s,e)},n.get=function(s){return this[l.p(s)]()},n.add=function(s,e){var i,h=this;s=Number(s);var p=l.p(e),d=function($){var C=k(h);return l.w(C.date(C.date()+Math.round($*s)),h)};if(p===F)return this.set(F,this.$M+s);if(p===D)return this.set(D,this.$y+s);if(p===M)return d(1);if(p===T)return d(7);var c=(i={},i[A]=E,i[O]=S,i[v]=f,i)[p]||1,y=this.$d.getTime()+s*c;return l.w(y,this)},n.subtract=function(s,e){return this.add(-1*s,e)},n.format=function(s){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||x;var h=s||"YYYY-MM-DDTHH:mm:ssZ",p=l.z(this),d=this.$H,c=this.$m,y=this.$M,$=i.weekdays,C=i.months,V=i.meridiem,P=function(b,N,U,Q){return b&&(b[N]||b(e,h))||U[N].slice(0,Q)},W=function(b){return l.s(d%12||12,b,"0")},q=V||function(b,N,U){var Q=b<12?"AM":"PM";return U?Q.toLowerCase():Q};return h.replace(j,function(b,N){return N||function(U){switch(U){case"YY":return String(e.$y).slice(-2);case"YYYY":return l.s(e.$y,4,"0");case"M":return y+1;case"MM":return l.s(y+1,2,"0");case"MMM":return P(i.monthsShort,y,C,3);case"MMMM":return P(C,y);case"D":return e.$D;case"DD":return l.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return P(i.weekdaysMin,e.$W,$,2);case"ddd":return P(i.weekdaysShort,e.$W,$,3);case"dddd":return $[e.$W];case"H":return String(d);case"HH":return l.s(d,2,"0");case"h":return W(1);case"hh":return W(2);case"a":return q(d,c,!0);case"A":return q(d,c,!1);case"m":return String(c);case"mm":return l.s(c,2,"0");case"s":return String(e.$s);case"ss":return l.s(e.$s,2,"0");case"SSS":return l.s(e.$ms,3,"0");case"Z":return p}return null}(b)||p.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(s,e,i){var h,p=this,d=l.p(e),c=k(s),y=(c.utcOffset()-this.utcOffset())*E,$=this-c,C=function(){return l.m(p,c)};switch(d){case D:h=C()/12;break;case F:h=C();break;case Y:h=C()/3;break;case T:h=($-y)/6048e5;break;case M:h=($-y)/864e5;break;case O:h=$/S;break;case A:h=$/E;break;case v:h=$/f;break;default:h=$}return i?h:l.a(h)},n.daysInMonth=function(){return this.endOf(F).$D},n.$locale=function(){return o[this.$L]},n.locale=function(s,e){if(!s)return this.$L;var i=this.clone(),h=u(s,e,!0);return h&&(i.$L=h),i},n.clone=function(){return l.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},t}(),m=g.prototype;return k.prototype=m,[["$ms",B],["$s",v],["$m",A],["$H",O],["$W",M],["$M",F],["$y",D],["$D",_]].forEach(function(t){m[t[1]]=function(n){return this.$g(n,t[0],t[1])}}),k.extend=function(t,n){return t.$i||(t(n,g,k),t.$i=!0),k},k.locale=u,k.isDayjs=a,k.unix=function(t){return k(1e3*t)},k.en=o[I],k.Ls=o,k.p={},k})})(ts);var ks=ts.exports;const J=ns(ks);var es={exports:{}};(function(Z,z){(function(f,E){Z.exports=E()})(is,function(){var f,E,S=1e3,B=6e4,v=36e5,A=864e5,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M=31536e6,T=2628e6,F=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,Y={years:M,months:T,days:A,hours:v,minutes:B,seconds:S,milliseconds:1,weeks:6048e5},D=function(o){return o instanceof R},_=function(o,r,a){return new R(o,a,r.$l)},x=function(o){return E.p(o)+"s"},G=function(o){return o<0},j=function(o){return G(o)?Math.ceil(o):Math.floor(o)},X=function(o){return Math.abs(o)},w=function(o,r){return o?G(o)?{negative:!0,format:""+X(o)+r}:{negative:!1,format:""+o+r}:{negative:!1,format:""}},R=function(){function o(a,u,k){var l=this;if(this.$d={},this.$l=k,a===void 0&&(this.$ms=0,this.parseFromMilliseconds()),u)return _(a*Y[x(u)],this);if(typeof a=="number")return this.$ms=a,this.parseFromMilliseconds(),this;if(typeof a=="object")return Object.keys(a).forEach(function(t){l.$d[x(t)]=a[t]}),this.calMilliseconds(),this;if(typeof a=="string"){var g=a.match(F);if(g){var m=g.slice(2).map(function(t){return t!=null?Number(t):0});return this.$d.years=m[0],this.$d.months=m[1],this.$d.weeks=m[2],this.$d.days=m[3],this.$d.hours=m[4],this.$d.minutes=m[5],this.$d.seconds=m[6],this.calMilliseconds(),this}}return this}var r=o.prototype;return r.calMilliseconds=function(){var a=this;this.$ms=Object.keys(this.$d).reduce(function(u,k){return u+(a.$d[k]||0)*Y[k]},0)},r.parseFromMilliseconds=function(){var a=this.$ms;this.$d.years=j(a/M),a%=M,this.$d.months=j(a/T),a%=T,this.$d.days=j(a/A),a%=A,this.$d.hours=j(a/v),a%=v,this.$d.minutes=j(a/B),a%=B,this.$d.seconds=j(a/S),a%=S,this.$d.milliseconds=a},r.toISOString=function(){var a=w(this.$d.years,"Y"),u=w(this.$d.months,"M"),k=+this.$d.days||0;this.$d.weeks&&(k+=7*this.$d.weeks);var l=w(k,"D"),g=w(this.$d.hours,"H"),m=w(this.$d.minutes,"M"),t=this.$d.seconds||0;this.$d.milliseconds&&(t+=this.$d.milliseconds/1e3,t=Math.round(1e3*t)/1e3);var n=w(t,"S"),s=a.negative||u.negative||l.negative||g.negative||m.negative||n.negative,e=g.format||m.format||n.format?"T":"",i=(s?"-":"")+"P"+a.format+u.format+l.format+e+g.format+m.format+n.format;return i==="P"||i==="-P"?"P0D":i},r.toJSON=function(){return this.toISOString()},r.format=function(a){var u=a||"YYYY-MM-DDTHH:mm:ss",k={Y:this.$d.years,YY:E.s(this.$d.years,2,"0"),YYYY:E.s(this.$d.years,4,"0"),M:this.$d.months,MM:E.s(this.$d.months,2,"0"),D:this.$d.days,DD:E.s(this.$d.days,2,"0"),H:this.$d.hours,HH:E.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:E.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:E.s(this.$d.seconds,2,"0"),SSS:E.s(this.$d.milliseconds,3,"0")};return u.replace(O,function(l,g){return g||String(k[l])})},r.as=function(a){return this.$ms/Y[x(a)]},r.get=function(a){var u=this.$ms,k=x(a);return k==="milliseconds"?u%=1e3:u=k==="weeks"?j(u/Y[k]):this.$d[k],u||0},r.add=function(a,u,k){var l;return l=u?a*Y[x(u)]:D(a)?a.$ms:_(a,this).$ms,_(this.$ms+l*(k?-1:1),this)},r.subtract=function(a,u){return this.add(a,u,!0)},r.locale=function(a){var u=this.clone();return u.$l=a,u},r.clone=function(){return _(this.$ms,this)},r.humanize=function(a){return f().add(this.$ms,"ms").locale(this.$l).fromNow(!a)},r.valueOf=function(){return this.asMilliseconds()},r.milliseconds=function(){return this.get("milliseconds")},r.asMilliseconds=function(){return this.as("milliseconds")},r.seconds=function(){return this.get("seconds")},r.asSeconds=function(){return this.as("seconds")},r.minutes=function(){return this.get("minutes")},r.asMinutes=function(){return this.as("minutes")},r.hours=function(){return this.get("hours")},r.asHours=function(){return this.as("hours")},r.days=function(){return this.get("days")},r.asDays=function(){return this.as("days")},r.weeks=function(){return this.get("weeks")},r.asWeeks=function(){return this.as("weeks")},r.months=function(){return this.get("months")},r.asMonths=function(){return this.as("months")},r.years=function(){return this.get("years")},r.asYears=function(){return this.as("years")},o}(),I=function(o,r,a){return o.add(r.years()*a,"y").add(r.months()*a,"M").add(r.days()*a,"d").add(r.hours()*a,"h").add(r.minutes()*a,"m").add(r.seconds()*a,"s").add(r.milliseconds()*a,"ms")};return function(o,r,a){f=a,E=a().$utils(),a.duration=function(l,g){var m=a.locale();return _(l,{$l:m},g)},a.isDuration=D;var u=r.prototype.add,k=r.prototype.subtract;r.prototype.add=function(l,g){return D(l)?I(this,l,1):u.bind(this)(l,g)},r.prototype.subtract=function(l,g){return D(l)?I(this,l,-1):k.bind(this)(l,g)}}})})(es);var os=es.exports;const us=ns(os),ds=as("",7),cs=["innerHTML"],Es={class:"countdown"},gs=as("",2),$s=JSON.parse('{"title":"Day.js 使用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/library/dayjs.md","filePath":"workflow/library/dayjs.md","lastUpdated":1722593040000}'),ys={name:"workflow/library/dayjs.md"},bs=Object.assign(ys,{setup(Z){J.extend(us);const z=ss(null),f=ss(J.duration(0)),E=()=>{const S=J(),v=J().endOf("D").diff(S);f.value=J.duration(v)};return rs(()=>{z.value=setInterval(E,30)}),ls(()=>{clearInterval(z.value)}),(S,B)=>(ps(),hs("div",null,[ds,H("div",{class:"countdown",innerHTML:f.value.format("[<span>]HH[</span>] 时 [<span>]mm[</span>] 分 [<span>]ss[</span>] 秒")},null,8,cs),H("p",null,L(f.value.format("D 天 HH 时 mm 分 ss 秒")),1),H("p",null,L(f.value.format("DD : HH : mm : ss")),1),H("p",null,L(f.value.format("HH-mm-ss")),1),H("div",Es,[K(" 使用取值方法： "),H("span",null,L(f.value.hours()),1),K(" 时 "),H("span",null,L(f.value.minutes()),1),K(" 分 "),H("span",null,L(f.value.seconds()),1),K(" 秒 "),H("span",null,L(f.value.milliseconds()),1)]),gs]))}});export{$s as __pageData,bs as default};
