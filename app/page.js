'use client';
import {useState} from 'react';
const business=[
['01','الصناعة','MANUFACTURING','مصنع اراك للحديد','تصنيع قطاعات وصفائح الصلب المجلفن، واللفائف وقواطع الحوائط الجافة وإكسسوارات الأسقف الفولاذية، إلى جانب مركز خدمة الصلب.','https://araak.net/اراك-مصنع-اراك-للحديد/'],
['02','التجارة','BUILDING MATERIALS','مواد البناء والديكور والعوازل','توريد مواد بناء عالية الجودة للمقاولين وتجار الجملة والتجزئة وأصحاب المشاريع.','https://araak.net/التجارة-الديكور-ومواد-البناء/'],
['03','المقاولات','PROJECTS & CONTRACTING','المشاريع والبناء','تنفيذ وتوريد وحلول تعاقد متخصصة للمشاريع السكنية والتنموية، مدعومة بخبرات المواد وإدارة مواقع العمل.','https://araak.net/'],
['04','اللوجستيات','ARAAK LOGISTICS','اراك لوجستيك','خدمات وحلول لوجستية وسلاسل إمداد تدعم حركة الأعمال والتوريد وتكامل العمليات التشغيلية.','https://www.araaklogistics.com/'],
['05','التجارة الإلكترونية','E-COMMERCE','اراك للتجارة الإلكترونية','منظومة البيع الرقمي في اراك الوطنية عبر اراك ستورز واراك هوم، بخدمات تسوق وتوريد تلائم الأفراد والمشاريع.','#ecommerce']];
const products=[['ألواح الجبس','GYPSUM BOARDS'],['الديكور','DECORATIVE SOLUTIONS'],['أسقف الألياف المعدنية','MINERAL FIBER CEILINGS'],['العزل الحراري','THERMAL INSULATION']];
export default function Home(){const[sent,setSent]=useState(false);async function submit(e){e.preventDefault();const f=new FormData(e.currentTarget);await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(f))});setSent(true);e.currentTarget.reset()}return <main>
<header className="nav"><a className="brand" href="#top"><b>اراك الوطنية</b><span>ARAAK NATIONAL</span></a><nav><a href="#top">الرئيسية</a><a href="#group">المجموعة</a><a href="#business">شركاتنا</a><a href="#products">منتجاتنا</a><a href="#projects">مشاريعنا</a><a href="#ecommerce">التجارة الإلكترونية</a><a href="#contact">الاستثمار والشراكات</a></nav><a className="cta" href="#contact">تواصل معنا ←</a></header>
<section id="top" className="hero approvedHero"><div className="heroImage"/><div className="veil"/><div className="heroCopy"><span>الذراع الوطنية للأعمال والتشغيل</span><h1>اراك الوطنية</h1><h2>صناعة · تجارة · مشاريع</h2><p>منظومة تشغيلية متخصصة في الصناعة والتجارة والمقاولات وتوريد حلول المشاريع، ضمن مجموعة اراك.</p><div><a className="cta" href="#business">اكتشف أعمالنا ←</a></div></div><section className="heroMetrics"><div><b>300+</b><span>موظف وموظفة</span></div><div><b>53</b><span>دولة خبرة ونشاط</span></div><div><b>300 <small>طن/شهر</small></b><span>الطاقة الإنتاجية الحالية</span></div><div><b>40+</b><span>مشروع منجز وقيد التنفيذ</span></div><div><b>100+</b><span>شريك محلي ودولي</span></div><div><b>17%</b><span>نمو أعمال المجموعة</span></div></section></section>
<section className="sectorIntro"><div><span>قطاعاتنا</span><h2>أعمال اراك الوطنية</h2></div><p>قطاعات تشغيلية متكاملة في الصناعة والتجارة والمقاولات وتوريد حلول المشاريع داخل المملكة وخارجها.</p></section>
<section id="business" className="section sectorCards"><header className="sectionHead"><div><span>01 · WHAT WE DO TODAY</span><h2>أعمال اراك اليوم</h2></div><p>قطاعات تشغيل قائمة تخدم السوق عبر التصنيع والتوريد والمقاولات وحلول المشاريع.</p></header><div className="business">{business.map((x,i)=><article key={x[0]}><div className={'visual v'+i}><small>{x[2]}</small></div><div className="copy"><span>{x[0]} · {x[1]}</span><h3>{x[3]}</h3><p>{x[4]}</p><a href={x[5]} target="_blank">الدخول إلى النشاط ↗</a></div></article>)}</div></section>
<section id="projects" className="projectAnchor"></section>
<section id="ecommerce" className="ecommerce section">
  <header className="sectionHead">
    <div><span>02 · E-COMMERCE</span><h2>التجارة الإلكترونية</h2></div>
    <p>واجهتان رقميتان تخدمان احتياجات الأفراد والمشاريع؛ لكل منهما نطاق منتجات وتجربة تسوق متخصصة.</p>
  </header>
  <div className="ecommerceGrid">
    <a className="commerceCard stores" href="https://araakstores.com/" target="_blank" rel="noreferrer">
      <span>ARAAK STORES</span>
      <h3>اراك ستورز</h3>
      <p>متجر إلكتروني للمنزل والتنظيم والتخزين والأدوات والمنتجات اليومية، بتشكيلة واسعة وتجربة تسوق مباشرة.</p>
      <b>زيارة المتجر ↗</b>
    </a>
    <a className="commerceCard home" href="https://araakhome.com/" target="_blank" rel="noreferrer">
      <span>ARAAK HOME</span>
      <h3>اراك هوم</h3>
      <p>متجر متخصص في الكهرباء والإنارة والسباكة والأدوات الصحية والمضخات ومسكات الأبواب واحتياجات المشاريع.</p>
      <b>زيارة المتجر ↗</b>
    </a>
  </div>
</section>
<section id="products" className="products section"><header className="sectionHead"><div><span>02 · PRODUCTS</span><h2>توريد متكامل<br/>لمتطلبات المشاريع.</h2></div><p>حلول مواد البناء والديكور والعوازل التي تعرضها اراك التجارية لعملائها.</p></header><div className="productGrid">{products.map((p,i)=><article key={p[0]}><div className={'art a'+i}><i>0{i+1}</i></div><span>{p[1]}</span><h3>{p[0]}</h3><a href="https://araak.net/" target="_blank">التفاصيل ↗</a></article>)}</div></section>
<section id="factory" className="factory"><div className="factoryArt"><i/><i/></div><div><span>02 · ARAAK STEEL FACTORY</span><h2>صناعةٌ تدخل<br/>في صميم البناء.</h2><p>مصنع اراك للحديد متخصص في تصنيع قطاعات الصلب والصفائح واللفائف وقواطع الحوائط الجافة وإكسسوارات الأسقف الفولاذية، مع مركز لخدمة الصلب.</p><div className="chips"><b>Galvanized Steel</b><b>Drywall Profiles</b><b>Ceiling Accessories</b><b>Steel Service Center</b></div><a href="https://araak.net/اراك-مصنع-اراك-للحديد/" target="_blank">اكتشف المصنع ↗</a></div></section>
<section id="group" className="section group"><header className="sectionHead"><div><span>04 · ARAAK NATIONAL</span><h2>نطاق الأعمال</h2></div><p>تجمع اراك الوطنية الأنشطة التجارية والصناعية والمشاريع تحت كيان تشغيلي واحد، مع بقاء أعمال التنمية والمعرفة ضمن اراك للتنمية كذراع مستقل في مجموعة اراك.</p></header><div className="groupGrid"><a href="https://araak.net/" target="_blank"><b>اراك التجارية</b><span>تجارة · توريد · حلول مواد</span></a><a href="#factory"><b>مصنع اراك للحديد</b><span>تصنيع · قطاعات · مركز خدمة الصلب</span></a><a href="#projects"><b>المشاريع والمقاولات</b><span>تنفيذ · توريد · حلول مشاريع</span></a><a href="https://www.araaklogistics.com/" target="_blank" rel="noreferrer"><b>اراك لوجستيك</b><span>لوجستيات · سلاسل إمداد · دعم تشغيلي</span></a><a href="#ecommerce"><b>التجارة الإلكترونية</b><span>اراك ستورز · اراك هوم</span></a><div><b>اراك الوطنية</b><span>الذراع التشغيلية والتجارية ضمن مجموعة اراك</span></div></div></section>
<section id="footprint" className="footprint"><div><span>05 · FOOTPRINT</span><h2>حضور محلي.<br/>شبكة دولية.</h2><p>تنطلق اراك من جدة، وتمتد شبكة أعمالها وعلاقاتها عبر أسواق وشراكات دولية.</p></div><div className="footprintVisual" role="img" aria-label="خريطة المملكة العربية السعودية ثلاثية الأبعاد، جدة منطلق اراك وشبكة علاقات دولية"></div></section>
<section id="contact" className="contact"><div><span>06 · BUSINESS ENQUIRIES</span><h2>ماذا تحتاج<br/>من اراك؟</h2><p>منتجات وتوريد ومشاريع ومقاولات وشراكات عبر نقطة اتصال موحدة.</p></div><form onSubmit={submit}><input name="name" required placeholder="الاسم / الجهة"/><input name="email" type="email" required placeholder="البريد الإلكتروني"/><select name="interest" defaultValue=""><option value="" disabled>اختر نوع الاحتياج</option><option>منتجات ومواد بناء</option><option>مصنع اراك للحديد</option><option>مقاولات ومشاريع</option><option>شراكة</option></select><textarea name="message" required placeholder="صف احتياجك باختصار"/><button>{sent?'تم استلام طلبك ✓':'إرسال الطلب'}</button></form></section>
<footer><a className="brand" href="#top"><b>اراك الوطنية</b><span>ARAAK NATIONAL</span></a><p>الذراع التجارية والصناعية والمشاريع ضمن مجموعة اراك.</p><div className="footerSisterLinks"><span>بقية أعمال مجموعة اراك</span><a href="https://www.araak.org/home/" target="_blank" rel="noreferrer">اراك للتنمية · المعرفة · التدريب · الاستشارات · الأكاديمية ↗</a></div></footer>
</main>}