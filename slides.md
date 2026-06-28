---
highlighter: shiki
css: unocss
transition: fade-out
mdc: true
colorSchema: dark
layout: cover
background: https://raw.githubusercontent.com/austinzgx/pic/master/apc_plum.png
---

<div abs-tl left-15 top-45 text-16 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500>AI实战工作坊</div>

<div abs-tl left-15 top-75 text-2xl>
Claude Code 助力工作效率提升
</div>
<div abs-bl left-15 bottom-10 flex="~ col" text-sm text-left>
  <div>张官祥 </div>
  <div>18519299525</div>
  <div text-sm opacity-50>2026年7月</div>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>Part 1：基础AI知识</span>
</h1>

<div text-xl opacity-60 mt-4>CC使用技巧与最佳实践分享</div>

---

# 大模型 + Agent 

LLM + (Tool Use / Function Calling)  

它标志着 AI 模型从单纯的“文本生成器”进化为能够与其环境交互的“智能代理”（Agent）。

简单来说，工具使用 是指 Claude 等模型能够理解开发者定义的外部函数或 API，并在对话过程中根据用户的需求，自主判断、决策并生成调用这些工具所需的参数（通常是 JSON 格式）。


---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>Part 2：安装使用Claude Code</span>
</h1>

<div text-xl opacity-60 mt-4>CC使用技巧与最佳实践分享</div>

---
layout: default
---

# CC安装配置

  <div border="~ green-400/20" bg="green-400/5" rounded-xl p-4>
    <div text-xl mb-2>🖥️</div>
    <div text-green-400 font-bold mb-2>公司电脑方案</div>
    <ul text-xs space-y-1 opacity-75>
      <li>安装 Vmware 虚拟机（2929IT热线 输入管理员密码）</li>
      <li>虚拟机中安装 Linux 操作系统</li>
      <li>已集成：Chrome、Node、Git</li>
    </ul>
    <div text-xs mt-2 opacity-50>不建议直接在 Windows 里安装，后续配置需管理员密码</div>
   
  </div>


  <div border="~ green-400/20" bg="green-400/5" rounded-xl p-4>
    <div text-xl mb-2>💻</div>
    <div text-green-400 font-bold mb-2>个人电脑方案</div>
    <ul text-xs space-y-1 opacity-75>
      <li>系统干净，安装配置无限制</li>
      <li>与公司电脑切换使用</li>
      <li>文件交互通过网盘/Git</li>
    </ul>
  </div>

---

# 其他配套

  <div border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4>
    <div text-xl mb-2>🤖</div>
    <div text-blue-400 font-bold mb-2>Claude Code 安装</div>
    <div text-xs opacity-75 mb-1>
      <a href="https://code.claude.com/docs/en/overview" target="_blank">官方安装文档</a>
    </div>

```bash
curl -fsSL https://claude.ai/install.sh | bash
```
</div>

  <div border="~ orange-400/20" bg="orange-400/5" rounded-xl p-4>
    <div text-xl mb-2>📦</div>
    <div text-orange-400 font-bold mb-2>可选配套工具</div>
    <ul text-xs space-y-1 opacity-75>
      <li><strong>Git</strong> — 代码版本管理</li>
      <li><strong>GitHub</strong> — 代码托管平台</li>
      <li><strong>Netlify</strong> — Web应用部署</li>
    </ul>
  </div>

---

# Claude Code

是由 Anthropic 推出的终端原生 AI 编程助手。它直接运行在开发者电脑的命令行中，不仅能生成代码，还能自主读取整个项目、跨文件修改、运行 Shell 命令和测试，是实现人机协同开发的强大工具。
## CLI与网页版AI有何不同
* 上下文感知（Context-Aware）： 网页版聊天机器人只知道你粘贴给它的代码片段；而 Claude Code 会扫描你整个代码库，对项目结构、文件依赖和业务逻辑有全局理解。
* 智能体能力（Agentic）： 它不仅仅是“给出建议”，而是能够像人类开发者一样“做事”。你可以让它修复特定的 bug，它会自主搜索错误文件、修改代码并尝试运行。
* 原生终端操作： 无需离开终端，它就能读写文件、执行 Shell 命令、查看 Git 状态甚至安装依赖包。

---

# CC Switch

封号风险 → 使用 <strong text-green-300>CC Switch</strong> 切换模型<br/>

DeepSeek v4-pro 付费：<a href="https://platform.deepseek.com/" target="_blank">platform.deepseek.com</a>

---

# Prompt

三大基石：Clear, Direct, Specific
所有高级技巧都建立在清晰的表达之上。

* 消除歧义：不要让 AI 猜。
* 肯定指令：告诉它做什么，而不是不做什么。
* 具体语境：像给新员工派活一样交代背景。

---

# Skills

Skills 是 Claude 生态的最新拼图。它解决的是“复用性”问题。

如果你教会了 Claude “如何撰写符合公司规范的周报”，由于 Context 会重置，下次还得重教一遍。 Skills 允许你将这套指令（Prompt + 相关资料 + 示例）打包成一个“技能包”。

当在 Claude.ai 或企业版中使用时，系统会根据请求自动挂载相关的 Skill。

这相当于给 Claude 安装了“插件”，让它瞬间变成“资深法务”、“专业会计”或“Python 专家”。

1. agent-browser 允许 AI 直接调用无头浏览器执行自动化网页交互和数据抓取。
2. PDF Master：文档处理神器，支持 PDF 的合并、拆分、提取、OCR 甚至签名。
3. PPT Master: AI 生成原生可编辑 PPTX，支持任意文档输入

---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>Part 3：AI常用提效工具</span>
</h1>

<div text-xl opacity-60 mt-4>PPT</div>


---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>Part 4：Vibe Coding</span>
</h1>

<div text-xl opacity-60 mt-4>你的AI编程搭档，和全新的编程方式</div>

---

# 提纲
不是教大家写代码，而是让你有能力用AI帮你做一个属于自己的小工具


* ✅ 每个人能在自己电脑跑起来一个Web应用，并可部署到互联网
* ✅ 知道怎么用AI一步步“对话开发”
* ✅ 敢于把业务需求转化成工具尝试
- 🤖 **上手 Claude Code** —— 你的AI编程搭档
- ✨ **掌握 Vibe Coding** —— 用对话的方式写应用
- 🏭 **动手做出一个真实业务应用** —— 团队待办事项看板
- 🌐 **看懂Web应用的全貌** —— 前端、后端、数据库
- 🚀 **部署到互联网** —— 用手机扫码就能用

---
layout: center
---

<h1 text-3xl font-bold text-center mb-6>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>一个重要的思维转变</span>
</h1>

<div flex justify-center gap-8 mt-8>
  <div border="~ red-400/30" bg="red-400/5" rounded-2xl p-6 flex-1>
    <div text-2xl mb-3 text-center>❌ 传统学编程</div>
    <div text-sm opacity-75>
      学语法 → 记API → 看教程 →<br/>
      写代码 → 出bug → 搜索 →<br/>
      改代码 → 又出bug → 再搜 →<br/>
      <strong>一个功能搞一天，数月才能上手</strong>
    </div>
  </div>

  <div border="~ green-400/30" bg="green-400/5" rounded-2xl p-6 flex-1>
    <div text-2xl mb-3 text-center>✅ AI Vibe Coding</div>
    <div text-sm opacity-75>
      描述需求 → Claude写代码 →<br/>
      你运行测试 → 不满意就改 →<br/>
      满意继续 →<br/>
      <strong>一个功能十分钟，今天就能开始</strong>
    </div>
  </div>
</div>

<div text-center mt-8 text-lg>
  <strong text-green-300>你最大的价值不是写代码，而是你最懂业务需要什么。</strong>
</div>

---
layout: two-cols-header
---

# 关于AI基本概念
核心认知：你已经是”创造者”

  Vibe Coding 的门槛不是技术，而是：<strong text-green-300>敢开始 + 愿意试 + 小步迭代</strong>

::left::
<div mt-4 space-y-3>
  <div border=”~ green-400” bg=”green-400/5” rounded-lg p-3>
    <div text-green-400 text-sm font-bold>1. 你已拥有一个AI开发团队</div>
    <div text-xs opacity-70>未来不是会不会写代码，而是能不能把想法说清楚，让AI帮你实现</div>
  </div>
  <div border=”~ green-400” bg=”green-400/5” rounded-lg p-3>
    <div text-green-400 text-sm font-bold>2. Vibe Coding = 对话编程</div>
    <div text-xs opacity-70>想法 → 描述需求 → AI生成代码 → 你测试 → 修改迭代</div>
  </div>
  <div border=”~ green-400” bg=”green-400/5” rounded-lg p-3>
    <div text-green-400 text-sm font-bold>3. 你的核心能力不是写代码</div>
    <div text-xs opacity-70>清楚表达需求 · 能判断结果对不对 · 会逐步拆解问题</div>
  </div>
</div>

::right::

<div text-lg font-bold mb-4>
  <span text-green-400>🔍 常见误区</span>
</div>

<div space-y-3 text-sm>
  <div flex items-center gap-2>
    <span text-red-400>❌ 先学编程再开始</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 边做边学，直接开始</span>
  </div>
  <div flex items-center gap-2>
    <span text-red-400>❌ 一上来就做完整系统</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 从一个小工具开始</span>
  </div>
  <div flex items-center gap-2>
    <span text-red-400>❌ AI一次必须做对</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 多轮对话不断优化</span>
  </div>
  <div flex items-center gap-2>
    <span text-red-400>❌ 看不懂代码就用不了</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 会用 + 会改需求就够</span>
  </div>
  <div flex items-center gap-2>
    <span text-red-400>❌ 这个太简单没价值</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 小工具也能提升效率</span>
  </div>
  <div flex items-center gap-2>
    <span text-red-400>❌ 业务太复杂AI做不了</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 越贴近业务越有价值</span>
  </div>
</div>

---
layout: two-cols-header
---

# Web应用架构
前端、后端、数据库 


::left::

<div border="~ gray-700" rounded-xl p-5 text-center>

```text
┌──────────┐      ┌──────────┐
│  浏览器   │ ←→  │  互联网   │
│  (前端)   │      │          │
└──────────┘      └──────────┘
     ↕                   ↕
┌──────────┐      ┌──────────┐
│  服务器   │ ←→  │  数据库   │
│  (后端)   │      │          │
└──────────┘      └──────────┘
```
</div>

::right::

<div border="~ green-400/30" rounded-xl p-5>
  <div text-center text-lg font-bold mb-3>
    <span text-green-400>类比你熟悉的工业系统</span>
  </div>

| Web应用 | 工业系统 |
|---|---|
| 浏览器/前端 | HMI触摸屏 |
| 后端服务器 | PLC/DCS控制器 |
| 数据库 | SCADA历史归档 |
| API接口 | Modbus/OPC-UA |

</div>

<div text-center mt-4 text-base opacity-70>
  本质上就是<strong text-green-300>同一套架构</strong>，换了个名字而已。
</div>

---
layout: two-cols
---

# 前端是什么？

<div mt-6 />

<div border="~ orange-400/30" bg="orange-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-orange-400>HTML</div>
  <div text-sm opacity-75>构建页面内容结构</div>
  <div text-xs opacity-50 mt-1>≈ HMI画面上的图形元素</div>
</div>

<div border="~ blue-400/30" bg="blue-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-blue-400>CSS</div>
  <div text-sm opacity-75>控制颜色、布局、样式</div>
  <div text-xs opacity-50 mt-1>≈ HMI的配色方案和排版</div>
</div>

<div border="~ yellow-400/30" bg="yellow-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-yellow-400>JavaScript</div>
  <div text-sm opacity-75>处理点击、输入、动态交互</div>
  <div text-xs opacity-50 mt-1>≈ HMI绑定的脚本和逻辑</div>
</div>

::right::

<div flex items-center justify-center h-full>
  <div
    border="~ green-400/40"
    bg="green-400/5"
    rounded-2xl
    p-6
    text-center
  >
    <div text-4xl mb-4>🤖</div>
    <div text-xl font-bold mb-3>
      <span text-green-400>但你不必手写这些</span>
    </div>
    <div text-base opacity-80>
      你只需要描述需求：<br/>
      "我要一个表单，含设备名称、<br/>
      温度、状态三个字段，<br/>
      提交按钮是绿色的"
    </div>
    <div mt-3 text-base>
      <strong text-green-300>
        Claude帮你全部生成好
      </strong>
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# 数据库是什么？

::left::

<div text-base font-bold mb-3>对比你现在的数据存储方式：</div>

| 方式 | 痛点 |
|---|---|
| 纸质表格 | 难查找、易丢失、难汇总 |
| Excel | 多人协作乱、格式不统一 |
| 笔记/微信 | 碎片化、无法分析 |

<div mt-4 />

| 用数据库之后 | 效果 |
|---|---|
| 秒级搜索 | 一键统计 |
| 多人同时用 | 格式规范 |
| 结构化存储 | 可分析趋势 |

::right::
<div text-base font-bold mb-3>数据库的本质：</div>
<div text-sm opacity-75>
  数据库就是一个<strong text-green-300>结构化的表格</strong>，<br/>
  你可以把数据存进去，也可以从里面查出来。<br/>
  <strong text-green-300>数据库 = 表格 + 查询功能</strong>
</div>

<div>数据库类型：</div>
<ul>
  <li>关系型数据库：MySQL、PostgreSQL、Oracle</li>
  <li>非关系型数据库：MongoDB、Redis</li>
  <li>云数据库：`Supabase`、Firebase</li> 
</ul>
---
layout: two-cols-header
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🤖</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>Claude Code —— 你的AI编程搭档</span>
</h1>

::left::

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>📝 帮你写代码</div>
  <div text-sm opacity-75>"帮我做一个设备巡检记录页面"</div>
</div>

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🐛 帮你修bug</div>
  <div text-sm opacity-75>"点击保存按钮没反应，帮我看看"</div>
</div>

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>➕ 帮你加功能</div>
  <div text-sm opacity-75>"增加一个导出Excel的功能"</div>
</div>

::right::

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🔍 帮你读代码</div>
  <div text-sm opacity-75>"解释一下这段代码做了什么"</div>
</div>

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🎨 帮你调样式</div>
  <div text-sm opacity-75>"把按钮改成施耐德绿色"</div>
</div>

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🚀 帮你部署</div>
  <div text-sm opacity-75>"帮我把这个应用部署到Netlify"</div>
</div>

<div text-center mt-6 text-base>
  <strong text-green-300>你是项目经理，Claude是你的AI开发团队。</strong>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>🎵</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>Vibe Coding</span>
</h1>
<div text-xl opacity-60>用说话的方式编程</div>

<div mt-6 />

| 传统编程 | Vibe Coding |
|---|---|
| 自己想整个技术方案 | 逐步对话，逐步完善 |
| 一次性写完所有代码 | 一次一小部分 |
| 出错自己Google调试 | 把报错丢给Claude |
| 学几个月才能做东西 | 今天就能做第一个应用 |
| 你在写代码 | 你在审查代码 |

::right::

<div flex items-center justify-center h-full>
  <div
    border="~ green-400/40"
    bg="green-400/5"
    rounded-2xl
    p-6
    text-center
  >
    <div text-5xl mb-4>🎵</div>
    <div text-xl font-bold mb-2>
      <span text-green-400>Vibe = 节奏、感觉</span>
    </div>
    <div text-base opacity-80>
      Vibe Coding =<br/>
      跟着感觉走<br/>
      一步步在对话中创造软件
    </div>
  </div>
</div>

---

<div text-2xl font-bold pb-2>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>
    设计院信息管理系统
  </span>
  <div fixed right-12 top-8 text-gray text-base><a href="https://sedpms.netlify.app" target="_blank" class="text-decoration-underline">https://sedpms.netlify.app</a></div>
</div>

<div grid="~ cols-[1fr_1.5fr_1.2fr]" gap-3 text-sm>

  <div border="~ green-400/20" bg="green-400/5" rounded-xl p-2>
    <div text-base font-bold text-green-400 mb-3>🛠 AI开发工具</div>
    <li>公司电脑 + Vmware虚拟机</li>
    <li>Archlinx(Omarchy发行版)</li>
    <li>ClaudeCode + CC Switch</li>
    <li>DeepSeek-v4-pro Token计费</li>
    <div text-base font-bold text-green-400 my-3>🛠 应用技术栈</div>
    <ul text-xs space-y-1>
      <li><strong>Nuxt 3</strong> — Vue 3 + TypeScript</li>
      <li><strong>PrimeVue</strong> + UnoCSS 原子化</li>
      <li><strong>Supabase</strong> — 数据库/认证/实时</li>
      <li><strong>Chart.js</strong> — 仪表板与报表</li>
      <li><strong>DeepSeek API</strong> — AI 拜访分析</li>
      <li><strong>ExcelJS</strong> — 一键导出 Excel</li>
      <li><strong>Markdown</strong> — 在线编辑与渲染</li>
      <li><strong>GitHub</strong> — CI/CD 自动化部署</li>
      <li><strong>Netlify</strong> — SSG/SSR 混合部署</li>
    </ul>
  </div>
  <!-- AI功能 + 应用人群 -->
  <div space-y-2>
    <div border="~ green-400/20" bg="green-400/5" rounded-xl p-2>
    <div flex items-center >
      <div text-base font-bold text-green-400 mb-2>🤖 系统AI功能点</div>
      <div flex-auto/>
      <div text-xs font-bold mb-1>【客户拜访记录智能分析】</div>
      </div>
      <div text-xs opacity-60 mb-2>调用DeepSeek Chat API 进行结构化分析</div>
      <ol text-xs space-y-0.5 px-3>
        <li><strong>拜访概览</strong> — 统计次数、时间跨度、频率</li>
        <li><strong>关键主题</strong> — 识别 3-5 个反复出现的主题</li>
        <li><strong>机会识别</strong> — 提取销售线索并判断阶段</li>
        <li><strong>行动项</strong> — 归纳待办事项及责任人</li>
        <li><strong>健康度</strong> — 关系评分 + 改善建议</li>
      </ol>
    </div>
    <div border="~ green-400/20" bg="green-400/5" rounded-xl p-2>
      <div text-base font-bold text-green-400>👥 应用对象 <span pl-4 text-sm text-gray> 72人</span></div>
      <table w-full text-xs>
        <thead>
          <tr border="b green-400/30"><th text-left >用户</th><th text-center >人数</th><th text-left >功能</th></tr>
        </thead>
        <tbody>
          <tr><td >DI Sales</td><td text-center >8</td><td >项目推送&拜访记录
    </td></tr>
          <tr><td >V1 Sales Leader</td><td text-center >13</td><td >区域业务机会管理</td></tr>
          <tr><td >行业 BDM</td><td text-center >13</td><td >行业业务机会管理</td></tr>
          <tr><td >产线 OP</td><td text-center >25</td><td >产线业务机会管理</td></tr>
          <tr><td >Leader</td><td text-center >10</td><td >客户报告全局进展</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 项目成果 -->
  <div border="~ green-400/20" bg="green-400/5" rounded-xl p-4>
    <div text-base font-bold text-green-400 mb-3>📊 项目成果</div>
      <div text-xs opacity-60 mb-2>高效实现DI侧挖掘项目业务机会的快速传递与跟踪闭环</div>
    <ul text-xs space-y-2>
      <li>
        <div font-bold>统一数据管道</div>
        <div opacity-60>Excel/碎片化沟通 → 统一在线平台</div>
      </li>
      <li>
        <div font-bold>角色自动过滤</div>
        <div opacity-60>不同角色差异化视图，减少管理成本</div>
      </li>
      <li>
        <div font-bold>全流程追溯</div>
        <div opacity-60>挖掘→BFO→赢标录单完整链路可追溯</div>
      </li>
      <li>
        <div font-bold>通知实时触达</div>
        <div opacity-60>评论自动推送，减少信息滞后遗漏</div>
      </li>
      <li>
        <div font-bold>自助 BI 报表</div>
        <div opacity-60>按区域/产品线/时间段多维度分析</div>
      </li>
      <li>
        <div font-bold>AI 辅助决策</div>
        <div opacity-60>非结构化数据 → 可执行洞察</div>
      </li>
    </ul>
  </div>

</div>


---
layout: center
---

<h1 text-3xl font-bold text-center mb-6>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>Vibe Coding 工作流程</span>
</h1>

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-2xl
  p-8
  text-center
  text-lg
>

  <div border="~ gray-600" rounded-lg p-3 mb-3 bg="gray-800/50">
    <strong>你说出需求</strong>（用自然语言）
  </div>
  <div text-2xl opacity-50>↓</div>
  <div border="~ gray-600" rounded-lg p-3 mb-3 bg="gray-800/50">
    <strong>Claude 生成代码</strong>
  </div>
  <div text-2xl opacity-50>↓</div>
  <div border="~ gray-600" rounded-lg p-3 mb-3 bg="gray-800/50">
    <strong>你运行测试、试用</strong>
  </div>
  <div text-2xl opacity-50>↓</div>
  <div border="~ green-400/40" rounded-lg p-3 mb-3 bg="green-400/10">
    <strong>不满意就告诉Claude改 → 满意就继续下一个功能</strong>
  </div>

</div>

<div text-center mt-6 text-base>
  就像做项目：一个一个功能来，逐步加。<br/>
  <strong text-green-300>不是瀑布式，是敏捷迭代。</strong>
</div>

---
layout: center
---

<h1 text-3xl font-bold text-center mb-8>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>📐 和Claude对话的核心公式</span>
</h1>

<div
  border="~ green-400/40"
  bg="green-400/5"
  rounded-2xl
  p-8
  text-center
  mb-6
>
  <div text-2xl font-bold mb-2>一句好需求 = <span text-green-400>做什么</span> + <span text-green-400>有什么字段</span> + <span text-green-400>要怎么交互</span></div>
</div>

<div
  border="~ gray-700"
  rounded-xl
  p-5
  text-left
  text-base
  bg="gray-800/50"
>
  <div text-sm opacity-50 mb-1>✅ 标准模板：</div>
  "我要做一个<strong text-green-300>【设备巡检记录表】</strong>（做什么），包含<strong text-green-300>【设备名称、巡检日期、温度、压力、状态、巡检人】</strong>字段（有什么），提交后<strong text-green-300>【数据保存并显示在列表里，异常记录用红色标出来】</strong>（要怎么）。"
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>🎯</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>好需求 vs 坏需求</span>
</h1>

<div mt-6 />

<div border="l-4 red-400" bg="red-400/5" rounded-r-xl p-5 mb-4>
  <div text-lg font-bold text-red-400 mb-2>❌ 太模糊</div>

  > "做一个设备管理系统"
  > "帮我写个报表功能"
  > "弄个数据看板"

  <div text-sm opacity-60 mt-2>Claude不知道你要什么，只能瞎猜</div>
</div>

::right::

<div mt-14 />

<div border="l-4 green-400" bg="green-400/5" rounded-r-xl p-5>
  <div text-lg font-bold text-green-400 mb-2>✅ 具体清晰</div>

  > "做一个设备巡检记录页面，有表单和列表两部分。表单包含设备名称（下拉选择）、巡检日期、温度读数、压力读数、运行状态、巡检人、备注。提交后保存到列表，列表按日期倒序显示，支持按设备名称搜索。"

  <div text-sm opacity-60 mt-2>Claude脑子里能"看见"这个页面</div>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>Part 5：动手实战</span>
</h1>

<div text-xl opacity-60 mt-4>从零到上线，打造团队ToDo看板工具</div>



---
layout: two-cols-header
---

<h1 flex items-center gap-3>
  <span text-3xl>⚡</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>实战感受 AI 开发应用流程</span>
</h1>

::left::
<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-lg
  p-3
  text-base
>
  <strong text-green-300>5分钟</strong> Vibe Coding 实现团队 ToDoList 看板工具
</div>

<div mt-4 border="~ gray-700" bg="gray-800/50" rounded-xl p-4>
  <div text-sm opacity-60 mb-2>对 Claude 说：</div>
  <div text-base>
    "帮我生成一个待办事项Web应用：<br/>
    1. 添加任务 &nbsp; 2. 标记完成 &nbsp; 3. 删除<br/>
    2. 页面要简洁<br/>
    用 HTML + CSS + JavaScript 实现"
  </div>
</div>

::right::

<div mt-16 />

<div text-lg font-bold mb-3>
  <span text-green-400>💡 应用场景建议</span>
</div>

<div space-y-3 text-sm>
  <div border="~ orange-400/20" bg="orange-400/5" rounded-lg p-2>
    <div text-orange-400 font-bold text-xs>销售类</div>
    <div text-xs opacity-70>客户跟进 · 项目看板 · 报价记录 · 客户培训</div>
  </div>
  <div border="~ blue-400/20" bg="blue-400/5" rounded-lg p-2>
    <div text-blue-400 font-bold text-xs>管理类</div>
    <div text-xs opacity-70>团队任务 · KPI追踪 · 会议纪要</div>
  </div>
  <div border="~ green-400/20" bg="green-400/5" rounded-lg p-2>
    <div text-green-400 font-bold text-xs>生活类 <span text-xs opacity-50>（降低心理门槛）</span></div>
    <div text-xs opacity-70>健身记录 · 旅行计划 · 儿童教学</div>
  </div>
</div>

<div mt-4 text-center text-sm>
  <strong text-green-300>先从一个极简Demo开始，感受AI编程的节奏</strong>
</div>

---
layout: default
---

<h1 flex items-center gap-3>
  <span text-3xl>🏭</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>实战目标：设备巡检管理系统</span>
</h1>

<div mt-4 />

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-2xl
  p-5
  text-lg
  text-center
  mb-6
>
  <strong>目标：</strong>在手机上也能用的设备巡检记录系统
</div>

<div grid grid-cols-3 gap-4>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📝</div>
    <div font-bold>巡检表单</div>
    <div text-xs opacity-60 mt-1>填写和提交巡检数据</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📋</div>
    <div font-bold>记录列表</div>
    <div text-xs opacity-60 mt-1>查看所有历史记录</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>🔍</div>
    <div font-bold>筛选搜索</div>
    <div text-xs opacity-60 mt-1>按设备和日期查找</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>⚠️</div>
    <div font-bold>异常标记</div>
    <div text-xs opacity-60 mt-1>超标自动标红提醒</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📱</div>
    <div font-bold>手机适配</div>
    <div text-xs opacity-60 mt-1>手机扫码就能用</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>🚀</div>
    <div font-bold>部署上线</div>
    <div text-xs opacity-60 mt-1>Netlify公网访问</div>
  </div>
</div>

---
layout: default
---

<h1 flex items-center gap-3>
  <span text-3xl>1️⃣</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>第1步 —— 用一句话创建项目</span>
</h1>

<div mt-4 />

<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-xl
  p-4
  text-base
>
  <strong>打开 Claude Code，对它说：</strong>
</div>

<div mt-4
  border="~ gray-700"
  bg="gray-800/50"
  rounded-xl
  p-5
  text-sm
>
  <div opacity-60 mb-1>你的需求：</div>
  "帮我创建一个设备巡检记录的Web应用，具体要求：<br/>
  1. 一个巡检表单页面，字段包含：设备名称、巡检日期、温度读数(°C)、压力读数(bar)、运行状态（正常/关注/异常）、巡检人、备注<br/>
  2. 提交后数据保存到数据库<br/>
  3. 一个列表页面，按日期倒序显示所有记录<br/>
  4. 用绿色作为主题色"
</div>

<div grid grid-cols-3 gap-3 mt-4>
  <div border="~ gray-700" rounded-lg p-3 text-center text-sm>
    <div text-green-400 font-bold>创建项目结构</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3 text-center text-sm>
    <div text-green-400 font-bold>配置数据库</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3 text-center text-sm>
    <div text-green-400 font-bold>给你运行命令</div>
  </div>
</div>

<div text-center mt-4 text-base>
  <strong text-green-300>你只需要跟着Claude的指引操作。</strong>
</div>

---
layout: two-cols-header
clicks: 5
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>2️⃣</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>第2步 —— 运行、试用、迭代</span>
</h1>

::left::

<div border="~ gray-700" rounded-xl p-4>
  <div text-lg font-bold mb-2 text-green-400>运行</div>
  <div text-sm opacity-75 mb-1>对 Claude 说：</div>

  > "帮我运行起来，让我看看效果"

  <div mt-3 text-sm opacity-75>
    几分钟内就能在浏览器里看到一个能用的应用：
  </div>
  <div text-sm mt-1>🟢 巡检表单页面</div>
  <div text-sm>🟢 记录列表页面</div>
  <div text-sm>🟢 施耐德绿色主题</div>
</div>

::right::

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4>
  <div text-lg font-bold mb-2 text-green-400>迭代改进</div>
  <div text-sm opacity-75 mb-1>试用后告诉Claude要改什么：</div>

<v-clicks>

  > "表单里增加一个'巡检类型'字段"

  > "异常记录用红色背景显示"

  > "加搜索框，按设备名称搜索"

</v-clicks>

</div>

<div text-center mt-4 text-base>
  <strong text-green-300>每句话都是一次迭代，几分钟就改好。这就是 Vibe Coding。</strong>
</div>

---
layout: default
clicks: 5
---

<h1 flex items-center gap-3>
  <span text-3xl>3️⃣</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>第3步 —— 逐步叠加功能</span>
</h1>

<div mt-4 />

<div grid grid-cols-1 gap-2>
  <div border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>第1轮：异常自动判断</div>
    <div text-sm opacity-75 mt-1>"表单提交时，温度超过75度或压力超过3.0bar，自动标记为异常"</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>第2轮：仪表盘概览</div>
    <div text-sm opacity-75 mt-1>"加一个首页仪表盘，显示今日巡检总数、异常记录数、本月趋势，用卡片布局"</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>第3轮：导出Excel</div>
    <div text-sm opacity-75 mt-1>"加导出按钮，把筛选后的巡检记录导出为Excel文件"</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>第4轮：手机端适配</div>
    <div text-sm opacity-75 mt-1>"帮我把移动端的显示效果优化，按钮和字体放大"</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>第5轮：保养提醒</div>
    <div text-sm opacity-75 mt-1>"加保养到期提醒：设备增加下次保养日期，到期前3天红色提醒"</div>
  </div>
</div>

<div text-center  text-base>
  <strong text-green-300>每轮几分钟到十几分钟。一个下午，完整的巡检系统就出来了。</strong>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>💾</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>数据存储方案</span>
</h1>

<div mt-6 />

| 方案 | 特点 | 适合场景 |
|---|---|---|
| SQLite | 单文件，零配置 | 个人/小团队内部 |
| Supabase | 在线库，免费额度 | 多人异地使用 |
| localStorage | 存浏览器里 | 纯Demo/个人用 |

<div mt-4 />

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4>
  <div text-sm font-bold text-green-400>怎么跟 Claude 说：</div>
  <div text-sm mt-1>
    > "用SQLite做数据库" <span text-xs opacity-50>（推荐起步方案）</span>
  </div>
  <div text-sm mt-1>
    > "改用Supabase，让多人用" <span text-xs opacity-50>（需要多人协作时）</span>
  </div>
</div>

::right::

<div flex items-center justify-center h-full>
  <div
    border="~ green-400/40"
    bg="green-400/5"
    rounded-2xl
    p-6
    text-center
  >
    <div text-4xl mb-4>📊</div>
    <div text-xl font-bold mb-2>
      <span text-green-400>Claude帮你处理数据库</span>
    </div>
    <div text-base opacity-80>
      你只管告诉它用什么方案<br/>
      表结构、查询、迁移<br/>
      它全搞定
    </div>
  </div>
</div>

---

# 部署上线
让你的应用真正在互联网上运行


<h1 text-3xl font-bold text-center mb-6>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>什么是部署？</span>
</h1>

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-2xl
  p-8
  text-center
  mb-4
>
  <div text-xl font-bold mb-4>
    部署 = 把你的代码放到一台<span text-green-400>24小时运行的公网服务器</span>上
  </div>

  <div grid grid-cols-3 gap-4 text-sm mt-6>
    <div>
      <div text-3xl mb-2>📱</div>
      <div>手机浏览器就能打开</div>
    </div>
    <div>
      <div text-3xl mb-2>🔗</div>
      <div>链接分享给同事就能用</div>
    </div>
    <div>
      <div text-3xl mb-2>🚫</div>
      <div>不用打开Claude Code</div>
    </div>
  </div>
</div>

<div text-center text-lg>
  用 <strong text-green-300>Netlify</strong> 部署，免费，一句话搞定。
</div>

---
layout: two-cols-header
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🚀</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>部署实操 —— Netlify 一步到位</span>
</h1>

::left::

<div border="~ gray-700" rounded-xl p-5>
  <div text-lg font-bold mb-3 text-green-400>准备工作</div>

  <div text-sm>
    1. 去 <strong text-green-300>netlify.com</strong> 用GitHub账号注册<br/>
    2. 把代码推送到GitHub（Claude帮你）
  </div>
</div>

<div border="~ gray-700" rounded-xl p-5 mt-3>
  <div text-lg font-bold mb-3 text-green-400>然后对Claude说</div>

  > "帮我把项目部署到Netlify"
</div>

::right::

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-5>
  <div text-lg font-bold mb-3 text-green-400>Claude 会自动完成</div>

  <div text-sm>
    1. 🔧 安装 Netlify CLI<br/>
    2. 🔑 引导你登录授权<br/>
    3. 🏗️ 构建项目文件<br/>
    4. 🚀 上传到Netlify服务器<br/>
    5. 🔗 给你一个网址<br/>
  </div>

  <div mt-3 text-center text-base>
    <code text-green-300>https://xxx.netlify.app</code>
  </div>
</div>

<div text-center mt-4 text-base>
  <strong text-green-300>部署成功后，把网址发到手机上就能打开使用。</strong>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>⚡</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>需要后端+数据库？</span>
</h1>

<div mt-4 />

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-xl
  p-5
>
  <div text-lg font-bold mb-2 text-green-400>Supabase</div>
  <div text-sm opacity-80>
    = 免费的在线数据库 + 后端API<br/>
    开箱即用，有慷慨的免费额度
  </div>
</div>

<div mt-4 />

<div text-sm>
  <strong>对 Claude 说：</strong>
  > "帮我把应用改成用Supabase做后端和数据库"
</div>

<div mt-3 text-sm>
  <strong>Claude 会帮你：</strong>
  1. 指导你在 supabase.com 创建项目<br/>
  2. 设计数据库表结构<br/>
  3. 生成API调用代码<br/>
  4. 处理用户登录认证
</div>

::right::

<div flex items-center justify-center h-full>
  <div
    border="~ green-400/40"
    bg="green-400/5"
    rounded-2xl
    p-6
    text-center
  >
    <div text-4xl mb-4>🧩</div>
    <div text-xl font-bold mb-2>
      <span text-green-400>全栈应用</span>
    </div>
    <div text-base opacity-80>
      前端 → 浏览器里的网页<br/>
      后端 → Supabase API<br/>
      数据库 → PostgreSQL
    </div>
  </div>
</div>

---
layout: default
---

<h1 flex items-center gap-3>
  <span text-3xl>💡</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>更多你可以做的工业业务应用</span>
</h1>

<div mt-3 />

<div grid grid-cols-2 gap-2>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>🔧 设备巡检系统 <span text-xs text-green-400>⭐</span></div>
    <div text-xs opacity-60>纸质表单数字化，异常自动提醒</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>📊 产线数据看板 <span text-xs text-green-400>⭐</span></div>
    <div text-xs opacity-60>Excel变实时大屏，自动刷新</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>📦 备件库存管理 <span text-xs text-amber-400>⭐⭐</span></div>
    <div text-xs opacity-60>库存可视化，低库存自动提醒</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>📝 交接班日志 <span text-xs text-green-400>⭐</span></div>
    <div text-xs opacity-60>结构化记录，可追溯，可统计</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>⚠️ 故障知识库 <span text-xs text-amber-400>⭐⭐</span></div>
    <div text-xs opacity-60>故障→原因→方案，经验沉淀</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>✅ 安全检查清单 <span text-xs text-green-400>⭐</span></div>
    <div text-xs opacity-60>逐项确认，自动汇总，整改跟踪</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>📈 OEE计算工具 <span text-xs text-amber-400>⭐⭐</span></div>
    <div text-xs opacity-60>自动计算+趋势展示+异常分析</div>
  </div>
  <div border="~ gray-700" rounded-lg p-3>
    <div font-bold>🗓️ 保养计划管理 <span text-xs text-amber-400>⭐⭐</span></div>
    <div text-xs opacity-60>到期自动提醒，避免遗漏</div>
  </div>
</div>

<div text-center mt-3 text-sm opacity-75>
  这些都是施耐德同事日常工作中真实需要的工具。<br/>
  <strong text-green-300>你来做，因为你最懂需求。</strong>
</div>

---
layout: center
---

<h1 text-3xl font-bold text-center mb-6>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>你不需要成为软件工程师</span>
</h1>

<div flex justify-center gap-6 mt-4>
  <div border="~ green-400/30" bg="green-400/5" rounded-2xl p-6 text-center flex-1>
    <div text-4xl mb-3>🧠</div>
    <div text-lg font-bold text-green-400>业务知识</div>
    <div text-sm opacity-70>你最懂产线需要什么<br/>这是AI替代不了的</div>
  </div>
  <div border="~ green-400/30" bg="green-400/5" rounded-2xl p-6 text-center flex-1>
    <div text-4xl mb-3>💬</div>
    <div text-lg font-bold text-green-400>清晰表达</div>
    <div text-sm opacity-70>做什么+有什么+要怎么<br/>说出来就行</div>
  </div>
  <div border="~ green-400/30" bg="green-400/5" rounded-2xl p-6 text-center flex-1>
    <div text-4xl mb-3>🤖</div>
    <div text-lg font-bold text-green-400>Claude Code</div>
    <div text-sm opacity-70>把需求变成代码<br/>你的AI搭档</div>
  </div>
</div>

<div text-center mt-6 text-lg>
  <strong text-green-300>描述需求 → 审查结果 → 提出修改 → 迭代完善。</strong><br/>
  <span text-base opacity-60>你的角色不是"码农"，而是"做决策的人"。</span>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>✅</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>Vibe Coding 成功秘诀</span>
</h1>

<div mt-4 />

<div border="l-4 green-400" bg="green-400/5" rounded-r-xl p-4 mb-3>
  <div text-lg font-bold text-green-400 mb-1>✅ 要做的</div>
  <div text-sm opacity-80>
    • 用你熟悉的业务语言描述<br/>
    • 一次只改一个功能<br/>
    • 生成后立刻运行测试<br/>
    • 不懂就问"这段代码做了什么？"<br/>
    • 从小功能开始，逐步复杂
  </div>
</div>

::right::

<div mt-12 />

<div border="l-4 red-400" bg="red-400/5" rounded-r-xl p-4>
  <div text-lg font-bold text-red-400 mb-1>❌ 不要做的</div>
  <div text-sm opacity-80>
    • 说"做个设备管理系统"（太笼统）<br/>
    • 一次提10个需求（互相干扰）<br/>
    • 对问题沉默不管（告诉Claude）<br/>
    • 不思考照单全收（你说了算）<br/>
    • 怕犯错（贴错误信息给Claude）
  </div>
</div>

---
layout: default
clicks: 5
---

<h1 flex items-center gap-3>
  <span text-3xl>❓</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>常见问题</span>
</h1>

<div mt-4 />

<div grid grid-cols-1 gap-3>
  <div border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: 我完全没写过代码，真的可以吗？</div>
    <div text-sm opacity-75>A: 可以。你不需要"写"代码，只需"描述需求"。就像不用会做菜才能点菜，你只管说你要什么，Claude是那个做菜的人。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: Claude生成的代码质量可靠吗？</div>
    <div text-sm opacity-75>A: 对于业务工具类应用完全够用。需求描述越清晰，代码质量越高。你才是把关的人。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: 遇到报错怎么办？</div>
    <div text-sm opacity-75>A: 把报错信息直接复制给Claude。大多数错误它秒懂，立刻给出修复方案。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: 在公司可以用吗？数据安全吗？</div>
    <div text-sm opacity-75>A: 涉及敏感数据可以和IT部门沟通，部署在公司内部。工具都能迁移，Claude也会帮你。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: 做出来的应用能给同事用吗？</div>
    <div text-sm opacity-75>A: 当然！部署到Netlify后就是一个链接，任何人用浏览器都能打开。</div>
  </div>
</div>

---
layout: center
---

<h1 text-3xl font-bold text-center mb-8>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>你的第一个任务 —— 现在就开始</span>
</h1>

<div
  border="~ green-400/40"
  bg="green-400/5"
  rounded-2xl
  p-6
  text-left
  mb-6
>
  <div text-sm opacity-50 mb-2>打开 Claude Code，输入下面这段话：</div>

  "帮我做一个简单的设备运行日志Web应用：<br/>
  1. 一个表单页面，字段有：设备名称、日期、班次（早班/中班/晚班）、运行时长(小时)、当日产量、异常备注<br/>
  2. 提交后数据保存在本地，显示在下面的记录列表里<br/>
  3. 列表按日期倒序显示，不同班次用不同颜色标记<br/>
  4. 用HTML+CSS+JS做，数据存在localStorage里"
</div>

<div text-center text-lg>
  <strong text-green-300>这就是你的第一个 Vibe Coding 对话。</strong><br/>
  <span text-base opacity-60>从这段话开始，你已经在编程了。</span>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>📝</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>今天你学到了什么</span>
</h1>

<div mt-4 />

<div border="~ orange-400/30" bg="orange-400/5" rounded-xl p-4 mb-3>
  <div font-bold text-orange-400>编程基础</div>
  <div text-sm opacity-75>变量=仪表读数 | 对象=设备台账 | 函数=功能块<br/>条件=联锁逻辑 | 循环=轮询扫描</div>
</div>

<div border="~ blue-400/30" bg="blue-400/5" rounded-xl p-4 mb-3>
  <div font-bold text-blue-400>Web应用</div>
  <div text-sm opacity-75>前端=HMI | 后端=控制器 | 数据库=历史归档</div>
</div>

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div font-bold text-green-400>Vibe Coding</div>
  <div text-sm opacity-75>描述需求 → 写代码 → 测试 → 迭代 → 上线</div>
</div>

::right::

<div flex items-center justify-center h-full>
  <div
    border="~ green-400/40"
    bg="green-400/5"
    rounded-2xl
    p-6
    text-center
  >
    <div text-4xl mb-4>🚀</div>
    <div text-xl font-bold mb-2>
      <span text-green-400>部署上线</span>
    </div>
    <div text-base opacity-80>
      Netlify 一键部署<br/>
      免费，手机扫码就能用<br/>
      链接分享给同事
    </div>
  </div>
</div>

---
layout: center
---

<h1 text-3xl font-bold text-center mb-8>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>最好的学习时机是现在</span>
</h1>

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-2xl
  p-8
  text-center
  mb-6
>
  <div text-xl mb-4>
    你每天工作中遇到的那些痛点——<br/>
    纸质表格、Excel地狱、信息碎片化——<br/>
    <strong text-green-300>从今天起，都是你能亲手解决的问题</strong>
  </div>

  <div text-base opacity-70>
    工业数字化转型不只是上大系统<br/>
    更是每个人都能为自己做的那些小工具
  </div>
</div>

<div text-center text-lg>
  打开 <strong text-green-300>Claude Code</strong>，说出你的第一个需求。<br/>
  <span text-sm opacity-50>记住：做什么 + 有什么字段 + 要怎么交互</span>
</div>

---
layout: center
---

<h1 text-4xl font-bold text-center>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>谢谢！</span>
</h1>

<div text-center mt-8 text-xl opacity-60>
  从现在开始，你就是创造者
</div>

