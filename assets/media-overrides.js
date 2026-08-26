(function () {
  "use strict";

  const photos = {
    grassland: {
      url: "./assets/images/local/img-01-a183044718.jpg",
      source: "https://commons.wikimedia.org/wiki/File:Ewenki_Grasslands_and_Yurt_Scene_(19785364532).jpg",
      label: "鄂温克草原与蒙古包实景"
    },
    chengde: {
      url: "./assets/images/local/img-02-d71b8c647c.jpg",
      source: "https://commons.wikimedia.org/wiki/File:Chengde_Putuo_Zongcheng_Temple_201208.JPG",
      label: "承德普陀宗乘之庙实景"
    },
    dunhuang: {
      url: "./assets/images/local/img-03-7ad34f8845.jpg",
      source: "https://commons.wikimedia.org/wiki/File:Mural_-_Mogao_Caves,_Dunhuang.jpg",
      label: "敦煌莫高窟壁画实景"
    },
    shennongjia: {
      url: "./assets/images/local/img-04-dd40eac031.jpg",
      source: "https://commons.wikimedia.org/wiki/File:20250524_Hubei_Shennongjia_(131626).jpg",
      label: "湖北神农架实景"
    },
    wenchang: {
      url: "./assets/images/local/img-05-e790ab6274.png",
      source: "https://commons.wikimedia.org/wiki/File:Chang'e_7_arrive_at_Wenchang_Space_Launch_Center_04.png",
      label: "嫦娥七号运抵文昌航天发射场实景"
    },
    jinggangshan: {
      url: "./assets/images/local/img-06-6a7b5e875e.jpg",
      source: "https://commons.wikimedia.org/wiki/File:Wuzhi_Peak,_Jinggangshan_(20250124122509).jpg",
      label: "井冈山实景"
    },
    suzhou: {
      url: "./assets/images/local/img-07-9fbbe20e09.jpg",
      source: "https://commons.wikimedia.org/wiki/File:Humble_Administrator_Garden_48302-Suzhou_(49171057203).jpg",
      label: "苏州拙政园实景"
    },
    badge: {
      url: "./assets/images/local/img-08-e1a961b81c.jpg",
      source: "https://unsplash.com/photos/photo-1602173574767-37ac01994b2a",
      label: "金属纪念徽章实拍"
    },
    bookmark: {
      url: "./assets/images/local/img-09-721dfa4afb.jpg",
      source: "https://unsplash.com/photos/photo-1543002588-bfa74002ed7e",
      label: "书籍与书签实拍"
    },
    notebook: {
      url: "./assets/images/local/img-10-ea1b29c392.jpg",
      source: "https://commons.wikimedia.org/wiki/File:Notebook.jpg",
      label: "研学笔记本实拍"
    },
    hanfu: {
      url: "./assets/images/local/img-11-8fe1e93a3f.jpg",
      source: "https://unsplash.com/photos/photo-1599707367072-cd6ada2bc375",
      label: "中国传统服饰实拍"
    },
    tshirt: {
      url: "./assets/images/local/img-12-42a5b04af9.jpg",
      source: "https://commons.wikimedia.org/wiki/File:White-tshirt.jpg",
      label: "白色研学文化衫实拍"
    },
    giftbox: {
      url: "./assets/images/local/img-13-c1fd0a6461.jpg",
      source: "https://commons.wikimedia.org/wiki/File:Gift_box.jpg",
      label: "红色礼品盒实拍"
    },
    teamwork: {
      url: "./assets/images/local/img-14-c2a34c3d80.jpg",
      source: "https://unsplash.com/photos/photo-1523240795612-9a054b0db644",
      label: "学生小组协作实景"
    },
    mongolianYurt: {
      url: "./assets/images/local/img-15-6914c5c358.jpg",
      source: "https://unsplash.com/photos/photo-1533130061792-64b345e4a833",
      label: "蒙古草原与毡房实景"
    },
    routeMap: {
      url: "./assets/images/local/img-16-5decddeb47.jpg",
      source: "https://unsplash.com/photos/photo-1524661135-423995f22d0b",
      label: "研学路线地图实拍"
    },
    studentDiscussion: {
      url: "./assets/images/local/img-17-fdff9c975f.jpg",
      source: "https://unsplash.com/photos/photo-1529390079861-591de354faf5",
      label: "学生户外讨论实景"
    },
    mapWorkshop: {
      url: "./assets/images/local/img-18-0aeaf0b31c.jpg",
      source: "https://unsplash.com/photos/photo-1569336415962-a4bd9f69cd83",
      label: "纸质路线地图实拍"
    },
    rocketLaunch: {
      url: "./assets/images/local/img-19-724e6a867c.jpg",
      source: "https://unsplash.com/photos/photo-1457364887197-9150188c107b",
      label: "火箭发射实景"
    },
    spaceEducation: {
      url: "./assets/images/local/img-20-cdbe1d416d.jpg",
      source: "https://unsplash.com/photos/photo-1446776811953-b23d57bd21aa",
      label: "航天科普实景"
    }
  };

  const directRules = [
    [/土尔扈特部回归|zx-review1|zx-23b0336|zx-8e2e2e4|zx-9ae549d/, photos.chengde],
    [/zx-b70601b/, photos.grassland],
    [/zx-b86981d/, photos.mongolianYurt],
    [/丝绸之路探险|zx-review2|zx-1fe2984|zx-62fdafa|zx-dunhuan|zx-09e896e/, photos.dunhuang],
    [/神农架生态探秘|zx-a40cd64|zx-be58c20|zx-30452d4/, photos.shennongjia],
    [/航天科技之旅|zx-review4|zx-573ad63|zx-dba1526/, photos.wenchang],
    [/zx-c65b267/, photos.rocketLaunch],
    [/zx-f49eff2/, photos.spaceEducation],
    [/zx-bff07aa|zx-6602d41/, photos.grassland],
    [/zx-e5dbb2c/, photos.mongolianYurt],
    [/zx-4c1576f/, photos.teamwork],
    [/zx-7227f33/, photos.routeMap],
    [/zx-cfe62ad/, photos.studentDiscussion],
    [/zx-5515ffa/, photos.mapWorkshop],
    [/zx-447ff79/, photos.jinggangshan],
    [/zx-2d000e3/, photos.suzhou],
    [/zx-be035af|zx-badge/, photos.badge],
    [/zx-879a9f5|zx-bookmar/, photos.bookmark],
    [/zx-86cfd67|zx-noteboo/, photos.notebook],
    [/zx-fed84dc|zx-ai1|zx-ai2/, photos.hanfu],
    [/zx-0a7a21d|zx-tshirt/, photos.tshirt],
    [/zx-eab4009|zx-box/, photos.giftbox],
    [/zx-dino-di/, photos.shennongjia],
    [/zx-totebag/, photos.teamwork],
    [/zx-vr-tick/, photos.wenchang],
    [/zx-lecture/, photos.chengde],
    [/zx-passpor/, photos.grassland]
  ];

  const homeTabCourses = {
    "推荐": [
      { id: "1", title: "土尔扈特部回归", meta: "历史文化 · 匹配度 96%", photo: photos.chengde },
      { id: "2", title: "丝绸之路探险", meta: "古代贸易 · 匹配度 92%", photo: photos.dunhuang },
      { id: "3", title: "神农架生态探秘", meta: "自然科学 · 匹配度 89%", photo: photos.shennongjia }
    ],
    "热门": [
      { id: "4", title: "航天科技之旅", meta: "1520 人参与", photo: photos.wenchang },
      { id: "1", title: "土尔扈特部回归", meta: "1280 人参与", photo: photos.chengde },
      { id: "2", title: "丝绸之路探险", meta: "980 人参与", photo: photos.dunhuang }
    ],
    "附近": [
      { id: "1", title: "土尔扈特部回归", meta: "距你 120km", photo: photos.chengde },
      { id: "3", title: "神农架生态探秘", meta: "距你 1500km", photo: photos.shennongjia },
      { id: "2", title: "丝绸之路探险", meta: "距你 2500km", photo: photos.dunhuang }
    ],
    "最新": [
      { id: "4", title: "航天科技之旅", meta: "本周上新", photo: photos.wenchang },
      { id: "3", title: "神农架生态探秘", meta: "7月18日上新", photo: photos.shennongjia },
      { id: "2", title: "丝绸之路探险", meta: "7月10日上新", photo: photos.dunhuang }
    ]
  };

  const courseVideos = {
    "土尔扈特部回归": { bvid: "BV1VSzHY4EBJ", label: "土尔扈特东归历史专题" },
    "丝绸之路探险": { bvid: "BV17s411a7Pi", label: "央视1980版《丝绸之路》纪录片" },
    "神农架生态探秘": { bvid: "BV1yAFezEEAA", label: "央视四集自然地理纪录片《神农架》" },
    "航天科技之旅": { bvid: "BV1js411s7Xo", label: "文昌发射场探秘《从这里腾飞》" }
  };
  const themeVideos = {
    "历史文化": [
      { course: "土尔扈特部回归", page: 1, title: "土尔扈特东归历史专题" },
      { course: "丝绸之路探险", page: 1, title: "丝绸之路 第一集" },
      { course: "丝绸之路探险", page: 2, title: "丝绸之路 第二集" },
      { course: "丝绸之路探险", page: 3, title: "丝绸之路 第三集" }
    ],
    "自然科学": [1, 2, 3, 4].map(function (page) { return { course: "神农架生态探秘", page: page, title: "神农架自然地理 第" + page + "集" }; }),
    "科技前沿": [1, 2].map(function (page) { return { course: "航天科技之旅", page: page, title: "文昌航天发射场 第" + page + "集" }; }),
    "艺术人文": [4, 5, 6, 7].map(function (page) { return { course: "丝绸之路探险", page: page, title: "丝路艺术与人文 第" + (page - 3) + "集" }; }),
    "红色教育": [
      { course: "土尔扈特部回归", page: 1, title: "民族团结与家国情怀" },
      { course: "丝绸之路探险", page: 1, title: "中华文明交流 第一讲" },
      { course: "丝绸之路探险", page: 2, title: "中华文明交流 第二讲" }
    ],
    "社会实践": [1, 2, 3, 4].map(function (page) { return { course: "神农架生态探秘", page: page, title: "生态考察实践 第" + page + "课" }; })
  };
  const themeActivities = {
    "历史文化": [
      { type: "任务", title: "复原土尔扈特东归路线", meta: "研学任务 · 预计30分钟", detail: "结合地图与史料标出东归路线中的关键地点，并说明路线选择的原因。", steps: ["阅读东归背景史料", "标注伏尔加河、伊犁与承德", "为三个地点添加历史说明"] },
      { type: "任务", title: "承德建筑证据观察", meta: "现场任务 · 预计25分钟", detail: "从布局、屋顶和装饰中寻找民族文化交流的建筑证据。", steps: ["选择一处代表建筑", "记录三项建筑特征", "结合历史背景形成结论"] },
      { type: "作业", title: "渥巴锡人物档案", meta: "课后作业 · 500字", detail: "根据课程和史料整理渥巴锡的生平、重要选择及历史影响。" },
      { type: "作业", title: "两则东归史料对读", meta: "课后作业 · 表格分析", detail: "比较两则史料的作者、时间、核心观点和证据差异，并写出你的判断。" },
      { type: "测试", title: "东归历史知识测试", meta: "知识测试 · 1题示例", detail: "土尔扈特部东归发生在哪一年？", options: ["1689年", "1771年", "1840年", "1911年"], answer: 1 },
      { type: "测试", title: "承德文化遗产辨识", meta: "知识测试 · 1题示例", detail: "承德在土尔扈特东归历史中的重要意义是什么？", options: ["出发地点", "海上港口", "清帝接见与安置决策地", "古代战场"], answer: 2 },
      { type: "资料", title: "土尔扈特东归史料节选", meta: "拓展资料 · 8分钟", detail: "资料围绕东归背景、行程困难、清廷接见与部众安置展开。阅读时请区分事实陈述、作者判断和后世评价。" },
      { type: "资料", title: "东归路线历史地图", meta: "地图资料 · 6分钟", detail: "地图标示伏尔加河流域、哈萨克草原、伊犁河谷和承德等关键节点，可用于完成路线复原任务。" }
    ],
    "自然科学": [
      { type: "任务", title: "完成草原植物样方调查", meta: "研学任务 · 预计35分钟", detail: "在导师划定范围内记录植物种类、数量、高度与覆盖度。", steps: ["划定1米见方样方", "识别并计数植物", "记录天气与地表情况"] },
      { type: "任务", title: "寻找动物活动痕迹", meta: "观察任务 · 预计25分钟", detail: "在不干扰野生动物的前提下记录足迹、取食痕迹与叫声。", steps: ["沿开放步道观察", "拍摄或速写痕迹", "推测动物及活动时间"] },
      { type: "作业", title: "样方数据分析报告", meta: "课后作业 · 数据表", detail: "计算样方内各植物的相对数量，并解释环境差异可能造成的影响。" },
      { type: "作业", title: "一页自然观察笔记", meta: "课后作业 · 图文记录", detail: "选取一种代表物种，用图文结合的方式记录形态、环境和你的问题。" },
      { type: "测试", title: "生态系统组成测试", meta: "知识测试 · 1题示例", detail: "下列哪项属于生态系统中的非生物因素？", options: ["牧草", "昆虫", "土壤湿度", "鸟类"], answer: 2 },
      { type: "测试", title: "野外观察规范测试", meta: "安全测试 · 1题示例", detail: "发现野生动物时最合适的做法是什么？", options: ["追赶拍照", "投喂食物", "保持距离安静观察", "触摸幼崽"], answer: 2 },
      { type: "资料", title: "草原常见植物识别表", meta: "图鉴资料 · 10分钟", detail: "识别表列出典型草原植物的叶形、花期和生境特征，观察时应同时记录无法确认的特征。" },
      { type: "资料", title: "野外调查安全手册", meta: "必读资料 · 7分钟", detail: "手册包括队伍纪律、防晒补水、防滑、防虫和突发天气应对要求。" }
    ],
    "科技前沿": [
      { type: "任务", title: "制作火箭结构模型", meta: "工程任务 · 预计40分钟", detail: "根据运载火箭分级结构完成模型组装并标注主要舱段。", steps: ["识别整流罩与级间段", "按比例组装模型", "说明分级设计的作用"] },
      { type: "任务", title: "规划卫星应用方案", meta: "创新任务 · 预计30分钟", detail: "选择农业、气象或救灾场景，设计一项卫星数据应用方案。", steps: ["明确实际问题", "选择需要的数据", "绘制应用流程"] },
      { type: "作业", title: "发射窗口影响因素分析", meta: "课后作业 · 400字", detail: "从轨道、天气、安全和任务准备四方面说明发射窗口为何需要精确选择。" },
      { type: "作业", title: "航天工程职业采访提纲", meta: "课后作业 · 8个问题", detail: "为工程师采访准备问题，覆盖专业学习、岗位协作和工程伦理。" },
      { type: "测试", title: "运载火箭基础测试", meta: "知识测试 · 1题示例", detail: "火箭采用多级结构的主要目的是什么？", options: ["增加外观颜色", "逐级减轻质量提高效率", "方便参观", "降低发射塔高度"], answer: 1 },
      { type: "测试", title: "卫星应用场景测试", meta: "知识测试 · 1题示例", detail: "下列哪项最直接使用气象卫星数据？", options: ["天气预报", "纸张印刷", "古籍修复", "室内照明"], answer: 0 },
      { type: "资料", title: "中国航天发展时间轴", meta: "拓展资料 · 9分钟", detail: "时间轴梳理重要卫星、载人航天和探月工程节点，适合用于建立工程发展脉络。" },
      { type: "资料", title: "文昌发射场参观规范", meta: "必读资料 · 5分钟", detail: "资料说明预约、安检、指定区域参观和拍摄要求，发射任务期间应服从现场管理。" }
    ],
    "艺术人文": [
      { type: "任务", title: "提取敦煌壁画色彩", meta: "艺术任务 · 预计30分钟", detail: "观察壁画图像资料，提取主色、辅助色并分析色彩关系。", steps: ["选择一幅代表作品", "制作五色色卡", "说明色彩营造的氛围"] },
      { type: "任务", title: "记录园林框景构图", meta: "观察任务 · 预计25分钟", detail: "在苏州园林场景中寻找框景、借景和对景，并用速写记录。", steps: ["寻找门窗形成的画框", "标注前中后景", "解释视线引导方式"] },
      { type: "作业", title: "传统纹样再设计", meta: "创作作业 · A4一页", detail: "选择一种传统纹样，在保留核心结构的基础上完成现代应用设计。" },
      { type: "作业", title: "昆曲表演观察报告", meta: "课后作业 · 500字", detail: "从唱腔、动作、服饰和舞台空间四方面完成观看记录。" },
      { type: "测试", title: "园林造景方法测试", meta: "知识测试 · 1题示例", detail: "通过门窗洞口观看远处景物属于哪种造景方法？", options: ["框景", "填景", "遮挡", "复制"], answer: 0 },
      { type: "测试", title: "敦煌艺术常识测试", meta: "知识测试 · 1题示例", detail: "敦煌壁画研究需要特别注意哪项保护原则？", options: ["触摸颜料", "强光照射", "控制环境并减少干扰", "随意临摹洞窟墙面"], answer: 2 },
      { type: "资料", title: "敦煌壁画线描图例", meta: "创作资料 · 8分钟", detail: "图例展示人物、飞天与植物纹样的线条组织，可用于观察而非直接复制原作。" },
      { type: "资料", title: "苏州园林空间观察表", meta: "观察资料 · 6分钟", detail: "观察表包括空间开合、视线、路径、水体与植物配置五个维度。" }
    ],
    "红色教育": [
      { type: "任务", title: "革命旧址证据寻访", meta: "现场任务 · 预计35分钟", detail: "结合旧址空间与史料寻找历史事件的现场证据。", steps: ["阅读事件背景", "定位三处现场证据", "说明证据与史料的关系"] },
      { type: "任务", title: "红色家书朗读与讨论", meta: "小组任务 · 预计25分钟", detail: "选择一封红色家书，分析写作背景、情感和价值选择。", steps: ["分角色朗读", "圈画关键词句", "完成小组观点卡"] },
      { type: "作业", title: "井冈山道路主题短文", meta: "课后作业 · 600字", detail: "结合现场学习解释井冈山道路形成的历史条件与现实启示。" },
      { type: "作业", title: "革命人物口述讲解稿", meta: "表达作业 · 3分钟", detail: "选择一位历史人物，依据可靠史料完成三分钟口述讲解稿。" },
      { type: "测试", title: "井冈山历史知识测试", meta: "知识测试 · 1题示例", detail: "开展红色研学时，判断历史结论最可靠的依据是什么？", options: ["网络传言", "史料与现场证据互证", "个人想象", "单张照片"], answer: 1 },
      { type: "测试", title: "旧址参观规范测试", meta: "安全测试 · 1题示例", detail: "参观革命旧址时应当怎么做？", options: ["大声喧哗", "触摸展品", "遵守讲解和保护要求", "脱离小组"], answer: 2 },
      { type: "资料", title: "井冈山革命史时间轴", meta: "史料资料 · 10分钟", detail: "时间轴按重要会议、战斗与根据地建设梳理历史脉络，阅读时注意事件之间的因果联系。" },
      { type: "资料", title: "红色研学史料使用指南", meta: "方法资料 · 7分钟", detail: "指南介绍史料来源判断、不同材料互证和避免脱离历史语境的方法。" }
    ],
    "社会实践": [
      { type: "任务", title: "完成社区公共空间调查", meta: "实践任务 · 预计40分钟", detail: "观察社区公共空间的使用人群、设施和实际问题。", steps: ["确定观察范围", "记录不同时段使用情况", "提出一项改进建议"] },
      { type: "任务", title: "开展职业人物访谈", meta: "访谈任务 · 预计30分钟", detail: "围绕工作内容、能力要求和职业责任完成一次结构化访谈。", steps: ["征得受访者同意", "按提纲完成访谈", "整理要点并核对表述"] },
      { type: "作业", title: "社区调查数据报告", meta: "课后作业 · 图表报告", detail: "将观察或问卷数据整理成图表，并提出有证据支持的结论。" },
      { type: "作业", title: "志愿服务反思日志", meta: "课后作业 · 500字", detail: "记录服务对象、具体行动、遇到的问题和下次改进方向。" },
      { type: "测试", title: "访谈方法测试", meta: "方法测试 · 1题示例", detail: "进行人物访谈前，首先应当做什么？", options: ["直接录音", "征得同意并说明用途", "替对方回答", "公开个人信息"], answer: 1 },
      { type: "测试", title: "实践安全测试", meta: "安全测试 · 1题示例", detail: "小组外出调查时最重要的组织要求是什么？", options: ["单独行动", "保持联络并按集合时间返回", "前往未开放区域", "忽略天气"], answer: 1 },
      { type: "资料", title: "半结构化访谈提纲模板", meta: "工具资料 · 5分钟", detail: "模板包括开场说明、核心问题、追问和结束确认，可根据不同职业对象调整。" },
      { type: "资料", title: "社会调查隐私保护指南", meta: "必读资料 · 8分钟", detail: "收集信息应遵循知情同意、最少必要、匿名处理和不公开敏感信息等原则。" }
    ]
  };

  function themePackageItems(name, publicOnly) {
    const items = themeVideos[name].map(function (video) {
      return { type: "视频", title: video.title, meta: courseVideos[video.course].label, video: video };
    }).concat(themeActivities[name]);
    return publicOnly ? items.filter(function (item) { return item.type === "视频" || item.type === "资料"; }) : items;
  }
  const discoverCategoryCatalogs = {
    "历史文化": { count: 45, topics: ["土尔扈特东归", "丝绸之路", "长城防御体系", "故宫建筑", "京杭大运河", "古代交通", "民族交融", "历史文献", "文化遗产保护"], tasks: ["史料对读", "路线复原", "建筑测绘", "人物档案", "时间轴整理"] },
    "自然科学": { count: 38, topics: ["森林生态系统", "植物分类", "动物痕迹", "地质观察", "水质监测", "气象记录", "生物多样性", "自然保护"], tasks: ["样方调查", "物种记录", "数据分析", "观察日志"] },
    "科技前沿": { count: 25, topics: ["运载火箭", "卫星应用", "机器人控制", "人工智能", "新能源技术"], tasks: ["结构拆解", "程序调试", "模型制作", "工程评审", "实验记录"] },
    "艺术人文": { count: 30, topics: ["敦煌壁画", "苏州园林", "传统纹样", "非遗工艺", "昆曲表演", "城市速写"], tasks: ["作品赏析", "线稿临摹", "空间观察", "工艺体验", "成果创作"] },
    "红色教育": { count: 22, topics: ["井冈山道路", "革命旧址", "红色家书", "历史人物", "长征精神", "家国情怀"], tasks: ["史料研读", "现场教学", "主题演讲", "小组研讨"] },
    "社会实践": { count: 18, topics: ["社区调查", "路线规划", "志愿服务", "职业体验", "团队协作", "成果汇报"], tasks: ["访谈提纲", "实地走访", "安全预案", "数据整理", "方案展示"] }
  };
  const popularProjectCatalog = [
    { title: "土尔扈特部回归", category: "历史文化", location: "内蒙古 · 承德", duration: "7天6夜", rating: "4.8", route: "/course/1", photo: photos.chengde },
    { title: "丝绸之路探险", category: "历史文化", location: "甘肃 · 新疆", duration: "10天9夜", rating: "4.9", route: "/course/2", photo: photos.dunhuang },
    { title: "神农架生态探秘", category: "自然科学", location: "湖北 · 神农架", duration: "5天4夜", rating: "4.7", route: "/course/3", photo: photos.shennongjia },
    { title: "航天科技之旅", category: "科技前沿", location: "海南 · 文昌", duration: "4天3夜", rating: "4.9", route: "/course/4", photo: photos.wenchang },
    { title: "承德世界遗产研学", category: "历史文化", location: "河北 · 承德", duration: "3天2夜", rating: "4.9", route: "/base/b1", photo: photos.chengde },
    { title: "敦煌壁画艺术研学", category: "艺术人文", location: "甘肃 · 敦煌", duration: "5天4夜", rating: "4.8", route: "/base/b2", photo: photos.dunhuang },
    { title: "神农架自然科考", category: "自然科学", location: "湖北 · 神农架", duration: "4天3夜", rating: "4.7", route: "/base/b3", photo: photos.shennongjia },
    { title: "文昌航天科普营", category: "科技前沿", location: "海南 · 文昌", duration: "3天2夜", rating: "4.9", route: "/base/b4", photo: photos.wenchang },
    { title: "井冈山红色研学", category: "红色教育", location: "江西 · 井冈山", duration: "4天3夜", rating: "4.8", route: "/base/b5", photo: photos.jinggangshan },
    { title: "苏州园林文化研学", category: "艺术人文", location: "江苏 · 苏州", duration: "3天2夜", rating: "4.7", route: "/base/b6", photo: photos.suzhou }
  ];
  const zhiTaskConfigs = {
    "历史知识测验": { points: 200, start: 60, steps: ["土尔扈特部起源", "东归路线选择", "承德觐见过程", "历史影响分析", "现代意义思考"] },
    "绘制东归路线图": { points: 250, start: 0, steps: ["收集历史资料", "标注关键地点", "绘制路线图", "添加说明文字"] },
    "小组分享演讲": { points: 180, start: 0, steps: ["确定分享主题", "整理小组分工", "完成演讲提纲", "进行计时排练"] }
  };
  const zhiKnowledgeTopics = [
    { title: "土尔扈特东归", text: "1771年，土尔扈特部在渥巴锡率领下踏上东归之路，体现了深厚的家国情怀与民族凝聚力。" },
    { title: "承德会见", text: "乾隆皇帝在承德接见东归部众，并对其安置作出安排。承德因此成为理解这段历史的重要研学现场。" },
    { title: "草原生态", text: "草原生态调查需要同时记录植物、动物活动痕迹、土壤和天气，避免只关注单一物种。" }
  ];
  let selectedHomeTab = "推荐";
  const aiGuideHistory = [];

  const guideKnowledge = [
    { keys: ["承德", "土尔扈特", "避暑山庄"], answer: "承德适合历史文化研学。建议安排普陀宗乘之庙、避暑山庄与土尔扈特东归专题学习，2至3天较合适。参观宗教建筑时请保持安静，不触摸文物。" },
    { keys: ["敦煌", "丝绸之路", "莫高窟"], answer: "敦煌路线可围绕莫高窟、鸣沙山月牙泉和丝绸之路史展开。莫高窟需提前实名预约，壁画洞窟内通常禁止拍照，并要注意防晒、补水和昼夜温差。" },
    { keys: ["神农架", "生态", "自然"], answer: "神农架适合生态科考，可安排植物样方观察、动物痕迹识别和自然笔记。请沿开放步道活动，不投喂野生动物，雨天准备防滑鞋与轻便雨具。" },
    { keys: ["文昌", "航天", "科技"], answer: "文昌航天研学可组合航天科普中心、发射场专题课程与火箭原理实验。发射活动受任务和天气影响，行程应预留机动时间，并遵守现场拍摄与安检规定。" },
    { keys: ["井冈山", "红色", "革命"], answer: "井冈山红色研学建议以革命博物馆、黄洋界和旧址现场教学为主线，加入史料研读与情景任务。山区天气变化快，需要准备防滑鞋和薄外套。" },
    { keys: ["苏州", "园林", "艺术"], answer: "苏州人文研学可从拙政园的借景、框景和水系布局入手，再结合苏绣或昆曲体验。热门园林建议早场预约，观察时可用速写或摄影记录空间层次。" },
    { keys: ["准备", "装备", "带什么", "清单"], answer: "通用研学清单包括身份证件、学生证、水杯、充电宝、纸笔、常用药、防晒用品和舒适防滑鞋。户外线路还需雨具与薄外套，贵重物品尽量精简。" },
    { keys: ["安全", "注意"], answer: "研学途中请服从带队老师安排，不脱离小组；提前保存领队电话和集合点；饮食过敏、慢性病及用药情况应在出发前告知组织方。遇到突发情况先保证人身安全并联系工作人员。" },
    { keys: ["推荐", "适合", "选择"], answer: "偏爱历史可选承德或敦煌，喜欢自然观察可选神农架，关注科技可选文昌，红色教育适合井冈山，建筑与传统艺术方向适合苏州。告诉我出发城市、天数、年龄和兴趣，我可以继续细化。" }
  ];

  const extraCommunityPosts = [
    {
      id: "extra-dunhuang", category: "作品", user: "林语桐", time: "刚刚", location: "甘肃·敦煌", likes: 146,
      content: "第一次在老师指导下临摹敦煌壁画。先观察线条和矿物颜色，再理解飞天形象背后的文化交流，画完才发现每一笔都有历史。",
      tags: ["敦煌艺术", "壁画临摹", "丝路文化"],
      photo: { url: "./assets/images/local/img-21-b5bc3010f8.jpg", source: "https://unsplash.com/photos/photo-1500534314209-a25ddb2bd429", label: "敦煌沙漠研学实景" }
    },
    {
      id: "extra-forest", category: "日志", user: "周景行", time: "18分钟前", location: "湖北·神农架", likes: 98,
      content: "今天完成了森林样方调查，记录乔木胸径、林下植物和环境湿度。把课本里的生态系统变成了可以测量的数据。",
      tags: ["生态科考", "植物调查", "自然笔记"],
      photo: { url: "./assets/images/local/img-22-c8d9ffb7b4.jpg", source: "https://unsplash.com/photos/photo-1441974231531-c6227db76b6e", label: "森林生态调查实景" }
    },
    {
      id: "extra-space", category: "打卡", user: "许星澜", time: "35分钟前", location: "海南·文昌", likes: 312,
      content: "从结构图到现场观察，终于理解了火箭各级分离和发射窗口的意义。倒计时响起时，大家都屏住了呼吸。",
      tags: ["航天科技", "火箭课堂", "工程实践"],
      photo: { url: "./assets/images/local/img-23-535d9f29e4.jpg", source: "https://unsplash.com/photos/photo-1517976487492-5750f3195933", label: "火箭升空实景" }
    },
    {
      id: "extra-suzhou", category: "作品", user: "沈知夏", time: "1小时前", location: "江苏·苏州", likes: 175,
      content: "在拙政园寻找借景、框景和对景，沿着水岸走一遍后重新画了空间草图。园林真的像一幅可以走进去的画。",
      tags: ["园林艺术", "建筑观察", "研学速写"],
      photo: { url: "./assets/images/local/img-24-7c64fc7a7c.jpg", source: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden_in_Suzhou_(9429309522).jpg", label: "苏州拙政园水景实拍" }
    },
    {
      id: "extra-jinggang", category: "日志", user: "顾明远", time: "2小时前", location: "江西·井冈山", likes: 221,
      content: "沿着革命旧址研学路线完成了史料任务卡。现场地形和历史材料结合起来后，对当年的选择有了更具体的理解。",
      tags: ["红色研学", "史料研读", "井冈山"],
      photo: { url: "./assets/images/local/img-25-ac539e5cb1.jpg", source: "https://commons.wikimedia.org/wiki/File:Revolutionary_pathway_through_Jingangshan_Mountains_(29947803425).jpg", label: "井冈山研学步道实拍" }
    },
    {
      id: "extra-team", category: "日志", user: "唐可欣", time: "3小时前", location: "辽宁·铁岭高中", likes: 84,
      content: "今天走进铁岭高中课堂，和当地同学一起听课、交流学习方法。大家分享了课堂笔记和研学收获，这次校园交流让我认识了许多新朋友。",
      tags: ["校园交流", "课堂观察", "同伴学习"],
      photo: { url: "./assets/images/campus-classroom.jpg", source: "https://commons.wikimedia.org/wiki/File:A_view_of_a_classroom_in_Tieling_High_School_01.jpg", label: "中国高中课堂交流实景" }
    },
    {
      id: "extra-great-wall", category: "日志", user: "程一诺", time: "4小时前", location: "北京·慕田峪", likes: 203,
      content: "沿长城记录敌楼间距和坡度变化后，我们尝试解释城墙为什么顺着山势修建。实地测量让建筑防御知识变得特别直观。",
      tags: ["长城研学", "建筑测绘", "历史地理"],
      photo: { url: "./assets/images/local/img-27-9d408bdecc.jpg", source: "https://unsplash.com/photos/photo-1508804185872-d7badad00f7d", label: "中国长城实景" }
    },
    {
      id: "extra-archaeology", category: "问答", user: "孟书言", time: "5小时前", location: "陕西·西安", likes: 67,
      content: "考古课堂里看到不同形制的陶器残片，老师让我们从纹饰、胎质和用途判断年代。大家有什么观察文物细节的好方法吗？",
      tags: ["考古课堂", "文物辨识", "学习问答"],
      photo: { url: "./assets/images/local/img-28-8de0559127.jpg", source: "https://unsplash.com/photos/photo-1564399579883-451a5d44ec08", label: "考古文物观察实景" }
    },
    {
      id: "extra-robot", category: "作品", user: "陆远航", time: "6小时前", location: "上海·科技实践中心", likes: 188,
      content: "小组完成了巡线机器人的结构搭建和程序调试。它终于能沿着设定路线稳定行驶，这是我们反复修改参数后的成果。",
      tags: ["机器人", "工程实践", "成果展示"],
      photo: { url: "./assets/images/local/img-29-8c578283a2.jpg", source: "https://unsplash.com/photos/photo-1485827404703-89b55fcc595e", label: "机器人科技实践实景" }
    },
    {
      id: "extra-bird", category: "日志", user: "叶清和", time: "昨天", location: "云南·高黎贡山", likes: 119,
      content: "清晨沿样线完成第一次鸟类观察，记录叫声、羽色和活动高度。保持安静后，真的能发现森林里更多细节。",
      tags: ["鸟类观察", "生物多样性", "自然记录"],
      photo: { url: "./assets/images/local/img-30-0137aef3d7.jpg", source: "https://unsplash.com/photos/photo-1444464666168-49d633b86797", label: "野生鸟类观察实景" }
    },
    {
      id: "extra-ocean", category: "打卡", user: "苏沐阳", time: "昨天", location: "海南·海洋研学基地", likes: 274,
      content: "完成珊瑚礁生态课程打卡。观察记录之前，导师反复强调不触碰珊瑚、不追逐海洋生物，保护比拍到照片更重要。",
      tags: ["海洋生态", "珊瑚保护", "基地打卡"],
      photo: { url: "./assets/images/local/img-31-08c9125a57.jpg", source: "https://unsplash.com/photos/photo-1546026423-cc4642628d2b", label: "珊瑚礁生态实景" }
    },
    {
      id: "extra-canal", category: "作品", user: "江晚晴", time: "2天前", location: "浙江·杭州", likes: 136,
      content: "沿运河观察桥梁、码头和沿岸街区后完成了水岸空间速写。我把不同年代的城市功能用三种颜色标在画面里。",
      tags: ["大运河", "城市观察", "研学速写"],
      photo: { url: "./assets/images/local/img-32-fed8726dc7.jpg", source: "https://commons.wikimedia.org/wiki/File:Kaiserkanal_Grand_Canal_Hangzhou_China_(45133988404).jpg", label: "杭州京杭大运河实景" }
    }
  ];
  let selectedCommunityCategory = "全部";

  function decodedPlaceholder(src) {
    if (!src || !src.startsWith("data:image/svg+xml")) return "";
    try {
      return decodeURIComponent(src.slice(src.indexOf(",") + 1));
    } catch (_error) {
      return src;
    }
  }

  function findPhoto(src) {
    const decoded = decodedPlaceholder(src);
    if (!decoded) return null;
    for (const [pattern, photo] of directRules) {
      if (pattern.test(decoded)) return photo;
    }
    return null;
  }

  function applyPhoto(img) {
    if (!(img instanceof HTMLImageElement) || img.dataset.realPhotoApplied) return;
    const photo = findPhoto(img.getAttribute("src") || "");
    if (!photo) return;

    img.dataset.realPhotoApplied = "true";
    img.dataset.source = photo.source;
    img.alt = photo.label;
    markImageFast(img, true);
    img.src = photo.url;
    img.addEventListener("error", function onError() {
      img.removeEventListener("error", onError);
      img.dataset.realPhotoApplied = "failed";
    });
  }

  function markImageFast(img, priority) {
    if (!(img instanceof HTMLImageElement)) return;
    img.decoding = "async";
    img.loading = "eager";
    img.referrerPolicy = "strict-origin-when-cross-origin";
    if ("fetchPriority" in img) {
      try { img.fetchPriority = priority ? "high" : "auto"; } catch (_error) {}
    }
    img.style.setProperty("opacity", "1", "important");
    img.style.setProperty("visibility", "visible", "important");
  }

  function preloadImageUrl(url) {
    if (!url) return;
    const exists = Array.from(document.head.querySelectorAll('link[rel="preload"][as="image"]')).some(function (link) {
      return link.href === url;
    });
    if (exists) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }

  function preloadCriticalImages() {
    [
      photos.chengde?.url,
      photos.dunhuang?.url,
      photos.shennongjia?.url,
      photos.wenchang?.url,
      photos.grassland?.url,
      photos.yinxu?.url,
      photos.terracotta?.url,
      "./assets/images/donggui-team-1.jpg",
      "./assets/images/donggui-team-2.jpg",
      "./assets/images/donggui-team-3.jpg"
    ].filter(Boolean).forEach(preloadImageUrl);
  }

  const localImagePool = [
    "./assets/images/local/img-01-a183044718.jpg",
    "./assets/images/local/img-02-d71b8c647c.jpg",
    "./assets/images/local/img-03-7ad34f8845.jpg",
    "./assets/images/local/img-04-dd40eac031.jpg",
    "./assets/images/local/img-05-e790ab6274.png",
    "./assets/images/local/img-06-6a7b5e875e.jpg",
    "./assets/images/local/img-07-9fbbe20e09.jpg",
    "./assets/images/local/img-08-e1a961b81c.jpg",
    "./assets/images/local/img-09-721dfa4afb.jpg",
    "./assets/images/local/img-10-ea1b29c392.jpg",
    "./assets/images/local/img-11-8fe1e93a3f.jpg",
    "./assets/images/local/img-12-42a5b04af9.jpg",
    "./assets/images/local/img-13-c1fd0a6461.jpg",
    "./assets/images/local/img-14-c2a34c3d80.jpg",
    "./assets/images/local/img-15-6914c5c358.jpg",
    "./assets/images/local/img-16-5decddeb47.jpg",
    "./assets/images/local/img-17-fdff9c975f.jpg",
    "./assets/images/local/img-18-0aeaf0b31c.jpg",
    "./assets/images/local/img-19-724e6a867c.jpg",
    "./assets/images/local/img-20-cdbe1d416d.jpg",
    "./assets/images/local/img-21-b5bc3010f8.jpg",
    "./assets/images/local/img-22-c8d9ffb7b4.jpg",
    "./assets/images/local/img-23-535d9f29e4.jpg",
    "./assets/images/local/img-24-7c64fc7a7c.jpg",
    "./assets/images/local/img-25-ac539e5cb1.jpg",
    "./assets/images/local/img-27-9d408bdecc.jpg",
    "./assets/images/local/img-28-8de0559127.jpg",
    "./assets/images/local/img-29-8c578283a2.jpg",
    "./assets/images/local/img-30-0137aef3d7.jpg",
    "./assets/images/local/img-31-08c9125a57.jpg",
    "./assets/images/local/img-32-fed8726dc7.jpg"
  ];

  const semanticLocalImages = [
    { keywords: ["Chengde", "承德", "Putuo", "避暑山庄", "土尔扈特", "历史"], image: photos.chengde?.url },
    { keywords: ["Dunhuang", "Mogao", "敦煌", "丝绸", "壁画"], image: photos.dunhuang?.url },
    { keywords: ["Shennongjia", "forest", "森林", "神农架", "生态", "植物"], image: photos.shennongjia?.url },
    { keywords: ["Wenchang", "rocket", "space", "航天", "火箭", "文昌"], image: photos.wenchang?.url },
    { keywords: ["Grassland", "Ewenki", "草原", "蒙古", "牛羊"], image: photos.grassland?.url },
    { keywords: ["Suzhou", "Garden", "园林", "苏州", "拙政园"], image: photos.suzhou?.url },
    { keywords: ["Jinggangshan", "井冈山", "红色"], image: photos.jinggangshan?.url },
    { keywords: ["Canal", "Hangzhou", "杭州", "运河"], image: "./assets/images/local/img-32-fed8726dc7.jpg" },
    { keywords: ["badge", "徽章"], image: photos.badge?.url },
    { keywords: ["bookmark", "书签", "书籍"], image: photos.bookmark?.url },
    { keywords: ["notebook", "笔记"], image: photos.notebook?.url },
    { keywords: ["hanfu", "汉服", "传统服饰"], image: photos.hanfu?.url },
    { keywords: ["tshirt", "文化衫"], image: photos.tshirt?.url },
    { keywords: ["gift", "礼品"], image: photos.giftbox?.url },
    { keywords: ["team", "classroom", "小组", "课堂", "学生", "研学成果"], image: photos.teamwork?.url },
    { keywords: ["map", "路线图", "地图"], image: photos.mapWorkshop?.url },
    { keywords: ["robot", "机器人"], image: "./assets/images/local/img-29-8c578283a2.jpg" },
    { keywords: ["bird", "鸟"], image: "./assets/images/local/img-30-0137aef3d7.jpg" },
    { keywords: ["ocean", "coral", "海洋", "珊瑚"], image: "./assets/images/local/img-31-08c9125a57.jpg" }
  ].filter(function (item) { return item.image; });

  function contextTextForImage(img) {
    const card = img.closest("article,section,li,button,.card,.rounded-2xl,.rounded-xl,div");
    return [
      img.alt,
      img.getAttribute("src") || "",
      img.currentSrc || "",
      card ? card.textContent : ""
    ].join(" ");
  }

  const semanticCoverRules = [
    { pattern: /土尔扈特部回归|土尔扈特|承德避暑山庄|承德觐见|承德世界遗产|承德研学基地/, photo: photos.chengde },
    { pattern: /丝绸之路探险|丝绸之路|敦煌|莫高窟|壁画|河西走廊/, photo: photos.dunhuang },
    { pattern: /神农架生态探秘|神农架|生态科考|森林|植物|野生动物/, photo: photos.shennongjia },
    { pattern: /航天科技之旅|文昌|航天|火箭|发射场|科技前沿/, photo: photos.wenchang },
    { pattern: /井冈山|红色研学|革命旧址/, photo: photos.jinggangshan },
    { pattern: /苏州|园林|拙政园|园林文化/, photo: photos.suzhou },
    { pattern: /草原|蒙古包|游牧|牛羊/, photo: photos.grassland },
    { pattern: /路线图|地图|东归路线/, photo: photos.routeMap },
    { pattern: /小组合作|研学成果|课堂|同学|校园交流/, photo: photos.teamwork },
    { pattern: /徽章|勋章/, photo: photos.badge },
    { pattern: /书签|书籍/, photo: photos.bookmark },
    { pattern: /笔记|日记本/, photo: photos.notebook },
    { pattern: /汉服|传统服饰/, photo: photos.hanfu },
    { pattern: /文化衫|T恤/, photo: photos.tshirt },
    { pattern: /礼品|礼盒/, photo: photos.giftbox }
  ];

  function semanticPhotoForContext(context) {
    const text = String(context || "");
    const rule = semanticCoverRules.find(function (item) { return item.pattern.test(text); });
    return rule ? rule.photo : null;
  }

  function isContentImage(img) {
    if (!(img instanceof HTMLImageElement)) return false;
    if (img.closest(".extra-post-author,header,[class*='avatar'],[class*='Avatar']")) return false;
    const classes = String(img.className || "");
    if (/rounded-full|avatar|icon|logo/i.test(classes)) return false;
    const rect = img.getBoundingClientRect ? img.getBoundingClientRect() : null;
    if (rect && rect.width <= 52 && rect.height <= 52) return false;
    return true;
  }

  function pickUnusedLocalImage(preferred, used) {
    if (!preferred) return "";
    const preferredAbsolute = new URL(preferred, window.location.href).href;
    if (!used || !used.has(preferredAbsolute)) return preferred;
    for (const candidate of localImagePool) {
      const absolute = new URL(candidate, window.location.href).href;
      if (!used.has(absolute)) return candidate;
    }
    return preferred;
  }

  function localImageForRemote(url, used, context) {
    const text = String(url || "");
    if (!/(picsum\.photos|images\.unsplash\.com|upload\.wikimedia\.org|commons\.wikimedia\.org)/.test(text)) return "";
    const haystack = String(context || "") + " " + text;
    const semantic = semanticLocalImages.find(function (item) {
      return item.keywords.some(function (keyword) { return haystack.toLowerCase().includes(String(keyword).toLowerCase()); });
    });
    if (semantic?.image) return pickUnusedLocalImage(semantic.image, used);
    let hash = 0;
    for (let i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
    const start = hash % localImagePool.length;
    for (let offset = 0; offset < localImagePool.length; offset += 1) {
      const candidate = localImagePool[(start + offset) % localImagePool.length];
      const absolute = new URL(candidate, window.location.href).href;
      if (!used || !used.has(absolute)) return candidate;
    }
    return localImagePool[start] || "";
  }

  function localizeRemoteImages(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const used = new Set();
    scope.querySelectorAll("img").forEach(function (img) {
      if (!(img instanceof HTMLImageElement)) return;
      if (/(assets\/images\/local\/|assets\/images\/donggui-team-)/.test(img.src || "")) used.add(img.src);
    });
    scope.querySelectorAll("img").forEach(function (img) {
      if (!isContentImage(img)) return;
      if (/api\.dicebear\.com/.test(img.src || "")) return;
      const context = contextTextForImage(img);
      const semanticPhoto = semanticPhotoForContext(context);
      let local = semanticPhoto?.url || "";
      if (!local) local = localImageForRemote(img.currentSrc || img.src || img.getAttribute("src") || "", used, context);
      if (!local) return;
      const absoluteLocal = new URL(local, window.location.href).href;
      img.removeAttribute("srcset");
      img.removeAttribute("sizes");
      if (semanticPhoto?.label) img.alt = semanticPhoto.label;
      markImageFast(img, true);
      if (img.src !== absoluteLocal) img.src = local;
      used.add(absoluteLocal);
      img.dataset.localImageReplaced = "true";
    });
  }

  function normalizeSvgUrl(src) {
    if (!src || !src.startsWith("data:image/svg+xml")) return src;
    try {
      const payload = src.slice(src.indexOf(",") + 1);
      const svg = decodeURIComponent(payload);
      return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    } catch (_error) {
      return src;
    }
  }

  function avatarDataUrl(name) {
    const label = (name || "用户").trim();
    const initial = label.replace(/^参与者/, "").slice(0, 1) || "知";
    const palettes = [
      ["#0f766e", "#14b8a6", "#ccfbf1"], ["#1d4ed8", "#38bdf8", "#dbeafe"],
      ["#be123c", "#fb7185", "#ffe4e6"], ["#7c2d12", "#f97316", "#ffedd5"],
      ["#4c1d95", "#8b5cf6", "#ede9fe"], ["#166534", "#22c55e", "#dcfce7"]
    ];
    let hash = 0;
    for (let i = 0; i < label.length; i += 1) hash = (hash * 31 + label.charCodeAt(i)) >>> 0;
    const colors = palettes[hash % palettes.length];
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">' +
      '<defs><linearGradient id="g" x1="26" y1="18" x2="176" y2="184" gradientUnits="userSpaceOnUse"><stop stop-color="' + colors[1] + '"/><stop offset="1" stop-color="' + colors[0] + '"/></linearGradient>' +
      '<radialGradient id="r" cx="35%" cy="25%" r="70%"><stop stop-color="white" stop-opacity=".52"/><stop offset=".58" stop-color="white" stop-opacity=".08"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient>' +
      '<filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f172a" flood-opacity=".18"/></filter></defs>' +
      '<rect width="200" height="200" rx="100" fill="url(#g)"/><circle cx="58" cy="44" r="58" fill="url(#r)"/>' +
      '<circle cx="100" cy="100" r="75" fill="rgba(255,255,255,.16)" stroke="rgba(255,255,255,.48)" stroke-width="3" filter="url(#s)"/>' +
      '<circle cx="154" cy="46" r="18" fill="' + colors[2] + '" opacity=".38"/><circle cx="45" cy="156" r="14" fill="white" opacity=".18"/>' +
      '<text x="100" y="122" text-anchor="middle" font-family="Microsoft YaHei,PingFang SC,Arial,sans-serif" font-size="76" font-weight="800" fill="white" letter-spacing="0">' + initial + '</text></svg>';
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function stabilizeImage(img) {
    if (!(img instanceof HTMLImageElement)) return;
    applyPhoto(img);
    if (img.dataset.realPhotoApplied === "true") return;

    const classes = typeof img.className === "string" ? img.className : "";
    if (classes.includes("rounded-full") && !img.dataset.avatarApplied) {
      img.dataset.avatarApplied = "true";
      img.src = avatarDataUrl(img.alt);
      return;
    }

    const src = img.getAttribute("src") || "";
    if (src.startsWith("data:image/svg+xml") && !src.includes("charset=UTF-8") && !img.dataset.svgNormalized) {
      img.dataset.svgNormalized = "true";
      img.src = normalizeSvgUrl(src);
    }
  }

  function compactLearningChart(root) {
    const chartHeights = {
      "本周学习时长": 96,
      "课程完成情况": 132,
      "积分获取趋势": 132
    };
    const labels = root.querySelectorAll("p");
    labels.forEach(function (label) {
      const canvasHeight = chartHeights[label.textContent.trim()];
      if (!canvasHeight) return;
      const chartBox = label.parentElement;
      if (!chartBox || chartBox.dataset.compactChart) return;
      chartBox.dataset.compactChart = "true";
      chartBox.classList.add("compact-learning-chart");
      chartBox.style.setProperty("--chart-height", canvasHeight + "px");
      chartBox.style.height = (canvasHeight + 22) + "px";
      chartBox.style.maxHeight = (canvasHeight + 22) + "px";
      chartBox.style.overflow = "hidden";
      const canvas = chartBox.querySelector("canvas");
      if (canvas) {
        canvas.style.height = canvasHeight + "px";
        canvas.style.maxHeight = canvasHeight + "px";
      }
    });
  }

  let amapConfigPromise;

  function loadAmap(config) {
    if (window.AMap) return Promise.resolve(window.AMap);
    window._AMapSecurityConfig = { securityJsCode: config.amapSecurityCode || "" };
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = "https://webapi.amap.com/maps?v=2.0&key=" + encodeURIComponent(config.amapJsKey);
      script.onload = function () { resolve(window.AMap); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  let leafletPromise;

  function loadLeafletMap() {
    if (window.L) return Promise.resolve(window.L);
    if (leafletPromise) return leafletPromise;
    leafletPromise = new Promise(function (resolve, reject) {
      const cssHref = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      if (!document.querySelector('link[href="' + cssHref + '"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssHref;
        document.head.appendChild(link);
      }
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = function () { resolve(window.L); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return leafletPromise;
  }

  const amapStudyPlaces = [
    { name: "承德研学基地", city: "河北·承德", category: "历史文化", position: [116.65, 40.95], left: 69, top: 23, courses: 8, status: "已点亮" },
    { name: "敦煌研学基地", city: "甘肃·敦煌", category: "艺术人文", position: [94.66, 40.14], left: 20, top: 30, courses: 6, status: "已点亮" },
    { name: "神农架生态基地", city: "湖北·神农架", category: "自然科学", position: [110.68, 31.75], left: 58, top: 56, courses: 7, status: "已点亮" },
    { name: "文昌航天基地", city: "海南·文昌", category: "科技前沿", position: [110.76, 19.62], left: 61, top: 83, courses: 5, status: "待探索" },
    { name: "井冈山研学基地", city: "江西·井冈山", category: "红色教育", position: [114.17, 26.57], left: 67, top: 67, courses: 6, status: "待探索" },
    { name: "苏州园林基地", city: "江苏·苏州", category: "艺术人文", position: [120.62, 31.32], left: 81, top: 52, courses: 4, status: "已点亮" },
    { name: "北京历史文化基地", city: "北京", category: "历史文化", position: [116.4, 39.9], left: 69, top: 29, courses: 9, status: "已点亮" },
    { name: "西安古都研学基地", city: "陕西·西安", category: "历史文化", position: [108.94, 34.34], left: 53, top: 48, courses: 7, status: "已点亮" },
    { name: "上海科技研学基地", city: "上海", category: "科技前沿", position: [121.47, 31.23], left: 85, top: 55, courses: 8, status: "已点亮" },
    { name: "杭州人文研学基地", city: "浙江·杭州", category: "艺术人文", position: [120.15, 30.27], left: 80, top: 61, courses: 5, status: "待探索" },
    { name: "成都自然研学基地", city: "四川·成都", category: "自然科学", position: [104.06, 30.67], left: 42, top: 60, courses: 6, status: "待探索" },
    { name: "昆明社会实践基地", city: "云南·昆明", category: "社会实践", position: [102.83, 25.04], left: 41, top: 76, courses: 5, status: "待探索" },
    { name: "拉萨文化研学基地", city: "西藏·拉萨", category: "艺术人文", position: [91.11, 29.65], left: 13, top: 61, courses: 4, status: "待探索" },
    { name: "哈尔滨自然研学基地", city: "黑龙江·哈尔滨", category: "自然科学", position: [126.64, 45.75], left: 87, top: 14, courses: 5, status: "待探索" },
    { name: "青岛社会实践基地", city: "山东·青岛", category: "社会实践", position: [120.38, 36.07], left: 82, top: 39, courses: 4, status: "待探索" }
  ];

  function createAmapShell(mapElement) {
    const shell = document.createElement("div");
    shell.className = "amap-study-shell";
    shell.innerHTML = '<div class="amap-search"><span aria-hidden="true">⌕</span><input type="search" aria-label="搜索研学地点" placeholder="搜索地点、课程或城市"><button type="button" aria-label="清除搜索" title="清除">×</button></div>' +
      '<div class="amap-filter" aria-label="地点分类"><button type="button" class="is-active" data-category="全部">全部</button><button type="button" data-category="历史文化">历史</button><button type="button" data-category="自然科学">自然</button><button type="button" data-category="科技前沿">科技</button><button type="button" data-category="艺术人文">人文</button><button type="button" data-category="红色教育">红色</button><button type="button" data-category="社会实践">实践</button></div>' +
      '<div class="amap-canvas amap-fallback" aria-label="研学地点地图"><div class="amap-land"></div><i class="amap-road road-a"></i><i class="amap-road road-b"></i><i class="amap-road road-c"></i><div class="amap-place-layer"></div><small class="amap-map-source">高德式研学地图</small></div>' +
      '<div class="amap-tools"><button type="button" data-action="locate" aria-label="定位" title="定位">◎</button><button type="button" data-action="zoom-in" aria-label="放大" title="放大">+</button><button type="button" data-action="zoom-out" aria-label="缩小" title="缩小">−</button></div>' +
      '<div class="amap-search-results" hidden></div><div class="amap-place-panel" hidden><button type="button" class="amap-panel-close" aria-label="关闭地点详情">×</button><small></small><strong></strong><p></p><div></div><button type="button" class="amap-route-button">查看研学内容</button></div>' +
      '<div class="amap-status" aria-live="polite"></div>';
    const originalHost = mapElement.parentElement;
    mapElement.replaceWith(shell);
    Array.from(originalHost.children).forEach(function (child) { if (child !== shell) child.remove(); });
    const canvas = shell.querySelector(".amap-canvas");
    const layer = shell.querySelector(".amap-place-layer");
    const panel = shell.querySelector(".amap-place-panel");
    const status = shell.querySelector(".amap-status");
    let map = null;
    let category = "全部";
    let zoom = 1;

    function selectPlace(place) {
      panel.hidden = false;
      panel.querySelector("small").textContent = place.category + " · " + place.status;
      panel.querySelector("strong").textContent = place.name;
      panel.querySelector("p").textContent = place.city + " · " + place.courses + "项研学内容";
      panel.querySelector("div").textContent = place.status === "已点亮" ? "已完成现场打卡，可继续学习课程" : "尚未点亮，可查看课程并规划行程";
      panel.querySelector(".amap-route-button").onclick = function () { window.location.hash = "/discover"; };
      layer.querySelectorAll("button").forEach(function (button) { button.classList.toggle("is-selected", button.dataset.place === place.name); });
      if (map) map.focus(place);
    }

    function renderPlaces(query) {
      const keyword = (query || "").trim().toLowerCase();
      const matches = amapStudyPlaces.filter(function (place) { return (category === "全部" || place.category === category) && (!keyword || (place.name + place.city + place.category).toLowerCase().includes(keyword)); });
      layer.innerHTML = "";
      matches.forEach(function (place) {
        const marker = document.createElement("button");
        marker.type = "button";
        marker.className = "amap-fallback-marker" + (place.status === "已点亮" ? " is-visited" : "");
        marker.dataset.place = place.name;
        marker.style.left = place.left + "%";
        marker.style.top = place.top + "%";
        marker.setAttribute("aria-label", place.name);
        marker.innerHTML = '<span></span><b>' + place.name.replace("研学基地", "").replace("基地", "") + '</b>';
        marker.addEventListener("click", function () { selectPlace(place); });
        layer.appendChild(marker);
      });
      const results = shell.querySelector(".amap-search-results");
      results.innerHTML = matches.map(function (place) { return '<button type="button" data-place="' + place.name + '"><strong>' + place.name + '</strong><small>' + place.city + ' · ' + place.category + '</small></button>'; }).join("");
      results.hidden = !keyword;
      results.querySelectorAll("button").forEach(function (button) { button.addEventListener("click", function () { const place = amapStudyPlaces.find(function (item) { return item.name === button.dataset.place; }); results.hidden = true; if (place) selectPlace(place); }); });
    }

    const search = shell.querySelector(".amap-search input");
    function requireLoginForSearch(event) {
      if (window.zhixingApi?.user) return true;
      event?.preventDefault?.();
      event?.stopPropagation?.();
      window.zhixingApi?.openAuth();
      return false;
    }
    if (!hasRealAccount()) {
      search.readOnly = true;
      search.placeholder = "登录后可搜索地点、课程或城市";
      search.title = "登录后可使用搜索";
      search.addEventListener("focus", requireLoginForSearch);
      search.addEventListener("click", requireLoginForSearch);
      search.addEventListener("keydown", function (event) {
        if (["Tab", "Shift", "Control", "Alt", "Meta", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Escape"].includes(event.key)) return;
        requireLoginForSearch(event);
      });
    } else {
      search.addEventListener("input", function () { renderPlaces(search.value); });
    }
    shell.querySelector(".amap-search button").addEventListener("click", function () {
      if (!window.zhixingApi?.user) return requireLoginForSearch();
      search.value = "";
      renderPlaces("");
      search.focus();
    });
    shell.querySelectorAll(".amap-filter button").forEach(function (button) { button.addEventListener("click", function () { category = button.dataset.category; shell.querySelectorAll(".amap-filter button").forEach(function (item) { item.classList.toggle("is-active", item === button); }); renderPlaces(search.value); if (map) map.reset(); }); });
    panel.querySelector(".amap-panel-close").addEventListener("click", function () { panel.hidden = true; });
    shell.querySelector('[data-action="zoom-in"]').addEventListener("click", function () { if (map) map.zoomIn(); else { zoom = Math.min(1.35, zoom + .1); layer.style.transform = "scale(" + zoom + ")"; } });
    shell.querySelector('[data-action="zoom-out"]').addEventListener("click", function () { if (map) map.zoomOut(); else { zoom = Math.max(.85, zoom - .1); layer.style.transform = "scale(" + zoom + ")"; } });
    shell.querySelector('[data-action="locate"]').addEventListener("click", function () {
      if (!navigator.geolocation) { status.textContent = "当前设备不支持定位。"; return; }
      status.textContent = "正在定位...";
      navigator.geolocation.getCurrentPosition(function (position) { const point = [position.coords.longitude, position.coords.latitude]; status.textContent = "已获取当前位置"; if (map) map.locate(point); }, function () { status.textContent = "无法获取位置，请检查定位权限。"; });
    });
    renderPlaces("");
    return { shell: shell, canvas: canvas, selectPlace: selectPlace, setMap: function (value) { map = value; } };
  }

  async function initLeafletStudyMap(mapUi) {
    const L = await loadLeafletMap();
    mapUi.canvas.classList.remove("amap-fallback");
    mapUi.canvas.querySelectorAll(":scope > *").forEach(function (node) { if (!node.classList.contains("amap-map-source")) node.remove(); });
    const map = L.map(mapUi.canvas, { zoomControl: false, attributionControl: true }).setView([35, 105], 4);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    const userLayer = L.layerGroup().addTo(map);
    amapStudyPlaces.forEach(function (place) {
      L.marker([place.position[1], place.position[0]], { title: place.name }).addTo(map).on("click", function () { mapUi.selectPlace(place); });
    });
    mapUi.setMap({
      focus: function (place) { map.setView([place.position[1], place.position[0]], 8); },
      reset: function () { map.setView([35, 105], 4); },
      zoomIn: function () { map.zoomIn(); },
      zoomOut: function () { map.zoomOut(); },
      locate: function (point) { userLayer.clearLayers(); L.marker([point[1], point[0]], { title: "我的位置" }).addTo(userLayer); map.setView([point[1], point[0]], 12); }
    });
    setTimeout(function () { map.invalidateSize(); }, 80);
    mapUi.shell.querySelector(".amap-map-source").textContent = "真实地图 · OpenStreetMap";
  }

  function markAmap(root) {
    document.querySelectorAll("h2").forEach(function (heading) {
      if (!heading.textContent.includes("研学足迹地图")) return;
      heading.title = "真实地图数据来自高德瓦片底图";
      const section = heading.closest("section,div.bg-white");
      const mapElement = section?.querySelector(".leaflet-container");
      if (!mapElement || mapElement.dataset.amapHandled) return;
      mapElement.dataset.amapHandled = "true";
      mapElement.dataset.realMapProvider = "autonavi";
      if (!section.querySelector(".amap-map-source")) {
        const badge = document.createElement("small");
        badge.className = "amap-map-source";
        badge.textContent = "真实地图 · 高德瓦片";
        mapElement.parentElement?.appendChild(badge);
      }
    });
  }

  function renderHomeTabResults(row, tabName) {
    let results = row.parentElement.querySelector(":scope > .home-tab-results");
    if (!results) {
      results = document.createElement("div");
      results.className = "home-tab-results";
      row.insertAdjacentElement("afterend", results);
    }

    row.dataset.activeHomeTab = tabName;
    results.dataset.tab = tabName;
    results.innerHTML = homeTabCourses[tabName].map(function (course) {
      return '<button type="button" class="home-tab-course" data-course-id="' + course.id + '">' +
        '<img src="' + course.photo.url + '" alt="' + course.photo.label + '" loading="eager" decoding="async" fetchpriority="high" referrerpolicy="strict-origin-when-cross-origin">' +
        '<span><strong>' + course.title + '</strong><small>' + course.meta + '</small></span>' +
        '</button>';
    }).join("");

    results.querySelectorAll(".home-tab-course").forEach(function (courseButton) {
      courseButton.addEventListener("click", function () {
        window.location.hash = "/course/" + courseButton.dataset.courseId;
      });
    });
  }

  function syncHomeTabs(root) {
    if (!document.querySelector("h1") || document.querySelector("h1").textContent.trim() !== "知行研学") return;
    const names = Object.keys(homeTabCourses);
    const buttons = Array.from(root.querySelectorAll ? root.querySelectorAll("button") : []).filter(function (button) {
      return names.includes(button.textContent.trim());
    });
    if (buttons.length !== names.length) return;
    const row = buttons[0].parentElement;
    if (!row || buttons.some(function (button) { return button.parentElement !== row; })) return;

    buttons.forEach(function (button) {
      if (button.dataset.homeTabBound) return;
      button.dataset.homeTabBound = "true";
      button.addEventListener("click", function () {
        selectedHomeTab = button.textContent.trim();
        renderHomeTabResults(row, selectedHomeTab);
      });
    });

    const results = row.parentElement.querySelector(":scope > .home-tab-results");
    if (!results || results.dataset.tab !== selectedHomeTab) {
      renderHomeTabResults(row, selectedHomeTab);
    }
  }

  function bindThemeCategories(root) {
    const names = Object.keys(themeVideos);
    const heading = Array.from(document.querySelectorAll("h2")).find(function (item) {
      return item.textContent.trim() === "主题分类";
    });
    const section = heading && heading.closest("section");
    if (!section) return;
    Array.from(section.querySelectorAll("span")).forEach(function (label) {
      const name = label.textContent.trim();
      if (!names.includes(name)) return;
      const card = label.closest("div.cursor-pointer");
      if (!card) return;
      const publicOnly = !window.zhixingApi?.user;
      const items = themePackageItems(name, publicOnly);
      const count = Array.from(card.querySelectorAll("span")).find(function (item) { return /个课程/.test(item.textContent.trim()); });
      if (count) {
        count.textContent = publicOnly ? "共" + items.length + "项 · 视频与资料" : "共" + items.length + "项 · 含任务作业测试";
        count.classList.add("theme-package-count");
      }
      if (card.dataset.themeVideoBound) return;
      card.dataset.themeVideoBound = "true";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", name + "主题学习包");
      const open = function (event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        showThemePackage(name);
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
    });
  }

  function bindThemeCategoriesFallback(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const names = Object.keys(themeVideos);
    const nodes = Array.from(scope.querySelectorAll("span,strong,h2,h3,p,button,div"));
    nodes.forEach(function (node) {
      // The generated learning-package page is itself interactive. Do not let
      // the category fallback bind that page (or its children) as a category
      // card, otherwise every click inside the page re-renders it and it
      // appears to flash and disappear.
      if (node.closest(".theme-package-page")) return;
      const name = names.find(function (item) { return node.textContent.trim() === item; });
      if (!name) return;
      let card = node.closest("button,a,[role='button'],div.cursor-pointer");
      let cursor = node.parentElement;
      let depth = 0;
      while (!card && cursor && depth < 6) {
        if (cursor.closest && cursor.closest(".theme-package-page")) return;
        const text = cursor.textContent || "";
        if (text.includes(name) && (/视频与资料|含任务|共\d+项|共[0-9]+项|课程|资料/.test(text))) card = cursor;
        cursor = cursor.parentElement;
        depth += 1;
      }
      if (!card || card.dataset.themePackageFallbackBound) return;
      card.dataset.themePackageFallbackBound = "true";
      card.setAttribute("role", card.getAttribute("role") || "button");
      card.setAttribute("tabindex", card.getAttribute("tabindex") || "0");
      card.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        showThemePackage(name);
      });
      card.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        showThemePackage(name);
      });
    });
  }

  function currentCourseTitle() {
    const title = document.querySelector("h1");
    return title ? title.textContent.trim() : "研学课程";
  }

  function currentCourseVideo() {
    return courseVideos[currentCourseTitle()] || courseVideos["土尔扈特部回归"];
  }

  function createEmbeddedVideo(videoInfo, title, page) {
    const frame = document.createElement("iframe");
    frame.className = "embedded-course-video";
    frame.src = "https://player.bilibili.com/player.html?bvid=" + videoInfo.bvid +
      "&page=" + (page || 1) + "&high_quality=1&danmaku=0&autoplay=0";
    frame.title = title || videoInfo.label;
    frame.allow = "autoplay; fullscreen; picture-in-picture";
    frame.allowFullscreen = true;
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    return frame;
  }

  function replaceDemoVideo(root) {
    root.querySelectorAll("h3").forEach(function (heading) {
      if (heading.textContent.trim() !== "课程视频") return;
      const section = heading.parentElement;
      const video = section && section.querySelector("video");
      const player = video && video.parentElement;
      if (!player || player.dataset.officialCourseVideo) return;

      if (document.querySelector(".embedded-video-shell")) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        section.style.display = "none";
        player.dataset.officialCourseVideo = "duplicate-hidden";
        return;
      }

      player.dataset.officialCourseVideo = "true";
      video.pause();
      video.removeAttribute("src");
      video.load();
      player.querySelectorAll(":scope > button, :scope > div:not(.embedded-video-shell)").forEach(function (control) {
        control.style.display = "none";
      });

      const shell = document.createElement("div");
      shell.className = "embedded-video-shell";
      shell.appendChild(createEmbeddedVideo(currentCourseVideo(), currentCourseTitle() + "课程视频"));
      player.appendChild(shell);
    });
  }

  function showVideoModal(videoInfo, lessonTitle, videoPage) {
    document.querySelector(".lesson-video-modal")?.remove();
    const modal = document.createElement("div");
    modal.className = "lesson-video-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", lessonTitle + "视频");
    modal.innerHTML = '<div class="lesson-video-dialog"><div class="lesson-video-header"><div><strong>' +
      lessonTitle + '</strong><small>' + videoInfo.label +
      '</small></div><button type="button" aria-label="关闭课程视频">×</button></div><div class="lesson-video-frame"></div></div>';
    modal.querySelector(".lesson-video-frame").appendChild(createEmbeddedVideo(videoInfo, lessonTitle, videoPage));
    modal.querySelector("button").addEventListener("click", function () { modal.remove(); });
    modal.addEventListener("click", function (event) {
      if (event.target === modal) modal.remove();
    });
    document.body.appendChild(modal);
  }

  function showPlaylistModal(themeName, playlist) {
    document.querySelector(".lesson-video-modal")?.remove();
    const modal = document.createElement("div");
    modal.className = "lesson-video-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", themeName + "课程视频列表");
    modal.innerHTML = '<div class="lesson-video-dialog playlist-video-dialog"><div class="lesson-video-header"><div><strong>' +
      themeName + '课程</strong><small>共 ' + playlist.length + ' 个可播放视频</small></div>' +
      '<button type="button" aria-label="关闭课程视频">×</button></div><div class="lesson-video-frame"></div>' +
      '<div class="theme-video-list" role="list"></div></div>';
    const frameBox = modal.querySelector(".lesson-video-frame");
    const list = modal.querySelector(".theme-video-list");

    function play(item, index) {
      frameBox.replaceChildren(createEmbeddedVideo(courseVideos[item.course], item.title, item.page));
      list.querySelectorAll("button").forEach(function (button, buttonIndex) {
        button.classList.toggle("is-active", buttonIndex === index);
        button.setAttribute("aria-pressed", buttonIndex === index ? "true" : "false");
      });
    }

    playlist.forEach(function (item, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("role", "listitem");
      button.innerHTML = '<span class="theme-video-index">' + (index + 1) + '</span><span><strong>' + item.title +
        '</strong><small>' + courseVideos[item.course].label + '</small></span>';
      button.addEventListener("click", function () { play(item, index); });
      list.appendChild(button);
    });
    play(playlist[0], 0);
    modal.querySelector(".lesson-video-header button").addEventListener("click", function () { modal.remove(); });
    modal.addEventListener("click", function (event) { if (event.target === modal) modal.remove(); });
    document.body.appendChild(modal);
  }

  function showThemePackage(themeName) {
    document.querySelector(".theme-package-page")?.remove();
    const publicOnly = !window.zhixingApi?.user;
    const items = themePackageItems(themeName, publicOnly);
    const types = publicOnly ? ["全部", "视频", "资料"] : ["全部", "视频", "任务", "作业", "测试", "资料"];
    let selectedType = "全部";
    const page = document.createElement("div");
    page.className = "theme-package-page";
    page.setAttribute("role", "dialog");
    page.setAttribute("aria-modal", "true");
    page.setAttribute("aria-label", themeName + "主题学习包");
    page.innerHTML = '<header><button type="button" aria-label="返回首页">‹</button><div><h1>' + themeName + '</h1><p>' + (publicOnly ? '公开视频与拓展资料' : '视频、任务、作业、测试与拓展资料') + '</p></div></header>' +
      '<nav class="theme-package-tabs" aria-label="学习内容分类"></nav><main class="theme-package-main"></main>';
    const back = page.querySelector("header button");
    const subtitle = page.querySelector("header p");
    const tabs = page.querySelector(".theme-package-tabs");
    const main = page.querySelector("main");
    page.addEventListener("click", function (event) { event.stopPropagation(); });

    function close() { page.remove(); }

    function renderList() {
      back.setAttribute("aria-label", "返回首页");
      back.onclick = close;
      subtitle.textContent = publicOnly ? "共" + items.length + "项公开内容 · 游客可查看视频与资料" : "共" + items.length + "项学习内容 · 视频、任务、作业、测试与资料";
      tabs.style.display = "flex";
      tabs.innerHTML = "";
      types.forEach(function (type) {
        const button = document.createElement("button");
        button.type = "button";
        const total = type === "全部" ? items.length : items.filter(function (item) { return item.type === type; }).length;
        button.textContent = type + " " + total;
        button.className = selectedType === type ? "is-active" : "";
        button.setAttribute("aria-pressed", selectedType === type ? "true" : "false");
        button.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          selectedType = type;
          renderList();
        });
        tabs.appendChild(button);
      });
      main.innerHTML = '<div class="theme-package-list"></div>';
      const list = main.querySelector(".theme-package-list");
      items.filter(function (item) { return selectedType === "全部" || item.type === selectedType; }).forEach(function (item) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "theme-package-item";
        button.dataset.type = item.type;
        button.setAttribute("aria-label", "打开" + item.type + "：" + item.title);
        button.innerHTML = '<b>' + item.type + '</b><span><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.meta) + '</small></span><em>›</em>';
        button.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          if (item.type === "视频") {
            const videoInfo = item.video && courseVideos[item.video.course];
            if (videoInfo) renderVideoDetail(item, videoInfo);
            else renderDetail({ ...item, type: "资料", detail: "该视频资料正在同步中，请稍后再试。" });
          } else {
            renderDetail(item);
          }
        });
        list.appendChild(button);
      });
      main.scrollTop = 0;
    }

    function renderVideoDetail(item, videoInfo) {
      back.setAttribute("aria-label", "返回学习包");
      back.onclick = renderList;
      subtitle.textContent = item.type + " · " + item.meta;
      tabs.style.display = "none";
      main.innerHTML = '<article class="theme-package-detail theme-package-video-detail"><span>' + item.type + '</span><h2>' +
        escapeHtml(item.title) + '</h2><p>' + escapeHtml(videoInfo.label) + '</p><div class="theme-package-video-frame"></div></article>';
      main.querySelector(".theme-package-video-frame").appendChild(createEmbeddedVideo(videoInfo, item.title, item.video?.page || 1));
      main.scrollTop = 0;
    }

    function renderDetail(item) {
      back.setAttribute("aria-label", "返回学习包");
      back.onclick = renderList;
      subtitle.textContent = item.type + " · " + item.meta;
      tabs.style.display = "none";
      main.innerHTML = '<article class="theme-package-detail"><span>' + item.type + '</span><h2>' + escapeHtml(item.title) + '</h2><p>' + escapeHtml(item.detail) + '</p></article>';
      const article = main.querySelector("article");
      const storageKey = "theme-package-" + themeName + "-" + item.title;
      if (item.type === "任务") {
        let done = [];
        if (window.zhixingApi?.user?.role === "student") try { done = JSON.parse(localStorage.getItem(storageKey) || "[]"); } catch (_error) {}
        const steps = document.createElement("div");
        steps.className = "theme-package-steps";
        const progress = document.createElement("div");
        progress.className = "theme-package-progress";
        function updateProgress() { progress.textContent = "任务进度 " + done.filter(Boolean).length + "/" + item.steps.length; }
        item.steps.forEach(function (step, index) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = done[index] ? "is-done" : "";
          button.innerHTML = '<b>' + (done[index] ? "✓" : index + 1) + '</b><span>' + escapeHtml(step) + '</span>';
          button.addEventListener("click", function () {
            if (!window.zhixingApi?.user) { window.zhixingApi?.openAuth(); return; }
            if (window.zhixingApi.user.role !== "student") return;
            done[index] = !done[index];
            button.classList.toggle("is-done", done[index]);
            button.querySelector("b").textContent = done[index] ? "✓" : index + 1;
            try { localStorage.setItem(storageKey, JSON.stringify(done)); } catch (_error) {}
            window.zhixingApi.api("/api/progress/by-title", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: item.title, progress: Math.round(done.filter(Boolean).length / item.steps.length * 100), state: { done: done } }) }).catch(function () {});
            updateProgress();
          });
          steps.appendChild(button);
        });
        updateProgress();
        article.append(steps, progress);
      } else if (item.type === "作业") {
        const homework = document.createElement("div");
        homework.className = "theme-package-homework";
        let saved = "";
        try { saved = localStorage.getItem(storageKey) || ""; } catch (_error) {}
        let attachments = [];
        homework.innerHTML = '<textarea maxlength="1200" aria-label="作业内容" placeholder="在这里完成作业...">' + escapeHtml(saved) + '</textarea>' +
          '<section class="theme-homework-upload"><div><strong>添加附件</strong><small class="theme-upload-counter">0/9</small></div>' +
          '<div class="theme-upload-actions"><button type="button" data-upload="photos">照片</button><button type="button" data-upload="camera">拍照</button>' +
          '<button type="button" data-upload="videos">视频</button><button type="button" data-upload="files">文件</button></div>' +
          '<input class="theme-upload-input" data-input="photos" type="file" accept="image/*" multiple aria-label="选择照片">' +
          '<input class="theme-upload-input" data-input="camera" type="file" accept="image/*" capture="environment" aria-label="拍照上传">' +
          '<input class="theme-upload-input" data-input="videos" type="file" accept="video/*" multiple aria-label="选择视频">' +
          '<input class="theme-upload-input" data-input="files" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.zip" multiple aria-label="选择文件">' +
          '<div class="theme-upload-list" aria-live="polite"></div><p class="theme-upload-help">最多9个附件；单个视频不超过200MB，其他文件不超过50MB。</p></section>' +
          '<button type="button" class="theme-package-primary">提交作业</button><div class="theme-package-status" aria-live="polite"></div>';
        const status = homework.querySelector(".theme-package-status");
        const uploadList = homework.querySelector(".theme-upload-list");
        const counter = homework.querySelector(".theme-upload-counter");

        function fileSize(size) {
          if (size >= 1024 * 1024) return (size / (1024 * 1024)).toFixed(1) + "MB";
          if (size >= 1024) return Math.round(size / 1024) + "KB";
          return size + "B";
        }

        function renderAttachments() {
          uploadList.innerHTML = "";
          counter.textContent = attachments.length + "/9";
          attachments.forEach(function (attachment, index) {
            const row = document.createElement("div");
            row.className = "theme-upload-file";
            const preview = document.createElement("div");
            preview.className = "theme-upload-preview";
            if (attachment.file.type.startsWith("image/")) {
              const image = document.createElement("img");
              image.src = attachment.url;
              image.alt = attachment.file.name;
              preview.appendChild(image);
            } else if (attachment.file.type.startsWith("video/")) {
              const video = document.createElement("video");
              video.src = attachment.url;
              video.muted = true;
              video.preload = "metadata";
              preview.appendChild(video);
            } else {
              preview.textContent = (attachment.file.name.split(".").pop() || "文件").slice(0, 5).toUpperCase();
            }
            const info = document.createElement("span");
            const name = document.createElement("strong");
            name.textContent = attachment.file.name;
            const meta = document.createElement("small");
            meta.textContent = fileSize(attachment.file.size) + " · " + (attachment.file.type || "通用文件");
            info.append(name, meta);
            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "theme-upload-remove";
            remove.setAttribute("aria-label", "移除附件" + attachment.file.name);
            remove.textContent = "×";
            remove.addEventListener("click", function () {
              if (attachment.url) URL.revokeObjectURL(attachment.url);
              attachments.splice(index, 1);
              renderAttachments();
              status.textContent = attachments.length ? "当前保留" + attachments.length + "个附件。" : "附件已移除。";
            });
            row.append(preview, info, remove);
            uploadList.appendChild(row);
          });
        }

        function addFiles(fileList) {
          const incoming = Array.from(fileList || []);
          let rejected = "";
          incoming.forEach(function (file) {
            if (attachments.length >= 9) { rejected = "最多只能添加9个附件。"; return; }
            const maxSize = file.type.startsWith("video/") ? 200 * 1024 * 1024 : 50 * 1024 * 1024;
            if (file.size > maxSize) { rejected = file.name + "超过大小限制。"; return; }
            if (attachments.some(function (item) { return item.file.name === file.name && item.file.size === file.size; })) return;
            attachments.push({ file: file, url: file.type.startsWith("image/") || file.type.startsWith("video/") ? URL.createObjectURL(file) : "" });
          });
          status.textContent = rejected || (attachments.length ? "已选择" + attachments.length + "个附件。" : "");
          renderAttachments();
        }

        homework.querySelectorAll("[data-upload]").forEach(function (button) {
          button.addEventListener("click", function () {
            homework.querySelector('[data-input="' + button.dataset.upload + '"]').click();
          });
        });
        homework.querySelectorAll(".theme-upload-input").forEach(function (input) {
          input.addEventListener("change", function () { addFiles(input.files); input.value = ""; });
        });
        homework.querySelector(".theme-package-primary").addEventListener("click", async function () {
          const value = homework.querySelector("textarea").value.trim();
          if (!value && !attachments.length) { status.textContent = "请填写作业内容或添加附件。"; return; }
          const submitButton = homework.querySelector(".theme-package-primary");
          if (window.zhixingApi) {
            submitButton.disabled = true;
            status.textContent = attachments.length ? "正在上传附件并提交作业..." : "正在提交作业...";
            try {
              await window.zhixingApi.submitHomework({ themeName: themeName, title: item.title, text: value, files: attachments.map(function (entry) { return entry.file; }) });
              status.textContent = "作业已提交到云端" + (attachments.length ? "，包含" + attachments.length + "个附件。" : "。");
              return;
            } catch (error) {
              status.textContent = error.message;
              return;
            } finally {
              submitButton.disabled = false;
            }
          }
          status.textContent = "当前处于离线模式，作业已保存在本机。";
          try {
            localStorage.setItem(storageKey, value);
            localStorage.setItem(storageKey + "-attachments", JSON.stringify(attachments.map(function (item) {
              return { name: item.file.name, size: item.file.size, type: item.file.type };
            })));
          } catch (_error) {}
        });
        article.appendChild(homework);
      } else if (item.type === "测试") {
        const quiz = document.createElement("div");
        quiz.className = "theme-package-quiz";
        const status = document.createElement("div");
        status.className = "theme-package-status";
        item.options.forEach(function (option, index) {
          const button = document.createElement("button");
          button.type = "button";
          button.textContent = String.fromCharCode(65 + index) + ". " + option;
          button.addEventListener("click", function () {
            quiz.querySelectorAll("button").forEach(function (answerButton) { answerButton.className = ""; });
            button.className = index === item.answer ? "is-correct" : "is-wrong";
            status.textContent = index === item.answer ? "回答正确，已记录本题成绩。" : "回答错误，请结合课程和资料再思考。";
            try { localStorage.setItem(storageKey, index === item.answer ? "correct" : "retry"); } catch (_error) {}
          });
          quiz.appendChild(button);
        });
        article.append(quiz, status);
      } else {
        const material = document.createElement("div");
        material.className = "theme-package-material";
        material.textContent = item.detail + " 建议阅读后记录一个关键事实、一个证据和一个仍需探究的问题。";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "theme-package-primary";
        button.textContent = "标记为已阅读";
        const status = document.createElement("div");
        status.className = "theme-package-status";
        button.addEventListener("click", function () {
          button.textContent = "已阅读";
          button.disabled = true;
          status.textContent = "阅读状态已保存。";
          try { localStorage.setItem(storageKey, "read"); } catch (_error) {}
        });
        article.append(material, button, status);
      }
      main.scrollTop = 0;
    }

    document.body.appendChild(page);
    renderList();
  }

  function showLessonVideo(lessonTitle) {
    showVideoModal(currentCourseVideo(), lessonTitle);
  }

  function openLessonVideo(event) {
    const lesson = event.target.closest(".divide-y > div.cursor-pointer");
    if (!lesson) return;
    const directoryTab = Array.from(document.querySelectorAll("button")).find(function (button) {
      return button.textContent.trim() === "课程目录" && button.classList.contains("text-green-600");
    });
    if (!directoryTab) return;
    const title = lesson.querySelector("p");
    if (!title) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    showLessonVideo(title.textContent.trim());
  }

  const backendCourseRouteSlugs = {
    "course/1": "history-culture",
    "course/2": "history-culture",
    "course/3": "natural-science",
    "course/4": "frontier-technology",
    "base/b1": "history-culture",
    "base/b2": "arts-humanities",
    "base/b3": "natural-science",
    "base/b4": "frontier-technology",
    "base/b5": "red-education",
    "base/b6": "arts-humanities"
  };
  const backendContentLabels = { video: "视频", material: "资料", task: "任务", homework: "作业", test: "测试" };
  let backendCourseRequestId = 0;

  function currentBackendCourseSlug() {
    const route = (window.location.hash || "").replace(/^#\/?/, "").split("?")[0];
    return backendCourseRouteSlugs[route] || "";
  }

  function backendContentDescription(body) {
    let value = body || {};
    if (typeof value === "string") {
      try { value = JSON.parse(value); } catch (_error) { return value; }
    }
    if (!value || typeof value !== "object") return "";
    return value.description || value.text || value.prompt || value.detail || "";
  }

  function backendContentBody(body) {
    if (!body) return {};
    if (typeof body === "object") return body;
    try { return JSON.parse(body); } catch (_error) { return { description: String(body) }; }
  }

  function backendContentDetails(body) {
    const value = backendContentBody(body);
    const sections = [];
    if (Number(value.durationMinutes) > 0) sections.push('<div class="backend-content-duration"><strong>建议时长</strong><span>' + Number(value.durationMinutes) + ' 分钟</span></div>');
    [["学习目标", value.objectives], ["完成步骤", value.steps]].forEach(function (entry) {
      if (!Array.isArray(entry[1]) || !entry[1].length) return;
      sections.push('<section class="backend-content-rich"><h3>' + entry[0] + '</h3><ol>' + entry[1].map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") + '</ol></section>');
    });
    if (value.deliverable) sections.push('<section class="backend-content-rich"><h3>成果要求</h3><p>' + escapeHtml(value.deliverable) + '</p></section>');
    return sections.join("");
  }

  function canViewPrivateCourseContent(course) {
    const user = hasRealAccount() ? window.zhixingApi?.user : null;
    if (!user) return false;
    if (user.role === "teacher" || user.role === "admin") return true;
    return user.role === "student" && Boolean(course.enrolled);
  }

  function canWriteCourseProgress(course) {
    const user = window.zhixingApi?.user;
    return Boolean(user && user.role === "student" && course.enrolled);
  }

  async function markBackendCourseProgress(course, item, progress, status, state) {
    if (!canWriteCourseProgress(course) || !window.zhixingApi?.api) return;
    await window.zhixingApi.api("/api/contents/" + item.id + "/progress", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ progress: progress, status: status, state: state || {}, durationSeconds: item.type === "video" ? 180 : 0 })
    });
  }

  function fileSizeLabel(size) {
    if (size >= 1024 * 1024) return (size / (1024 * 1024)).toFixed(1) + "MB";
    if (size >= 1024) return Math.round(size / 1024) + "KB";
    return size + "B";
  }

  function openBackendCourseItem(course, item) {
    const isPrivate = ["task", "homework", "test"].includes(item.type);
    if (isPrivate && !canViewPrivateCourseContent(course)) {
      if (window.zhixingApi?.openAuth) window.zhixingApi.openAuth();
      return;
    }
    if (item.type === "video") {
      showVideoModal(currentCourseVideo(), item.title);
      markBackendCourseProgress(course, item, 100, "completed", { openedAt: new Date().toISOString() }).catch(function () {});
      return;
    }

    document.querySelector(".theme-package-page.backend-course-detail")?.remove();
    const page = document.createElement("div");
    page.className = "theme-package-page backend-course-detail";
    page.setAttribute("role", "dialog");
    page.setAttribute("aria-modal", "true");
    const label = backendContentLabels[item.type] || item.type;
    const description = backendContentDescription(item.body) || course.description || item.title;
    page.innerHTML = '<header><button type="button" aria-label="返回课程">‹</button><div><h1>' + escapeHtml(item.title) + '</h1><p>' +
      escapeHtml(course.title) + " · " + label + '</p></div></header><nav class="theme-package-tabs" hidden></nav><main class="theme-package-main">' +
      '<article class="theme-package-detail"><span>' + label + '</span><h2>' + escapeHtml(item.title) + '</h2><p>' + escapeHtml(description) + '</p>' + backendContentDetails(item.body) + '</article></main>';
    const article = page.querySelector("article");
    const close = function () { page.remove(); };
    page.querySelector("header button").addEventListener("click", close);

    if (item.type === "homework") {
      const homework = document.createElement("div");
      homework.className = "theme-package-homework backend-homework-submit";
      homework.innerHTML = '<textarea maxlength="1200" aria-label="作业内容" placeholder="填写作业说明、观察记录或反思..."></textarea>' +
        '<section class="theme-homework-upload"><div><strong>上传附件</strong><small class="theme-upload-counter">0/9</small></div>' +
        '<div class="theme-upload-actions"><button type="button" data-upload="photos">照片</button><button type="button" data-upload="camera">拍照</button><button type="button" data-upload="videos">视频</button><button type="button" data-upload="files">文件</button></div>' +
        '<input class="theme-upload-input" data-input="photos" type="file" accept="image/*" multiple aria-label="选择照片">' +
        '<input class="theme-upload-input" data-input="camera" type="file" accept="image/*" capture="environment" aria-label="拍照上传">' +
        '<input class="theme-upload-input" data-input="videos" type="file" accept="video/*" multiple aria-label="选择视频">' +
        '<input class="theme-upload-input" data-input="files" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.zip" multiple aria-label="选择文件">' +
        '<div class="theme-upload-list" aria-live="polite"></div></section><button type="button" class="theme-package-primary">提交给老师</button><div class="theme-package-status" aria-live="polite"></div>';
      const attachments = [];
      const status = homework.querySelector(".theme-package-status");
      const list = homework.querySelector(".theme-upload-list");
      const counter = homework.querySelector(".theme-upload-counter");
      const renderAttachments = function () {
        list.innerHTML = "";
        counter.textContent = attachments.length + "/9";
        attachments.forEach(function (entry, index) {
          const row = document.createElement("div");
          row.className = "theme-upload-file";
          row.innerHTML = '<div class="theme-upload-preview">' + escapeHtml((entry.file.name.split(".").pop() || "文件").slice(0, 4).toUpperCase()) + '</div><span><strong>' +
            escapeHtml(entry.file.name) + '</strong><small>' + fileSizeLabel(entry.file.size) + " · " + escapeHtml(entry.file.type || "通用文件") + '</small></span><button type="button" class="theme-upload-remove" aria-label="移除附件">×</button>';
          row.querySelector("button").addEventListener("click", function () { attachments.splice(index, 1); renderAttachments(); });
          list.appendChild(row);
        });
      };
      const addFiles = function (files) {
        Array.from(files || []).forEach(function (file) {
          if (attachments.length >= 9) return;
          const max = file.type.startsWith("video/") ? 200 * 1024 * 1024 : 50 * 1024 * 1024;
          if (file.size > max) { status.textContent = file.name + "超过大小限制"; return; }
          attachments.push({ file: file });
        });
        status.textContent = attachments.length ? "已选择" + attachments.length + "个附件" : "";
        renderAttachments();
      };
      homework.querySelectorAll("[data-upload]").forEach(function (button) {
        button.addEventListener("click", function () {
          if (!canWriteCourseProgress(course)) { status.textContent = "只有已参加课程的学生才能提交作业"; return; }
          homework.querySelector('[data-input="' + button.dataset.upload + '"]').click();
        });
      });
      homework.querySelectorAll(".theme-upload-input").forEach(function (input) {
        input.addEventListener("change", function () { addFiles(input.files); input.value = ""; });
      });
      homework.querySelector(".theme-package-primary").addEventListener("click", async function () {
        if (!canWriteCourseProgress(course)) { status.textContent = "请使用已参加该课程的学生账号提交"; return; }
        const value = homework.querySelector("textarea").value.trim();
        if (!value && !attachments.length) { status.textContent = "请填写作业内容或添加附件"; return; }
        const button = homework.querySelector(".theme-package-primary");
        button.disabled = true;
        status.textContent = "正在提交到后端数据库...";
        try {
          await window.zhixingApi.submitHomework({ contentId: item.id, title: item.title, text: value, files: attachments.map(function (entry) { return entry.file; }) });
          await markBackendCourseProgress(course, item, 100, "submitted", { submittedAt: new Date().toISOString() });
          status.textContent = "已提交给老师，等待批改";
        } catch (error) {
          status.textContent = error.message || "提交失败";
        } finally {
          button.disabled = false;
        }
      });
      article.appendChild(homework);
    } else {
      const button = document.createElement("button");
      const status = document.createElement("div");
      button.type = "button";
      button.className = "theme-package-primary";
      status.className = "theme-package-status";
      button.textContent = item.type === "test" ? "完成测试并记录" : item.type === "task" ? "标记任务完成" : "标记已阅读";
      button.addEventListener("click", async function () {
        if (!canWriteCourseProgress(course)) { status.textContent = item.type === "material" ? "游客可阅读；登录并参加课程后记录学习进度" : "请使用已参加该课程的学生账号操作"; return; }
        button.disabled = true;
        try {
          await markBackendCourseProgress(course, item, 100, "completed", { completedAt: new Date().toISOString() });
          status.textContent = "已写入学习记录";
        } catch (error) {
          status.textContent = error.message || "记录失败";
        } finally {
          button.disabled = false;
        }
      });
      article.append(button, status);
    }
    document.body.appendChild(page);
  }

  function renderBackendCourseContents() {
    const slug = currentBackendCourseSlug();
    const existing = document.querySelector(".backend-course-cloud");
    if (!slug) {
      if (existing) existing.remove();
      return;
    }
    const main = document.getElementById("main-content") || document.querySelector("#root") || document.body;
    let panel = existing;
    if (!panel) {
      panel = document.createElement("section");
      panel.className = "backend-course-cloud";
      panel.setAttribute("aria-label", "云端课程内容");
      main.appendChild(panel);
    }
    const userKey = window.zhixingApi?.user?.id || "guest";
    const renderKey = slug + "|" + userKey;
    if (panel.dataset.renderKey === renderKey && panel.dataset.state === "loaded") return;
    panel.dataset.renderKey = renderKey;
    panel.dataset.state = "loading";
    panel.innerHTML = '<header><strong>云端课程内容</strong><small>正在读取后端课程、任务、作业和资料</small></header>';
    if (!window.zhixingApi?.api) {
      panel.dataset.state = "offline";
      panel.innerHTML = '<header><strong>云端课程内容</strong><small>请通过线上站点或本地服务打开，才能连接后端数据库</small></header>';
      return;
    }
    const requestId = ++backendCourseRequestId;
    window.zhixingApi.api("/api/courses").then(function (data) {
      if (requestId !== backendCourseRequestId) return;
      const courses = data.courses || [];
      const course = courses.find(function (item) { return item.slug === slug; });
      if (!course) {
        panel.dataset.state = "empty";
        panel.innerHTML = '<header><strong>云端课程内容</strong><small>数据库中还没有匹配课程</small></header>';
        return;
      }
      const canViewPrivate = canViewPrivateCourseContent(course);
      const contents = (course.contents || []).filter(function (item) {
        return ["video", "material"].includes(item.type) || canViewPrivate;
      }).sort(function (a, b) { return Number(a.sortOrder || 0) - Number(b.sortOrder || 0); });
      const hiddenPrivate = (course.contents || []).filter(function (item) { return ["task", "homework", "test"].includes(item.type); }).length - contents.filter(function (item) { return ["task", "homework", "test"].includes(item.type); }).length;
      const counts = contents.reduce(function (total, item) {
        const label = backendContentLabels[item.type] || item.type;
        total[label] = (total[label] || 0) + 1;
        return total;
      }, {});
      panel.dataset.state = "loaded";
      panel.innerHTML = '<header><strong>' + escapeHtml(course.title) + '</strong><small>' +
        Object.keys(counts).map(function (key) { return key + " " + counts[key]; }).join(" · ") +
        (hiddenPrivate > 0 ? " · 登录参加后显示任务作业" : "") + '</small></header><div class="backend-course-actions"></div><div class="backend-course-content-list"></div>';
      const actions = panel.querySelector(".backend-course-actions");
      const list = panel.querySelector(".backend-course-content-list");
      const user = window.zhixingApi?.user;
      if (!user) {
        actions.innerHTML = '<button type="button">登录后报名/购买课程</button>';
        actions.querySelector("button").addEventListener("click", function () { window.zhixingApi.openAuth(); });
      } else if (user.role === "student" && !course.enrolled) {
        actions.innerHTML = '<button type="button">参加课程后解锁任务作业</button>';
        actions.querySelector("button").addEventListener("click", async function () {
          const button = actions.querySelector("button");
          button.disabled = true;
          button.textContent = "正在写入报名记录...";
          try {
            await window.zhixingApi.api("/api/courses/" + course.id + "/enroll", { method: "POST" });
            panel.dataset.state = "";
            renderBackendCourseContents();
          } catch (error) {
            button.textContent = error.message || "报名失败";
          } finally {
            button.disabled = false;
          }
        });
      } else if (user.role === "student" && course.enrolled) {
        actions.innerHTML = '<span>已参加课程，任务、作业、测试会写入你的学习记录</span>';
      }
      if (!contents.length) {
        list.innerHTML = '<p class="backend-course-empty">暂无可查看内容</p>';
        return;
      }
      contents.forEach(function (item) {
        const button = document.createElement("button");
        const label = backendContentLabels[item.type] || item.type;
        button.type = "button";
        button.className = "backend-course-content-item";
        button.dataset.type = item.type;
        button.innerHTML = '<b>' + label + '</b><span><strong>' + escapeHtml(item.title) + '</strong><small>' +
          escapeHtml(backendContentDescription(item.body) || (item.type === "homework" ? "老师下发作业" : item.type === "task" ? "老师下发任务" : "云端课程内容")) +
          '</small></span><em>›</em>';
        button.addEventListener("click", function () { openBackendCourseItem(course, item); });
        list.appendChild(button);
      });
    }).catch(function (error) {
      panel.dataset.state = "error";
      panel.innerHTML = '<header><strong>云端课程内容</strong><small>' + escapeHtml(error.message || "后端读取失败") + '</small></header>';
    });
  }

  function localGuideReply(question) {
    const normalized = question.trim().toLowerCase();
    let best = null;
    let bestScore = 0;
    guideKnowledge.forEach(function (item) {
      const score = item.keys.reduce(function (total, key) { return total + (normalized.includes(key.toLowerCase()) ? 1 : 0); }, 0);
      if (score > bestScore) { best = item; bestScore = score; }
    });
    if (best) return best.answer;
    return "我可以帮你规划承德、敦煌、神农架、文昌、井冈山或苏州的研学路线。请补充目的地、出行天数、学生年龄和兴趣方向，我会给出更具体的课程与行程建议。";
  }

  const courseDesignerAudiences = {
    "小学阶段": { focus: "兴趣启蒙、具象观察、合作表达与全过程安全", output: "观察手册、主题作品与小组分享" },
    "初中阶段": { focus: "学科联系、证据意识、问题探究与团队协作", output: "探究记录、数据图表与成果汇报" },
    "高中阶段": { focus: "专题研究、材料分析、跨学科综合与生涯认知", output: "研究报告、专题展示与个人反思" },
    "大学生": { focus: "专业视角、田野方法、学术规范与社会创新", output: "调研报告、案例分析与项目提案" },
    "党校/干部教育": { focus: "理论联系实际、现场教学、案例研讨与行动转化", output: "案例研讨成果、对策建议与行动清单" },
    "企事业单位": { focus: "组织协作、行业认知、创新实践与团队共创", output: "共创方案、复盘报告与团队行动计划" },
    "亲子家庭": { focus: "代际协作、共同观察、文化体验与家庭交流", output: "家庭研学手册、共同作品与口述记录" },
    "成人公众": { focus: "文化理解、深度体验、公共议题与自主表达", output: "主题笔记、实践作品与交流分享" },
    "老年学习者": { focus: "节奏友好、经验连接、文化记忆与社群交流", output: "口述记忆、主题册页与学习分享" }
  };
  const courseDesignerTypes = {
    "综合主题": "跨学科整合与真实问题解决", "历史文化": "史料研读、空间考证与历史解释", "自然生态": "科学观察、样方调查与数据分析",
    "科技工程": "工程拆解、实验验证与方案设计", "艺术人文": "作品细读、审美表达与文化阐释", "红色教育": "现场教学、案例研讨与行动转化",
    "社会实践": "田野调查、公共参与与服务学习", "工业研学": "生产流程、质量管理与智能制造", "乡村振兴": "村情调查、产业分析与社区共创",
    "城市治理": "公共数据、利益协商与政策设计", "博物馆教育": "藏品研究、策展叙事与观众学习", "法治教育": "规则分析、模拟法庭与公共伦理",
    "国防教育": "安全素养、科技认知与桌面推演", "生命健康": "实验观察、急救训练与健康传播", "职业生涯": "岗位体验、能力盘点与创新项目",
    "非遗民俗": "技艺深描、口述史与活化设计", "国际理解": "区域比较、跨文化沟通与全球议题"
  };
  const courseDesignerMethodOutputs = {
    "实地观察": "场域证据地图", "实验探究": "实验记录与结论", "田野调查": "调查数据与田野报告", "人物访谈": "访谈摘要与观点卡",
    "情境模拟": "角色决策记录", "案例研讨": "案例分析与对策建议", "角色扮演": "角色陈述与复盘报告", "辩论协商": "论证图与共识清单",
    "策展创作": "微型展览或策展案", "工程制作": "模型、原型与测试单", "志愿服务": "服务记录与改进方案", "项目路演": "项目方案与路演材料"
  };

  function localCourseDesign(input) {
    const profile = courseDesignerAudiences[input.audience] || courseDesignerAudiences["成人公众"];
    const subject = input.topic || "地方文化与社会发展";
    const place = input.location || "当地代表性场域";
    const courseType = input.courseType || "综合主题";
    const typeFocus = courseDesignerTypes[courseType] || courseDesignerTypes["综合主题"];
    const methods = Array.isArray(input.methods) && input.methods.length ? input.methods : ["实地观察", "案例研讨", "项目路演"];
    const emphasis = input.emphasis.length ? input.emphasis.join("、") : "现场观察、问题探究、成果表达";
    return {
      title: place + "·" + subject + "研学课程",
      positioning: "面向" + input.audience + "的" + input.duration + input.mode + "课程，课程类型为" + courseType + "，以" + place + "为真实学习场域，围绕“" + subject + "”组织" + emphasis + "，突出" + typeFocus + "，重点发展" + profile.focus + "。",
      objectives: [
        "理解“" + subject + "”的核心概念、地方背景及其现实联系",
        "使用观察、访谈、材料分析或数据记录方法收集一手证据",
        "围绕真实问题开展合作讨论，形成有依据的解释或建议",
        "完成" + profile.output + "，并能说明学习过程与结论边界"
      ],
      modules: [
        { title: "行前导学与问题建立", content: "建立" + place + "与" + subject + "的背景框架，明确核心问题、学习边界和资料来源。", method: "微课导入 + KWL问题表 + 小组分工" },
        { title: "现场观察与证据采集", content: "围绕空间、人物、实物、制度或自然现象完成定点观察，记录来源、时间和情境。", method: methods.slice(0, 2).join(" + ") },
        { title: "主题研讨与观点形成", content: "整理证据，比较不同解释，识别证据不足之处，并联系适用人群的学习或工作经验。", method: "案例研讨 + 证据墙 + 结构化讨论" },
        { title: "成果共创与行动转化", content: "将学习结果转化为可展示、可传播或可执行的成果，并进行同伴评价和复盘。", method: "成果工作坊 + 路演答辩 + 行动清单" }
      ],
      schedule: [
        { time: "行前", title: "背景导学", detail: "发布资料包，完成基础认知调查和个人问题卡。" },
        { time: "上午前段", title: "场域导入", detail: "安全说明、场域定位、核心问题发布与小组角色确认。" },
        { time: "上午后段", title: "主题探究", detail: "按任务路线采集证据，导师在关键点组织短讲和追问。" },
        { time: "下午前段", title: "分析共创", detail: "整理记录，开展案例讨论或作品制作，形成小组结论。" },
        { time: "下午后段", title: "展示评价", detail: "成果发布、交叉提问、导师反馈与个人行动反思。" }
      ],
      activities: methods.slice(0, 6).map(function (method, index) {
        return { title: method + (index === methods.length - 1 ? "成果工作坊" : "主题任务"), format: method, output: courseDesignerMethodOutputs[method] || profile.output };
      }),
      assessment: ["过程记录完整度与资料来源规范性占30%", "问题分析、证据使用和观点逻辑占35%", "成果质量、现场表达与团队协作占25%", "个人反思与行动转化占10%"],
      safety: ["活动前核实场馆预约、开放区域、交通和当地最新管理要求", "根据成年人、老年人或未成年人等不同人群配置节奏、休息和保障人员", "访谈、拍摄和信息收集遵循知情同意与隐私保护原则", "准备天气变化、人员走失、身体不适和活动中止的应急预案"],
      resources: [courseType + "背景资料与核心概念卡", methods.join("、") + "任务工具", "场域地图、资料来源记录表与成果模板", "过程评价量规、同伴反馈表和个人反思单"]
    };
  }

  async function requestCourseDesign(input) {
    try {
      if (!window.zhixingApi?.user) throw new Error("guest");
      const response = await fetch("/api/course-designer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input)
      });
      const data = await response.json();
      if (!response.ok || !data.plan) throw new Error(data.error || "AI service unavailable");
      return { plan: data.plan, online: true };
    } catch (_error) {
      return { plan: localCourseDesign(input), online: false };
    }
  }

  function courseDesignerList(items, render) {
    return (Array.isArray(items) ? items : []).map(render).join("");
  }

  function renderCourseDesignerResult(container, plan, online) {
    container.innerHTML = '<section class="course-designer-result-head"><div><small>' + (online ? "在线 AI 方案" : "本地专业模板") + '</small><h2>' + escapeHtml(plan.title || "研学课程方案") + '</h2></div><button type="button" data-action="new">重新设计</button></section>' +
      '<section class="course-designer-position"><strong>课程定位</strong><p>' + escapeHtml(plan.positioning || "") + '</p></section>' +
      '<section class="course-designer-section"><h3>学习目标</h3><ol>' + courseDesignerList(plan.objectives, function (item) { return '<li>' + escapeHtml(item) + '</li>'; }) + '</ol></section>' +
      '<section class="course-designer-section"><h3>课程模块</h3><div class="course-designer-modules">' + courseDesignerList(plan.modules, function (item, index) { return '<article><b>' + (index + 1) + '</b><div><strong>' + escapeHtml(item.title || "学习模块") + '</strong><p>' + escapeHtml(item.content || "") + '</p><small>' + escapeHtml(item.method || "") + '</small></div></article>'; }) + '</div></section>' +
      '<section class="course-designer-section"><h3>活动流程</h3><div class="course-designer-schedule">' + courseDesignerList(plan.schedule, function (item) { return '<article><time>' + escapeHtml(item.time || "") + '</time><div><strong>' + escapeHtml(item.title || "") + '</strong><p>' + escapeHtml(item.detail || "") + '</p></div></article>'; }) + '</div></section>' +
      '<section class="course-designer-section"><h3>核心活动与成果</h3><div class="course-designer-activities">' + courseDesignerList(plan.activities, function (item) { return '<article><strong>' + escapeHtml(item.title || "") + '</strong><span>' + escapeHtml(item.format || "") + '</span><p>' + escapeHtml(item.output || "") + '</p></article>'; }) + '</div></section>' +
      '<section class="course-designer-section course-designer-columns"><div><h3>评价方式</h3><ul>' + courseDesignerList(plan.assessment, function (item) { return '<li>' + escapeHtml(item) + '</li>'; }) + '</ul></div><div><h3>实施与安全</h3><ul>' + courseDesignerList(plan.safety, function (item) { return '<li>' + escapeHtml(item) + '</li>'; }) + '</ul></div></section>' +
      '<section class="course-designer-section"><h3>配套资源</h3><ul>' + courseDesignerList(plan.resources, function (item) { return '<li>' + escapeHtml(item) + '</li>'; }) + '</ul></section>' +
      '<footer class="course-designer-result-actions"><button type="button" data-action="copy">复制方案</button><button type="button" data-action="print">打印 / 导出 PDF</button></footer>';
    container.querySelector('[data-action="new"]').addEventListener("click", function () { container.closest(".course-designer-page").querySelector(".course-designer-form").hidden = false; container.innerHTML = ""; });
    container.querySelector('[data-action="copy"]').addEventListener("click", async function () {
      const button = this;
      try { await navigator.clipboard.writeText(container.innerText); button.textContent = "已复制"; } catch (_error) { button.textContent = "复制失败"; }
      window.setTimeout(function () { button.textContent = "复制方案"; }, 1600);
    });
    container.querySelector('[data-action="print"]').addEventListener("click", function () { window.print(); });
  }

  function renderCourseDesigner() {
    if (window.location.hash !== "#/ai-planner") {
      document.querySelector(".course-designer-page")?.remove();
      const root = document.getElementById("root");
      if (root?.dataset.courseDesignerHidden === "true") {
        root.removeAttribute("aria-hidden");
        root.inert = false;
        root.style.removeProperty("display");
        delete root.dataset.courseDesignerHidden;
      }
      return;
    }
    if (document.querySelector(".course-designer-page")) return;
    const appRoot = document.getElementById("root");
    if (appRoot) {
      appRoot.dataset.courseDesignerHidden = "true";
      appRoot.setAttribute("aria-hidden", "true");
      appRoot.inert = true;
      appRoot.style.setProperty("display", "none", "important");
    }
    const page = document.createElement("div");
    page.className = "course-designer-page";
    page.innerHTML = '<header class="course-designer-header"><button type="button" aria-label="返回">‹</button><div><h1>研学课程设计器</h1><p>课程 · 活动 · 内容 · 评价</p></div></header><main><form class="course-designer-form">' +
      '<section><label for="designer-topic">关键词 / 主题</label><input id="designer-topic" name="topic" maxlength="120" placeholder="例如：生态文明、工业遗产、乡村振兴"></section>' +
      '<section><label for="designer-location">地点 / 场域</label><input id="designer-location" name="location" maxlength="120" placeholder="例如：苏州园林、井冈山、某社区或企业"></section>' +
      '<section><label for="designer-audience">适用人群</label><select id="designer-audience" name="audience">' + Object.keys(courseDesignerAudiences).map(function (name) { return '<option value="' + escapeHtml(name) + '">' + escapeHtml(name) + '</option>'; }).join("") + '</select></section>' +
      '<section><label for="designer-course-type">课程类型</label><select id="designer-course-type" name="courseType">' + Object.keys(courseDesignerTypes).map(function (name) { return '<option value="' + escapeHtml(name) + '">' + escapeHtml(name) + ' · ' + escapeHtml(courseDesignerTypes[name]) + '</option>'; }).join("") + '</select></section>' +
      '<div class="course-designer-form-grid"><section><label for="designer-duration">课程时长</label><select id="designer-duration" name="duration"><option>半天</option><option selected>1天</option><option>2天1夜</option><option>3天2夜</option><option>5天专题班</option><option>长期项目制</option></select></section><section><label for="designer-mode">组织形式</label><select id="designer-mode" name="mode"><option>综合研学</option><option>现场教学</option><option>专题培训</option><option>田野调查</option><option>团队共创</option><option>项目制学习</option></select></section></div>' +
      '<fieldset><legend>设计重点</legend><div class="course-designer-checks">' + ["文化理解","科学探究","思政教育","劳动实践","社会调查","职业发展","团队建设","成果创作"].map(function (item) { return '<label><input type="checkbox" name="emphasis" value="' + item + '"><span>' + item + '</span></label>'; }).join("") + '</div></fieldset>' +
      '<fieldset><legend>活动方法（最多选6项）</legend><div class="course-designer-checks">' + Object.keys(courseDesignerMethodOutputs).map(function (item) { return '<label><input type="checkbox" name="methods" value="' + item + '"><span>' + item + '</span></label>'; }).join("") + '</div></fieldset>' +
      '<button class="course-designer-submit" type="submit">生成课程方案</button><p class="course-designer-status" aria-live="polite"></p></form><div class="course-designer-result"></div></main>';
    page.querySelector("header button").addEventListener("click", function () { window.history.length > 1 ? window.history.back() : window.location.hash = "#/home"; });
    const form = page.querySelector("form");
    const result = page.querySelector(".course-designer-result");
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const input = { topic: String(data.get("topic") || "").trim(), location: String(data.get("location") || "").trim(), audience: String(data.get("audience") || ""), courseType: String(data.get("courseType") || "综合主题"), duration: String(data.get("duration") || "1天"), mode: String(data.get("mode") || "综合研学"), emphasis: data.getAll("emphasis"), methods: data.getAll("methods").slice(0, 6) };
      const status = form.querySelector(".course-designer-status");
      if (!input.topic && !input.location) { status.textContent = "请至少填写一个关键词或地点"; return; }
      const submit = form.querySelector("button[type='submit']");
      submit.disabled = true;
      status.textContent = "正在设计课程结构、活动与评价...";
      const response = await requestCourseDesign(input);
      submit.disabled = false;
      status.textContent = "";
      form.hidden = true;
      renderCourseDesignerResult(result, response.plan, response.online);
      page.querySelector("main").scrollTop = 0;
    });
    document.body.appendChild(page);
  }

  async function requestAiGuide(question) {
    aiGuideHistory.push({ role: "user", content: question });
    try {
      const response = await fetch("/api/ai-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: aiGuideHistory.slice(-10), page: window.location.hash })
      });
      const type = response.headers.get("content-type") || "";
      if (!response.ok || !type.includes("application/json")) throw new Error("AI service unavailable");
      const data = await response.json();
      if (!data.reply) throw new Error("Empty AI reply");
      aiGuideHistory.push({ role: "assistant", content: data.reply });
      return { reply: data.reply, online: true };
    } catch (_error) {
      const reply = localGuideReply(question);
      aiGuideHistory.push({ role: "assistant", content: reply });
      return { reply: reply, online: false };
    }
  }

  function appendGuideMessage(container, role, text) {
    const row = document.createElement("div");
    row.className = "ai-guide-message " + role;
    const bubble = document.createElement("div");
    bubble.textContent = text;
    row.appendChild(bubble);
    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
    return row;
  }

  function showAiGuide() {
    document.querySelector(".ai-guide-modal")?.remove();
    const modal = document.createElement("div");
    modal.className = "ai-guide-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "AI研学导游");
    modal.innerHTML = '<div class="ai-guide-dialog"><header><div class="ai-guide-mark">AI</div><div><strong>AI研学导游</strong>' +
      '<small class="ai-guide-status">正在连接...</small></div><button type="button" class="ai-guide-close" aria-label="关闭AI导游">×</button></header>' +
      '<main class="ai-guide-messages" aria-live="polite"></main><div class="ai-guide-suggestions">' +
      '<button type="button">推荐适合我的研学地</button><button type="button">敦煌三天怎么安排</button><button type="button">研学要带什么</button></div>' +
      '<form><textarea rows="1" maxlength="500" aria-label="向AI导游提问" placeholder="问路线、课程、装备或安全事项"></textarea>' +
      '<button type="submit" aria-label="发送问题">➤</button></form></div>';
    const messages = modal.querySelector(".ai-guide-messages");
    const status = modal.querySelector(".ai-guide-status");
    const input = modal.querySelector("textarea");
    const send = modal.querySelector('form button[type="submit"]');
    appendGuideMessage(messages, "assistant", "你好，我是你的研学导游。你想了解哪个目的地，或者需要我帮你规划行程？");

    async function ask(question) {
      if (!question || send.disabled) return;
      appendGuideMessage(messages, "user", question);
      input.value = "";
      send.disabled = true;
      status.textContent = "思考中...";
      const pending = appendGuideMessage(messages, "assistant", "正在整理研学资料...");
      const result = await requestAiGuide(question);
      pending.querySelector("div").textContent = result.reply;
      status.textContent = result.online ? "在线AI" : "本地知识模式";
      send.disabled = false;
      input.focus();
      messages.scrollTop = messages.scrollHeight;
    }

    modal.querySelector("form").addEventListener("submit", function (event) { event.preventDefault(); ask(input.value.trim()); });
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); modal.querySelector("form").requestSubmit(); }
    });
    modal.querySelectorAll(".ai-guide-suggestions button").forEach(function (button) {
      button.addEventListener("click", function () { ask(button.textContent.trim()); });
    });
    modal.querySelector(".ai-guide-close").addEventListener("click", function () { modal.remove(); });
    modal.addEventListener("click", function (event) { if (event.target === modal) modal.remove(); });
    document.body.appendChild(modal);
    status.textContent = "AI已就绪";
    input.focus();
  }

  function bindAiGuide(root) {
    const candidates = Array.from(root.querySelectorAll ? root.querySelectorAll("button, [role='button'], .cursor-pointer") : []);
    candidates.forEach(function (item) {
      const text = item.textContent.trim();
      if (text !== "AI助手" && !text.includes("AI智能规划") && !/AI.*导游.*小知/.test(text)) return;
      if (item.dataset.aiGuideBound) return;
      item.dataset.aiGuideBound = "true";
      if (item.tagName !== "BUTTON") {
        item.setAttribute("role", "button");
        item.setAttribute("tabindex", "0");
      }
      item.setAttribute("aria-label", "打开AI研学导游");
      const open = function (event) {
        event.preventDefault();
        event.stopPropagation();
        showAiGuide();
      };
      item.addEventListener("click", open, true);
      item.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") open(event);
      });
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function toggleExtraPostLike(button, post) {
    if (!hasRealAccount()) {
      window.zhixingApi?.openAuth?.();
      return;
    }
    const active = button.dataset.liked === "true";
    button.dataset.liked = active ? "false" : "true";
    button.classList.toggle("is-liked", !active);
    button.querySelector("span").textContent = String(post.likes + (active ? 0 : 1));
  }

  function isCommunityRoute() {
    return window.location.hash === "#/community" || window.location.hash.startsWith("#/post/") || window.location.hash === "#/home" || window.location.hash === "#/" || window.location.hash === "";
  }

  function openGuestAuth(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    window.zhixingApi?.openAuth?.();
  }

  function findCommunityPostSurface(node) {
    return node?.closest?.(".extra-post-actions,.extra-community-post,.extra-post-dialog,[data-extra-post-id],article,.card-shadow,.rounded-2xl,.rounded-xl");
  }

  function isCommunityActionButton(button) {
    if (!button || button.closest(".community-filter-bar") || button.classList.contains("cloud-community-entry")) return false;
    if (button.closest(".extra-post-actions")) return true;
    const text = ((button.textContent || "") + " " + (button.getAttribute("aria-label") || "") + " " + (button.title || "")).replace(/\s+/g, "");
    if (/点赞|已赞|赞|评论|回复|分享|发送评论|发送|提交|发布|♡|♥/.test(text)) return true;
    const surface = findCommunityPostSurface(button);
    if (!surface) return false;
    const surfaceText = (surface.textContent || "").replace(/\s+/g, "");
    const compactActionText = text.length > 0 && text.length <= 12;
    const looksLikePost = surfaceText.length > 80 && (surface.querySelector("img") || surfaceText.includes("#"));
    return looksLikePost && compactActionText;
  }

  function blockGuestCommunityAction(event) {
    if (!isCommunityRoute() || hasRealAccount()) return false;
    const button = event.target?.closest?.("button");
    if (!button) return false;
    if (!isCommunityActionButton(button)) return false;
    openGuestAuth(event);
    return true;
  }

  function guardGuestCommunityAction(event) {
    if (!isCommunityRoute()) return;
    if (hasRealAccount()) return;
    blockGuestCommunityAction(event);
  }

  function guardGuestCommunityCommentKey(event) {
    if (!isCommunityRoute()) return;
    if (hasRealAccount() || event.key !== "Enter") return;
    const input = event.target?.closest?.("input,textarea");
    if (!input) return;
    const surface = findCommunityPostSurface(input) || input.closest("form,.extra-post-dialog,.extra-community-post,article,.card-shadow,.rounded-2xl,.rounded-xl");
    const label = ((input.placeholder || "") + " " + (input.getAttribute("aria-label") || "") + " " + (surface?.textContent || "")).replace(/\s+/g, "");
    if (!surface && !/评论|回复|留言/.test(label)) return;
    openGuestAuth(event);
  }

  function guardGuestCommunitySubmit(event) {
    if (!isCommunityRoute()) return;
    if (hasRealAccount()) return;
    const form = event.target?.closest?.("form");
    const text = (form?.textContent || "").replace(/\s+/g, "");
    if (!/评论|回复|动态|发布|留言|璇勮|鍥炲/.test(text)) return;
    openGuestAuth(event);
  }

  function normalizeCommunityTagChips(root) {
    if (!isCommunityRoute()) return;
    const scope = root?.querySelectorAll ? root : document;
    const tagWords = /^(#[^#\s]{1,12}|研学日记|知识分享|成果展示|活动交流|日志|作品|问答|打卡|历史|自然|科技|人文|红色|实践|鏃ュ織|浣滃搧|闂瓟|鎵撳崱)$/;
    const styleChip = function (node) {
      node.classList?.add("community-tag-chip-fixed");
      node.style.setProperty("display", "inline-flex", "important");
      node.style.setProperty("align-items", "center", "important");
      node.style.setProperty("justify-content", "center", "important");
      node.style.setProperty("width", "auto", "important");
      node.style.setProperty("height", "auto", "important");
      node.style.setProperty("min-width", "0", "important");
      node.style.setProperty("min-height", "0", "important");
      node.style.setProperty("max-width", "none", "important");
      node.style.setProperty("max-height", "none", "important");
      node.style.setProperty("padding", "3px 8px", "important");
      node.style.setProperty("margin", "0 6px 6px 0", "important");
      node.style.setProperty("border-radius", "4px", "important");
      node.style.setProperty("background", "#eff6ff", "important");
      node.style.setProperty("color", "#2563eb", "important");
      node.style.setProperty("font-size", "11px", "important");
      node.style.setProperty("font-weight", "500", "important");
      node.style.setProperty("line-height", "1.35", "important");
      node.style.setProperty("white-space", "nowrap", "important");
      node.style.setProperty("letter-spacing", "0", "important");
      node.style.setProperty("clip-path", "none", "important");
      node.style.setProperty("aspect-ratio", "auto", "important");
    };
    Array.from(scope.querySelectorAll("span,small,b,div,a,p")).forEach(function (node) {
      const text = (node.textContent || "").trim();
      if (!tagWords.test(text)) return;
      if (node.closest("nav,.community-filter-bar,.amap-filter,.amap-tools")) return;
      const card = node.closest(".extra-community-post,.extra-post-dialog,article,.card-shadow,.rounded-2xl,.rounded-xl");
      if (!card) return;
      styleChip(node);
      let parent = node.parentElement;
      let depth = 0;
      while (parent && parent !== card && depth < 5) {
        const parentText = (parent.textContent || "").trim();
        if (parentText !== text || (parentText.match(/#/g) || []).length > 1 || parent.querySelectorAll("img,button,article").length > 0) break;
        styleChip(parent);
        parent = parent.parentElement;
        depth += 1;
      }
    });
  }

  function showExtraCommunityPost(post) {
    document.querySelector(".extra-post-modal")?.remove();
    window.scrollTo(0, 0);
    const modal = document.createElement("div");
    modal.className = "extra-post-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", post.user + "的研学帖子");
    modal.innerHTML = '<div class="extra-post-dialog"><header><button type="button" aria-label="关闭帖子详情">‹</button>' +
      '<strong>帖子详情</strong><span></span></header><main><div class="extra-post-author"><img src="' + avatarDataUrl(post.user) +
      '" alt="' + escapeHtml(post.user) + '"><div><strong>' + escapeHtml(post.user) + '</strong><small>' + escapeHtml(post.time + " · " + post.location) +
      '</small></div></div><p>' + escapeHtml(post.content) + '</p><div class="extra-post-tags">' + post.tags.map(function (tag) {
        return '<span>#' + escapeHtml(tag) + '</span>';
      }).join("") + '</div><img class="extra-post-detail-photo" src="' + post.photo.url + '" alt="' + escapeHtml(post.photo.label) +
      '" loading="eager" referrerpolicy="no-referrer" data-source="' + post.photo.source + '"><a class="extra-photo-source" href="' +
      post.photo.source + '" target="_blank" rel="noopener noreferrer">查看图片来源</a><div class="extra-post-actions"><button type="button" class="extra-post-like">♡ <span>' +
      post.likes + '</span></button><button type="button">评论 0</button><button type="button">分享</button></div></main></div>';
    modal.querySelector("header button").addEventListener("click", function () { modal.remove(); });
    modal.querySelector(".extra-post-like").addEventListener("click", function (event) { toggleExtraPostLike(event.currentTarget, post); });
    document.body.appendChild(modal);
    modal.querySelector("main").scrollTop = 0;
  }

  function createExtraCommunityCard(post) {
    const card = document.createElement("article");
    card.className = "extra-community-post bg-white rounded-2xl p-4 card-shadow cursor-pointer";
    card.dataset.extraPostId = post.id;
    card.dataset.communityCategory = post.category;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "查看" + post.user + "的研学帖子");
    card.innerHTML = '<div class="extra-post-author"><img src="' + avatarDataUrl(post.user) + '" alt="' + escapeHtml(post.user) +
      '"><div><strong>' + escapeHtml(post.user) + '</strong><small>' + escapeHtml(post.time + " · " + post.location) +
      '</small></div></div><p class="extra-post-copy">' + escapeHtml(post.content) + '</p><div class="extra-post-tags">' +
      post.tags.map(function (tag) { return '<span>#' + escapeHtml(tag) + '</span>'; }).join("") + '</div><img class="extra-post-cover" src="' +
      post.photo.url + '" alt="' + escapeHtml(post.photo.label) + '" loading="lazy" referrerpolicy="no-referrer" data-source="' +
      post.photo.source + '"><div class="extra-post-actions">' +
      '<button type="button" class="extra-post-like">♡ <span>' + post.likes + '</span></button><button type="button">评论 0</button><button type="button">分享</button></div>';
    const open = function () { showExtraCommunityPost(post); };
    card.addEventListener("click", function (event) { if (!event.target.closest("button")) open(); });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
    card.querySelector(".extra-post-like").addEventListener("click", function (event) {
      event.stopPropagation();
      toggleExtraPostLike(event.currentTarget, post);
    });
    return card;
  }

  function renderExtraCommunityPosts() {
    const heading = Array.from(document.querySelectorAll("h1")).find(function (item) { return item.textContent.trim() === "研学社区"; });
    if (!heading) return;
    const list = Array.from(document.querySelectorAll("div.space-y-4")).find(function (container) {
      return Array.from(container.children).some(function (child) { return child.classList.contains("card-shadow") && child.classList.contains("cursor-pointer"); });
    });
    if (!list) return;
    const originalCategories = ["日志", "作品", "问答", "打卡"];
    Array.from(list.children).filter(function (child) {
      return child.classList.contains("card-shadow") && child.classList.contains("cursor-pointer") && !child.dataset.extraPostId;
    }).forEach(function (card, index) {
      if (!card.dataset.communityCategory && originalCategories[index]) card.dataset.communityCategory = originalCategories[index];
    });
    extraCommunityPosts.forEach(function (post) {
      if (!list.querySelector('[data-extra-post-id="' + post.id + '"]')) list.appendChild(createExtraCommunityCard(post));
    });
    applyCommunityFilter(selectedCommunityCategory);
  }

  function applyCommunityFilter(category) {
    selectedCommunityCategory = category;
    document.querySelectorAll("[data-community-category]").forEach(function (card) {
      card.style.display = category === "全部" || card.dataset.communityCategory === category ? "" : "none";
    });
    document.querySelectorAll("[data-community-filter]").forEach(function (button) {
      const active = button.dataset.communityFilter === category;
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.style.background = active ? "#34d399" : "transparent";
      button.style.color = active ? "#ffffff" : "#64748b";
    });
  }

  function bindCommunityFilters() {
    const heading = Array.from(document.querySelectorAll("h1")).find(function (item) { return item.textContent.trim() === "研学社区"; });
    if (!heading) return;
    const categories = ["全部", "研学日志", "作品展示", "学习问答", "基地打卡"];
    const values = { "全部": "全部", "研学日志": "日志", "作品展示": "作品", "学习问答": "问答", "基地打卡": "打卡" };
    Array.from(document.querySelectorAll("button")).forEach(function (button) {
      const label = categories.find(function (name) { return button.textContent.includes(name); });
      if (!label) return;
      const value = values[label];
      button.parentElement?.classList.add("community-filter-bar");
      button.dataset.communityFilter = value;
      if (!button.dataset.communityFilterBound) {
        button.dataset.communityFilterBound = "true";
        button.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          applyCommunityFilter(value);
          window.scrollTo(0, 0);
        }, true);
      }
    });
    applyCommunityFilter(selectedCommunityCategory);
  }

  function buildDiscoverCatalog(name) {
    const config = discoverCategoryCatalogs[name];
    return Array.from({ length: config.count }, function (_unused, index) {
      const topic = config.topics[index % config.topics.length];
      const task = config.tasks[index % config.tasks.length];
      const unit = Math.floor(index / config.topics.length) + 1;
      return {
        id: name + "-" + (index + 1),
        title: topic + " · 第" + unit + "单元",
        task: task,
        duration: 20 + (index % 4) * 10,
        level: ["入门", "进阶", "实践"][index % 3],
        description: "围绕“" + topic + "”开展" + task + "，通过观察、记录与讨论完成本单元研学成果。"
      };
    });
  }

  function showDiscoverCategory(name) {
    document.querySelector(".discover-category-modal")?.remove();
    const items = buildDiscoverCatalog(name);
    const modal = document.createElement("div");
    modal.className = "discover-category-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", name + "内容目录");
    const previousOverflow = document.body.style.overflow;
    const close = function () { document.body.style.overflow = previousOverflow; modal.remove(); };

    function renderList() {
      modal.innerHTML = '<div class="discover-category-dialog"><header><button type="button" aria-label="关闭分类内容">×</button>' +
        '<div><strong>' + name + '</strong><small>共 ' + items.length + ' 项研学内容</small></div></header>' +
        '<div class="discover-category-list" role="list"></div></div>';
      const list = modal.querySelector(".discover-category-list");
      items.forEach(function (item, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "discover-category-item";
        button.setAttribute("role", "listitem");
        button.innerHTML = '<span class="discover-category-number">' + String(index + 1).padStart(2, "0") + '</span><span><strong>' +
          escapeHtml(item.title) + '</strong><small>' + item.level + ' · ' + item.duration + '分钟 · ' + escapeHtml(item.task) + '</small></span><b>›</b>';
        button.addEventListener("click", function () { renderDetail(item); });
        list.appendChild(button);
      });
      modal.querySelector("header button").addEventListener("click", close);
    }

    function renderDetail(item) {
      modal.innerHTML = '<div class="discover-category-dialog"><header><button type="button" aria-label="返回分类目录">‹</button>' +
        '<div><strong>' + escapeHtml(item.title) + '</strong><small>' + name + ' · ' + item.level + '</small></div></header>' +
        '<main class="discover-category-detail"><span class="discover-detail-type">' + name + '</span><h2>' + escapeHtml(item.title) +
        '</h2><p>' + escapeHtml(item.description) + '</p><dl><div><dt>学习时长</dt><dd>' + item.duration + '分钟</dd></div>' +
        '<div><dt>难度</dt><dd>' + item.level + '</dd></div><div><dt>研学任务</dt><dd>' + escapeHtml(item.task) + '</dd></div></dl>' +
        '<section><h3>学习步骤</h3><ol><li>阅读背景资料并提出问题</li><li>完成现场观察或资料分析</li><li>整理记录并形成小组成果</li></ol></section>' +
        '<button type="button" class="discover-related-video">播放相关课程视频</button></main></div>';
      modal.querySelector("header button").addEventListener("click", renderList);
      modal.querySelector(".discover-related-video").addEventListener("click", function () {
        close();
        showPlaylistModal(name, themeVideos[name]);
      });
      modal.querySelector(".discover-category-detail").scrollTop = 0;
    }

    renderList();
    modal.addEventListener("click", function (event) { if (event.target === modal) close(); });
    document.body.style.overflow = "hidden";
    document.body.appendChild(modal);
  }

  function bindDiscoverCategories() {
    const pageTitle = Array.from(document.querySelectorAll("h1")).find(function (item) { return item.textContent.trim() === "发现"; });
    if (!pageTitle) return;
    const categoryCards = Array.from(document.querySelectorAll("button")).filter(function (button) {
      return Object.keys(discoverCategoryCatalogs).some(function (name) { return button.textContent.includes(name); }) && /\d+个/.test(button.textContent);
    });
    const categoryGrid = categoryCards[0] && categoryCards[0].parentElement;
    if (categoryGrid && categoryCards.every(function (card) { return card.parentElement === categoryGrid; })) {
      categoryGrid.style.display = "none";
      categoryGrid.setAttribute("aria-hidden", "true");
      categoryGrid.dataset.discoverCategoriesRemoved = "true";
    }
  }

  function renderPopularProjectsPage() {
    const existing = document.querySelector(".popular-projects-page");
    if (window.location.hash !== "#/projects") {
      if (existing) existing.remove();
      return;
    }
    if (existing) return;
    const page = document.createElement("div");
    page.className = "popular-projects-page";
    page.innerHTML = '<header><button type="button" aria-label="返回发现页">‹</button><div><h1>热门研学项目</h1><p>共 ' +
      popularProjectCatalog.length + ' 个项目</p></div></header><main class="popular-projects-list"></main>';
    const list = page.querySelector(".popular-projects-list");
    popularProjectCatalog.forEach(function (project, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "popular-project-card";
      button.setAttribute("aria-label", "查看" + project.title + "详情");
      button.innerHTML = '<img src="' + project.photo.url + '" alt="' + escapeHtml(project.photo.label) + '" loading="lazy" referrerpolicy="no-referrer" data-source="' +
        project.photo.source + '"><span class="popular-project-rank">TOP ' + (index + 1) + '</span><div><small>' + escapeHtml(project.category) +
        '</small><h2>' + escapeHtml(project.title) + '</h2><p>' + escapeHtml(project.location) + ' · ' + project.duration +
        '</p><strong>★ ' + project.rating + '</strong></div>';
      button.addEventListener("click", function () { window.location.hash = project.route; });
      list.appendChild(button);
    });
    page.querySelector("header button").addEventListener("click", function () { window.location.hash = "/discover"; });
    document.body.appendChild(page);
    page.querySelector("main").scrollTop = 0;
  }

  function bindPopularProjectsMore() {
    const heading = Array.from(document.querySelectorAll("h2")).find(function (item) { return item.textContent.trim() === "热门研学项目"; });
    const section = heading && heading.closest("section");
    if (!section) return;
    const originalMore = Array.from(section.querySelectorAll("button")).find(function (button) { return button.textContent.includes("更多"); });
    if (!originalMore || originalMore.dataset.popularProjectsBound) return;
    const more = originalMore.cloneNode(true);
    originalMore.replaceWith(more);
    more.dataset.popularProjectsBound = "true";
    more.setAttribute("aria-label", "查看更多热门研学项目");
    more.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      window.location.hash = "/projects";
    });
  }

  function readZhiProgress(title) {
    if (!window.zhixingApi?.user || window.zhixingApi.user.role !== "student") return { done: zhiTaskConfigs[title].steps.map(function () { return false; }) };
    try {
      const saved = JSON.parse(localStorage.getItem("zhi-task-" + title) || "null");
      if (saved && Array.isArray(saved.done)) return saved;
    } catch (_error) {}
    return { done: zhiTaskConfigs[title].steps.map(function () { return false; }) };
  }

  function writeZhiProgress(title, state) {
    if (!window.zhixingApi?.user || window.zhixingApi.user.role !== "student") return;
    try { localStorage.setItem("zhi-task-" + title, JSON.stringify(state)); } catch (_error) {}
    window.zhixingApi.api("/api/progress/by-title", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: title, progress: zhiProgressPercent(title, state), state: state }) }).catch(function () {});
  }

  function zhiProgressPercent(title, state) {
    return Math.round(state.done.filter(Boolean).length / zhiTaskConfigs[title].steps.length * 100);
  }

  function applyZhiTaskProgress() {
    if (window.location.hash === "#/zhi-xing" && !hasRealAccount()) return;
    Object.keys(zhiTaskConfigs).forEach(function (title) {
      const heading = Array.from(document.querySelectorAll("h4")).find(function (item) { return item.textContent.trim() === title; });
      const card = heading && heading.closest("div.p-3.rounded-xl");
      if (!card) return;
      card.dataset.zhiTaskTitle = title;
      const state = readZhiProgress(title);
      const percent = zhiProgressPercent(title, state);
      let progress = card.querySelector(".zhi-task-inline-progress");
      if (!progress) {
        progress = document.createElement("div");
        progress.className = "zhi-task-inline-progress";
        const description = card.querySelector("p");
        if (description) description.insertAdjacentElement("afterend", progress);
      }
      const progressMarkup = '<span><i style="width:' + percent + '%"></i></span><b>' + percent + '%</b>';
      if (progress.innerHTML !== progressMarkup) progress.innerHTML = progressMarkup;
      Array.from(card.querySelectorAll("span,p,div")).forEach(function (node) {
        if (node.children.length === 0 && /^\d+%$/.test(node.textContent.trim()) && node.textContent.trim() !== percent + "%") node.textContent = percent + "%";
      });
      const action = Array.from(card.querySelectorAll("button")).find(function (button) { return ["开始", "继续", "查看成果"].includes(button.textContent.trim()); });
      const actionLabel = percent === 100 ? "查看成果" : percent > 0 ? "继续" : "开始";
      if (action && action.textContent.trim() !== actionLabel) action.textContent = actionLabel;
    });
  }

  function showZhiTask(title) {
    if (!window.zhixingApi?.user) { window.zhixingApi?.openAuth(); return; }
    if (window.zhixingApi.user.role !== "student") return;
    document.querySelector(".zhi-action-page")?.remove();
    const config = zhiTaskConfigs[title];
    let state = readZhiProgress(title);
    const page = document.createElement("div");
    page.className = "zhi-action-page";
    page.setAttribute("role", "dialog");
    page.setAttribute("aria-modal", "true");
    page.setAttribute("aria-label", title);
    page.innerHTML = '<header><button type="button" aria-label="关闭任务">‹</button><div><h1>' + escapeHtml(title) +
      '</h1><p>完成可获得 +' + config.points + ' 积分</p></div></header><main></main>';
    const main = page.querySelector("main");

    function saveAndRender() {
      writeZhiProgress(title, state);
      applyZhiTaskProgress();
      render();
    }

    function renderQuestion(index) {
      const questions = {
        3: { text: "土尔扈特东归的重要历史意义是什么？", options: ["扩大海外贸易", "维护国家统一与民族团结", "改变草原气候"], correct: 1 },
        4: { text: "这段历史带给今天最重要的启示是什么？", options: ["珍视团结与文化认同", "减少文化交流", "只关注个人选择"], correct: 0 }
      };
      const question = questions[index];
      if (!question) return;
      main.innerHTML = '<section class="zhi-quiz"><button type="button" class="zhi-back-steps">‹ 返回任务步骤</button><span>第 ' + (index + 1) +
        ' 题</span><h2>' + question.text + '</h2><div class="zhi-quiz-options"></div><p class="zhi-quiz-feedback"></p></section>';
      const options = main.querySelector(".zhi-quiz-options");
      question.options.forEach(function (option, optionIndex) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", function () {
          if (optionIndex === question.correct) {
            state.done[index] = true;
            main.querySelector(".zhi-quiz-feedback").textContent = "回答正确，任务进度已更新。";
            setTimeout(saveAndRender, 450);
          } else {
            main.querySelector(".zhi-quiz-feedback").textContent = "答案不正确，请结合历史意义再思考。";
          }
        });
        options.appendChild(button);
      });
      main.querySelector(".zhi-back-steps").addEventListener("click", render);
    }

    function render() {
      const percent = zhiProgressPercent(title, state);
      main.innerHTML = '<div class="zhi-task-progress"><div><span>任务进度</span><b>' + percent + '%</b></div><span><i style="width:' + percent +
        '%"></i></span></div><section class="zhi-task-steps"><h2>任务步骤</h2><div></div></section>' +
        (percent === 100 ? '<div class="zhi-task-complete"><strong>任务已完成</strong><p>+' + config.points + ' 积分已计入本次研学成果。</p></div>' : '');
      const steps = main.querySelector(".zhi-task-steps > div");
      config.steps.forEach(function (step, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = state.done[index] ? "is-done" : "";
        button.innerHTML = '<span>' + (state.done[index] ? "✓" : index + 1) + '</span><strong>' + escapeHtml(step) + '</strong><small>' +
          (state.done[index] ? "已完成" : title === "历史知识测验" ? "点击答题" : "点击完成") + '</small>';
        button.addEventListener("click", function () {
          if (state.done[index]) return;
          if (title === "历史知识测验") renderQuestion(index);
          else { state.done[index] = true; saveAndRender(); }
        });
        steps.appendChild(button);
      });
      main.scrollTop = 0;
    }

    page.querySelector("header button").addEventListener("click", function () { dismissZhiActionPage(page); });
    document.body.appendChild(page);
    render();
  }

  function bindZhiTaskActions() {
    const title = document.querySelector("h1");
    if (!title || title.textContent.trim() !== "知行导航") return;
    Object.keys(zhiTaskConfigs).forEach(function (taskTitle) {
      const heading = Array.from(document.querySelectorAll("h4")).find(function (item) { return item.textContent.trim() === taskTitle; });
      const card = heading && heading.closest("div.p-3.rounded-xl");
      if (!card) return;
      const action = Array.from(card.querySelectorAll("button")).find(function (button) { return ["开始", "继续", "查看成果"].includes(button.textContent.trim()); });
      if (!action || action.dataset.zhiTaskBound) return;
      action.dataset.zhiTaskBound = "true";
      action.addEventListener("click", function (event) { event.preventDefault(); event.stopPropagation(); showZhiTask(taskTitle); });
    });
    applyZhiTaskProgress();
  }

  function showZhiTool(type) {
    document.querySelector(".zhi-action-page")?.remove();
    const titles = { "知识": "研学知识库", "记录": "研学记录", "路线": "东归研学路线", "安全": "安全中心" };
    const page = document.createElement("div");
    page.className = "zhi-action-page";
    page.setAttribute("role", "dialog");
    page.setAttribute("aria-modal", "true");
    page.setAttribute("aria-label", titles[type]);
    page.innerHTML = '<header><button type="button" aria-label="关闭' + type + '">‹</button><div><h1>' + titles[type] + '</h1><p>土尔扈特部回归研学</p></div></header><main></main>';
    const main = page.querySelector("main");
    if (type === "知识") {
      main.innerHTML = '<div class="zhi-knowledge-list"></div>';
      zhiKnowledgeTopics.forEach(function (topic) {
        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = '<strong>' + topic.title + '</strong><span>›</span><p>' + topic.text + '</p>';
        button.addEventListener("click", function () { button.classList.toggle("is-open"); });
        main.querySelector(".zhi-knowledge-list").appendChild(button);
      });
    } else if (type === "记录") {
      let saved = "";
      try { saved = localStorage.getItem("zhi-study-note") || ""; } catch (_error) {}
      main.innerHTML = '<section class="zhi-note-editor"><label for="zhi-note">今日研学记录</label><textarea id="zhi-note" rows="12" placeholder="记录观察、问题和收获...">' +
        escapeHtml(saved) + '</textarea><div><span class="zhi-note-status"></span><button type="button">保存记录</button></div></section>';
      main.querySelector(".zhi-note-editor button").addEventListener("click", function () {
        try { localStorage.setItem("zhi-study-note", main.querySelector("textarea").value); } catch (_error) {}
        main.querySelector(".zhi-note-status").textContent = "已保存";
      });
    } else if (type === "路线") {
      const points = ["伏尔加河出发", "穿越哈萨克草原", "抵达伊犁河谷", "承德觐见"];
      main.innerHTML = '<section class="zhi-route-list"><h2>东归路线节点</h2><div></div></section>';
      points.forEach(function (point, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = '<span>' + (index + 1) + '</span><strong>' + point + '</strong><small>' + (index < 2 ? "已学习" : "待探索") + '</small>';
        if (index < 2) button.className = "is-done";
        button.addEventListener("click", function () { button.classList.toggle("is-done"); button.querySelector("small").textContent = button.classList.contains("is-done") ? "已学习" : "待探索"; });
        main.querySelector(".zhi-route-list > div").appendChild(button);
      });
    } else {
      const checks = ["已告知老师健康与用药情况", "已保存领队电话和集合地点", "已准备饮水、防晒和常用药", "清楚掉队与突发情况处理方式"];
      main.innerHTML = '<section class="zhi-safety-list"><div><h2>出发前安全检查</h2><strong>0/' + checks.length + '</strong></div><div class="zhi-safety-checks"></div><p>紧急情况请优先联系带队老师，并拨打当地紧急救援电话。</p></section>';
      checks.forEach(function (check) {
        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = '<span>✓</span><strong>' + check + '</strong>';
        button.addEventListener("click", function () {
          button.classList.toggle("is-checked");
          const count = main.querySelectorAll(".zhi-safety-checks .is-checked").length;
          main.querySelector(".zhi-safety-list > div > strong").textContent = count + "/" + checks.length;
        });
        main.querySelector(".zhi-safety-checks").appendChild(button);
      });
    }
    page.querySelector("header button").addEventListener("click", function () { dismissZhiActionPage(page); });
    document.body.appendChild(page);
    main.scrollTop = 0;
  }

  function dismissZhiActionPage(page) {
    if (!page || !page.isConnected) return;
    const veil = document.createElement("div");
    veil.className = "zhi-action-dismiss-veil";
    veil.style.cssText = "position:fixed;inset:0;z-index:10029;background:#f8fafc;pointer-events:none;";
    document.body.appendChild(veil);
    page.style.opacity = "0";
    page.style.pointerEvents = "none";
    page.style.transition = "opacity 90ms linear";
    setTimeout(function () {
      page.remove();
      setTimeout(function () { veil.remove(); }, 120);
    }, 40);
  }

  function bindZhiTools() {
    const title = document.querySelector("h1");
    if (!title || title.textContent.trim() !== "知行导航") return;
    ["知识", "记录", "路线", "安全"].forEach(function (label) {
      Array.from(document.querySelectorAll("button")).filter(function (button) {
        const text = button.textContent.replace(/^\d+\s*/, "").replace(/^!\s*/, "").trim();
        return text === label;
      }).forEach(function (button) {
        if (button.dataset.zhiToolBound) return;
        button.dataset.zhiToolBound = "true";
        button.setAttribute("aria-label", "打开" + label);
        button.addEventListener("click", function (event) { event.preventDefault(); event.stopPropagation(); showZhiTool(label); });
      });
    });
  }

  function fixProfileCertificates() {
    const heading = Array.from(document.querySelectorAll("h2")).find(function (item) {
      return item.textContent.trim() === "学习证书";
    });
    const section = heading && heading.parentElement && heading.parentElement.parentElement;
    if (!section) return;
    const list = Array.from(section.children).find(function (item) {
      return item.classList && item.classList.contains("overflow-x-auto");
    });
    if (list) list.classList.add("profile-certificates-list");
  }

  const profileMenuLabels = ["我的待办", "我的收藏", "浏览历史", "研学日记", "我的勋章", "积分商城", "消息通知", "帮助与反馈", "设置"];

  function profileExpandableList(main, items) {
    const list = document.createElement("div");
    list.className = "profile-detail-list";
    items.forEach(function (item, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "profile-detail-row";
      button.innerHTML = '<b>' + (item.mark || index + 1) + '</b><span><strong>' + escapeHtml(item.title) + '</strong><small>' +
        escapeHtml(item.meta) + '</small></span><em>›</em><p class="profile-expanded-text">' + escapeHtml(item.detail) + '</p>';
      button.addEventListener("click", function () {
        button.classList.toggle("is-open");
        button.querySelector("em").textContent = button.classList.contains("is-open") ? "⌄" : "›";
      });
      list.appendChild(button);
    });
    main.appendChild(list);
  }

  function renderProfileTodos(main) {
    const summary = document.createElement("div");
    summary.className = "profile-panel-summary";
    const list = document.createElement("div");
    list.className = "profile-detail-list";
    if (!window.zhixingApi?.user) {
      summary.innerHTML = '<span>今日研学任务</span><strong>0/0</strong>';
      list.innerHTML = '<div class="backend-empty">登录并参加课程后，任务、作业和测试会从云端显示。</div>';
      main.append(summary, list);
      return;
    }
    summary.innerHTML = '<span>今日研学任务</span><strong>加载中…</strong>';
    list.innerHTML = '<div class="backend-empty">正在加载任务…</div>';
    (async function () {
      try {
        const data = await window.zhixingApi.api("/api/assignments");
        const todos = (data.assignments || []).filter(function (item) { return ["task", "homework", "test"].includes(item.content_type); });
        const doneCount = todos.filter(function (item) { return item.submission_status === "graded" || item.submission_status === "submitted" || Number(item.progress) >= 100; }).length;
        summary.innerHTML = '<span>今日研学任务</span><strong>' + doneCount + '/' + todos.length + '</strong>';
        list.innerHTML = "";
        if (!todos.length) { list.innerHTML = '<div class="backend-empty">当前没有待办任务，完成老师下发内容后这里会自动更新。</div>'; return; }
        todos.slice(0, 6).forEach(function (item, index) {
          const button = document.createElement("button");
          const meta = (assignmentType(item.content_type) + " · " + escapeHtml(item.course_title || "") + (item.body?.dueAt ? " · 截止 " + formatTime(item.body.dueAt) : "")).replace(/&amp;/g, "&");
          button.type = "button";
          button.className = "profile-detail-row" + (Number(item.progress) >= 100 || item.submission_status ? " is-done" : "");
          button.innerHTML = '<b>' + (Number(item.progress) >= 100 || item.submission_status ? "✓" : index + 1) + '</b><span><strong>' + escapeHtml(item.title) + '</strong><small>' + meta + '</small></span><em>›</em>';
          button.addEventListener("click", function () { window.location.hash = "/course/" + item.course_id; });
          list.appendChild(button);
        });
      } catch (error) {
        summary.innerHTML = '<span>今日研学任务</span><strong>--</strong>';
        list.innerHTML = '<div class="backend-status is-error">' + escapeHtml(error.message) + '</div>';
      }
    })();
    main.append(summary, list);
  }

  function renderProfileBadges(main) {
    const grid = document.createElement("div");
    grid.className = "profile-badge-grid";
    const badges = [
      { mark: "史", title: "历史探究者", meta: "完成历史课程中的3个学习内容", test: function (ctx) { return ctx.history >= 3; } },
      { mark: "察", title: "自然观察员", meta: "完成自然科学课程中的3个学习内容", test: function (ctx) { return ctx.natural >= 3; } },
      { mark: "协", title: "协作之星", meta: "完成2次老师下发的任务或作业", test: function (ctx) { return ctx.assignments >= 2; } },
      { mark: "行", title: "研学达人", meta: "参加2门及以上研学课程", test: function (ctx) { return ctx.enrollments >= 2; } },
      { mark: "记", title: "记录能手", meta: "完成1篇以上已批改作业", test: function (ctx) { return ctx.submissions >= 1; } },
      { mark: "安", title: "安全先锋", meta: "完成全部行前安全学习", test: function (ctx) { return ctx.safety >= 1; } }
    ];
    if (!window.zhixingApi?.user) {
      badges.forEach(function (item) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "profile-badge-item";
        button.innerHTML = '<b>' + item.mark + '</b><strong>' + item.title + '</strong><small>' + item.meta + '</small>';
        grid.appendChild(button);
      });
      main.appendChild(grid);
      return;
    }
    grid.innerHTML = '<div class="backend-empty">加载勋章中…</div>';
    (async function () {
      try {
        const [assignments, progress, enrollments, submissions] = await Promise.all([
          window.zhixingApi.api("/api/assignments"),
          window.zhixingApi.api("/api/progress"),
          window.zhixingApi.api("/api/enrollments"),
          window.zhixingApi.api("/api/submissions")
        ]);
        const ctx = {
          history: (progress.progress || []).filter(function (item) { return /历史|东归|承德/.test(item.course_title || ""); }).length,
          natural: (progress.progress || []).filter(function (item) { return /自然|生态|神农架/.test(item.course_title || ""); }).length,
          assignments: (assignments.assignments || []).filter(function (item) { return ["task", "homework", "test"].includes(item.content_type) && item.submission_status; }).length,
          enrollments: (enrollments.enrollments || []).length,
          submissions: (submissions.submissions || []).length,
          safety: (progress.progress || []).filter(function (item) { return /安全/.test(item.title || ""); }).length
        };
        grid.innerHTML = "";
        badges.forEach(function (item, index) {
          const unlocked = item.test(ctx);
          const button = document.createElement("button");
          button.type = "button";
          button.className = "profile-badge-item" + (unlocked ? " is-open" : "");
          button.innerHTML = '<b>' + item.mark + '</b><strong>' + item.title + '</strong><small>' + (unlocked ? "已获得 · " + item.meta : "未获得 · " + item.meta) + '</small>';
          button.addEventListener("click", function () {
            button.querySelector("small").textContent = (unlocked ? "已获得" : "待解锁") + " · " + item.meta;
          });
          grid.appendChild(button);
        });
      } catch (_error) {
        grid.innerHTML = '<div class="backend-empty">勋章数据暂不可用</div>';
      }
    })();
    main.appendChild(grid);
  }

  function renderProfileShop(main) {
    const balance = document.createElement("div");
    balance.className = "profile-shop-balance";
    const status = document.createElement("div");
    status.className = "profile-panel-status";
    const list = document.createElement("div");
    list.className = "profile-detail-list";
    if (!window.zhixingApi?.user) {
      balance.innerHTML = '当前积分<strong>0</strong>';
      list.innerHTML = '<div class="backend-empty">登录后才能使用积分商城。</div>';
      main.append(balance, list, status);
      return;
    }
    balance.innerHTML = '当前积分<strong>' + Number(window.zhixingApi.user.points || 0) + '</strong>';
    list.innerHTML = '<div class="backend-empty">正在加载积分商品…</div>';
    (async function () {
      try {
        const [productsData, ordersData] = await Promise.all([window.zhixingApi.api("/api/shop/products"), window.zhixingApi.api("/api/shop/orders")]);
        const redeemed = new Set((ordersData.orders || []).map(function (order) { return order.product_id; }));
        list.innerHTML = "";
        productsData.products.forEach(function (item) {
          const row = document.createElement("div");
          row.className = "profile-detail-row";
          row.innerHTML = '<b>兑</b><span><strong>' + escapeHtml(item.title) + '</strong><small>' + item.points_price + '积分 · 库存 ' + item.stock + ' · ' + escapeHtml(item.description || item.meta || "") + '</small></span>';
          const button = document.createElement("button");
          button.type = "button";
          button.className = "profile-shop-button";
          button.disabled = redeemed.has(item.id) || item.stock < 1;
          button.textContent = redeemed.has(item.id) ? "已兑换" : item.stock < 1 ? "售罄" : "兑换";
          button.addEventListener("click", async function () {
            if (Number(window.zhixingApi.user.points || 0) < Number(item.points_price || 0)) { status.textContent = "积分不足，完成研学任务可继续获得积分。"; return; }
            try {
              await window.zhixingApi.api("/api/shop/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ productId: item.id, deliveryInfo: {} }) });
              status.textContent = item.title + "兑换成功，已生成兑换记录。";
              window.location.reload();
            } catch (error) { status.textContent = error.message; }
          });
          row.appendChild(button);
          list.appendChild(row);
        });
      } catch (error) {
        list.innerHTML = '<div class="backend-status is-error">' + escapeHtml(error.message) + '</div>';
      }
    })();
    main.append(balance, list, status);
  }

  function renderProfileNotifications(main) {
    const summary = document.createElement("div");
    summary.className = "profile-panel-summary";
    const list = document.createElement("div");
    list.className = "profile-detail-list";
    if (!window.zhixingApi?.user) {
      summary.innerHTML = '<span>消息通知</span><strong>0条未读</strong>';
      list.innerHTML = '<div class="backend-empty">登录后才能看到课程提醒、作业批改和家长通知。</div>';
      main.append(summary, list);
      return;
    }
    summary.innerHTML = '<span>消息通知</span><strong>加载中…</strong>';
    list.innerHTML = '<div class="backend-empty">正在加载消息…</div>';
    (async function () {
      try {
        const data = await window.zhixingApi.api("/api/notifications");
        const notices = data.notifications || [];
        const unread = notices.filter(function (item) { return !item.read_at; }).length;
        summary.innerHTML = '<span>消息通知</span><strong>' + unread + '条未读</strong>';
        list.innerHTML = "";
        if (!notices.length) { list.innerHTML = '<div class="backend-empty">当前没有消息。</div>'; return; }
        notices.forEach(function (item, index) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "profile-detail-row" + (item.read_at ? " is-open" : "");
          button.innerHTML = '<b>' + (item.read_at ? "✓" : index + 1) + '</b><span><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.message) + '</small></span><em>' + (item.read_at ? "⌄" : "›") + '</em><p class="profile-expanded-text">' + escapeHtml(item.message) + '</p>';
          button.addEventListener("click", async function () {
            if (!item.read_at) {
              await window.zhixingApi.api("/api/notifications/" + item.id + "/read", { method: "PATCH" });
              item.read_at = new Date().toISOString();
            }
            button.classList.add("is-open");
            button.querySelector("em").textContent = "⌄";
            button.querySelector("b").textContent = "✓";
            summary.innerHTML = '<span>消息通知</span><strong>' + notices.filter(function (notice) { return !notice.read_at; }).length + '条未读</strong>';
            syncGuestMessageCount();
          });
          list.appendChild(button);
        });
      } catch (error) {
        summary.innerHTML = '<span>消息通知</span><strong>--</strong>';
        list.innerHTML = '<div class="backend-status is-error">' + escapeHtml(error.message) + '</div>';
      }
    })();
    main.append(summary, list);
  }

  function renderProfileHelp(main) {
    const faqs = [
      ["课程视频无法播放怎么办？", "先检查网络连接，再关闭并重新打开课程详情。视频在应用内播放，不会跳转到外部网站。"],
      ["如何记录研学时长？", "进入课程或任务后会自动记录有效学习时间，学习统计页按周汇总。"],
      ["如何获得学习证书？", "完成指定课程、现场任务和成果提交后，系统会生成对应证书并标记认证状态。"],
      ["照片或头像不显示怎么办？", "刷新页面后仍不显示时，可在反馈框写明页面名称和图片位置。"]
    ];
    const list = document.createElement("div");
    list.className = "profile-help-list";
    faqs.forEach(function (item) {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = '<strong>' + item[0] + '</strong><p>' + item[1] + '</p>';
      button.addEventListener("click", function () { button.classList.toggle("is-open"); });
      list.appendChild(button);
    });
    const form = document.createElement("div");
    form.className = "profile-feedback";
    form.innerHTML = '<label for="profile-feedback-text">问题反馈</label><textarea id="profile-feedback-text" maxlength="300" placeholder="请描述遇到的问题..."></textarea><button type="button">提交反馈</button><div class="profile-panel-status"></div>';
    form.querySelector("button").addEventListener("click", async function () {
      const text = form.querySelector("textarea").value.trim();
      const status = form.querySelector(".profile-panel-status");
      if (!text) { status.textContent = "请先填写问题描述。"; return; }
      try {
        await window.zhixingApi.api("/api/feedback", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ content: text }) });
        form.querySelector("textarea").value = "";
        status.textContent = "反馈已提交到云端。";
      } catch (error) { status.textContent = error.message; }
    });
    main.append(list, form);
  }

  function renderProfileSettings(main) {
    const settings = [
      ["任务截止提醒", "在任务到期前发送应用内提醒", true],
      ["课程更新通知", "新课程上线时显示通知", true],
      ["仅在无线网络播放视频", "减少移动流量使用", false],
      ["自动保存研学记录", "编辑记录时保存在本机", true]
    ];
    settings.forEach(function (item, index) {
      let enabled = item[2];
      try { const value = localStorage.getItem("profile-setting-" + index); if (value !== null) enabled = value === "true"; } catch (_error) {}
      const row = document.createElement("div");
      row.className = "profile-setting-row";
      row.innerHTML = '<span><strong>' + item[0] + '</strong><small>' + item[1] + '</small></span>';
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("role", "switch");
      button.setAttribute("aria-label", item[0]);
      button.setAttribute("aria-checked", String(enabled));
      button.addEventListener("click", function () {
        enabled = !enabled;
        button.setAttribute("aria-checked", String(enabled));
        try { localStorage.setItem("profile-setting-" + index, String(enabled)); } catch (_error) {}
      });
      row.appendChild(button);
      main.appendChild(row);
    });
  }

  function showProfilePanel(type) {
    const cloudPanels = { "积分商城": "shop", "消息通知": "notifications", "设置": "settings" };
    const guestPrivatePanels = ["我的待办", "我的收藏", "浏览历史", "研学日记", "我的勋章", "积分商城", "消息通知"];
    if (!window.zhixingApi?.user && guestPrivatePanels.includes(type)) {
      document.querySelectorAll(".profile-action-page").forEach(function (node) { node.remove(); });
      const page = document.createElement("div");
      page.className = "profile-action-page";
      page.setAttribute("role", "dialog");
      page.setAttribute("aria-modal", "true");
      page.setAttribute("aria-label", type);
      page.innerHTML = '<header><button type="button" aria-label="返回个人中心">‹</button><div><h1>' + type + '</h1><p>登录后查看个人数据</p></div></header><main><div class="guest-profile-notice">该内容属于个人学习数据，登录并参加研学课程后才会显示。</div><button type="button" class="profile-shop-button">登录 / 注册</button></main>';
      page.querySelector("header button").addEventListener("click", function () { page.remove(); });
      page.querySelector(".profile-shop-button").addEventListener("click", function () { page.remove(); window.zhixingApi?.openAuth(); });
      document.body.appendChild(page);
      return;
    }
    if (cloudPanels[type] && window.zhixingApi) { window.zhixingApi.openTool(cloudPanels[type]); return; }
    document.querySelectorAll(".profile-action-page").forEach(function (node) { node.remove(); });
    const subtitles = {
      "我的待办": "集中处理需要完成的研学任务", "我的收藏": "已收藏的课程与研学项目", "浏览历史": "最近查看的课程和内容",
      "研学日记": "记录每次研学中的观察与收获", "我的勋章": "查看已获得和待解锁的成就", "积分商城": "使用研学积分兑换学习用品",
      "消息通知": "任务提醒、学习反馈与活动通知", "帮助与反馈": "常见问题与问题反馈", "设置": "管理通知、播放与记录选项"
    };
    const page = document.createElement("div");
    page.className = "profile-action-page";
    page.setAttribute("role", "dialog");
    page.setAttribute("aria-modal", "true");
    page.setAttribute("aria-label", type);
    page.innerHTML = '<header><button type="button" aria-label="返回个人中心">‹</button><div><h1>' + type + '</h1><p>' + subtitles[type] + '</p></div></header><main></main>';
    const main = page.querySelector("main");
    if (type === "我的待办") renderProfileTodos(main);
    else if (type === "我的收藏") profileExpandableList(main, [
      { mark: "史", title: "土尔扈特东归历史课程", meta: "历史文化 · 5节", detail: "从东归背景、路线、人物和历史影响四个角度完成专题学习。" },
      { mark: "科", title: "草原生态系统观察", meta: "自然科学 · 4节", detail: "学习样方调查、物种记录和生态关系分析方法。" },
      { mark: "建", title: "承德古建筑测绘", meta: "传统文化 · 6节", detail: "观察古建筑布局、屋顶形制和色彩纹样。" },
      { mark: "行", title: "敦煌丝路研学项目", meta: "热门项目 · 6天5晚", detail: "结合莫高窟、鸣沙山和丝路史开展现场任务。" }
    ]);
    else if (type === "浏览历史") profileExpandableList(main, [
      { title: "土尔扈特东归路线", meta: "今天 16:42 · 学习至80%", detail: "上次停留在东归路线选择与关键地点分析。" },
      { title: "草原植物样方调查", meta: "今天 14:10 · 学习至60%", detail: "上次完成样方划定和植物数量记录。" },
      { title: "承德避暑山庄建筑", meta: "昨天 20:35 · 已完成", detail: "已完成建筑布局与园林借景知识学习。" },
      { title: "研学安全基础课程", meta: "昨天 18:12 · 已完成", detail: "已学习集合、掉队和突发情况处理流程。" },
      { title: "小组成果展示方法", meta: "7月21日 · 学习至40%", detail: "上次停留在演讲提纲与小组分工部分。" }
    ]);
    else if (type === "研学日记") profileExpandableList(main, [
      { mark: "15", title: "草原第一日", meta: "2024-10-15 · 内蒙古草原", detail: "记录了15种植物和8种动物，第一次把课本中的生态系统变成了可观察的数据。" },
      { mark: "16", title: "历史的震撼", meta: "2024-10-16 · 研学教室", detail: "学习土尔扈特部东归历史后，对爱国精神和坚韧意志有了更具体的理解。" },
      { mark: "17", title: "小组合作的力量", meta: "2024-10-17 · 研学教室", detail: "小组共同完成东归路线图，通过讨论解决分歧并形成了完整成果。" }
    ]);
    else if (type === "我的勋章") renderProfileBadges(main);
    else if (type === "积分商城") renderProfileShop(main);
    else if (type === "消息通知") renderProfileNotifications(main);
    else if (type === "帮助与反馈") renderProfileHelp(main);
    else renderProfileSettings(main);
    page.querySelector("header button").addEventListener("click", function () { page.remove(); });
    document.body.appendChild(page);
    main.scrollTop = 0;
  }

  function bindProfileMenu() {
    if (window.location.hash !== "#/profile") return;
    profileMenuLabels.forEach(function (label) {
      const matches = Array.from(document.querySelectorAll("button")).filter(function (item) {
        return item.textContent.replace(/\s+/g, "").startsWith(label);
      });
      const button = matches[matches.length - 1];
      if (!button || button.dataset.profilePanelBound) return;
      button.dataset.profilePanelBound = "true";
      button.setAttribute("aria-label", "打开" + label);
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        showProfilePanel(label);
      });
    });
  }

  function handleProfileMenuClick(event) {
    if (window.location.hash !== "#/profile") return;
    if (event.target?.closest?.(".profile-action-page,.backend-modal,.profile-share-modal")) return;
    let target = event.target?.closest?.("button,a,[role='button'],li,.role-profile-menu-fallback,#role-profile-menu-bottom > *");
    let label = "";
    const cleanActions = [
      ["我的待办", "todo"],
      ["我的收藏", "fav"],
      ["浏览历史", "history"],
      ["研学日记", "diary"],
      ["我的勋章", "badge"],
      ["积分商城", "shop"],
      ["消息通知", "notice"],
      ["帮助与反馈", "help"],
      ["设置", "settings"],
      ["退出登录", "logout"]
    ];
    while (target && target !== document.body) {
      const text = (target.textContent || "").replace(/\s+/g, "");
      if (text.length > 90) return;
      const clean = cleanActions.find(function (item) { return text === item[0] || text.startsWith(item[0]); });
      if (clean) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (clean[1] === "logout") forceLogoutAccount();
        else openCleanProfilePanel(clean[0], clean[1]);
        return;
      }
      label = profileMenuLabels.find(function (item) { return text === item || (text.startsWith(item) && text.length <= item.length + 12); }) || "";
      if (label) break;
      target = target.parentElement;
    }
    if (!target || !label) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    showProfilePanel(label);
  }

  function handleAnyProfileActionClick(event) {
    if (window.location.hash !== "#/profile") return;
    if (event.target?.closest?.(".profile-action-page,.backend-modal,.profile-share-modal")) return;
    const actions = [
      ["我的待办", "todo"], ["我的收藏", "fav"], ["浏览历史", "history"], ["研学日记", "diary"],
      ["我的勋章", "badge"], ["积分商城", "shop"], ["消息通知", "notice"], ["帮助与反馈", "help"],
      ["设置", "settings"], ["退出登录", "logout"]
    ];
    let node = event.target?.closest?.("button,a,[role='button'],li,.role-profile-menu-fallback");
    while (node && node !== document.body) {
      if (node.closest?.(".profile-action-page,.backend-modal,.profile-share-modal")) return;
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (text.length > 80) return;
      const found = actions.find(function (item) { return text.includes(item[0]); });
      if (found) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (found[1] === "logout") {
          fastProfileLogout();
        } else {
          openCleanProfilePanel(found[0], found[1]);
        }
        return;
      }
      node = node.parentElement;
    }
  }

  function fastProfileLogout() {
    try {
      document.querySelector(".profile-action-page")?.remove();
      document.querySelector(".backend-modal")?.remove();
      localStorage.removeItem("zhixingReadBadge:#/message");
      sessionStorage.clear();
    } catch (_error) {}
    if (window.zhixingApi?.forceLogout) {
      window.zhixingApi.forceLogout();
      return;
    }
    try { window.zhixingApi?.api?.("/api/auth/logout", { method: "POST" }).catch(function () {}); } catch (_error) {}
    window.location.hash = "/home";
    window.setTimeout(function () { window.location.reload(); }, 20);
  }

  function openCleanProfilePanel(title, key) {
    document.querySelectorAll(".profile-action-page").forEach(function (node) { node.remove(); });
    document.querySelectorAll(".backend-modal,.profile-share-modal").forEach(function (node) { node.remove(); });
    const page = document.createElement("div");
    page.className = "profile-action-page";
    page.setAttribute("role", "dialog");
    page.setAttribute("aria-modal", "true");
    page.setAttribute("aria-label", title);
    page.innerHTML = '<header><button type="button" aria-label="返回">‹</button><div><h1>' + escapeHtml(title) + '</h1><p>账号功能</p></div></header><main></main>';
    const main = page.querySelector("main");
    const user = window.zhixingApi?.user;
    const rows = {
      todo: [["今日作业", "完成老师发布的研学任务和作业"], ["课程提醒", "查看最近需要处理的学习事项"]],
      fav: [["收藏课程", "土尔扈特东归历史课程"], ["收藏基地", "承德研学基地"]],
      history: [["刚刚浏览", "孩子研学课程数据"], ["昨日浏览", "课程视频与资料"]],
      diary: [["研学记录", "记录观察、照片和学习收获"], ["草稿箱", "继续编辑未完成日记"]],
      badge: [["研学达人", "完成课程后自动点亮"], ["协作之星", "完成小组任务后获得"]],
      help: [["常见问题", "登录、课程、消息和资料显示问题"], ["反馈问题", "提交后会进入平台反馈记录"]],
      settings: [["消息通知", "已开启"], ["隐私与账号", "管理登录状态和账号信息"]]
    };
    if (!user && !["help", "settings"].includes(key)) {
      main.innerHTML = '<div class="guest-profile-notice">该内容属于账号数据，登录后才能查看。</div><button type="button" class="profile-shop-button">登录 / 注册</button>';
      main.querySelector("button").addEventListener("click", function () { page.remove(); openAuthPanel(); });
    } else {
      profileExpandableList(main, (rows[key] || rows.settings).map(function (item, index) {
        return { mark: index + 1, title: item[0], meta: user ? "可用" : "登录后同步", detail: item[1] };
      }));
    }
    page.querySelector("header button").addEventListener("click", function () { page.remove(); });
    document.body.appendChild(page);
  }

  function bindCloudEntryPoints() {
    const messageButton = Array.from(document.querySelectorAll("nav button")).find(function (button) { return button.textContent.replace(/\d+/g, "").trim() === "消息"; });
    if (messageButton && !messageButton.dataset.cloudMessagesBound) {
      messageButton.dataset.cloudMessagesBound = "true";
      messageButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (window.location.hash !== "#/message") window.location.hash = "/message";
        window.setTimeout(syncGuestMessageState, 0);
      }, true);
    }
    if (window.location.hash === "#/community") {
      const heading = Array.from(document.querySelectorAll("h1,h2")).find(function (node) { return node.textContent.includes("研学社区"); });
      const header = heading?.parentElement;
      if (header && !header.querySelector(".cloud-community-entry")) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "cloud-community-entry";
        button.textContent = "云端动态";
        button.addEventListener("click", function () { window.zhixingApi?.openTool("community"); });
        header.appendChild(button);
      }
    }
  }

  function setPlainMetricNear(labelText, value, matcher) {
    const labels = Array.from(document.querySelectorAll("p,span,h2,h3,h4,strong,small")).filter(function (node) {
      return node.children.length === 0 && node.textContent.trim() === labelText;
    });
    labels.forEach(function (label) {
      const scope = label.closest("section,div,button") || label.parentElement;
      const candidate = Array.from(scope?.querySelectorAll("p,span,h2,h3,h4,strong,small") || []).find(function (node) {
        return node !== label && node.children.length === 0 && matcher.test(node.textContent.trim());
      });
      if (candidate && candidate.textContent.trim() !== value) candidate.textContent = value;
    });
  }

  let messageCountSyncing = false;

  async function syncGuestMessageCount() {
    const messageButton = Array.from(document.querySelectorAll("nav button")).find(function (button) {
      return button.textContent.replace(/\d+/g, "").trim() === "消息";
    });
    if (!messageButton) return;
    const loggedIn = Boolean(window.zhixingApi?.user);
    const badge = Array.from(messageButton.querySelectorAll("span")).find(function (node) {
      return node.children.length === 0 && /^\d+$/.test(node.textContent.trim());
    });
    if (!loggedIn && badge) badge.style.display = "none";
    if (!loggedIn || !window.zhixingApi?.api || messageCountSyncing) return;
    messageCountSyncing = true;
    try {
      const [conversations, notifications] = await Promise.all([
        window.zhixingApi.api("/api/conversations"),
        window.zhixingApi.api("/api/notifications")
      ]);
      const conversationUnread = (conversations.conversations || []).reduce(function (sum, item) { return sum + Number(item.unread_count || 0); }, 0);
      const noticeUnread = (notifications.notifications || []).filter(function (item) { return !item.read_at; }).length;
      const total = conversationUnread + noticeUnread;
      if (badge) {
        badge.textContent = String(total);
        badge.style.display = total > 0 ? "" : "none";
      }
    } catch (_error) {
    } finally {
      messageCountSyncing = false;
    }
  }

  function ensureCloudMessageStyle() {
    if (document.getElementById("cloud-message-style")) return;
    const style = document.createElement("style");
    style.id = "cloud-message-style";
    style.textContent = `
      .cloud-message-page { position: fixed; inset: 0; z-index: 45; display: grid; grid-template-rows: auto minmax(0,1fr); width: min(100%,480px); margin: 0 auto; background: radial-gradient(circle at 100% 0, rgba(99,102,241,.12), transparent 230px), linear-gradient(180deg,#f8fbff 0,#f5f7fb 46%,#f7f8fb 100%); color: #1f2937; }
      html:not(.cloud-message-route) .cloud-message-page, html:not(.cloud-message-route) .cloud-thread-page, html:not(.cloud-message-route) .cloud-notice-detail, html:not(.cloud-message-route) .cloud-message-sheet { display: none !important; visibility: hidden !important; pointer-events: none !important; }
      body div[role="alert"][class*="bg-black"], body div[class*="top-1/3"][class*="z-[200]"], body div[class*="bg-black/85"] { display: none !important; visibility: hidden !important; pointer-events: none !important; }
      .route-handoff-guard #main-content, .message-route-flash-guard #main-content, .zhi-route-flash-guard #main-content, .profile-route-flash-guard #main-content { opacity: 0 !important; pointer-events: none !important; transition: none !important; }
      .cloud-message-active #main-content { visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; transition: none !important; }
      .cloud-message-active #root > nav, .cloud-message-active nav { visibility: visible !important; opacity: 1 !important; pointer-events: auto !important; }
      .cloud-message-page header { display: grid; grid-template-columns: minmax(0,1fr) 42px; align-items: center; min-height: 66px; padding: calc(10px + env(safe-area-inset-top)) 20px 10px; border-bottom: 1px solid rgba(226,232,240,.72); background: rgba(255,255,255,.86); backdrop-filter: blur(16px); }
      .cloud-message-page h1 { font-size: 30px; line-height: 1; font-weight: 900; letter-spacing: 0; }
      .cloud-message-add { display: grid; place-items: center; width: 38px; height: 38px; border: 0; border-radius: 50%; background: #0f172a; color: #fff; box-shadow: 0 10px 22px rgba(15,23,42,.22); font-size: 25px; line-height: 1; }
      .cloud-message-main { min-height: 0; padding: 18px 18px 96px; overflow-y: auto; }
      .cloud-ai-card { display: grid; grid-template-columns: 58px minmax(0,1fr) auto; align-items: center; min-height: 104px; padding: 18px; border: 1px solid rgba(255,255,255,.52); border-radius: 8px; background: linear-gradient(135deg,#6671ff 0,#2f6df6 58%,#1d4ed8 100%); color: #fff; text-align: left; box-shadow: 0 22px 48px rgba(37,99,235,.28); }
      .cloud-ai-card:active,.cloud-message-row:active,.cloud-notice:active { transform: scale(.992); }
      .cloud-ai-icon { display: grid; place-items: center; width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,.18); font-size: 24px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.18); }
      .cloud-ai-card strong { display: block; font-size: 17px; letter-spacing: 0; }
      .cloud-ai-card small { display: block; margin-top: 7px; color: rgba(255,255,255,.86); font-size: 13px; line-height: 1.45; }
      .cloud-ai-card em { align-self: start; padding: 5px 10px; border-radius: 999px; background: rgba(255,255,255,.16); color: #fff; font-size: 12px; font-style: normal; }
      .cloud-message-card { margin-top: 18px; overflow: hidden; border: 1px solid rgba(226,232,240,.72); border-radius: 8px; background: rgba(255,255,255,.96); box-shadow: 0 16px 38px rgba(15,23,42,.10); }
      .cloud-message-row { display: grid; grid-template-columns: 64px minmax(0,1fr) auto; align-items: center; min-height: 82px; width: 100%; padding: 13px 16px; border: 0; border-bottom: 1px solid #eef2f7; background: transparent; color: inherit; text-align: left; transition: transform .12s ease, background .12s ease; }
      .cloud-message-row:hover { background: #f8fafc; }
      .cloud-message-row:last-child { border-bottom: 0; }
      .cloud-avatar { position: relative; display: grid; place-items: center; width: 46px; height: 46px; border-radius: 50%; background: #eef2ff; color: #334155; font-size: 20px; overflow: hidden; }
      .cloud-avatar img { width: 100%; height: 100%; object-fit: cover; }
      .cloud-avatar::after { position: absolute; right: 2px; bottom: 2px; width: 10px; height: 10px; border: 2px solid #fff; border-radius: 50%; background: #22c55e; content: ""; }
      .cloud-message-row h3 { overflow: hidden; font-size: 15px; line-height: 1.35; font-weight: 800; white-space: nowrap; text-overflow: ellipsis; letter-spacing: 0; }
      .cloud-message-row p { margin-top: 5px; overflow: hidden; color: #64748b; font-size: 12px; line-height: 1.45; white-space: nowrap; text-overflow: ellipsis; }
      .cloud-message-meta { display: grid; justify-items: end; gap: 8px; color: #94a3b8; font-size: 12px; }
      .cloud-unread { display: grid; place-items: center; min-width: 24px; height: 24px; padding: 0 7px; border-radius: 999px; background: #ef4444; color: #fff; font-size: 12px; font-weight: 800; }
      .cloud-section-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px 16px 10px; }
      .cloud-section-head strong { font-size: 16px; letter-spacing: 0; }
      .cloud-section-head button { border: 0; background: transparent; color: #94a3b8; font-size: 12px; }
      .cloud-contacts .cloud-message-row { min-height: 72px; }
      .cloud-contact-role { display: inline-flex; width: max-content; margin-top: 5px; padding: 3px 8px; border-radius: 6px; background: #ecfdf5; color: #047857; font-size: 10px; font-weight: 800; }
      .cloud-notice { margin: 0 16px 12px; padding: 14px 16px; border-radius: 8px; background: #fff7ed; color: #334155; }
      .cloud-notice { position: relative; display: block; width: calc(100% - 32px); border: 1px solid rgba(251,191,36,.12); text-align: left; transition: transform .12s ease, box-shadow .12s ease; }
      .cloud-notice:hover { box-shadow: 0 8px 18px rgba(15,23,42,.08); }
      .cloud-notice:nth-of-type(2n) { background: #eff6ff; }
      .cloud-notice.is-unread::after { position: absolute; top: 14px; right: 14px; width: 9px; height: 9px; border-radius: 50%; background: #ef4444; content: ""; }
      .cloud-notice strong { display: block; font-size: 13px; letter-spacing: 0; }
      .cloud-notice small { display: block; margin-top: 4px; color: #64748b; font-size: 11px; }
      .cloud-message-sheet { position: fixed; inset: 0; z-index: 10090; display: grid; place-items: end center; background: rgba(15,23,42,.42); }
      .cloud-message-sheet > div { width: min(100%,480px); padding: 12px 16px calc(16px + env(safe-area-inset-bottom)); border-radius: 8px 8px 0 0; background: #fff; box-shadow: 0 -18px 50px rgba(15,23,42,.24); }
      .cloud-message-sheet button { width: 100%; min-height: 48px; margin-top: 8px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; color: #1f2937; font-size: 14px; text-align: left; padding: 0 14px; }
      .cloud-message-sheet button:first-child { margin-top: 0; }
      .cloud-notice-detail { position: fixed; inset: 0; z-index: 10091; display: grid; place-items: end center; background: rgba(15,23,42,.38); }
      .cloud-notice-detail > article { width: min(100%,480px); padding: 18px 18px calc(18px + env(safe-area-inset-bottom)); border-radius: 8px 8px 0 0; background: #fff; box-shadow: 0 -18px 50px rgba(15,23,42,.24); }
      .cloud-notice-detail header { display: flex; align-items: start; justify-content: space-between; gap: 12px; min-height: 0; padding: 0 0 12px; border: 0; background: transparent; }
      .cloud-notice-detail h2 { color: #111827; font-size: 17px; font-weight: 800; letter-spacing: 0; line-height: 1.35; }
      .cloud-notice-detail time { display: block; margin-top: 5px; color: #94a3b8; font-size: 12px; }
      .cloud-notice-detail header button { display: grid; place-items: center; width: 34px; height: 34px; border: 0; border-radius: 50%; background: #f1f5f9; color: #475569; font-size: 20px; }
      .cloud-notice-detail p { padding: 14px; border-radius: 8px; background: #f8fafc; color: #334155; font-size: 14px; line-height: 1.7; }
      .cloud-notice-detail footer button { width: 100%; min-height: 42px; margin-top: 14px; border: 0; border-radius: 8px; background: #10b981; color: #fff; font-size: 13px; }
      .cloud-message-form { display: none; margin-top: 10px; gap: 8px; }
      .cloud-message-form.is-open { display: grid; }
      .cloud-message-form input { min-height: 42px; padding: 9px 10px; border: 1px solid #d1d5db; border-radius: 8px; font: inherit; font-size: 12px; }
      .cloud-message-form .backend-primary { text-align: center; }
      .cloud-thread-page { position: fixed; inset: 0; z-index: 10088; display: grid; grid-template-rows: auto minmax(0,1fr) auto; width: min(100%,480px); margin: 0 auto; background: #f8fafc; }
      .cloud-thread-page header { display: grid; grid-template-columns: 44px minmax(0,1fr); align-items: center; min-height: 58px; padding: env(safe-area-inset-top) 8px 0; border-bottom: 1px solid #e5e7eb; background: #fff; }
      .cloud-thread-page header button { width: 44px; height: 44px; border: 0; background: transparent; color: #334155; font-size: 28px; }
      .cloud-thread-page header strong { overflow: hidden; font-size: 15px; white-space: nowrap; text-overflow: ellipsis; letter-spacing: 0; }
      .cloud-thread-list { display: grid; align-content: start; gap: 8px; min-height: 0; padding: 14px; overflow-y: auto; }
      .cloud-bubble { max-width: 82%; padding: 9px 11px; border-radius: 8px; background: #fff; color: #334155; box-shadow: 0 1px 3px rgba(15,23,42,.08); }
      .cloud-bubble.is-mine { justify-self: end; background: #dcfce7; }
      .cloud-bubble strong { display: block; color: #64748b; font-size: 10px; letter-spacing: 0; }
      .cloud-bubble p { margin-top: 4px; font-size: 13px; line-height: 1.55; }
      .cloud-bubble-media { display: block; max-width: 220px; max-height: 260px; margin-top: 7px; border-radius: 8px; object-fit: cover; }
      .cloud-bubble audio { width: 220px; margin-top: 7px; }
      .cloud-link-card { display: block; margin-top: 7px; padding: 10px; border: 1px solid #dbeafe; border-radius: 8px; background: #eff6ff; color: #1d4ed8; font-size: 12px; text-decoration: none; word-break: break-all; }
      .cloud-file-card { display: inline-flex; align-items: center; gap: 7px; margin-top: 7px; padding: 8px 10px; border-radius: 8px; background: #f1f5f9; color: #334155; font-size: 12px; text-decoration: none; }
      .cloud-thread-page form { display: grid; gap: 8px; padding: 8px 10px calc(8px + env(safe-area-inset-bottom)); border-top: 1px solid #e5e7eb; background: rgba(248,250,252,.98); box-shadow: 0 -10px 24px rgba(15,23,42,.06); }
      .cloud-attach-tools { display: none; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; padding: 6px 2px 4px; }
      .cloud-attach-tools.is-open { display: grid; }
      .cloud-attach-tools button { display: grid; place-items: center; gap: 5px; min-height: 62px; border: 0; border-radius: 8px; background: #fff; color: #475569; font-size: 11px; box-shadow: 0 1px 5px rgba(15,23,42,.08); }
      .cloud-attach-tools button::before { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: #f1f5f9; color: #10b981; font-size: 16px; content: attr(data-icon); }
      .cloud-compose-row { display: grid; grid-template-columns: 38px minmax(0,1fr) 54px; align-items: center; gap: 8px; }
      .cloud-attach-toggle { display: grid; place-items: center; width: 38px; height: 38px; border: 0; border-radius: 50%; background: #fff; color: #475569; font-size: 26px; line-height: 1; box-shadow: 0 1px 5px rgba(15,23,42,.10); }
      .cloud-link-row { display: none; grid-template-columns: minmax(0,1fr) 54px; gap: 8px; }
      .cloud-link-row.is-open { display: grid; }
      .cloud-compose-status { min-height: 14px; padding-left: 46px; color: #64748b; font-size: 11px; }
      .cloud-thread-page input { min-height: 40px; padding: 9px 13px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; font: inherit; font-size: 13px; outline: none; }
      .cloud-thread-page input:focus { border-color: #86efac; box-shadow: 0 0 0 3px rgba(16,185,129,.10); }
      .cloud-thread-page form button { border: 0; border-radius: 8px; background: #10b981; color: #fff; font-size: 13px; font-weight: 800; }
      .role-profile-panel { margin: 14px 18px 0; padding: 16px; border: 1px solid rgba(226,232,240,.88); border-radius: 8px; background: rgba(255,255,255,.96); box-shadow: 0 12px 30px rgba(15,23,42,.10); }
      .role-profile-panel header { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
      .role-profile-panel header strong { color: #111827; font-size: 16px; letter-spacing: 0; }
      .role-profile-panel header span { padding: 4px 9px; border-radius: 6px; background: #ecfdf5; color: #047857; font-size: 11px; font-weight: 800; }
      .role-profile-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 9px; }
      .role-profile-grid article { min-height: 72px; padding: 12px; border-radius: 8px; background: #f8fafc; }
      .role-profile-grid article:nth-child(2) { background: #eff6ff; }
      .role-profile-grid article:nth-child(3) { background: #fff7ed; }
      .role-profile-grid article:nth-child(4) { background: #f5f3ff; }
      .role-profile-grid b { display: block; color: #0f172a; font-size: 20px; line-height: 1; }
      .role-profile-grid small { display: block; margin-top: 7px; color: #64748b; font-size: 11px; line-height: 1.45; }
      .admin-review-console { margin: 10px 18px 0; padding: 16px; border: 1px solid rgba(191,219,254,.92); border-radius: 8px; background: linear-gradient(180deg,#fff 0,#f8fbff 100%); box-shadow: 0 14px 32px rgba(15,23,42,.10); }
      .admin-review-console header { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
      .admin-review-console header strong { color: #0f172a; font-size: 16px; font-weight: 900; letter-spacing: 0; }
      .admin-review-console header span { padding: 4px 9px; border-radius: 6px; background: #eff6ff; color: #2563eb; font-size: 11px; font-weight: 900; }
      .admin-review-stats { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; margin-bottom: 12px; }
      .admin-review-stats div { min-height: 58px; padding: 10px 8px; border-radius: 8px; background: #f1f5f9; }
      .admin-review-stats b { display: block; color: #0f172a; font-size: 20px; line-height: 1; }
      .admin-review-stats small { display: block; margin-top: 7px; color: #64748b; font-size: 10px; line-height: 1.35; }
      .admin-review-section { display: grid; gap: 8px; margin-top: 10px; }
      .admin-review-section h3 { color: #0f172a; font-size: 14px; font-weight: 900; letter-spacing: 0; }
      .admin-review-row { display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: center; min-height: 58px; gap: 10px; padding: 10px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
      .admin-review-row strong { display: block; color: #1f2937; font-size: 13px; letter-spacing: 0; }
      .admin-review-row small { display: block; margin-top: 4px; color: #64748b; font-size: 10px; line-height: 1.45; }
      .admin-review-row button { min-width: 58px; min-height: 34px; border: 0; border-radius: 8px; background: #2563eb; color: #fff; font-size: 12px; font-weight: 900; }
      .admin-review-empty,.admin-review-status { color: #64748b; font-size: 12px; line-height: 1.6; }
      .admin-control-center { margin: 12px 14px 96px; padding: 14px; border: 1px solid rgba(191,219,254,.95); border-radius: 8px; background: linear-gradient(180deg,#ffffff 0,#f8fbff 100%); box-shadow: 0 16px 40px rgba(15,23,42,.12); color: #0f172a; }
      .admin-control-center > header { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb; }
      .admin-control-center h2 { margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 0; }
      .admin-control-center header p { margin: 4px 0 0; color: #64748b; font-size: 12px; line-height: 1.5; }
      .admin-control-center header span { flex: 0 0 auto; padding: 5px 10px; border-radius: 6px; background: #eff6ff; color: #2563eb; font-size: 11px; font-weight: 900; }
      .admin-control-tabs { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 7px; margin: 12px 0; }
      .admin-control-tabs button { min-height: 38px; border: 0; border-radius: 8px; background: #f1f5f9; color: #334155; font-size: 12px; font-weight: 900; }
      .admin-control-tabs button.is-active { background: #2563eb; color: #fff; box-shadow: 0 8px 18px rgba(37,99,235,.20); }
      .admin-control-pane { display: none; gap: 10px; }
      .admin-control-pane.is-active { display: grid; }
      .admin-control-stats { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px; }
      .admin-control-stat { min-height: 78px; padding: 12px; border-radius: 8px; background: #f8fafc; border: 1px solid #e5e7eb; }
      .admin-control-stat b { display: block; color: #0f172a; font-size: 25px; line-height: 1; }
      .admin-control-stat small { display: block; margin-top: 8px; color: #64748b; font-size: 11px; line-height: 1.45; }
      .admin-control-row { display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: center; min-height: 62px; gap: 10px; padding: 10px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
      .admin-control-row strong { display: block; color: #1f2937; font-size: 13px; letter-spacing: 0; }
      .admin-control-row small { display: block; margin-top: 4px; color: #64748b; font-size: 10px; line-height: 1.45; }
      .admin-control-row button,.admin-control-form button,.admin-control-logout { min-height: 34px; border: 0; border-radius: 8px; background: #2563eb; color: #fff; font-size: 12px; font-weight: 900; }
      .admin-control-row button[data-danger="true"] { background: #ef4444; }
      .admin-control-row span { color: #94a3b8; font-size: 11px; font-weight: 800; }
      .admin-control-form { display: grid; gap: 9px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
      .admin-control-form label { display: grid; gap: 5px; color: #334155; font-size: 12px; font-weight: 800; }
      .admin-control-form input,.admin-control-form select,.admin-control-form textarea { width: 100%; min-height: 40px; padding: 9px 10px; border: 1px solid #dbe3ea; border-radius: 8px; background: #fff; color: #0f172a; font: inherit; font-size: 12px; outline: none; }
      .admin-control-form textarea { min-height: 82px; resize: vertical; line-height: 1.55; }
      .admin-control-form input:focus,.admin-control-form select:focus,.admin-control-form textarea:focus { border-color: #93c5fd; box-shadow: 0 0 0 3px rgba(37,99,235,.10); }
      .admin-control-status { min-height: 20px; color: #059669; font-size: 12px; font-weight: 800; line-height: 1.5; }
      .admin-control-empty { padding: 12px; border-radius: 8px; background: #f8fafc; color: #64748b; font-size: 12px; line-height: 1.6; }
      .admin-control-logout { width: 100%; margin-top: 12px; background: #ef4444; min-height: 44px; }
      .admin-mode #role-profile-menu-bottom,.admin-mode .role-profile-logout-fallback,.admin-mode #admin-review-console { display: none !important; visibility: hidden !important; pointer-events: none !important; }
      .profile-action-page { position: fixed; inset: 0; z-index: 10096; display: grid; grid-template-rows: auto minmax(0,1fr); width: min(100%,480px); margin: 0 auto; background: #f8fafc; color: #0f172a; }
      .profile-action-page > header { display: grid; grid-template-columns: 48px minmax(0,1fr); align-items: center; min-height: 64px; padding: env(safe-area-inset-top) 12px 8px; border-bottom: 1px solid #e5e7eb; background: rgba(255,255,255,.96); }
      .profile-action-page > header button { width: 42px; height: 42px; border: 0; border-radius: 8px; background: #eef2f7; color: #0f172a; font-size: 28px; line-height: 1; }
      .profile-action-page > header h1 { margin: 0; font-size: 18px; font-weight: 900; letter-spacing: 0; }
      .profile-action-page > header p { margin: 3px 0 0; color: #64748b; font-size: 12px; }
      .profile-action-page > main { min-height: 0; padding: 16px 16px calc(92px + env(safe-area-inset-bottom)); overflow-y: auto; }
      .profile-detail-list { display: grid; gap: 10px; }
      .profile-detail-row { display: grid; grid-template-columns: 34px minmax(0,1fr) 18px; align-items: center; gap: 10px; width: 100%; min-height: 68px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; color: #0f172a; text-align: left; box-shadow: 0 8px 20px rgba(15,23,42,.06); }
      .profile-detail-row b { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: #ecfdf5; color: #059669; }
      .profile-detail-row strong { display: block; font-size: 14px; }
      .profile-detail-row small { display: block; margin-top: 4px; color: #64748b; font-size: 12px; line-height: 1.35; }
      .profile-expanded-text { display: none; grid-column: 2 / -1; margin: 6px 0 0; color: #475569; font-size: 12px; line-height: 1.5; }
      .profile-detail-row.is-open .profile-expanded-text { display: block; }
      .role-profile-menu-bottom { display: block !important; position: relative !important; z-index: 5; margin: 6px 16px 10px !important; overflow: hidden; border: 1px solid rgba(226,232,240,.9); border-radius: 8px; background: rgba(255,255,255,.98); box-shadow: 0 12px 28px rgba(15,23,42,.08); visibility: visible !important; opacity: 1 !important; }
      .role-profile-menu-bottom > button,.role-profile-menu-bottom > a { width: 100% !important; min-height: 62px !important; margin: 0 !important; border-radius: 0 !important; box-shadow: none !important; }
      .role-profile-menu-bottom > button + button,.role-profile-menu-bottom > a + a,.role-profile-menu-bottom > button + a,.role-profile-menu-bottom > a + button { border-top: 1px solid #eef2f7 !important; }
      .role-profile-menu-bottom .role-profile-menu-fallback { display: grid; grid-template-columns: 34px minmax(0,1fr) 18px; align-items: center; gap: 10px; min-height: 62px; padding: 0 16px; border: 0; background: #fff; color: #1f2937; text-align: left; font: inherit; font-size: 15px; }
      .role-profile-menu-bottom .role-profile-menu-fallback b { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 8px; background: #ecfdf5; color: #10b981; font-size: 15px; }
      .role-profile-menu-bottom .role-profile-menu-fallback em { color: #94a3b8; font-style: normal; }
      .role-profile-menu-bottom .role-profile-menu-fallback + .role-profile-menu-fallback { border-top: 1px solid #eef2f7; }
      .role-profile-logout-fallback { display: block; width: calc(100% - 32px); min-height: 54px; margin: 12px 16px 96px; border: 0; border-radius: 8px; background: #ef4444; color: #fff; font: inherit; font-size: 15px; font-weight: 900; box-shadow: 0 10px 26px rgba(239,68,68,.22); }
      .backend-panel > header .backend-close-normalized { color: #0f172a !important; font-size: 28px !important; font-weight: 900 !important; }
      .backend-panel > header .backend-logout-normalized { min-width: 78px !important; min-height: 34px !important; margin-right: 8px !important; padding: 0 10px !important; border-radius: 8px !important; background: #fee2e2 !important; color: #dc2626 !important; font-size: 12px !important; font-weight: 900 !important; }
      [data-role-profile-menu-hidden="true"] { display: none !important; visibility: hidden !important; pointer-events: none !important; }
      .role-route-panel { margin: 12px 16px; padding: 14px; border: 1px solid rgba(226,232,240,.9); border-radius: 8px; background: rgba(255,255,255,.96); box-shadow: 0 10px 26px rgba(15,23,42,.09); }
      .cloud-message-main > .role-route-panel { margin: 0 0 14px; }
      .role-route-panel header { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
      .role-route-panel strong { color: #0f172a; font-size: 15px; line-height: 1.35; letter-spacing: 0; }
      .role-route-panel header span { flex: 0 0 auto; padding: 4px 8px; border-radius: 6px; background: #ecfdf5; color: #047857; font-size: 10px; font-weight: 800; }
      .role-route-panel p { margin: 0 0 10px; color: #64748b; font-size: 12px; line-height: 1.55; }
      .role-route-actions { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 7px; }
      .role-route-actions button { min-height: 38px; border: 0; border-radius: 8px; background: #f8fafc; color: #334155; font-size: 11px; font-weight: 800; }
      .role-route-actions button:first-child { background: #10b981; color: #fff; }
      .role-route-actions button.is-active,.role-profile-grid article.is-active { transform: translateY(1px) scale(.99); box-shadow: inset 0 0 0 2px rgba(16,185,129,.28); }
      .profile-share-modal { position: fixed; inset: 0; z-index: 10092; display: grid; place-items: end center; background: rgba(15,23,42,.42); }
      .profile-share-modal article { width: min(100%,480px); padding: 18px 18px calc(18px + env(safe-area-inset-bottom)); border-radius: 8px 8px 0 0; background: #fff; box-shadow: 0 -18px 50px rgba(15,23,42,.24); }
      .profile-share-card { padding: 18px; border-radius: 8px; background: linear-gradient(135deg,#10b981,#0f766e); color: #fff; }
      .profile-share-card strong { display: block; font-size: 20px; letter-spacing: 0; }
      .profile-share-card p { margin: 8px 0 0; color: rgba(255,255,255,.88); font-size: 13px; line-height: 1.6; }
      .profile-share-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: 12px; }
      .profile-share-actions button { min-height: 42px; border: 0; border-radius: 8px; background: #10b981; color: #fff; font-size: 13px; font-weight: 900; }
      .profile-share-actions button:last-child { background: #f1f5f9; color: #334155; }
      .teacher-zhi-workspace { margin: 12px 16px 18px; padding: 15px; border: 1px solid rgba(187,247,208,.9); border-radius: 8px; background: linear-gradient(180deg,#ffffff 0,#f7fffb 100%); box-shadow: 0 14px 34px rgba(15,23,42,.10); }
      .teacher-zhi-workspace > header { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
      .teacher-zhi-workspace h2 { color: #0f172a; font-size: 17px; font-weight: 900; letter-spacing: 0; }
      .teacher-zhi-workspace header span { padding: 5px 9px; border-radius: 6px; background: #ecfdf5; color: #047857; font-size: 11px; font-weight: 900; }
      .teacher-zhi-tabs { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; margin-bottom: 12px; }
      @media (max-width: 390px) { .teacher-zhi-tabs { grid-template-columns: repeat(2,minmax(0,1fr)); } }
      .teacher-zhi-tabs button { min-height: 40px; border: 0; border-radius: 8px; background: #f1f5f9; color: #334155; font-size: 12px; font-weight: 900; }
      .teacher-zhi-tabs button.is-active { background: #10b981; color: #fff; box-shadow: 0 8px 16px rgba(16,185,129,.20); }
      .teacher-zhi-pane { display: none; }
      .teacher-zhi-pane.is-active { display: grid; gap: 10px; }
      .teacher-zhi-form { display: grid; gap: 9px; }
      .teacher-zhi-form input,.teacher-zhi-form select,.teacher-zhi-form textarea { width: 100%; min-height: 42px; padding: 10px 11px; border: 1px solid #dbe3ea; border-radius: 8px; background: #fff; color: #0f172a; font: inherit; font-size: 13px; outline: none; }
      .teacher-zhi-form textarea { min-height: 92px; resize: vertical; line-height: 1.55; }
      .teacher-zhi-form input:focus,.teacher-zhi-form select:focus,.teacher-zhi-form textarea:focus { border-color: #86efac; box-shadow: 0 0 0 3px rgba(16,185,129,.12); }
      .teacher-zhi-form button,.teacher-zhi-card button { min-height: 40px; border: 0; border-radius: 8px; background: #10b981; color: #fff; font-size: 13px; font-weight: 900; }
      .teacher-zhi-card { display: grid; gap: 8px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; }
      .teacher-zhi-card strong { color: #0f172a; font-size: 14px; letter-spacing: 0; }
      .teacher-zhi-card p { margin: 0; color: #64748b; font-size: 12px; line-height: 1.55; }
      .teacher-zhi-card small { color: #94a3b8; font-size: 11px; }
      .teacher-zhi-grade { display: grid; grid-template-columns: 74px minmax(0,1fr) 64px; gap: 8px; align-items: center; }
      .teacher-zhi-grade input { min-height: 38px; padding: 8px 9px; border: 1px solid #dbe3ea; border-radius: 8px; font-size: 12px; }
      .teacher-zhi-status { min-height: 18px; color: #059669; font-size: 12px; font-weight: 800; }
      .teacher-resource-manager { margin: -6px 16px 18px; padding: 15px; border: 1px solid rgba(191,219,254,.95); border-radius: 8px; background: linear-gradient(180deg,#ffffff 0,#f8fbff 100%); box-shadow: 0 14px 34px rgba(15,23,42,.10); }
      .teacher-resource-manager > header { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
      .teacher-resource-manager h2 { color: #0f172a; font-size: 17px; font-weight: 900; letter-spacing: 0; }
      .teacher-resource-manager header span { padding: 5px 9px; border-radius: 6px; background: #eff6ff; color: #2563eb; font-size: 11px; font-weight: 900; }
      .teacher-resource-tabs { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px; margin-bottom: 12px; }
      .teacher-resource-shortcuts { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; margin-bottom: 12px; }
      .teacher-resource-shortcuts button { min-height: 38px; border: 0; border-radius: 8px; background: #f1f5f9; color: #334155; font-size: 12px; font-weight: 900; }
      .teacher-resource-shortcuts button.is-active { background: #2563eb; color: #fff; box-shadow: 0 8px 16px rgba(37,99,235,.18); }
      @media (max-width: 430px) { .teacher-resource-shortcuts { grid-template-columns: repeat(2,minmax(0,1fr)); } }
      .teacher-resource-tabs button { min-height: 38px; border: 0; border-radius: 8px; background: #f1f5f9; color: #334155; font-size: 12px; font-weight: 900; }
      .teacher-resource-tabs button.is-active { background: #2563eb; color: #fff; box-shadow: 0 8px 16px rgba(37,99,235,.18); }
      .teacher-resource-pane { display: none; }
      .teacher-resource-pane.is-active { display: grid; gap: 10px; }
      .teacher-resource-list { display: grid; gap: 8px; margin-top: 10px; }
      .teacher-resource-list button { display: block; width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; color: #334155; text-align: left; font-weight: 800; }
      .teacher-resource-list small { display: block; margin-top: 3px; color: #64748b; font-weight: 600; }
      .teacher-zhi-only [data-teacher-zhi-hidden="true"], .role-home-clean [data-role-home-hidden="true"] { display: none !important; visibility: hidden !important; }
      .role-profile-grid article { cursor: pointer; transition: transform .12s ease, box-shadow .12s ease; }
      .role-action-feedback { display: block; min-height: 18px; margin-top: 10px; color: #059669; font-size: 12px; font-weight: 800; }
      .zhi-synced-track { position: relative !important; overflow: hidden !important; background: #e5e7eb !important; }
      .zhi-synced-fill { position: absolute; inset: 0 auto 0 0; display: block; width: var(--zhi-progress,0%); max-width: var(--zhi-progress,0%); height: 100%; border-radius: inherit; background: linear-gradient(90deg,#2563eb,#3b82f6); pointer-events: none; z-index: 3; }
      .parent-zhi-detail { margin-top: 12px; padding: 12px; border: 1px solid #dbeafe; border-radius: 8px; background: #f8fbff; }
      .parent-zhi-detail strong { display: block; color: #0f172a; font-size: 14px; }
      .parent-zhi-detail p,.parent-zhi-detail li { margin: 6px 0 0; color: #475569; font-size: 12px; line-height: 1.55; }
      .parent-zhi-detail ul { display: grid; gap: 8px; margin: 8px 0 0; padding: 0; list-style: none; }
      .reliable-bottom-nav { position: fixed; left: 50%; bottom: 0; z-index: 10070; display: grid; grid-template-columns: repeat(5,1fr); width: min(100%,480px); min-height: 72px; padding: 8px 6px calc(8px + env(safe-area-inset-bottom)); transform: translateX(-50%); border-top: 1px solid rgba(226,232,240,.92); background: rgba(255,255,255,.96); box-shadow: 0 -10px 28px rgba(15,23,42,.10); backdrop-filter: blur(16px); }
      .reliable-bottom-nav button { position: relative; display: grid; justify-items: center; align-content: center; gap: 3px; min-width: 0; min-height: 52px; border: 0; border-radius: 8px; background: transparent; color: #94a3b8; font-size: 11px; font-weight: 700; letter-spacing: 0; }
      .reliable-bottom-nav button b { display: grid; place-items: center; width: 26px; height: 24px; font-size: 21px; line-height: 1; font-weight: 500; }
      .reliable-bottom-nav button.is-active { color: #10b981; }
      .reliable-bottom-nav button.is-active::before { position: absolute; top: 0; left: 50%; width: 32px; height: 3px; border-radius: 999px; background: #10b981; transform: translateX(-50%); content: ""; }
      .backend-account-button {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      .stable-auth-float {
        position: fixed !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        visibility: visible !important;
        opacity: 1 !important;
        z-index: 2147483600 !important;
        pointer-events: auto !important;
        touch-action: none !important;
        user-select: none !important;
        transform: translateZ(0);
        transition: none !important;
        will-change: transform;
        top: calc(10px + env(safe-area-inset-top));
        right: max(12px, calc(50% - 228px));
        width: 104px !important;
        height: 36px !important;
        min-width: 104px !important;
        max-width: 104px !important;
        min-height: 36px !important;
        max-height: 36px !important;
        padding: 0 10px;
        border: 1px solid rgba(255,255,255,.7);
        border-radius: 17px;
        background: rgba(15,23,42,.82);
        color: #fff;
        box-shadow: 0 4px 14px rgba(15,23,42,.16);
        font-size: 12px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        backdrop-filter: blur(8px);
      }
      @media (max-width:480px) { .stable-auth-float { right: 10px; } }
      .universal-detail-back { position: fixed; top: calc(12px + env(safe-area-inset-top)); left: max(12px, calc(50% - 228px)); z-index: 10095; display: grid; place-items: center; width: 42px; height: 42px; border: 0; border-radius: 50%; background: rgba(255,255,255,.94); color: #0f172a; font-size: 28px; line-height: 1; box-shadow: 0 10px 24px rgba(15,23,42,.18); backdrop-filter: blur(12px); }
      body:has(.theme-package-page,.popular-projects-page,.zhi-action-page,.backend-course-detail,.extra-post-dialog,.discover-category-dialog) .universal-detail-back { display: none !important; }
    `;
    document.head.appendChild(style);
  }

  function cloudAvatar(label, image) {
    if (image) return '<span class="cloud-avatar"><img src="' + image + '" alt="' + escapeHtml(label) + '"></span>';
    return '<span class="cloud-avatar">' + escapeHtml(String(label || "知").slice(0, 1)) + '</span>';
  }

  function ensureMobileMediaStyle() {
    if (document.getElementById("mobile-media-stability-style")) return;
    const style = document.createElement("style");
    style.id = "mobile-media-stability-style";
    style.textContent = `
      img[data-mobile-media-stable="true"] {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
        max-width: 100% !important;
        object-fit: cover;
        image-rendering: auto;
      }
      .embedded-video-shell,
      .lesson-video-frame,
      .theme-package-video-frame {
        position: relative !important;
        width: 100% !important;
        min-height: 190px !important;
        aspect-ratio: 16 / 9 !important;
        overflow: hidden !important;
        background: #000 !important;
      }
      .embedded-course-video,
      .embedded-video-shell iframe,
      .lesson-video-frame iframe,
      .theme-package-video-frame iframe {
        position: absolute !important;
        inset: 0 !important;
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        min-height: 190px !important;
        border: 0 !important;
        background: #000 !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      video {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        min-height: 120px;
        background: #000;
        object-fit: contain;
      }
      @media (max-width: 640px) {
        img[data-mobile-media-stable="true"]:not(.rounded-full) {
          min-height: 46px;
        }
        .extra-post-cover,
        .extra-post-detail-photo,
        .home-tab-course img,
        .theme-upload-preview img {
          background: #e2e8f0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function stabilizeMobileMedia(root) {
    preloadCriticalImages();
    ensureMobileMediaStyle();
    const scope = root && root.querySelectorAll ? root : document;
    localizeRemoteImages(scope);
    scope.querySelectorAll("img").forEach(function (img) {
      if (!(img instanceof HTMLImageElement)) return;
      img.dataset.mobileMediaStable = "true";
      if (!img.getAttribute("src") && img.dataset.src) img.src = img.dataset.src;
      const rect = img.getBoundingClientRect ? img.getBoundingClientRect() : null;
      const isNearViewport = !rect || rect.top < Math.max(900, window.innerHeight * 1.6);
      if (window.innerWidth <= 760 || /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent || "") || isNearViewport) {
        markImageFast(img, isNearViewport);
      }
    });
    scope.querySelectorAll("video").forEach(function (video) {
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.preload = video.preload || "metadata";
      video.style.setProperty("opacity", "1", "important");
      video.style.setProperty("visibility", "visible", "important");
      video.style.setProperty("background", "#000", "important");
    });
    scope.querySelectorAll("iframe.embedded-course-video,.embedded-video-shell iframe,.lesson-video-frame iframe,.theme-package-video-frame iframe").forEach(function (frame) {
      frame.loading = "eager";
      frame.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
      frame.setAttribute("allowfullscreen", "true");
      frame.style.setProperty("display", "block", "important");
      frame.style.setProperty("opacity", "1", "important");
      frame.style.setProperty("visibility", "visible", "important");
      if (frame.src && frame.src.includes("player.bilibili.com") && !frame.src.includes("as_wide=1")) {
        frame.src += (frame.src.includes("?") ? "&" : "?") + "as_wide=1&high_quality=1";
      }
    });
  }

  function matchConversationFriend(conversation, friends) {
    const title = String(conversation?.title || "");
    const last = String(conversation?.last_message || "");
    return (friends || []).find(function (friend) {
      const name = String(friend.display_name || "");
      const email = String(friend.email || "");
      return (name && title.includes(name)) || (email && title.includes(email)) || (name && last.includes(name));
    }) || null;
  }

  function syncReliableBottomNav() {
    document.getElementById("reliable-bottom-nav")?.remove();
  }

  function removeTeacherRoleExplanationPanels() {
    const user = window.zhixingApi?.user;
    const hash = window.location.hash || "";
    const panel = document.getElementById("role-route-panel");
    if (!panel) return;
    const text = (panel.textContent || "").replace(/\s+/g, "");
    if (["teacher", "admin"].includes(user?.role) || /教师端|教師端|老师端|老師端|鑰佸笀绔|鏁欏笀绔/.test(text) || /^#\/(course|base)\//.test(hash)) {
      panel.remove();
    }
  }

  const mainRoutePattern = /^#\/(home|discover|zhi-xing|message|profile|learning-map)?$/;

  function rememberLastMainRoute() {
    const hash = window.location.hash || "#/home";
    if (hash === "#/" || hash === "#") {
      sessionStorage.setItem("zhixingLastMainRoute", "#/home");
      return;
    }
    if (mainRoutePattern.test(hash)) sessionStorage.setItem("zhixingLastMainRoute", hash || "#/home");
  }

  function syncUniversalDetailBack() {
    const hash = window.location.hash || "#/home";
    const isDetail = /^#\/(course|base)\//.test(hash);
    let button = document.getElementById("universal-detail-back");
    if (!isDetail) {
      button?.remove();
      rememberLastMainRoute();
      return;
    }
    document.getElementById("role-route-panel")?.remove();
    if (!button) {
      button = document.createElement("button");
      button.id = "universal-detail-back";
      button.type = "button";
      button.className = "universal-detail-back";
      button.setAttribute("aria-label", "返回");
      button.textContent = "‹";
      button.addEventListener("click", function (event) {
        event.preventDefault();
        const fallback = sessionStorage.getItem("zhixingLastMainRoute") || "#/home";
        if (history.length > 1) history.back();
        else window.location.hash = fallback;
        window.setTimeout(function () {
          if (/^#\/(course|base)\//.test(window.location.hash || "")) window.location.hash = fallback;
        }, 180);
      });
      document.body.appendChild(button);
    }
  }

  async function forceLogoutAccount() {
    if (window.zhixingApi?.forceLogout) {
      await window.zhixingApi.forceLogout();
      return;
    }
    try { await window.zhixingApi?.api?.("/api/auth/logout", { method: "POST" }); } catch (_error) {}
    try {
      localStorage.removeItem("zhixingReadBadge:#/message");
      sessionStorage.clear();
    } catch (_error) {}
    window.dispatchEvent(new CustomEvent("zhixing-auth-change", { detail: { user: null } }));
    window.location.hash = "#/home";
    window.location.reload();
  }

  function normalizeBackendAccountModal() {
    const modal = document.querySelector(".backend-modal");
    if (!modal) return;
    const header = modal.querySelector(".backend-panel > header");
    if (!header) return;
    const buttons = Array.from(header.querySelectorAll("button"));
    const closeButton = buttons[0];
    if (closeButton && closeButton.dataset.closeNormalized !== "true") {
      closeButton.dataset.closeNormalized = "true";
      closeButton.classList.add("backend-close-normalized");
      closeButton.setAttribute("aria-label", "关闭账号中心");
      closeButton.textContent = "‹";
      closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        modal.remove();
      }, true);
    }
    const logoutButton = modal.querySelector(".backend-logout") || buttons.find(function (button) {
      return /退出|閫|鍑/.test(button.textContent || "");
    });
    if (logoutButton && logoutButton.dataset.logoutNormalized !== "true") {
      logoutButton.dataset.logoutNormalized = "true";
      logoutButton.classList.add("backend-logout-normalized");
      logoutButton.textContent = "退出登录";
      logoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        forceLogoutAccount();
      }, true);
    }
  }

  function handleBackendAccountModalAction(event) {
    const modal = event.target?.closest?.(".backend-modal");
    if (!modal) return;
    const button = event.target?.closest?.("button");
    if (!button) return;
    const header = button.closest(".backend-panel > header");
    if (!header) return;
    if (button.classList.contains("backend-logout") || button.classList.contains("backend-logout-normalized") || /退出|閫|鍑/.test(button.textContent || "")) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      forceLogoutAccount();
      return;
    }
    if (button === header.querySelector("button")) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      modal.remove();
    }
  }

  function messageTime(value, fallback) {
    if (!value) return fallback || "";
    const diff = Date.now() - new Date(value).getTime();
    if (diff < 3600000) return Math.max(1, Math.round(diff / 60000)) + "分钟前";
    if (diff < 86400000) return Math.round(diff / 3600000) + "小时前";
    return "昨天";
  }

  function closeCloudMessageSheet() {
    document.querySelector(".cloud-message-sheet")?.remove();
  }

  function closeCloudMessagePage() {
    document.getElementById("cloud-message-page")?.remove();
    document.querySelector(".cloud-thread-page")?.remove();
    document.querySelector(".cloud-notice-detail")?.remove();
    closeCloudMessageSheet();
    document.documentElement.classList.remove("cloud-message-active");
    document.documentElement.classList.remove("cloud-message-route");
  }

  function closeCloudMessageWhenLeaving(event) {
    if (window.location.hash !== "#/message") return;
    const target = event.target?.closest?.("button,a,nav");
    if (!target) return;
    if (target.closest(".cloud-message-page,.cloud-thread-page,.cloud-message-sheet,.cloud-notice-detail")) return;
    closeCloudMessagePage();
  }

  function showCloudNoticeDetail(item) {
    document.querySelector(".cloud-notice-detail")?.remove();
    const modal = document.createElement("section");
    modal.className = "cloud-notice-detail";
    modal.innerHTML = '<article><header><div><h2>' + escapeHtml(item.title || "通知") + '</h2><time>' + messageTime(item.created_at, "刚刚") + '</time></div><button type="button" aria-label="关闭">×</button></header><p>' + escapeHtml(item.message || "暂无通知内容") + '</p><footer><button type="button">知道了</button></footer></article>';
    const close = function () { modal.remove(); };
    modal.addEventListener("click", function (event) { if (event.target === modal) close(); });
    modal.querySelector("header button").addEventListener("click", close);
    modal.querySelector("footer button").addEventListener("click", close);
    document.body.appendChild(modal);
  }

  function showCloudMessageSheet() {
    closeCloudMessageSheet();
    const sheet = document.createElement("div");
    sheet.className = "cloud-message-sheet";
    sheet.innerHTML = '<div><button type="button" data-action="friend">＋ 添加好友</button><form class="cloud-message-form" data-form="friend"><input name="email" type="email" required placeholder="输入学生、老师或家长邮箱"><button class="backend-primary" type="submit">添加好友</button><small class="backend-status"></small></form><button type="button" data-action="chat">✉ 发起聊天</button><form class="cloud-message-form" data-form="chat"><input name="email" type="email" required placeholder="输入对方邮箱"><button class="backend-primary" type="submit">开始聊天</button><small class="backend-status"></small></form><button type="button" data-action="group">群 创建群聊</button><form class="cloud-message-form" data-form="group"><input name="title" required placeholder="群聊名称"><input name="emails" required placeholder="成员邮箱，多个用逗号分隔"><button class="backend-primary" type="submit">创建群聊</button><small class="backend-status"></small></form><button type="button" data-action="close">取消</button></div>';
    sheet.addEventListener("click", function (event) { if (event.target === sheet) closeCloudMessageSheet(); });
    sheet.querySelectorAll("[data-action]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.dataset.action === "close") { closeCloudMessageSheet(); return; }
        sheet.querySelectorAll(".cloud-message-form").forEach(function (form) { form.classList.toggle("is-open", form.dataset.form === button.dataset.action); });
      });
    });
    sheet.querySelector('[data-form="friend"]').addEventListener("submit", async function (event) {
      event.preventDefault();
      const status = event.currentTarget.querySelector(".backend-status");
      try {
        await window.zhixingApi.api("/api/friends", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: event.currentTarget.email.value }) });
        status.textContent = "已添加好友";
        setTimeout(function () { closeCloudMessageSheet(); renderCloudMessagePage("refresh"); }, 450);
      } catch (error) { status.textContent = error.message; }
    });
    sheet.querySelector('[data-form="chat"]').addEventListener("submit", async function (event) {
      event.preventDefault();
      const status = event.currentTarget.querySelector(".backend-status");
      try {
        const result = await window.zhixingApi.api("/api/conversations", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: "私聊", memberEmails: [event.currentTarget.email.value] }) });
        closeCloudMessageSheet();
        openCloudThread(result.conversation);
      } catch (error) { status.textContent = error.message; }
    });
    sheet.querySelector('[data-form="group"]').addEventListener("submit", async function (event) {
      event.preventDefault();
      const status = event.currentTarget.querySelector(".backend-status");
      try {
        const emails = event.currentTarget.emails.value.split(/[,，\s]+/).map(function (email) { return email.trim(); }).filter(Boolean);
        const result = await window.zhixingApi.api("/api/conversations", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: event.currentTarget.title.value, memberEmails: emails }) });
        closeCloudMessageSheet();
        openCloudThread(result.conversation);
      } catch (error) { status.textContent = error.message; }
    });
    document.body.appendChild(sheet);
  }

  async function openCloudThread(conversation) {
    document.querySelector(".cloud-thread-page")?.remove();
    const page = document.createElement("section");
    page.className = "cloud-thread-page";
    page.innerHTML = '<header><button type="button" aria-label="返回">‹</button><strong>' + escapeHtml(conversation.title || "会话") + '</strong></header><main class="cloud-thread-list"><div class="backend-empty">正在加载...</div></main><form><input name="content" maxlength="1000" required autocomplete="off" placeholder="输入消息"><button type="submit">发送</button></form>';
    page.querySelector("header button").addEventListener("click", function () { page.remove(); renderCloudMessagePage("refresh"); syncGuestMessageCount(); });
    const list = page.querySelector(".cloud-thread-list");
    async function load() {
      const data = await window.zhixingApi.api("/api/conversations/" + conversation.id + "/messages");
      list.innerHTML = (data.messages || []).map(function (item) {
        const mine = item.sender_id === window.zhixingApi.user?.id;
        return '<article class="cloud-bubble' + (mine ? " is-mine" : "") + '"><strong>' + escapeHtml(item.display_name || "系统") + '</strong><p>' + escapeHtml(item.content) + '</p></article>';
      }).join("") || '<div class="backend-empty">暂无消息</div>';
      list.scrollTop = list.scrollHeight;
    }
    page.querySelector("form").addEventListener("submit", async function (event) {
      event.preventDefault();
      const input = event.currentTarget.content;
      await window.zhixingApi.api("/api/conversations/" + conversation.id + "/messages", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ content: input.value }) });
      input.value = "";
      await load();
    });
    document.body.appendChild(page);
    await load();
    syncGuestMessageCount();
  }

  function fileToDataUrl(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () { resolve(String(reader.result || "")); };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function messageKindForFile(file) {
    const type = String(file?.type || "");
    if (type.startsWith("image/")) return "image";
    if (type.startsWith("video/")) return "video";
    if (type.startsWith("audio/")) return "audio";
    return "file";
  }

  function renderCloudMessageContent(item) {
    const type = item.message_type || "text";
    const text = escapeHtml(item.content || "");
    const attachment = item.blob_key || "";
    if (type === "image" && attachment) return (text ? "<p>" + text + "</p>" : "") + '<img class="cloud-bubble-media" src="' + attachment + '" alt="图片消息">';
    if (type === "video" && attachment) return (text ? "<p>" + text + "</p>" : "") + '<video class="cloud-bubble-media" controls src="' + attachment + '"></video>';
    if (type === "audio" && attachment) return (text ? "<p>" + text + "</p>" : "<p>语音消息</p>") + '<audio controls src="' + attachment + '"></audio>';
    if (type === "link") {
      const url = attachment || item.content || "";
      return (text && url !== item.content ? "<p>" + text + "</p>" : "") + '<a class="cloud-link-card" href="' + escapeHtml(url) + '" target="_blank" rel="noopener">🔗 ' + escapeHtml(url) + "</a>";
    }
    if (type === "file" && attachment) return (text ? "<p>" + text + "</p>" : "") + '<a class="cloud-file-card" href="' + attachment + '" download>📎 下载文件</a>';
    return "<p>" + (text || "消息") + "</p>";
  }

  async function openCloudThread(conversation) {
    document.querySelector(".cloud-thread-page")?.remove();
    ensureCloudMessageStyle();
    document.documentElement.classList.add("cloud-message-route");
    const page = document.createElement("section");
    page.className = "cloud-thread-page";
    page.innerHTML = '<header><button type="button" aria-label="返回">‹</button><strong>' + escapeHtml(conversation.display_title || conversation.title || "会话") + '</strong></header><main class="cloud-thread-list"><div class="backend-empty">正在加载...</div></main><form><div class="cloud-link-row"><input name="link" type="url" placeholder="粘贴分享链接"><button type="button" data-send-link>发送</button></div><div class="cloud-compose-row"><button class="cloud-attach-toggle" type="button" aria-label="更多">+</button><input name="content" maxlength="1000" autocomplete="off" placeholder="输入消息"><button type="submit">发送</button></div><div class="cloud-attach-tools"><button type="button" data-icon="图" data-attach="image">图片</button><button type="button" data-icon="视" data-attach="video">视频</button><button type="button" data-icon="链" data-link-toggle>链接</button><button type="button" data-icon="文" data-attach="file">文件</button></div><small class="cloud-compose-status"></small><input hidden type="file" data-file="image" accept="image/*"><input hidden type="file" data-file="video" accept="video/*"><input hidden type="file" data-file="file"></form>';
    let refreshTimer = null;
    page.querySelector("header button").addEventListener("click", function () {
      if (refreshTimer) clearInterval(refreshTimer);
      page.remove();
      renderCloudMessagePage("refresh");
      syncGuestMessageCount();
    });
    const list = page.querySelector(".cloud-thread-list");
    const form = page.querySelector("form");
    const status = form.querySelector(".cloud-compose-status");
    let lastMessageSignature = "";

    async function load(preserveScroll) {
      const data = await window.zhixingApi.api("/api/conversations/" + conversation.id + "/messages");
      if (status.textContent === "消息刷新失败，请检查网络") status.textContent = "";
      const messages = data.messages || [];
      const signature = messages.map(function (item) { return item.id + ":" + item.created_at; }).join("|");
      if (signature === lastMessageSignature) return;
      const stayAtBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 80;
      list.innerHTML = messages.map(function (item) {
        const mine = item.sender_id === window.zhixingApi.user?.id;
        return '<article class="cloud-bubble' + (mine ? " is-mine" : "") + '"><strong>' + escapeHtml(item.display_name || "系统") + "</strong>" + renderCloudMessageContent(item) + "</article>";
      }).join("") || '<div class="backend-empty">暂无消息</div>';
      lastMessageSignature = signature;
      if (!preserveScroll || stayAtBottom) list.scrollTop = list.scrollHeight;
      syncGuestMessageCount();
    }

    async function sendMessage(payload) {
      status.textContent = "发送中...";
      await window.zhixingApi.api("/api/conversations/" + conversation.id + "/messages", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      status.textContent = "";
      await load(false);
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const input = form.content;
      const content = input.value.trim();
      if (!content) return;
      await sendMessage({ content: content, messageType: "text" });
      input.value = "";
    });

    form.querySelector("[data-link-toggle]").addEventListener("click", function () {
      form.querySelector(".cloud-attach-tools").classList.remove("is-open");
      form.querySelector(".cloud-link-row").classList.toggle("is-open");
      form.link.focus();
    });
    form.querySelector(".cloud-attach-toggle").addEventListener("click", function () {
      form.querySelector(".cloud-link-row").classList.remove("is-open");
      form.querySelector(".cloud-attach-tools").classList.toggle("is-open");
    });
    form.querySelector("[data-send-link]").addEventListener("click", async function () {
      let url = form.link.value.trim();
      if (!url) return;
      if (!/^https?:\/\//i.test(url)) url = "https://" + url;
      await sendMessage({ content: "分享链接", messageType: "link", attachment: url });
      form.link.value = "";
      form.querySelector(".cloud-link-row").classList.remove("is-open");
    });

    form.querySelectorAll("[data-attach]").forEach(function (button) {
      button.addEventListener("click", function () { form.querySelector('[data-file="' + button.dataset.attach + '"]').click(); });
    });
    form.querySelectorAll("[data-file]").forEach(function (input) {
      input.addEventListener("change", async function () {
        const file = input.files?.[0];
        if (!file) return;
        if (file.size > 4.5 * 1024 * 1024) { status.textContent = "演示版单个附件请小于 4.5MB"; input.value = ""; return; }
        const dataUrl = await fileToDataUrl(file);
        const kind = input.dataset.file === "file" ? messageKindForFile(file) : input.dataset.file;
        await sendMessage({ content: file.name || (kind === "audio" ? "语音消息" : "附件消息"), messageType: kind, attachment: dataUrl });
        input.value = "";
      });
    });

    document.body.appendChild(page);
    await load(false);
    refreshTimer = setInterval(function () {
      if (!page.isConnected) { clearInterval(refreshTimer); return; }
      if (document.hidden) return;
      load(true).catch(function () { status.textContent = "消息刷新失败，请检查网络"; });
    }, 5000);
  }

  async function renderCloudMessagePage(force) {
    if (window.location.hash !== "#/message" || !window.zhixingApi?.user) {
      document.getElementById("cloud-message-page")?.remove();
      document.documentElement.classList.remove("cloud-message-active");
      document.documentElement.classList.remove("cloud-message-route");
      return;
    }
    ensureCloudMessageStyle();
    document.documentElement.classList.add("cloud-message-active");
    document.documentElement.classList.add("cloud-message-route");
    let page = document.getElementById("cloud-message-page");
    if (page && force !== "refresh") return;
    if (page?.dataset.loading === "true") return;
    if (!page) {
      page = document.createElement("section");
      page.id = "cloud-message-page";
      page.className = "cloud-message-page";
      document.body.appendChild(page);
    }
    page.innerHTML = '<header><h1>消息</h1><button type="button" class="cloud-message-add" aria-label="添加">+</button></header><main class="cloud-message-main"><button class="cloud-ai-card" type="button"><span class="cloud-ai-icon">🤖</span><span><strong>AI导游 · 小知</strong><small>点击开始智能对话，随时解答你的问题</small></span><em>在线</em></button><section class="cloud-message-card cloud-conversations"><div class="backend-empty">正在加载会话...</div></section><section class="cloud-message-card cloud-contacts"><div class="cloud-section-head"><strong>通讯录</strong><button type="button">好友</button></div><div class="backend-empty">正在加载好友...</div></section><section class="cloud-message-card cloud-notifications"><div class="cloud-section-head"><strong>通知中心</strong><button type="button">查看全部</button></div><div class="backend-empty">正在加载通知...</div></section></main>';
    page.dataset.loading = "true";
    syncRoleRouteExperience();
    page.querySelector(".cloud-message-add").addEventListener("click", showCloudMessageSheet);
    page.querySelector(".cloud-ai-card").addEventListener("click", function () { document.querySelector('[data-ai-guide], .ai-guide-entry, button[aria-label*="AI"]')?.click?.(); });
    try {
      const [conversations, notifications, friends] = await Promise.all([
        window.zhixingApi.api("/api/conversations"),
        window.zhixingApi.api("/api/notifications"),
        window.zhixingApi.api("/api/friends")
      ]);
      if (window.location.hash !== "#/message" || !page.isConnected) {
        closeCloudMessagePage();
        return;
      }
      const friendList = friends.friends || [];
      page.querySelector(".cloud-contacts").innerHTML = '<div class="cloud-section-head"><strong>通讯录</strong><button type="button">同组联系人 ' + (friends.friends || []).length + '</button></div>' + ((friends.friends || []).map(function (friend) {
        const roleText = friend.role === "teacher" ? "老师" : friend.role === "parent" ? "家长" : friend.role === "admin" ? "管理员" : "学生";
        return '<button type="button" class="cloud-message-row cloud-contact-row" data-friend-id="' + friend.id + '"><span>' + cloudAvatar(friend.display_name || friend.email, friend.avatar_url) + '</span><span><h3>' + escapeHtml(friend.display_name || friend.email) + '</h3><p>' + escapeHtml(friend.email || "") + '</p><i class="cloud-contact-role">' + roleText + '</i></span><span class="cloud-message-meta"><time>发消息</time></span></button>';
      }).join("") || '<div class="backend-empty">暂无绑定联系人，点右上角 + 添加学生、老师或家长</div>');
      page.querySelectorAll(".cloud-contact-row").forEach(function (row) {
        row.addEventListener("click", async function () {
          const result = await window.zhixingApi.api("/api/friends/" + row.dataset.friendId + "/conversation", { method: "POST" });
          const friend = friendList.find(function (item) { return String(item.id) === String(row.dataset.friendId); });
          openCloudThread(Object.assign({}, result.conversation, { display_title: friend?.display_name || friend?.email || "联系人" }));
        });
      });
      const directConversations = (conversations.conversations || []).filter(function (item) { return item.conversation_type === "direct"; });
      page.querySelector(".cloud-conversations").innerHTML = directConversations.map(function (item, index) {
        const unread = Number(item.unread_count || 0);
        return '<button type="button" class="cloud-message-row" data-id="' + item.id + '"><span>' + cloudAvatar(item.display_title || item.title, item.peer_avatar_url) + '</span><span><h3>' + escapeHtml(item.display_title || item.title || "联系人") + '</h3><p>' + escapeHtml(item.last_message || "暂无消息") + '</p></span><span class="cloud-message-meta"><time>' + messageTime(item.last_message_at || item.created_at, index ? "昨天" : "刚刚") + '</time>' + (unread ? '<b class="cloud-unread">' + unread + '</b>' : "") + '</span></button>';
      }).join("") || '<div class="backend-empty">暂无私聊，点击通讯录中的联系人开始聊天</div>';
      page.querySelectorAll(".cloud-conversations .cloud-message-row").forEach(function (row) {
        const conversation = directConversations.find(function (item) { return item.id === row.dataset.id; });
        row.addEventListener("click", function () { openCloudThread(conversation); });
      });
      const allNotices = notifications.notifications || [];
      const showAllNotices = page.dataset.showAllNotices === "true";
      const noticeItems = showAllNotices ? allNotices : allNotices.slice(0, 3);
      const unreadNotices = noticeItems.filter(function (item) { return !item.read_at; }).length;
      const allUnreadNotices = allNotices.filter(function (item) { return !item.read_at; }).length;
      page.querySelector(".cloud-notifications").innerHTML = '<div class="cloud-section-head"><strong>通知中心' + (allUnreadNotices ? ' <b class="cloud-unread">' + allUnreadNotices + '</b>' : '') + '</strong><button type="button" class="cloud-notice-all">' + (showAllNotices ? '收起' : '查看全部') + '</button></div>' + (noticeItems.map(function (item) {
        return '<button type="button" class="cloud-notice' + (item.read_at ? '' : ' is-unread') + '" data-id="' + item.id + '"><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.message) + ' · ' + messageTime(item.created_at, "刚刚") + '</small></button>';
      }).join("") || '<div class="backend-empty">暂无通知</div>');
      page.querySelector(".cloud-notice-all")?.addEventListener("click", function () {
        page.dataset.showAllNotices = showAllNotices ? "false" : "true";
        renderCloudMessagePage("refresh");
        setTimeout(function () { page.querySelector(".cloud-notifications")?.scrollIntoView({ block: "start", behavior: "smooth" }); }, 50);
      });
      page.querySelectorAll(".cloud-notice[data-id]").forEach(function (notice) {
        notice.addEventListener("click", async function () {
          const item = noticeItems.find(function (entry) { return String(entry.id) === String(notice.dataset.id); });
          if (item) showCloudNoticeDetail(item);
          if (notice.classList.contains("is-unread")) {
            await window.zhixingApi.api("/api/notifications/" + notice.dataset.id + "/read", { method: "PATCH" });
            notice.classList.remove("is-unread");
            if (item) item.read_at = new Date().toISOString();
            renderCloudMessagePage("refresh");
            syncGuestMessageCount();
          }
        });
      });
      syncGuestMessageCount();
      page.dataset.loading = "false";
    } catch (error) {
      if (window.location.hash !== "#/message" || !page.isConnected) {
        closeCloudMessagePage();
        return;
      }
      page.querySelector(".cloud-conversations").innerHTML = '<div class="backend-status is-error">' + escapeHtml(error.message) + '</div>';
      page.dataset.loading = "false";
    }
  }

  function syncGuestMessageState() {
    if (window.location.hash !== "#/message") {
      document.documentElement.classList.remove("guest-message-route");
      document.documentElement.classList.remove("cloud-message-route");
      document.getElementById("guest-message-hard-lock")?.remove();
      closeCloudMessagePage();
      document.documentElement.dataset.cloudMessagesOpened = "";
      return;
    }
    const user = window.zhixingApi?.user;
    const shouldLock = !user;
    document.documentElement.classList.toggle("guest-message-route", shouldLock);
    const existing = document.getElementById("guest-message-hard-lock");
    if (!shouldLock) {
      if (existing) existing.remove();
      document.documentElement.classList.remove("guest-message-route");
      document.documentElement.classList.add("cloud-message-active");
      window.setTimeout(function () { renderCloudMessagePage(); }, 80);
      return;
    }
    document.getElementById("cloud-message-page")?.remove();
    document.documentElement.classList.remove("cloud-message-active");
    const html = '<div><strong>请登陆后查看</strong><button type="button">登录 / 注册</button></div>';
    if (existing) {
      if (existing.innerHTML !== html) existing.innerHTML = html;
      const button = existing.querySelector("button");
      if (button && !button.dataset.bound) {
        button.dataset.bound = "true";
        button.addEventListener("click", openAuthPanel);
      }
      return;
    }
    const lock = document.createElement("section");
    lock.id = "guest-message-hard-lock";
    lock.className = "guest-message-hard-lock";
    lock.setAttribute("role", "dialog");
    lock.setAttribute("aria-live", "polite");
    lock.innerHTML = html;
    const button = lock.querySelector("button");
    if (button) {
      button.dataset.bound = "true";
      button.addEventListener("click", openAuthPanel);
    }
    document.body.appendChild(lock);
  }

  function syncGuestRouteState() {
    if (window.location.hash !== "#/message") closeCloudMessagePage();
    if (window.location.hash !== "#/message") {
      document.documentElement.classList.remove("cloud-message-active");
      const main = document.getElementById("main-content");
      if (main) {
        main.style.removeProperty("visibility");
        main.style.removeProperty("display");
        main.style.removeProperty("opacity");
      }
    }
    const guest = !hasRealAccount();
    document.documentElement.classList.toggle("guest-zhi-route", guest && window.location.hash === "#/zhi-xing");
    syncGuestZhiHardLock();
    syncGuestMessageState();
  }

  let messageFlashGuardTimer = null;
  let routeHandoffGuardTimer = null;

  function beginRouteHandoffGuard(kind) {
    ensureCloudMessageStyle();
    document.documentElement.classList.add("route-handoff-guard");
    if (kind === "zhi") document.documentElement.classList.add("zhi-route-flash-guard");
    if (kind === "message") document.documentElement.classList.add("message-route-flash-guard");
    if (kind === "profile") document.documentElement.classList.add("profile-route-flash-guard");
    window.clearTimeout(routeHandoffGuardTimer);
    routeHandoffGuardTimer = window.setTimeout(clearRouteHandoffGuard, 900);
  }

  function clearRouteHandoffGuard() {
    document.documentElement.classList.remove("route-handoff-guard", "zhi-route-flash-guard", "message-route-flash-guard", "profile-route-flash-guard");
  }

  function restoreProfileInteractivity() {
    if (window.location.hash !== "#/profile") return;
    document.documentElement.classList.remove("route-handoff-guard", "profile-route-flash-guard");
    const main = document.getElementById("main-content");
    if (main) {
      main.style.removeProperty("opacity");
      main.style.removeProperty("pointer-events");
      main.style.removeProperty("visibility");
      main.removeAttribute("aria-hidden");
    }
    document.querySelectorAll("#role-profile-menu-bottom,.role-profile-menu-fallback,.role-profile-logout-fallback").forEach(function (node) {
      node.style.setProperty("pointer-events", "auto", "important");
      node.style.removeProperty("visibility");
      node.style.removeProperty("opacity");
      node.removeAttribute("aria-hidden");
    });
  }

  function mainStillShowsMessagePage() {
    if (window.location.hash === "#/message") return false;
    const main = document.getElementById("main-content") || document.querySelector("main") || document.body;
    if (!main) return false;
    const text = (main.textContent || "").replace(/\s+/g, "");
    return /消息/.test(text) && /(AI导游|通知中心|研学一班|第二小组|系统通知|任务即将到期|成就解锁)/.test(text);
  }

  function suppressMessageRouteFlash() {
    if (window.location.hash === "#/message") {
      document.documentElement.classList.remove("message-route-flash-guard");
      return;
    }
    ensureCloudMessageStyle();
    if (!mainStillShowsMessagePage()) {
      document.documentElement.classList.remove("message-route-flash-guard");
      return;
    }
    document.documentElement.classList.add("message-route-flash-guard");
    window.clearTimeout(messageFlashGuardTimer);
    messageFlashGuardTimer = window.setTimeout(function checkMessageFlash() {
      if (mainStillShowsMessagePage()) {
        messageFlashGuardTimer = window.setTimeout(checkMessageFlash, 80);
        return;
      }
      document.documentElement.classList.remove("message-route-flash-guard");
    }, 80);
  }

  function prepareGuestRouteTransition(event) {
    const target = event.target?.closest?.("button,a");
    if (!target) return;
    const text = (target.textContent || "").replace(/\s+/g, "");
    const href = target.getAttribute?.("href") || "";
    const goingToProfile = href === "#/profile" || text === "\u6211\u7684" || /鎴戜笂|鎴戠殑/.test(text);
    const routeLike = href.startsWith("#/") || /首页|发现|知行|消息|我的|社区|课程|地图|返回|更多|打开地图/.test(text);
    if (!routeLike) return;
    const goingToMessage = href === "#/message" || text === "消息";
    if (goingToMessage && hasRealAccount()) {
      ensureCloudMessageStyle();
      document.documentElement.classList.add("cloud-message-route", "cloud-message-active", "message-route-flash-guard");
      window.setTimeout(function () {
        renderCloudMessagePage(true);
        document.documentElement.classList.remove("message-route-flash-guard");
      }, 0);
    } else {
      closeCloudMessagePage();
      window.setTimeout(suppressMessageRouteFlash, 0);
    }
    if (hasRealAccount()) return;
    document.documentElement.classList.add("guest-route-transition");
    window.setTimeout(function () { document.documentElement.classList.remove("guest-route-transition"); }, 420);
  }

  function prepareRouteHandoff(event) {
    const target = event.target?.closest?.("button,a");
    if (!target) return;
    const text = (target.textContent || "").replace(/\s+/g, "");
    const href = target.getAttribute?.("href") || "";
    const goingToProfile = href === "#/profile" || text === "\u6211\u7684" || /鎴戠殑/.test(text);
    const goingToMessage = href === "#/message" || text === "消息" || text === "娑堟伅";
    const goingToZhi = href === "#/zhi-xing" || text === "知行" || text === "鐭ヨ";
    if (goingToMessage && hasRealAccount()) {
      beginRouteHandoffGuard("message");
      document.documentElement.classList.add("cloud-message-route", "cloud-message-active");
      window.setTimeout(function () {
        renderCloudMessagePage(true);
        clearRouteHandoffGuard();
      }, 0);
      return;
    }
    if (goingToZhi) {
      beginRouteHandoffGuard("zhi");
      window.setTimeout(function () {
        syncGuestInitialState();
        syncZhiProgressConsistency(document);
        syncZhiInitialProgressBars(document);
        window.setTimeout(clearRouteHandoffGuard, 320);
      }, 0);
      return;
    }
    if (goingToProfile) {
      beginRouteHandoffGuard("profile");
      window.setTimeout(function () {
        syncGuestInitialState();
        window.setTimeout(clearRouteHandoffGuard, 320);
      }, 0);
    }
  }

  function openAuthPanel() {
    if (window.zhixingApi?.openAuth) {
      window.zhixingApi.openAuth();
      return;
    }
    const accountButton = document.querySelector(".backend-account-button");
    if (accountButton) accountButton.click();
  }

  function bindStableAuthFloatDrag(button) {
    if (!button || button.dataset.dragBound) return;
    button.dataset.dragBound = "true";
    let drag = null;
    button.addEventListener("pointerdown", function (event) {
      if (event.button !== 0) return;
      const rect = button.getBoundingClientRect();
      drag = { startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top, moved: false };
      button.setPointerCapture?.(event.pointerId);
    });
    button.addEventListener("pointermove", function (event) {
      if (!drag) return;
      const dx = event.clientX - drag.startX;
      const dy = event.clientY - drag.startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      if (!drag.moved) return;
      event.preventDefault();
      const bounds = accountFloatBounds(button);
      const maxX = bounds.maxX;
      const maxY = bounds.maxY;
      const minX = bounds.minX;
      const minY = bounds.minY;
      button.style.setProperty("left", Math.min(Math.max(minX, drag.left + dx), maxX) + "px", "important");
      button.style.setProperty("top", Math.min(Math.max(minY, drag.top + dy), maxY) + "px", "important");
      button.style.setProperty("right", "auto", "important");
      button.classList.add("is-dragging");
    });
    button.addEventListener("pointerup", function (event) {
      if (!drag) return;
      button.releasePointerCapture?.(event.pointerId);
      button.classList.remove("is-dragging");
      if (drag.moved) {
        event.preventDefault();
        event.stopPropagation();
        button.dataset.ignoreNextClick = "true";
        const rect = button.getBoundingClientRect();
        try { localStorage.setItem("zhixingStableAuthFloatPosition", JSON.stringify({ x: Math.round(rect.left), y: Math.round(rect.top) })); } catch (_error) {}
        setTimeout(function () { delete button.dataset.ignoreNextClick; }, 0);
      }
      drag = null;
    });
  }

  function accountFloatBounds(button) {
    const pageWidth = Math.min(window.innerWidth, 480);
    const pageLeft = Math.max(0, (window.innerWidth - pageWidth) / 2);
    const pad = 10;
    const width = 104;
    const height = 36;
    return {
      minX: pageLeft + pad,
      maxX: Math.max(pageLeft + pad, pageLeft + pageWidth - width - pad),
      minY: 10,
      maxY: Math.max(10, window.innerHeight - height - 76)
    };
  }

  function syncAccountFloatLayer() {
    const backendButton = document.querySelector(".backend-account-button");
    if (backendButton) {
      backendButton.style.setProperty("display", "none", "important");
      backendButton.style.setProperty("visibility", "hidden", "important");
      backendButton.style.setProperty("opacity", "0", "important");
      backendButton.style.setProperty("pointer-events", "none", "important");
      backendButton.setAttribute("aria-hidden", "true");
    }
    let button = document.getElementById("stable-auth-float");
    if (!button) {
      button = document.createElement("button");
      button.id = "stable-auth-float";
      button.type = "button";
      button.className = "stable-auth-float";
      document.body.appendChild(button);
      bindStableAuthFloatDrag(button);
      try {
        const saved = JSON.parse(localStorage.getItem("zhixingStableAuthFloatPosition") || "null");
        if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) {
          const bounds = accountFloatBounds(button);
          button.style.setProperty("left", Math.min(Math.max(bounds.minX, saved.x), bounds.maxX) + "px", "important");
          button.style.setProperty("top", Math.min(Math.max(bounds.minY, saved.y), bounds.maxY) + "px", "important");
          button.style.setProperty("right", "auto", "important");
        }
      } catch (_error) {}
    } else {
      bindStableAuthFloatDrag(button);
    }
    if (button.dataset.authClickBound !== "true") {
      button.dataset.authClickBound = "true";
      button.addEventListener("click", function (event) {
        if (button.dataset.ignoreNextClick) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        openAuthPanel();
      });
    }
    const user = window.zhixingApi?.user;
    const roleLabel = { student: "\u5b66\u751f", teacher: "\u8001\u5e08", parent: "\u5bb6\u957f", admin: "\u7ba1\u7406\u5458" }[user?.role] || "\u8d26\u53f7";
    button.textContent = user ? roleLabel + " \u00b7 " + (user.displayName || "\u8d26\u53f7\u4e2d\u5fc3") : "\u767b\u5f55 / \u6ce8\u518c";
    button.dataset.stableAccountFloat = "true";
    button.removeAttribute("aria-hidden");
    if (button.parentElement !== document.body) document.body.appendChild(button);
    button.className = "stable-auth-float";
    button.style.setProperty("position", "fixed", "important");
    button.style.setProperty("display", "inline-flex", "important");
    button.style.setProperty("visibility", "visible", "important");
    button.style.setProperty("opacity", "1", "important");
    button.style.setProperty("z-index", "2147483600", "important");
    button.style.setProperty("pointer-events", "auto", "important");
    button.style.setProperty("touch-action", "none", "important");
    button.style.setProperty("user-select", "none", "important");
    button.style.setProperty("transition", "none", "important");
    button.style.setProperty("width", "104px", "important");
    button.style.setProperty("height", "36px", "important");
    button.style.setProperty("min-width", "104px", "important");
    button.style.setProperty("max-width", "104px", "important");
    button.style.setProperty("min-height", "36px", "important");
    button.style.setProperty("max-height", "36px", "important");
    button.style.setProperty("overflow", "hidden", "important");
    button.style.setProperty("white-space", "nowrap", "important");
    button.style.setProperty("text-overflow", "ellipsis", "important");
    const rect = button.getBoundingClientRect();
    const bounds = accountFloatBounds(button);
    const maxX = bounds.maxX;
    const maxY = bounds.maxY;
    const minX = bounds.minX;
    const minY = bounds.minY;
    if (rect.right < minX || rect.left > maxX || rect.bottom < minY || rect.top > window.innerHeight - 8) {
      button.style.setProperty("left", maxX + "px", "important");
      button.style.setProperty("top", minY + "px", "important");
      button.style.setProperty("right", "auto", "important");
    } else if (rect.left < minX || rect.top < minY || rect.left > maxX || rect.top > maxY) {
      button.style.setProperty("left", Math.min(Math.max(minX, rect.left), maxX) + "px", "important");
      button.style.setProperty("top", Math.min(Math.max(minY, rect.top), maxY) + "px", "important");
      button.style.setProperty("right", "auto", "important");
    }
  }

  function handleGuestZhiAuthClick(event) {
    if (!event.target?.closest?.("#guest-zhi-hard-lock button")) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openAuthPanel();
  }

  function handleGuestMessageAuthClick(event) {
    if (!event.target?.closest?.("#guest-message-hard-lock button")) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openAuthPanel();
  }

  function guardGuestSearchAccess(event) {
    if (hasRealAccount()) return;
    const target = event.target?.closest?.("input,textarea,[contenteditable='true']");
    if (!target) return;
    const label = ((target.getAttribute("placeholder") || "") + " " + (target.getAttribute("aria-label") || "") + " " + (target.closest("label")?.textContent || "")).replace(/\s+/g, "");
    const isSearch = target.type === "search" || /搜索|查找/.test(label);
    if (!isSearch) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    if ("blur" in target) target.blur();
    openAuthPanel();
  }

  function hideGuestHomeHeaderIdentity() {
    if (window.location.hash !== "#/home" && window.location.hash !== "#/" && window.location.hash !== "") return;
    if (hasRealAccount()) return;
    const header = Array.from(document.querySelectorAll("header")).find(function (node) {
      return /知行研学|探索世界|成就自我/.test((node.textContent || "").replace(/\s+/g, ""));
    });
    if (!header) return;
    Array.from(header.querySelectorAll("img,span,strong,small,div")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (/知行研学|探索世界|成就自我/.test(text)) return;
      const isLevelNode = /^Lv\.?\d+$/i.test(text) || (/Lv\.|LV\./.test(text) && text.length <= 12);
      const isLevelPill = isLevelNode || (text.length <= 20 && /Lv\.|LV\.|等级/.test(text));
      if (isLevelPill) {
        node.style.setProperty("display", "none", "important");
        node.style.setProperty("visibility", "hidden", "important");
        node.setAttribute("aria-hidden", "true");
      }
      if (node.tagName === "DIV" && /w-10\s+h-10\s+rounded-full/.test(String(node.className || ""))) {
        node.style.setProperty("display", "none", "important");
        node.style.setProperty("visibility", "hidden", "important");
        node.setAttribute("aria-hidden", "true");
      }
      if (node.tagName === "IMG" && /avatar|user|profile|张小华|未登录|游客/i.test(String(node.alt || "") + " " + String(node.src || ""))) {
        node.style.setProperty("display", "none", "important");
        node.style.setProperty("visibility", "hidden", "important");
        node.setAttribute("aria-hidden", "true");
      }
    });
  }

  function restoreGuestHomeHeaderPublic() {
    if (window.location.hash !== "#/home" && window.location.hash !== "#/" && window.location.hash !== "") return;
    if (hasRealAccount()) return;
    const header = Array.from(document.querySelectorAll("header")).find(function (node) {
      return /知行研学|探索世界|成就自我|推荐|热门|附近|最新/.test((node.textContent || "").replace(/\s+/g, ""));
    });
    if (!header) return;
    header.style.removeProperty("display");
    header.style.removeProperty("visibility");
    header.removeAttribute("aria-hidden");
    Array.from(header.querySelectorAll("div,input,button,h1,p,span,strong,small")).forEach(function (node) {
      node.style.removeProperty("display");
      node.style.removeProperty("visibility");
      node.removeAttribute("aria-hidden");
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (/^Lv\.?\d+$/i.test(text) || /等级|Lv\.|LV\./.test(text)) return;
      if (node.tagName !== "IMG") {
        node.style.removeProperty("width");
        node.style.removeProperty("max-width");
        node.style.removeProperty("transform");
        node.style.removeProperty("transform-origin");
      }
    });
  }

  function hideGuestHomeSearchLocation() {
    if (window.location.hash !== "#/home" && window.location.hash !== "#/" && window.location.hash !== "") return;
    if (hasRealAccount()) return;
    const header = document.querySelector("header");
    if (!header) return;
    Array.from(header.querySelectorAll("span,button")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (text !== "承德") return;
      const chip = node.closest("span,button");
      if (!chip) return;
      chip.style.setProperty("display", "none", "important");
      chip.style.setProperty("visibility", "hidden", "important");
      chip.setAttribute("aria-hidden", "true");
    });
  }

  function syncGuestZhiHardLock() {
    const existing = document.getElementById("guest-zhi-hard-lock");
    const user = hasRealAccount() ? window.zhixingApi?.user : null;
    const canShowZhiData = user && (user.role === "teacher" || ((user.role === "student" || user.role === "parent") && zhiAccessHasCloudData));
    const shouldLock = window.location.hash === "#/zhi-xing" && !canShowZhiData;
    document.documentElement.classList.toggle("zhi-hard-locked", shouldLock);
    if (!shouldLock) {
      document.documentElement.classList.remove("zhi-hard-locked");
      if (existing) existing.remove();
      return;
    }
    const title = user ? "暂无研学课程" : "请登陆后查看";
    const description = user
      ? "参加相应研学课程后，这里才会显示待办事项、排行榜、学习进度和个人成果数据。"
      : "";
    const action = user ? "" : '<button type="button">登录 / 注册</button>';
    const html = '<div><strong>' + escapeHtml(title) + '</strong>' + (description ? '<p>' + escapeHtml(description) + '</p>' : "") + action + '</div>';
    if (existing) {
      if (existing.innerHTML !== html) existing.innerHTML = html;
      const button = existing.querySelector("button");
      if (button && !button.dataset.bound) {
        button.dataset.bound = "true";
        button.addEventListener("click", openAuthPanel);
      }
      return;
    }
    const lock = document.createElement("section");
    lock.id = "guest-zhi-hard-lock";
    lock.className = "guest-zhi-hard-lock";
    lock.setAttribute("role", "dialog");
    lock.setAttribute("aria-live", "polite");
    lock.innerHTML = html;
    const button = lock.querySelector("button");
    if (button) {
      button.dataset.bound = "true";
      button.addEventListener("click", openAuthPanel);
    }
    document.body.appendChild(lock);
  }

  function syncGuestZhiProgress() {
    if (hasRealAccount() || window.location.hash !== "#/zhi-xing") {
      document.documentElement.classList.remove("guest-zhi-state");
      return;
    }
    document.documentElement.classList.add("guest-zhi-state");
    syncGuestZhiHardLock();
    return;
    setPlainMetricNear("本周学习进度", "0%", /^\d+%$/);
    setPlainMetricNear("总进度", "0%", /^\d+%$/);
    setPlainMetricNear("任务完成率", "0%", /^\d+%$/);
    setPlainMetricNear("学习进度", "0%", /^\d+%$/);
    setPlainMetricNear("已完成", "0", /^\d+$/);
    setPlainMetricNear("进行中", "0", /^\d+$/);
    setPlainMetricNear("连续学习", "0天", /^\d+天$/);
    setPlainMetricNear("总积分", "0", /^\d+$/);
    Array.from(document.querySelectorAll(".zhi-task-inline-progress")).forEach(function (progress) {
      const bar = progress.querySelector("i");
      const text = progress.querySelector("b");
      if (bar) bar.style.width = "0%";
      if (text) text.textContent = "0%";
    });
    Array.from(document.querySelectorAll("#main-content [style]")).forEach(function (node) {
      const style = node.getAttribute("style") || "";
      if (/width:\s*\d+%/.test(style) && (node.closest("#main-content")?.textContent || "").includes("总进度")) node.style.width = "0%";
    });
    syncGuestZhiPersonalContent();
  }

  function hideGuestZhiBlockByText(root, patterns) {
    Array.from(root.querySelectorAll("h1,h2,h3,h4,p,span,strong,small")).forEach(function (node) {
      const text = node.textContent.replace(/\s+/g, "");
      if (!patterns.some(function (pattern) { return pattern.test(text); })) return;
      const block = node.closest("section") || node.closest(".rounded-2xl") || node.closest(".rounded-xl") || node.closest("div");
      if (block) {
        block.style.display = "none";
        block.setAttribute("aria-hidden", "true");
      }
    });
  }

  function hideGuestPersonalBlock(root, patterns) {
    Array.from(root.querySelectorAll("h1,h2,h3,h4,p,span,strong,small")).forEach(function (node) {
      const text = node.textContent.replace(/\s+/g, "");
      if (!patterns.some(function (pattern) { return pattern.test(text); })) return;
      let block = node.closest("section") || node.closest(".bg-white") || node.closest(".rounded-3xl") || node.closest(".rounded-2xl") || node.closest(".rounded-xl");
      if (!block) block = node.parentElement;
      while (block?.parentElement && block.parentElement !== root && block.parentElement.textContent.replace(/\s+/g, "").length < 1200) {
        const parentText = block.parentElement.textContent.replace(/\s+/g, "");
        if (patterns.some(function (pattern) { return pattern.test(parentText); })) block = block.parentElement;
        else break;
      }
      if (block?.parentElement?.id === "root" || block?.id === "root") return;
      if (block) {
        block.style.setProperty("display", "none", "important");
        block.setAttribute("aria-hidden", "true");
      }
    });
  }

  function hideGuestRankMeRows(root) {
    return;
    const selfPatterns = [/我/, /我的/, /当前用户/, /张小华/];
    const rankPatterns = [/排行/, /排名/, /榜单/, /Lv./, /LV./];
    Array.from(root.querySelectorAll("li,button,article,section,.rounded-3xl,.rounded-2xl,.rounded-xl,div")).forEach(function (node) {
      const text = node.textContent.replace(/\s+/g, "");
      if (!text || !selfPatterns.some(function (pattern) { return pattern.test(text); })) return;
      const scopeNode = node.closest("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white") || node.parentElement || root;
      const scopeText = (scopeNode.textContent || "").replace(/\s+/g, "");
      if (!rankPatterns.some(function (pattern) { return pattern.test(scopeText); })) return;
      if (scopeText.length > 1800) return;
      const row = node.closest("li,button,article,section,.rounded-3xl,.rounded-2xl,.rounded-xl") || node;
      if (row?.parentElement?.id === "root" || row?.id === "root") return;
      row.style.setProperty("display", "none", "important");
      row.style.setProperty("visibility", "hidden", "important");
      row.setAttribute("aria-hidden", "true");
    });
  }

  function isProtectedFloatingSurface(node) {
    return Boolean(node?.closest?.(".theme-package-page,.lesson-video-modal,.backend-modal,.popular-projects-page,.backend-course-detail"));
  }

  function hideGuestPrivateBits(root) {
    if (window.zhixingApi?.user) return;
    if (window.location.hash === "#/profile") return;
    const todoPattern = /\u5f85\u529e\u4e8b\u9879|\u5f85\u529e|\u4ee3\u529e|\u6211\u7684\u4efb\u52a1|\u4eca\u65e5\u4efb\u52a1|寰呭姙|浠ｅ姙|鎴戠殑浠诲姟|浠婃棩浠诲姟/;
    const selfPattern = /\u5f20\u5c0f\u534e|\u5f53\u524d\u7528\u6237|\u6211\u7684|(^|[^一-龥])\u6211([^一-龥]|$)|寮犲皬鍗?|褰撳墠鐢ㄦ埛|鎴戠殑|鎴?/;
    const rankPattern = /\u6392\u884c|\u6392\u540d|\u699c\u5355|Lv\.|LV\.|鎺掕|鎺掑悕|姒滃崟/;
    const hideNode = function (node) {
      if (!node || node.id === "root" || node.parentElement?.id === "root") return;
      if (isProtectedFloatingSurface(node)) return;
      if (node.closest?.("header")) return;
      node.style.setProperty("display", "none", "important");
      node.style.setProperty("visibility", "hidden", "important");
      node.setAttribute("aria-hidden", "true");
    };

    Array.from(root.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (node) {
      if (node.closest?.("header")) return;
      if (isProtectedFloatingSurface(node)) return;
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text || text.length > 900 || !todoPattern.test(text)) return;
      const hasTodoTitle = Array.from(node.querySelectorAll("h1,h2,h3,h4,strong,p,span")).some(function (item) {
        return todoPattern.test((item.textContent || "").replace(/\s+/g, ""));
      });
      if (!hasTodoTitle) return;
      const block = node.closest("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white") || node;
      hideNode(block);
    });

    Array.from(root.querySelectorAll("li,button,article,.rounded-3xl,.rounded-2xl,.rounded-xl,div")).forEach(function (node) {
      if (node.closest?.("header")) return;
      if (isProtectedFloatingSurface(node)) return;
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text || text.length > 700 || !selfPattern.test(text)) return;
      const scope = node.closest("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white") || node.parentElement || root;
      const scopeText = (scope.textContent || "").replace(/\s+/g, "");
      if (!rankPattern.test(scopeText) && !rankPattern.test(text)) return;
      const row = node.closest("li,button,article,.rounded-3xl,.rounded-2xl,.rounded-xl") || node;
      hideNode(row);
    });
  }

  function guestAvatarDataUrl() {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#e5e7eb"/><stop offset="1" stop-color="#9ca3af"/></linearGradient></defs><rect width="120" height="120" rx="60" fill="url(#g)"/><circle cx="60" cy="44" r="23" fill="#f8fafc"/><path d="M22 104c7-25 22-38 38-38s31 13 38 38" fill="#f8fafc"/><circle cx="95" cy="30" r="15" fill="#d1d5db" opacity=".55"/><circle cx="28" cy="28" r="17" fill="#f3f4f6" opacity=".45"/></svg>';
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function syncGuestGreyAvatars() {
    if (window.zhixingApi?.user) return;
    const allowedRoutes = new Set(["#/profile"]);
    if (!allowedRoutes.has(window.location.hash)) return;
    const root = document.getElementById("main-content") || document;
    Array.from(root.querySelectorAll("img")).forEach(function (img) {
      const scope = img.closest("section,header,div") || img.parentElement;
      const text = scope?.textContent || "";
      const classes = String(img.className || "");
      const looksLikeAvatar = classes.includes("rounded-full") || /未登录|张小华|Lv.|LV.|研学探索者|游客/.test(text);
      if (!looksLikeAvatar) return;
      img.src = guestAvatarDataUrl();
      img.style.setProperty("filter", "grayscale(1)", "important");
      img.style.setProperty("opacity", "0.82", "important");
      img.dataset.guestGreyAvatar = "true";
    });
  }

  function syncGuestZeroProgressBars() {
    if (window.zhixingApi?.user || window.location.hash === "#/zhi-xing") return;
    const root = document.getElementById("main-content") || document;
    Array.from(root.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (node) {
      if (node.classList?.contains("community-tag-chip-fixed") || node.closest?.(".community-tag-chip-fixed")) return;
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!/0%/.test(text)) return;
      if (!/任务完成率|学习进度|总进度|本周学习进度|浠诲姟瀹屾垚鐜?|瀛︿範杩涘害|鎬昏繘搴?/.test(text)) return;
      Array.from(node.querySelectorAll("div,span,i")).forEach(function (bar) {
        if (bar.classList?.contains("community-tag-chip-fixed") || bar.closest?.(".community-tag-chip-fixed")) return;
        if ((bar.textContent || "").trim().startsWith("#")) return;
        const className = String(bar.className || "");
        const style = bar.getAttribute("style") || "";
        const rect = bar.getBoundingClientRect();
        const looksLikeFill = /bg-white|bg-green|from-|to-|progress|rounded-full/.test(className) || /width:\s*\d+%/.test(style);
        if (!looksLikeFill || rect.height > 22) return;
        if (/overflow-hidden/.test(className) && bar.children.length > 0) return;
        bar.style.setProperty("width", "0px", "important");
        bar.style.setProperty("max-width", "0px", "important");
        bar.style.setProperty("transform", "scaleX(0)", "important");
        bar.style.setProperty("transform-origin", "left center", "important");
      });
    });
  }

  function syncGuestPrivateRoutes() {
    const privateRoutes = new Set(["#/trip", "#/arena", "#/shop", "#/search", "#/favorites", "#/history"]);
    const main = document.getElementById("main-content");
    if (!main) return;
    if (window.zhixingApi?.user || !privateRoutes.has(window.location.hash)) {
      main.querySelector(".guest-private-route-lock")?.remove();
      Array.from(main.children).forEach(function (child) {
        if (child.dataset.guestRoutePreviousDisplay) {
          child.style.display = child.dataset.guestRoutePreviousDisplay === "__empty__" ? "" : child.dataset.guestRoutePreviousDisplay;
          delete child.dataset.guestRoutePreviousDisplay;
        }
      });
      return;
    }
    Array.from(main.children).forEach(function (child) {
      if (child.classList?.contains("guest-private-route-lock")) return;
      if (!child.dataset.guestRoutePreviousDisplay) child.dataset.guestRoutePreviousDisplay = child.style.display || "__empty__";
      child.style.display = "none";
    });
    if (!main.querySelector(".guest-private-route-lock")) {
      const lock = document.createElement("section");
      lock.className = "zhi-access-lock guest-private-route-lock";
      lock.innerHTML = '<div><strong>登录后查看个人功能</strong><p>搜索、消息、行程、收藏、浏览历史、积分商城和活动记录属于账号功能，登录后才会显示真实内容。</p><button type="button">登录 / 注册</button></div>';
      lock.querySelector("button").addEventListener("click", function () { window.zhixingApi?.openAuth(); });
      main.appendChild(lock);
    }
  }

  function syncGuestZhiPersonalContent() {
    if (window.zhixingApi?.user) return;
    if (window.location.hash !== "#/zhi-xing") return;
    const main = document.getElementById("main-content") || document;
    hideGuestZhiBlockByText(main, [/待办/, /代办/, /我的任务/, /今日任务/]);
    hideGuestPersonalBlock(main, [/待办事项/, /待办/, /代办/, /我的任务/, /今日任务/]);
    Array.from(main.querySelectorAll("section,div")).forEach(function (node) {
      const text = node.textContent.replace(/\s+/g, "");
      if (/本周学习进度|任务完成率|连续学习|总积分|已完成|进行中/.test(text)) {
        Array.from(node.querySelectorAll("p,h3,strong,span")).forEach(function (item) {
          const value = item.textContent.trim();
          if (/^\d+%$/.test(value)) item.textContent = "0%";
          else if (/^\d+天/.test(value)) item.textContent = "0天";
          else if (/^\d+$/.test(value)) item.textContent = "0";
        });
        Array.from(node.querySelectorAll("div,span,i")).forEach(function (bar) {
          const className = String(bar.className || "");
          const style = bar.getAttribute("style") || "";
          if (/h-full|rounded-full|progress|bg-white/.test(className) || /width:\s*\d/.test(style)) {
            bar.style.setProperty("width", "0px", "important");
            bar.style.setProperty("max-width", "0px", "important");
            bar.style.setProperty("transform", "none", "important");
          }
        });
      }
    });
    Array.from(main.querySelectorAll("section,div,article")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text) return;
      if (!/鎺掕|姒滃崟|鎺掑悕|姝ｒ兘/.test(text)) return;
      if (!/(鎴戜綅缃?|鎴戠殑|褰撳墠鐢ㄦ埛|寮犲皬鍗)/.test(text)) return;
      const block = node.closest("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white") || node;
      if (block && block.parentElement?.id !== "root") {
        block.style.setProperty("display", "none", "important");
        block.setAttribute("aria-hidden", "true");
      }
    });
    const rankHeadings = Array.from(main.querySelectorAll("h1,h2,h3,h4,p,span,strong")).filter(function (node) {
      return /排行|排名|榜单/.test(node.textContent);
    });
    rankHeadings.forEach(function (heading) {
      const scope = heading.closest("section") || heading.closest(".rounded-2xl") || heading.parentElement;
      Array.from(scope?.querySelectorAll("li,button,.rounded-2xl,.rounded-xl,div") || []).forEach(function (node) {
        const text = node.textContent.replace(/\s+/g, "");
        if (!/我|我的|当前用户|张小华/.test(text)) return;
        if (/排行|排名|榜单/.test(text) && node === scope) return;
        node.style.display = "none";
        node.setAttribute("aria-hidden", "true");
      });
    });
    hideGuestRankMeRows(main);
    hideGuestPrivateBits(main);
    syncGuestGreyAvatars();
    Array.from(main.querySelectorAll('[style*="width"]')).forEach(function (node) {
      const style = node.getAttribute("style") || "";
      if (/width:\s*(?!0)\d+%/.test(style)) node.style.width = "0%";
    });
  }

  let zhiAccessKey = "";
  let zhiAccessHasCloudData = false;
  let zhiAccessPromise = null;
  let zhiAccessLockMessage = null;
  let zhiAccessChildContext = null;

  function findZhiPage() {
    if (window.location.hash !== "#/zhi-xing") return null;
    const heading = Array.from(document.querySelectorAll("h1")).find(function (node) { return node.textContent.trim() === "知行导航"; });
    return heading?.closest(".min-h-screen") || heading?.closest("#main-content > div") || null;
  }

  function setZhiChildrenHidden(page, hidden) {
    Array.from(page.children).forEach(function (child) {
      if (child.classList?.contains("zhi-access-lock")) return;
      if (child.querySelector("h1") || child.matches("header")) return;
      if (hidden) {
        if (!child.dataset.zhiAccessPreviousDisplay) child.dataset.zhiAccessPreviousDisplay = child.style.display || "__empty__";
        child.style.display = "none";
      } else if (child.dataset.zhiAccessPreviousDisplay) {
        child.style.display = child.dataset.zhiAccessPreviousDisplay === "__empty__" ? "" : child.dataset.zhiAccessPreviousDisplay;
        delete child.dataset.zhiAccessPreviousDisplay;
      }
    });
  }

  function renderZhiAccessLock(title, description, actionLabel) {
    syncGuestZhiHardLock();
  }

  function unlockZhiPage() {
    const page = findZhiPage();
    zhiAccessLockMessage = null;
    document.getElementById("guest-zhi-hard-lock")?.remove();
    if (!page) return;
    setZhiChildrenHidden(page, false);
    page.querySelector(":scope > .zhi-access-lock")?.remove();
  }

  function updateZhiLockMessage(title, description, actionLabel) {
    zhiAccessLockMessage = { title: title, description: description, actionLabel: actionLabel };
    syncGuestZhiHardLock();
    const lock = document.getElementById("guest-zhi-hard-lock");
    if (!lock) return;
    const action = actionLabel ? '<button type="button">' + escapeHtml(actionLabel) + '</button>' : "";
    lock.innerHTML = '<div><strong>' + escapeHtml(title) + '</strong>' + (description ? '<p>' + escapeHtml(description) + '</p>' : "") + action + '</div>';
    const button = lock.querySelector("button");
    if (button) {
      button.dataset.bound = "true";
      button.addEventListener("click", openAuthPanel);
    }
  }

  function renderParentZhiChildContext() {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    if (user?.role !== "parent" || !zhiAccessChildContext) {
      document.getElementById("parent-zhi-child-context")?.remove();
      return;
    }
    const page = findZhiPage() || document.getElementById("main-content") || document.querySelector("main");
    if (!page) return;
    let panel = document.getElementById("parent-zhi-child-context");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "parent-zhi-child-context";
      panel.className = "role-route-panel";
      const rolePanel = document.getElementById("role-route-panel");
      if (rolePanel && page.contains(rolePanel)) rolePanel.insertAdjacentElement("afterend", panel);
      else {
        const header = Array.from(page.children).find(function (child) { return child.querySelector?.("h1") || child.matches?.("header"); });
        if (header?.nextSibling) page.insertBefore(panel, header.nextSibling);
        else page.insertBefore(panel, page.firstElementChild || null);
      }
    }
    const child = zhiAccessChildContext.child || {};
    const activeAction = document.getElementById("parent-zhi-child-context")?.dataset.activeAction || "courses";
    const enrollments = zhiAccessChildContext.enrollments || [];
    const assignments = zhiAccessChildContext.assignments || [];
    const avg = enrollments.length ? Math.round(enrollments.reduce(function (sum, item) { return sum + Number(item.progress || 0); }, 0) / enrollments.length) : 0;
    const completed = assignments.filter(function (item) { return item.submission_status || item.progress_status === "completed"; }).length;
    const childName = child.display_name || child.displayName || "孩子";
    panel.innerHTML = '<header><strong>孩子知行课程数据</strong><span>家长查看</span></header><p>当前显示的是 ' +
      escapeHtml(childName) + ' 的研学课程、任务、作业和进度数据，不是家长自己的学习数据。</p><div class="role-route-actions">' +
      '<button type="button">' + escapeHtml(String(enrollments.length)) + ' 门课程</button>' +
      '<button type="button">' + escapeHtml(String(avg)) + '% 平均进度</button>' +
      '<button type="button">' + escapeHtml(String(completed) + "/" + String(assignments.length)) + ' 已完成</button>' +
      '</div>';
    delete panel.dataset.parentZhiActionsDecorated;
    decorateParentZhiChildContextActions(panel);
    bindParentZhiPanelActions(panel);
    openParentZhiDetail(activeAction, panel);
  }

  function parentZhiDetailHtml(action) {
    const context = zhiAccessChildContext || {};
    const child = context.child || {};
    const childName = child.display_name || child.displayName || "\u5b69\u5b50";
    const enrollments = context.enrollments || [];
    const assignments = context.assignments || [];
    if (action === "assignments" || action === "feedback") {
      const list = assignments.slice(0, 6).map(function (item) {
        const score = item.score === null || item.score === undefined ? "\u5f85\u6279\u6539" : String(item.score) + "\u5206";
        return '<li><b>' + escapeHtml(item.title || item.assignment_title || "\u7814\u5b66\u4f5c\u4e1a") + '</b><p>' + escapeHtml(item.course_title || "\u5b69\u5b50\u8bfe\u7a0b") + ' · ' + escapeHtml(score) + '</p></li>';
      }).join("");
      return '<strong>' + escapeHtml(childName) + '\u7684\u4f5c\u4e1a\u53cd\u9988</strong><ul>' + (list || '<li>\u6682\u65e0\u4f5c\u4e1a\u63d0\u4ea4\u6216\u6279\u6539\u53cd\u9988\u3002</li>') + '</ul>';
    }
    if (action === "notice" || action === "safe") {
      return '<strong>\u5b89\u5168\u901a\u77e5</strong><ul><li>\u660e\u65e5 8:00 \u5728\u6821\u95e8\u53e3\u96c6\u5408\uff0c\u8bf7\u643a\u5e26\u6c34\u676f\u3001\u9632\u6652\u7528\u54c1\u548c\u5b66\u751f\u8bc1\u3002</li><li>\u5b69\u5b50\u8def\u7ebf\u548c\u4efb\u52a1\u5b8c\u6210\u60c5\u51b5\u4f1a\u5728\u6d88\u606f\u4e2d\u540c\u6b65\u7ed9\u5bb6\u957f\u3002</li></ul>';
    }
    if (action === "progress") {
      const avg = enrollments.length ? Math.round(enrollments.reduce(function (sum, item) { return sum + Number(item.progress || 0); }, 0) / enrollments.length) : 0;
      return '<strong>' + escapeHtml(childName) + '\u7684\u5e73\u5747\u8fdb\u5ea6</strong><p>\u5df2\u53c2\u52a0 ' + escapeHtml(String(enrollments.length)) + ' \u95e8\u8bfe\u7a0b\uff0c\u5e73\u5747\u8fdb\u5ea6 ' + escapeHtml(String(avg)) + '%\u3002</p>';
    }
    const list = enrollments.slice(0, 6).map(function (item) {
      return '<li><b>' + escapeHtml(item.course_title || item.title || "\u7814\u5b66\u8bfe\u7a0b") + '</b><p>\u8fdb\u5ea6 ' + escapeHtml(String(Number(item.progress || 0))) + '% · ' + escapeHtml(item.status || "\u5b66\u4e60\u4e2d") + '</p></li>';
    }).join("");
    return '<strong>' + escapeHtml(childName) + '\u7684\u8bfe\u7a0b</strong><ul>' + (list || '<li>\u6682\u65e0\u5df2\u53c2\u52a0\u8bfe\u7a0b\u6570\u636e\u3002</li>') + '</ul>';
  }

  function decorateParentZhiChildContextActions(panel) {
    if (!panel || panel.dataset.parentZhiActionsDecorated === "true") return;
    panel.dataset.parentZhiActionsDecorated = "true";
    const actions = ["courses", "progress", "feedback"];
    panel.querySelectorAll(".role-route-actions button").forEach(function (button, index) {
      button.dataset.action = actions[index] || "courses";
    });
    const headerAction = panel.querySelector("header span");
    if (headerAction) {
      headerAction.dataset.action = "courses";
      headerAction.setAttribute("role", "button");
      headerAction.setAttribute("tabindex", "0");
    }
  }

  function openParentZhiDetail(action, panel) {
    if (!panel) return;
    panel.dataset.activeAction = action || "courses";
    let detail = panel.querySelector(".parent-zhi-detail");
    if (!detail) {
      detail = document.createElement("div");
      detail.className = "parent-zhi-detail";
      panel.appendChild(detail);
    }
    detail.hidden = false;
    detail.innerHTML = parentZhiDetailHtml(action);
    detail.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function bindParentZhiPanelActions(panel) {
    if (!panel || panel.dataset.parentZhiBound === "true") return;
    panel.dataset.parentZhiBound = "true";
    panel.addEventListener("click", function (event) {
      const button = event.target?.closest?.("button,[data-action]");
      if (!button) return;
      const explicitAction = button.getAttribute("data-action");
      if (explicitAction) {
        event.preventDefault();
        panel.querySelectorAll("[data-action]").forEach(function (item) { item.classList.toggle("is-active", item === button); });
        openParentZhiDetail(explicitAction, panel);
        return;
      }
      const text = (button.textContent || "").replace(/\s+/g, "");
      const action = /作业|浣滀笟|反馈|鍙嶉|完成|宸插畬/.test(text) ? "feedback" :
        /安全|瀹夊叏|通知|閫氱煡/.test(text) ? "notice" :
        /课程|璇剧▼/.test(text) ? "courses" : "progress";
      event.preventDefault();
      openParentZhiDetail(action, panel);
    });
  }

  function handleParentZhiPanelClick(event) {
    if (window.location.hash !== "#/zhi-xing" || window.zhixingApi?.user?.role !== "parent") return;
    const panel = event.target?.closest?.("#parent-zhi-child-context");
    if (!panel) return;
    const actionNode = event.target?.closest?.(".role-route-actions button,header span,[data-action]") || panel;
    const buttons = Array.from(panel.querySelectorAll(".role-route-actions button"));
    const index = buttons.indexOf(actionNode);
    const action = actionNode.getAttribute?.("data-action") ||
      (index === 0 ? "courses" : index === 1 ? "progress" : index === 2 ? "feedback" : "courses");
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    panel.querySelectorAll(".role-route-actions button,header span").forEach(function (item) {
      item.classList.toggle("is-active", item === actionNode);
    });
    openParentZhiDetail(action, panel);
  }

  function syncParentZhiActions() {
    if (window.location.hash !== "#/zhi-xing" || window.zhixingApi?.user?.role !== "parent") return;
    [document.getElementById("role-route-panel"), document.getElementById("parent-zhi-child-context")].filter(Boolean).forEach(function (panel) {
      delete panel.dataset.parentZhiActionsDecorated;
      decorateParentZhiChildContextActions(panel);
      bindParentZhiPanelActions(panel);
    });
  }

  function syncParentZhiAccess(user, key) {
    if (zhiAccessKey !== key) {
      zhiAccessKey = key;
      zhiAccessHasCloudData = false;
      zhiAccessPromise = null;
      zhiAccessChildContext = null;
    }
    if (zhiAccessHasCloudData) {
      unlockZhiPage();
      renderParentZhiChildContext();
      syncParentZhiActions();
      return;
    }
    updateZhiLockMessage("正在同步孩子研学数据", "正在读取已绑定孩子的课程、任务和进度，请稍候。", "");
    if (!zhiAccessPromise && window.zhixingApi?.api) {
      zhiAccessPromise = window.zhixingApi.api("/api/parent/students").then(function (data) {
        const students = data.students || [];
        const child = students.find(function (item) { return item.approved_at; }) || students[0];
        if (!child || !child.approved_at) {
          zhiAccessHasCloudData = false;
          zhiAccessChildContext = null;
          updateZhiLockMessage("暂无已绑定孩子", "家长端知行页会显示已审核绑定孩子的课程数据。请先绑定并通过审核。", "");
          return null;
        }
        return Promise.all([
          window.zhixingApi.api("/api/enrollments?studentId=" + encodeURIComponent(child.id)),
          window.zhixingApi.api("/api/assignments?studentId=" + encodeURIComponent(child.id))
        ]).then(function (items) {
          const enrollments = items[0].enrollments || [];
          const assignments = items[1].assignments || [];
          zhiAccessHasCloudData = enrollments.length > 0;
          zhiAccessChildContext = { child: child, enrollments: enrollments, assignments: assignments };
          if (zhiAccessHasCloudData) {
            unlockZhiPage();
            renderParentZhiChildContext();
            syncParentZhiActions();
          } else {
            updateZhiLockMessage("孩子暂无研学课程", (child.display_name || "孩子") + " 参加研学课程后，这里会显示课程、任务、作业和进度数据。", "");
          }
        });
      }).catch(function () {
        zhiAccessHasCloudData = false;
        zhiAccessChildContext = null;
        updateZhiLockMessage("孩子数据同步失败", "暂时无法读取绑定孩子的研学课程数据，请稍后重试。", "");
      });
    }
  }

  function teacherZhiStatus(message, isError) {
    const status = document.querySelector("#teacher-zhi-workspace .teacher-zhi-status");
    if (!status) return;
    status.textContent = message || "";
    status.style.color = isError ? "#dc2626" : "#059669";
  }

  function teacherResourceStatus(message, isError) {
    const status = document.querySelector("#teacher-course-base-manager .teacher-zhi-status");
    if (!status) return;
    status.textContent = message || "";
    status.style.color = isError ? "#dc2626" : "#2563eb";
  }

  function readTeacherFiles(files) {
    const selected = Array.from(files || []).slice(0, 3);
    return Promise.all(selected.map(function (file) {
      return new Promise(function (resolve) {
        const meta = { name: file.name, type: file.type || "application/octet-stream", size: file.size };
        if (file.size > 2 * 1024 * 1024) {
          resolve(Object.assign(meta, { skippedData: true }));
          return;
        }
        const reader = new FileReader();
        reader.onload = function () { resolve(Object.assign(meta, { dataUrl: String(reader.result || "") })); };
        reader.onerror = function () { resolve(Object.assign(meta, { skippedData: true })); };
        reader.readAsDataURL(file);
      });
    }));
  }

  function courseContentBody(content) {
    if (!content) return {};
    const body = content.body;
    if (!body) return {};
    if (typeof body === "object") return body;
    try { return JSON.parse(body); } catch (_error) { return { description: String(body || "") }; }
  }

  function teacherCourseSlug(title) {
    const base = String(title || "course").trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-+|-+$/g, "");
    return (base || "course") + "-" + Date.now().toString(36).slice(-5);
  }

  function normalizeTeacherCourseBaseManagerText(panel) {
    if (!panel) return;
    const title = panel.querySelector("header h2");
    if (title) title.textContent = "研学课程与研学基地";
    const badge = panel.querySelector("header span");
    if (badge) badge.textContent = "教师管理";
    ["上传 / 编辑课程", "研学基地"].forEach(function (label, index) {
      const button = panel.querySelectorAll(".teacher-resource-tabs button")[index];
      if (button) button.textContent = label;
    });
    ["新建课程", "上传资料", "编辑课程", "研学基地"].forEach(function (label, index) {
      const button = panel.querySelectorAll(".teacher-resource-shortcuts button")[index];
      if (button) button.textContent = label;
    });
    const placeholders = {
      title: "课程名称，例如：土尔扈特东归研学",
      category: "课程分类，例如：历史文化",
      coverUrl: "封面图片地址",
      priceCents: "课程价格，单位：分，0 为免费",
      description: "填写介绍、目标、要求或资料说明",
      url: "视频、网盘或参考链接，可选",
      city: "所在城市",
      address: "详细地址",
      latitude: "纬度",
      longitude: "经度"
    };
    Object.keys(placeholders).forEach(function (name) {
      panel.querySelectorAll('[name="' + name + '"]').forEach(function (field) {
        field.setAttribute("placeholder", placeholders[name]);
      });
    });
  }

  function renderCleanTeacherResourceForms(panel, courses, bases) {
    if (!panel) return;
    const courseOptions = courses.map(function (course) {
      return '<option value="' + escapeHtml(course.id) + '">' + escapeHtml(course.title || "研学课程") + '</option>';
    }).join("");
    const contentOptions = courses.flatMap(function (course) {
      return (course.contents || []).map(function (content) {
        return '<option value="' + escapeHtml(content.id) + '" data-course-id="' + escapeHtml(course.id) + '">' +
          escapeHtml((course.title || "课程") + " / " + (content.title || "资料")) + '</option>';
      });
    }).join("");
    const contentPane = panel.querySelector('[data-resource-body="content"]');
    const basePane = panel.querySelector('[data-resource-body="base"]');
    if (contentPane) {
      contentPane.innerHTML =
        '<form class="teacher-zhi-form" data-teacher-resource="course" id="teacher-course-edit-form">' +
        '<select name="existing"><option value="">新建研学课程</option>' + courseOptions + '</select>' +
        '<input name="title" maxlength="90" required placeholder="课程名称，例如：土尔扈特东归研学">' +
        '<input name="category" maxlength="50" required placeholder="课程分类，例如：历史文化">' +
        '<input name="coverUrl" maxlength="500" placeholder="封面图片地址">' +
        '<input name="priceCents" type="number" min="0" step="1" placeholder="课程价格，单位：分，0 为免费">' +
        '<select name="status"><option value="published">发布</option><option value="draft">草稿</option><option value="hidden">隐藏</option></select>' +
        '<textarea name="description" maxlength="1200" required placeholder="课程介绍、适合年级、研学目标和行程亮点"></textarea>' +
        '<button type="submit">保存研学课程</button></form>' +
        '<form class="teacher-zhi-form" data-teacher-resource="content" id="teacher-material-edit-form">' +
        '<select name="existing"><option value="">新建课程资料</option>' + contentOptions + '</select>' +
        '<select name="courseId" required>' + (courseOptions || '<option value="">暂无可编辑课程</option>') + '</select>' +
        '<select name="type"><option value="material">资料</option><option value="video">视频</option><option value="task">任务</option><option value="homework">作业</option><option value="test">测试</option></select>' +
        '<input name="title" maxlength="80" required placeholder="课程资料标题">' +
        '<input name="url" maxlength="500" placeholder="视频、网盘或参考链接，可选">' +
        '<input name="files" type="file" multiple accept="image/*,video/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.zip">' +
        '<textarea name="description" maxlength="1600" required placeholder="资料说明、学习要求、任务步骤或基地导读内容"></textarea>' +
        '<button type="submit">保存课程资料</button></form>' +
        '<div class="teacher-resource-list">' + (courses.length ? courses.slice(0, 5).map(function (course) {
          return '<button type="button" data-open-material="' + escapeHtml(course.id) + '">' + escapeHtml(course.title || "研学课程") +
            '<small>已配置 ' + String((course.contents || []).length) + ' 条视频 / 资料 / 任务内容</small></button>';
        }).join("") : '<button type="button">暂无课程，请先新建研学课程。</button>') + '</div>';
    }
    if (basePane) {
      const baseOptions = bases.map(function (base) {
        return '<option value="' + escapeHtml(base.id) + '">' + escapeHtml(base.title || "研学基地") + '</option>';
      }).join("");
      basePane.innerHTML =
        '<form class="teacher-zhi-form" data-teacher-resource="base">' +
        '<select name="existing"><option value="">新建研学基地</option>' + baseOptions + '</select>' +
        '<input name="title" maxlength="80" required placeholder="基地名称">' +
        '<input name="city" maxlength="60" placeholder="所在城市">' +
        '<input name="address" maxlength="160" placeholder="详细地址">' +
        '<input name="coverUrl" maxlength="500" placeholder="基地封面图片地址">' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><input name="latitude" type="number" step="0.0000001" placeholder="纬度"><input name="longitude" type="number" step="0.0000001" placeholder="经度"></div>' +
        '<select name="status"><option value="published">发布</option><option value="draft">草稿</option><option value="hidden">隐藏</option></select>' +
        '<textarea name="description" maxlength="1200" required placeholder="基地介绍、适合课程、安全要求和研学资源"></textarea>' +
        '<button type="submit">保存研学基地</button></form>' +
        '<div class="teacher-resource-list">' + (bases.length ? bases.slice(0, 6).map(function (base) {
          return '<button type="button" data-edit-base="' + escapeHtml(base.id) + '">' + escapeHtml(base.title || "研学基地") +
            '<small>' + escapeHtml((base.city || "") + " " + (base.status || "")) + '</small></button>';
        }).join("") : '<button type="button">暂无研学基地，请新建基地。</button>') + '</div>';
    }
  }

  function ensureTeacherResourceManagerVisibleForms() {
    const panel = document.getElementById("teacher-course-base-manager");
    if (!panel || window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    if (!["teacher", "admin"].includes(user?.role)) return;
    const contentPane = panel.querySelector('[data-resource-body="content"]');
    const basePane = panel.querySelector('[data-resource-body="base"]');
    if (!contentPane || !basePane) return;
    if (!contentPane.querySelector("#teacher-course-edit-form") || !contentPane.querySelector("#teacher-material-edit-form") || !basePane.querySelector('[data-teacher-resource="base"]')) {
      renderCleanTeacherResourceForms(panel, [], []);
      normalizeTeacherCourseBaseManagerText(panel);
    }
    const hasActive = Boolean(panel.querySelector(".teacher-resource-pane.is-active"));
    if (!hasActive) contentPane.classList.add("is-active");
    panel.querySelectorAll(".teacher-resource-pane").forEach(function (pane) {
      const active = pane.classList.contains("is-active");
      pane.style.setProperty("display", active ? "grid" : "none", "important");
      pane.style.setProperty("gap", "10px");
      if (active) {
        pane.style.removeProperty("visibility");
        pane.removeAttribute("aria-hidden");
      }
    });
    panel.querySelectorAll(".teacher-zhi-form,.teacher-resource-list").forEach(function (node) {
      node.style.setProperty("display", "grid", "important");
      node.style.removeProperty("visibility");
      node.removeAttribute("aria-hidden");
    });
  }

  function renderTeacherCourseBaseManager(force) {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    const routePanel = document.getElementById("role-route-panel");
    const routeActionCount = routePanel?.querySelectorAll?.(".role-route-actions button").length || 0;
    const canManage = user?.role === "teacher" || user?.role === "admin";
    const hasTeacherCourseBasePanel = routeActionCount >= 4;
    if (!canManage && !hasTeacherCourseBasePanel) {
      document.getElementById("teacher-course-base-manager")?.remove();
      return;
    }
    const activeUser = canManage ? user : { role: "teacher", id: "local-teacher", displayName: "老师" };
    const workspace = document.getElementById("teacher-zhi-workspace");
    const page = findZhiPage() || document.getElementById("main-content") || document.querySelector("main") || document.getElementById("root");
    const anchor = workspace || routePanel || page;
    if (!anchor) return;
    let panel = document.getElementById("teacher-course-base-manager");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "teacher-course-base-manager";
      panel.className = "teacher-resource-manager";
      if (workspace) workspace.insertAdjacentElement("afterend", panel);
      else if (routePanel) routePanel.insertAdjacentElement("afterend", panel);
      else page.insertBefore(panel, page.firstElementChild || null);
    } else if (!force && (panel.dataset.loading === "true" || panel.dataset.loaded === "true" && panel.querySelector("#teacher-course-edit-form") && panel.querySelector("[data-teacher-resource='base']"))) {
      return;
    }
    panel.dataset.loaded = "true";
    panel.dataset.loading = "true";
    panel.innerHTML = '<header><div><h2>课程资料与研学基地</h2></div><span>教师管理</span></header>' +
      '<div class="teacher-resource-tabs"><button type="button" class="is-active" data-resource-pane="content">上传 / 编辑课程</button><button type="button" data-resource-pane="base">研学基地</button></div>' +
      '<div class="teacher-zhi-status">正在同步课程和基地数据...</div>' +
      '<section class="teacher-resource-pane is-active" data-resource-body="content"></section>' +
      '<section class="teacher-resource-pane" data-resource-body="base"></section>';
    normalizeTeacherCourseBaseManagerText(panel);
    const shortcuts = document.createElement("div");
    shortcuts.className = "teacher-resource-shortcuts";
    ["新建课程", "上传资料", "编辑课程", "研学基地"].forEach(function (label, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.dataset.managerShortcut = String(index);
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        shortcuts.querySelectorAll("button").forEach(function (item) { item.classList.toggle("is-active", item === button); });
        focusTeacherCourseBaseManager(index, 0);
      });
      shortcuts.appendChild(button);
    });
    ["新建课程", "上传资料", "编辑课程", "研学基地"].forEach(function (label, index) {
      const button = shortcuts.querySelector('[data-manager-shortcut="' + index + '"]');
      if (button) button.textContent = label;
    });
    panel.querySelector(".teacher-resource-tabs")?.insertAdjacentElement("beforebegin", shortcuts);
    normalizeTeacherCourseBaseManagerText(panel);
    panel.querySelectorAll(".teacher-resource-tabs button").forEach(function (button) {
      button.addEventListener("click", function () {
        panel.querySelectorAll(".teacher-resource-tabs button").forEach(function (item) { item.classList.toggle("is-active", item === button); });
        panel.querySelectorAll(".teacher-resource-pane").forEach(function (pane) { pane.classList.toggle("is-active", pane.dataset.resourceBody === button.dataset.resourcePane); });
      });
    });
    Promise.all([
      window.zhixingApi.api("/api/courses"),
      window.zhixingApi.api("/api/study-bases")
    ]).then(function (items) {
      const courses = (items[0].courses || []).filter(function (course) {
        return activeUser.role === "admin" || !course.teacher_id || course.teacher_id === activeUser.id || course.teacherId === activeUser.id;
      });
      const bases = items[1].bases || [];
      const courseOptions = courses.map(function (course) { return '<option value="' + escapeHtml(course.id) + '">' + escapeHtml(course.title || "研学课程") + '</option>'; }).join("");
      const contentOptions = courses.flatMap(function (course) {
        return (course.contents || []).map(function (content) {
          return '<option value="' + escapeHtml(content.id) + '" data-course-id="' + escapeHtml(course.id) + '">' + escapeHtml((course.title || "课程") + " / " + (content.title || "资料")) + '</option>';
        });
      }).join("");
      panel.querySelector('[data-resource-body="content"]').innerHTML =
        '<form class="teacher-zhi-form" data-teacher-resource="course" id="teacher-course-edit-form">' +
        '<select name="existing"><option value="">新建研学课程</option>' + courseOptions + '</select>' +
        '<input name="title" maxlength="90" required placeholder="课程名称，例如：土尔扈特东归研学">' +
        '<input name="category" maxlength="50" required placeholder="课程分类，例如：历史文化">' +
        '<input name="coverUrl" maxlength="500" placeholder="课程封面图片地址">' +
        '<input name="priceCents" type="number" min="0" step="1" placeholder="课程价格，单位：分，0 为免费">' +
        '<select name="status"><option value="published">发布</option><option value="draft">草稿</option><option value="hidden">隐藏</option></select>' +
        '<textarea name="description" maxlength="1200" required placeholder="课程介绍、适合年级、研学目标和行程亮点"></textarea>' +
        '<button type="submit">保存研学课程</button></form>' +
        '<form class="teacher-zhi-form" data-teacher-resource="content" id="teacher-material-edit-form">' +
        '<select name="existing"><option value="">新建课程资料</option>' + contentOptions + '</select>' +
        '<select name="courseId" required>' + (courseOptions || '<option value="">暂无可编辑课程</option>') + '</select>' +
        '<select name="type"><option value="material">资料</option><option value="video">视频</option><option value="task">任务</option><option value="homework">作业</option><option value="test">测试</option></select>' +
        '<input name="title" maxlength="80" required placeholder="课程资料标题">' +
        '<input name="url" maxlength="500" placeholder="视频、网盘或参考链接，可选">' +
        '<input name="files" type="file" multiple accept="image/*,video/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.zip">' +
        '<textarea name="description" maxlength="1600" required placeholder="资料说明、学习要求、任务步骤或基地导读内容"></textarea>' +
        '<button type="submit">保存课程资料</button></form>' +
        '<div class="teacher-resource-list">' + (contentOptions ? courses.slice(0, 5).map(function (course) {
          const count = (course.contents || []).length;
          return '<button type="button" data-open-material="' + escapeHtml(course.id) + '">' + escapeHtml(course.title || "研学课程") + '<small>已配置 ' + count + ' 条视频 / 资料 / 任务内容</small></button>';
        }).join("") : '<button type="button">暂无课程资料，请先新建一条内容。</button>') + '</div>';
      const baseOptions = bases.map(function (base) { return '<option value="' + escapeHtml(base.id) + '">' + escapeHtml(base.title || "研学基地") + '</option>'; }).join("");
      panel.querySelector('[data-resource-body="base"]').innerHTML =
        '<form class="teacher-zhi-form" data-teacher-resource="base">' +
        '<select name="existing"><option value="">新建研学基地</option>' + baseOptions + '</select>' +
        '<input name="title" maxlength="80" required placeholder="基地名称">' +
        '<input name="city" maxlength="60" placeholder="所在城市">' +
        '<input name="address" maxlength="160" placeholder="详细地址">' +
        '<input name="coverUrl" maxlength="500" placeholder="基地封面图片地址">' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><input name="latitude" type="number" step="0.0000001" placeholder="纬度"><input name="longitude" type="number" step="0.0000001" placeholder="经度"></div>' +
        '<select name="status"><option value="published">发布</option><option value="draft">草稿</option><option value="hidden">隐藏</option></select>' +
        '<textarea name="description" maxlength="1200" required placeholder="基地介绍、适合课程、安全要求和研学资源"></textarea>' +
        '<button type="submit">保存研学基地</button></form>' +
        '<div class="teacher-resource-list">' + (bases.length ? bases.slice(0, 6).map(function (base) {
          return '<button type="button" data-edit-base="' + escapeHtml(base.id) + '">' + escapeHtml(base.title || "研学基地") + '<small>' + escapeHtml((base.city || "") + " " + (base.status || "")) + '</small></button>';
        }).join("") : '<button type="button">暂无研学基地，请新建基地。</button>') + '</div>';
      teacherResourceStatus("已同步：" + courses.length + " 门课程，" + bases.length + " 个研学基地。");
      normalizeTeacherCourseBaseManagerText(panel);
      renderCleanTeacherResourceForms(panel, courses, bases);
      normalizeTeacherCourseBaseManagerText(panel);
      teacherResourceStatus("已同步：" + courses.length + " 门课程，" + bases.length + " 个研学基地。");
      panel.dataset.loading = "false";
      ensureTeacherResourceManagerVisibleForms();
      const courseForm = panel.querySelector('[data-teacher-resource="course"]');
      courseForm?.elements.existing.addEventListener("change", function () {
        const course = courses.find(function (item) { return item.id === courseForm.elements.existing.value; });
        if (!course) return;
        courseForm.elements.title.value = course.title || "";
        courseForm.elements.category.value = course.category || "";
        courseForm.elements.coverUrl.value = course.cover_url || course.coverUrl || "";
        courseForm.elements.priceCents.value = course.price_cents || course.priceCents || 0;
        courseForm.elements.status.value = course.status || "published";
        courseForm.elements.description.value = course.description || "";
      });
      courseForm?.addEventListener("submit", async function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        teacherResourceStatus("正在保存研学课程...");
        try {
          const courseId = form.elements.existing.value;
          const payload = {
            slug: teacherCourseSlug(form.elements.title.value),
            title: form.elements.title.value,
            category: form.elements.category.value,
            description: form.elements.description.value,
            coverUrl: form.elements.coverUrl.value,
            priceCents: form.elements.priceCents.value,
            status: form.elements.status.value
          };
          await window.zhixingApi.api(courseId ? "/api/courses/" + courseId : "/api/courses", {
            method: courseId ? "PATCH" : "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
          });
          teacherResourceStatus(courseId ? "研学课程已更新。" : "研学课程已新建。");
          renderTeacherCourseBaseManager(true);
        } catch (error) {
          teacherResourceStatus(error.message || "研学课程保存失败。", true);
        }
      });
      const contentForm = panel.querySelector('[data-teacher-resource="content"]');
      contentForm?.elements.existing.addEventListener("change", function () {
        const contentId = contentForm.elements.existing.value;
        const course = courses.find(function (item) { return (item.contents || []).some(function (content) { return content.id === contentId; }); });
        const content = course && (course.contents || []).find(function (item) { return item.id === contentId; });
        const body = courseContentBody(content);
        if (!content) return;
        contentForm.elements.courseId.value = course.id;
        contentForm.elements.type.value = content.type || "material";
        contentForm.elements.title.value = content.title || "";
        contentForm.elements.url.value = body.url || "";
        contentForm.elements.description.value = body.description || "";
      });
      contentForm?.addEventListener("submit", async function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const courseId = form.elements.courseId.value;
        if (!courseId) { teacherResourceStatus("暂无可编辑课程。", true); return; }
        teacherResourceStatus("正在保存课程资料...");
        try {
          const attachments = await readTeacherFiles(form.elements.files.files);
          const payload = {
            type: form.elements.type.value,
            title: form.elements.title.value,
            body: { description: form.elements.description.value, url: form.elements.url.value, attachments: attachments },
            published: true,
            sortOrder: Date.now() % 100000
          };
          const contentId = form.elements.existing.value;
          await window.zhixingApi.api(contentId ? "/api/course-contents/" + contentId : "/api/courses/" + courseId + "/contents", {
            method: contentId ? "PATCH" : "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
          });
          teacherResourceStatus(contentId ? "课程资料已更新。" : "课程资料已上传并发布。");
          renderTeacherCourseBaseManager(true);
        } catch (error) {
          teacherResourceStatus(error.message || "课程资料保存失败。", true);
        }
      });
      const baseForm = panel.querySelector('[data-teacher-resource="base"]');
      baseForm?.elements.existing.addEventListener("change", function () {
        const base = bases.find(function (item) { return item.id === baseForm.elements.existing.value; });
        if (!base) return;
        ["title", "city", "address", "description", "status"].forEach(function (key) { if (baseForm.elements[key]) baseForm.elements[key].value = base[key] || ""; });
        baseForm.elements.coverUrl.value = base.coverUrl || "";
        baseForm.elements.latitude.value = base.latitude || "";
        baseForm.elements.longitude.value = base.longitude || "";
      });
      panel.querySelectorAll("[data-edit-base]").forEach(function (button) {
        button.addEventListener("click", function () {
          baseForm.elements.existing.value = button.dataset.editBase;
          baseForm.elements.existing.dispatchEvent(new Event("change"));
          panel.querySelector('[data-resource-pane="base"]')?.click();
          baseForm.scrollIntoView({ block: "start", behavior: "smooth" });
        });
      });
      baseForm?.addEventListener("submit", async function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        teacherResourceStatus("正在保存研学基地...");
        try {
          const payload = Object.fromEntries(new FormData(form));
          const baseId = payload.existing;
          delete payload.existing;
          await window.zhixingApi.api(baseId ? "/api/study-bases/" + baseId : "/api/study-bases", {
            method: baseId ? "PATCH" : "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
          });
          teacherResourceStatus(baseId ? "研学基地已更新。" : "研学基地已新增。");
          renderTeacherCourseBaseManager(true);
        } catch (error) {
          teacherResourceStatus(error.message || "研学基地保存失败。", true);
        }
      });
    }).catch(function (error) {
      panel.dataset.loading = "false";
      teacherResourceStatus(error.message || "课程与基地数据同步失败。", true);
    });
  }

  function ensureTeacherResourceManagerUsable() {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    if (!["teacher", "admin"].includes(user?.role)) return;
    const panel = document.getElementById("teacher-course-base-manager");
    if (!panel) return;
    if (panel.dataset.loading === "true") return;
    const hasCourseForm = Boolean(panel.querySelector("#teacher-course-edit-form"));
    const hasBaseForm = Boolean(panel.querySelector("[data-teacher-resource='base']"));
    if (hasCourseForm && hasBaseForm) return;
    renderCleanTeacherResourceForms(panel, [], []);
    normalizeTeacherCourseBaseManagerText(panel);
    teacherResourceStatus("课程与基地表单已恢复，可继续新建、上传和编辑。");
  }

  function renderTeacherZhiWorkspace(force) {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    if (user?.role !== "teacher" && user?.role !== "admin") {
      document.getElementById("teacher-zhi-workspace")?.remove();
      return;
    }
    ensureCloudMessageStyle();
    const page = findZhiPage() || document.getElementById("main-content") || document.querySelector("main");
    if (!page) return;
    let panel = document.getElementById("teacher-zhi-workspace");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "teacher-zhi-workspace";
      panel.className = "teacher-zhi-workspace";
      const header = Array.from(page.children).find(function (child) { return child.querySelector?.("h1") || child.matches?.("header"); });
      if (header?.nextSibling) page.insertBefore(panel, header.nextSibling);
      else page.insertBefore(panel, page.firstElementChild || null);
    } else if (!force && panel.dataset.loaded === "true") {
      return;
    }
    panel.dataset.loaded = "true";
    panel.innerHTML = '<header><div><h2>老师知行工作台</h2></div><span>' + escapeHtml(user.displayName || "老师") + '</span></header>' +
      '<div class="teacher-zhi-tabs"><button type="button" data-pane="publish" class="is-active">发布作业</button><button type="button" data-pane="grade">批改作业</button><button type="button" data-pane="message">群体消息</button><button type="button" data-pane="material">资料编辑</button></div>' +
      '<div class="teacher-zhi-status">正在同步老师课程数据...</div>' +
      '<section class="teacher-zhi-pane is-active" data-pane-body="publish"></section>' +
      '<section class="teacher-zhi-pane" data-pane-body="grade"></section>' +
      '<section class="teacher-zhi-pane" data-pane-body="message"></section>' +
      '<section class="teacher-zhi-pane" data-pane-body="material"></section>';
    panel.querySelectorAll(".teacher-zhi-tabs button").forEach(function (button) {
      button.addEventListener("click", function () {
        panel.querySelectorAll(".teacher-zhi-tabs button").forEach(function (item) { item.classList.toggle("is-active", item === button); });
        panel.querySelectorAll(".teacher-zhi-pane").forEach(function (pane) { pane.classList.toggle("is-active", pane.dataset.paneBody === button.dataset.pane); });
      });
    });
    if (!window.zhixingApi?.api) {
      teacherZhiStatus("请先登录老师账号后使用。", true);
      return;
    }
    Promise.all([
      window.zhixingApi.api("/api/courses"),
      window.zhixingApi.api("/api/assignments"),
      window.zhixingApi.api("/api/submissions")
    ]).then(function (items) {
      const courses = (items[0].courses || []).filter(function (course) {
        return user.role === "admin" || !course.teacher_id || course.teacher_id === user.id || course.teacherId === user.id;
      });
      const assignments = items[1].assignments || [];
      const submissions = items[2].submissions || [];
      const courseOptions = courses.map(function (course) {
        return '<option value="' + escapeHtml(course.id) + '">' + escapeHtml(course.title || "研学课程") + '</option>';
      }).join("");
      panel.querySelector('[data-pane-body="publish"]').innerHTML =
        '<form class="teacher-zhi-form" data-teacher-action="publish">' +
        '<select name="courseId" required>' + (courseOptions || '<option value="">暂无可发布课程</option>') + '</select>' +
        '<select name="type"><option value="homework">作业</option><option value="task">任务</option><option value="test">测试</option></select>' +
        '<input name="title" maxlength="80" required placeholder="标题，例如：东归路线图证据包">' +
        '<textarea name="description" maxlength="800" required placeholder="写清楚提交要求、评分重点和截止提醒"></textarea>' +
        '<button type="submit">发布给报名学生</button></form>';
      const pendingSubmissions = submissions.filter(function (item) { return item.status !== "graded"; });
      panel.querySelector('[data-pane-body="grade"]').innerHTML = (pendingSubmissions.length ? pendingSubmissions : submissions.slice(0, 6)).map(function (item) {
        return '<article class="teacher-zhi-card" data-submission-id="' + escapeHtml(item.id) + '"><strong>' +
          escapeHtml(item.student_name || "学生") + ' · ' + escapeHtml(item.assignment_title || "作业提交") + '</strong><p>' +
          escapeHtml(item.course_title || "") + ' · ' + escapeHtml(item.text_content || "已提交附件或文字内容") + '</p><small>状态：' +
          escapeHtml(item.status || "submitted") + (item.score === null || item.score === undefined ? "" : " · " + escapeHtml(String(item.score)) + "分") +
          '</small><form class="teacher-zhi-grade"><input name="score" type="number" min="0" max="100" placeholder="分数"><input name="feedback" maxlength="300" placeholder="批改反馈"><button type="submit">批改</button></form></article>';
      }).join("") || '<article class="teacher-zhi-card"><strong>暂无待批改提交</strong><p>学生提交作业后，会在这里出现。</p></article>';
      panel.querySelector('[data-pane-body="message"]').innerHTML =
        '<form class="teacher-zhi-form" data-teacher-action="message">' +
        '<select name="courseId"><option value="">全部负责课程</option>' + courseOptions + '</select>' +
        '<input name="title" maxlength="80" required placeholder="通知标题，例如：明早集合提醒">' +
        '<textarea name="message" maxlength="800" required placeholder="群体消息会发送给对应课程的已报名学生"></textarea>' +
        '<button type="submit">发布群体消息</button></form>';
      panel.querySelector('[data-pane-body="material"]').innerHTML =
        '<form class="teacher-zhi-form" data-teacher-action="material">' +
        '<select name="courseId" required>' + (courseOptions || '<option value="">暂无可编辑课程</option>') + '</select>' +
        '<select name="type"><option value="material">资料</option><option value="video">视频</option></select>' +
        '<input name="title" maxlength="80" required placeholder="资料标题，例如：承德避暑山庄建筑导读">' +
        '<textarea name="description" maxlength="1200" required placeholder="填写课程资料正文、观看链接、阅读要求或补充说明"></textarea>' +
        '<button type="submit">保存并发布资料</button></form>' +
        '<div>' + courses.slice(0, 4).map(function (course) {
          const contents = Array.isArray(course.contents) ? course.contents : [];
          const materialCount = contents.filter(function (item) { return item.type === "material" || item.type === "video"; }).length;
          return '<article class="teacher-zhi-card"><strong>' + escapeHtml(course.title || "研学课程") + '</strong><p>已有 ' + String(materialCount) + ' 条视频/资料内容，可继续补充发布。</p></article>';
        }).join("") + '</div>';
      teacherZhiStatus("已同步：" + courses.length + " 门课程，" + assignments.length + " 个任务，" + pendingSubmissions.length + " 个待批改提交。");
      panel.querySelector('[data-teacher-action="publish"]')?.addEventListener("submit", async function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const courseId = form.elements.courseId.value;
        if (!courseId) { teacherZhiStatus("暂无可发布课程。", true); return; }
        teacherZhiStatus("正在发布作业...");
        try {
          await window.zhixingApi.api("/api/courses/" + courseId + "/contents", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ type: form.elements.type.value, title: form.elements.title.value, body: { description: form.elements.description.value }, published: true, sortOrder: Date.now() % 100000 })
          });
          form.reset();
          teacherZhiStatus("已发布，并已通知报名学生。");
          renderTeacherZhiWorkspace(true);
        } catch (error) {
          teacherZhiStatus(error.message || "发布失败，请稍后重试。", true);
        }
      });
      panel.querySelectorAll(".teacher-zhi-grade").forEach(function (form) {
        form.addEventListener("submit", async function (event) {
          event.preventDefault();
          const card = form.closest("[data-submission-id]");
          teacherZhiStatus("正在保存批改结果...");
          try {
            await window.zhixingApi.api("/api/submissions/" + card.dataset.submissionId + "/grade", {
              method: "PATCH",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ score: form.elements.score.value, feedback: form.elements.feedback.value })
            });
            teacherZhiStatus("批改已保存，学生会收到通知。");
            renderTeacherZhiWorkspace(true);
          } catch (error) {
            teacherZhiStatus(error.message || "批改失败，请检查分数。", true);
          }
        });
      });
      panel.querySelector('[data-teacher-action="message"]')?.addEventListener("submit", async function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        teacherZhiStatus("正在发布群体消息...");
        try {
          const result = await window.zhixingApi.api("/api/teacher/group-message", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ courseId: form.elements.courseId.value, title: form.elements.title.value, message: form.elements.message.value })
          });
          form.reset();
          teacherZhiStatus("群体消息已发送给 " + String(result.delivered || 0) + " 名学生。");
        } catch (error) {
          teacherZhiStatus(error.message || "群体消息发送失败。", true);
        }
      });
      panel.querySelector('[data-teacher-action="material"]')?.addEventListener("submit", async function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const courseId = form.elements.courseId.value;
        if (!courseId) { teacherZhiStatus("暂无可编辑课程。", true); return; }
        teacherZhiStatus("正在保存课程资料...");
        try {
          await window.zhixingApi.api("/api/courses/" + courseId + "/contents", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ type: form.elements.type.value, title: form.elements.title.value, body: { description: form.elements.description.value }, published: true, sortOrder: Date.now() % 100000 })
          });
          form.reset();
          teacherZhiStatus("课程资料已保存并发布。");
          renderTeacherZhiWorkspace(true);
        } catch (error) {
          teacherZhiStatus(error.message || "课程资料保存失败。", true);
        }
      });
    }).catch(function (error) {
      teacherZhiStatus(error.message || "老师课程数据同步失败。", true);
    });
  }

  function activateTeacherZhiPane(paneName) {
    renderTeacherZhiWorkspace();
    const workspace = document.getElementById("teacher-zhi-workspace");
    if (!workspace) return;
    document.getElementById("teacher-class-progress-panel")?.remove();
    const tab = workspace.querySelector('.teacher-zhi-tabs button[data-pane="' + paneName + '"]');
    if (tab) {
      tab.click();
      workspace.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  async function showTeacherClassProgressPanel() {
    renderTeacherZhiWorkspace();
    const anchor = document.getElementById("role-route-panel") || document.getElementById("teacher-zhi-workspace");
    if (!anchor) return;
    document.getElementById("teacher-class-progress-panel")?.remove();
    const panel = document.createElement("section");
    panel.id = "teacher-class-progress-panel";
    panel.className = "teacher-zhi-workspace";
    panel.innerHTML = '<header><div><h2>班级进度</h2></div><span>同步中</span></header><div class="teacher-zhi-status">正在读取班级课程、作业和提交数据...</div>';
    anchor.insertAdjacentElement("afterend", panel);
    panel.scrollIntoView({ block: "start", behavior: "smooth" });
    try {
      const [coursesData, assignmentsData, submissionsData] = await Promise.all([
        window.zhixingApi.api("/api/courses"),
        window.zhixingApi.api("/api/assignments"),
        window.zhixingApi.api("/api/submissions")
      ]);
      const courses = coursesData.courses || [];
      const assignments = assignmentsData.assignments || [];
      const submissions = submissionsData.submissions || [];
      const graded = submissions.filter(function (item) { return item.status === "graded" || item.score !== null && item.score !== undefined; }).length;
      const pending = submissions.length - graded;
      panel.innerHTML = '<header><div><h2>班级进度</h2></div><span>已同步</span></header><div class="role-profile-grid">' +
        '<article><b>' + courses.length + '</b><small>负责课程</small></article>' +
        '<article><b>' + assignments.length + '</b><small>已下发任务</small></article>' +
        '<article><b>' + graded + '</b><small>已批改提交</small></article>' +
        '<article><b>' + pending + '</b><small>待批改提交</small></article>' +
        '</div><div class="teacher-zhi-card" style="margin-top:12px"><strong>班级完成情况</strong><p>当前班级已产生 ' + submissions.length + ' 条学生提交记录，待批改 ' + pending + ' 条。点击“批改作业”可直接进入处理列表。</p><button type="button" data-open-grade>进入批改</button></div>';
      panel.querySelector("[data-open-grade]")?.addEventListener("click", function () { activateTeacherZhiPane("grade"); });
    } catch (error) {
      panel.innerHTML = '<header><div><h2>班级进度</h2></div><span>失败</span></header><div class="backend-status is-error">' + escapeHtml(error.message || "班级进度同步失败") + '</div>';
    }
  }

  function focusTeacherCourseBaseManager(index, attempt) {
    const manager = document.getElementById("teacher-course-base-manager");
    if (!manager) {
      if ((attempt || 0) < 12) window.setTimeout(function () { focusTeacherCourseBaseManager(index, (attempt || 0) + 1); }, 120);
      return false;
    }
    const paneName = index === 3 ? "base" : "content";
    manager.querySelectorAll(".teacher-resource-tabs button").forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.resourcePane === paneName);
    });
    manager.querySelectorAll(".teacher-resource-pane").forEach(function (pane) {
      pane.classList.toggle("is-active", pane.dataset.resourceBody === paneName);
    });
    let form = null;
    if (index === 1) form = document.getElementById("teacher-material-edit-form");
    else if (index === 3) form = manager.querySelector('[data-teacher-resource="base"]');
    else form = document.getElementById("teacher-course-edit-form");
    if (!form && (attempt || 0) < 12) {
      window.setTimeout(function () { focusTeacherCourseBaseManager(index, (attempt || 0) + 1); }, 120);
      return false;
    }
    if (index === 0 && form?.reset) form.reset();
    if ((index === 2 || index === 3) && form?.elements?.existing && !form.elements.existing.value && form.elements.existing.options.length > 1) {
      form.elements.existing.selectedIndex = 1;
      form.elements.existing.dispatchEvent(new Event("change"));
    }
    (form || manager).scrollIntoView({ block: "start", behavior: "smooth" });
    return true;
  }

  function openTeacherCourseBaseManagerByIndex(index) {
    if (window.location.hash !== "#/zhi-xing") return false;
    const user = window.zhixingApi?.user;
    const managerExists = !!document.getElementById("teacher-course-base-manager");
    const rolePanelExists = !!document.getElementById("role-route-panel");
    const canManage = ["teacher", "admin"].includes(user?.role);
    if (!canManage && (!managerExists || !rolePanelExists)) return false;
    if (canManage) renderTeacherCourseBaseManager(true);
    focusTeacherCourseBaseManager(index, 0);
    return true;
  }

  let lastTeacherCourseBasePanelClick = 0;

  function handleTeacherCourseBasePanelClick(event) {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    const canManage = ["teacher", "admin"].includes(user?.role);
    if (user && !canManage) return;
    if (!canManage && !document.getElementById("teacher-course-base-manager")) return;
    const button = event.target?.closest?.("#role-route-panel .role-route-actions button");
    if (!button) return;
    const actions = Array.from(document.querySelectorAll("#role-route-panel .role-route-actions button"));
    const index = actions.indexOf(button);
    if (index < 0 || index > 3) return;
    const now = Date.now();
    if (event.type === "click" && now - lastTeacherCourseBasePanelClick < 450) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      return;
    }
    lastTeacherCourseBasePanelClick = now;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    actions.forEach(function (item) { item.classList.toggle("is-active", item === button); });
    openTeacherCourseBaseManagerByIndex(index);
  }

  function bindRoleRoutePanelActions(panel, user, hash) {
    if (!panel || panel.dataset.roleRouteActionsBound === "true") return;
    panel.dataset.roleRouteActionsBound = "true";
    panel.addEventListener("click", function (event) {
      const button = event.target?.closest?.(".role-route-actions button");
      if (!button) return;
      if (hash !== "#/zhi-xing" || !["teacher", "admin"].includes(user?.role)) return;
      const index = Array.from(panel.querySelectorAll(".role-route-actions button")).indexOf(button);
      event.preventDefault();
      panel.querySelectorAll(".role-route-actions button").forEach(function (item) { item.classList.toggle("is-active", item === button); });
      if (index >= 0 && index <= 3 && openTeacherCourseBaseManagerByIndex(index)) return;
      const label = (button.textContent || "").replace(/\s+/g, "");
      const courseBaseMode = /研学课程与研学基地|鐮斿璇剧▼涓庣爺瀛﹀熀鍦/.test((panel.textContent || "").replace(/\s+/g, ""));
      if (courseBaseMode || /新建课程|上传资料|编辑课程|研学基地/.test(label)) {
        renderTeacherCourseBaseManager(true);
        const manager = document.getElementById("teacher-course-base-manager");
        if (index === 3 || /研学基地/.test(label)) manager?.querySelector('[data-resource-pane="base"]')?.click();
        else manager?.querySelector('[data-resource-pane="content"]')?.click();
        const form = index === 1 || /上传资料/.test(label) ? document.getElementById("teacher-material-edit-form") : document.getElementById("teacher-course-edit-form");
        if ((index === 0 || /新建课程/.test(label)) && form) form.reset();
        if (index === 2 && form?.elements?.existing && !form.elements.existing.value && form.elements.existing.options.length > 1) {
          form.elements.existing.selectedIndex = 1;
          form.elements.existing.dispatchEvent(new Event("change"));
        }
        manager?.scrollIntoView({ block: "start", behavior: "smooth" });
        window.setTimeout(function () { (form || manager)?.scrollIntoView({ block: "start", behavior: "smooth" }); }, 120);
      } else if (index === 0) activateTeacherZhiPane("publish");
      else if (index === 1) activateTeacherZhiPane("grade");
      else if (index === 2) showTeacherClassProgressPanel();
      else {
        renderTeacherCourseBaseManager(true);
      }
    });
  }

  function syncZhiAccessState() {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = hasRealAccount() ? window.zhixingApi?.user : null;
    if (!user) {
      renderZhiAccessLock("登录后查看知行研学", "知行任务、路线、积分和成果只对已登录并参加研学课程的学生开放。", "登录 / 注册");
      return;
    }
    if (user.role === "parent") {
      syncParentZhiAccess(user, "parent:" + (user.id || user.email || user.displayName || "parent"));
      return;
    }
    if (user.role === "teacher" || user.role === "admin") {
      document.getElementById("parent-zhi-child-context")?.remove();
      zhiAccessKey = user.role + ":" + (user.id || user.email || user.displayName || "teacher");
      zhiAccessHasCloudData = true;
      zhiAccessPromise = null;
      unlockZhiPage();
      renderTeacherZhiWorkspace();
      renderTeacherCourseBaseManager();
      return;
    }
    if (user.role !== "student") {
      document.getElementById("parent-zhi-child-context")?.remove();
      renderZhiAccessLock("暂无学生研学数据", "当前账号不是学生身份，暂不展示知行任务进度。", "");
      return;
    }
    document.getElementById("parent-zhi-child-context")?.remove();
    const key = user.id || user.email || user.displayName || "student";
    if (zhiAccessKey !== key) {
      zhiAccessKey = key;
      zhiAccessHasCloudData = false;
      zhiAccessPromise = null;
    }
    if (zhiAccessHasCloudData) {
      unlockZhiPage();
      return;
    }
    renderZhiAccessLock("暂无研学课程", "参加相应研学课程后，这里才会显示任务路线、打卡、积分和成果数据。", "");
    if (!zhiAccessPromise && window.zhixingApi?.api) {
      zhiAccessPromise = window.zhixingApi.api("/api/enrollments").then(function (data) {
        const items = data.enrollments || [];
        zhiAccessHasCloudData = items.length > 0;
        if (zhiAccessHasCloudData) unlockZhiPage();
        else renderZhiAccessLock("暂无研学课程", "参加相应研学课程后，这里才会显示任务路线、打卡、积分和成果数据。", "");
      }).catch(function () {
        renderZhiAccessLock("暂无研学课程", "参加相应研学课程后，这里才会显示任务路线、打卡、积分和成果数据。", "");
      });
    }
  }

  function setSectionStatsByHeading(headingText, values) {
    const heading = Array.from(document.querySelectorAll("h1,h2,h3")).find(function (node) {
      return node.textContent.includes(headingText);
    });
    const section = heading?.closest("section,div");
    if (!section) return;
    const statValues = Array.from(section.querySelectorAll("p,strong,span,h3,h4")).filter(function (node) {
      return node.children.length === 0 && /^(\d+\/\d+|\d+%?|\d+天)$/.test(node.textContent.trim());
    });
    values.forEach(function (value, index) {
      if (statValues[index] && statValues[index].textContent.trim() !== value) statValues[index].textContent = value;
    });
  }

  function syncGuestLearningMapState() {
    if (window.zhixingApi?.user) return;
    if (window.location.hash !== "#/learning-map") return;
    setSectionStatsByHeading("研学成就", ["0/15", "0/12", "0", "0"]);
    setPlainMetricNear("完成项目", "0", /^\d+$/);
    setPlainMetricNear("研学天数", "0", /^\d+$/);
    Array.from(document.querySelectorAll("p,span,strong,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = node.textContent.trim();
      if (text === "已访问") node.textContent = "未访问";
      else if (/^\d+\s*个项目$/.test(text)) node.textContent = "0 个项目";
      else if (/^\d+\/\d+$/.test(text) && node.closest("#main-content")?.textContent.includes("研学成就")) node.textContent = text.replace(/^\d+/, "0");
    });
    Array.from(document.querySelectorAll(".leaflet-marker-icon")).forEach(function (marker) {
      marker.classList.add("guest-map-marker");
      marker.style.filter = "grayscale(1)";
      marker.style.opacity = "0.78";
    });
    const mapHost = document.querySelector(".leaflet-container")?.parentElement;
    if (mapHost && !mapHost.querySelector(".guest-map-notice")) {
      const notice = document.createElement("div");
      notice.className = "guest-map-notice";
      notice.textContent = "登录后查看个人足迹";
      mapHost.appendChild(notice);
    }
  }

  function syncGuestProfileState() {
    if (window.zhixingApi?.user) return;
    if (window.location.hash !== "#/profile") return;
    restoreGuestProfilePage();
    syncGuestGreyAvatars();
    const h1 = document.querySelector("h1");
    if (h1 && h1.textContent.trim() && h1.textContent.trim() !== "我的") h1.textContent = "未登录用户";
    Array.from(document.querySelectorAll("p,span,strong,h2,h3,h4")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = node.textContent.trim();
      if (text === "张小华") node.textContent = "未登录用户";
      else if (text === "北京市第一中学") node.textContent = "登录后查看学校";
      else if (text === "研学探索者") node.textContent = "游客";
      else if (text === "已认证" || text === "已获得" || text === "已完成") node.textContent = "登录后查看";
      else if (/^\d+个印章$/.test(text)) node.textContent = "0个印章";
      else if (/^\d+张已获得$/.test(text)) node.textContent = "0张已获得";
      if (/^\d+$/.test(text) || /^\d+\/\d+$/.test(text) || /^\d+天$/.test(text) || /^Lv\.\d+$/i.test(text)) node.textContent = text.includes("/") ? "0/0" : text.endsWith("天") ? "0天" : "0";
      if (/^\d+%$/.test(text)) node.textContent = "0%";
      if (/^\d+\s*分钟$/.test(text)) node.textContent = "0分钟";
    });
    Array.from(document.querySelectorAll("p,span,strong,h2,h3,h4,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      node.textContent = node.textContent
        .replace(/张小华/g, "未登录用户")
        .replace(/北京市第一中学/g, "登录后查看学校")
        .replace(/获得日期：\d{4}\.\d{1,2}\.\d{1,2}/g, "获得日期：登录后查看");
    });
    ["研学日记", "学习证书", "研学护照"].forEach(function (title) {
      const heading = Array.from(document.querySelectorAll("h2,h3")).find(function (node) { return node.textContent.includes(title); });
      const section = heading?.closest("section,div.bg-white,div.card-shadow");
      if (section && !section.querySelector(".guest-profile-notice")) {
        const notice = document.createElement("div");
        notice.className = "guest-profile-notice";
        notice.textContent = "登录后查看" + title + "数据";
        section.appendChild(notice);
      }
    });
    Array.from(document.querySelectorAll("canvas,svg")).forEach(function (chart) {
      const scope = chart.closest("section,div");
      if (scope && /学习成长曲线|学习统计|本周学习时长|课程完成情况|积分获取趋势/.test(scope.textContent)) {
        chart.style.opacity = "0.18";
      }
    });
    const statsHeading = Array.from(document.querySelectorAll("h2,h3")).find(function (node) {
      return /学习成长曲线|学习统计/.test(node.textContent);
    });
    const statsSection = statsHeading?.closest("section,div");
    if (statsSection && !statsSection.querySelector(".guest-profile-notice")) {
      const notice = document.createElement("div");
      notice.className = "guest-profile-notice";
      notice.textContent = "登录后查看个人学习数据";
      statsSection.appendChild(notice);
    }
    Array.from(document.querySelectorAll("button")).forEach(function (button) {
      const text = (button.textContent || "").replace(/\s+/g, "");
      if (!/\u751f\u6210\u5206\u4eab\u5361\u7247|\u9000\u51fa\u767b\u5f55/.test(text)) return;
      button.style.setProperty("display", "none", "important");
      button.style.setProperty("visibility", "hidden", "important");
      button.setAttribute("aria-hidden", "true");
    });
  }

  function syncRoleProfileIdentity() {
    const user = window.zhixingApi?.user;
    if (!user || window.location.hash !== "#/profile") return;
    const roleText = user.role === "parent" ? "家长" : user.role === "teacher" ? "老师" : user.role === "admin" ? "管理员" : "学生";
    const roleSubtitle = user.role === "parent" ? "家长端" : user.role === "teacher" ? "教师端" : user.role === "admin" ? "管理端" : "研学探索者";
    Array.from(document.querySelectorAll("p,span,strong,h1,h2,h3,h4,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = node.textContent.trim();
      if (text === "张小华") node.textContent = user.displayName || roleText;
      else if (text === "北京市第一中学") node.textContent = user.school || (user.role === "parent" ? "家长中心" : user.role === "teacher" ? "教师工作台" : "知行研学");
      else if (text === "研学探索者") node.textContent = roleSubtitle;
      else if (user.role !== "student" && /^Lv\.\d+$/i.test(text)) node.textContent = roleSubtitle;
    });
    const avatarName = user.displayName || user.name || roleText;
    const profileImg = Array.from(document.querySelectorAll("img")).find(function (img) {
      const alt = String(img.alt || "");
      const src = String(img.src || "");
      const box = img.getBoundingClientRect?.();
      const looksLikeProfileAvatar = box && box.width >= 52 && box.width <= 150 && box.height >= 52 && box.height <= 150;
      return /张小华|avatar|user|profile/i.test(alt + " " + src) || looksLikeProfileAvatar && img.closest("header,section,main,#main-content");
    });
    if (profileImg) {
      const nextAvatar = avatarDataUrl(avatarName);
      profileImg.alt = avatarName;
      profileImg.dataset.avatarApplied = "true";
      profileImg.onerror = function () {
        profileImg.onerror = null;
        profileImg.src = avatarDataUrl(avatarName || roleText);
      };
      profileImg.style.setProperty("object-fit", "cover", "important");
      profileImg.style.setProperty("object-position", "center", "important");
      profileImg.style.setProperty("background", "linear-gradient(135deg,#22c55e,#14b8a6)", "important");
      if (profileImg.src !== nextAvatar) profileImg.src = nextAvatar;
    }
    const roleMetrics = {
      student: [["完成任务", "8"], ["获得积分", String(Number(user.points || 0))], ["掌握知识", "4/8"], ["连续打卡", "7天"]],
      parent: [["绑定学生", "1"], ["孩子作业", "2"], ["待看反馈", "3"], ["关注天数", "0天"]],
      teacher: [["管理班级", "3"], ["待批作业", "6"], ["已发任务", "12"], ["学生互动", "28"]],
      admin: [["账号审核", "2"], ["课程订单", "4"], ["社区审核", "5"], ["平台告警", "0"]]
    };
    const baseLabels = ["完成任务", "获得积分", "掌握知识", "连续打卡", "绑定学生", "孩子作业", "待看反馈", "关注天数", "管理班级", "待批作业", "已发任务", "学生互动", "账号审核", "课程订单", "社区审核", "平台告警"];
    const metrics = roleMetrics[user.role] || roleMetrics.student;
    Array.from(document.querySelectorAll("p,span,strong,h2,h3,h4,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = node.textContent.trim();
      const labelIndex = baseLabels.indexOf(text);
      if (labelIndex >= 0 && metrics[labelIndex % 4]) node.textContent = metrics[labelIndex % 4][0];
    });
    metrics.forEach(function (item) { setPlainMetricNear(item[0], item[1], /^(\d+|\d+\/\d+|\d+天)$/); });
    renderRoleProfilePanel(user, metrics, roleText);
    renderAdminReviewConsole();
    syncAdminControlCenter();
  }

  function renderRoleProfilePanel(user, metrics, roleText) {
    const main = document.getElementById("main-content") || document.querySelector("main") || document.getElementById("root");
    if (!main) return;
    let panel = document.getElementById("role-profile-panel");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "role-profile-panel";
      panel.className = "role-profile-panel";
      const anchor = Array.from(main.children).find(function (child) {
        return /学习成长曲线|学习证书|研学日记|我的待办/.test(child.textContent || "");
      });
      if (anchor) main.insertBefore(panel, anchor);
      else main.appendChild(panel);
    }
    const title = user.role === "parent" ? "家长端概览" : user.role === "teacher" ? "教师端概览" : user.role === "admin" ? "管理端概览" : "学生端概览";
    const descriptions = user.role === "parent"
      ? ["已绑定学生", "孩子待处理作业", "老师反馈待查看", "登录后从绑定学生同步"]
      : user.role === "teacher"
        ? ["负责班级", "等待批改的提交", "累计下发任务", "学生消息与答疑"]
        : user.role === "admin"
          ? ["待审核账号", "待确认订单", "待审核社区内容", "平台异常提醒"]
          : ["已完成学习任务", "当前可用积分", "已掌握知识点", "连续学习记录"];
    panel.innerHTML = '<header><strong>' + title + '</strong><span>' + roleText + ' · ' + escapeHtml(user.displayName || "") + '</span></header><div class="role-profile-grid">' +
      metrics.map(function (item, index) {
        return '<article><b>' + escapeHtml(item[1]) + '</b><small>' + escapeHtml(item[0]) + ' · ' + escapeHtml(descriptions[index] || "") + '</small></article>';
      }).join("") + '</div>';
  }

  function adminReviewStatusText(status) {
    return {
      pending: "待审核",
      active: "已启用",
      disabled: "已停用",
      awaiting_review: "待确认",
      pending_payment: "待支付",
      paid: "已开通",
      published: "已发布",
      hidden: "已隐藏",
      cancelled: "已取消",
      refunded: "已退款"
    }[status] || status || "待处理";
  }

  function adminReviewRow(title, meta, action, label) {
    return '<div class="admin-review-row"><div><strong>' + escapeHtml(title || "待处理事项") + '</strong><small>' + escapeHtml(meta || "") +
      '</small></div>' + (action ? '<button type="button" data-admin-review-action="' + escapeHtml(action) + '">' + escapeHtml(label || "处理") + '</button>' : '<span></span>') + '</div>';
  }

  function adminControlStatusText(status) {
    return {
      pending: "\u5f85\u5ba1\u6838",
      active: "\u5df2\u542f\u7528",
      disabled: "\u5df2\u505c\u7528",
      awaiting_review: "\u5f85\u786e\u8ba4",
      pending_payment: "\u5f85\u652f\u4ed8",
      paid: "\u5df2\u5f00\u901a",
      published: "\u5df2\u53d1\u5e03",
      hidden: "\u5df2\u9690\u85cf",
      cancelled: "\u5df2\u53d6\u6d88",
      refunded: "\u5df2\u9000\u6b3e",
      draft: "\u8349\u7a3f"
    }[status] || status || "\u5f85\u5904\u7406";
  }

  function adminControlRow(title, meta, action, label, danger) {
    return '<div class="admin-control-row"><div><strong>' + escapeHtml(title || "\u5f85\u5904\u7406\u4e8b\u9879") + '</strong><small>' +
      escapeHtml(meta || "") + '</small></div>' + (action ? '<button type="button" data-admin-control-action="' + escapeHtml(action) + '"' +
      (danger ? ' data-danger="true"' : '') + '>' + escapeHtml(label || "\u5904\u7406") + '</button>' : '<span>\u5df2\u540c\u6b65</span>') + '</div>';
  }

  function adminControlOptions(items) {
    return (items || []).map(function (item) {
      return '<option value="' + escapeHtml(item.id) + '">' + escapeHtml(item.title || item.display_name || item.email || item.id) + '</option>';
    }).join("");
  }

  function restoreAdminProfileHidden() {
    document.querySelectorAll("[data-admin-profile-hidden='true']").forEach(function (node) {
      node.style.removeProperty("display");
      node.style.removeProperty("visibility");
      node.removeAttribute("aria-hidden");
      delete node.dataset.adminProfileHidden;
    });
  }

  function hideAdminOrdinaryProfileBlocks(host, center) {
    const avatarCard = findRoleProfileAvatarCard(host);
    Array.from(host.children || []).forEach(function (child) {
      if (child === center || child.contains(center)) return;
      if (avatarCard && (child === avatarCard || child.contains(avatarCard) || avatarCard.contains(child))) return;
      if (child.id === "admin-control-center" || child.classList?.contains("backend-modal")) return;
      const text = (child.textContent || "").replace(/\s+/g, "");
      if (!text || child.matches?.("header")) return;
      child.dataset.adminProfileHidden = "true";
      child.style.setProperty("display", "none", "important");
      child.style.setProperty("visibility", "hidden", "important");
      child.setAttribute("aria-hidden", "true");
    });
  }

  async function syncAdminControlCenter(force) {
    const user = window.zhixingApi?.user;
    const active = /\/admin\.html$/i.test(window.location.pathname || "") && user?.role === "admin";
    document.documentElement.classList.toggle("admin-mode", Boolean(active));
    document.body?.classList.toggle("admin-mode", Boolean(active));
    if (!active) {
      document.getElementById("admin-control-center")?.remove();
      restoreAdminProfileHidden();
      return;
    }
    const host = document.getElementById("main-content") || document.querySelector("main") || document.getElementById("root");
    if (!host) return;
    let center = document.getElementById("admin-control-center");
    if (!center) {
      center = document.createElement("section");
      center.id = "admin-control-center";
      center.className = "admin-control-center";
      const avatarCard = findRoleProfileAvatarCard(host);
      if (avatarCard?.parentElement) avatarCard.insertAdjacentElement("afterend", center);
      else host.insertBefore(center, host.firstElementChild || null);
    }
    hideAdminOrdinaryProfileBlocks(host, center);
    document.getElementById("role-profile-menu-bottom")?.remove();
    document.querySelector(".role-profile-logout-fallback")?.remove();
    document.getElementById("admin-review-console")?.remove();
    if (center.dataset.loading === "true" && !force) return;
    center.dataset.loading = "true";
    center.innerHTML = '<header><div><h2>\u5e73\u53f0\u540e\u53f0\u63a7\u5236\u4e2d\u5fc3</h2><p>\u6570\u636e\u663e\u793a\u3001\u8fd0\u884c\u76d1\u63a7\u3001\u5185\u5bb9\u53d1\u5e03\u548c\u5e73\u53f0\u5ba1\u6838</p></div><span>\u7ba1\u7406\u5458</span></header><div class="admin-control-status">\u6b63\u5728\u540c\u6b65...</div>';
    try {
      const api = window.zhixingApi.api;
      const results = await Promise.all([
        api("/api/admin/overview"),
        api("/api/admin/readiness"),
        api("/api/admin/users"),
        api("/api/admin/parent-links"),
        api("/api/admin/posts"),
        api("/api/course-orders"),
        api("/api/admin/security").catch(function () { return { errors: [], audits: [] }; }),
        api("/api/courses"),
        api("/api/study-bases").catch(function () { return { bases: [] }; })
      ]);
      const overview = results[0], readiness = results[1], users = results[2], links = results[3], posts = results[4], orders = results[5], security = results[6], courses = results[7], bases = results[8];
      const allUsers = users.users || [];
      const allPosts = posts.posts || [];
      const allOrders = orders.orders || [];
      const pendingUsers = allUsers.filter(function (item) { return item.status === "pending"; });
      const pendingLinks = (links.links || []).filter(function (item) { return !item.approved_at; });
      const pendingPosts = allPosts.filter(function (item) { return item.status === "pending"; });
      const pendingOrders = allOrders.filter(function (item) { return item.status !== "paid" && item.status !== "cancelled" && item.status !== "refunded"; });
      const totalUsers = (overview.users || []).reduce(function (sum, item) { return sum + Number(item.count || 0); }, 0);
      const postCount = (overview.posts || []).reduce(function (sum, item) { return sum + Number(item.count || 0); }, 0);
      const pendingTotal = pendingUsers.length + pendingLinks.length + pendingPosts.length + pendingOrders.length;
      const courseOptions = adminControlOptions(courses.courses || []);
      center.innerHTML = '<header><div><h2>\u5e73\u53f0\u540e\u53f0\u63a7\u5236\u4e2d\u5fc3</h2><p>' + escapeHtml(user.displayName || "\u7ba1\u7406\u5458") + ' \u00b7 \u663e\u793a\u3001\u76d1\u63a7\u3001\u53d1\u5e03\u3001\u5ba1\u6838</p></div><span>\u5355\u72ec\u540e\u53f0</span></header>' +
        '<nav class="admin-control-tabs"><button type="button" class="is-active" data-admin-pane="overview">\u603b\u89c8</button><button type="button" data-admin-pane="monitor">\u76d1\u63a7</button><button type="button" data-admin-pane="publish">\u53d1\u5e03</button><button type="button" data-admin-pane="review">\u5ba1\u6838</button></nav>' +
        '<div class="admin-control-pane is-active" data-admin-pane-panel="overview"><div class="admin-control-stats"><div class="admin-control-stat"><b>' + totalUsers + '</b><small>\u5e73\u53f0\u7528\u6237</small></div><div class="admin-control-stat"><b>' + Number(overview.courses || 0) + '</b><small>\u7814\u5b66\u8bfe\u7a0b</small></div><div class="admin-control-stat"><b>' + postCount + '</b><small>\u793e\u533a\u5185\u5bb9</small></div><div class="admin-control-stat"><b>' + pendingTotal + '</b><small>\u5f85\u5904\u7406\u5ba1\u6838</small></div></div>' +
        (allOrders.slice(0, 4).map(function (item) { return adminControlRow((item.student_name || "\u5b66\u751f") + " \u00b7 " + (item.course_title || "\u8bfe\u7a0b\u8ba2\u5355"), adminControlStatusText(item.status) + " \u00b7 " + Math.round(Number(item.amount_cents || 0) / 100) + "\u5143", item.status === "paid" ? "" : "order:" + item.id, "\u786e\u8ba4"); }).join("") || '<div class="admin-control-empty">\u6682\u65e0\u8bfe\u7a0b\u8ba2\u5355\u3002</div>') + '</div>' +
        '<div class="admin-control-pane" data-admin-pane-panel="monitor">' + (readiness.checks || []).map(function (item) { return adminControlRow(item.label, item.detail, "", ""); }).join("") + ((security.errors || []).slice(0, 4).map(function (item) { return adminControlRow(item.message || "\u5f02\u5e38\u8bb0\u5f55", item.url || item.created_at || "", "", ""); }).join("") || '<div class="admin-control-empty">\u6682\u65e0\u65b0\u7684\u5e73\u53f0\u5f02\u5e38\u3002</div>') + '</div>' +
        '<div class="admin-control-pane" data-admin-pane-panel="publish"><form class="admin-control-form" data-admin-create-course><label>\u8bfe\u7a0b\u540d\u79f0<input name="title" required maxlength="100"></label><label>\u5206\u7c7b<input name="category" required maxlength="40"></label><label>\u552f\u4e00\u6807\u8bc6<input name="slug" required pattern="[a-z0-9-]{3,80}" placeholder="new-study-course"></label><label>\u4ef7\u683c\uff08\u5143\uff09<input name="price" type="number" min="0" step="1" value="0"></label><label>\u7b80\u4ecb<textarea name="description" maxlength="1000"></textarea></label><button type="submit">\u65b0\u5efa\u5e76\u53d1\u5e03\u8bfe\u7a0b</button></form><form class="admin-control-form" data-admin-create-content><label>\u8bfe\u7a0b<select name="courseId" required>' + courseOptions + '</select></label><label>\u7c7b\u578b<select name="type"><option value="material">\u8d44\u6599</option><option value="video">\u89c6\u9891</option><option value="task">\u4efb\u52a1</option><option value="homework">\u4f5c\u4e1a</option><option value="test">\u6d4b\u8bd5</option></select></label><label>\u6807\u9898<input name="title" required maxlength="120"></label><label>\u5185\u5bb9 / \u94fe\u63a5<textarea name="bodyText" maxlength="2000"></textarea></label><button type="submit">\u4e0a\u4f20\u8bfe\u7a0b\u5185\u5bb9</button></form><form class="admin-control-form" data-admin-create-base><label>\u57fa\u5730\u540d\u79f0<input name="title" required maxlength="100"></label><label>\u57ce\u5e02<input name="city" required maxlength="60"></label><label>\u5730\u5740<input name="address" maxlength="160"></label><label>\u4ecb\u7ecd<textarea name="description" maxlength="1000"></textarea></label><button type="submit">\u65b0\u5efa\u7814\u5b66\u57fa\u5730</button></form><div class="admin-control-empty">\u5df2\u540c\u6b65\u57fa\u5730 ' + (bases.bases || []).length + ' \u4e2a\u3002</div></div>' +
        '<div class="admin-control-pane" data-admin-pane-panel="review">' + (pendingUsers.map(function (item) { return adminControlRow((item.display_name || "\u7528\u6237") + " \u00b7 " + (item.role || ""), item.email + " \u00b7 " + adminControlStatusText(item.status), "user:" + item.id, "\u901a\u8fc7"); }).join("") || '<div class="admin-control-empty">\u6682\u65e0\u5f85\u5ba1\u8d26\u53f7\u3002</div>') + pendingOrders.map(function (item) { return adminControlRow((item.student_name || "\u5b66\u751f") + " \u00b7 " + (item.course_title || "\u8bfe\u7a0b\u8ba2\u5355"), adminControlStatusText(item.status), "order:" + item.id, "\u786e\u8ba4"); }).join("") + pendingLinks.map(function (item) { return adminControlRow((item.parent_name || "\u5bb6\u957f") + " \u2192 " + (item.student_name || "\u5b66\u751f"), item.relation || "\u76d1\u62a4\u4eba", "link:" + item.parent_id + ":" + item.student_id, "\u901a\u8fc7"); }).join("") + pendingPosts.map(function (item) { return adminControlRow("\u52a8\u6001\uff1a" + (item.display_name || "\u7528\u6237"), String(item.content || "").slice(0, 60), "post:" + item.id, "\u53d1\u5e03"); }).join("") + '</div><div class="admin-control-status">\u540e\u53f0\u6570\u636e\u5df2\u540c\u6b65\u3002</div><button type="button" class="admin-control-logout">\u9000\u51fa\u767b\u5f55</button>';
    } catch (error) {
      center.innerHTML = '<header><div><h2>\u5e73\u53f0\u540e\u53f0\u63a7\u5236\u4e2d\u5fc3</h2><p>\u6570\u636e\u540c\u6b65\u5931\u8d25</p></div><span>\u7ba1\u7406\u5458</span></header><div class="admin-control-status">' + escapeHtml(error.message || "\u540e\u53f0\u6570\u636e\u540c\u6b65\u5931\u8d25") + '</div>';
    } finally {
      center.dataset.loading = "false";
    }
  }

  async function renderAdminReviewConsole(force) {
    const user = window.zhixingApi?.user;
    const main = document.getElementById("main-content") || document.querySelector("main") || document.getElementById("root");
    if (!main) return;
    if (window.location.hash !== "#/profile" || user?.role !== "admin") {
      document.getElementById("admin-review-console")?.remove();
      return;
    }
    let panel = document.getElementById("admin-review-console");
    if (!panel) {
      panel = document.createElement("section");
      panel.id = "admin-review-console";
      panel.className = "admin-review-console";
      const anchor = document.getElementById("role-profile-panel");
      if (anchor) anchor.insertAdjacentElement("afterend", panel);
      else main.insertBefore(panel, main.firstElementChild || null);
    }
    if (panel.dataset.loading === "true" && !force) return;
    panel.dataset.loading = "true";
    panel.innerHTML = '<header><strong>管理端审核台</strong><span>后台审核</span></header><div class="admin-review-status">正在同步审核数据...</div>';
    try {
      const [overview, users, links, posts, orders, security] = await Promise.all([
        window.zhixingApi.api("/api/admin/overview"),
        window.zhixingApi.api("/api/admin/users"),
        window.zhixingApi.api("/api/admin/parent-links"),
        window.zhixingApi.api("/api/admin/posts"),
        window.zhixingApi.api("/api/course-orders"),
        window.zhixingApi.api("/api/admin/security").catch(function () { return { errors: [], audits: [] }; })
      ]);
      const pendingUsers = (users.users || []).filter(function (item) { return item.status === "pending"; });
      const pendingLinks = (links.links || []).filter(function (item) { return !item.approved_at; });
      const pendingPosts = (posts.posts || []).filter(function (item) { return item.status === "pending"; });
      const pendingOrders = (orders.orders || []).filter(function (item) { return item.status !== "paid" && item.status !== "cancelled" && item.status !== "refunded"; });
      const errorCount = Number(overview.errors24h || 0);
      panel.innerHTML = '<header><strong>管理端审核台</strong><span>后台审核</span></header>' +
        '<div class="admin-review-stats">' +
        '<div><b>' + pendingUsers.length + '</b><small>待审账号</small></div>' +
        '<div><b>' + pendingOrders.length + '</b><small>待确认订单</small></div>' +
        '<div><b>' + pendingPosts.length + '</b><small>待审社区</small></div>' +
        '<div><b>' + errorCount + '</b><small>24小时告警</small></div></div>' +
        '<section class="admin-review-section"><h3>账号审核</h3>' + (pendingUsers.length ? pendingUsers.slice(0, 4).map(function (item) {
          return adminReviewRow(item.display_name + " · " + (item.role || ""), item.email + " · " + adminReviewStatusText(item.status), "user:" + item.id, "通过");
        }).join("") : '<p class="admin-review-empty">暂无待审核账号。</p>') + '</section>' +
        '<section class="admin-review-section"><h3>课程订单</h3>' + (pendingOrders.length ? pendingOrders.slice(0, 4).map(function (item) {
          return adminReviewRow((item.student_name || "学生") + " · " + (item.course_title || "课程订单"), adminReviewStatusText(item.status), "order:" + item.id, "确认");
        }).join("") : '<p class="admin-review-empty">暂无待确认订单。</p>') + '</section>' +
        '<section class="admin-review-section"><h3>家长绑定</h3>' + (pendingLinks.length ? pendingLinks.slice(0, 4).map(function (item) {
          return adminReviewRow((item.parent_name || "家长") + " → " + (item.student_name || "学生"), item.relation || "监护人", "link:" + item.parent_id + ":" + item.student_id, "通过");
        }).join("") : '<p class="admin-review-empty">暂无待审核绑定。</p>') + '</section>' +
        '<section class="admin-review-section"><h3>社区内容</h3>' + (pendingPosts.length ? pendingPosts.slice(0, 4).map(function (item) {
          return adminReviewRow("动态：" + (item.display_name || "用户"), String(item.content || "").slice(0, 54), "post:" + item.id, "发布");
        }).join("") : '<p class="admin-review-empty">暂无待审核社区内容。</p>') + '</section>' +
        '<section class="admin-review-section"><h3>平台安全</h3>' + ((security.errors || []).slice(0, 2).map(function (item) {
          return adminReviewRow(item.message || "错误报告", item.url || item.created_at || "", "", "");
        }).join("") || '<p class="admin-review-empty">暂无新的平台异常。</p>') + '</section><div class="admin-review-status">审核数据已同步，可直接处理。</div>';
    } catch (error) {
      panel.innerHTML = '<header><strong>管理端审核台</strong><span>后台审核</span></header><div class="admin-review-status">' + escapeHtml(error.message || "审核数据同步失败") + '</div>';
    } finally {
      panel.dataset.loading = "false";
    }
  }

  async function handleAdminReviewConsoleClick(event) {
    const button = event.target?.closest?.("[data-admin-review-action]");
    if (!button) return;
    const user = window.zhixingApi?.user;
    if (user?.role !== "admin") return;
    event.preventDefault();
    event.stopPropagation();
    const action = button.dataset.adminReviewAction || "";
    button.disabled = true;
    button.textContent = "处理中";
    try {
      if (action.startsWith("user:")) {
        await window.zhixingApi.api("/api/admin/users/" + action.slice(5) + "/status", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "active" }) });
      } else if (action.startsWith("order:")) {
        await window.zhixingApi.api("/api/admin/course-orders/" + action.slice(6) + "/status", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "paid" }) });
      } else if (action.startsWith("post:")) {
        await window.zhixingApi.api("/api/admin/posts/" + action.slice(5) + "/status", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "published" }) });
      } else if (action.startsWith("link:")) {
        const parts = action.split(":");
        await window.zhixingApi.api("/api/admin/parent-links/" + parts[1] + "/" + parts[2] + "/approve", { method: "PATCH" });
      }
      await renderAdminReviewConsole(true);
    } catch (error) {
      button.disabled = false;
      button.textContent = "重试";
      const status = document.querySelector("#admin-review-console .admin-review-status");
      if (status) status.textContent = error.message || "处理失败";
    }
  }

  async function handleAdminControlCenterClick(event) {
    const center = event.target?.closest?.("#admin-control-center");
    if (!center || window.zhixingApi?.user?.role !== "admin") return;
    const tab = event.target.closest("[data-admin-pane]");
    if (tab) {
      event.preventDefault();
      center.querySelectorAll("[data-admin-pane]").forEach(function (button) { button.classList.toggle("is-active", button === tab); });
      center.querySelectorAll("[data-admin-pane-panel]").forEach(function (panel) { panel.classList.toggle("is-active", panel.dataset.adminPanePanel === tab.dataset.adminPane); });
      return;
    }
    const logout = event.target.closest(".admin-control-logout");
    if (logout) {
      event.preventDefault();
      event.stopPropagation();
      fastProfileLogout();
      return;
    }
    const button = event.target.closest("[data-admin-control-action]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    const action = button.dataset.adminControlAction || "";
    const oldText = button.textContent;
    button.disabled = true;
    button.textContent = "\u5904\u7406\u4e2d";
    try {
      if (action.startsWith("user:")) {
        await window.zhixingApi.api("/api/admin/users/" + action.slice(5) + "/status", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "active" }) });
      } else if (action.startsWith("order:")) {
        await window.zhixingApi.api("/api/admin/course-orders/" + action.slice(6) + "/status", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "paid" }) });
      } else if (action.startsWith("post:")) {
        await window.zhixingApi.api("/api/admin/posts/" + action.slice(5) + "/status", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "published" }) });
      } else if (action.startsWith("link:")) {
        const parts = action.split(":");
        await window.zhixingApi.api("/api/admin/parent-links/" + parts[1] + "/" + parts[2] + "/approve", { method: "PATCH" });
      }
      await syncAdminControlCenter(true);
    } catch (error) {
      button.disabled = false;
      button.textContent = oldText || "\u91cd\u8bd5";
      const status = center.querySelector(".admin-control-status");
      if (status) status.textContent = error.message || "\u5904\u7406\u5931\u8d25";
    }
  }

  async function handleAdminControlCenterSubmit(event) {
    const form = event.target?.closest?.("#admin-control-center form");
    if (!form || window.zhixingApi?.user?.role !== "admin") return;
    event.preventDefault();
    const center = document.getElementById("admin-control-center");
    const status = center?.querySelector(".admin-control-status");
    const submit = form.querySelector("button[type='submit']");
    if (submit) submit.disabled = true;
    if (status) status.textContent = "\u6b63\u5728\u63d0\u4ea4...";
    try {
      const values = Object.fromEntries(new FormData(form));
      if (form.matches("[data-admin-create-course]")) {
        await window.zhixingApi.api("/api/courses", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: values.title, category: values.category, slug: values.slug, description: values.description, priceCents: Math.round(Number(values.price || 0) * 100), status: "published" }) });
      } else if (form.matches("[data-admin-create-content]")) {
        await window.zhixingApi.api("/api/courses/" + values.courseId + "/contents", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ type: values.type, title: values.title, body: { text: values.bodyText || "" }, published: true }) });
      } else if (form.matches("[data-admin-create-base]")) {
        await window.zhixingApi.api("/api/study-bases", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: values.title, city: values.city, address: values.address, description: values.description, status: "published" }) });
      }
      if (status) status.textContent = "\u5df2\u63d0\u4ea4\u5e76\u540c\u6b65\u3002";
      form.reset();
      await syncAdminControlCenter(true);
    } catch (error) {
      if (status) status.textContent = error.message || "\u63d0\u4ea4\u5931\u8d25";
    } finally {
      if (submit) submit.disabled = false;
    }
  }

  function syncRoleRestrictedProfileSections() {
    const user = window.zhixingApi?.user;
    if (window.location.hash !== "#/profile") return;
    const restricted = user && (user.role === "parent" || user.role === "teacher");
    const restrictedTitles = [/\u7814\u5b66\u62a4\u7167/, /\u5b66\u4e60\u8bc1\u4e66/, /\u5956\u72b6/, /\u7814\u5b66\u65e5\u8bb0/, /\u77e5\u8bc6\u70b9/, /\u52cb\u7ae0/];
    const hiddenSelector = "[data-role-restricted-section='true']";
    if (!restricted) {
      document.querySelectorAll(hiddenSelector).forEach(function (section) {
        section.style.removeProperty("display");
        section.style.removeProperty("visibility");
        section.removeAttribute("aria-hidden");
        delete section.dataset.roleRestrictedSection;
      });
      return;
    }
    Array.from(document.querySelectorAll("h1,h2,h3,h4,strong,p,span")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!restrictedTitles.some(function (pattern) { return pattern.test(text); })) return;
      const block = node.closest("section") ||
        node.closest(".bg-white") ||
        node.closest(".rounded-3xl") ||
        node.closest(".rounded-2xl") ||
        node.closest(".rounded-xl") ||
        node.parentElement;
      if (!block || block.id === "root" || block.parentElement?.id === "root") return;
      if (block.id === "role-profile-panel" || block.id === "role-route-panel" || block.id === "role-profile-menu-bottom" || block.id === "teacher-course-base-manager" || block.classList?.contains("role-profile-logout-fallback") || block.classList?.contains("profile-action-page")) return;
      const blockText = (block.textContent || "").replace(/\s+/g, "");
      if (blockText.length > 2400) return;
      block.dataset.roleRestrictedSection = "true";
      block.style.setProperty("display", "none", "important");
      block.style.setProperty("visibility", "hidden", "important");
      block.setAttribute("aria-hidden", "true");
    });
  }

  function syncRoleRestrictedLearningSections() {
    const user = window.zhixingApi?.user;
    const restricted = user && (user.role === "parent" || user.role === "teacher");
    const hiddenSelector = "[data-role-learning-hidden='true']";
    if (!restricted || window.location.hash !== "#/zhi-xing") {
      document.querySelectorAll(hiddenSelector).forEach(function (section) {
        section.style.removeProperty("display");
        section.style.removeProperty("visibility");
        section.removeAttribute("aria-hidden");
        delete section.dataset.roleLearningHidden;
      });
      return;
    }
    const patterns = [
      /\u5b66\u4e60\u6210\u957f\u66f2\u7ebf/,
      /\u5b66\u4e60\u7edf\u8ba1/,
      /\u672c\u5468\u5b66\u4e60\u8fdb\u5ea6/,
      /\u4efb\u52a1\u5b8c\u6210\u7387/,
      /\u4e3b\u9898\u5206\u7c7b/
    ];
    Array.from(document.querySelectorAll("h1,h2,h3,h4,strong,p,span,section,article,div")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text || text.length > 1800) return;
      if (!patterns.some(function (pattern) { return pattern.test(text); })) return;
      let block = node.closest("section") ||
        node.closest("article") ||
        node.closest(".bg-white") ||
        node.closest(".rounded-3xl") ||
        node.closest(".rounded-2xl") ||
        node.closest(".rounded-xl") ||
        node;
      if (!block || block.id === "root" || block.parentElement?.id === "root") return;
      if (block.id === "role-profile-panel" || block.id === "role-route-panel" || block.id === "role-profile-menu-bottom" || block.id === "parent-zhi-child-context" || block.id === "teacher-course-base-manager" || block.classList?.contains("role-profile-logout-fallback") || block.classList?.contains("profile-action-page")) return;
      const blockText = (block.textContent || "").replace(/\s+/g, "");
      if (blockText.length > 2600) return;
      block.dataset.roleLearningHidden = "true";
      block.style.setProperty("display", "none", "important");
      block.style.setProperty("visibility", "hidden", "important");
      block.setAttribute("aria-hidden", "true");
    });
  }

  function restoreProfileContainers() {
    if (window.location.hash !== "#/profile") return;
    const main = document.getElementById("main-content") || document.querySelector("main");
    if (main) {
      main.style.removeProperty("display");
      main.style.removeProperty("visibility");
      main.removeAttribute("aria-hidden");
    }
    document.querySelectorAll("[data-role-learning-hidden='true']").forEach(function (section) {
      section.style.removeProperty("display");
      section.style.removeProperty("visibility");
      section.removeAttribute("aria-hidden");
      delete section.dataset.roleLearningHidden;
    });
    Array.from(document.querySelectorAll("#main-content > div, main > div")).forEach(function (child) {
      if (child.dataset.roleRestrictedSection === "true" || child.dataset.roleProfileStudentHidden === "true" || child.dataset.roleProfileMenuHidden === "true") return;
      child.style.removeProperty("display");
      child.style.removeProperty("visibility");
      child.removeAttribute("aria-hidden");
    });
  }

  function hideRoleProfileStudentBlock(matcher, maxLength) {
    const candidates = Array.from(document.querySelectorAll("#main-content section,#main-content article,#main-content .bg-white,#main-content .rounded-3xl,#main-content .rounded-2xl,#main-content .rounded-xl,#main-content div")).map(function (node) {
      return { node: node, text: (node.textContent || "").replace(/\s+/g, "") };
    }).filter(function (item) {
      if (!item.text || item.text.length > maxLength) return false;
      if (item.node.id === "main-content" || item.node.id === "root") return false;
      if (item.node.id === "role-profile-panel" || item.node.id === "role-route-panel" || item.node.id === "role-profile-menu-bottom" || item.node.id === "teacher-course-base-manager" || item.node.classList?.contains("role-profile-logout-fallback") || item.node.classList?.contains("profile-action-page")) return false;
      if (item.node.querySelector?.("h1")) return false;
      return matcher(item.text);
    }).sort(function (a, b) { return a.text.length - b.text.length; });
    const block = candidates[0]?.node;
    if (!block) return;
    block.dataset.roleProfileStudentHidden = "true";
    block.style.setProperty("display", "none", "important");
    block.style.setProperty("visibility", "hidden", "important");
    block.setAttribute("aria-hidden", "true");
  }

  function hideRoleStudentSectionByTitle(titlePattern) {
    const roots = [document.getElementById("main-content"), document.querySelector("main"), document.getElementById("root")].filter(Boolean);
    const labels = Array.from(document.querySelectorAll("h1,h2,h3,h4,strong,p,span,button")).filter(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      return titlePattern.test(text);
    });
    labels.forEach(function (label) {
      let block = null;
      let current = label;
      while (current && !roots.includes(current) && current.id !== "root" && current.id !== "main-content") {
        const text = (current.textContent || "").replace(/\s+/g, "");
        const rect = current.getBoundingClientRect?.();
        const style = window.getComputedStyle ? window.getComputedStyle(current) : null;
        const className = String(current.className || "");
        const cardLike = current.matches?.("section,article,.bg-white,.rounded-3xl,.rounded-2xl,.rounded-xl,.card-shadow") ||
          /bg-white|rounded-3xl|rounded-2xl|rounded-xl|shadow|card/i.test(className) ||
          (style && (style.backgroundColor === "rgb(255, 255, 255)" || Number.parseFloat(style.borderRadius) >= 12));
        if (cardLike && text.length > 12 && text.length < 2800 && (!rect || (rect.width > 240 && rect.height > 80))) block = current;
        current = current.parentElement;
      }
      if (!block || block.id === "root" || block.id === "main-content") return;
      if (block.id === "role-profile-panel" || block.id === "role-route-panel" || block.id === "role-profile-menu-bottom" || block.id === "teacher-course-base-manager" || block.classList?.contains("role-profile-logout-fallback") || block.classList?.contains("profile-action-page")) return;
      block.dataset.roleProfileStudentHidden = "true";
      block.style.setProperty("display", "none", "important");
      block.style.setProperty("visibility", "hidden", "important");
      block.setAttribute("aria-hidden", "true");
    });
  }

  function removeRoleStudentStudyCards() {
    const user = window.zhixingApi?.user;
    if (!user || !["teacher", "parent"].includes(user.role)) return;
    if (!["#/profile", "#/zhi-xing"].includes(window.location.hash)) return;
    const patterns = [
      /学习成长曲线|观察力|分析力|表达力/,
      /学习统计|本周学习时长|课程完成情况|积分获取趋势/,
      /研学日记|草原第一日|历史的震撼|小组合作的力量/,
      /知识点|土尔扈特部起源|东归路线|渥巴锡汗/,
      /勋章|已获得|未解锁/
    ];
    Array.from(document.querySelectorAll("#main-content section,#main-content article,#main-content .bg-white,#main-content .rounded-3xl,#main-content .rounded-2xl,#main-content .rounded-xl,#main-content div")).forEach(function (node) {
      if (node.id === "main-content" || node.id === "role-profile-panel" || node.id === "role-route-panel" || node.id === "role-profile-menu-bottom" || node.id === "teacher-zhi-workspace" || node.id === "teacher-course-base-manager" || node.id === "parent-zhi-child-context" || node.classList?.contains("role-profile-logout-fallback") || node.classList?.contains("profile-action-page")) return;
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text || text.length > 2800) return;
      if (!patterns.some(function (pattern) { return pattern.test(text); })) return;
      if (node.querySelector?.("h1")) return;
      const rect = node.getBoundingClientRect?.();
      if (rect && (rect.width < 240 || rect.height < 70)) return;
      node.dataset.roleProfileStudentHidden = "true";
      node.style.setProperty("display", "none", "important");
      node.style.setProperty("visibility", "hidden", "important");
      node.setAttribute("aria-hidden", "true");
    });
  }

  function syncRoleProfileStudentOnlyBlocks() {
    const user = window.zhixingApi?.user;
    const restricted = user && (user.role === "parent" || user.role === "teacher");
    const hiddenSelector = "[data-role-profile-student-hidden='true']";
    if (!restricted || !["#/profile", "#/zhi-xing"].includes(window.location.hash)) {
      document.querySelectorAll(hiddenSelector).forEach(function (section) {
        section.style.removeProperty("display");
        section.style.removeProperty("visibility");
        section.removeAttribute("aria-hidden");
        delete section.dataset.roleProfileStudentHidden;
      });
      return;
    }
    hideRoleProfileStudentBlock(function (text) {
      return text.includes("研学日记") && text.includes("知识点") && text.includes("勋章");
    }, 3200);
    hideRoleProfileStudentBlock(function (text) {
      return text.includes("学习成长曲线") || text.includes("学习统计");
    }, 2400);
    hideRoleStudentSectionByTitle(/学习成长曲线|学习统计|本周学习时长|课程完成情况|积分获取趋势/);
    hideRoleStudentSectionByTitle(/研学日记|知识点|勋章/);
    removeRoleStudentStudyCards();
  }

  function moveProfileRolePanelsBelowAvatar() {
    if (window.location.hash !== "#/profile") return;
    const host = document.getElementById("main-content") || document.querySelector("main");
    if (!host) return;
    const routePanel = document.getElementById("role-route-panel");
    const profilePanel = document.getElementById("role-profile-panel");
    if (!routePanel && !profilePanel) return;
    const userName = window.zhixingApi?.user?.displayName || "";
    const avatarCard = Array.from(host.children).find(function (child) {
      if (child.id === "role-route-panel" || child.id === "role-profile-panel") return false;
      const text = (child.textContent || "").replace(/\s+/g, "");
      return child.querySelector?.("img,svg") || (userName && text.includes(userName)) || /Lv\.|完成任务|获得积分|管理班级|待批作业|已发任务|学生互动|绑定学生|孩子作业/.test(text);
    }) || Array.from(host.children).find(function (child) {
      return child.id !== "role-route-panel" && child.id !== "role-profile-panel";
    });
    if (!avatarCard) return;
    if (routePanel && host.contains(routePanel)) avatarCard.insertAdjacentElement("afterend", routePanel);
    if (profilePanel && host.contains(profilePanel)) (routePanel || avatarCard).insertAdjacentElement("afterend", profilePanel);
  }

  function showProfileShareCard() {
    if (!window.zhixingApi?.user) { window.zhixingApi?.openAuth?.(); return; }
    ensureCloudMessageStyle();
    document.querySelector(".profile-share-modal")?.remove();
    const user = window.zhixingApi.user;
    const role = user.role === "teacher" ? "老师端" : user.role === "parent" ? "家长端" : user.role === "admin" ? "管理端" : "学生端";
    const url = location.origin + location.pathname + location.search + "#/home";
    const text = "我正在使用知行研学平台，当前身份：" + role + " · " + (user.displayName || "");
    const modal = document.createElement("section");
    modal.className = "profile-share-modal";
    modal.innerHTML = '<article><div class="profile-share-card"><strong>知行研学分享卡</strong><p>' + escapeHtml(text) + '</p><p>' + escapeHtml(url) + '</p></div><div class="profile-share-actions"><button type="button" data-action="share">分享 / 复制</button><button type="button" data-action="close">关闭</button></div></article>';
    modal.addEventListener("click", function (event) { if (event.target === modal) modal.remove(); });
    modal.querySelector('[data-action="close"]').addEventListener("click", function () { modal.remove(); });
    modal.querySelector('[data-action="share"]').addEventListener("click", async function (event) {
      const button = event.currentTarget;
      try {
        if (navigator.share) await navigator.share({ title: "知行研学", text: text, url: url });
        else if (navigator.clipboard) await navigator.clipboard.writeText(text + "\n" + url);
        button.textContent = "已复制";
      } catch (_error) {
        try { await navigator.clipboard?.writeText(text + "\n" + url); button.textContent = "已复制"; } catch (__error) { button.textContent = "复制失败"; }
      }
    });
    document.body.appendChild(modal);
  }

  async function logoutProfileAccount() {
    if (!window.zhixingApi?.user) { window.zhixingApi?.openAuth?.(); return; }
    if (window.zhixingApi?.forceLogout) {
      window.zhixingApi.forceLogout();
      return;
    }
    try { await window.zhixingApi.api("/api/auth/logout", { method: "POST" }); } catch (_error) {}
    try {
      localStorage.removeItem("zhixingReadBadge:#/message");
      sessionStorage.clear();
    } catch (_error) {}
    window.location.hash = "/home";
    window.location.reload();
  }

  function bindProfileBottomActions() {
    if (window.location.hash !== "#/profile") return;
    Array.from(document.querySelectorAll("button,a")).forEach(function (button) {
      const text = (button.textContent || "").replace(/\s+/g, "");
      if (/生成分享卡片/.test(text)) {
        if (button.dataset.profileShareBound) return;
        button.dataset.profileShareBound = "true";
        button.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          showProfileShareCard();
        });
      } else if (/退出登录/.test(text)) {
        if (button.dataset.profileLogoutBound) return;
        button.dataset.profileLogoutBound = "true";
        const onLogout = function (event) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation?.();
          fastProfileLogout();
        };
        button.addEventListener("pointerdown", onLogout, true);
        button.addEventListener("click", onLogout, true);
      }
    });
  }

  function findProfileBottomAction(pattern) {
    const buttons = Array.from(document.querySelectorAll("button,a"));
    return buttons.find(function (button) {
      return pattern.test((button.textContent || "").replace(/\s+/g, ""));
    }) || null;
  }

  const roleProfileMenuItems = [
    { key: "todo", label: "\u6211\u7684\u5f85\u529e", aliases: ["鎴戠殑寰呭姙"], icon: "✓", type: "鎴戠殑寰呭姙" },
    { key: "fav", label: "\u6211\u7684\u6536\u85cf", aliases: ["鎴戠殑鏀惰棌"], icon: "♡", type: "鎴戠殑鏀惰棌" },
    { key: "history", label: "\u6d4f\u89c8\u5386\u53f2", aliases: ["娴忚鍘嗗彶"], icon: "◴", type: "娴忚鍘嗗彶" },
    { key: "diary", label: "\u7814\u5b66\u65e5\u8bb0", aliases: ["鐮斿鏃ヨ"], icon: "□", type: "鐮斿鏃ヨ", hiddenForRole: true },
    { key: "badge", label: "\u6211\u7684\u52cb\u7ae0", aliases: ["鎴戠殑鍕嬬珷"], icon: "☆", type: "鎴戜笂鍕嬬珷", hiddenForRole: true },
    { key: "shop", label: "\u79ef\u5206\u5546\u57ce", aliases: ["绉垎鍟嗗煄"], icon: "▣", type: "绉垎鍟嗗煄" },
    { key: "notice", label: "\u6d88\u606f\u901a\u77e5", aliases: ["娑堟伅閫氱煡"], icon: "!", type: "娑堟伅閫氱煡" },
    { key: "help", label: "\u5e2e\u52a9\u4e0e\u53cd\u9988", aliases: ["甯姪涓庡弽棣?"], icon: "?", type: "甯姪涓庡弽棣?" },
    { key: "settings", label: "\u8bbe\u7f6e", aliases: ["璁剧疆"], icon: "⚙", type: "璁剧疆" }
  ];

  const roleProfileMenuTypeByKey = {
    todo: profileMenuLabels[0],
    fav: profileMenuLabels[1],
    history: profileMenuLabels[2],
    diary: profileMenuLabels[3],
    badge: profileMenuLabels[4],
    shop: profileMenuLabels[5],
    notice: profileMenuLabels[6],
    help: profileMenuLabels[7],
    settings: profileMenuLabels[8]
  };

  function labelMatchesProfileItem(text, item) {
    const type = roleProfileMenuTypeByKey[item.key] || item.type || "";
    return text.startsWith(item.label) || (type && text.startsWith(type)) || item.aliases.some(function (alias) { return alias && text.startsWith(alias); });
  }

  function createRoleProfileMenuFallback(item) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "role-profile-menu-fallback";
    button.dataset.roleProfileMenuKey = item.key;
    button.innerHTML = '<b>' + escapeHtml(item.icon) + '</b><span>' + escapeHtml(item.label) + '</span><em>›</em>';
    const open = function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      openCleanProfilePanel(item.label, item.key);
    };
    button.addEventListener("pointerdown", open, true);
    button.addEventListener("click", open, true);
    return button;
  }

  function handleRoleProfileMenuFallbackClick(event) {
    if (window.location.hash !== "#/profile") return;
    const button = event.target?.closest?.("#role-profile-menu-bottom [data-role-profile-menu-key],.role-profile-menu-fallback[data-role-profile-menu-key]");
    if (!button) return;
    const key = button.dataset.roleProfileMenuKey || "";
    const item = roleProfileMenuItems.find(function (entry) { return entry.key === key; });
    if (!item) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    openCleanProfilePanel(item.label, item.key);
  }

  function handleStableRoleProfileMenuClick(event) {
    if (window.location.hash !== "#/profile") return;
    const user = window.zhixingApi?.user;
    if (!user || !["parent", "teacher", "admin"].includes(user.role)) return;
    if (event.target?.closest?.(".profile-action-page,.backend-modal,.profile-share-modal,.cloud-message-page,.cloud-thread-page")) return;
    const button = event.target?.closest?.("button,a,[role='button'],li,.role-profile-menu-fallback");
    if (!button) return;
    const text = (button.textContent || "").replace(/\s+/g, "");
    const key = button.dataset.roleProfileMenuKey || "";
    if (/退出登录|\u9000\u51fa\u767b\u5f55|閫€鍑虹櫥褰?/.test(text) || button.classList?.contains("role-profile-logout-fallback")) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      fastProfileLogout();
      return;
    }
    const item = roleProfileMenuItems.find(function (entry) {
      return entry.key === key || text === entry.label || text.startsWith(entry.label) || labelMatchesProfileItem(text, entry);
    });
    if (!item || item.hiddenForRole) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    openCleanProfilePanel(item.label, item.key);
  }

  function findRoleProfileAvatarCard(host) {
    const user = window.zhixingApi?.user || {};
    const userName = user.displayName || user.display_name || "";
    const realHeader = Array.from(host.querySelectorAll("section,article,div")).filter(function (node) {
      if (node.id === "role-route-panel" || node.id === "role-profile-panel" || node.id === "role-profile-menu-bottom") return false;
      if (node.closest("#role-profile-menu-bottom,.profile-action-page,.backend-modal")) return false;
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (text.length < 20 || text.length > 760) return false;
      const cls = String(node.className || "");
      const style = window.getComputedStyle ? window.getComputedStyle(node) : null;
      const bg = style?.backgroundColor || "";
      const image = style?.backgroundImage || "";
      const rect = node.getBoundingClientRect?.();
      const isGreen = /green|emerald|from-green|to-green|bg-green|bg-emerald/i.test(cls) ||
        /linear-gradient/.test(image) ||
        /rgb\(\s*(1[0-9]|2[0-9]|3[0-9])\s*,\s*(1[3-9][0-9]|2[0-5][0-9])\s*,/.test(bg);
      const hasRoleMetrics = /Lv\.|LV\.|管理班级|待批作业|已发任务|学生互动|绠＄悊鐝骇|寰呮壒浣滀笟|宸插彂浠诲姟|瀛︾敓浜掑姩/.test(text);
      const hasUser = userName && text.includes(userName);
      return isGreen && (hasUser || hasRoleMetrics) && (!rect || (rect.width > 260 && rect.height > 120 && rect.height < 520));
    }).sort(function (a, b) {
      const ar = a.getBoundingClientRect?.();
      const br = b.getBoundingClientRect?.();
      return (ar?.top || 0) - (br?.top || 0) || ((ar?.height || 0) - (br?.height || 0));
    })[0];
    if (realHeader) return realHeader;
    return Array.from(host.children).find(function (child) {
      if (child.id === "role-route-panel" || child.id === "role-profile-panel" || child.id === "role-profile-menu-bottom") return false;
      const text = (child.textContent || "").replace(/\s+/g, "");
      return (userName && text.includes(userName)) ||
        /Lv\.|LV\.|绠＄悊鐝骇|寰呮壒浣滀笟|宸插彂浠诲姟|瀛︾敓浜掑姩|缁戝畾瀛︾敓|瀛╁瓙浣滀笟|完成任务|获得积分|管理班级|待批作业|已发任务|学生互动/.test(text);
    }) || host.firstElementChild;
  }

  function ensureProfileLogoutButton(host) {
    let logout = findProfileBottomAction(/\u9000\u51fa\u767b\u5f55|閫€鍑虹櫥褰?/);
    if (logout) return logout;
    logout = document.createElement("button");
    logout.type = "button";
    logout.className = "role-profile-logout-fallback";
    logout.textContent = "\u9000\u51fa\u767b\u5f55";
    const onLogout = function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      fastProfileLogout();
    };
    logout.addEventListener("pointerdown", onLogout, true);
    logout.addEventListener("click", onLogout, true);
    host.appendChild(logout);
    return logout;
  }

  function syncRoleProfileFunctionMenu() {
    const user = window.zhixingApi?.user;
    const onProfile = window.location.hash === "#/profile";
    const pageText = (document.body?.textContent || "").replace(/\s+/g, "");
    const rolePillText = (document.querySelector(".backend-account-button")?.textContent || "").replace(/\s+/g, "");
    const restricted = onProfile && (Boolean(user && (user.role === "parent" || user.role === "teacher")) ||
      /教师端|家长端|老師端|家長端|鑰佸笀绔|瀹堕暱绔/.test(pageText + rolePillText));
    const menu = document.getElementById("role-profile-menu-bottom");
    if (!restricted || !onProfile) {
      document.querySelectorAll("[data-role-profile-menu-hidden='true']").forEach(function (node) {
        node.style.removeProperty("display");
        node.style.removeProperty("visibility");
        node.removeAttribute("aria-hidden");
        delete node.dataset.roleProfileMenuHidden;
      });
      if (menu && !onProfile) menu.remove();
      return;
    }

    ensureCloudMessageStyle();
    const host = document.getElementById("main-content") || document.querySelector("main");
    if (!host) return;

    Array.from(document.querySelectorAll("button,a")).forEach(function (button) {
      if (button.closest(".profile-action-page,.profile-share-modal,.backend-modal,.cloud-message-page,.cloud-thread-page,#role-profile-menu-bottom")) return;
      const text = (button.textContent || "").replace(/\s+/g, "");
      if (!roleProfileMenuItems.some(function (entry) { return labelMatchesProfileItem(text, entry); })) return;
      button.dataset.roleProfileMenuHidden = "true";
      button.style.setProperty("display", "none", "important");
      button.style.setProperty("visibility", "hidden", "important");
      button.setAttribute("aria-hidden", "true");
    });

    let fixedMenu = document.getElementById("role-profile-menu-bottom");
    if (!fixedMenu) {
      fixedMenu = document.createElement("section");
      fixedMenu.id = "role-profile-menu-bottom";
      fixedMenu.className = "role-profile-menu-bottom";
      fixedMenu.setAttribute("aria-label", "\u5e38\u7528\u529f\u80fd");
    }
    fixedMenu.innerHTML = "";
    roleProfileMenuItems.filter(function (item) { return !item.hiddenForRole; }).forEach(function (item) {
      fixedMenu.appendChild(createRoleProfileMenuFallback(item));
    });
    const avatarCard = findRoleProfileAvatarCard(host);
    if (avatarCard?.parentElement) avatarCard.insertAdjacentElement("afterend", fixedMenu);
    else if (!fixedMenu.parentElement) host.insertBefore(fixedMenu, host.firstElementChild || null);
    document.getElementById("role-route-panel")?.remove();
    document.getElementById("role-profile-panel")?.remove();
    const fixedLogout = ensureProfileLogoutButton(host);
    fixedMenu.insertAdjacentElement("afterend", fixedLogout);
    fixedLogout.style.removeProperty("display");
    fixedLogout.style.removeProperty("visibility");
    fixedLogout.removeAttribute("aria-hidden");
    bindProfileBottomActions();
    return;

    const rowsByLabel = new Map();
    Array.from(document.querySelectorAll("button,a")).forEach(function (button) {
      if (button.closest(".profile-action-page,.profile-share-modal,.backend-modal,.cloud-message-page,.cloud-thread-page")) return;
      const text = (button.textContent || "").replace(/\s+/g, "");
      const item = roleProfileMenuItems.find(function (entry) { return labelMatchesProfileItem(text, entry); });
      if (!item) return;
      rowsByLabel.set(item.key, button);
    });

    roleProfileMenuItems.forEach(function (item) {
      const row = rowsByLabel.get(item.key);
      if (!row) return;
      if (item.hiddenForRole) {
        row.dataset.roleProfileMenuHidden = "true";
        row.style.setProperty("display", "none", "important");
        row.style.setProperty("visibility", "hidden", "important");
        row.setAttribute("aria-hidden", "true");
      }
    });

    let bottomMenu = document.getElementById("role-profile-menu-bottom");
    if (!bottomMenu) {
      bottomMenu = document.createElement("section");
      bottomMenu.id = "role-profile-menu-bottom";
      bottomMenu.className = "role-profile-menu-bottom";
      bottomMenu.setAttribute("aria-label", "\u5e38\u7528\u529f\u80fd");
    }

    const logout = ensureProfileLogoutButton(host);
    const logoutBlock = logout?.closest("button,a,section,article") || logout;
    if (logoutBlock?.parentElement) {
      logoutBlock.parentElement.insertBefore(bottomMenu, logoutBlock);
    } else if (!bottomMenu.parentElement) {
      host.appendChild(bottomMenu);
    }

    roleProfileMenuItems.forEach(function (item) {
      if (item.hiddenForRole) return;
      let row = rowsByLabel.get(item.key);
      if (!row) row = createRoleProfileMenuFallback(item);
      if (row === bottomMenu || bottomMenu.contains(row)) return;
      row.dataset.roleProfileMenuMoved = "true";
      row.style.removeProperty("display");
      row.style.removeProperty("visibility");
      row.removeAttribute("aria-hidden");
      bottomMenu.appendChild(row);
    });
    bindProfileBottomActions();
  }

  function syncRoleHomeStudentBlocks() {
    const user = window.zhixingApi?.user;
    const restricted = user && (user.role === "parent" || user.role === "teacher");
    document.documentElement.classList.toggle("role-home-clean", Boolean(restricted && ["#/home", "#/", ""].includes(window.location.hash)));
    document.querySelectorAll("[data-role-home-hidden='true']").forEach(function (section) {
      section.style.removeProperty("display");
      section.style.removeProperty("visibility");
      section.removeAttribute("aria-hidden");
      delete section.dataset.roleHomeHidden;
    });
    if (!restricted || !["#/home", "#/", ""].includes(window.location.hash)) return;
    const patterns = [/\u672c\u5468\u5b66\u4e60\u8fdb\u5ea6/, /\u4efb\u52a1\u5b8c\u6210\u7387/, /\u4e3b\u9898\u5206\u7c7b/];
    Array.from(document.querySelectorAll("#main-content section,#main-content article")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text || text.length > 1100) return;
      if (!patterns.some(function (pattern) { return pattern.test(text); })) return;
      const block = node.closest("section") || node.closest("article") || node;
      if (!block || block.id === "main-content" || block.id === "root" || block.querySelector("h1")) return;
      block.dataset.roleHomeHidden = "true";
      block.style.setProperty("display", "none", "important");
      block.style.setProperty("visibility", "hidden", "important");
      block.setAttribute("aria-hidden", "true");
    });
  }

  function syncTeacherZhiLayout() {
    const user = window.zhixingApi?.user;
    const isTeacherZhi = window.location.hash === "#/zhi-xing" && (user?.role === "teacher" || user?.role === "admin");
    document.documentElement.classList.toggle("teacher-zhi-only", Boolean(isTeacherZhi));
    document.querySelectorAll("[data-teacher-zhi-hidden='true']").forEach(function (section) {
      section.style.removeProperty("display");
      section.style.removeProperty("visibility");
      section.removeAttribute("aria-hidden");
      delete section.dataset.teacherZhiHidden;
    });
    if (!isTeacherZhi) return;
    const page = findZhiPage() || document.getElementById("main-content") || document.querySelector("main");
    const workspace = document.getElementById("teacher-zhi-workspace");
    if (!page || !workspace) return;
    const rolePanel = document.getElementById("role-route-panel");
    const resourceManager = document.getElementById("teacher-course-base-manager");
    if (rolePanel && page.contains(rolePanel) && rolePanel.previousElementSibling !== workspace) {
      workspace.insertAdjacentElement("afterend", rolePanel);
    }
    Array.from(page.children).forEach(function (child) {
      if (child === workspace || child === rolePanel || child === resourceManager) return;
      if (child.querySelector?.("h1") || child.matches?.("header")) return;
      child.dataset.teacherZhiHidden = "true";
      child.style.setProperty("display", "none", "important");
      child.style.setProperty("visibility", "hidden", "important");
      child.setAttribute("aria-hidden", "true");
    });
  }

  function syncRoleProfileFallback() {
    const user = window.zhixingApi?.user;
    if (!user || window.location.hash !== "#/profile") return;
    if (["teacher", "admin", "parent"].includes(user.role)) {
      document.getElementById("role-profile-panel")?.remove();
      return;
    }
    const roleText = user.role === "parent" ? "家长" : user.role === "teacher" ? "老师" : user.role === "admin" ? "管理员" : "学生";
    const metricsByRole = {
      parent: [["绑定学生", "1"], ["孩子作业", "2"], ["待看反馈", "3"], ["安全通知", "1"]],
      teacher: [["管理班级", "3"], ["待批作业", "6"], ["已发任务", "12"], ["学生互动", "28"]],
      admin: [["账号审核", "2"], ["课程订单", "4"], ["社区审核", "5"], ["平台告警", "0"]],
      student: [["完成任务", "8"], ["获得积分", String(Number(user.points || 0))], ["掌握知识", "4/8"], ["连续打卡", "7天"]]
    };
    renderRoleProfilePanel(user, metricsByRole[user.role] || metricsByRole.student, roleText);
    const main = document.getElementById("main-content") || document.querySelector("main");
    if (!main) return;
    main.style.removeProperty("display");
    main.style.removeProperty("visibility");
    main.removeAttribute("aria-hidden");
    const panel = document.getElementById("role-profile-panel");
    if (panel) {
      panel.style.removeProperty("display");
      panel.style.removeProperty("visibility");
      panel.removeAttribute("aria-hidden");
    }
  }

  function roleRouteCopy(user, hash) {
    const role = user?.role || "guest";
    const route = hash.replace(/^#/, "") || "/home";
    const routeType = route.startsWith("/zhi-xing") ? "zhi" :
      route.startsWith("/message") ? "message" :
      route.startsWith("/profile") ? "profile" :
      route.startsWith("/learning-map") ? "map" :
      route.startsWith("/course") || route.startsWith("/base") ? "course" : "other";
    const copy = {
      student: {
        zhi: ["学生端 · 知行任务", "这里显示你参加课程后的任务、作业、测试、证书和学习进度。", ["继续学习", "提交作业", "查看证书"]],
        message: ["学生端 · 消息", "与老师、家长、同学沟通课程安排、作业反馈和小组协作。", ["老师消息", "家长消息", "同学小组"]],
        profile: ["学生端 · 我的", "展示个人学习记录、积分、证书、护照和研学日记。", ["学习记录", "我的作业", "学习证书"]],
        map: ["学生端 · 学习地图", "显示你实际点亮的研学基地、路线和课程足迹。", ["我的路线", "已点亮", "待探索"]],
        course: ["学生端 · 课程", "可学习公开视频和资料，参加课程后可完成任务、作业和测试。", ["视频资料", "任务作业", "测试提交"]],
        other: ["学生端", "当前页面展示学生相关学习数据。", ["学习", "作业", "证书"]]
      },
      parent: {
        zhi: ["家长端 · 孩子研学", "这里显示已绑定学生的课程进展、作业提交、老师反馈和安全提醒。", ["孩子进度", "作业反馈", "安全通知"]],
        message: ["家长端 · 消息", "与孩子和老师沟通研学安排、作业批改和出行安全。", ["联系老师", "联系孩子", "家庭群"]],
        profile: ["家长端 · 我的", "展示家长账号、绑定学生、孩子动态和待查看反馈。", ["绑定学生", "孩子作业", "老师反馈"]],
        map: ["家长端 · 学习地图", "查看孩子已参加课程对应的研学地点和行程进展。", ["孩子足迹", "行程安排", "安全状态"]],
        course: ["家长端 · 课程", "可查看课程介绍、价格和孩子报名状态，任务提交由学生完成。", ["课程介绍", "订单状态", "孩子反馈"]],
        other: ["家长端", "当前页面展示家长关注的孩子研学数据。", ["孩子", "老师", "反馈"]]
      },
      teacher: {
        zhi: ["研学课程与研学基地", "这里新建、上传和编辑研学课程、课程资料与研学基地。", ["新建课程", "上传资料", "编辑课程", "研学基地"]],
        message: ["教师端 · 消息", "与学生、家长、班级群沟通任务安排和批改反馈。", ["班级群", "学生消息", "家长沟通"]],
        profile: ["教师端 · 我的", "展示教师账号、负责班级、待批改作业和已下发任务。", ["负责班级", "待批作业", "已发任务"]],
        map: ["教师端 · 学习地图", "查看班级研学路线、基地资源和学生打卡情况。", ["班级路线", "学生打卡", "基地资源"]],
        course: ["教师端 · 课程", "用于管理课程内容、下发任务、查看提交和批改作业。", ["课程内容", "发布任务", "批改提交"]],
        other: ["教师端", "当前页面展示教师教学管理数据。", ["班级", "任务", "批改"]]
      },
      admin: {
        zhi: ["管理端 · 知行运营", "查看平台任务、课程、账号和审核数据。", ["账号审核", "订单审核", "内容审核"]],
        message: ["管理端 · 消息", "处理平台通知、用户反馈和运营沟通。", ["系统通知", "用户反馈", "运营消息"]],
        profile: ["管理端 · 我的", "展示管理员账号、平台审核和安全状态。", ["账号审核", "课程订单", "平台告警"]],
        map: ["管理端 · 地图资源", "管理研学基地、路线资源和地图内容。", ["基地管理", "路线审核", "内容状态"]],
        course: ["管理端 · 课程运营", "管理课程价格、订单支付、课程内容和开通状态。", ["课程价格", "订单支付", "开通审核"]],
        other: ["管理端", "当前页面展示平台运营管理数据。", ["审核", "订单", "安全"]]
      }
    };
    const bucket = copy[role] || copy.student;
    return bucket[routeType] || bucket.other;
  }

  function syncRoleRouteExperience() {
    const hash = window.location.hash || "#/home";
    const publicRoutes = ["#/home", "#/", "#/discover", ""];
    const existing = document.getElementById("role-route-panel");
    existing?.remove();
    return;
    if (/^#\/(course|base)\//.test(hash)) {
      existing?.remove();
      return;
    }
    if (window.zhixingApi?.user && ["teacher", "admin"].includes(window.zhixingApi.user.role)) {
      existing?.remove();
      return;
    }
    if (hash === "#/profile" && window.zhixingApi?.user && ["parent", "teacher"].includes(window.zhixingApi.user.role)) {
      existing?.remove();
      document.getElementById("role-profile-panel")?.remove();
      return;
    }
    if (publicRoutes.includes(hash) || !window.zhixingApi?.user) {
      existing?.remove();
      return;
    }
    ensureCloudMessageStyle();
    const user = window.zhixingApi.user;
    const data = roleRouteCopy(user, hash);
    const host = hash === "#/message" ? document.querySelector(".cloud-message-main") : (document.getElementById("main-content") || document.querySelector("main") || document.getElementById("root"));
    if (!host) return;
    let panel = existing;
    if (!panel || !host.contains(panel)) {
      existing?.remove();
      panel = document.createElement("section");
      panel.id = "role-route-panel";
      panel.className = "role-route-panel";
      const first = host.firstElementChild;
      const teacherWorkspace = hash === "#/zhi-xing" && (user.role === "teacher" || user.role === "admin") ? document.getElementById("teacher-zhi-workspace") : null;
      const zhiHeader = hash === "#/zhi-xing" ? Array.from(host.children).find(function (child) { return child.querySelector?.("h1") || child.matches?.("header"); }) : null;
      if (teacherWorkspace) teacherWorkspace.insertAdjacentElement("afterend", panel);
      else if (hash === "#/message" && first?.classList?.contains("cloud-ai-card")) first.insertAdjacentElement("afterend", panel);
      else if (zhiHeader?.nextSibling) host.insertBefore(panel, zhiHeader.nextSibling);
      else if (zhiHeader) zhiHeader.insertAdjacentElement("afterend", panel);
      else host.insertBefore(panel, first || null);
    } else if (hash === "#/zhi-xing" && (user.role === "teacher" || user.role === "admin")) {
      const teacherWorkspace = document.getElementById("teacher-zhi-workspace");
      if (teacherWorkspace && panel.previousElementSibling !== teacherWorkspace) teacherWorkspace.insertAdjacentElement("afterend", panel);
    } else if (hash === "#/zhi-xing" && user.role === "parent") {
      const zhiHeader = Array.from(host.children).find(function (child) { return child.querySelector?.("h1") || child.matches?.("header"); });
      if (zhiHeader && panel.previousElementSibling !== zhiHeader) zhiHeader.insertAdjacentElement("afterend", panel);
    }
    panel.innerHTML = '<header><strong>' + escapeHtml(data[0]) + '</strong><span>' + escapeHtml(user.displayName || "") + '</span></header><p>' + escapeHtml(data[1]) + '</p><div class="role-route-actions">' +
      data[2].map(function (label) { return '<button type="button">' + escapeHtml(label) + '</button>'; }).join("") + '</div>';
    if (hash === "#/zhi-xing" && ["teacher", "admin"].includes(user.role) && !Array.from(panel.querySelectorAll(".role-route-actions button")).some(function (button) { return /课程资料|上传资料|研学基地|璇剧▼璧勬枡/.test(button.textContent || ""); })) {
      const materialButton = document.createElement("button");
      materialButton.type = "button";
      materialButton.textContent = "课程资料";
      panel.querySelector(".role-route-actions")?.appendChild(materialButton);
    }
    bindRoleRoutePanelActions(panel, user, hash);
  }

  function cleanupAfterLogout() {
    if (hasRealAccount()) return;
    zhiAccessKey = "";
    zhiAccessHasCloudData = false;
    zhiAccessPromise = null;
    zhiAccessLockMessage = null;
    zhiAccessChildContext = null;
    document.documentElement.classList.remove("cloud-message-route", "cloud-message-active");
    document.getElementById("cloud-message-page")?.remove();
    document.querySelectorAll(".cloud-thread-page,.cloud-notice-detail,.cloud-message-sheet").forEach(function (node) { node.remove(); });
    document.getElementById("role-route-panel")?.remove();
    document.getElementById("role-profile-panel")?.remove();
    document.getElementById("parent-zhi-child-context")?.remove();
    document.querySelectorAll("[data-role-restricted-section='true']").forEach(function (section) {
      section.style.removeProperty("display");
      section.style.removeProperty("visibility");
      section.removeAttribute("aria-hidden");
      delete section.dataset.roleRestrictedSection;
    });
    document.querySelectorAll(".smart-user-toast,[data-smart-subtitle]").forEach(function (node) {
      node.style.setProperty("display", "none", "important");
      node.setAttribute("aria-hidden", "true");
    });
    if (window.location.hash === "#/zhi-xing") syncGuestZhiHardLock();
  }

  function restoreGuestProfilePage() {
    if (window.location.hash !== "#/profile") return;
    const root = document.getElementById("root");
    if (!root) return;
    Array.from(root.children).forEach(function (child) {
      if (child.tagName === "NAV" || child.matches("a")) return;
      const text = (child.textContent || "").replace(/\s+/g, "");
      if (text.length < 120 && !child.classList?.contains("min-h-screen")) return;
      child.style.removeProperty("display");
      child.style.removeProperty("visibility");
      child.removeAttribute("aria-hidden");
    });
  }

  function hideGuestProfileTodos() {
    if (window.location.hash !== "#/profile") return;
    const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,strong,p,span")).filter(function (node) {
      return /待办事项|寰呭姙浜嬮」/.test((node.textContent || "").replace(/\s+/g, ""));
    });
    headings.forEach(function (heading) {
      const block = heading.closest("section,article,.bg-white,.rounded-3xl,.rounded-2xl,.rounded-xl,div.card-shadow") || heading.parentElement;
      if (!block || block.id === "root" || block.parentElement?.id === "root") return;
      const text = (block.textContent || "").replace(/\s+/g, "");
      if (text.length > 900) return;
      block.style.setProperty("display", "none", "important");
      block.style.setProperty("visibility", "hidden", "important");
      block.setAttribute("aria-hidden", "true");
    });
  }

  function hideParentZhiCheckinButton() {
    const user = window.zhixingApi?.user;
    if (!user || user.role !== "parent" || window.location.hash !== "#/zhi-xing") return;
    Array.from(document.querySelectorAll("button,a,[role='button'],section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text || text.length > 120) return;
      if (!/任务点打卡|\u4efb\u52a1\u70b9\u6253\u5361/.test(text)) return;
      const block = node.closest("button,a,[role='button'],section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white") || node;
      if (!block || block.id === "root" || block.parentElement?.id === "root") return;
      block.style.setProperty("display", "none", "important");
      block.style.setProperty("visibility", "hidden", "important");
      block.setAttribute("aria-hidden", "true");
    });
  }

  function syncGuestHomeState() {
    if (window.zhixingApi?.user) return;
    if (!["#/home", "#/", ""].includes(window.location.hash)) return;
    Array.from(document.querySelectorAll("p,span,strong,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = node.textContent;
      if (/已点亮\s*\d+\s*个基地/.test(text)) node.textContent = text.replace(/已点亮\s*\d+\s*个基地/g, "已点亮 0 个基地");
      if (/点亮\s*\d+\s*个基地/.test(text)) node.textContent = node.textContent.replace(/点亮\s*\d+\s*个基地/g, "点亮 0 个基地");
    });
    Array.from(document.querySelectorAll("section,div,article")).forEach(function (node) {
      if (isProtectedFloatingSurface(node)) return;
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (node.parentElement?.id === "root" || node.id === "root" || text.length > 900) return;
      if (!/待办事项|待办|代办|我的任务|今日任务/.test(text)) return;
      const titleMatch = Array.from(node.querySelectorAll("h1,h2,h3,h4,strong,span,p")).some(function (heading) {
        return /待办事项|待办|代办|我的任务|今日任务/.test(heading.textContent.replace(/\s+/g, ""));
      });
      if (!titleMatch) return;
      const block = node.closest("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white") || node;
      if (block.parentElement?.id === "root" || block.id === "root") return;
      if (isProtectedFloatingSurface(block)) return;
      block.style.setProperty("display", "none", "important");
      block.setAttribute("aria-hidden", "true");
    });
    hideGuestRankMeRows(document);
    restoreGuestHomePage();
    hideGuestPrivateBits(document);
    restoreGuestHomeHeaderPublic();
    hideGuestHomeHeaderIdentity();
    hideGuestHomeSearchLocation();
  }

  function restoreGuestHomePage() {
    if (!["#/home", "#/", ""].includes(window.location.hash)) return;
    const root = document.getElementById("root");
    if (!root) return;
    Array.from(root.children).forEach(function (child) {
      const text = (child.textContent || "").replace(/\s+/g, "");
      if (child.tagName === "NAV" || child.matches("a")) return;
      if (text.length < 200 && !child.classList?.contains("min-h-screen")) return;
      child.style.removeProperty("display");
      child.style.removeProperty("visibility");
      child.removeAttribute("aria-hidden");
      Array.from(child.querySelectorAll("[style]")).forEach(function (node) {
        const style = node.getAttribute("style") || "";
        if (!/display:\s*none|visibility:\s*hidden/i.test(style)) return;
        const nodeText = (node.textContent || "").replace(/\s+/g, "");
        const isPrivateTask = /待办|代办|我的任务|今日任务|寰呭姙|浠ｅ姙|鎴戠殑浠诲姟|浠婃棩浠诲姟/.test(nodeText) && nodeText.length < 700;
        if (isPrivateTask) return;
        node.style.removeProperty("display");
        node.style.removeProperty("visibility");
        node.removeAttribute("aria-hidden");
      });
    });
  }

  function syncGuestProfileBadges() {
    if (window.zhixingApi?.user) return;
    if (window.location.hash !== "#/profile") return;
    Array.from(document.querySelectorAll("button span,button strong")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = node.textContent.trim();
      if (text === "0" || text === "热") {
        node.style.display = "none";
        node.setAttribute("aria-hidden", "true");
      }
    });
  }

  function syncGuestPublicNames() {
    if (window.zhixingApi?.user) return;
    Array.from(document.querySelectorAll("h1,h2,h3,h4,p,span,strong,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = node.textContent || "";
      const next = text
        .replace(/\u5f20\u5c0f\u534e/g, "\u7814\u5b66\u540c\u5b66")
        .replace(/\u5f53\u524d\u7528\u6237/g, "\u672a\u767b\u5f55\u7528\u6237");
      if (next !== text) node.textContent = next;
    });
  }

  function currentUserDisplayName() {
    const user = window.zhixingApi?.user;
    return String(user?.displayName || user?.display_name || user?.name || "").trim();
  }

  function findLeaderboardSection(root) {
    const heading = Array.from(root.querySelectorAll("h1,h2,h3,h4,strong")).find(function (node) {
      return /\u79ef\u5206\u6392\u884c\u699c|\u6392\u884c\u699c/.test((node.textContent || "").replace(/\s+/g, ""));
    });
    return heading?.closest("section,.bg-white,.rounded-3xl,.rounded-2xl,.card-shadow") || null;
  }

  function leaderboardRows(section) {
    const names = /\u5218\u661f\u8fb0|\u8d75\u60a6\u7136|\u674e\u660e\u8f69|\u5f20\u5c0f\u534e|\u738b\u5c0f\u96e8|\u9648\u601d\u8fdc/;
    return Array.from(section.querySelectorAll("li,button,article,div")).filter(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!names.test(text) || !/Lv\.?\d+|LV\.?\d+/i.test(text)) return false;
      if (!/\d{3,}\u79ef\u5206/.test(text) && !/\d{3,}$/.test(text)) return false;
      if (text.length > 120) return false;
      return !Array.from(node.children || []).some(function (child) {
        const childText = (child.textContent || "").replace(/\s+/g, "");
        return childText.length > 0 && childText.length < text.length && names.test(childText) && /Lv\.?\d+|LV\.?\d+/i.test(childText);
      });
    });
  }

  function removeLeaderboardSelfBadges(row) {
    Array.from(row.querySelectorAll("span,strong,em,b,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = (node.textContent || "").trim();
      if (text !== "\u6211" && text !== "\u5f53\u524d\u7528\u6237") return;
      node.remove();
    });
  }

  function setLeaderboardCurrentUser() {
    if (!["#/home", "#/", ""].includes(window.location.hash)) return;
    const section = findLeaderboardSection(document);
    if (!section) return;
    const userName = currentUserDisplayName();
    const rows = leaderboardRows(section);
    rows.forEach(function (row) {
      removeLeaderboardSelfBadges(row);
      row.classList.remove("bg-green-50", "bg-emerald-50", "border-green-100", "border-emerald-100");
      row.style.removeProperty("background");
      row.style.removeProperty("background-color");
      row.style.removeProperty("border-color");
      row.removeAttribute("data-current-user-row");
      row.style.removeProperty("display");
      row.style.removeProperty("visibility");
      row.removeAttribute("aria-hidden");
    });
    Array.from(section.querySelectorAll("span,strong,em,b,small")).forEach(function (node) {
      if (node.children.length > 0) return;
      const text = (node.textContent || "").trim();
      if (text !== "我" && text !== "当前用户") return;
      const row = node.closest("li,button,article,.rounded-3xl,.rounded-2xl,.rounded-xl,div");
      const rowText = (row?.textContent || "").replace(/\s+/g, "");
      if (!userName || !rowText.includes(userName.replace(/\s+/g, ""))) node.remove();
    });
    if (!window.zhixingApi?.user || !userName) return;
    const currentRow = rows.find(function (row) {
      return (row.textContent || "").replace(/\s+/g, "").includes(userName.replace(/\s+/g, ""));
    });
    if (!currentRow) return;
    currentRow.dataset.currentUserRow = "true";
    currentRow.style.setProperty("background", "#ecfdf5", "important");
    currentRow.style.setProperty("border-color", "#bbf7d0", "important");
    const nameNode = Array.from(currentRow.querySelectorAll("h1,h2,h3,h4,strong,p,span")).find(function (node) {
      return node.children.length === 0 && (node.textContent || "").trim() === userName;
    });
    if (nameNode && !nameNode.parentElement?.querySelector(".leaderboard-self-badge")) {
      const badge = document.createElement("span");
      badge.className = "leaderboard-self-badge";
      badge.textContent = "\u6211";
      badge.style.cssText = "display:inline-flex;align-items:center;height:22px;margin-left:6px;padding:0 7px;border-radius:6px;background:#dcfce7;color:#16a34a;font-size:12px;font-weight:700;vertical-align:middle;";
      nameNode.insertAdjacentElement("afterend", badge);
    }
  }

  function redBadgeKey(node) {
    const route = window.location.hash || "#/home";
    const box = node.closest("button,a,section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div") || node.parentElement;
    const text = (box?.textContent || node.textContent || "").replace(/\s+/g, "").slice(0, 80);
    return "zhixingReadBadge:" + route + ":" + text;
  }

  function looksLikeUnreadBadge(node) {
    if (!node || node.children?.length) return false;
    const text = (node.textContent || "").trim();
    if (!/^(\d{1,2}|!|！)$/.test(text)) return false;
    const cls = String(node.className || "");
    const style = node.getAttribute?.("style") || "";
    const rect = node.getBoundingClientRect?.();
    const redLike = /red|rose|pink|bg-red|bg-rose|from-red|to-red/i.test(cls + " " + style);
    const smallLike = !rect || (rect.width <= 42 && rect.height <= 42);
    const roundLike = /rounded-full|border-radius:\s*(50%|999px)/i.test(cls + " " + style);
    return smallLike && (redLike || roundLike);
  }

  function markUnreadBadgeRead(event) {
    const target = event.target?.closest?.("button,a,section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div");
    if (!target) return;
    const badges = Array.from(target.querySelectorAll("span,b,em,i,small")).filter(looksLikeUnreadBadge);
    if (!badges.length) return;
    badges.forEach(function (badge) {
      try { localStorage.setItem(redBadgeKey(badge), "1"); } catch (_error) {}
      badge.style.setProperty("display", "none", "important");
      badge.style.setProperty("visibility", "hidden", "important");
      badge.setAttribute("aria-hidden", "true");
    });
    syncGuestMessageCount();
  }

  function syncReadUnreadBadges(root) {
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("span,b,em,i,small")).filter(looksLikeUnreadBadge).forEach(function (badge) {
      try {
        if (localStorage.getItem(redBadgeKey(badge)) !== "1") return;
      } catch (_error) { return; }
      badge.style.setProperty("display", "none", "important");
      badge.style.setProperty("visibility", "hidden", "important");
      badge.setAttribute("aria-hidden", "true");
    });
  }

  function syncZhiProgressConsistency(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/\u8fdb\u5ea6|杩涘害/.test(text) || text.length > 900) return;
      const percents = Array.from(card.querySelectorAll("span,b,strong,p,small")).map(function (node) {
        const match = (node.textContent || "").match(/(\d{1,3})%/);
        return match ? Math.max(0, Math.min(100, Number(match[1]))) : null;
      }).filter(function (value) { return value !== null; });
      if (!percents.length) return;
      const percent = percents[percents.length - 1];
      Array.from(card.querySelectorAll("div,span,i")).forEach(function (bar) {
        const cls = String(bar.className || "");
        const style = bar.getAttribute("style") || "";
        const rect = bar.getBoundingClientRect?.();
        const fillLike = /bg-yellow|bg-green|bg-emerald|from-yellow|from-green|progress|h-full|rounded-full/i.test(cls) || /width:\s*\d+%/.test(style);
        if (!fillLike || (rect && rect.height > 18)) return;
        bar.style.setProperty("width", percent + "%", "important");
        bar.style.setProperty("max-width", percent + "%", "important");
        bar.style.setProperty("transform", "none", "important");
      });
      ensureSyncedZhiProgressTrack(card, percent);
    });
  }

  function ensureSyncedZhiProgressTrack(card, percent) {
    if (!card || !/(总进度|鎬昏繘搴|进度|杩涘害)/.test(card.textContent || "")) return;
    const tracks = Array.from(card.querySelectorAll("div,span")).filter(function (node) {
      if ((node.textContent || "").trim()) return false;
      const rect = node.getBoundingClientRect?.();
      const cls = String(node.className || "");
      const style = node.getAttribute("style") || "";
      const trackLike = /bg-gray|bg-slate|bg-zinc|bg-neutral|rounded-full|progress/i.test(cls) || /background/.test(style) || /width:\s*\d+%/.test(style);
      return trackLike && (!rect || (rect.width > 80 && rect.height > 4 && rect.height <= 18));
    });
    const track = tracks.sort(function (a, b) {
      const ar = a.getBoundingClientRect?.();
      const br = b.getBoundingClientRect?.();
      return (br?.width || 0) - (ar?.width || 0);
    })[0];
    if (!track) return;
    track.classList.add("zhi-synced-track");
    track.style.setProperty("--zhi-progress", percent + "%");
    let fill = track.querySelector(":scope > .zhi-synced-fill");
    if (!fill) {
      fill = document.createElement("i");
      fill.className = "zhi-synced-fill";
      track.appendChild(fill);
    }
    fill.style.setProperty("width", percent + "%", "important");
    fill.style.setProperty("max-width", percent + "%", "important");
  }

  function syncZhiTotalProgressTracks(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/(总进度|鎬昏繘搴|研学进度|鐮斿杩涘害)/.test(text) || text.length > 520) return;
      const percents = Array.from(card.querySelectorAll("span,b,strong,p,small,em")).map(function (node) {
        const match = (node.textContent || "").match(/(\d{1,3})%/);
        return match ? Math.max(0, Math.min(100, Number(match[1]))) : null;
      }).filter(function (value) { return value !== null; });
      if (!percents.length) return;
      const percent = percents[percents.length - 1];
      const track = Array.from(card.querySelectorAll("div,span")).filter(function (node) {
        if ((node.textContent || "").trim()) return false;
        const rect = node.getBoundingClientRect?.();
        const cls = String(node.className || "");
        const style = node.getAttribute("style") || "";
        const trackLike = /bg-gray|bg-slate|bg-zinc|bg-neutral|rounded-full|progress|overflow-hidden/i.test(cls) || /background|width/i.test(style);
        return trackLike && (!rect || (rect.width >= 90 && rect.height >= 4 && rect.height <= 20));
      }).sort(function (a, b) {
        return (b.getBoundingClientRect?.().width || 0) - (a.getBoundingClientRect?.().width || 0);
      })[0];
      if (!track) return;
      track.classList.add("zhi-synced-track");
      track.style.setProperty("width", "100%", "important");
      track.style.setProperty("max-width", "100%", "important");
      track.style.setProperty("transform", "none", "important");
      track.style.setProperty("--zhi-progress", percent + "%");
      Array.from(track.children).forEach(function (child) {
        if (child.classList?.contains("zhi-synced-fill")) return;
        if ((child.textContent || "").trim()) return;
        child.style.setProperty("width", "0px", "important");
        child.style.setProperty("max-width", "0px", "important");
      });
      let fill = track.querySelector(":scope > .zhi-synced-fill");
      if (!fill) {
        fill = document.createElement("i");
        fill.className = "zhi-synced-fill";
        track.appendChild(fill);
      }
      fill.style.setProperty("width", percent + "%", "important");
      fill.style.setProperty("max-width", percent + "%", "important");
    });
  }

  function syncZhiInitialProgressBars(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/(本周学习进度|任务完成率|学习进度|总进度)/.test(text)) return;
      if (!/0%/.test(text)) return;
      if (text.length > 1200) return;
      Array.from(card.querySelectorAll("div,span,i")).forEach(function (bar) {
        if (bar.children.length > 0) return;
        if ((bar.textContent || "").trim()) return;
        const cls = String(bar.className || "");
        const style = bar.getAttribute("style") || "";
        const rect = bar.getBoundingClientRect?.();
        const looksLikeFill = /bg-white|bg-green|bg-emerald|bg-yellow|from-green|from-yellow|h-full|progress/i.test(cls) || /width:\s*\d+%/.test(style);
        if (!looksLikeFill || !rect || rect.width < 24 || rect.height > 18) return;
        bar.style.setProperty("width", "0px", "important");
        bar.style.setProperty("max-width", "0px", "important");
        bar.style.setProperty("transform", "scaleX(0)", "important");
        bar.style.setProperty("transform-origin", "left center", "important");
      });
    });
  }

  function syncCleanZhiProgressFromTaskCount(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/(研学进度|总进度|进度)/.test(text) || text.length > 900) return;
      const match = text.match(/(\d{1,3})\/(\d{1,3})任务/);
      if (!match || Number(match[2]) <= 0) return;
      const percent = Math.max(0, Math.min(100, Math.round(Number(match[1]) / Number(match[2]) * 100)));
      Array.from(card.querySelectorAll("span,b,strong,p,small,em")).forEach(function (node) {
        if (/^\d{1,3}%$/.test((node.textContent || "").trim())) node.textContent = percent + "%";
      });
      const tracks = Array.from(card.querySelectorAll("div,span")).filter(function (node) {
        if ((node.textContent || "").trim()) return false;
        const rect = node.getBoundingClientRect?.();
        const cls = String(node.className || "");
        const style = node.getAttribute("style") || "";
        const trackLike = /bg-gray|bg-slate|bg-zinc|bg-neutral|rounded-full|overflow-hidden|progress/i.test(cls) || /background|width/i.test(style);
        return trackLike && (!rect || (rect.width >= 90 && rect.height >= 4 && rect.height <= 22));
      }).sort(function (a, b) {
        return (b.getBoundingClientRect?.().width || 0) - (a.getBoundingClientRect?.().width || 0);
      });
      const track = tracks[0];
      if (!track) return;
      track.classList.add("zhi-synced-track");
      track.style.setProperty("position", "relative", "important");
      track.style.setProperty("width", "100%", "important");
      track.style.setProperty("max-width", "100%", "important");
      track.style.setProperty("--zhi-progress", percent + "%");
      Array.from(track.children).forEach(function (child) {
        if (child.classList?.contains("zhi-synced-fill")) return;
        if ((child.textContent || "").trim()) return;
        child.style.setProperty("width", "0px", "important");
        child.style.setProperty("max-width", "0px", "important");
        child.style.setProperty("transform", "scaleX(0)", "important");
      });
      let fill = track.querySelector(":scope > .zhi-synced-fill");
      if (!fill) {
        fill = document.createElement("i");
        fill.className = "zhi-synced-fill";
        track.appendChild(fill);
      }
      fill.style.setProperty("width", percent + "%", "important");
      fill.style.setProperty("max-width", percent + "%", "important");
    });
  }

  function resetStudentDemoTaskCardsToZero(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    if (user && !["student", "parent"].includes(user.role)) return;
    const scope = root?.querySelectorAll ? root : document;
    const titles = ["绘制东归路线图", "小组分享演讲"];
    Array.from(scope.querySelectorAll("section,article,li,button,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!titles.some(function (title) { return text.includes(title); })) return;
      if (text.length > 900) return;
      Array.from(card.querySelectorAll("span,b,strong,p,small,em")).forEach(function (node) {
        const value = (node.textContent || "").trim();
        if (/^\d{1,3}%$/.test(value)) node.textContent = "0%";
      });
      Array.from(card.querySelectorAll("div,span,i")).forEach(function (bar) {
        if ((bar.textContent || "").trim()) return;
        const cls = String(bar.className || "");
        const style = bar.getAttribute("style") || "";
        const rect = bar.getBoundingClientRect?.();
        const barLike = /progress|rounded-full|h-full|bg-green|bg-emerald|from-green|to-green|bg-yellow|from-yellow|to-yellow/i.test(cls) || /width:\s*\d+%/.test(style);
        if (!barLike || (rect && rect.height > 24)) return;
        bar.style.setProperty("width", "0%", "important");
        bar.style.setProperty("max-width", "0%", "important");
        bar.style.setProperty("transform", "scaleX(0)", "important");
        bar.style.setProperty("transform-origin", "left center", "important");
      });
      try {
        titles.forEach(function (title) {
          if (!text.includes(title)) return;
          localStorage.removeItem("zhiTaskState:" + title);
          localStorage.removeItem("zhixingTaskState:" + title);
        });
      } catch (_error) {}
    });
  }

  function resetUnstartedZhiTaskCardsToZero(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const user = window.zhixingApi?.user;
    if (user && !["student", "parent"].includes(user.role)) return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("button,a,[role='button']")).forEach(function (action) {
      const actionText = (action.textContent || "").replace(/\s+/g, "");
      if (!actionText || !actionText.includes("\u5f00\u59cb")) return;
      const card = action.closest("section,article,li,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white");
      if (!card || card.id === "root") return;
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/\d{1,3}%/.test(text) || text.length > 900) return;
      Array.from(card.querySelectorAll("span,b,strong,p,small,em")).forEach(function (node) {
        const value = (node.textContent || "").trim();
        if (/^\d{1,3}%$/.test(value)) node.textContent = "0%";
      });
      Array.from(card.querySelectorAll("div,span,i")).forEach(function (bar) {
        if ((bar.textContent || "").trim()) return;
        const cls = String(bar.className || "");
        const style = bar.getAttribute("style") || "";
        const rect = bar.getBoundingClientRect?.();
        const fillLike = /h-full|bg-green|bg-emerald|from-green|to-green|bg-yellow|from-yellow|to-yellow|zhi-synced-fill/i.test(cls) || /width:\s*\d+%/.test(style);
        if (!fillLike || (rect && rect.height > 24)) return;
        bar.style.setProperty("width", "0%", "important");
        bar.style.setProperty("max-width", "0%", "important");
        bar.style.setProperty("transform", "scaleX(0)", "important");
        bar.style.setProperty("transform-origin", "left center", "important");
      });
    });
  }

  function syncHistoryQuizTaskToSixty(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("section,article,li,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/历史知识测验|\u5386\u53f2\u77e5\u8bc6\u6d4b\u9a8c/.test(text) || text.length > 900) return;
      Array.from(card.querySelectorAll("span,b,strong,p,small,em")).forEach(function (node) {
        if (/^\d{1,3}%$/.test((node.textContent || "").trim())) node.textContent = "60%";
      });
      Array.from(card.querySelectorAll("button,a,[role='button']")).forEach(function (button) {
        const value = (button.textContent || "").replace(/\s+/g, "");
        if (value === "开始" || value === "\u5f00\u59cb") button.textContent = "继续";
      });
      Array.from(card.querySelectorAll("div,span,i")).forEach(function (bar) {
        if ((bar.textContent || "").trim()) return;
        const cls = String(bar.className || "");
        const style = bar.getAttribute("style") || "";
        const rect = bar.getBoundingClientRect?.();
        const fillLike = /h-full|bg-green|bg-emerald|bg-yellow|from-green|from-yellow|to-green|to-yellow|zhi-synced-fill/i.test(cls) || /width:\s*\d+%/.test(style);
        if (!fillLike || (rect && rect.height > 24)) return;
        bar.style.setProperty("width", "60%", "important");
        bar.style.setProperty("max-width", "60%", "important");
        bar.style.setProperty("transform", "none", "important");
      });
    });
  }

  function closestPreciseZhiTaskCard(titleNode) {
    let current = titleNode;
    while (current && current !== document.body) {
      const text = (current.textContent || "").replace(/\s+/g, "");
      const rect = current.getBoundingClientRect?.();
      const cardLike = current.matches?.("section,article,li,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div") &&
        text.length > 30 && text.length < 560 && (!rect || (rect.width > 240 && rect.height > 100 && rect.height < 560));
      if (cardLike) return current;
      current = current.parentElement;
    }
    return titleNode.closest("section,article,li,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white") || titleNode.parentElement;
  }

  function setPreciseZhiTaskCardProgress(card, percent, actionLabel) {
    if (!card) return;
    Array.from(card.querySelectorAll("span,b,strong,p,small,em")).forEach(function (node) {
      if (/^\d{1,3}%$/.test((node.textContent || "").trim())) node.textContent = percent + "%";
    });
    Array.from(card.querySelectorAll("button,a,[role='button']")).forEach(function (button) {
      const value = (button.textContent || "").replace(/\s+/g, "");
      if (/^(开始|继续|查看成果|寮€濮?|缁х画)$/.test(value)) button.textContent = actionLabel;
    });
    Array.from(card.querySelectorAll("div,span,i")).forEach(function (bar) {
      if ((bar.textContent || "").trim()) return;
      const cls = String(bar.className || "");
      const style = bar.getAttribute("style") || "";
      const rect = bar.getBoundingClientRect?.();
      const fillLike = /h-full|bg-green|bg-emerald|bg-yellow|from-green|from-yellow|to-green|to-yellow|zhi-synced-fill/i.test(cls) || /width:\s*\d+%/.test(style);
      if (!fillLike || (rect && rect.height > 24)) return;
      bar.style.setProperty("width", percent + "%", "important");
      bar.style.setProperty("max-width", percent + "%", "important");
      bar.style.setProperty("transform", percent === 0 ? "scaleX(0)" : "none", "important");
      bar.style.setProperty("transform-origin", "left center", "important");
    });
    const track = Array.from(card.querySelectorAll("div,span")).filter(function (node) {
      if ((node.textContent || "").trim()) return false;
      const rect = node.getBoundingClientRect?.();
      const cls = String(node.className || "");
      const style = node.getAttribute("style") || "";
      const trackLike = /rounded-full|overflow-hidden|bg-gray|bg-slate|bg-zinc|bg-neutral|progress/i.test(cls) || /background|width/i.test(style);
      return trackLike && (!rect || (rect.width >= 120 && rect.height >= 4 && rect.height <= 24));
    }).sort(function (a, b) {
      return (b.getBoundingClientRect?.().width || 0) - (a.getBoundingClientRect?.().width || 0);
    })[0];
    if (track) {
      track.classList.add("zhi-synced-track");
      track.style.setProperty("position", "relative", "important");
      track.style.setProperty("overflow", "hidden", "important");
      track.style.setProperty("--zhi-progress", percent + "%");
      Array.from(track.children).forEach(function (child) {
        if (child.classList?.contains("zhi-synced-fill")) return;
        if ((child.textContent || "").trim()) return;
        child.style.setProperty("width", "0", "important");
        child.style.setProperty("max-width", "0", "important");
        child.style.setProperty("transform", "scaleX(0)", "important");
      });
      let fill = track.querySelector(":scope > .zhi-synced-fill");
      if (!fill) {
        fill = document.createElement("i");
        fill.className = "zhi-synced-fill";
        track.appendChild(fill);
      }
      fill.style.setProperty("display", "block", "important");
      fill.style.setProperty("height", "100%", "important");
      fill.style.setProperty("width", percent + "%", "important");
      fill.style.setProperty("max-width", percent + "%", "important");
      fill.style.setProperty("transform", "none", "important");
      fill.style.setProperty("background", "linear-gradient(90deg,#2563eb,#3b82f6)", "important");
    }
  }

  function syncHistoryQuizTaskToSixty(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("h1,h2,h3,h4,strong,p,span")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!(text === "历史知识测验" || text === "\u5386\u53f2\u77e5\u8bc6\u6d4b\u9a8c" || /鍘嗗彶鐭ヨ瘑娴嬮獙/.test(text))) return;
      setPreciseZhiTaskCardProgress(closestPreciseZhiTaskCard(node), 60, "继续");
    });
  }

  function syncHistoryQuizBlueProgressTrack(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("h1,h2,h3,h4,strong,p,span")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!(text === "历史知识测验" || text === "\u5386\u53f2\u77e5\u8bc6\u6d4b\u9a8c" || /鍘嗗彶鐭ヨ瘑娴嬮獙/.test(text))) return;
      const card = closestPreciseZhiTaskCard(node);
      if (!card) return;
      Array.from(card.querySelectorAll("div,span,i")).forEach(function (bar) {
        if ((bar.textContent || "").trim()) return;
        const rect = bar.getBoundingClientRect?.();
        const cls = String(bar.className || "");
        const style = bar.getAttribute("style") || "";
        const horizontalBar = (!rect || (rect.width >= 90 && rect.height >= 3 && rect.height <= 18));
        const barLike = horizontalBar && (/rounded-full|overflow-hidden|bg-gray|bg-slate|bg-zinc|bg-neutral|progress|h-1|h-2|h-full/i.test(cls) || /background|width|height/i.test(style));
        if (!barLike) return;
        const parentRect = bar.parentElement?.getBoundingClientRect?.();
        const looksLikeFill = parentRect && rect && rect.width < parentRect.width - 8;
        if (looksLikeFill || /width:\s*60%/.test(style) || /h-full|zhi-synced-fill/i.test(cls)) {
          bar.style.setProperty("width", "60%", "important");
          bar.style.setProperty("max-width", "60%", "important");
          bar.style.setProperty("background", "linear-gradient(90deg,#2563eb,#3b82f6)", "important");
          bar.style.setProperty("transform", "none", "important");
          return;
        }
        bar.classList.add("zhi-synced-track");
        bar.style.setProperty("position", "relative", "important");
        bar.style.setProperty("overflow", "hidden", "important");
        bar.style.setProperty("--zhi-progress", "60%");
        let fill = bar.querySelector(":scope > .zhi-synced-fill");
        if (!fill) {
          fill = document.createElement("i");
          fill.className = "zhi-synced-fill";
          bar.appendChild(fill);
        }
        fill.style.setProperty("display", "block", "important");
        fill.style.setProperty("height", "100%", "important");
        fill.style.setProperty("width", "60%", "important");
        fill.style.setProperty("max-width", "60%", "important");
        fill.style.setProperty("background", "linear-gradient(90deg,#2563eb,#3b82f6)", "important");
        fill.style.setProperty("transform", "none", "important");
      });
    });
  }

  function syncOtherDemoTaskCardsToZero(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    const titles = [/绘制东归路线图|\u7ed8\u5236\u4e1c\u5f52\u8def\u7ebf\u56fe|缁樺埗涓滃綊璺嚎鍥?/, /小组分享演讲|\u5c0f\u7ec4\u5206\u4eab\u6f14\u8bb2|灏忕粍鍒嗕韩婕旇/];
    Array.from(scope.querySelectorAll("h1,h2,h3,h4,strong,p,span")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!titles.some(function (pattern) { return pattern.test(text); })) return;
      setPreciseZhiTaskCardProgress(closestPreciseZhiTaskCard(node), 0, "开始");
    });
  }

  function percentFromProgressText(text) {
    const clean = String(text || "").replace(/\s+/g, "");
    const percentMatch = clean.match(/(\d{1,3})%/);
    if (percentMatch) return Math.max(0, Math.min(100, Number(percentMatch[1])));
    const ratioMatch = clean.match(/(\d{1,4})\/(\d{1,4})(?:任务|已完成|完成|项|个|条)?/);
    if (ratioMatch && Number(ratioMatch[2]) > 0) {
      return Math.max(0, Math.min(100, Math.round(Number(ratioMatch[1]) / Number(ratioMatch[2]) * 100)));
    }
    return null;
  }

  function syncDisplayedTotalProgressBars(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/总进度/.test(text) || text.length > 520) return;
      const percent = percentFromProgressText(text);
      if (percent === null) return;
      const track = Array.from(card.querySelectorAll("div,span")).filter(function (node) {
        if ((node.textContent || "").trim()) return false;
        const rect = node.getBoundingClientRect?.();
        const cls = String(node.className || "");
        const style = node.getAttribute("style") || "";
        const trackLike = /rounded-full|overflow-hidden|bg-gray|bg-slate|bg-zinc|bg-neutral|progress/i.test(cls) || /background|width/i.test(style);
        return trackLike && (!rect || (rect.width >= 100 && rect.height >= 4 && rect.height <= 24));
      }).sort(function (a, b) {
        return (b.getBoundingClientRect?.().width || 0) - (a.getBoundingClientRect?.().width || 0);
      })[0];
      if (!track) return;
      track.style.setProperty("position", "relative", "important");
      track.style.setProperty("overflow", "hidden", "important");
      track.style.setProperty("width", "100%", "important");
      track.style.setProperty("max-width", "100%", "important");
      track.style.setProperty("--zhi-progress", percent + "%");
      Array.from(track.children).forEach(function (child) {
        if (child.classList?.contains("zhi-synced-fill")) return;
        if ((child.textContent || "").trim()) return;
        child.style.setProperty("width", "0", "important");
        child.style.setProperty("max-width", "0", "important");
        child.style.setProperty("transform", "scaleX(0)", "important");
      });
      let fill = track.querySelector(":scope > .zhi-synced-fill");
      if (!fill) {
        fill = document.createElement("i");
        fill.className = "zhi-synced-fill";
        track.appendChild(fill);
      }
      fill.style.setProperty("display", "block", "important");
      fill.style.setProperty("height", "100%", "important");
      fill.style.setProperty("width", percent + "%", "important");
      fill.style.setProperty("max-width", percent + "%", "important");
      fill.style.setProperty("transform", "none", "important");
      fill.style.setProperty("background", "linear-gradient(90deg,#2563eb,#3b82f6)", "important");
    });
  }

  function syncExactTotalProgressPercentBars(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    Array.from(scope.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/(总进度|\u603b\u8fdb\u5ea6|鎬昏繘搴)/.test(text) || text.length > 520) return;
      const percent = percentFromProgressText(text);
      if (percent === null) return;
      const track = Array.from(card.querySelectorAll("div,span")).filter(function (node) {
        if ((node.textContent || "").trim()) return false;
        const rect = node.getBoundingClientRect?.();
        const cls = String(node.className || "");
        const style = node.getAttribute("style") || "";
        const trackLike = /rounded-full|overflow-hidden|bg-gray|bg-slate|bg-zinc|bg-neutral|progress/i.test(cls) || /background|width/i.test(style);
        return trackLike && (!rect || (rect.width >= 120 && rect.height >= 4 && rect.height <= 24));
      }).sort(function (a, b) {
        return (b.getBoundingClientRect?.().width || 0) - (a.getBoundingClientRect?.().width || 0);
      })[0];
      if (!track) return;
      track.classList.add("zhi-synced-track");
      track.style.setProperty("position", "relative", "important");
      track.style.setProperty("overflow", "hidden", "important");
      track.style.setProperty("width", "100%", "important");
      track.style.setProperty("max-width", "100%", "important");
      track.style.setProperty("--zhi-progress", percent + "%");
      Array.from(track.children).forEach(function (child) {
        if (child.classList?.contains("zhi-synced-fill")) return;
        if ((child.textContent || "").trim()) return;
        child.style.setProperty("width", "0", "important");
        child.style.setProperty("max-width", "0", "important");
        child.style.setProperty("transform", "scaleX(0)", "important");
      });
      let fill = track.querySelector(":scope > .zhi-synced-fill");
      if (!fill) {
        fill = document.createElement("i");
        fill.className = "zhi-synced-fill";
        track.appendChild(fill);
      }
      fill.style.setProperty("display", "block", "important");
      fill.style.setProperty("height", "100%", "important");
      fill.style.setProperty("width", percent + "%", "important");
      fill.style.setProperty("max-width", percent + "%", "important");
      fill.style.setProperty("transform", "none", "important");
      fill.style.setProperty("background", "linear-gradient(90deg,#2563eb,#3b82f6)", "important");
    });
  }

  function syncZhiTotalProgressFromTaskBadge(root) {
    if (window.location.hash !== "#/zhi-xing") return;
    const scope = root?.querySelectorAll ? root : document;
    const pageText = (document.getElementById("main-content") || document.body).textContent || "";
    const ratioMatch = pageText.replace(/\s+/g, "").match(/(\d{1,3})\/(\d{1,3})任务/);
    if (!ratioMatch || Number(ratioMatch[2]) <= 0) return;
    const percent = Math.max(0, Math.min(100, Math.round(Number(ratioMatch[1]) / Number(ratioMatch[2]) * 100)));
    Array.from(scope.querySelectorAll("section,article,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,div")).forEach(function (card) {
      const text = (card.textContent || "").replace(/\s+/g, "");
      if (!/(总进度|\u603b\u8fdb\u5ea6|鎬昏繘搴)/.test(text) || text.length > 520) return;
      let percentNode = Array.from(card.querySelectorAll("span,b,strong,p,small,em")).find(function (node) {
        return /^\d{1,3}%$/.test((node.textContent || "").trim());
      });
      if (!percentNode) {
        percentNode = document.createElement("strong");
        percentNode.className = "zhi-total-percent-fixed";
        card.appendChild(percentNode);
      }
      percentNode.textContent = percent + "%";
      const track = Array.from(card.querySelectorAll("div,span")).filter(function (node) {
        if ((node.textContent || "").trim()) return false;
        const rect = node.getBoundingClientRect?.();
        const cls = String(node.className || "");
        const style = node.getAttribute("style") || "";
        const trackLike = /rounded-full|overflow-hidden|bg-gray|bg-slate|bg-zinc|bg-neutral|progress/i.test(cls) || /background|width/i.test(style);
        return trackLike && (!rect || (rect.width >= 120 && rect.height >= 4 && rect.height <= 24));
      }).sort(function (a, b) {
        return (b.getBoundingClientRect?.().width || 0) - (a.getBoundingClientRect?.().width || 0);
      })[0];
      if (!track) return;
      track.classList.add("zhi-synced-track");
      track.style.setProperty("position", "relative", "important");
      track.style.setProperty("overflow", "hidden", "important");
      track.style.setProperty("width", "100%", "important");
      track.style.setProperty("max-width", "100%", "important");
      track.style.setProperty("--zhi-progress", percent + "%");
      Array.from(track.children).forEach(function (child) {
        if (child.classList?.contains("zhi-synced-fill")) return;
        if ((child.textContent || "").trim()) return;
        child.style.setProperty("width", "0", "important");
        child.style.setProperty("max-width", "0", "important");
        child.style.setProperty("transform", "scaleX(0)", "important");
      });
      let fill = track.querySelector(":scope > .zhi-synced-fill");
      if (!fill) {
        fill = document.createElement("i");
        fill.className = "zhi-synced-fill";
        track.appendChild(fill);
      }
      fill.style.setProperty("display", "block", "important");
      fill.style.setProperty("height", "100%", "important");
      fill.style.setProperty("width", percent + "%", "important");
      fill.style.setProperty("max-width", percent + "%", "important");
      fill.style.setProperty("transform", "none", "important");
      fill.style.setProperty("background", "linear-gradient(90deg,#2563eb,#3b82f6)", "important");
    });
  }

  function syncAllProgressBarsWithNumbers(root) {
    const scope = root?.querySelectorAll ? root : document;
    const containers = Array.from(scope.querySelectorAll("section,article,li,button,.rounded-3xl,.rounded-2xl,.rounded-xl,.bg-white,.profile-panel-summary,.zhi-task-progress,.zhi-task-inline-progress,div"));
    containers.forEach(function (box) {
      const text = (box.textContent || "").replace(/\s+/g, "");
      if (!/(进度|完成|任务|progress|%|\/)/i.test(text) || text.length > 900) return;
      const percent = percentFromProgressText(text);
      if (percent === null) return;
      const tracks = Array.from(box.querySelectorAll("div,span")).filter(function (node) {
        if ((node.textContent || "").trim()) return false;
        const rect = node.getBoundingClientRect?.();
        const cls = String(node.className || "");
        const style = node.getAttribute("style") || "";
        const trackLike = /progress|rounded-full|overflow-hidden|bg-gray|bg-slate|bg-zinc|bg-neutral|bg-white/i.test(cls) || /background|width/i.test(style);
        return trackLike && (!rect || (rect.width >= 36 && rect.height >= 3 && rect.height <= 24));
      });
      tracks.forEach(function (track) {
        const rect = track.getBoundingClientRect?.();
        const childFills = Array.from(track.children).filter(function (child) {
          if ((child.textContent || "").trim()) return false;
          const cls = String(child.className || "");
          const style = child.getAttribute("style") || "";
          return /progress|h-full|bg-green|bg-emerald|bg-blue|bg-yellow|from-|to-|rounded-full/i.test(cls) || /width:\s*\d/.test(style);
        });
        let fill = childFills[0] || track.querySelector(":scope > .zhi-synced-fill");
        if (!fill && (!rect || rect.width >= 80)) {
          fill = document.createElement("i");
          fill.className = "zhi-synced-fill";
          track.appendChild(fill);
        }
        if (!fill) return;
        track.style.setProperty("position", "relative", "important");
        track.style.setProperty("overflow", "hidden", "important");
        track.style.setProperty("--zhi-progress", percent + "%");
        fill.style.setProperty("display", "block", "important");
        fill.style.setProperty("height", "100%", "important");
        fill.style.setProperty("width", percent + "%", "important");
        fill.style.setProperty("max-width", percent + "%", "important");
        fill.style.setProperty("transform", "none", "important");
        fill.style.setProperty("background", "linear-gradient(90deg,#2563eb,#3b82f6)", "important");
        fill.style.setProperty("border-radius", "inherit", "important");
        fill.style.setProperty("z-index", "3", "important");
      });
    });
  }

  function syncGuestEnrollmentMeta() {
    if (window.zhixingApi?.user) return;
    const privateMetaPattern = /\u7b2c\s*\d+\s*\u671f\s*\u8fdb\u884c\u4e2d|\u5185\u8499\u53e4\s*[·\u00b7]\s*\u627f\u5fb7\s*[·\u00b7]/;
    Array.from(document.querySelectorAll("p,span,small,div")).forEach(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      if (!text || text.length > 80 || !privateMetaPattern.test(text)) return;
      const row = node.closest("p,small") || node.closest("div.flex,div[class*='flex']") || node;
      if (!row || row.id === "root" || row.parentElement?.id === "root") return;
      row.style.setProperty("display", "none", "important");
      row.style.setProperty("visibility", "hidden", "important");
      row.setAttribute("aria-hidden", "true");
    });
  }

  function lockGuestProfileSection(title) {
    const heading = Array.from(document.querySelectorAll("h2,h3")).find(function (node) { return node.textContent.includes(title); });
    const section = heading?.closest("section,div.bg-white,div.card-shadow") || heading?.parentElement;
    if (!section) return;
    Array.from(section.children).forEach(function (child) {
      if (child.contains(heading) || child.classList?.contains("guest-profile-notice")) return;
      child.style.display = "none";
    });
    if (!section.querySelector(".guest-profile-notice")) {
      const notice = document.createElement("div");
      notice.className = "guest-profile-notice";
      notice.textContent = "登录后查看" + title + "数据";
      section.appendChild(notice);
    }
  }

  function syncGuestProfilePrivateSections() {
    if (window.zhixingApi?.user) return;
    if (window.location.hash !== "#/profile") return;
    ["研学日记", "学习证书", "研学护照", "知识点", "勋章"].forEach(lockGuestProfileSection);
    Array.from(document.querySelectorAll(".profile-certificates-list")).forEach(function (list) { list.style.display = "none"; });
    const demoTerms = ["草原第一日", "历史的震撼", "小组合作的力量", "土尔扈特部回归研学证书", "草原生态系统调研证书", "清代历史文化研修证书", "承德🌿", "神农架", "文昌"];
    demoTerms.forEach(function (term) {
      Array.from(document.querySelectorAll("p,span,strong,h2,h3,h4,small,div")).forEach(function (node) {
        if (!node.textContent.includes(term)) return;
        const item = node.closest(".profile-certificates-list, .profile-detail-row, .profile-badge-item, .border, .flex-shrink-0");
        if (item) item.style.display = "none";
      });
    });
  }

  function syncGuestInitialState() {
    cleanupAfterLogout();
    syncGuestRouteState();
    syncGuestMessageCount();
    syncGuestPrivateRoutes();
    syncGuestZhiProgress();
    syncZhiAccessState();
    syncGuestLearningMapState();
    syncGuestProfileState();
    syncRoleProfileIdentity();
    syncRoleRestrictedProfileSections();
    syncRoleRestrictedLearningSections();
    restoreProfileContainers();
    syncRoleProfileStudentOnlyBlocks();
    syncRoleRouteExperience();
    moveProfileRolePanelsBelowAvatar();
    bindProfileBottomActions();
    syncRoleProfileFunctionMenu();
    syncAdminControlCenter();
    restoreProfileInteractivity();
    window.clearTimeout(roleProfileMenuRetryTimer);
    if (window.location.hash === "#/profile") roleProfileMenuRetryTimer = window.setTimeout(syncRoleProfileFunctionMenu, 180);
    syncParentZhiActions();
    hideParentZhiCheckinButton();
    syncTeacherZhiLayout();
    syncRoleHomeStudentBlocks();
    syncGuestHomeState();
    syncGuestProfileBadges();
    syncGuestProfilePrivateSections();
    setLeaderboardCurrentUser();
    syncReadUnreadBadges(document);
    syncZhiProgressConsistency(document);
    syncCleanZhiProgressFromTaskCount(document);
    syncDisplayedTotalProgressBars(document);
    syncExactTotalProgressPercentBars(document);
    syncZhiTotalProgressFromTaskBadge(document);
    resetStudentDemoTaskCardsToZero(document);
    resetUnstartedZhiTaskCardsToZero(document);
    syncHistoryQuizTaskToSixty(document);
    syncHistoryQuizBlueProgressTrack(document);
    syncOtherDemoTaskCardsToZero(document);
    syncZhiTotalProgressFromTaskBadge(document);
    syncZhiInitialProgressBars(document);
    hideGuestProfileTodos();
    syncGuestGreyAvatars();
    syncGuestPublicNames();
    syncGuestEnrollmentMeta();
    syncGuestZeroProgressBars();
    syncGuestCourseEnrollmentState();
    syncGuestCourseInitialState();
    hideGuestPrivateBits(document);
    syncGuestMessageState();
    restoreGuestHomeHeaderPublic();
    hideGuestHomeHeaderIdentity();
    hideGuestHomeSearchLocation();
  }

  function syncGrasslandPostAuthor() {
    const excerpt = "今天在草原上看到了成群的牛羊";
    const authorName = "张思远";
    const currentName = String(window.zhixingApi?.user?.displayName || "").trim();
    Array.from(document.querySelectorAll("p,span,strong,h1,h2,h3,h4,h5,h6")).forEach(function (node) {
      if (node.children.length > 0 || !/^(研学同学|张小华|张思远|我)$/.test(node.textContent.trim())) return;
      let scope = node.parentElement;
      for (let depth = 0; scope && depth < 8; depth += 1, scope = scope.parentElement) {
        if (!scope.textContent.includes(excerpt)) continue;
        node.textContent = currentName === authorName ? "我" : authorName;
        node.dataset.communityAuthorFixed = "true";
        break;
      }
    });
  }

  const demoMessagePopupTexts = [
    "老师回复了你的问题",
    "小明赞了你的研学日记",
    "你报名的课程即将开始，请做好准备",
    "今日学习任务已更新"
  ];

  function removeDemoMessagePopups() {
    if (window.location.hash !== "#/message") return;
    document.querySelectorAll("span, p, h4").forEach(function (node) {
      const text = node.textContent.trim();
      if (!demoMessagePopupTexts.some(function (message) { return text.includes(message); })) return;
      const popup = node.closest('[role="alert"]') || node.closest('div[class*="bg-black"]');
      if (popup) {
        popup.style.display = "none";
        popup.setAttribute("aria-hidden", "true");
      }
    });
  }

  function hasRealAccount() {
    const user = window.zhixingApi && window.zhixingApi.user;
    if (!user || !user.id || !user.role) return false;
    if (user.role === "guest") return false;
    if (/游客|未登录/.test(String(user.displayName || user.name || ""))) return false;
    return true;
  }

  function ensureSmartToastStyle() {
    if (document.getElementById("smart-auth-toast-style")) return;
    const style = document.createElement("style");
    style.id = "smart-auth-toast-style";
    style.textContent = `
      .smart-user-toast {
        min-width: min(342px, calc(100vw - 32px)) !important;
        max-width: min(380px, calc(100vw - 32px)) !important;
        padding: 12px 14px !important;
        border: 1px solid rgba(255,255,255,.42) !important;
        border-radius: 8px !important;
        background: linear-gradient(135deg, rgba(15,23,42,.94), rgba(30,41,59,.9)) !important;
        box-shadow: 0 18px 44px rgba(15,23,42,.28), inset 0 1px 0 rgba(255,255,255,.16) !important;
        color: #fff !important;
        backdrop-filter: blur(14px) saturate(1.25) !important;
      }
      .smart-user-toast span {
        display: block !important;
        min-width: 0 !important;
        color: #fff !important;
        font-size: 13px !important;
        font-weight: 700 !important;
        line-height: 1.35 !important;
        letter-spacing: 0 !important;
        white-space: normal !important;
      }
      .smart-user-toast span::after {
        display: block;
        margin-top: 3px;
        color: rgba(226,232,240,.86);
        font-size: 10px;
        font-weight: 500;
        line-height: 1.35;
        content: attr(data-smart-subtitle);
      }
    `;
    document.head.appendChild(style);
  }

  function smartToastContent() {
    const user = window.zhixingApi?.user;
    const summary = window.zhixingApi?.summary || {};
    if (!user) return null;
    if (user.role === "teacher") return { title: "教师工作台已同步", subtitle: "待批作业、学生提交和课程通知会按班级实时更新" };
    if (user.role === "parent") return { title: "家长提醒已同步", subtitle: "孩子的学习记录、作业反馈和证书动态会在消息中更新" };
    if (user.role === "admin") return { title: "管理后台已同步", subtitle: "账号审核、社区审核和平台告警会按权限显示" };
    const progress = Number(summary.progress || 0);
    const active = Number(summary.active || 0);
    const completed = Number(summary.completed || 0);
    if (active > 0) return { title: "学习任务已同步", subtitle: "当前进度 " + progress + "%，进行中 " + active + " 项，已完成 " + completed + " 项" };
    return { title: "研学账号已就绪", subtitle: "参加课程后会显示任务、作业、学习记录和证书进度" };
  }

  function syncSmartUserToasts() {
    ensureSmartToastStyle();
    const hideToast = function (toast) {
      toast.style.setProperty("display", "none", "important");
      toast.style.setProperty("visibility", "hidden", "important");
      toast.setAttribute("aria-hidden", "true");
    };
    document.querySelectorAll('[role="alert"], div[class*="bg-black"], div[class*="toast"], div[class*="Toast"], div[class*="fixed"], div[class*="absolute"]').forEach(function (toast) {
      if (toast.closest?.(".backend-account-button,.stable-auth-float") || toast.dataset.stableAccountFloat === "true") return;
      const text = (toast.textContent || "").replace(/\s+/g, "");
      const toastShape = /fixed|absolute|toast|Toast|bg-black|alert/i.test(String(toast.className || "") + " " + (toast.getAttribute("role") || ""));
      if (!text && toastShape && toast.id !== "root" && toast.parentElement?.id !== "root") {
        hideToast(toast);
        return;
      }
      const fakeLearningToast = /\u5b66\u4e60\u4efb\u52a1\u5df2\u540c\u6b65|\u5f53\u524d\u8fdb\u5ea6|\u8fdb\u884c\u4e2d\d*\u9879|\u5df2\u5b8c\u6210\d*\u9879|瀛︿範浠诲姟宸插悓姝|褰撳墠杩涘害|杩涜涓|宸插畬鎴/.test(text);
      if (fakeLearningToast) {
        if (toast.id === "root" || toast.parentElement?.id === "root" || text.length > 180 || !toastShape) return;
        hideToast(toast);
        return;
      }
      const isSystemToast = /系统消息|今日学习任务已更新|老师回复|课程即将开始|已添加好友|消息已更新|已更新/.test(text);
      if (!isSystemToast) return;
      if (!hasRealAccount()) {
        hideToast(toast);
        return;
      }
      const content = smartToastContent();
      if (!content) {
        hideToast(toast);
        return;
      }
      toast.classList.add("smart-user-toast");
      toast.style.display = "";
      toast.removeAttribute("aria-hidden");
      const label = toast.querySelector("span") || toast.querySelector("p") || toast;
      label.textContent = content.title;
      label.setAttribute("data-smart-subtitle", content.subtitle);
    });
  }

  const dongguiTeamPostPhotos = [
    {
      url: "./assets/images/donggui-team-1.jpg",
      alt: "中国中学生研学小组"
    },
    {
      url: "./assets/images/donggui-team-2.jpg",
      alt: "中国少年课堂讨论"
    },
    {
      url: "./assets/images/donggui-team-3.jpg",
      alt: "中国学生研学绘制记录"
    }
  ];

  function replaceDongguiTeamPostImages(root) {
    const scope = root?.querySelectorAll ? root : document;
    const cards = Array.from(scope.querySelectorAll("article, section, li, div")).filter(function (node) {
      const text = (node.textContent || "").replace(/\s+/g, "");
      return text.includes("小组合作完成了东归路线图") || text.includes("东归路线图的绘制") || text.includes("小组合作") && text.includes("研学成果");
    });
    cards.forEach(function (card) {
      const images = Array.from(card.querySelectorAll("img")).filter(function (img) {
        return !img.closest(".extra-post-author") && !img.closest("header") && img.width !== 42 && img.height !== 42;
      });
      if (images.length < 2) return;
      images.slice(-3).forEach(function (img, index) {
        const photo = dongguiTeamPostPhotos[index % dongguiTeamPostPhotos.length];
        const nextUrl = new URL(photo.url, window.location.href).href;
        img.removeAttribute("srcset");
        img.removeAttribute("sizes");
        img.alt = photo.alt;
        markImageFast(img, true);
        if (img.src !== nextUrl) img.src = photo.url;
        img.dataset.realSource = "Local original photo";
        img.dataset.dongguiPhotoUrl = nextUrl;
      });
      card.dataset.dongguiPhotosFixed = "true";
    });
  }

  function keepDongguiTeamPostImagesStable() {
    let ticks = 0;
    const run = function () {
      ticks += 1;
      replaceDongguiTeamPostImages(document);
      if (ticks < 32) window.setTimeout(run, 250);
    };
    run();
  }

  function keepAccountFloatStable() {
    syncAccountFloatLayer();
    window.requestAnimationFrame?.(syncAccountFloatLayer);
    window.setTimeout(syncAccountFloatLayer, 120);
    window.setTimeout(syncAccountFloatLayer, 500);
    if (window.__zhixingAccountFloatTimer) return;
    window.__zhixingAccountFloatTimer = window.setInterval(function () {
      const button = document.getElementById("stable-auth-float");
      if (!button) return syncAccountFloatLayer();
      const style = window.getComputedStyle(button);
      const rect = button.getBoundingClientRect();
      if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0 || button.getAttribute("aria-hidden") === "true" || rect.width < 20 || rect.height < 20) {
        syncAccountFloatLayer();
      }
    }, 250);
  }

  function removeGuestEnrollSuccessToasts() {
    if (hasRealAccount()) return;
    document.querySelectorAll("div, span, p").forEach(function (node) {
      const text = (node.textContent || "").trim();
      if (!/报名成功|工作人员|尽快与您联系|鎶ュ悕|宸ヤ綔浜哄憳|鑱旂郴/.test(text)) return;
      const toast = node.closest('[role="alert"]') || node.closest('[class*="toast"]') || node.closest('div[class*="bg-black"]') || node.closest("div");
      if (toast) {
        toast.style.display = "none";
        toast.setAttribute("aria-hidden", "true");
      }
    });
  }

  function guardGuestCourseEnrollment(event) {
    if (!window.location.hash.startsWith("#/course/") && !window.location.hash.startsWith("#/base/")) return;
    if (hasRealAccount()) return;
    const button = event.target && event.target.closest && event.target.closest("button");
    if (!button) return;
    const text = (button.textContent || "").trim();
    if (!/立即报名|确认报名|报名成功|鎶ュ悕/.test(text)) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    removeGuestEnrollSuccessToasts();
    if (window.zhixingApi && window.zhixingApi.openAuth) window.zhixingApi.openAuth();
  }

  function syncGuestCourseEnrollmentState() {
    if (!window.location.hash.startsWith("#/course/") && !window.location.hash.startsWith("#/base/")) return;
    if (hasRealAccount()) return;
    removeGuestEnrollSuccessToasts();
    document.querySelectorAll("button").forEach(function (button) {
      const text = (button.textContent || "").trim();
      if (/^立即报名$/.test(text)) button.textContent = "登录后报名";
      if (/^确认报名/.test(text)) button.textContent = "登录后报名";
    });
  }

  function syncGuestCourseInitialState() {
    const isCoursePage = window.location.hash.startsWith("#/course/");
    if (!isCoursePage || hasRealAccount()) {
      document.documentElement.classList.remove("guest-course-initial");
      document.querySelectorAll("[data-guest-course-phases],[data-guest-phase-card],[data-guest-phase-marker]").forEach(function (node) {
        delete node.dataset.guestCoursePhases;
        delete node.dataset.guestPhaseCard;
        delete node.dataset.guestPhaseMarker;
      });
      return;
    }

    document.documentElement.classList.add("guest-course-initial");
    const phaseRoots = Array.from(document.querySelectorAll("div, section")).filter(function (node) {
      const text = (node.textContent || "").trim();
      return /研学阶段/.test(text) && /第一期|第二期|第三期/.test(text) && text.length < 2400;
    }).sort(function (a, b) {
      return (a.textContent || "").length - (b.textContent || "").length;
    });
    const panel = phaseRoots[0];
    if (!panel) return;
    panel.dataset.guestCoursePhases = "true";

    Array.from(panel.querySelectorAll("div")).forEach(function (node) {
      const text = (node.textContent || "").trim();
      if (/第[一二三四五六七八九十]+期/.test(text) && /积分/.test(text) && text.length < 520) {
        node.dataset.guestPhaseCard = "true";
      }
      const classes = node.className || "";
      if (/rounded-full/.test(classes) && /(bg-green|bg-orange|border-green|border-orange)/.test(classes)) {
        node.dataset.guestPhaseMarker = "true";
      }
    });
  }

  let lastRouteHash = "";

  function scrollRouteToTop() {
    const hash = window.location.hash || "";
    if (!hash || hash === lastRouteHash) return;
    lastRouteHash = hash;
    const reset = function () {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const main = document.getElementById("main-content");
      if (main) main.scrollTop = 0;
    };
    reset();
    requestAnimationFrame(function () { reset(); requestAnimationFrame(reset); });
    setTimeout(reset, 120);
  }

  let isProcessing = false;
  let processQueued = false;
  let roleProfileMenuRetryTimer = null;

  function processImages(root) {
    if (root instanceof HTMLImageElement) stabilizeImage(root);
    if (root.querySelectorAll) root.querySelectorAll("img").forEach(stabilizeImage);
  }

  function process(root) {
    if (isProcessing) {
      processQueued = true;
      return;
    }

    isProcessing = true;
    try {
      if (window.location.hash !== "#/message") closeCloudMessagePage();
      suppressMessageRouteFlash();
      processImages(root);
      localizeRemoteImages(root.querySelectorAll ? root : document);
      stabilizeMobileMedia(root.querySelectorAll ? root : document);
      compactLearningChart(root.querySelectorAll ? root : document);
      markAmap(root.querySelectorAll ? root : document);
      replaceDemoVideo(root.querySelectorAll ? root : document);
      syncHomeTabs(root.querySelectorAll ? root : document);
      bindThemeCategories(root.querySelectorAll ? root : document);
      bindThemeCategoriesFallback(root.querySelectorAll ? root : document);
      bindAiGuide(root.querySelectorAll ? root : document);
      renderCourseDesigner();
      renderExtraCommunityPosts();
      syncGrasslandPostAuthor();
      bindCommunityFilters();
      normalizeCommunityTagChips(root.querySelectorAll ? root : document);
      replaceDongguiTeamPostImages(root.querySelectorAll ? root : document);
      bindDiscoverCategories();
      bindPopularProjectsMore();
      bindZhiTaskActions();
      bindZhiTools();
      fixProfileCertificates();
      bindProfileMenu();
      bindCloudEntryPoints();
      renderBackendCourseContents();
      syncGuestInitialState();
      removeTeacherRoleExplanationPanels();
      renderTeacherCourseBaseManager();
      ensureTeacherResourceManagerUsable();
      ensureTeacherResourceManagerVisibleForms();
      if (window.location.hash === "#/zhi-xing" && ["teacher", "admin"].includes(window.zhixingApi?.user?.role) && !document.getElementById("teacher-course-base-manager")) renderTeacherCourseBaseManager(true);
      removeTeacherRoleExplanationPanels();
      hideParentZhiCheckinButton();
      setLeaderboardCurrentUser();
      syncReadUnreadBadges(root.querySelectorAll ? root : document);
      syncZhiProgressConsistency(root.querySelectorAll ? root : document);
      syncZhiTotalProgressTracks(root.querySelectorAll ? root : document);
      syncCleanZhiProgressFromTaskCount(root.querySelectorAll ? root : document);
      syncDisplayedTotalProgressBars(root.querySelectorAll ? root : document);
      syncExactTotalProgressPercentBars(root.querySelectorAll ? root : document);
      syncZhiTotalProgressFromTaskBadge(root.querySelectorAll ? root : document);
      resetStudentDemoTaskCardsToZero(root.querySelectorAll ? root : document);
      resetUnstartedZhiTaskCardsToZero(root.querySelectorAll ? root : document);
      syncHistoryQuizTaskToSixty(root.querySelectorAll ? root : document);
      syncHistoryQuizBlueProgressTrack(root.querySelectorAll ? root : document);
      syncOtherDemoTaskCardsToZero(root.querySelectorAll ? root : document);
      syncZhiTotalProgressFromTaskBadge(root.querySelectorAll ? root : document);
      syncZhiInitialProgressBars(root.querySelectorAll ? root : document);
      normalizeCommunityTagChips(root.querySelectorAll ? root : document);
      removeDemoMessagePopups();
      syncSmartUserToasts();
      syncAdminControlCenter();
      keepAccountFloatStable();
      syncReliableBottomNav();
      syncUniversalDetailBack();
      normalizeBackendAccountModal();
      restoreProfileInteractivity();
      removeTeacherRoleExplanationPanels();
      renderPopularProjectsPage();
      scrollRouteToTop();
    } finally {
      isProcessing = false;
    }

    if (processQueued) {
      processQueued = false;
      scheduleProcess();
    }
  }

  function scheduleProcess() {
    if (processQueued) return;
    processQueued = true;
    const run = function () {
      processQueued = false;
      process(document);
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(run, { timeout: 500 });
    } else {
      window.setTimeout(run, 80);
    }
  }

  const observer = new MutationObserver(function (records) {
    let hasElementChanges = false;
    records.forEach(function (record) {
      record.addedNodes.forEach(function (node) {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        processImages(node);
        hasElementChanges = true;
      });
    });
    if (hasElementChanges) scheduleProcess();
  });

  function start() {
    if ("serviceWorker" in navigator) {
      try { navigator.serviceWorker.register = function () { return Promise.resolve({ unregister: function () { return Promise.resolve(true); } }); }; } catch (_error) {}
      navigator.serviceWorker.getRegistrations().then(function (registrations) { registrations.forEach(function (registration) { registration.unregister(); }); }).catch(function () {});
    }
    processImages(document);
    stabilizeMobileMedia(document);
    keepDongguiTeamPostImagesStable();
    keepAccountFloatStable();
    syncGuestRouteState();
    syncReliableBottomNav();
    window.setTimeout(function () {
      process(document);
      observer.observe(document.body, { childList: true, subtree: true });
    }, 0);
    document.addEventListener("click", openLessonVideo, true);
    document.addEventListener("click", handleBackendAccountModalAction, true);
    document.addEventListener("pointerdown", handleStableRoleProfileMenuClick, true);
    document.addEventListener("click", handleStableRoleProfileMenuClick, true);
    document.addEventListener("click", handleProfileMenuClick, true);
    document.addEventListener("click", handleAnyProfileActionClick, true);
    document.addEventListener("click", handleAdminReviewConsoleClick, true);
    document.addEventListener("click", handleAdminControlCenterClick, true);
    document.addEventListener("submit", handleAdminControlCenterSubmit, true);
    document.addEventListener("pointerdown", handleRoleProfileMenuFallbackClick, true);
    document.addEventListener("click", handleRoleProfileMenuFallbackClick, true);
    document.addEventListener("click", guardGuestCourseEnrollment, true);
    document.addEventListener("click", guardGuestCommunityAction, true);
    document.addEventListener("pointerdown", handleGuestZhiAuthClick, true);
    document.addEventListener("click", handleGuestZhiAuthClick, true);
    document.addEventListener("pointerdown", handleGuestMessageAuthClick, true);
    document.addEventListener("click", handleGuestMessageAuthClick, true);
    document.addEventListener("pointerdown", guardGuestSearchAccess, true);
    document.addEventListener("focusin", guardGuestSearchAccess, true);
    document.addEventListener("click", guardGuestSearchAccess, true);
    document.addEventListener("pointerdown", prepareRouteHandoff, true);
    document.addEventListener("click", prepareRouteHandoff, true);
    document.addEventListener("pointerdown", handleTeacherCourseBasePanelClick, true);
    document.addEventListener("click", handleTeacherCourseBasePanelClick, true);
    document.addEventListener("pointerdown", handleParentZhiPanelClick, true);
    document.addEventListener("click", handleParentZhiPanelClick, true);
    document.addEventListener("pointerdown", prepareGuestRouteTransition, true);
    document.addEventListener("click", prepareGuestRouteTransition, true);
    document.addEventListener("pointerdown", closeCloudMessageWhenLeaving, true);
    document.addEventListener("click", markUnreadBadgeRead, true);
    document.addEventListener("keydown", guardGuestCommunityCommentKey, true);
    document.addEventListener("submit", guardGuestCommunitySubmit, true);
    window.addEventListener("hashchange", function () {
      renderCourseDesigner();
      syncUniversalDetailBack();
      if (window.location.hash === "#/message" && hasRealAccount()) {
        ensureCloudMessageStyle();
        beginRouteHandoffGuard("message");
        document.documentElement.classList.add("cloud-message-route", "cloud-message-active");
        window.setTimeout(function () {
          renderCloudMessagePage(true);
          clearRouteHandoffGuard();
        }, 0);
      }
      if (window.location.hash === "#/zhi-xing") {
        beginRouteHandoffGuard("zhi");
        window.setTimeout(function () {
          syncGuestInitialState();
          syncZhiProgressConsistency(document);
          syncZhiTotalProgressTracks(document);
          syncCleanZhiProgressFromTaskCount(document);
          syncZhiInitialProgressBars(document);
          syncHistoryQuizBlueProgressTrack(document);
          window.setTimeout(clearRouteHandoffGuard, 420);
        }, 0);
      }
      if (window.location.hash === "#/profile") {
        beginRouteHandoffGuard("profile");
        window.setTimeout(function () {
          syncGuestInitialState();
          restoreProfileInteractivity();
          window.setTimeout(clearRouteHandoffGuard, 420);
        }, 0);
      }
      if (window.location.hash !== "#/message") closeCloudMessagePage();
      if (window.location.hash !== "#/message") suppressMessageRouteFlash();
      if (!hasRealAccount()) {
        document.documentElement.classList.add("guest-route-transition");
        window.setTimeout(function () { document.documentElement.classList.remove("guest-route-transition"); }, 360);
      }
      syncGuestRouteState();
      syncReliableBottomNav();
      keepAccountFloatStable();
      setTimeout(syncSmartUserToasts, 80);
    });
    window.addEventListener("hashchange", scrollRouteToTop);
    window.addEventListener("hashchange", renderPopularProjectsPage);
    window.addEventListener("hashchange", keepDongguiTeamPostImagesStable);
    window.addEventListener("hashchange", function () { setTimeout(function () { markAmap(document); }, 250); });
    window.addEventListener("hashchange", function () { setTimeout(syncGuestInitialState, 250); });
    window.addEventListener("zhixing-auth-change", function () { cleanupAfterLogout(); syncGuestRouteState(); process(document); setTimeout(syncGuestInitialState, 100); setTimeout(syncSmartUserToasts, 120); });
    window.addEventListener("popstate", scrollRouteToTop);
    setTimeout(function () { markAmap(document); }, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
