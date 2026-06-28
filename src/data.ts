import { MenuItem, Review, Branch, FAQItem } from './types';

export const allMenuItems: MenuItem[] = [
  // --- GRILLS (مشويات الفحم) ---
  {
    id: 'g1',
    name: 'ميكس جريل فحمة الملكي',
    nameEn: 'Royal Fahma Mixed Grill',
    description: 'تشكيلة فاخرة تجمع بين كباب اللحم البلدي، الكفتة المشوية، والشيش طاووق المتبل بصلصة الزبادي والزعتر مع ريش ضاني وخضار مشوي.',
    descriptionEn: 'The ultimate feast featuring prime charcoal kebab, artisan kofta, shish tawook, and lamb chops over flame-blistered vegetables.',
    price: '420 ج.م',
    priceEn: '$14.00',
    rating: 5.0,
    calories: 1250,
    category: 'grills',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g2',
    name: 'كباب بلدي مخصوص',
    nameEn: 'Prime Charcoal Kebab',
    description: 'قطع اللحم البقري الصافي المتبلة بماء البصل والفلفل الأسود والزعتر البري، تُشوى بعناية على جمر الفحم الهادئ لدرجة ذوبان فائقة.',
    descriptionEn: 'Hand-cut prime beef tenderloin marinated in sweet onion extract and wild thyme, slow-charred over natural embers.',
    price: '340 ج.م',
    priceEn: '$11.50',
    rating: 5.0,
    calories: 820,
    category: 'grills',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g3',
    name: 'كفتة الحاتي المَشوية الملكية',
    nameEn: 'Royal Artisan Charred Kofta',
    description: 'كفتة مصرية على أصولها، مزيج متوازن من اللحم المفروم الطازج والتوابل المخصوصة لتعطي طعم ورائحة الشوي الأصيل.',
    descriptionEn: 'Traditional master-crafted minced beef skewers infused with aromatic spices and fresh parsley, grilled to juicy perfection.',
    price: '260 ج.م',
    priceEn: '$8.50',
    rating: 4.9,
    calories: 740,
    category: 'grills',
    badge: 'الأكثر طلباً 🔥',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g5',
    name: 'ريش ضاني بلدي فاخرة',
    nameEn: 'Prime Charcoal Lamb Chops',
    description: 'أضلاع لحم الضأن البلدي المتبلة بزيت الزيتون وإكليل الجبل والثوم المشوي، تُشوى ببطء فوق جمر فحم البلوط لتعطي مذاقاً مقرمشاً وطرياً.',
    descriptionEn: 'Handpicked local prime lamb cutlets seared over oak embers for incredible crust and tenderness.',
    price: '480 ج.م',
    priceEn: '$16.00',
    rating: 5.0,
    calories: 920,
    category: 'grills',
    badge: "Chef's Pick",
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g6',
    name: 'طرب حاتي مخصوص على الجمر',
    nameEn: 'Royal Charred Tarb Skewers',
    description: 'أصابع الكفتة البلدي الملفوفة بمنديل الضأن الطازج، تُشوى حتى يذوب المنديل ويتغلغل داخل اللحم ليعطي أقوى نكهة شواء شرقية.',
    descriptionEn: 'Masterpiece minced prime beef wrapped in delicate lamb fat caul, slow-grilled over hot charcoal until crispy.',
    price: '290 ج.م',
    priceEn: '$9.50',
    rating: 5.0,
    calories: 980,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g7',
    name: 'فراخ مزارع مشوية على الفحم',
    nameEn: 'Charcoal Grilled Chicken',
    description: 'دجاجة كاملة متبلة بخلطة الطماطم والليمون والزعتر وتوابل فحمة الخاصة، تُشوى على شبكة المنقل الهادئ.',
    descriptionEn: 'Whole daily fresh chicken marinated in sun-dried tomatoes, citrus, and secret Fahma spices, flame roasted over charcoal.',
    price: '240 ج.م',
    priceEn: '$8.00',
    rating: 4.9,
    calories: 950,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g4',
    name: 'شيش طاووق فحم بتتبيلة الزبادي',
    nameEn: 'Yogurt Marinated Shish Tawook',
    description: 'قطع أوراك وصدور الدجاج المتبلة بخلطة الزبادي، الليمون، الثوم المشوي وزيت الزيتون البكر.',
    descriptionEn: 'Tender chicken skewers marinated in Mediterranean yogurt, roasted garlic, and fresh lemon zest.',
    price: '220 ج.م',
    priceEn: '$7.50',
    rating: 4.9,
    calories: 610,
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1200&auto=format&fit=crop'
  },

  // --- ORIENTAL & CASSEROLES (مأكولات شرقية وطواجن) ---
  {
    id: 'or1',
    name: 'حمام محشي بالفريك البلدي والمكسرات',
    nameEn: 'Stuffed Hamam with Freekeh',
    description: 'جوز حمام بلدي محشو بالكامل بالفريك المحمص بالسمن البلدي والكبد والقوانص، يُحمّر حتى القرمشة الذهبية.',
    descriptionEn: 'Twin Egyptian squab stuffed with roasted green wheat, giblets, and ghee, seared to golden perfection.',
    price: '320 ج.م',
    priceEn: '$10.50',
    rating: 5.0,
    calories: 850,
    category: 'oriental',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'or2',
    name: 'طاجن موزير ضاني بالبصل المكرمل',
    nameEn: 'Lamb Shank Onion Casserole',
    description: 'موزة ضاني بلدي مطبوخة ببطء داخل الفرن الفلاحي مع البصل المكرمل والتوابل الشرقية، تُقدم مع أرز بالشعيرية.',
    descriptionEn: 'Slow-braised tender lamb shank with caramelized onions and aromatic spices in a clay pot.',
    price: '380 ج.م',
    priceEn: '$12.50',
    rating: 4.9,
    calories: 920,
    category: 'oriental',
    badge: "Chef's Pick",
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'or3',
    name: 'فتة موزة كلاسيك بالخل والثوم',
    nameEn: 'Classic Egyptian Fatta with Lamb',
    description: 'طبقات الخبز البلدي المحمص بالأرز الأبيض الفلاحي المربوب بالشوربة، ومغطى بصلصة الطماطم بالخل والثوم وقطعة لحم فاخرة.',
    descriptionEn: 'Traditional toasted flatbread layered with rice, garlic-vinegar tomato sauce, and tender braised beef.',
    price: '275 ج.م',
    priceEn: '$9.00',
    rating: 5.0,
    calories: 880,
    category: 'oriental',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop'
  },

  // --- SANDWICHES & BURGERS (سندوتشات وبرجر شرقي) ---
  {
    id: 'sw1',
    name: 'حواوشي الحاتي الفحم المقرمش بالجبنة',
    nameEn: 'Charcoal Smashed Hati Hawawshi',
    description: 'رغيف بلدي مقرمش محشو باللحم المفروم المتبل بالفلفل الحار واللية المخصوصة، ومغطى بجبنة الموتزاريلا الذائبة على الجمر.',
    descriptionEn: 'Crispy artisan Egyptian flatbread stuffed with spiced minced prime beef and melted mozzarella seared directly over hardwood coals.',
    price: '185 ج.م',
    priceEn: '$6.00',
    rating: 5.0,
    calories: 780,
    popular: true,
    category: 'sandwiches',
    badge: 'الأكثر طلباً 🔥',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'sw2',
    name: 'برجر فحمة الشرقي المدخن المزدوج',
    nameEn: 'Oriental Smoky Flame Burger',
    description: 'شريحتان من اللحم البقري المشوي بتوابل الكفتة، حلقات بصل مقرمشة، جبنة شيدر معتقة وصوص فحمة المدخن في خبز محمص.',
    descriptionEn: 'Double smashed oriental flame-grilled patties, crispy onion strings, sharp cheddar, and house smoky BBQ sauce.',
    price: '210 ج.م',
    priceEn: '$7.00',
    rating: 4.8,
    calories: 950,
    category: 'sandwiches',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'sw3',
    name: 'سندوتش كباب وكفتة فحم مخصوص',
    nameEn: 'Kebab & Kofta Artisan Sandwich',
    description: 'أسياخ الكباب والكفتة المشوية طازجة داخل عيش بلدي ساخن مع سلطة الطحينة والبقدونس وبصل السماق.',
    descriptionEn: 'Freshly charred kebab and kofta inside warm Egyptian flatbread with sesame tahini and sumac onions.',
    price: '165 ج.م',
    priceEn: '$5.50',
    rating: 4.9,
    calories: 640,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1626777553634-1c0065be6b14?q=80&w=1200&auto=format&fit=crop'
  },

  // --- STARTERS (المقبلات والسلطات) ---
  {
    id: 'st1',
    name: 'تشكيلة مقبلات وسلطات الحاتي المخصوصة',
    nameEn: 'Hati Meze & Salads Selection',
    description: 'أطباق طحينة بالسمسم، بابا غنوج مدخن، سلطة خضراء بلدي بماء السلطة الحار، ومخلل بلدي معتّق.',
    descriptionEn: 'Assortment of classic tahini, smoky baba ghanoush, spiced Egyptian green salad, and aged pickles.',
    price: '95 ج.م',
    priceEn: '$3.50',
    rating: 4.9,
    calories: 280,
    category: 'starters',
    badge: "Chef's Pick",
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'st2',
    name: 'محشي ورق عنب بدبس الرمان والليمون',
    nameEn: 'Warm Vine Leaves with Pomegranate',
    description: 'أصابع ورق عنب طازجة ملفوفة يدوياً، محشوة بالأرز المتبل بالأعشاب الشرقية ومطبوخة بدبس الرمان وزيت الزيتون.',
    descriptionEn: 'Delicate hand-rolled grape leaves stuffed with herb-infused rice, slow-simmered in tangy pomegranate molasses.',
    price: '110 ج.م',
    priceEn: '$4.00',
    rating: 5.0,
    calories: 320,
    category: 'starters',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'st3',
    name: 'سجق شرقي بدبس الرمان والفلفل الألوان',
    nameEn: 'Sizzling Oriental Sausage (Sogo\')',
    description: 'سجق بلدي مقطع ومشوّح في طاسة حديد مع ثوم، طماطم شيري، فلفل ألوان، ورشة دبس رمان غنية.',
    descriptionEn: 'Sizzling local spiced beef sausage tossed with garlic, cherry tomatoes, bell peppers, and pomegranate reduction.',
    price: '145 ج.م',
    priceEn: '$5.00',
    rating: 5.0,
    calories: 520,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop'
  },

  // --- DESSERTS (الحلويات الشرقية) ---
  {
    id: 'ds1',
    name: 'طاجن أم علي بالقشطة والمكسرات',
    nameEn: 'Om Ali Royal Casserole',
    description: 'رقائق الميلفوي المخبوزة في الحليب الساخن والقشطة البلدي الغنية، مغطاة باللوز والفستق وجوز الهند المحمص.',
    descriptionEn: 'Warm puff pastry baked in rich milk and fresh clotted cream, topped with toasted almonds and pistachios.',
    price: '110 ج.م',
    priceEn: '$3.80',
    rating: 5.0,
    calories: 680,
    category: 'desserts',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'ds2',
    name: 'تشيز كيك البقلاوة والفستق الحلبي',
    nameEn: 'Pistachio Baklava Cheesecake',
    description: 'طبقات من رقائق البقلاوة المقرمشة بالزبدة فوق تشيز كيك كريمي غني بكراميل الفستق الفاخر.',
    descriptionEn: 'Fusion masterpiece combining crispy buttered baklava pastry sheets with velvety New York cheesecake and Sicilian pistachio.',
    price: '140 ج.م',
    priceEn: '$4.80',
    rating: 5.0,
    calories: 740,
    category: 'desserts',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop'
  },

  // --- BEVERAGES (المشروبات المنعشة) ---
  {
    id: 'bv1',
    name: 'عصير ليمون بالنعناع البلدي المثلج',
    nameEn: 'Royal Mint Lemonade',
    description: 'ليمون قطاف حديث مع أوراق النعناع العطري وعسل النحل الطبيعي مخفوق بالثلج المجروش.',
    descriptionEn: 'Freshly squeezed lemons blended with garden mint leaves and organic honey over crushed ice.',
    price: '65 ج.م',
    priceEn: '$2.20',
    rating: 4.9,
    calories: 110,
    category: 'beverages',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'bv2',
    name: 'كركديه أسواني مثلج بعصير الرمان',
    nameEn: 'Iced Aswan Hibiscus & Pomegranate',
    description: 'نقيع الكركديه الأسواني الفاخر المُحلى والمبرد، مضاف إليه قطرات من عصير الرمان الطازج والنعناع.',
    descriptionEn: 'Chilled premium Aswan hibiscus infusion blended with fresh pomegranate juice and mint.',
    price: '55 ج.م',
    priceEn: '$1.90',
    rating: 4.8,
    calories: 90,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop'
  },

  // --- OFFERS & COMBOS (العروض والوجبات ⚡) ---
  {
    id: 'of1',
    name: 'صينية عمالقة المشويات الملكية (تكفي 6 أفراد)',
    nameEn: 'Royal Family Feast Platter (Serves 6)',
    description: 'تشكيلة عائلية أسطورية: 1.5 كجم كباب وكفتة بلدي، شيش طاووق، ريش ضاني، طرب مشوي فوق صينية أرز بسمتي بالمكسرات مع 6 صوصات وسلطات حاتي ولتر ليمون نعناع مجاني.',
    descriptionEn: 'The monumental family feast: 1.5kg prime kebab, kofta, tawook, lamb chops & tarb served over basmati rice with complimentary meze & drinks.',
    price: '1450 ج.م',
    priceEn: '$48.00',
    rating: 5.0,
    calories: 3800,
    prepTime: '35 دقيقة',
    combo: true,
    popular: true,
    category: 'offers',
    badge: 'عروض التوفير ⚡',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'of2',
    name: 'كومبو التوفير المزدوج للمشاركات السريعة',
    nameEn: 'Duo Value Grill Combo',
    description: 'نصف كيلو كباب وكفتة مشوية على الفحم + 2 رغيف حواوشي فحم مقرمش + بطاطس ترافل + لتر مشروب ليمون بالنعناع مجاني.',
    descriptionEn: '500g mixed charcoal grills + 2 flame crispy hawawshi loaves + fries + complimentary 1L royal mint lemonade.',
    price: '540 ج.م',
    priceEn: '$18.00',
    rating: 4.9,
    calories: 1650,
    prepTime: '25 دقيقة',
    combo: true,
    category: 'offers',
    badge: 'الأكثر طلباً 🔥',
    image: 'https://images.unsplash.com/photo-1544025162-811114cd6e36?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'of3',
    name: 'عرض غداء الأصدقاء (كومبو 3 أفراد)',
    nameEn: 'Friends Lunch Deal (Serves 3)',
    description: '3 وجبات ميكس جريل فردي مع أرز بسمتي وخضار سوتيه + 3 شوربة لسان عصفور + 3 سلطة طحينة + 3 مشروب غازي.',
    descriptionEn: '3 individual mixed grill platters with basmati rice, 3 soups, 3 tahini salads, and 3 soft drinks.',
    price: '720 ج.م',
    priceEn: '$24.00',
    rating: 5.0,
    calories: 2200,
    prepTime: '20 دقيقة',
    combo: true,
    category: 'offers',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'أحمد عز الدين',
    nameEn: 'Ahmed Ezzeldin',
    role: 'ناقد طعام ومراجعات مطاعم - القاهرة',
    roleEn: 'Food Critic & Blogger - Cairo',
    content: '"مطعم فحمة رجّع طعم المشويات المصرية الفاخرة على أصولها. الكباب دايب كأنه زبدة، والطرب وتتبيلة الكفتة حاجة في منتهى النظافة والرقي. تجربة تشرّف فعلاً أمام الضيوف."',
    contentEn: '"Fahma Grill brought back the true authentic taste of Egyptian charcoal barbecue. The kebab melts like butter, and the kofta seasoning is pristine."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'سارة المنصوري',
    nameEn: 'Sarah Al-Mansouri',
    role: 'خبيرة تذوق وضيافة فاخرة - دبي',
    roleEn: 'Hospitality Consultant - Dubai',
    content: '"الأجواء الكلاسيكية الهادئة وتصميم المكان والنظافة الفائقة تجعل من فحمة الوجهة رقم 1 للمشويات. صينية عمالقة المشويات وحواوشي الفحم المقرمش اختياري الدائم!"',
    contentEn: '"The refined classic ambiance, spotless presentation, and incredible grilled meats make Fahma my absolute #1 barbecue spot."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'د. محمود رضوان',
    nameEn: 'Dr. Mahmoud Radwan',
    role: 'عميل دائم - الشيخ زايد',
    roleEn: 'Loyal Patron - Sheikh Zayed',
    content: '"ثبات الجودة والخدمة السريعة واحترام العملاء شيء يُحسب لهم. اللحوم بلدي 100% وطعم الفحم الهادئ واضح في كل قطعة. الأسعار منطقية جداً مقابل جودة اللحم فوق الممتازة."',
    contentEn: '"Consistent premium quality and super fast service. The meat is 100% local prime cuts with a clean smoky charcoal flavor in every bite."',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  }
];

export const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    title: 'Royal Mixed Grill Platter',
    titleAr: 'ميكس جريل فحمة الملكي على جمر الفحم',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop',
    title: 'Authentic Charcoal Kebab',
    titleAr: 'أسياخ الكباب البلدي المخصوص على المنقل',
    category: 'kitchen'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    title: 'Main Luxury Dining Hall',
    titleAr: 'قاعة الطعام الرئيسية بالأجواء الكلاسيكية الدافئة',
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop',
    title: 'Master Chef Plattings',
    titleAr: 'التقديم الراقي والنظافة الفائقة في كل طبق',
    category: 'plating'
  },
  {
    url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1200&auto=format&fit=crop',
    title: 'Charcoal Smashed Hawawshi',
    titleAr: 'حواوشي الحاتي الفحم المقرمش بالجبنة المذابة',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop',
    title: 'Family & VIP Lounges',
    titleAr: 'جلسات العائلات وكبار الزوار الهادئة والمريحة',
    category: 'guests'
  }
];

export const branches: Branch[] = [
  {
    id: 'br1',
    name: 'فرع الشيخ زايد (أركان بلازا)',
    nameEn: 'Sheikh Zayed (Arkan Plaza)',
    location: 'ممشى أركان بلازا الفاخر، محور 26 يوليو، الشيخ زايد',
    locationEn: 'Arkan Plaza Promenade, 26th of July Corridor, Sheikh Zayed',
    phone: '+20 100 000 1600',
    hours: '12:00 ظهراً - 02:00 صباحاً',
    hoursEn: '12:00 PM - 02:00 AM',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'br2',
    name: 'فرع التجمع الخامس (واتر واي)',
    nameEn: 'New Cairo (The Waterway)',
    location: 'مجمع ذا واتر واي الفاخر، محور السادات، التجمع الخامس',
    locationEn: 'The Waterway Compound, El-Sadat Axis, New Cairo',
    phone: '+20 100 000 1601',
    hours: '12:00 ظهراً - 03:00 صباحاً',
    hoursEn: '12:00 PM - 03:00 AM',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'br3',
    name: 'فرع الإسكندرية (جليم باي)',
    nameEn: 'Alexandria (Gleem Bay)',
    location: 'ممشى جليم باي السياحي على البحر مباشرة، الإسكندرية',
    locationEn: 'Gleem Bay Waterfront Promenade, Corniche, Alexandria',
    phone: '+20 100 000 1602',
    hours: '01:00 ظهراً - 03:00 صباحاً',
    hoursEn: '01:00 PM - 03:00 AM',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1200&auto=format&fit=crop'
  }
];

export const faqList: FAQItem[] = [
  {
    question: 'كيف يمكنني الطلب السريع عبر الواتساب أو الموقع؟',
    questionEn: 'How can I quickly order via WhatsApp or Website?',
    answer: 'يمكنك اختيار الأطباق أو صواني الكومبو من قسم المنيو والضغط على زر "طلب عبر واتساب" أو إتمام الطلب مباشرة. يصلك تأكيد فوري من أقرب فرع لك مع رابط تتبع السائق.',
    answerEn: 'Simply select your items or combo platters from the Menu and click "Order via WhatsApp". You will receive instant dispatch confirmation and live driver tracking.',
    category: 'ordering'
  },
  {
    question: 'هل اللحوم المستخدمة بلدي وطازجة يومياً؟',
    questionEn: 'Are the meats 100% fresh local cuts daily?',
    answer: 'نعم بكل فخر. جميع اللحوم (كباب، كفتة، ريش، طرب) تُذبح يومياً في مجازرنا المعتمدة تحت إشراف بيطري صارم، ولا نستخدم أي لحوم مجمدة على الإطلاق، مع استخدام فحم نباتي طبيعي 100%.',
    answerEn: 'Yes, with absolute pride. All our cuts are fresh daily local livestock, slaughtered under strict health inspection. We never use frozen meat and grill exclusively over 100% natural hardwood charcoal.',
    category: 'quality'
  },
  {
    question: 'كم يستغرق توصيل الطلبات للمنازل؟',
    questionEn: 'How long does home delivery take?',
    answer: 'في المعتاد يستغرق التوصيل بين 30 إلى 45 دقيقة حسب المنطقة وحالة المرور. صواني المشويات العائلية الكبيرة تُجهّز في عبوات حرارية خاصة تحفظ السخونة والدخان كأنها خرجت للتو من المنقل.',
    answerEn: 'Standard delivery takes 30 to 45 minutes. Large family grill platters are packed in specialized thermal insulation containers to preserve heat and aroma.',
    category: 'delivery'
  },
  {
    question: 'هل توجد عروض وتخفيضات للعائلات والتجمعات؟',
    questionEn: 'Are there family combos and group deals?',
    answer: 'بالتأكيد! قسم "العروض والكومبو الملكية" يوفر صواني عائلية تبدأ من شخصين وتصل حتى 8 أشخاص مع توفير يصل إلى 30%، بالإضافة إلى صوصات وسلطات الحاتي والمشروبات المجانية مع كل صينية.',
    answerEn: 'Absolutely! Our Royal Offers section features family feasts serving 2 to 8 people with up to 30% savings, plus complimentary meze and signature beverages.',
    category: 'offers'
  },
  {
    question: 'هل يمكن حجز طاولة VIP أو عائلية للمناسبات الخاصة؟',
    questionEn: 'Can I reserve a VIP table or family lounge?',
    answer: 'نعم، نوفر جلسات مريحة وVIP بخصوصية تامة وديكور كلاسيك فاخر في فروعنا بالشيخ زايد والتجمع الخامس والإسكندرية. يرجى الحجز المسبق قبل 24 ساعة عبر زر الحجوزات أو الاتصال المباشر.',
    answerEn: 'Yes, we offer private VIP and family lounges across our Sheikh Zayed, New Cairo, and Alexandria branches. Please book at least 24 hours in advance.',
    category: 'reservations'
  }
];
