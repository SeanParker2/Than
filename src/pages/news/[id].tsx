import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsDetail {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  relatedNews: number[];
  color: string;
  coverImage: string;
}

const newsData: { [key: number]: NewsDetail } = {
  1: {
    id: 1,
    title: '2025设计趋势发布',
    category: '趋势洞察',
    date: '2025年7月15日',
    author: '设计团队',
    readTime: '8分钟',
    excerpt: '探索未来设计的无限可能，从极简主义到沉浸式体验，我们为您解读2025年最前沿的设计趋势。',
    content: `
# 2025年设计趋势：重新定义视觉体验的未来

随着技术的不断进步和用户需求的演变，2025年的设计趋势呈现出前所未有的多样性和创新性。作为设计师，我们需要敏锐地捕捉这些变化，并将其融入到我们的创作中。

## 1. 极简主义的进化

极简主义不再仅仅是"少即是多"的简单理念。2025年的极简设计更加注重**功能性极简**和**情感化极简**的平衡。设计师们开始探索如何在保持简洁的同时，传达更丰富的情感和信息。

### 关键特征：
- **微妙的纹理和质感**：通过细腻的材质表现增加视觉层次
- **有意义的留白**：每一处空白都有其存在的理由
- **精准的色彩运用**：少量但精确的色彩选择

## 2. 沉浸式体验设计

随着AR/VR技术的成熟，沉浸式设计不再是科幻概念。2025年，我们看到更多品牌开始采用沉浸式设计来创造独特的用户体验。

### 应用领域：
- **虚拟展厅**：为品牌创造虚拟的展示空间
- **交互式产品演示**：让用户在虚拟环境中体验产品
- **沉浸式品牌故事**：通过多感官体验讲述品牌故事

## 3. 可持续设计理念

环保意识的提升推动了可持续设计的发展。设计师们开始考虑设计对环境的影响，从材料选择到生产工艺，每一个环节都体现着对地球的关爱。

### 实践方向：
- **生物降解材料**的广泛应用
- **循环设计**理念的深入实践
- **数字化优先**的设计策略

## 4. 人工智能辅助设计

AI技术的发展为设计师提供了强大的工具。2025年，AI不再是替代设计师的威胁，而是增强创造力的伙伴。

### AI在设计中的应用：
- **自动化重复性工作**：释放设计师的创造力
- **数据驱动的设计决策**：基于用户行为优化设计
- **个性化设计生成**：为不同用户群体定制设计方案

## 5. 情感化设计的回归

在技术高度发达的今天，人们更加渴望真实的情感连接。2025年的设计趋势强调通过设计传达情感，创造有温度的用户体验。

### 设计策略：
- **故事化设计**：每个设计元素都承载着故事
- **多感官体验**：不仅仅是视觉，还包括触觉、听觉等
- **个人化定制**：让每个用户都感受到独特的关怀

## 结语

2025年的设计趋势告诉我们，未来的设计将更加注重人文关怀、环境责任和技术创新的平衡。作为设计师，我们需要在追求美学的同时，思考设计的社会价值和环境影响。

让我们一起拥抱这些变化，用设计创造更美好的未来。
    `,
    tags: ['设计趋势', '2025', '极简主义', '沉浸式体验', 'AI设计', '可持续设计'],
    relatedNews: [2, 3],
    color: 'from-blue-500 to-cyan-500',
    coverImage: 'news_1.png'
  },
  2: {
    id: 2,
    title: '设计理念的深度解读',
    category: '设计理念',
    date: '2025年3月8日',
    author: '设计团队',
    readTime: '6分钟',
    excerpt: '深入探讨"少即是多"的设计哲学，如何在简约中传达丰富的情感与功能，创造真正有意义的设计作品。',
    content: `
# 设计理念的深度解读："少即是多"的哲学思考

在设计的世界里，"少即是多"（Less is More）这一理念如同北极星般指引着无数设计师的创作方向。这句由建筑大师密斯·凡·德·罗提出的名言，不仅仅是一种美学观点，更是一种深刻的设计哲学，它要求我们在简约中寻找本质，在克制中展现力量。

## 理念的起源与发展

"少即是多"的设计理念源于20世纪初的现代主义运动。在那个工业化快速发展的时代，设计师们开始反思装饰的必要性，追求功能与形式的完美统一。

### 历史脉络：
- **包豪斯学派**：强调功能性与实用性的结合
- **极简主义**：去除一切不必要的装饰元素
- **现代设计**：追求简洁、清晰的视觉表达

## 核心设计原则

### 1. 功能至上
真正的简约设计不是简单的减法，而是对功能的深度思考。每一个保留的元素都必须有其存在的理由，都必须为用户体验服务。

**实践要点：**
- 明确设计目标和用户需求
- 去除冗余的装饰性元素
- 强化核心功能的表达

### 2. 视觉层次的建立
简约不等于单调。通过巧妙的排版、色彩和空间运用，可以在简洁的框架内创造丰富的视觉层次。

**设计技巧：**
- **留白的艺术**：给视觉元素以呼吸的空间
- **对比的运用**：通过大小、明暗、色彩的对比突出重点
- **节奏感的营造**：创造视觉的韵律和流动感

### 3. 情感的传达
简约设计的最高境界是在极简的形式中传达丰富的情感。这需要设计师对品牌、产品和用户有深刻的理解。

## 在不同领域的应用

### 品牌设计
在品牌视觉系统中，"少即是多"体现为：
- **标志设计**：用最简洁的图形传达品牌核心价值
- **色彩系统**：精选少数几种颜色，建立强烈的品牌识别
- **字体选择**：选择简洁易读的字体，确保信息传达的有效性

### 用户界面设计
在UI设计中，这一理念表现为：
- **扁平化设计**：去除不必要的装饰效果
- **直观的导航**：简化用户的操作路径
- **清晰的信息架构**：让用户快速找到所需信息

### 空间设计
在空间设计中，体现为：
- **开放式布局**：创造流动的空间感受
- **自然光的利用**：减少人工照明的依赖
- **材质的纯粹性**：展现材料本身的美感

## 实践中的挑战与解决方案

### 挑战1：简约与信息量的平衡
**解决方案：**
- 建立清晰的信息层级
- 运用渐进式信息披露
- 通过交互设计展现更多内容

### 挑战2：简约与品牌个性的统一
**解决方案：**
- 深入理解品牌DNA
- 在简约框架内寻找独特的表达方式
- 通过细节体现品牌特色

### 挑战3：跨文化的理解差异
**解决方案：**
- 研究目标市场的文化背景
- 适当调整设计语言
- 保持核心理念的一致性

## 未来的发展趋势

随着技术的发展和用户需求的变化，"少即是多"的理念也在不断演进：

### 智能化简约
- **AI辅助设计**：让技术帮助实现更精准的简约
- **个性化简约**：根据用户偏好调整简约程度
- **动态简约**：根据使用场景动态调整界面复杂度

### 可持续简约
- **环保材料**：选择对环境友好的设计材料
- **长久设计**：创造经得起时间考验的设计
- **循环利用**：考虑设计的全生命周期

## 结语

"少即是多"不仅仅是一种设计手法，更是一种生活哲学。它教会我们在复杂的世界中寻找简单，在喧嚣中保持宁静，在繁华中追求本质。

作为设计师，我们的使命是用最简洁的方式传达最丰富的内容，用最少的元素创造最大的价值。这需要我们不断地学习、思考和实践，在简约与丰富之间找到完美的平衡点。

让我们继续探索这一永恒的设计理念，用简约的力量创造更美好的世界。
    `,
    tags: ['设计理念', '极简主义', '设计哲学', '用户体验', '品牌设计'],
    relatedNews: [1, 3],
    color: 'from-purple-500 to-pink-500',
    coverImage: 'news_2.png'
  },
  3: {
    id: 3,
    title: '可持续设计的未来趋势',
    category: '趋势分析',
    date: '2025年1月1日',
    author: '设计团队',
    readTime: '7分钟',
    excerpt: '环保意识与设计美学的完美融合，探索如何在创造美好视觉体验的同时，承担起对环境的责任。',
    content: `
# 可持续设计的未来趋势：环保与美学的和谐统一

在全球气候变化和环境危机日益严峻的今天，设计行业正面临着前所未有的责任与挑战。可持续设计不再是一个可有可无的选择，而是设计师必须承担的社会责任。它要求我们在创造美好视觉体验的同时，深度思考设计对环境的影响，探索人与自然和谐共生的设计之道。

## 可持续设计的核心理念

可持续设计是一种全新的设计思维模式，它将环境保护、社会责任和经济效益有机结合，追求设计的长期价值而非短期效应。

### 三大支柱：
- **环境友好**：减少对自然环境的负面影响
- **社会责任**：促进社会公平与包容性发展
- **经济可行**：确保设计的商业可持续性

## 设计实践中的可持续策略

### 1. 材料选择的革新

#### 生物基材料
- **植物纤维**：竹子、麻类等可再生植物材料
- **生物塑料**：由玉米淀粉、甘蔗等制成的可降解材料
- **菌丝体材料**：利用真菌菌丝制成的新型环保材料

#### 回收再利用材料
- **再生纸张**：使用回收纸浆制成的印刷材料
- **回收塑料**：将废弃塑料重新加工成设计材料
- **金属回收**：充分利用回收金属的特性和美感

### 2. 生产工艺的优化

#### 低碳制造
- **数字化生产**：减少物理样品的制作需求
- **本地化生产**：降低运输过程中的碳排放
- **精准制造**：减少材料浪费和能源消耗

#### 清洁能源应用
- **太阳能驱动**：利用可再生能源进行生产
- **风能利用**：在适宜地区采用风力发电
- **水力发电**：充分利用水资源进行清洁生产

### 3. 设计寿命的延长

#### 模块化设计
- **可拆卸结构**：便于维修和升级的设计方案
- **标准化接口**：提高组件的通用性和可替换性
- **渐进式升级**：允许产品随时间逐步改进

#### 经典设计理念
- **永恒美学**：创造不受时尚潮流影响的设计
- **功能优先**：注重实用性而非装饰性
- **品质保证**：使用高质量材料确保产品耐用性

## 不同领域的可持续设计应用

### 包装设计

#### 减量化包装
- **最小化原则**：使用最少的材料达到保护目的
- **多功能设计**：包装本身具有二次使用价值
- **可食用包装**：探索可食用材料的包装应用

#### 智能包装
- **生物降解标识**：清晰标注材料的降解特性
- **回收指导**：提供详细的回收处理指南
- **环保教育**：通过包装传播环保理念

### 数字设计

#### 绿色网页设计
- **优化代码**：减少服务器能耗和加载时间
- **压缩图像**：在保证质量的前提下减小文件大小
- **暗色主题**：降低屏幕能耗，保护用户视力

#### 可持续UX设计
- **简化流程**：减少用户操作步骤和时间成本
- **离线功能**：减少对网络连接的依赖
- **设备兼容**：延长旧设备的使用寿命

### 空间设计

#### 绿色建筑设计
- **自然采光**：最大化利用自然光源
- **被动式通风**：减少空调系统的使用
- **雨水收集**：建立可持续的水资源管理系统

#### 室内环境优化
- **空气净化植物**：选择具有净化功能的绿色植物
- **天然材料**：使用木材、石材等天然装饰材料
- **循环利用家具**：改造和重新利用现有家具

## 技术创新推动可持续设计

### 人工智能的应用
- **材料优化算法**：AI帮助选择最环保的材料组合
- **生命周期评估**：智能分析产品的环境影响
- **废料预测模型**：提前预测和减少生产废料

### 3D打印技术
- **按需生产**：避免过度生产和库存积压
- **复杂结构优化**：创造更轻量化的产品结构
- **本地化制造**：减少长距离运输的需求

### 区块链技术
- **供应链透明**：追踪材料的来源和处理过程
- **碳足迹记录**：建立可信的环境影响数据库
- **循环经济激励**：通过代币机制鼓励环保行为

## 面临的挑战与解决方案

### 成本挑战
**问题：**环保材料和工艺往往成本较高
**解决方案：**
- 规模化生产降低成本
- 政府政策支持和补贴
- 长期价值评估替代短期成本考量

### 技术限制
**问题：**某些环保材料的性能仍有局限
**解决方案：**
- 持续的研发投入
- 跨学科合作创新
- 渐进式技术改进

### 市场接受度
**问题：**消费者对可持续产品的认知和接受度有待提高
**解决方案：**
- 加强环保教育和宣传
- 提升可持续产品的设计美感
- 建立可持续品牌的价值认同

## 未来展望

### 循环经济模式
未来的设计将更加注重产品的全生命周期管理，从设计阶段就考虑产品的回收和再利用，形成真正的循环经济模式。

### 生物设计革命
随着生物技术的发展，我们将看到更多由生物体直接"生长"出来的设计材料和产品，这将彻底改变我们对制造业的认知。

### 智能可持续系统
人工智能将帮助我们建立更加智能的可持续设计系统，实时监测和优化设计的环境影响，实现真正的智能化可持续发展。

## 结语

可持续设计不仅是一种设计方法，更是一种价值观和生活方式的体现。它要求我们重新思考设计的目的和意义，从单纯追求美观和功能，转向追求与环境和谐共生的设计理念。

作为设计师，我们有责任成为可持续发展的推动者和实践者。让我们用设计的力量，为地球的未来贡献自己的智慧和创造力，共同建设一个更加美好、可持续的世界。

每一个设计决策都是对未来的投票，让我们选择可持续的未来。

**特色功能：**
- 360度全景视频会议系统
- 无线投屏技术
- 智能白板系统
- 专业音响设备

### 创意实验室
这是一个专门用于原型制作和实验的空间，配备了3D打印机、激光切割机等先进设备。

**设备清单：**
- 高精度3D打印机
- 激光切割机
- 专业摄影设备
- 材料样品库

### 休闲放松区
我们深知工作与休息的平衡对创意工作的重要性，因此设置了舒适的休闲区域。

**休闲设施：**
- 咖啡吧台
- 舒适的沙发区
- 游戏娱乐设施
- 户外露台

## 技术设施升级

### 网络基础设施
- **千兆光纤网络**：确保高速稳定的网络连接
- **全覆盖WiFi 6**：支持大量设备同时连接
- **专业级网络安全**：保护客户数据和知识产权

### 智能办公系统
- **智能门禁系统**：刷卡或人脸识别进入
- **智能照明控制**：根据使用情况自动调节
- **环境监测系统**：实时监控空气质量和温湿度

## 团队成员的反馈

**创意总监田中太郎**：
> "新工作室的环境让我感到非常兴奋。开放的空间设计促进了团队之间的交流，而充足的自然光线让我们的创作更有灵感。"

**设计师佐藤花子**：
> "我特别喜欢创意实验室，能够快速制作原型对我们的设计工作非常有帮助。新的设备让我们能够更好地验证设计想法。"

**项目经理山田次郎**：
> "新的会议室设施大大提升了我们与客户沟通的效率。高清的视频会议系统让远程协作变得更加顺畅。"

## 可持续发展承诺

新工作室的建设体现了我们对可持续发展的承诺：

### 环保措施：
- **LEED金级认证**：符合国际绿色建筑标准
- **雨水收集系统**：用于植物浇灌
- **太阳能板**：部分电力来源于可再生能源
- **垃圾分类回收**：完善的废物管理系统

### 社会责任：
- **无障碍设计**：确保所有人都能方便使用
- **本地采购**：优先选择本地供应商
- **社区参与**：定期举办设计分享活动

## 未来规划

新工作室的启用只是我们发展计划的第一步。未来，我们计划：

### 短期目标（6个月内）：
- 完善工作流程和管理制度
- 举办工作室开放日活动
- 邀请行业专家进行交流分享

### 中期目标（1-2年）：
- 扩大团队规模
- 增设专业培训中心
- 建立设计资源库

### 长期愿景（3-5年）：
- 成为地区设计创新中心
- 建立国际合作网络
- 推动设计教育发展

## 开放日邀请

我们计划在2月举办工作室开放日活动，邀请客户、合作伙伴和设计爱好者参观我们的新空间。活动将包括：

- **工作室参观**：了解我们的工作环境和设备
- **设计分享**：团队成员分享最新项目和设计心得
- **互动体验**：体验我们的创意实验室设备
- **交流座谈**：与设计师面对面交流

## 结语

新工作室的启用标志着我们进入了发展的新阶段。我们相信，在这个充满创意和活力的空间里，我们的团队将创造出更多优秀的设计作品，为客户提供更好的服务。

感谢所有支持我们的客户和合作伙伴，让我们一起在这个新的创意空间里，创造设计的无限可能！
    `,
    tags: ['可持续设计', '环保设计', '绿色设计', '循环经济', '生态设计'],
    relatedNews: [1, 2],
    color: 'from-orange-500 to-red-500',
    coverImage: 'news_3.png'
  }
};

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState<NewsDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const basePath = process.env.NODE_ENV === 'production' ? '/ThanLab' : '';

  useEffect(() => {
    if (id) {
      const newsId = parseInt(id as string);
      const newsDetail = newsData[newsId];
      if (newsDetail) {
        setNews(newsDetail);
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

  if (!news) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">动态未找到</h1>
            <p className="text-gray-600 mb-8">抱歉，您查找的动态不存在。</p>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              返回首页
            </Link>
          </div>
        </div>
      </>
    );
  }

  // 渲染Markdown内容
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-800 mb-6 mt-8">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-800 mb-4 mt-6">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-800 mb-3 mt-4">{line.substring(4)}</h3>;
      } else if (line.startsWith('#### ')) {
        return <h4 key={index} className="text-lg font-semibold text-gray-800 mb-2 mt-3">{line.substring(5)}</h4>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-600 mb-1 ml-4">{line.substring(2)}</li>;
      } else if (line.startsWith('> ')) {
        return <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">{line.substring(2)}</blockquote>;
      } else if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="text-gray-600 leading-relaxed mb-4">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-800">{part}</strong> : part
            )}
          </p>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="text-gray-600 leading-relaxed mb-4">{line}</p>;
      }
    });
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className={`absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l ${news.color} opacity-10 rounded-full transform translate-x-1/2`}></div>
            <div className={`absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r ${news.color} opacity-10 rounded-full transform -translate-x-1/2`}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* 面包屑导航 */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
                <span>/</span>
                <span className="text-gray-800">最新动态</span>
                <span>/</span>
                <span className="text-gray-800">{news.title}</span>
              </div>
            </nav>

            <div className="max-w-4xl mx-auto">
              {/* 文章头部 */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${news.color} text-white text-sm font-medium rounded-full mb-4`}>
                    {news.category}
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  {news.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  {news.excerpt}
                </p>
                
                {/* 文章元信息 */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{news.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{news.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>阅读时间 {news.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* 封面图片 */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-12">
                <img
                  src={`${basePath}/images/${news.coverImage}`}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${news.color} opacity-20`}></div>
              </div>
            </div>
          </div>
        </section>

        {/* 文章内容 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {renderContent(news.content)}
              </div>
              
              {/* 标签 */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">相关标签</h3>
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 相关动态 */}
              {news.relatedNews.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">相关动态</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {news.relatedNews.map((relatedId) => {
                      const relatedNews = newsData[relatedId];
                      if (!relatedNews) return null;
                      
                      return (
                        <Link key={relatedId} href={`/news/${relatedId}`} className="group">
                          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${relatedNews.color} rounded-lg flex-shrink-0`}></div>
                              <div>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">{relatedNews.category}</span>
                                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                                  {relatedNews.title}
                                </h4>
                                <p className="text-gray-600 text-sm line-clamp-2">{relatedNews.excerpt}</p>
                                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                                  <span>{relatedNews.date}</span>
                                  <span>{relatedNews.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* 返回按钮 */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <Link href="/" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-medium rounded-full hover:from-black hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>返回首页</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}