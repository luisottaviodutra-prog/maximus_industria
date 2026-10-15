/* Textos do site na ordem pt-BR, en, es, fr e ar. */
(function () {
  'use strict';

  var locales = ['pt-BR', 'en', 'es', 'fr', 'ar'];
  var messages = {
    title: [
      'Maximus Indústria | Fabricação e terceirização de cosméticos',
      'Maximus Indústria | Cosmetics manufacturing and contract production',
      'Maximus Indústria | Fabricación y maquila de cosméticos',
      'Maximus Indústria | Fabrication et sous-traitance de cosmétiques',
      'ماكسيموس إندوستريا | تصنيع مستحضرات التجميل'
    ],
    desc: [
      'Você cria a sua marca. A Maximus cuida da fabricação.',
      'You create your brand. Maximus takes care of the manufacturing.',
      'Tú creas tu marca. Maximus se encarga de la fabricación.',
      'Vous créez votre marque. Maximus s’occupe de la fabrication.',
      'أنت تبتكر علامتك التجارية، وماكسيموس تتولى التصنيع.'
    ],
    schema_desc: [
      'Indústria de fabricação e terceirização de cosméticos.',
      'Cosmetics manufacturing and contract production industry.',
      'Industria de fabricación y maquila de cosméticos.',
      'Industrie de fabrication et de sous-traitance de cosmétiques.',
      'صناعة تصنيع مستحضرات التجميل والتصنيع للغير.'
    ],
    og_title: [
      'Maximus Indústria | Muito além de fabricar cosméticos.',
      'Maximus Indústria | Far beyond manufacturing cosmetics.',
      'Maximus Indústria | Mucho más que fabricar cosméticos.',
      'Maximus Indústria | Bien plus que fabriquer des cosmétiques.',
      'ماكسيموس إندوستريا | أبعد بكثير من تصنيع مستحضرات التجميل.'
    ],
    skip: ['Pular para o conteúdo', 'Skip to content', 'Saltar al contenido', 'Aller au contenu', 'انتقل إلى المحتوى'],
    nav_aria: ['Principal', 'Main', 'Principal', 'Principal', 'القائمة الرئيسية'],
    lang_aria: ['Idioma / Language', 'Language', 'Idioma', 'Langue', 'اللغة'],
    menu_open: ['Abrir menu', 'Open menu', 'Abrir menú', 'Ouvrir le menu', 'افتح القائمة'],
    menu_close: ['Fechar menu', 'Close menu', 'Cerrar menú', 'Fermer le menu', 'أغلق القائمة'],
    nav_home: ['Início', 'Home', 'Inicio', 'Accueil', 'الرئيسية'],
    nav_proc: ['Processos', 'Process', 'Procesos', 'Processus', 'العمليات'],
    nav_port: ['Portfólio', 'Portfolio', 'Portafolio', 'Portfolio', 'مجموعة المنتجات'],
    nav_innov: ['Inovação', 'Innovation', 'Innovación', 'Innovation', 'الابتكار'],
    nav_global: ['Global', 'Global', 'Global', 'International', 'عالميًا'],
    nav_comp: ['Compliance', 'Compliance', 'Cumplimiento', 'Conformité', 'الامتثال'],
    nav_contact: ['Contato', 'Contact', 'Contacto', 'Contact', 'اتصل بنا'],
    hero_h1: [
      'Muito além de fabricar cosméticos.',
      'Far beyond manufacturing cosmetics.',
      'Mucho más que fabricar cosméticos.',
      'Bien plus que fabriquer des cosmétiques.',
      'أبعد بكثير من تصنيع مستحضرات التجميل.'
    ],
    hero_sub: [
      'Você cria a sua marca. A Maximus cuida da fabricação.',
      'You create your brand. Maximus takes care of the manufacturing.',
      'Tú creas tu marca. Maximus se encarga de la fabricación.',
      'Vous créez votre marque. Maximus s’occupe de la fabrication.',
      'أنت تبتكر علامتك التجارية، وماكسيموس تتولى التصنيع.'
    ],
    hero_cta_process: [
      'Conheça Nossos Processos',
      'Explore Our Processes',
      'Conoce nuestros procesos',
      'Découvrez nos processus',
      'اكتشف عملياتنا'
    ],
    hero_cta_contact: [
      'Fale com um Especialista',
      'Talk to a Specialist',
      'Habla con un especialista',
      'Parlez à un spécialiste',
      'تحدث إلى أحد المختصين'
    ],
    proof_aria: [
      'Destaques da operação',
      'Operational highlights',
      'Aspectos destacados de la operación',
      'Points forts de nos opérations',
      'أبرز مميزات العمليات'
    ],
    proof_stages_value: ['8 etapas', '8 stages', '8 etapas', '8 étapes', '8 مراحل'],
    proof_stages_label: [
      'do desenvolvimento à expedição',
      'from development through shipping',
      'desde el desarrollo hasta el envío',
      'du développement à l’expédition',
      'من التطوير إلى الشحن'
    ],
    proof_quality_value: ['Qualidade', 'Quality', 'Calidad', 'Qualité', 'الجودة'],
    proof_quality_label: [
      'acompanhada em todo o processo',
      'monitored throughout the process',
      'supervisada durante todo el proceso',
      'suivie tout au long du processus',
      'تُتابع في جميع مراحل العملية'
    ],
    proof_portfolio_value: [
      'Diversas categorias',
      'Multiple categories',
      'Diversas categorías',
      'Plusieurs catégories',
      'فئات متنوعة'
    ],
    proof_portfolio_label: [
      'de produtos cosméticos',
      'of cosmetic products',
      'de productos cosméticos',
      'de produits cosmétiques',
      'من مستحضرات التجميل'
    ],
    proof_compliance_value: [
      'Conformidade',
      'Compliance',
      'Cumplimiento',
      'Conformité',
      'الامتثال'
    ],
    proof_compliance_label: [
      'licenças e regularizações aplicáveis',
      'applicable licenses and regulatory approvals',
      'licencias y regularizaciones aplicables',
      'autorisations et enregistrements applicables',
      'التراخيص والتصاريح المعمول بها'
    ],
    hero_media_label: [
      'Tecnologia a serviço da beleza',
      'Technology in the service of beauty',
      'Tecnología al servicio de la belleza',
      'La technologie au service de la beauté',
      'التكنولوجيا في خدمة الجمال'
    ],
    mf_label: ['Manifesto', 'Manifesto', 'Manifiesto', 'Manifeste', 'بياننا'],
    mf_intro_a: [
      'Na Maximus Indústria, a gente acredita que fabricar um cosmético é muito mais do que misturar ',
      'At Maximus Indústria, we believe that making cosmetics is about much more than mixing ',
      'En Maximus Indústria, creemos que fabricar cosméticos es mucho más que mezclar ',
      'Chez Maximus Indústria, nous pensons que fabriquer des cosmétiques, c’est bien plus que mélanger ',
      'في ماكسيموس إندوستريا، نؤمن بأن تصنيع مستحضرات التجميل يتجاوز بكثير مجرد مزج '
    ],
    mf_intro_b: [
      ', ',
      ', ',
      ', ',
      ', ',
      '، '
    ],
    mf_intro_c: [
      ' e colocar uma marca na embalagem.',
      ' and putting a brand on the packaging.',
      ' y poner una marca en el envase.',
      ' et apposer une marque sur l’emballage.',
      ' ووضع علامة تجارية على العبوة.'
    ],
    mf_a: [
      'É transformar uma ideia em um produto.',
      'It is about turning an idea into a product.',
      'Es convertir una idea en un producto.',
      'C’est transformer une idée en produit.',
      'إنه تحويل فكرة إلى منتج.'
    ],
    mf_market: [
      'É entender o que o mercado está buscando. É desenvolver. É testar. É corrigir. É melhorar. É controlar cada detalhe do processo para entregar um produto que tenha qualidade, identidade e resultado.',
      'It means understanding what the market is looking for. Developing, testing, adjusting and improving. It means controlling every detail of the process to deliver a product with quality, identity and results.',
      'Es entender lo que busca el mercado. Desarrollar. Probar. Corregir. Mejorar. Controlar cada detalle del proceso para entregar un producto con calidad, identidad y resultados.',
      'C’est comprendre les attentes du marché. Développer, tester, corriger et améliorer. C’est contrôler chaque détail du processus pour fournir un produit de qualité, avec une identité et des résultats.',
      'يعني فهم ما يبحث عنه السوق، والتطوير والاختبار والتصحيح والتحسين، ومراقبة كل تفاصيل العملية لتقديم منتج يتمتع بالجودة والهوية والنتائج.'
    ],
    mf_outsource_a: [
      'E é justamente por isso que temos tanto carinho pelo trabalho de ',
      'That is exactly why we care so deeply about our contract manufacturing work in ',
      'Y precisamente por eso nos apasiona el trabajo de ',
      'C’est précisément pour cela que nous tenons tant à notre activité de ',
      'ولهذا السبب تحديدًا نولي اهتمامًا كبيرًا لعملنا في '
    ],
    mf_outsource_b: [
      ' de cosméticos.',
      ' cosmetics.',
      ' de cosméticos.',
      ' de cosmétiques.',
      ' مستحضرات التجميل.'
    ],
    mf_dream: [
      'Porque, muitas vezes, por trás de uma marca existe um sonho. Uma empresa que está começando. Um profissional que quer lançar sua própria linha. Uma marca que quer crescer. Ou uma empresa que simplesmente precisa de uma indústria preparada para transformar seus projetos em realidade.',
      'Because behind a brand there is often a dream: a new company, a professional launching a product line, a brand ready to grow, or a business looking for an industry equipped to bring its projects to life.',
      'Porque muchas veces detrás de una marca hay un sueño: una empresa que empieza, un profesional que quiere lanzar su propia línea, una marca que quiere crecer o una empresa que necesita una industria preparada para hacer realidad sus proyectos.',
      'Car derrière une marque se cache souvent un rêve : une entreprise qui démarre, un professionnel qui veut lancer sa propre gamme, une marque qui souhaite grandir ou une entreprise qui cherche une industrie capable de concrétiser ses projets.',
      'لأن وراء العلامة التجارية حلمًا في كثير من الأحيان: شركة ناشئة، أو متخصصًا يريد إطلاق خطه الخاص، أو علامة تسعى إلى النمو، أو شركة تحتاج إلى صناعة مستعدة لتحويل مشاريعها إلى واقع.'
    ],
    mf_b: [
      'A Maximus entra nessa história para fazer acontecer.',
      'Maximus joins that story to make it happen.',
      'Maximus se suma a esa historia para hacerla realidad.',
      'Maximus s’inscrit dans cette histoire pour la concrétiser.',
      'تنضم ماكسيموس إلى هذه القصة لتحويلها إلى واقع.'
    ],
    proc_h: [
      'Do desenvolvimento ao produto final',
      'From development to the finished product',
      'Del desarrollo al producto final',
      'Du développement au produit final',
      'من التطوير إلى المنتج النهائي'
    ],
    proc_lede: [
      'Dentro da nossa indústria, cada etapa importa.',
      'In our industry, every step matters.',
      'En nuestra industria, cada etapa importa.',
      'Dans notre industrie, chaque étape compte.',
      'في صناعتنا، لكل مرحلة أهميتها.'
    ],
    media_h: [
      'Nossa estrutura, em cada detalhe',
      'Our capabilities, in every detail',
      'Nuestra estructura, en cada detalle',
      'Notre structure, dans chaque détail',
      'قدراتنا، في كل التفاصيل'
    ],
    media_intro: [
      'Conheça os pilares que transformam cada ideia em um produto de qualidade.',
      'Discover the pillars that turn every idea into a quality product.',
      'Conoce los pilares que transforman cada idea en un producto de calidad.',
      'Découvrez les piliers qui transforment chaque idée en un produit de qualité.',
      'اكتشف الركائز التي تحوّل كل فكرة إلى منتج عالي الجودة.'
    ],
    media_technology: [
      'Tecnologia e estrutura',
      'Technology and infrastructure',
      'Tecnología e infraestructura',
      'Technologie et infrastructures',
      'التكنولوجيا والبنية التحتية'
    ],
    media_formula: [
      'Desenvolvimento e formulação',
      'Product development and formulation',
      'Desarrollo y formulación',
      'Développement et formulation',
      'تطوير التركيبات'
    ],
    media_filling: [
      'Linha de envase',
      'Filling line',
      'Línea de envasado',
      'Ligne de conditionnement',
      'خط التعبئة'
    ],
    media_quality: [
      'Controle de qualidade',
      'Quality control',
      'Control de calidad',
      'Contrôle qualité',
      'مراقبة الجودة'
    ],
    proc_intro_a: [
      'Trabalhamos com processos de ',
      'Our processes include ',
      'Trabajamos con procesos de ',
      'Nos processus comprennent la ',
      'تشمل عملياتنا '
    ],
    proc_sep: [
      ', ',
      ', ',
      ', ',
      ', ',
      '، '
    ],
    proc_intro_b: [
      ', controle de qualidade, ',
      ', quality control, ',
      ', control de calidad, ',
      ', le contrôle qualité, ',
      ' ومراقبة الجودة و'
    ],
    proc_intro_c: [
      ', embalagem e ',
      ', packaging and ',
      ', embalaje y ',
      ', l’emballage et l’',
      ' والتعبئة و'
    ],
    proc_intro_d: [
      ', acompanhando o produto desde a ',
      ', following the product from ',
      ', acompañando el producto desde la ',
      ', en suivant le produit depuis la ',
      '، مع متابعة المنتج من '
    ],
    proc_intro_e: [
      ' até o ',
      ' through to the ',
      ' hasta el ',
      ' jusqu’au ',
      ' حتى '
    ],
    proc_intro_f: [' acabado.', ' stage.', ' terminado.', ' final.', ' النهائي.'],
    stage_weigh: ['Pesagem', 'Weighing', 'Pesaje', 'Pesée', 'الوزن'],
    stage_handle: ['Manipulação', 'Manufacturing', 'Elaboración', 'Fabrication', 'التصنيع'],
    stage_quality: ['Controle de qualidade', 'Quality control', 'Control de calidad', 'Contrôle qualité', 'مراقبة الجودة'],
    stage_fill: ['Envase', 'Filling', 'Envasado', 'Conditionnement', 'التعبئة'],
    stage_label: ['Rotulagem', 'Labeling', 'Etiquetado', 'Étiquetage', 'وضع الملصقات'],
    stage_code: ['Codificação', 'Coding', 'Codificación', 'Codage', 'الترميز'],
    stage_pack: ['Embalagem', 'Packaging', 'Embalaje', 'Emballage', 'التغليف'],
    stage_ship: ['Expedição', 'Shipping', 'Expedición', 'Expédition', 'الشحن'],
    proc_control_a: [
      'O controle começa na ',
      'Quality control starts with ',
      'El control comienza con la ',
      'Le contrôle commence par la ',
      'تبدأ مراقبة الجودة ب'
    ],
    proc_control_b: [' e continua durante todo o processo.', ' and continues throughout the process.', ' y continúa durante todo el proceso.', ' et se poursuit tout au long du processus.', ' وتستمر طوال العملية.'],
    proc_metrics_a: [
      ' e características específicas de cada produto são acompanhados de acordo com os critérios estabelecidos para cada fabricação.',
      ' and product-specific characteristics are monitored according to the criteria established for each production run.',
      ' y las características específicas de cada producto se controlan según los criterios establecidos para cada fabricación.',
      ' et les caractéristiques propres à chaque produit sont contrôlées selon les critères définis pour chaque fabrication.',
      ' والخصائص الخاصة بكل منتج، وفقًا للمعايير المحددة لكل عملية تصنيع.'
    ],
    proc_q: [
      'Porque para nós, qualidade não é uma etapa. Qualidade é a cultura.',
      'Because for us, quality is not a step. Quality is the culture.',
      'Porque para nosotros, la calidad no es una etapa. La calidad es la cultura.',
      'Parce que pour nous, la qualité n’est pas une étape. La qualité est une culture.',
      'لأن الجودة بالنسبة إلينا ليست مرحلة، بل ثقافة.'
    ],
    port_h: [
      'Um portfólio que não para de crescer',
      'A portfolio that keeps growing',
      'Un portafolio que no deja de crecer',
      'Un portfolio qui ne cesse de s’enrichir',
      'مجموعة منتجات تواصل النمو'
    ],
    port_intro: [
      'A Maximus está preparada para fabricar diferentes categorias de cosméticos, incluindo:',
      'Maximus is equipped to manufacture various cosmetic categories, including:',
      'Maximus está preparada para fabricar distintas categorías de cosméticos, entre ellas:',
      'Maximus est équipée pour fabriquer différentes catégories de cosmétiques, notamment :',
      'ماكسيموس مجهزة لتصنيع فئات مختلفة من مستحضرات التجميل، ومنها:'
    ],
    cat_color_desc: [
      ' e tintas para cabelo',
      ' and hair dyes',
      ' y tintes para el cabello',
      ' et les teintures capillaires',
      ' وصبغات الشعر'
    ],
    cat_masks_desc: [' capilares', ' hair masks', ' capilares', ' capillaires', ' للشعر'],
    cat_treatments_desc: [' e reconstruções', ' and reconstructive treatments', ' y reconstrucciones', ' et soins réparateurs', ' وإعادة بناء الشعر'],
    cat_volume_a: ['Produtos de ', 'Products for ', 'Productos para la ', 'Produits de ', 'منتجات '],
    cat_volume_b: [' e tratamentos capilares', ' and hair treatments', ' y tratamientos capilares', ' et soins capillaires', ' وعلاجات الشعر'],
    cat_other: [
      'E diversos outros projetos personalizados.',
      'And many other customized projects.',
      'Y muchos otros proyectos personalizados.',
      'Et bien d’autres projets personnalisés.',
      'والعديد من المشاريع الأخرى المصممة حسب الطلب.'
    ],
    port_q: [
      'Mas não queremos simplesmente fabricar aquilo que já existe. Queremos ajudar a criar aquilo que ainda pode existir.',
      'But we don’t want to simply make what already exists. We want to help create what can still exist.',
      'Pero no queremos fabricar simplemente lo que ya existe. Queremos ayudar a crear lo que aún puede existir.',
      'Mais nous ne voulons pas simplement fabriquer ce qui existe déjà. Nous voulons contribuer à créer ce qui reste à inventer.',
      'لكننا لا نريد الاكتفاء بتصنيع ما هو موجود، بل نريد المساعدة في ابتكار ما يمكن أن يوجد.'
    ],
    inov_h: [
      'Inovação faz parte do nosso DNA',
      'Innovation is part of our DNA',
      'La innovación es parte de nuestro ADN',
      'L’innovation fait partie de notre ADN',
      'الابتكار جزء من هويتنا'
    ],
    inov_lede_a: [
      'A Maximus está constantemente buscando novas tecnologias, ',
      'Maximus is constantly exploring new technologies, ',
      'Maximus busca constantemente nuevas tecnologías, ',
      'Maximus recherche constamment de nouvelles technologies, ',
      'تبحث ماكسيموس باستمرار عن تقنيات جديدة و'
    ],
    inov_lede_b: [
      ', conceitos e tendências para transformar oportunidades em produtos.',
      ', concepts and trends to turn opportunities into products.',
      ', conceptos y tendencias para transformar oportunidades en productos.',
      ', concepts et tendances pour transformer les opportunités en produits.',
      ' ومفاهيم واتجاهات لتحويل الفرص إلى منتجات.'
    ],
    inov_market: [
      'Estamos sempre olhando para o mercado brasileiro e também para o que está acontecendo lá fora. Pesquisamos. Desenvolvemos. Testamos. Aprendemos.',
      'We keep an eye on the Brazilian market and on what is happening around the world. We research, develop, test and learn.',
      'Observamos el mercado brasileño y lo que ocurre en el exterior. Investigamos. Desarrollamos. Probamos. Aprendemos.',
      'Nous suivons le marché brésilien et les évolutions à l’international. Nous recherchons, développons, testons et apprenons.',
      'نتابع السوق البرازيلي وما يحدث حول العالم. نبحث ونطور ونختبر ونتعلم.'
    ],
    inov_global: [
      'Buscamos novidades no exterior para trazer conhecimento e possibilidades para o Brasil, ao mesmo tempo em que levamos produtos e a capacidade da indústria brasileira para novos mercados.',
      'We look for ideas abroad to bring knowledge and opportunities to Brazil, while taking Brazilian products and industrial expertise to new markets.',
      'Buscamos novedades en el exterior para traer conocimiento y oportunidades a Brasil, mientras llevamos productos y capacidades de la industria brasileña a nuevos mercados.',
      'Nous cherchons des nouveautés à l’étranger pour apporter savoir-faire et possibilités au Brésil, tout en faisant découvrir les produits et le savoir-faire industriel brésilien à de nouveaux marchés.',
      'نبحث عن المستجدات في الخارج لنقل المعرفة والفرص إلى البرازيل، ونقدم في الوقت نفسه منتجات الصناعة البرازيلية وخبراتها إلى أسواق جديدة.'
    ],
    inov_future: [
      'Porque acreditamos que uma indústria precisa estar em movimento. O mercado muda. O consumidor muda. A tecnologia muda. E a Maximus também evolui.',
      'We believe an industry must keep moving. Markets change. Consumers change. Technology changes. And Maximus evolves too.',
      'Creemos que una industria debe mantenerse en movimiento. El mercado cambia. El consumidor cambia. La tecnología cambia. Y Maximus también evoluciona.',
      'Nous pensons qu’une industrie doit rester en mouvement. Le marché change, le consommateur change, la technologie change. Maximus évolue aussi.',
      'نؤمن بأن الصناعة يجب أن تظل في حركة. يتغير السوق والمستهلك والتقنية، وماكسيموس تتطور أيضًا.'
    ],
    glob_h: [
      'Uma indústria com visão de mundo',
      'An industry with a global vision',
      'Una industria con visión global',
      'Une industrie ouverte sur le monde',
      'صناعة برؤية عالمية'
    ],
    glob_lede: ['Nossa atuação não termina no Brasil.', 'Our work does not stop at Brazil’s borders.', 'Nuestra actividad no termina en Brasil.', 'Notre activité ne s’arrête pas aux frontières du Brésil.', 'لا يقتصر عملنا على البرازيل.'],
    glob_a: [
      'Estamos trabalhando para ampliar cada vez mais nossa presença internacional, buscando novos parceiros, novos mercados e novas oportunidades de ',
      'We are working to expand our international presence by seeking new partners, markets and opportunities for ',
      'Trabajamos para ampliar nuestra presencia internacional y encontrar nuevos socios, mercados y oportunidades de ',
      'Nous travaillons à développer notre présence internationale en recherchant de nouveaux partenaires, marchés et opportunités d’',
      'نعمل على توسيع حضورنا الدولي باستمرار، والبحث عن شركاء وأسواق وفرص جديدة ل'
    ],
    glob_b: ['.', '.', '.', '.', '.'],
    glob_m: [
      'Do Brasil para o mundo. E do mundo para o Brasil.',
      'From Brazil to the world. And from the world to Brazil.',
      'De Brasil para el mundo. Y del mundo para Brasil.',
      'Du Brésil vers le monde. Et du monde vers le Brésil.',
      'من البرازيل إلى العالم، ومن العالم إلى البرازيل.'
    ],
    glob_future: [
      'Essa troca de conhecimento, tecnologia e oportunidades faz parte do futuro que estamos construindo.',
      'This exchange of knowledge, technology and opportunities is part of the future we are building.',
      'Este intercambio de conocimientos, tecnología y oportunidades forma parte del futuro que estamos construyendo.',
      'Cet échange de connaissances, de technologies et d’opportunités fait partie de l’avenir que nous construisons.',
      'يشكل تبادل المعرفة والتقنية والفرص جزءًا من المستقبل الذي نبنيه.'
    ],
    comp_h: [
      'Estrutura, responsabilidade e regularidade',
      'Infrastructure, responsibility and compliance',
      'Estructura, responsabilidad y cumplimiento',
      'Structure, responsabilité et conformité',
      'البنية والمسؤولية والامتثال'
    ],
    comp_intro: [
      'Nossa operação conta com licenças, autorizações e regularizações junto aos órgãos competentes, incluindo:',
      'Our operations hold licenses, permits and registrations with the relevant authorities, including:',
      'Nuestra operación cuenta con licencias, autorizaciones y registros ante las autoridades competentes, entre ellas:',
      'Notre activité dispose de licences, d’autorisations et d’enregistrements auprès des autorités compétentes, notamment :',
      'تملك عملياتنا التراخيص والتصاريح والتسجيلات لدى الجهات المختصة، ومنها:'
    ],
    comp_outro: [
      'Essa estrutura representa o compromisso da Maximus com uma operação responsável, segura e alinhada às exigências aplicáveis à atividade industrial.',
      'This framework reflects Maximus’s commitment to responsible, safe operations that meet the requirements applicable to industrial activity.',
      'Esta estructura refleja el compromiso de Maximus con una operación responsable y segura, conforme a los requisitos aplicables a la actividad industrial.',
      'Cette structure témoigne de l’engagement de Maximus en faveur d’une activité responsable, sûre et conforme aux exigences applicables à l’industrie.',
      'تعكس هذه البنية التزام ماكسيموس بعمليات مسؤولة وآمنة ومتوافقة مع المتطلبات المطبقة على النشاط الصناعي.'
    ],
    par_h: [
      'Para quem quer mais do que uma fábrica',
      'For those who want more than a factory',
      'Para quienes quieren más que una fábrica',
      'Pour ceux qui veulent plus qu’une usine',
      'لمن يريد أكثر من مجرد مصنع'
    ],
    par_lede: [
      'Quando uma empresa escolhe a Maximus, ela não está procurando apenas alguém para colocar um produto dentro de uma embalagem. Ela está procurando parceria.',
      'When a company chooses Maximus, it is looking for more than someone to put a product in a package. It is looking for a partner.',
      'Cuando una empresa elige a Maximus, no busca solo quién ponga un producto en un envase. Busca un socio.',
      'Lorsqu’une entreprise choisit Maximus, elle ne cherche pas seulement quelqu’un pour mettre un produit en emballage. Elle cherche un partenaire.',
      'عندما تختار شركة ماكسيموس، فهي لا تبحث فقط عمن يضع المنتج في عبوة، بل تبحث عن شريك.'
    ],
    par_a: [
      'Alguém que possa ajudar a transformar uma ideia em ',
      'A partner who can help turn an idea into a ',
      'Alguien que pueda ayudar a convertir una idea en ',
      'Quelqu’un qui puisse aider à transformer une idée en ',
      'شريك يساعد على تحويل الفكرة إلى '
    ],
    par_b: [
      ', uma fórmula em produto, um produto em marca e uma marca em negócio.',
      ', a formula into a product, a product into a brand, and a brand into a business.',
      ', una fórmula en producto, un producto en marca y una marca en negocio.',
      ', une formule en produit, un produit en marque et une marque en entreprise.',
      '، والصيغة إلى منتج، والمنتج إلى علامة تجارية، والعلامة إلى مشروع.'
    ],
    par_close: [
      'É por isso que cuidamos de cada projeto com atenção. Porque o seu produto leva o seu nome. Mas antes de chegar às mãos do consumidor, ele passa pelas nossas.',
      'That is why we give every project our full attention. Your product carries your name, but before it reaches consumers, it passes through our hands.',
      'Por eso cuidamos cada proyecto con atención. Porque tu producto lleva tu nombre, pero antes de llegar al consumidor, pasa por nuestras manos.',
      'C’est pourquoi nous accordons tant d’attention à chaque projet. Votre produit porte votre nom, mais avant d’arriver au consommateur, il passe entre nos mains.',
      'لذلك نولي كل مشروع عناية خاصة. يحمل منتجك اسمك، لكنه يمر بأيدينا قبل أن يصل إلى المستهلك.'
    ],
    f_1: [
      'Do desenvolvimento à fabricação. Da ideia ao produto. Do Brasil para o mundo.',
      'From development to manufacturing. From idea to product. From Brazil to the world.',
      'Del desarrollo a la fabricación. De la idea al producto. De Brasil para el mundo.',
      'Du développement à la fabrication. De l’idée au produit. Du Brésil vers le monde.',
      'من التطوير إلى التصنيع، ومن الفكرة إلى المنتج، ومن البرازيل إلى العالم.'
    ],
    f_3: [
      'Inovação para hoje. Estrutura para crescer. Visão para o futuro.',
      'Innovation for today. Infrastructure to grow. Vision for the future.',
      'Innovación para hoy. Estructura para crecer. Visión para el futuro.',
      'L’innovation pour aujourd’hui. La structure pour grandir. La vision pour l’avenir.',
      'ابتكار لليوم، وبنية للنمو، ورؤية للمستقبل.'
    ],
    f_brand: [
      'MAXIMUS INDÚSTRIA — fabricação de cosméticos.',
      'MAXIMUS INDÚSTRIA — cosmetics manufacturing.',
      'MAXIMUS INDÚSTRIA — fabricación de cosméticos.',
      'MAXIMUS INDÚSTRIA — fabrication de cosmétiques.',
      'MAXIMUS INDÚSTRIA — تصنيع مستحضرات التجميل.'
    ],
    f_social: ['Redes sociais', 'Social media', 'Redes sociales', 'Réseaux sociaux', 'وسائل التواصل الاجتماعي'],
    phone: ['+55 (19) 99758-1227', '+55 (19) 99758-1227', '+55 (19) 99758-1227', '+55 (19) 99758-1227', '+55 (19) 99758-1227'],
    location: ['São Paulo | SP', 'São Paulo | SP', 'São Paulo | SP', 'São Paulo | SP', 'São Paulo | SP'],
    copyright: [
      '© 2026 Maximus Indústria. Todos os direitos reservados.',
      '© 2026 Maximus Indústria. All rights reserved.',
      '© 2026 Maximus Indústria. Todos los derechos reservados.',
      '© 2026 Maximus Indústria. Tous droits réservés.',
      '© 2026 Maximus Indústria. جميع الحقوق محفوظة.'
    ],
    term_raw: ['Matéria-prima', 'Raw material', 'Materia prima', 'Matière première', 'مواد خام'],
    tip_raw: [
      'Insumos usados na fabricação, como ativos, surfactantes, óleos e fragrâncias.',
      'Ingredients used in manufacturing, such as active ingredients, surfactants, oils and fragrances.',
      'Insumos utilizados en la fabricación, como activos, tensioactivos, aceites y fragancias.',
      'Ingrédients utilisés en fabrication, comme les actifs, tensioactifs, huiles et parfums.',
      'مكونات مستخدمة في التصنيع، مثل المواد الفعالة والمواد الخافضة للتوتر السطحي والزيوت والعطور.'
    ],
    term_fill: ['Envase', 'Filling', 'Envasado', 'Conditionnement', 'التعبئة'],
    tip_fill: [
      'Enchimento das embalagens com o produto pronto.',
      'Filling containers with the finished product.',
      'Llenado de los envases con el producto terminado.',
      'Remplissage des emballages avec le produit fini.',
      'ملء العبوات بالمنتج النهائي.'
    ],
    term_contract: ['Terceirização', 'Contract manufacturing', 'Fabricación por contrato', 'Sous-traitance', 'التصنيع للغير'],
    tip_contract: [
      'Quando uma marca contrata uma indústria para fabricar seus produtos, sem precisar de fábrica própria.',
      'When a brand hires a manufacturer to make its products without owning a factory.',
      'Cuando una marca contrata a una industria para fabricar sus productos sin tener una fábrica propia.',
      'Lorsqu’une marque confie la fabrication de ses produits à une industrie, sans posséder sa propre usine.',
      'عندما تتعاقد علامة تجارية مع مصنع لإنتاج منتجاتها دون امتلاك مصنع خاص بها.'
    ],
    term_weigh: ['Pesagem', 'Weighing', 'Pesaje', 'Pesée', 'الوزن'],
    tip_weigh: [
      'Etapa em que cada matéria-prima é medida com precisão, conforme a fórmula.',
      'The stage where each ingredient is measured precisely according to the formula.',
      'Etapa en la que cada materia prima se mide con precisión según la fórmula.',
      'Étape où chaque matière première est mesurée avec précision selon la formule.',
      'مرحلة قياس كل مادة خام بدقة وفقًا للتركيبة.'
    ],
    term_handle: ['Manipulação', 'Batch processing', 'Elaboración', 'Fabrication', 'التحضير'],
    tip_handle: [
      'Etapa em que as matérias-primas são combinadas e processadas para formar o produto.',
      'The stage where ingredients are combined and processed to make the product.',
      'Etapa en la que se combinan y procesan las materias primas para obtener el producto.',
      'Étape où les matières premières sont mélangées et transformées pour obtenir le produit.',
      'مرحلة مزج المواد الخام ومعالجتها لتكوين المنتج.'
    ],
    term_labeling: ['Rotulagem', 'Labeling', 'Etiquetado', 'Étiquetage', 'وضع الملصقات'],
    tip_labeling: [
      'Aplicação do rótulo, com nome, informações obrigatórias e identidade da marca.',
      'Applying the label with the product name, required information and brand identity.',
      'Aplicación de la etiqueta con el nombre, la información obligatoria y la identidad de la marca.',
      'Apposition de l’étiquette avec le nom, les informations obligatoires et l’identité de la marque.',
      'وضع الملصق الذي يتضمن الاسم والمعلومات الإلزامية وهوية العلامة التجارية.'
    ],
    term_coding: ['Codificação', 'Coding', 'Codificación', 'Codage', 'الترميز'],
    tip_coding: [
      'Impressão de dados como lote e validade na embalagem, garantindo rastreabilidade.',
      'Printing details such as batch number and expiry date on the package for traceability.',
      'Impresión de datos como lote y vencimiento en el envase para garantizar la trazabilidad.',
      'Impression de données comme le numéro de lot et la date de péremption pour assurer la traçabilité.',
      'طباعة بيانات مثل رقم التشغيلة وتاريخ الصلاحية على العبوة لضمان إمكانية التتبع.'
    ],
    term_shipping: ['Expedição', 'Shipping', 'Expedición', 'Expédition', 'الشحن'],
    tip_shipping: [
      'Separação, conferência e envio dos produtos prontos ao cliente.',
      'Picking, checking and shipping finished products to the customer.',
      'Preparación, revisión y envío de los productos terminados al cliente.',
      'Préparation, vérification et envoi des produits finis au client.',
      'فرز المنتجات النهائية والتحقق منها وإرسالها إلى العميل.'
    ],
    term_batch: ['Lote', 'Batch', 'Lote', 'Lot', 'التشغيلة'],
    tip_batch: [
      'Quantidade de produto fabricada de uma só vez, com identificação própria para rastreio.',
      'A quantity of product made in one production run and given its own traceable identifier.',
      'Cantidad de producto fabricada en una misma producción, con identificación propia para su seguimiento.',
      'Quantité de produit fabriquée au cours d’une même production et identifiée pour assurer sa traçabilité.',
      'كمية من المنتج تُصنع في عملية إنتاج واحدة وتحمل رقمًا خاصًا لتتبعها.'
    ],
    term_formula: ['Formulação', 'Formulation', 'Formulación', 'Formulation', 'تركيبة المنتج'],
    tip_formula: [
      'Criação e ajuste da fórmula do produto, definindo ingredientes e proporções.',
      'Creating and adjusting a product formula by defining ingredients and proportions.',
      'Creación y ajuste de la fórmula del producto, definiendo ingredientes y proporciones.',
      'Création et ajustement de la formule du produit, en définissant les ingrédients et leurs proportions.',
      'إنشاء تركيبة المنتج وضبطها من خلال تحديد المكونات ونسبها.'
    ],
    term_ph: ['pH', 'pH', 'pH', 'pH', 'الرقم الهيدروجيني'],
    tip_ph: [
      'Medida de acidez ou alcalinidade, numa escala de 0 a 14. Em cosméticos, o pH adequado ajuda a proteger fio e couro cabeludo e a fórmula a funcionar como deveria.',
      'A measure of acidity or alkalinity on a scale from 0 to 14. In cosmetics, the right pH helps protect hair and scalp and ensures the formula works as intended.',
      'Medida de acidez o alcalinidad en una escala de 0 a 14. En cosmética, un pH adecuado ayuda a proteger el cabello y el cuero cabelludo y a que la fórmula funcione correctamente.',
      'Mesure de l’acidité ou de l’alcalinité sur une échelle de 0 à 14. En cosmétique, un pH adapté aide à protéger les cheveux et le cuir chevelu et à assurer le bon fonctionnement de la formule.',
      'مقياس للحموضة أو القلوية من 0 إلى 14. يساعد الرقم الهيدروجيني المناسب في مستحضرات التجميل على حماية الشعر وفروة الرأس وضمان فعالية التركيبة.'
    ],
    term_viscosity: ['Viscosidade', 'Viscosity', 'Viscosidad', 'Viscosité', 'اللزوجة'],
    tip_viscosity: [
      'Grau de espessura do produto: o quanto ele escorre ou fica firme. Define a textura e a facilidade de aplicação.',
      'How thick or fluid a product is. It determines the texture and ease of application.',
      'Grado de espesor del producto: cuánto fluye o qué consistencia tiene. Define la textura y la facilidad de aplicación.',
      'Degré d’épaisseur du produit, c’est-à-dire sa fluidité ou sa tenue. Il détermine la texture et la facilité d’application.',
      'مدى كثافة المنتج أو سيولته، وهو ما يحدد قوامه وسهولة استخدامه.'
    ],
    term_appearance: ['Aparência', 'Appearance', 'Apariencia', 'Aspect', 'المظهر'],
    tip_appearance: [
      'Avaliação visual do produto: cor, brilho, transparência e homogeneidade.',
      'Visual assessment of the product’s color, shine, transparency and uniformity.',
      'Evaluación visual del producto: color, brillo, transparencia y homogeneidad.',
      'Évaluation visuelle du produit : couleur, brillance, transparence et homogénéité.',
      'تقييم بصري للمنتج يشمل اللون واللمعان والشفافية والتجانس.'
    ],
    term_odor: ['Odor', 'Odor', 'Olor', 'Odeur', 'الرائحة'],
    tip_odor: [
      'Análise do cheiro do produto, comparado ao padrão aprovado, para garantir consistência entre os lotes.',
      'The product’s scent is compared with the approved standard to ensure consistency between batches.',
      'Análisis del aroma del producto frente al estándar aprobado para garantizar la consistencia entre lotes.',
      'Comparaison de l’odeur du produit avec le standard approuvé afin de garantir la constance entre les lots.',
      'تُقارن رائحة المنتج بالرائحة المعتمدة لضمان الاتساق بين التشغيلات.'
    ],
    term_density: ['Densidade', 'Density', 'Densidad', 'Densité', 'الكثافة'],
    tip_density: [
      'Relação entre o peso e o volume do produto. Ajuda a confirmar que cada lote está igual à fórmula aprovada.',
      'The relationship between a product’s mass and volume. It helps confirm each batch matches the approved formula.',
      'Relación entre el peso y el volumen del producto. Ayuda a confirmar que cada lote coincide con la fórmula aprobada.',
      'Rapport entre la masse et le volume du produit. Il permet de vérifier que chaque lot correspond à la formule approuvée.',
      'العلاقة بين كتلة المنتج وحجمه، وتساعد على التأكد من مطابقة كل تشغيلة للتركيبة المعتمدة.'
    ],
    term_color: ['Colorações', 'Hair color', 'Coloraciones', 'Colorations', 'صبغات الشعر'],
    tip_color: [
      'Produtos que mudam ou realçam a cor dos cabelos.',
      'Products that change or enhance hair color.',
      'Productos que cambian o realzan el color del cabello.',
      'Produits qui modifient ou rehaussent la couleur des cheveux.',
      'منتجات تغير لون الشعر أو تعززه.'
    ],
    term_bleach: ['Pós descolorantes', 'Bleaching powders', 'Polvos decolorantes', 'Poudres décolorantes', 'مساحيق تفتيح الشعر'],
    tip_bleach: [
      'Produtos usados para clarear os fios, removendo parte do pigmento.',
      'Products used to lighten hair by removing some of its pigment.',
      'Productos que aclaran el cabello al eliminar parte de su pigmento.',
      'Produits utilisés pour éclaircir les cheveux en éliminant une partie de leurs pigments.',
      'منتجات تُستخدم لتفتيح الشعر عبر إزالة جزء من صبغته.'
    ],
    term_toner: ['Matizadores', 'Toners', 'Matizadores', 'Patines capillaires', 'مصححات لون الشعر'],
    tip_toner: [
      'Neutralizam tons indesejados, como o amarelado, em cabelos loiros, grisalhos ou descoloridos.',
      'They neutralize unwanted tones, such as brassiness, in blonde, gray or bleached hair.',
      'Neutralizan tonos no deseados, como el amarillento, en cabellos rubios, grises o decolorados.',
      'Ils neutralisent les reflets indésirables, comme le jaunissement, sur les cheveux blonds, gris ou décolorés.',
      'تعادل الدرجات غير المرغوبة، مثل الاصفرار، في الشعر الأشقر أو الرمادي أو المفتّح.'
    ],
    term_shampoo: ['Shampoos', 'Shampoos', 'Champús', 'Shampooings', 'شامبو'],
    tip_shampoo: [
      'Produtos de limpeza do cabelo e do couro cabeludo, formulados com surfactantes.',
      'Hair and scalp cleansers formulated with surfactants.',
      'Productos para limpiar el cabello y el cuero cabelludo, formulados con tensioactivos.',
      'Produits nettoyants pour les cheveux et le cuir chevelu, formulés avec des tensioactifs.',
      'منتجات لتنظيف الشعر وفروة الرأس، تحتوي على مواد خافضة للتوتر السطحي.'
    ],
    term_mask: ['Máscaras', 'Hair masks', 'Mascarillas', 'Masques capillaires', 'أقنعة الشعر'],
    tip_mask: [
      'Tratamentos de textura mais densa que hidratam, nutrem ou reconstroem os fios.',
      'Thicker treatments that hydrate, nourish or help repair the hair.',
      'Tratamientos de textura densa que hidratan, nutren o ayudan a reparar el cabello.',
      'Soins à la texture épaisse qui hydratent, nourrissent ou aident à réparer les cheveux.',
      'علاجات كثيفة القوام ترطب الشعر أو تغذيه أو تساعد على إصلاحه.'
    ],
    term_conditioner: ['Condicionadores', 'Conditioners', 'Acondicionadores', 'Après-shampooings', 'بلسم الشعر'],
    tip_conditioner: [
      'Usados após o shampoo para facilitar o desembaraço e dar maciez.',
      'Used after shampoo to make detangling easier and soften the hair.',
      'Se usan después del champú para facilitar el desenredo y suavizar el cabello.',
      'Utilisés après le shampooing pour faciliter le démêlage et assouplir les cheveux.',
      'تُستخدم بعد الشامبو لتسهيل فك التشابك وتنعيم الشعر.'
    ],
    term_curl: ['Ativadores de cachos', 'Curl activators', 'Activadores de rizos', 'Activateurs de boucles', 'محددات التجعيد'],
    tip_curl: [
      'Definem e realçam a forma dos cachos, controlando o frizz.',
      'They define and enhance curls while controlling frizz.',
      'Definen y realzan los rizos y ayudan a controlar el encrespamiento.',
      'Ils définissent et mettent en valeur les boucles tout en maîtrisant les frisottis.',
      'تحدد شكل التجعيدات وتعززه مع الحد من الهيشان.'
    ],
    term_treatment: ['Tratamentos', 'Treatments', 'Tratamientos', 'Soins', 'علاجات الشعر'],
    tip_treatment: [
      'Linhas com ação específica, como hidratação, nutrição ou reconstrução.',
      'Product lines designed for specific needs, such as hydration, nourishment or repair.',
      'Líneas con una acción específica, como hidratación, nutrición o reparación.',
      'Gammes conçues pour un besoin précis, comme l’hydratation, la nutrition ou la réparation.',
      'مجموعات مصممة لأهداف محددة مثل الترطيب أو التغذية أو الإصلاح.'
    ],
    term_finish: ['Finalizadores', 'Styling products', 'Productos de acabado', 'Produits coiffants', 'منتجات التصفيف'],
    tip_finish: [
      'Aplicados no fim da rotina para modelar, proteger e dar acabamento ao penteado.',
      'Applied at the end of a routine to style, protect and finish the hair.',
      'Se aplican al final de la rutina para moldear, proteger y dar el acabado al peinado.',
      'Appliqués en fin de routine pour coiffer, protéger et parfaire la coiffure.',
      'تُستخدم في نهاية روتين العناية لتصفيف الشعر وحمايته وإكمال مظهره.'
    ],
    term_volume: ['Redução de volume', 'Volume reduction', 'Reducción de volumen', 'Réduction du volume', 'تقليل حجم الشعر'],
    tip_volume: [
      'Produtos que ajudam a diminuir o volume e controlar o frizz.',
      'Products that help reduce volume and control frizz.',
      'Productos que ayudan a reducir el volumen y controlar el encrespamiento.',
      'Produits qui aident à réduire le volume et à maîtriser les frisottis.',
      'منتجات تساعد على تقليل حجم الشعر والحد من الهيشان.'
    ],
    term_export: ['Exportação', 'Export', 'Exportación', 'Exportation', 'التصدير'],
    tip_export: [
      'Venda e envio de produtos para outros países.',
      'The sale and shipment of products to other countries.',
      'Venta y envío de productos a otros países.',
      'Vente et expédition de produits vers d’autres pays.',
      'بيع المنتجات وشحنها إلى دول أخرى.'
    ],
    term_ibama: ['IBAMA', 'IBAMA', 'IBAMA', 'IBAMA', 'IBAMA'],
    tip_ibama: [
      'Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis: fiscaliza a atuação ambiental.',
      'Brazilian Institute of the Environment and Renewable Natural Resources: oversees environmental activities.',
      'Instituto Brasileño del Medio Ambiente y de los Recursos Naturales Renovables: supervisa la actividad ambiental.',
      'Institut brésilien de l’environnement et des ressources naturelles renouvelables : contrôle les activités environnementales.',
      'المعهد البرازيلي للبيئة والموارد الطبيعية المتجددة: يشرف على الأنشطة البيئية.'
    ],
    term_civil_police: ['Polícia Civil', 'Civil Police', 'Policía Civil', 'Police civile', 'الشرطة المدنية'],
    tip_civil_police: [
      'Participa da fiscalização de produtos químicos controlados no âmbito estadual, conforme a legislação.',
      'Oversees controlled chemicals at the state level, in accordance with the law.',
      'Supervisa los productos químicos controlados a nivel estatal, conforme a la legislación.',
      'Contrôle les produits chimiques réglementés au niveau de l’État, conformément à la loi.',
      'تشرف على المواد الكيميائية الخاضعة للرقابة على مستوى الولاية وفقًا للقانون.'
    ],
    term_federal_police: ['Polícia Federal', 'Federal Police', 'Policía Federal', 'Police fédérale', 'الشرطة الاتحادية'],
    tip_federal_police: [
      'Participa do controle de produtos químicos de uso restrito, conforme a legislação.',
      'Helps control restricted-use chemicals in accordance with the law.',
      'Participa en el control de productos químicos de uso restringido conforme a la legislación.',
      'Participe au contrôle des produits chimiques à usage restreint conformément à la loi.',
      'تشارك في مراقبة المواد الكيميائية المقيدة الاستخدام وفقًا للقانون.'
    ],
    term_army: ['Exército Brasileiro', 'Brazilian Army', 'Ejército Brasileño', 'Armée brésilienne', 'الجيش البرازيلي'],
    tip_army: [
      'Responsável pelo controle de produtos de uso restrito regulados pelo Exército, conforme a legislação.',
      'Responsible for controlling restricted-use products regulated by the Army, in accordance with the law.',
      'Responsable del control de productos de uso restringido regulados por el Ejército, conforme a la legislación.',
      'Responsable du contrôle des produits à usage restreint réglementés par l’armée, conformément à la loi.',
      'مسؤول عن مراقبة المنتجات المقيدة الاستخدام والخاضعة لتنظيم الجيش وفقًا للقانون.'
    ],
    term_health: ['Vigilância Sanitária', 'Health Surveillance', 'Vigilancia Sanitaria', 'Surveillance sanitaire', 'الرقابة الصحية'],
    tip_health: [
      'Órgão que fiscaliza as condições sanitárias da fábrica e emite licenças de funcionamento.',
      'Authority that inspects factory sanitation and issues operating licenses.',
      'Organismo que inspecciona las condiciones sanitarias de la fábrica y emite licencias de funcionamiento.',
      'Organisme qui inspecte les conditions sanitaires de l’usine et délivre les autorisations d’exploitation.',
      'جهة تفحص الظروف الصحية للمصنع وتصدر تراخيص التشغيل.'
    ],
    term_anvisa: ['ANVISA', 'ANVISA', 'ANVISA', 'ANVISA', 'ANVISA'],
    tip_anvisa: [
      'Agência Nacional de Vigilância Sanitária: regula e fiscaliza cosméticos e as indústrias do setor.',
      'Brazilian Health Regulatory Agency: regulates and oversees cosmetics and the industry.',
      'Agencia Nacional de Vigilancia Sanitaria de Brasil: regula y supervisa los cosméticos y el sector.',
      'Agence nationale brésilienne de veille sanitaire : réglemente et contrôle les cosmétiques et le secteur.',
      'الوكالة الوطنية البرازيلية للرقابة الصحية: تنظم مستحضرات التجميل والقطاع وتشرف عليهما.'
    ],
    term_fire: ['Corpo de Bombeiros', 'Fire Department', 'Cuerpo de Bomberos', 'Sapeurs-pompiers', 'إدارة الإطفاء'],
    tip_fire: [
      'Atesta, por vistoria, a segurança contra incêndio das instalações.',
      'Inspects facilities and certifies their fire safety.',
      'Inspecciona las instalaciones y certifica su seguridad contra incendios.',
      'Inspecte les installations et certifie leur sécurité incendie.',
      'تفحص المنشآت وتعتمد إجراءات السلامة من الحرائق فيها.'
    ],
    term_cetesb: ['CETESB', 'CETESB', 'CETESB', 'CETESB', 'CETESB'],
    tip_cetesb: [
      'Companhia ambiental do Estado de São Paulo, responsável pelo licenciamento e controle da poluição.',
      'Environmental agency of the State of São Paulo, responsible for licensing and pollution control.',
      'Agencia ambiental del estado de São Paulo, responsable de las licencias y del control de la contaminación.',
      'Agence environnementale de l’État de São Paulo, chargée des autorisations et du contrôle de la pollution.',
      'وكالة البيئة في ولاية ساو باولو، مسؤولة عن التراخيص ومكافحة التلوث.'
    ],
    term_formula_short: ['Fórmula', 'Formula', 'Fórmula', 'Formule', 'تركيبة']
  };

  var translations = {};

  locales.forEach(function (locale, localeIndex) {
    translations[locale] = {};
  });

  Object.keys(messages).forEach(function (key) {
    locales.forEach(function (locale, localeIndex) {
      translations[locale][key] = messages[key][localeIndex];
    });
  });

  window.MAXIMUS_I18N = translations;
})();
