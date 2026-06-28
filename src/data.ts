import { MenuItem, Review } from './types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'ميكس جريل فاخر',
    description: 'الوليمة الملكية: تشكيلة فاخرة تجمع بين كباب اللحم البلدي، الكفتة المشوية، الشيش طاووق والريش الضاني الطرية مع الخضار المشوي على الفحم الطبيعي.',
    price: '999 جنيه',
    rating: 5.0,
    calories: 1450,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'كباب بلدي مخصوص',
    description: 'قطع اللحم البقري والضاني البلدي الصافي المتبلة بماء البصل، الفلفل الأسود والزعتر البري، تُشوى بعناية على جمر الفحم الهادئ لدرجة ذوبان فائقة.',
    price: '689 جنيه',
    rating: 5.0,
    calories: 820,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2736&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'كفتة الحاتي المشوية',
    description: 'كفتة مصرية على أصولها، مزيج متوازن من اللحم المفروم الطازج ونسبة دهن ضاني غنية، متبلة بخلطتنا السرية لتعطي طعم ورائحة الشوي الأصيل.',
    price: '489 جنيه',
    rating: 4.9,
    calories: 740,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=2653&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'ريش ضاني ملكية',
    description: 'أضلاع اللحم الضاني الصغيرة الفاخرة، متبلة بالخل البلدي والأعشاب الشرقية، تُشوى لدرجة الاستواء المثالية لتحتفظ بنصاعة عصارتها.',
    price: '899 جنيه',
    rating: 5.0,
    calories: 920,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1544025162-811114cd6e36?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'شيش طاووق فاخر',
    description: 'قطع أوراك وصدور الدجاج المزارع المتبلة بخلطة الزبادي، الليمون، الثوم وزيت الزيتون البكر، مشوية على الأسياخ مع الفلفل الألوان.',
    price: '389 جنيه',
    rating: 4.8,
    calories: 580,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2669&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'طرب بلدي بالمنديل',
    description: 'أصابع اللحم المفروم المتبل بعناية، ملفوفة في المنديل الضاني الطازج لتكتسب قرمشة ذهبية من الخارج وطراوة استثنائية من الداخل.',
    price: '579 جنيه',
    rating: 4.9,
    calories: 1050,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=2818&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'ممبار مقرمش بالخلطة',
    description: 'ممبار بلدي متنظف ومحشو بخلطة الأرز بالخضرة والبهارات الشرقية، محمر في السمن البلدي ومقدم مع رشة بقدونس.',
    price: '249 جنيه',
    rating: 4.9,
    calories: 680,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2600&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'حواوشي فحمة الخاص',
    description: 'رغيف خبز بلدي مخبوز خصيصاً، محشو باللحم البقري المفروم مع الفلفل الحار والتوابل، مشوي مباشرة على جمر الفحم الطبيعي.',
    price: '219 جنيه',
    rating: 4.8,
    calories: 780,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=2700&auto=format&fit=crop'
  },
  {
    id: '9',
    name: 'حمام محشي بالفريك',
    description: 'زوج حمام بلدي مزارع محشو بالفريك المحمص بالكبد والقوانص والتوابل، مشوي ليدمج بين القرمشة الخارجية والنكهة الشرقية الدسمة.',
    price: '349 جنيه',
    rating: 4.9,
    calories: 620,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2800&auto=format&fit=crop'
  },
  {
    id: '10',
    name: 'فراخ مشوية على الفحم',
    description: 'دجاجة طازجة كاملة متبلة بماء البصل، الطماطم، الكمون والزعتر، تُشوى ببطء لتكتسب لوناً ذَهبياً ورائحة الشوي الفحمية.',
    price: '399 جنيه',
    rating: 4.8,
    calories: 950,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: '11',
    name: 'كبدة إسكندراني على الصاج',
    description: 'شرائح الكبدة البلدي الطازجة المقلبة سريعاً مع الثوم، الفلفل الأخضر والحار، وعصرة الليمون على الطريقة الإسكندرانية العريقة.',
    price: '279 جنيه',
    rating: 4.8,
    calories: 520,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2800&auto=format&fit=crop'
  }
];

export const sideItems: MenuItem[] = [
  {
    id: 's1',
    name: 'طاجن ملوخية بالطشة',
    description: 'ملوخية خضراء مخروطة طازجة، مطبوخة بمرقة الدجاج الفاخرة ومقدمة مع طشة الثوم والكزبرة بالسمن البلدي الصافي.',
    price: '139 جنيه',
    rating: 5.0,
    calories: 210,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4850?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 's2',
    name: 'محشي ورق عنب مخصوص',
    description: 'أصابع ورق عنب طازجة ملفوفة بإتقان، محشوة بالأرز المتبل ومطبوخة بمرقة اللحم الضاني وشرائح الليمون.',
    price: '169 جنيه',
    rating: 4.9,
    calories: 420,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2600&auto=format&fit=crop'
  },
  {
    id: 's3',
    name: 'بطاطس مقرمشة بالبهارات',
    description: 'أصابع بطاطس ذهبية مقرمشة من الخارج وطرية من الداخل، متبلة بخلطة بهارات الحاتي الشرقية المخصوصة.',
    price: '95 جنيه',
    rating: 4.8,
    calories: 380,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 's4',
    name: 'تشكيلة سلطات الحاتي الفاخرة',
    description: 'مزيج متكامل يضم السلطة الخضراء البلدي، بابا غنوج المدخن على الفحم، وباذنجان مخلل بدقة الثوم.',
    price: '89 جنيه',
    rating: 4.9,
    calories: 140,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 's5',
    name: 'طحينة بيتي بزيت الزيتون',
    description: 'طحينة سمسم صافي مخفوقة بالخل والليمون والكمون ورشة بابريكا، ومقدمة مع قطرات زيت الزيتون البكر.',
    price: '49 جنيه',
    rating: 5.0,
    calories: 240,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'd1',
    name: 'عصير ليمون نعناع ملكي',
    description: 'عصير ليمون طازج مخفوق مع أوراق النعناع البلدي والثلج المجروش لمذاق شديد الانعاش بعد المشويات.',
    price: '85 جنيه',
    rating: 4.9,
    calories: 120,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'مشروبات غازية مثلجة',
    description: 'اختيارك المفضّل من المشروبات الغازية الكلاسيكية المنعشة تُقدم في زجاجة مثلجة مع شريحة ليمون.',
    price: '55 جنيه',
    rating: 4.8,
    calories: 150,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2600&auto=format&fit=crop'
  }
];

export const allMenuItems: MenuItem[] = [...menuItems, ...sideItems];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'أحمد محمود',
    role: 'ذواق طعام معتمد (VIP)',
    content: '"أفضل كباب وكفتة أكلتهم في حياتي! جودة اللحمة بتبان من أول قطمة، وريحة الفحم بتفكرك بأيام زمان الجميلة. المطعم فعلاً مصروف عليه وتجربة التوصيل والحجز خيالية."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'سارة عبد الرحمن',
    role: 'مرشدة تذوق وضيافة',
    content: '"المكان شيك جداً والخدمة فوق الممتازة. الميكس جريل كان رهيب والملوخية طعمها يجنن. الديكور والأجواء تحسسك إنك في مطعم 5 نجوم في باريس أو دبي."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'خالد حسن',
    role: 'عاشق للمشويات الشرقي',
    content: '"الطرب والممبار عندهم حكاية تانية! التتبيلة مظبوطة بالملي واللحمة بتدوب في البق. موقع الويب سلس وسريع جداً في الحجز وطلب الأوردر واتساب في ثواني."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'د. ميار السلحدار',
    role: 'خبيرة تغذية واستشارية',
    content: '"انبهرت بمستوى النظافة وجودة المكونات الطبيعية. الفراخ المشوية والشيش طاووق استواؤهم مثالي وبدون أي دهون زائدة. تجربة تليق فعلاً بمستوى عالمي."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2787&auto=format&fit=crop'
  }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2736&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2835&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=2818&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-811114cd6e36?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2940&auto=format&fit=crop'
];

export const branches = [
  {
    name: 'فرع التجمع الخامس الملكي',
    location: 'شارع التسعين الشمالي، بجوار أركان بلازا، القاهرة الجديدة',
    phone: '01000001600',
    hours: '12:00 ظهراً - 02:00 صباحاً',
    mapUrl: 'https://maps.google.com'
  },
  {
    name: 'فرع الشيخ زايد الفاخر',
    location: 'ممشى أركان بلازا، المحور المركزي، الشيخ زايد، الجيزة',
    phone: '01000001601',
    hours: '12:00 ظهراً - 03:00 صباحاً',
    mapUrl: 'https://maps.google.com'
  },
  {
    name: 'فرع المهندسين وكورنيش النيل',
    location: 'شارع جامعة الدول العربية، أمام نادي الصيد، المهندسين',
    phone: '01000001602',
    hours: '12:00 ظهراً - 02:00 صباحاً',
    mapUrl: 'https://maps.google.com'
  },
  {
    name: 'فرع مصر الجديدة وميدان الكوربة',
    location: 'شارع بغداد، الكوربة، مصر الجديدة، القاهرة',
    phone: '01000001603',
    hours: '12:00 ظهراً - 02:00 صباحاً',
    mapUrl: 'https://maps.google.com'
  }
];
