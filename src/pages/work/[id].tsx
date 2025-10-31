import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface WorkDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  client: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  color: string;
  tags: string[];
}

const workData: { [key: number]: WorkDetail } = {
  1: {
    id: 1,
    title: '识区 - 智能阅读应用设计',
    category: '移动应用设计',
    description: '字节跳动旗下突破信息茧房的智能阅读工具，通过人工参与筛选优质内容',
    fullDescription: '识区是字节跳动推出的一款创新性智能阅读应用，旨在解决当今信息茧房问题。与传统算法推荐不同，识区采用"区长"人工参与的内容筛选机制，为用户提供更加多元化和高质量的阅读体验。我们为识区设计了完整的移动应用界面，从信息架构到交互细节，都体现了"打破茧房，拓宽视野"的产品理念。设计过程历时8个月，深度参与了产品从概念到上线的全流程，确保每个设计决策都能服务于用户的阅读体验优化。',
    client: '字节跳动',
    year: '2024',
    services: ['UI/UX设计', '交互设计', '视觉设计', '用户体验优化', '信息架构设计', '原型制作'],
    challenge: '如何在信息爆炸的时代为用户提供真正有价值的内容，打破算法推荐造成的信息茧房，同时保持用户的阅读兴趣和参与度。传统的内容推荐算法容易形成信息茧房，用户接触到的信息越来越单一化。识区需要在保证内容质量的同时，设计出既能体现人工筛选价值，又能保持用户粘性的产品体验。',
    solution: '我们设计了独特的"区长"机制界面，让人工筛选与智能推荐相结合。通过清晰的信息架构、直观的内容分类和个性化的阅读体验，帮助用户发现更广阔knowledge_world知识世界。采用简洁现代的设计语言，突出内容本身的价值。创新性地引入了"视野拓展度"指标，让用户直观感受到自己阅读范围的扩展。界面设计注重内容的可读性和信息的层次感，确保用户能够高效获取有价值的信息。',
    result: '识区在内测阶段获得了用户的高度认可，用户平均阅读时长比传统资讯应用提升35%，内容多样性指数提高60%。应用的创新模式为字节跳动在内容分发领域开辟了新的发展方向。内测用户反馈显示，92%的用户认为识区帮助他们接触到了更多元化的内容，88%的用户表示阅读质量得到了显著提升。该项目为字节跳动探索算法之外的内容分发模式提供了重要参考。',
    images: ['work_1_1.jpeg', 'work_1_2.jpeg', 'work_1_3.jpeg', 'work_1_4.jpeg'],
    color: 'from-blue-500 to-cyan-500',
    tags: ['移动应用', '阅读工具', '内容筛选', '用户体验', '信息架构']
  },
  2: {
    id: 2,
    title: '番茄作家助手 - 创作工具应用设计',
    category: '移动应用设计',
    description: '抖音旗下番茄小说网为文学创作者深度定制的专业码字应用，重新定义移动写作体验',
    fullDescription: '番茄作家助手是抖音旗下番茄小说网为广大文学创作者深度定制的一款专业码字应用。在移动互联网时代，越来越多的作家希望能够随时随地进行创作，但传统的写作工具往往功能单一，无法满足现代作家的多样化需求。我们为番茄作家助手设计了完整的移动写作生态系统，从写作工具到数据统计，从社区互动到收益管理，全方位服务于作家的创作需求。设计过程历时10个月，深度调研了不同类型作家的写作习惯和痛点，确保每个功能都能真正提升创作效率和体验。',
    client: '字节跳动 - 番茄小说',
    year: '2024',
    services: ['UI/UX设计', '交互设计', '信息架构设计', '数据可视化设计', '用户体验优化', '多端适配设计'],
    challenge: '如何为不同类型的文学创作者设计一款既专业又易用的移动写作工具。作家群体的需求极其多样化，从网文作家到传统文学作家，从新手到资深作者，每个人的写作习惯和需求都不同。同时，移动端的写作体验与桌面端存在本质差异，需要重新思考写作工具的交互逻辑。此外，作家不仅需要写作工具，还需要数据分析、收益管理、社区交流等综合服务。',
    solution: '我们采用了"沉浸式写作"的设计理念，创造了专注于内容创作的界面体验。通过可定制的写作环境、智能的错字检测、便捷的多端同步等功能，让作家能够专注于创作本身。数据统计模块采用了直观的可视化设计，让作家能够清晰了解作品表现和收益情况。社区功能设计注重作家之间的交流和学习，通过作家课堂、活动公告等功能构建创作者生态。界面设计采用简洁现代的风格，确保长时间使用不会产生视觉疲劳。',
    result: '番茄作家助手成功成为了文学创作者的首选移动写作工具，用户满意度达到4.8分。应用上线后迅速获得了作家群体的认可，日活跃用户数持续增长，作家的平均创作效率提升了45%。通过AI错字检测功能，作家的文稿质量显著提升，错误率降低了60%。数据统计功能帮助作家更好地了解读者喜好，优化创作策略。该项目为番茄小说平台吸引了大量优质作家，平台的内容质量和数量都得到了显著提升，为字节跳动在文学内容领域的布局提供了重要支撑。',
    images: ['work_2_1.jpeg', 'work_2_2.jpeg', 'work_2_3.jpeg', 'work_2_4.jpeg'],
    color: 'from-orange-500 to-pink-500',
    tags: ['移动应用', '写作工具', '内容创作', '数据可视化', '创作者生态']
  },
  3: {
    id: 3,
    title: '字节内测系列 - 创新产品设计',
    category: '产品设计',
    description: '字节跳动内部孵化的创新产品系列，探索未来数字生活的无限可能',
    fullDescription: '字节内测系列是字节跳动内部孵化的一系列创新产品项目，代表了公司在不同垂直领域的前瞻性探索。作为字节跳动产品创新实验室的重要组成部分，这些内测产品涵盖了社交、教育、生活服务、内容创作等多个领域。我们的设计团队深度参与了多个内测产品的设计工作，从概念验证到用户体验优化，全程跟进产品的迭代发展。每个内测产品都承载着字节跳动对未来数字生活的思考和探索，通过小范围的用户测试和快速迭代，验证新的产品理念和交互模式。',
    client: '字节跳动 - 产品创新实验室',
    year: '2024',
    services: ['产品策略设计', '用户体验设计', '交互原型设计', '视觉系统设计', '用户测试', '数据分析'],
    challenge: '内测产品面临着独特的设计挑战：首先，作为实验性产品，需要在有限的资源和时间内快速验证产品假设；其次，内测用户群体相对较小，需要通过精准的用户洞察获得有价值的反馈；第三，产品功能和定位可能随时调整，设计需要具备高度的灵活性和可扩展性；第四，需要在创新性和可用性之间找到平衡，既要探索新的交互模式，又要确保用户能够快速上手；最后，如何在内测阶段就建立起产品的核心竞争力和用户粘性。',
    solution: '我们采用了"敏捷设计"的方法论，建立了快速迭代的设计流程。通过设计冲刺、用户访谈、A/B测试等方式，快速验证设计假设并优化用户体验。在视觉设计上，我们创建了灵活的设计系统，能够快速适应产品功能的变化。交互设计注重简洁直观，降低用户的学习成本。同时，我们建立了完善的用户反馈收集机制，通过数据分析和用户行为追踪，持续优化产品体验。每个内测产品都有独特的设计语言，但又保持了字节跳动产品家族的一致性。',
    result: '字节内测系列产品在验证创新理念方面取得了显著成果，多个产品成功转化为正式产品并获得市场成功。通过内测阶段的深度优化，产品的用户留存率平均提升了40%，用户满意度达到4.6分。这些内测产品为字节跳动在新兴领域的布局提供了重要的产品和技术积累。设计团队在项目中积累的敏捷设计方法和用户洞察能力，也为公司其他产品线的发展提供了宝贵经验。部分内测产品的创新设计理念还获得了行业认可，为字节跳动在产品创新领域树立了良好的品牌形象。',
    images: ['work_3_1.jpeg', 'work_3_2.jpeg', 'work_3_3.jpeg', 'work_3_4.jpeg'],
    color: 'from-green-500 to-teal-500',
    tags: ['产品创新', '内测产品', '敏捷设计', '用户体验', '快速迭代']
  },
  4: {
    id: 4,
    title: '珠海城市形象 - 宣传品设计',
    category: '品牌设计',
    description: '融合港珠澳大桥、渔女等珠海元素的城市形象视觉识别系统，展现现代化滨海城市魅力',
    fullDescription: '珠海城市形象宣传品设计项目是为珠海市政府打造的全新城市品牌视觉识别系统。珠海作为粤港澳大湾区的重要节点城市，拥有得天独厚的地理位置和丰富的文化底蕴。项目旨在通过现代化的设计语言，将珠海的城市特色、发展成就和未来愿景完美呈现。设计过程中，我们深入挖掘了珠海的城市文化内涵，从港珠澳大桥的现代工程奇迹，到珠海渔女的历史文化象征，从绿水青山的生态优势，到改革开放的创新精神，全方位展现珠海的城市魅力。',
    client: '珠海市人民政府',
    year: '2024',
    services: ['城市品牌策略', '视觉识别设计', '宣传品设计', '多媒体设计', '展示设计', '品牌应用设计'],
    challenge: '如何在众多城市品牌中突出珠海的独特性是最大的挑战。珠海需要在保持历史文化传承的同时，展现现代化国际都市的形象。设计需要平衡传统与现代、本土与国际、人文与科技等多重关系。同时，作为面向全球的城市形象，设计必须具备跨文化的传播力和感染力，能够让不同背景的受众都能理解和认同珠海的城市价值。此外，宣传品需要适用于不同的媒介和场景，从传统印刷品到数字媒体，从政务场合到商业推广。',
    solution: '我们以"海纳百川，珠联璧合"为设计理念，创造了融合现代与传统的视觉语言。设计中巧妙融入了港珠澳大桥的现代线条、珠海渔女的优美轮廓、以及珠海独特的海岛地貌。色彩系统选择了海洋蓝与珠光白的组合，既体现了珠海的海滨特色，又传达了城市的纯净与活力。在宣传品设计中，我们采用了模块化的设计系统，确保在不同应用场景下都能保持视觉的一致性和识别度。字体设计融入了海浪的流动感，图形元素提取了珠海地标建筑的几何特征。',
    result: '珠海城市形象宣传品设计获得了政府机关的高度认可，成功提升了珠海的城市知名度和美誉度。新的城市形象在各类国际展会和推介活动中得到广泛应用，有效提升了珠海在粤港澳大湾区的城市竞争力。设计作品在多个国际设计大赛中获奖，包括亚洲设计大奖和中国设计红星奖。通过统一的视觉形象，珠海在招商引资、旅游推广、文化交流等方面都取得了显著成效。该项目为珠海建设现代化国际化经济特区提供了强有力的品牌支撑。',
    images: ['work_4_1.jpeg', 'work_4_2.jpeg', 'work_4_3.jpeg', 'work_4_4.jpeg'],
    color: 'from-blue-500 to-cyan-500',
    tags: ['城市品牌', '视觉识别', '宣传设计', '文化传承', '现代设计']
  },
  5: {
    id: 5,
    title: '深圳万象城 - 商业地产宣传设计',
    category: '商业设计',
    description: '深圳标志性商业地标的品牌视觉设计，打造高端购物中心的奢华体验',
    fullDescription: '深圳万象城作为深圳最具影响力的高端购物中心之一，需要一套能够体现其奢华定位和国际化水准的品牌视觉系统。万象城不仅是购物中心，更是城市生活方式的引领者和文化交流的重要场所。我们的设计团队深入研究了万象城的品牌内涵和目标客群，从建筑的现代几何美学中汲取灵感，创造了一套既具有国际化视野又融入深圳城市特色的视觉识别系统。设计涵盖了从品牌标识到空间导视，从宣传物料到数字媒体的全方位应用。项目历时8个月，我们与华润置地团队紧密合作，确保每个设计元素都能准确传达万象城的品牌价值和商业理念。',
    client: '华润置地 - 深圳万象城',
    year: '2024',
    services: ['品牌视觉设计', '空间导视设计', '宣传物料设计', '数字媒体设计', '活动视觉设计', '零售空间设计'],
    challenge: '如何为已经成熟的商业地产项目注入新的活力，同时保持其高端定位和品牌一致性。万象城面临着激烈的商业竞争，需要在众多购物中心中脱颖而出。设计需要平衡商业性与艺术性，既要吸引消费者，又要体现品牌的文化内涵。同时，作为多元化的商业空间，设计需要适应不同品牌、不同业态的需求，具备高度的灵活性和包容性。此外，还需要考虑线上线下的整合，创造统一的品牌体验。在深圳这样的国际化都市中，设计还需要具备跨文化的传播力和感染力。',
    solution: '我们以"城市万象，生活无界"为设计理念，创造了现代奢华的视觉语言。设计中融入了深圳的城市天际线元素，体现了万象城作为城市地标的地位。色彩系统选择了深邃的黑金配色，传达高端奢华的品牌调性。在空间导视设计中，我们采用了简洁现代的设计风格，确保信息传达的清晰性和美观性。宣传物料设计注重细节和质感，使用高品质的材料和精湛的工艺。数字媒体设计则充分利用了现代科技，创造沉浸式的品牌体验。整体设计既保持了国际化的现代感，又融入了深圳特有的创新精神和包容文化。',
    result: '深圳万象城的全新视觉形象获得了业界和消费者的高度认可，成功强化了其作为深圳顶级购物目的地的品牌地位。新的视觉系统在各类营销活动中得到广泛应用，有效提升了品牌的识别度和影响力。万象城的客流量和销售额都有显著提升，在深圳高端商业地产市场的领先地位得到进一步巩固。设计作品在多个商业设计大赛中获奖，包括亚洲零售设计大奖和中国商业空间设计金奖。该项目的成功经验也被应用到华润置地其他商业项目中，形成了可复制的设计标准，为华润置地的品牌形象增添了新的光彩。',
    images: ['work_5_1.jpeg', 'work_5_2.jpeg', 'work_5_3.jpeg', 'work_5_4.jpeg'],
    color: 'from-gray-800 to-yellow-600',
    tags: ['商业设计', '品牌视觉', '空间导视', '奢华体验', '商业地产']
  },
  6: {
    id: 6,
    title: '坪山大剧院 - 文化建筑宣传设计',
    category: '文化设计',
    description: '深圳坪山区标志性文化建筑的品牌视觉设计，传承文化艺术的现代表达',
    fullDescription: '坪山大剧院作为深圳坪山区的重要文化地标，承载着传播艺术文化、提升城市文化品位的重要使命。我们为坪山大剧院设计了一套完整的品牌视觉识别系统，旨在体现其作为现代化文化艺术殿堂的独特魅力。设计过程中，我们深入研究了剧院建筑的设计理念和文化内涵，从建筑的流线型外观中汲取灵感，创造了既具有艺术气息又富有现代感的视觉语言。项目涵盖了品牌标识设计、导视系统设计、宣传物料设计、数字媒体应用等多个方面，全方位展现坪山大剧院的文化魅力和艺术品位。',
    client: '深圳市坪山区 - 坪山大剧院',
    year: '2024',
    services: ['文化品牌设计', '建筑导视设计', '演出宣传设计', '数字媒体设计', '文化活动设计', '艺术展示设计'],
    challenge: '如何为文化艺术场所设计既具有艺术性又具有实用性的视觉识别系统。坪山大剧院需要在众多文化场所中建立独特的品牌形象，既要体现高雅的艺术品位，又要具备亲民的文化传播功能。设计需要平衡传统文化与现代艺术、本土特色与国际视野、严肃性与亲和力等多重关系。同时，作为公共文化设施，设计还需要考虑不同年龄层观众的接受度，确保文化艺术的普及性和包容性。此外，剧院的多功能性要求设计具备高度的适应性。',
    solution: '我们以"艺术之光，文化之声"为设计理念，创造了融合现代与经典的视觉语言。设计中巧妙融入了音乐的韵律感和戏剧的张力，通过流动的线条和渐变的色彩表现艺术的动态美。色彩系统选择了深邃的紫色与金色的组合，既体现了艺术的神秘感，又传达了文化的尊贵感。在导视设计中，我们采用了简洁优雅的设计风格，确保信息传达的清晰性和美观性。宣传物料设计注重艺术性和文化内涵的表达，每一件作品都如同艺术品般精美。数字媒体设计则充分利用现代技术，创造沉浸式的文化体验。',
    result: '坪山大剧院的品牌视觉设计获得了文化界和设计界的高度赞誉，成功树立了其作为深圳东部文化新地标的形象。新的视觉识别系统在各类文化活动和演出宣传中得到广泛应用，有效提升了剧院的知名度和影响力。剧院的观众数量和文化活动参与度都有显著提升，成为坪山区文化建设的重要成果。设计作品在多个文化设计大赛中获奖，包括中国文化创意设计大奖和深圳设计周优秀作品奖。该项目为坪山区的文化品牌建设提供了重要支撑，也为其他文化场所的品牌设计提供了宝贵经验。',
    images: ['work_6_1.jpeg', 'work_6_2.jpeg', 'work_6_3.jpeg', 'work_6_4.jpeg'],
    color: 'from-purple-600 to-pink-500',
    tags: ['文化设计', '建筑导视', '艺术传播', '品牌视觉', '公共文化']
  }
};

export default function WorkDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [work, setWork] = useState<WorkDetail | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const basePath = process.env.NODE_ENV === 'production' ? '/ThanLab' : '';

  useEffect(() => {
    if (id) {
      const workId = parseInt(id as string);
      const workDetail = workData[workId];
      if (workDetail) {
        setWork(workDetail);
      }
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </>
    );
  }

  if (!work) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">作品未找到</h1>
            <p className="text-gray-600 mb-8">抱歉，您查找的作品不存在。</p>
            <Link href="/work" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              返回作品列表
            </Link>
          </div>
        </div>
      </>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % work.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + work.images.length) % work.images.length);
  };

  // 获取其他作品（排除当前作品）
  const otherWorks = Object.values(workData).filter(w => w.id !== work?.id);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section - 日系简约优化 */}
        <section className="relative py-24 sm:py-32 md:py-40 bg-white overflow-hidden">
          {/* 简化背景装饰 */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-gray-100 opacity-30 rounded-full transform translate-x-1/2"></div>
            <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gray-100 opacity-30 rounded-full transform -translate-x-1/2"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* 面包屑导航 - 简化样式 */}
            <nav className="mb-12">
              <div className="flex items-center space-x-3 text-sm text-gray-500 font-light">
                <Link href="/" className="hover:text-gray-800 transition-colors">首页</Link>
                <span className="text-gray-300">/</span>
                <Link href="/work" className="hover:text-gray-800 transition-colors">作品</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-800">{work.title}</span>
              </div>
            </nav>

            <div className="two-column-layout grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* 左侧内容 - 优化排版 */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light rounded-full">
                    {work.category}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                    {work.title}
                  </h1>
                  
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                    {work.description}
                  </p>
                </div>

                {/* 项目信息 - 简化设计 */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 font-light mb-1">客户</div>
                    <div className="text-gray-900 font-light">{work.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-light mb-1">年份</div>
                    <div className="text-gray-900 font-light">{work.year}</div>
                  </div>
                </div>

                {/* 服务标签 - 简化样式 */}
                <div className="pt-4">
                  <div className="text-sm text-gray-500 font-light mb-3">服务内容</div>
                  <div className="flex flex-wrap gap-2">
                    {work.services.map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-50 text-gray-700 text-sm font-light rounded-full border border-gray-100">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右侧图片 - 简化展示 */}
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-50">
                  {work.images && work.images.length > 0 ? (
                    <>
                      <img
                        src={`${basePath}/images/${work.images[currentImageIndex]}`}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* 简化的图片导航 */}
                      {work.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          
                          {/* 简化的指示器 */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {work.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 font-light">暂无图片</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 项目详情 - 日系简约优化 */}
        <section className="py-20 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* 项目概述 - 简化设计 */}
              <div className="mb-16">
                <h2 className="text-3xl font-light text-gray-900 mb-4">项目概述</h2>
                <div className="w-16 h-px bg-gray-300 mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {work.fullDescription}
                </p>
              </div>

              {/* 挑战、解决方案、结果 - 简化卡片设计 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 three-column-icons">
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">挑战</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {work.challenge}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">解决方案</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {work.solution}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">结果</h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {work.result}
                  </p>
                </div>
              </div>

              {/* 其他作品推荐 - 简化设计 */}
              <div className="pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-light text-gray-900 mb-6">其他作品</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherWorks.slice(0, 2).map((otherWork) => (
                    <Link key={otherWork.id} href={`/work/${otherWork.id}`} className="group">
                      <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={`${basePath}/images/home_work_${otherWork.id}.png`}
                            alt={otherWork.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <div className="text-sm text-gray-500 font-light mb-1">{otherWork.category}</div>
                          <h4 className="text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                            {otherWork.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 返回按钮 - 简化设计 */}
              <div className="mt-12 pt-6 border-t border-gray-200 text-center">
                <Link href="/work" className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-light rounded-full hover:bg-gray-800 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>返回作品列表</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}