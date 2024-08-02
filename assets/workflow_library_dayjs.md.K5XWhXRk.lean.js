import{l as ss,p as rs,B as ls,h as hs,q as O,f as V,e as K,a7 as is,o as ps}from"./chunks/framework.QLdkU56Z.js";var ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function as(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var ts={exports:{}};(function(w,z){(function(f,E){w.exports=E()})(ns,function(){var f=1e3,E=6e4,B=36e5,j="millisecond",v="second",A="minute",T="hour",M="day",Y="week",F="month",x="quarter",D="year",_="date",I="Invalid Date",G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,H=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],s=t%100;return"["+t+(n[(s-20)%10]||n[s]||n[0])+"]"}},S=function(t,n,s){var e=String(t);return!e||e.length>=n?t:""+Array(n+1-e.length).join(s)+t},R={s:S,z:function(t){var n=-t.utcOffset(),s=Math.abs(n),e=Math.floor(s/60),i=s%60;return(n<=0?"+":"-")+S(e,2,"0")+":"+S(i,2,"0")},m:function t(n,s){if(n.date()<s.date())return-t(s,n);var e=12*(s.year()-n.year())+(s.month()-n.month()),i=n.clone().add(e,F),h=s-i<0,p=n.clone().add(e+(h?-1:1),F);return+(-(e+(s-i)/(h?i-p:p-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:F,y:D,w:Y,d:M,D:_,h:T,m:A,s:v,ms:j,Q:x}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return t===void 0}},P="en",d={};d[P]=X;var r="$isDayjsObject",a=function(t){return t instanceof y||!(!t||!t[r])},k=function t(n,s,e){var i;if(!n)return P;if(typeof n=="string"){var h=n.toLowerCase();d[h]&&(i=h),s&&(d[h]=s,i=h);var p=n.split("-");if(!i&&p.length>1)return t(p[0])}else{var u=n.name;d[u]=n,i=u}return!e&&i&&(P=i),i||!e&&P},o=function(t,n){if(a(t))return t.clone();var s=typeof n=="object"?n:{};return s.date=t,s.args=arguments,new y(s)},l=R;l.l=k,l.i=a,l.w=function(t,n){return o(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var y=function(){function t(s){this.$L=k(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[r]=!0}var n=t.prototype;return n.parse=function(s){this.$d=function(e){var i=e.date,h=e.utc;if(i===null)return new Date(NaN);if(l.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var p=i.match(G);if(p){var u=p[2]-1||0,c=(p[7]||"0").substring(0,3);return h?new Date(Date.UTC(p[1],u,p[3]||1,p[4]||0,p[5]||0,p[6]||0,c)):new Date(p[1],u,p[3]||1,p[4]||0,p[5]||0,p[6]||0,c)}}return new Date(i)}(s),this.init()},n.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},n.$utils=function(){return l},n.isValid=function(){return this.$d.toString()!==I},n.isSame=function(s,e){var i=o(s);return this.startOf(e)<=i&&i<=this.endOf(e)},n.isAfter=function(s,e){return o(s)<this.startOf(e)},n.isBefore=function(s,e){return this.endOf(e)<o(s)},n.$g=function(s,e,i){return l.u(s)?this[e]:this.set(i,s)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(s,e){var i=this,h=!!l.u(e)||e,p=l.p(s),u=function(L,b){var N=l.w(i.$u?Date.UTC(i.$y,b,L):new Date(i.$y,b,L),i);return h?N:N.endOf(M)},c=function(L,b){return l.w(i.toDate()[L].apply(i.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(b)),i)},g=this.$W,$=this.$M,C=this.$D,W="set"+(this.$u?"UTC":"");switch(p){case D:return h?u(1,0):u(31,11);case F:return h?u(1,$):u(0,$+1);case Y:var q=this.$locale().weekStart||0,U=(g<q?g+7:g)-q;return u(h?C-U:C+(6-U),$);case M:case _:return c(W+"Hours",0);case T:return c(W+"Minutes",1);case A:return c(W+"Seconds",2);case v:return c(W+"Milliseconds",3);default:return this.clone()}},n.endOf=function(s){return this.startOf(s,!1)},n.$set=function(s,e){var i,h=l.p(s),p="set"+(this.$u?"UTC":""),u=(i={},i[M]=p+"Date",i[_]=p+"Date",i[F]=p+"Month",i[D]=p+"FullYear",i[T]=p+"Hours",i[A]=p+"Minutes",i[v]=p+"Seconds",i[j]=p+"Milliseconds",i)[h],c=h===M?this.$D+(e-this.$W):e;if(h===F||h===D){var g=this.clone().set(_,1);g.$d[u](c),g.init(),this.$d=g.set(_,Math.min(this.$D,g.daysInMonth())).$d}else u&&this.$d[u](c);return this.init(),this},n.set=function(s,e){return this.clone().$set(s,e)},n.get=function(s){return this[l.p(s)]()},n.add=function(s,e){var i,h=this;s=Number(s);var p=l.p(e),u=function($){var C=o(h);return l.w(C.date(C.date()+Math.round($*s)),h)};if(p===F)return this.set(F,this.$M+s);if(p===D)return this.set(D,this.$y+s);if(p===M)return u(1);if(p===Y)return u(7);var c=(i={},i[A]=E,i[T]=B,i[v]=f,i)[p]||1,g=this.$d.getTime()+s*c;return l.w(g,this)},n.subtract=function(s,e){return this.add(-1*s,e)},n.format=function(s){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||I;var h=s||"YYYY-MM-DDTHH:mm:ssZ",p=l.z(this),u=this.$H,c=this.$m,g=this.$M,$=i.weekdays,C=i.months,W=i.meridiem,q=function(b,N,J,Q){return b&&(b[N]||b(e,h))||J[N].slice(0,Q)},U=function(b){return l.s(u%12||12,b,"0")},L=W||function(b,N,J){var Q=b<12?"AM":"PM";return J?Q.toLowerCase():Q};return h.replace(H,function(b,N){return N||function(J){switch(J){case"YY":return String(e.$y).slice(-2);case"YYYY":return l.s(e.$y,4,"0");case"M":return g+1;case"MM":return l.s(g+1,2,"0");case"MMM":return q(i.monthsShort,g,C,3);case"MMMM":return q(C,g);case"D":return e.$D;case"DD":return l.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return q(i.weekdaysMin,e.$W,$,2);case"ddd":return q(i.weekdaysShort,e.$W,$,3);case"dddd":return $[e.$W];case"H":return String(u);case"HH":return l.s(u,2,"0");case"h":return U(1);case"hh":return U(2);case"a":return L(u,c,!0);case"A":return L(u,c,!1);case"m":return String(c);case"mm":return l.s(c,2,"0");case"s":return String(e.$s);case"ss":return l.s(e.$s,2,"0");case"SSS":return l.s(e.$ms,3,"0");case"Z":return p}return null}(b)||p.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(s,e,i){var h,p=this,u=l.p(e),c=o(s),g=(c.utcOffset()-this.utcOffset())*E,$=this-c,C=function(){return l.m(p,c)};switch(u){case D:h=C()/12;break;case F:h=C();break;case x:h=C()/3;break;case Y:h=($-g)/6048e5;break;case M:h=($-g)/864e5;break;case T:h=$/B;break;case A:h=$/E;break;case v:h=$/f;break;default:h=$}return i?h:l.a(h)},n.daysInMonth=function(){return this.endOf(F).$D},n.$locale=function(){return d[this.$L]},n.locale=function(s,e){if(!s)return this.$L;var i=this.clone(),h=k(s,e,!0);return h&&(i.$L=h),i},n.clone=function(){return l.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},t}(),m=y.prototype;return o.prototype=m,[["$ms",j],["$s",v],["$m",A],["$H",T],["$W",M],["$M",F],["$y",D],["$D",_]].forEach(function(t){m[t[1]]=function(n){return this.$g(n,t[0],t[1])}}),o.extend=function(t,n){return t.$i||(t(n,y,o),t.$i=!0),o},o.locale=k,o.isDayjs=a,o.unix=function(t){return o(1e3*t)},o.en=d[P],o.Ls=d,o.p={},o})})(ts);var os=ts.exports;const Z=as(os);var es={exports:{}};(function(w,z){(function(f,E){w.exports=E()})(ns,function(){var f,E,B=1e3,j=6e4,v=36e5,A=864e5,T=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M=31536e6,Y=2628e6,F=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,x={years:M,months:Y,days:A,hours:v,minutes:j,seconds:B,milliseconds:1,weeks:6048e5},D=function(d){return d instanceof R},_=function(d,r,a){return new R(d,a,r.$l)},I=function(d){return E.p(d)+"s"},G=function(d){return d<0},H=function(d){return G(d)?Math.ceil(d):Math.floor(d)},X=function(d){return Math.abs(d)},S=function(d,r){return d?G(d)?{negative:!0,format:""+X(d)+r}:{negative:!1,format:""+d+r}:{negative:!1,format:""}},R=function(){function d(a,k,o){var l=this;if(this.$d={},this.$l=o,a===void 0&&(this.$ms=0,this.parseFromMilliseconds()),k)return _(a*x[I(k)],this);if(typeof a=="number")return this.$ms=a,this.parseFromMilliseconds(),this;if(typeof a=="object")return Object.keys(a).forEach(function(t){l.$d[I(t)]=a[t]}),this.calMilliseconds(),this;if(typeof a=="string"){var y=a.match(F);if(y){var m=y.slice(2).map(function(t){return t!=null?Number(t):0});return this.$d.years=m[0],this.$d.months=m[1],this.$d.weeks=m[2],this.$d.days=m[3],this.$d.hours=m[4],this.$d.minutes=m[5],this.$d.seconds=m[6],this.calMilliseconds(),this}}return this}var r=d.prototype;return r.calMilliseconds=function(){var a=this;this.$ms=Object.keys(this.$d).reduce(function(k,o){return k+(a.$d[o]||0)*x[o]},0)},r.parseFromMilliseconds=function(){var a=this.$ms;this.$d.years=H(a/M),a%=M,this.$d.months=H(a/Y),a%=Y,this.$d.days=H(a/A),a%=A,this.$d.hours=H(a/v),a%=v,this.$d.minutes=H(a/j),a%=j,this.$d.seconds=H(a/B),a%=B,this.$d.milliseconds=a},r.toISOString=function(){var a=S(this.$d.years,"Y"),k=S(this.$d.months,"M"),o=+this.$d.days||0;this.$d.weeks&&(o+=7*this.$d.weeks);var l=S(o,"D"),y=S(this.$d.hours,"H"),m=S(this.$d.minutes,"M"),t=this.$d.seconds||0;this.$d.milliseconds&&(t+=this.$d.milliseconds/1e3,t=Math.round(1e3*t)/1e3);var n=S(t,"S"),s=a.negative||k.negative||l.negative||y.negative||m.negative||n.negative,e=y.format||m.format||n.format?"T":"",i=(s?"-":"")+"P"+a.format+k.format+l.format+e+y.format+m.format+n.format;return i==="P"||i==="-P"?"P0D":i},r.toJSON=function(){return this.toISOString()},r.format=function(a){var k=a||"YYYY-MM-DDTHH:mm:ss",o={Y:this.$d.years,YY:E.s(this.$d.years,2,"0"),YYYY:E.s(this.$d.years,4,"0"),M:this.$d.months,MM:E.s(this.$d.months,2,"0"),D:this.$d.days,DD:E.s(this.$d.days,2,"0"),H:this.$d.hours,HH:E.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:E.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:E.s(this.$d.seconds,2,"0"),SSS:E.s(this.$d.milliseconds,3,"0")};return k.replace(T,function(l,y){return y||String(o[l])})},r.as=function(a){return this.$ms/x[I(a)]},r.get=function(a){var k=this.$ms,o=I(a);return o==="milliseconds"?k%=1e3:k=o==="weeks"?H(k/x[o]):this.$d[o],k||0},r.add=function(a,k,o){var l;return l=k?a*x[I(k)]:D(a)?a.$ms:_(a,this).$ms,_(this.$ms+l*(o?-1:1),this)},r.subtract=function(a,k){return this.add(a,k,!0)},r.locale=function(a){var k=this.clone();return k.$l=a,k},r.clone=function(){return _(this.$ms,this)},r.humanize=function(a){return f().add(this.$ms,"ms").locale(this.$l).fromNow(!a)},r.valueOf=function(){return this.asMilliseconds()},r.milliseconds=function(){return this.get("milliseconds")},r.asMilliseconds=function(){return this.as("milliseconds")},r.seconds=function(){return this.get("seconds")},r.asSeconds=function(){return this.as("seconds")},r.minutes=function(){return this.get("minutes")},r.asMinutes=function(){return this.as("minutes")},r.hours=function(){return this.get("hours")},r.asHours=function(){return this.as("hours")},r.days=function(){return this.get("days")},r.asDays=function(){return this.as("days")},r.weeks=function(){return this.get("weeks")},r.asWeeks=function(){return this.as("weeks")},r.months=function(){return this.get("months")},r.asMonths=function(){return this.as("months")},r.years=function(){return this.get("years")},r.asYears=function(){return this.as("years")},d}(),P=function(d,r,a){return d.add(r.years()*a,"y").add(r.months()*a,"M").add(r.days()*a,"d").add(r.hours()*a,"h").add(r.minutes()*a,"m").add(r.seconds()*a,"s").add(r.milliseconds()*a,"ms")};return function(d,r,a){f=a,E=a().$utils(),a.duration=function(l,y){var m=a.locale();return _(l,{$l:m},y)},a.isDuration=D;var k=r.prototype.add,o=r.prototype.subtract;r.prototype.add=function(l,y){return D(l)?P(this,l,1):k.bind(this)(l,y)},r.prototype.subtract=function(l,y){return D(l)?P(this,l,-1):o.bind(this)(l,y)}}})})(es);var ds=es.exports;const ks=as(ds),us=is("",7),cs=["innerHTML"],Es={class:"countdown"},ys=is("",2),ms=JSON.parse('{"title":"Day.js 使用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/library/dayjs.md","filePath":"workflow/library/dayjs.md","lastUpdated":1722593040000}'),gs={name:"workflow/library/dayjs.md"},$s=Object.assign(gs,{setup(w){Z.extend(ks);const z=ss(null),f=ss(Z.duration(0)),E=()=>{const B=Z(),v=Z().endOf("D").diff(B);f.value=Z.duration(v)};return rs(()=>{z.value=setInterval(E,30)}),ls(()=>{clearInterval(z.value)}),(B,j)=>(ps(),hs("div",null,[us,O("div",{class:"countdown",innerHTML:f.value.format("[<span>]HH[</span>] 时 [<span>]mm[</span>] 分 [<span>]ss[</span>] 秒")},null,8,cs),O("p",null,V(f.value.format("D 天 HH 时 mm 分 ss 秒")),1),O("p",null,V(f.value.format("DD : HH : mm : ss")),1),O("p",null,V(f.value.format("HH-mm-ss")),1),O("div",Es,[K(" 使用取值方法： "),O("span",null,V(f.value.hours()),1),K(" 时 "),O("span",null,V(f.value.minutes()),1),K(" 分 "),O("span",null,V(f.value.seconds()),1),K(" 秒 "),O("span",null,V(f.value.milliseconds()),1)]),ys]))}});export{ms as __pageData,$s as default};
