---
highlighter: shiki
css: unocss
transition: fade-out
mdc: true
colorSchema: dark
layout: cover
background: https://raw.githubusercontent.com/austinzgx/pic/master/apc_plum.png
title: AI实战工作坊
---

<div abs-tl left-15 top-45 text-16 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500>AI实战工作坊</div>

<div abs-tl left-15 top-70 >
  <div text-2xl op60 pb-4>Claude Code 助力工作效率提升</div>
  <div>张官祥 </div>
  <div>18519299525</div>
</div>
<div abs-bl left-15 bottom-10 flex="~ col" text-sm text-left>
  <div text-sm opacity-50>2026年7月</div>
</div>

---
layout: default
---
 
# 分享内容提纲

<div grid grid-cols-1 gap-3 mt-6>

<div card-green p-4>
  <div text-sm font-bold text-green-400>Part 1 🧠 基础AI知识</div>
  <div desc-text>理解 LLM、Agent、RAG、Token —— 建立对 AI 的正确认知</div>
</div>

<div card-blue p-4>
  <div text-sm font-bold text-blue-400>Part 2 🤖 认识你的 AI 搭档</div>
  <div desc-text>安装 Claude Code，掌握 Prompt 技巧，了解 Skills 插件</div>
</div>

<div card-orange p-4>
  <div text-sm font-bold text-orange-400>Part 3 📊 AI 常用提效工具</div>
  <div desc-text>PPT 自动生成、Excel 智能处理、自动化工作流</div>
</div>

<div card-purple p-4>
  <div text-sm font-bold text-purple-400>Part 4 💬 Vibe Coding</div>
  <div desc-text>用说话的方式编程 —— 核心公式、Web 速览、真实案例</div>
</div>

<div card-teal-sm p-4>
  <div text-sm font-bold text-teal-400>Part 5 🏭 动手实战</div>
  <div desc-text>从零到上线，亲手打造一个团队任务看板工具</div>
</div>

</div>

---
layout: default
clicks: 7
---

# 为什么需要关心 AI？
🎯 从「AI 能干嘛？」到「我知道怎么让 AI 帮我干」

<div grid grid-cols-2 gap-6 mt-6>

<div>
  <div label-red mb-3>😫 你的日常痛点</div>
  <div space-y-2>
    <div v-click card-red p-3>
      <div text-sm>📝 周报、月报、客户报告 —— 文档写不完</div>
    </div>
    <div v-click card-red p-3>
      <div text-sm>📊 数据散落在 Excel、邮件、纸质表里 —— 汇总一次半天</div>
    </div>
    <div v-click card-red p-3>
      <div text-sm>🔧 想做个小工具提高效率 —— 但不会写代码</div>
    </div>
  </div>
</div>

<div>
  <div label-green mb-3>🤖 AI 时代的答案</div>
  <div space-y-2>
    <div v-click card-green-sm p-3>
      <div text-sm>✨ 写报告、做 PPT、处理表格 —— 一句话搞定</div>
    </div>
    <div v-click card-green-sm p-3>
      <div text-sm>✨ 自动汇总数据、生成图表 —— 秒出结果</div>
    </div>
    <div v-click card-green-sm p-3>
      <div text-sm>✨ 不用学编程也能做 Web 应用 —— 描述需求即可</div>
    </div>
  </div>
</div>

</div>


---
layout: section
title: Part 1：基础AI知识
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 1：基础AI知识</span>
</h1>

<div section-desc>从零理解大模型与智能代理</div>

---
layout: default
clicks: 3
---

# 什么是大语言模型（LLM）

<div grid grid-cols-2 gap-6 mt-6>

<div>
<div label-green mb-3>💡 一句话理解</div>

<div card-green p-4 mb-4>
  <div text-base>
    大语言模型 = 一个<span accent>读过海量书籍、文档、代码</span>的 AI<br/>
    它能<strong>理解</strong>你的自然语言问题，并<span accent>逐字生成</span>回答
  </div>
</div>

<div v-click  space-y-2>
  <div border="~ gray-700" rounded-lg p-2>
    <div text-orange-400  font-bold>📚 训练过程</div>
    <div desc-text>就像一个人读完了整个互联网的文章、书籍、代码，学会了语言的规律和世界的知识</div>
  </div>
</div>

</div>

<div>
<div label-blue mb-3>🏭 工业类比</div>

<div v-click space-y-3>
  <div card-blue p-3>
    <div  font-bold text-blue-300>LLM ≈ 经验丰富的工程师</div>
    <div desc-text>读过所有设备手册、故障记录、工艺文档<br/>你问他问题，他能根据经验给出回答</div>
  </div>

  <div v-click card-blue p-3>
    <div  font-bold text-blue-300>但它不是万能的</div>
    <div desc-text>它不能直接操作设备、不能读取实时数据<br/>需要<strong>「工具」</strong>来连接数字世界和物理世界</div>
  </div>
</div>
</div>

</div>

---
layout: default
clicks: 4
---

# AI 的能力与边界

<div mt-4 />

<div grid grid-cols-2 gap-6>

<div>
  <div label-green mb-3>✅ AI 擅长的事</div>
  <div space-y-2>
    <div v-click card-green-sm p-3>
      <div text-sm font-bold>📝 文本理解与生成</div>
      <div desc-text>写报告、做总结、翻译、润色文案</div>
    </div>
    <div v-click card-green-sm p-3>
      <div text-sm font-bold>💻 代码编写与调试</div>
      <div desc-text>生成代码、修 bug、解释代码逻辑</div>
    </div>
    <div v-click card-green-sm p-3>
      <div text-sm font-bold>📊 数据分析与结构化</div>
      <div desc-text>从非结构化文本中提取信息、分类整理</div>
    </div>
    <div v-click card-green-sm p-3>
      <div text-sm font-bold>🔍 信息检索与知识整合</div>
      <div desc-text>快速查找、对比、综合多源信息</div>
    </div>
  </div>
</div>

<div>
  <div label-red mb-3>⚠️ AI 的局限性</div>
  <div space-y-2>
    <div card-red p-3>
      <div text-sm font-bold>🎯 需要你来把关</div>
      <div desc-text>AI 可能犯错或「幻觉」，业务判断必须由人来做</div>
    </div>
    <div card-red p-3>
      <div text-sm font-bold>🔒 不能替代权限决策</div>
      <div desc-text>审批、授权、安全关键操作——必须由人确认</div>
    </div>
    <div card-red p-3>
      <div text-sm font-bold>🏭 不能直接操作物理设备</div>
      <div desc-text>AI 需要经过控制层才能影响实际生产系统</div>
    </div>
    <div card-red p-3>
      <div text-sm font-bold>💡 你的价值不可替代</div>
      <div desc-text>AI 不懂你的车间、不懂你的客户、不懂你的业务场景</div>
    </div>
  </div>
</div>

</div>

---
layout: default
clicks: 3
---

# 大模型 + Agent

<div mt-4 />
<div text-lg font-bold gradient-title mb-4>
  LLM + (Tool Use / Function Calling)
</div>

<div card-green p-5 mb-4>
  <div text-base>
    它标志着 AI 模型从单纯的<strong>「文本生成器」</strong>进化为能够与其环境交互的<strong accent>「智能代理」（Agent）</strong>。
  </div>
</div>

<div grid grid-cols-2 gap-4 mt-4>

<div v-click>
  <div text-sm font-bold text-orange-400 mb-2>🔧 什么是 Tool Use？</div>
  <div card-orange-sm p-3>
    <div text-xs opacity-80>
      模型能够理解开发者定义的<strong>外部函数或 API</strong>，在对话中根据用户需求，<strong>自主判断、决策</strong>并生成调用这些工具所需的参数（通常是 JSON 格式）。
    </div>
  </div>
</div>

<div v-click>
  <div text-sm font-bold text-green-400 mb-2>🏭 工业场景类比</div>
  <div card-green-sm p-3>
    <div text-xs opacity-80>
      就像 PLC 不只是读取传感器数据——它还能<strong>驱动执行器</strong>去做事。<br/>
      Agent 不只是回答问题——它能<strong>执行操作</strong>：查数据库、发邮件、创建文件、部署应用。
    </div>
  </div>
</div>

</div>

<div v-click mt-4 text-center>
  <div callout inline-block>
    <div text-sm>
      <span text-teal-300 font-bold>从「问答机器」</span>
      <span mx-2 opacity-50>→</span>
      <span accent>到「能动手做事的AI同事」</span>
    </div>
  </div>
</div>

---
layout: default
clicks: 3
---

# 名词解释 
* RAG检索增强生成
  *  先把你的文档<strong>上传</strong> → AI <strong>索引</strong>并理解 → 你提问时，AI <strong>先检索</strong>你的文档，<strong>再结合</strong>文档内容生成回答，给 AI 装上你的「企业硬盘」——从此它不是用通用知识回答，而是<strong>用你的资料回答</strong>

---
layout: default
clicks: 2
---

# Token —— AI 的「电表」

💡 <strong text-teal-300>核心认知</strong>：Token 不是成本，是投资。用几毛钱的电费，省几个小时的时间。

<div grid grid-cols-2 gap-6>

<div>
  <div label-green mb-3>⚡ 什么是 Token？</div>

  <div card-green p-4 mb-4>
    <div text-base>
      Token 是 AI 处理文本的<strong accent>最小计量单位</strong><br/>
      可以理解为 AI 的<strong>「电表度数」</strong>——每问一次问题、每生成一段回答，都消耗一定数量的 Token
    </div>
  </div>

  <div v-click space-y-2>
    <div border="~ gray-700" rounded-lg p-2>
      <div text-orange-400 font-bold>🔢 大概怎么算？</div>
      <div opacity-70>
        一个中文字 ≈ <strong>1-2 个 Token</strong><br/>
        一段 500 字的回答 ≈ <strong>500-1000 Token</strong><br/>
        一份 10 页 PDF ≈ <strong>5000-10000 Token</strong>
      </div>
    </div>
  </div>
</div>

<div>
  <div label-blue mb-3>💰 要花多少钱？</div>

  <div v-click space-y-3>
    <div card-blue p-3>
      <div font-bold text-blue-300>DeepSeek v4 参考价格</div>
      <div opacity-70>
        输入：约 <strong>2 元 / 百万 Token</strong><br/>
        输出：约 <strong>8 元 / 百万 Token</strong>
      </div>
    </div>

  <div card-blue p-3>
      <div font-bold text-blue-300>🏭 实际花费估算</div>
      <div opacity-70>
        一次复杂对话（写代码+调试）：<strong>几分钱</strong><br/>
        个人月度正常使用：<strong>几十元</strong> 足够<br/>
        比一本技术书还便宜，但效率高 10 倍
      </div>
    </div>
  </div>
</div>

</div>

---
layout: section
title: Part 2：安装使用Claude Code
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 2：安装使用Claude Code</span>
</h1>

<div section-desc>从安装到上手，一步步带你入门</div>

---
layout: default
clicks: 5
---

# Claude Code —— 你的AI编程搭档

<div mt-3 />

<div card-green p-4 mb-4>
  <div text-sm opacity-80>
    <strong>Claude Code</strong> 是由 Anthropic 推出的终端原生 AI 编程助手。它直接运行在命令行中，不仅能生成代码，还能<strong accent>自主读取整个项目、跨文件修改、运行 Shell 命令和测试</strong>，是实现人机协同开发的强大工具。
  </div>
</div>

<div label-green mb-3>CLI 与网页版 AI 有何不同？</div>

<div grid grid-cols-2 gap-4>
  <div v-click card-blue p-4>
    <div text-blue-300 font-bold text-sm mb-1>🌐 网页版聊天机器人</div>
    <div desc-text>只知道你<strong>粘贴给它的代码片段</strong>，缺乏对项目整体结构的理解</div>
  </div>
  <div v-click card-green p-4>
    <div accent text-sm mb-1>💻 Claude Code（CLI）</div>
    <div desc-text><strong>扫描整个代码库</strong>，对项目结构、文件依赖和业务逻辑有全局理解</div>
  </div>
  <div v-click card-blue p-4>
    <div text-blue-300 font-bold text-sm mb-1>💬 「给出建议」</div>
    <div desc-text>告诉你应该怎么改，但你得自己动手</div>
  </div>
  <div v-click card-green p-4>
    <div accent text-sm mb-1>⚡ 「直接做事」</div>
    <div desc-text>自主搜索、修改代码、运行命令、查看结果——<strong>像一个真实的开发者</strong></div>
  </div>
</div>

<div v-click mt-4 text-center>
  <div callout inline-block>
    <div text-sm text-teal-300>
      🎯 <strong>不离开终端</strong>，读写文件、执行命令、Git 操作——全部搞定
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# CC安装配置

::left::

  <div card-green p-5 h-full>
    <div text-xl mb-3>🖥️</div>
    <div text-green-400 font-bold mb-3 text-lg>公司电脑方案</div>
    <ul text-sm space-y-2 opacity-80>
      <li>📦 Software Center 搜索安装 <strong>Vmware</strong></li>
      <li>🔑 提示管理员密码 → 拨打 <strong>2929 IT热线</strong></li>
      <li>🐧 虚拟机中安装 Linux 操作系统</li>
      <li>✅ 已集成：Chrome、Node.js、Git</li>
    </ul>
    <div text-xs mt-4 p-2 rounded bg="orange-400/10" border="~ orange-400/20">
      ⚠️ 不建议直接在 Windows 里安装，后续配置需要管理员密码，限制较多
    </div>
  </div>

::right::

  <div card-blue p-5 h-full>
    <div text-xl mb-3>💻</div>
    <div text-blue-400 font-bold mb-3 text-lg>个人电脑方案</div>
    <ul text-sm space-y-2 opacity-80>
      <li>🆓 系统干净，安装配置无限制</li>
      <li>🔄 与公司电脑灵活切换使用</li>
      <li>☁️ 文件交互通过<strong>网盘 / Git</strong></li>
      <li>⚡ 推荐 Mac / Linux，Windows 次之</li>
    </ul>
    <div text-xs mt-4 p-2 rounded bg="green-400/10" border="~ green-400/20">
      💡 个人电脑体验最佳，适合快速上手学习
    </div>
  </div>

---
layout: two-cols-header
clicks: 4
---
 
# 其他配套工具

::left::

<div card-blue p-5>
  <div text-xl mb-3>🤖</div>
  <div text-blue-400 font-bold mb-3 text-lg>Claude Code 安装</div>

```bash
# 一条命令完成安装
curl -fsSL https://claude.ai/install.sh | bash
```

  <div text-xs opacity-60 mt-2>
    <a href="https://code.claude.com/docs/en/overview" target="_blank">📖 官方安装文档</a>
  </div>
</div>

<div v-click card-purple p-5 mt-3>
  <div text-xl mb-3>🔄</div>
  <div text-purple-400 font-bold mb-2 text-lg>CC Switch — 模型切换</div>
  <div body-text>
    支持切换底层模型（如 DeepSeek），避免单一账号封号风险<br/>
    <div mt-2 text-xs>
      🛒 付费注册：<a href="https://platform.deepseek.com/" target="_blank">platform.deepseek.com</a>
    </div>
  </div>
</div>

::right::

<div card-orange p-5 mb-3>
  <div text-xl mb-3>📦</div>
  <div text-orange-400 font-bold mb-3 text-lg>可选配套工具</div>
  <div space-y-2 text-sm>
    <div v-click border="~ gray-600" rounded-lg p-3>
      <div font-bold>🔧 Git — 代码版本管理</div>
      <div text-xs opacity-60>记录每一次修改，随时回退，团队协作的基础</div>
    </div>
    <div v-click border="~ gray-600" rounded-lg p-3>
      <div font-bold>🐙 GitHub — 代码托管平台</div>
      <div text-xs opacity-60>云端存储代码，自动备份，部署的起点</div>
    </div>
    <div v-click border="~ gray-600" rounded-lg p-3>
      <div font-bold>🚀 Netlify — Web应用部署</div>
      <div text-xs opacity-60>免费一键部署，生成公网链接，手机就能访问</div>
    </div>
  </div>
</div>

---
layout: two-cols-header
title: Claude Code 能帮你做什么
clicks: 6
---

# 🤖 Claude Code 能帮你做什么

::left::

<div v-click card-green-strong p-4 mb-3>
  <div label-green>📝 帮你写代码</div>
  <div body-text>「帮我做一个设备巡检记录页面」</div>
</div>

<div v-click card-green-strong p-4 mb-3>
  <div label-green>🐛 帮你修bug</div>
  <div body-text>「点击保存按钮没反应，帮我看看」</div>
</div>

<div v-click card-green-strong p-4 mb-3>
  <div label-green>➕ 帮你加功能</div>
  <div body-text>「增加一个导出Excel的功能」</div>
</div>

::right::

<div v-click card-green-strong p-4 mb-3>
  <div label-green>🔍 帮你读代码</div>
  <div body-text>「解释一下这段代码做了什么」</div>
</div>

<div v-click card-green-strong p-4 mb-3>
  <div label-green>🎨 帮你调样式</div>
  <div body-text>「把按钮改成施耐德绿色」</div>
</div>

<div v-click card-green-strong p-4 mb-3>
  <div label-green>🚀 帮你部署</div>
  <div body-text>「帮我把这个应用部署到Netlify」</div>
</div>

<div text-center mt-6 text-base>
  <strong accent>你是项目经理，Claude是你的AI开发团队。</strong>
</div>

---
layout: default
clicks: 4
---

# Prompt —— 和 AI 对话的艺术

<div mt-3 />

<div text-lg font-bold gradient-title mb-4>
  三大基石：Clear · Direct · Specific
</div>

<div card-green p-4 mb-4>
  <div text-sm>所有高级技巧都建立在<strong>清晰的表达</strong>之上。Prompt 不是玄学——它就像给新员工派活一样。</div>
</div>

<div grid grid-cols-3 gap-3 mt-4>
  <div v-click card-orange p-4 text-center>
    <div text-2xl mb-2>🎯</div>
    <div text-orange-300 font-bold>消除歧义</div>
    <div desc-text mt-2>不要让 AI 猜。<br/>你说得越具体，<br/>结果越准确</div>
  </div>
  <div v-click card-green p-4 text-center>
    <div text-2xl mb-2>✅</div>
    <div accent>肯定指令</div>
    <div desc-text mt-2>告诉它<strong>做什么</strong>，<br/>而不是不做什么。<br/>正面指令更高效</div>
  </div>
  <div v-click card-blue p-4 text-center>
    <div text-2xl mb-2>📋</div>
    <div text-blue-300 font-bold>具体语境</div>
    <div desc-text mt-2>像给新员工派活一样，<br/>交代清楚背景、<br/>约束条件和期望</div>
  </div>
</div>

<div v-click mt-5>
  <div text-sm font-bold text-green-400 mb-2>🏭 好的 vs 坏的 Prompt 示例：</div>
  <div grid grid-cols-2 gap-3>
    <div tip-red rounded-r-lg p-3>
      <div text-xs text-red-300>❌ 「帮我做设备管理系统」</div>
    </div>
    <div tip-green-light rounded-r-lg p-3>
      <div text-xs text-green-300>✅ 「做一个设备巡检记录页面，包含设备名称（下拉选择）、巡检日期、温度、压力、状态、巡检人字段，提交后保存并在列表显示」</div>
    </div>
  </div>
</div>

---
layout: default
clicks: 4
---

# Skills —— Claude 的「插件系统」

<div mt-3 />

<div card-green p-4 mb-4>
  <div text-sm>
    <strong>Skills</strong> 是 Claude 生态的<strong accent>复用性</strong>解决方案。如果你教会了 Claude 「如何撰写符合公司规范的周报」，由于对话上下文会重置，下次还得重教一遍。Skills 允许你将这套指令（Prompt + 资料 + 示例）<strong accent>打包成一个「技能包」</strong>，随时挂载。
  </div>
</div>

<div label-green mb-3>这相当于给 Claude 安装了「插件」，让它秒变专家：</div>

<div grid grid-cols-3 gap-3>
  <div v-click card-orange p-4 text-center>
    <div text-3xl mb-2>🌐</div>
    <div text-orange-300 font-bold text-sm>Agent Browser</div>
    <div desc-text mt-1>AI 直接调用无头浏览器，执行网页交互和数据抓取</div>
  </div>
  <div v-click card-blue p-4 text-center>
    <div text-3xl mb-2>📄</div>
    <div text-blue-300 font-bold text-sm>PDF Master</div>
    <div desc-text mt-1>PDF 合并、拆分、提取、OCR 甚至签名——文档处理全搞定</div>
  </div>
  <div v-click card-green p-4 text-center>
    <div text-3xl mb-2>📊</div>
    <div accent text-sm>PPT Master</div>
    <div desc-text mt-1>AI 生成原生可编辑的 PPTX，支持任意文档输入</div>
  </div>
</div>

<div v-click mt-5>
  <div card-teal-sm p-4 text-center>
    <div text-sm>
      💡 <strong text-teal-300>你也能创建自己的 Skill</strong> —— 把「设备巡检报告模板」、「周报格式」、「客户会议纪要结构」打包成技能包，一次创建，永久复用
    </div>
  </div>
</div>

---
layout: section
title: Part 3：AI 常用提效工具
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 3：AI 常用提效工具</span>
</h1>

<div section-desc>不只是编程——AI 在办公场景的全面应用</div>

---
layout: two-cols-header
clicks: 5
---

# AI + 办公文档：告别重复劳动

::left::

<div label-green mb-3>📊 PPT 制作</div>

<div space-y-3>
  <div v-click card-orange p-4>
    <div text-sm font-bold text-orange-300>Gamma / 百度文库 AI</div>
    <div desc-text>输入主题 → AI 自动生成完整演示文稿<br/>配图、排版、动画一步到位</div>
  </div>
  <div v-click card-orange p-4>
    <div text-sm font-bold text-orange-300>Claude PPT Master Skill</div>
    <div desc-text>上传 Word/PDF/Markdown 任意文档<br/>直接生成可编辑的 .pptx 文件</div>
  </div>
  <div v-click card-orange p-4>
    <div text-sm font-bold text-orange-300>效率对比</div>
    <div desc-text>传统方式：找模板 → 复制粘贴 → 调格式 → <strong>2小时</strong><br/>AI 方式：描述需求 → 生成 → 微调 → <strong accent>15分钟</strong></div>
  </div>
</div>

::right::

<div label-blue mb-3>📄 文档处理</div>

<div space-y-3>
  <div v-click card-blue p-4>
    <div text-sm font-bold text-blue-300>PDF 批量处理</div>
    <div desc-text>合并多个 PDF → 一句话<br/>提取指定页面 → 一句话<br/>OCR 识别扫描件 → 一句话</div>
  </div>
  <div v-click card-blue p-4>
    <div text-sm font-bold text-blue-300>智能摘要与翻译</div>
    <div desc-text>长文档 → 3 句话总结要点<br/>中文报告 → 英文版本<br/>会议纪要 → 待办事项清单</div>
  </div>
</div>

---
layout: two-cols-header
clicks: 4
---

# 案例：Claude + PPT Master 制作大客户报告

::left::

<div label-red mb-3>😫 传统方式</div>

<div space-y-2>
  <div v-click="1" card-red p-3>
    <div text-sm font-bold>📋 手工整理数据</div>
    <div desc-text>从 CRM、Excel、邮件中翻找客户数据<br/>销售数据、合同信息、往来记录……</div>
  </div>
  <div v-click="2" card-red p-3>
    <div text-sm font-bold>🎨 找模板、调格式</div>
    <div desc-text>在网上搜 PPT 模板 → 复制粘贴内容 →<br/>逐页调字体、对齐、配色……</div>
  </div>
  <div v-click="3" card-red p-3>
    <div text-sm font-bold>⏰ 反复修改返工</div>
    <div desc-text>领导说「换个风格」→ 全部重来<br/>客户数据更新 → 手动改数字、改图表</div>
  </div>
</div>

<div v-click="4" mt-3 text-center>
  <div card-red rounded-xl p-2 inline-block>
    <div text-sm text-red-300>一份大客户报告 ≈ <strong>半天到一天</strong></div>
  </div>
</div>

::right::

<div label-green mb-3>🤖 Claude + PPT Master 方式</div>

<div space-y-2>
  <div v-click="1" card-green-sm p-3>
    <div text-sm font-bold>📝 第1步：准备原始素材</div>
    <div desc-text>把 Word 报告草稿 / Excel 数据表 /<br/>Markdown 大纲 任意格式丢给 Claude</div>
  </div>
  <div v-click="2" card-green-sm p-3>
    <div text-sm font-bold>💬 第2步：一句话描述需求</div>
    <div desc-text>「把这份大客户分析报告做成 PPT，<br/>施耐德配色，包含数据图表，10页以内」</div>
  </div>
  <div v-click="3" card-green-sm p-3>
    <div text-sm font-bold>✨ 第3步：生成 .pptx 直接可用</div>
    <div desc-text>Claude 调用 PPT Master Skill<br/>自动排版、配图、设动画 → 下载即用</div>
  </div>
</div>

<div v-click="4" mt-3 text-center>
  <div card-green-strong p-2 inline-block>
    <div text-sm text-green-300>一份大客户报告 ≈ <strong>15-30 分钟</strong></div>
  </div>
</div>

---
layout: default
clicks: 4
---

# AI + 数据处理：Excel 的终极进化

<div mt-4 />

<div grid grid-cols-2 gap-4>

<div>
  <div label-red mb-3>📈 传统 Excel 的痛点</div>
  <div space-y-2>
    <div v-click card-red p-3>
      <div text-sm>😫 复杂公式记不住，每次都得百度</div>
    </div>
    <div v-click card-red p-3>
      <div text-sm>😫 多人协作版本混乱，「最终版_v3_final.xlsx」</div>
    </div>
    <div v-click card-red p-3>
      <div text-sm>😫 数据量大了就卡顿、崩溃</div>
    </div>
    <div v-click card-red p-3>
      <div text-sm>😫 做报表需要手动汇总、透视、画图</div>
    </div>
  </div>
</div>

<div>
  <div text-lg font-bold text-teal-400 mb-3>🤖 AI 时代的解决方案</div>
  <div space-y-2>
    <div card-green-sm p-3>
      <div text-sm>✨ 「本月的异常记录按设备分类汇总」</div>
      <div text-xs opacity-60>→ AI 自动写 SQL/公式，秒出结果</div>
    </div>
    <div card-green-sm p-3>
      <div text-sm>✨ 「把这三张表合并，去重后导出」</div>
      <div text-xs opacity-60>→ AI 生成处理脚本，一键完成</div>
    </div>
    <div card-green-sm p-3>
      <div text-sm>✨ 「帮我分析这组数据的趋势和异常点」</div>
      <div text-xs opacity-60>→ AI 直接给出结论 + 可视化图表</div>
    </div>
  </div>
</div>

</div>

<div mt-4 text-center>
  <div card-green-strong p-3 inline-block>
    <div text-sm>
      <strong accent>从「操作工」到「指挥官」</strong> —— 你只管描述你想要什么结果，AI 帮你操作数据
    </div>
  </div>
</div>

---
layout: default
clicks: 3
---

# AI + 自动化工作流

<div mt-4 />

<div label-green mb-4>把重复性任务交给 AI，你只需要做决策</div>

<div grid grid-cols-3 gap-4>

<div v-click card-orange p-5 text-center>
  <div text-3xl mb-3>📧</div>
  <div text-orange-300 font-bold text-sm mb-2>邮件与沟通</div>
  <ul text-xs text-left space-y-1 opacity-75>
    <li>• 「帮我把这封英文邮件翻译并回复」</li>
    <li>• 「从这串邮件中提取待办事项」</li>
    <li>• 「根据这个客户对话写跟进纪要」</li>
    <li>• 「生成本周工作周报发给团队」</li>
  </ul>
</div>

<div v-click card-blue p-5 text-center>
  <div text-3xl mb-3>🔍</div>
  <div text-blue-300 font-bold text-sm mb-2>信息检索</div>
  <ul text-xs text-left space-y-1 opacity-75>
    <li>• 「搜索2025年所有关于XX的邮件」</li>
    <li>• 「查一下这个设备的故障历史记录」</li>
    <li>• 「对比三家供应商的报价方案」</li>
    <li>• 「找一下这个行业的最新标准文档」</li>
  </ul>
</div>

<div v-click card-green p-5 text-center>
  <div text-3xl mb-3>⚙️</div>
  <div accent text-sm mb-2>流程自动化</div>
  <ul text-xs text-left space-y-1 opacity-75>
    <li>• 「每周五自动生成巡检数据汇总」</li>
    <li>• 「新数据录入后自动发通知给负责人」</li>
    <li>• 「异常数据自动标记并截屏保存」</li>
    <li>• 「库存低于阈值自动发邮件提醒」</li>
  </ul>
</div>

</div>

<div divider />

<div text-center>
  <div callout inline-block>
    <div text-base>
      💡 <strong text-teal-300>核心思路</strong>：你发现痛点 → 描述给 AI → AI 做工具解决 → 你专注更有价值的事
    </div>
  </div>
</div>

---
layout: center
---

# ☕ 休息 5 分钟

站起来走走，喝杯水

<div mt-8 text-lg opacity-50>回来之后进入今天的核心 ——</div>
<div text-2xl mt-2>
  <span gradient-title>Part 4：Vibe Coding</span>
</div>

---
layout: section
title: Part 4：Vibe Coding
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 4：Vibe Coding</span>
</h1>

<div section-desc>你的AI编程搭档，和全新的编程方式</div>

---
layout: default
clicks: 3
---

# Vibe Coding —— 用说话的方式编程

<div grid grid-cols-2 gap-6 mt-4>

<div>
  <div label-red mb-3>❌ 传统学编程</div>
  <div card-red p-4>
    <div text-sm opacity-80>
      学语法 → 记API → 看教程 →<br/>
      写代码 → 出bug → 搜索 →<br/>
      改代码 → 又出bug → 再搜 →<br/>
      <strong>一个功能搞一天，数月才能上手</strong>
    </div>
  </div>
</div>

<div>
  <div label-green mb-3>✅ AI Vibe Coding</div>
  <div card-green-strong p-4>
    <div text-sm opacity-80>
      描述需求 → Claude写代码 →<br/>
      你运行测试 → 不满意就改 →<br/>
      满意继续 →<br/>
      <strong>一个功能十分钟，今天就能开始</strong>
    </div>
  </div>
</div>

</div>

<div v-click mt-4 text-center>
  <strong accent>你最大的价值不是写代码，而是你最懂业务需要什么。</strong>
</div>

<div v-click mt-3 text-center>
  <div callout inline-block>
    <div text-sm>
      🎯 <strong text-teal-300>今天的目标</strong>：每个人在自己电脑跑起一个 Web 应用，并可部署到互联网
    </div>
  </div>
</div>

---
layout: default
clicks: 4
---

# 和 Claude 对话的核心公式

一句好需求 = 做什么 + 有什么字段 + 要怎么交互

<div mt-5 text-center>
  <div callout inline-block>
    <div text-sm>
      💡 <strong text-teal-300>核心原则</strong>：像给新员工派活一样具体——你交代得越清楚，结果越符合预期
    </div>
  </div>
</div>

## 好需求 vs 坏需求

<div grid grid-cols-2 gap-6>

<div>
  <div label-red mb-3>❌ 太模糊 —— Claude 只能瞎猜</div>
  <div space-y-3>
    <div v-click tip-red p-3>
      <div text-sm text-red-300>「做一个设备管理系统」</div>
      <div text-xs opacity-50 mt-1>什么设备？哪些功能？谁用？数据存哪里？</div>
    </div>
    <div v-click tip-red p-3>
      <div text-sm text-red-300>「帮我写个报表功能」</div>
      <div text-xs opacity-50 mt-1>什么数据？什么格式？按什么维度汇总？</div>
    </div>
    <div v-click tip-red p-3>
      <div text-sm text-red-300>「弄个数据看板」</div>
      <div text-xs opacity-50 mt-1>哪些指标？实时还是汇总？给谁看？</div>
    </div>
  </div>
</div>

<div>
  <div label-green mb-3>✅ 具体清晰 —— Claude 「看见」了</div>
  <div space-y-3>
    <div v-click tip-green-light p-4>
      <div text-sm text-green-300 leading-relaxed>
        「做一个<strong>设备巡检记录页面</strong>，有表单和列表两部分。表单包含<strong>设备名称（下拉选择）、巡检日期、温度读数(°C)、压力读数(bar)、运行状态（正常/关注/异常）、巡检人、备注</strong>。提交后保存到列表，列表按<strong>日期倒序</strong>显示，支持<strong>按设备名称搜索</strong>。」
      </div>
      <div text-xs opacity-50 mt-1>做什么 ✓ 有什么字段 ✓ 要怎么交互 ✓</div>
    </div>
  </div>
</div>


</div>

<div
  border="~ gray-700"
  rounded-xl
  p-5
  text-left
  text-base
  bg="gray-800/50"
>
  <div text-sm opacity-50 mb-2>✅ 标准模板：</div>
  <div text-sm leading-relaxed>
    我要做一个<strong accent>【设备巡检记录表】</strong>（做什么），<br/>
    包含<strong accent>【设备名称、巡检日期、温度、压力、状态、巡检人】</strong>字段（有什么），<br/>
    提交后<strong accent>【数据保存并显示在列表里，异常记录用红色标出来】</strong>（要怎么交互）。
  </div>
</div>


---
layout: default
clicks: 6
---

# 常见误区 vs 正确心态

<div mt-4 />

<div text-lg text-center mb-4>
  <span accent>Vibe Coding 的门槛不是技术，而是：敢开始 + 愿意试 + 小步迭代</span>
</div>

<div space-y-2 text-sm mt-6>
  <div v-click flex items-center gap-2>
    <span text-red-400>❌ 先学编程再开始</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 边做边学，直接开始</span>
  </div>
  <div v-click flex items-center gap-2>
    <span text-red-400>❌ 一上来就做完整系统</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 从一个小工具开始</span>
  </div>
  <div v-click flex items-center gap-2>
    <span text-red-400>❌ AI一次必须做对</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 多轮对话不断优化</span>
  </div>
  <div v-click flex items-center gap-2>
    <span text-red-400>❌ 看不懂代码就用不了</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 会用 + 会改需求就够</span>
  </div>
  <div v-click flex items-center gap-2>
    <span text-red-400>❌ 这个太简单没价值</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 小工具也能提升效率</span>
  </div>
  <div v-click flex items-center gap-2>
    <span text-red-400>❌ 业务太复杂AI做不了</span>
    <span text-xs opacity-30>→</span>
    <span text-green-400>✅ 越贴近业务越有价值</span>
  </div>
</div>

---
layout: default
clicks: 3
---

# 30 秒理解 Web 全貌

<div grid grid-cols-2 gap-6 mt-4>

<div>
  <div label-green mb-3>🏭 类比工业系统（你早就懂了）</div>

| Web 应用 | 工业系统 |
|---|---|
| 浏览器 / 前端 | HMI 触摸屏 |
| 后端服务器 | PLC / DCS 控制器 |
| 数据库 | SCADA 历史归档 |
| API 接口 | Modbus / OPC-UA |

  <div v-click mt-3 text-sm opacity-70>
    前端三要素：<strong>HTML</strong>（结构）+ <strong>CSS</strong>（样式）+ <strong>JavaScript</strong>（交互）
  </div>
</div>

<div>
  <div label-blue mb-3>💡 但你不必手写这些</div>

  <div v-click card-green-strong p-4 mb-3>
    <div text-sm>
      你只需要说：<br/>
      <em>「我要一个表单，含设备名称、温度、状态，提交按钮是绿色的」</em>
    </div>
    <div mt-2 text-sm accent>Claude 帮你全部生成好</div>
  </div>

  <div v-click card-teal-sm p-4>
    <div text-sm>
      <strong text-teal-300>数据库 = 结构化表格 + 查询功能</strong><br/>
      <span desc-text>告诉 Claude 你要存什么数据，它帮你设计表结构、写查询</span>
    </div>
  </div>
</div>

</div>

---
layout: default
clicks: 7
---

# Vibe Coding 工作流程

<div
  rounded-2xl
  text-center
>

  <div v-click border="~ gray-600" rounded-lg p-2 bg="gray-800/50">
    <strong>1️⃣ 你说出需求</strong>
    <div text-xs opacity-50 mt-1>用自然语言，像跟同事聊天一样</div>
  </div>
  <div v-click text-2xl opacity-50 >↓</div>
  <div v-click border="~ gray-600" rounded-lg p-2  bg="gray-800/50">
    <strong>2️⃣ Claude 生成代码</strong>
    <div text-xs opacity-50 mt-1>几秒到几分钟，代码就出来了</div>
  </div>
  <div v-click text-2xl opacity-50>↓</div>
  <div v-click border="~ gray-600" rounded-lg p-2 bg="gray-800/50">
    <strong>3️⃣ 你运行测试、试用</strong>
    <div text-xs opacity-50 mt-1>在浏览器里看效果，实际操作用用看</div>
  </div>
  <div v-click text-2xl opacity-50>↓</div>
  <div v-click border="~ gray-600" rounded-lg p-2  bg="green-400/10">
    <strong>4️⃣ 不满意就告诉Claude改 → 满意就继续下一个功能</strong>
    <div text-xs opacity-50 mt-1>每轮迭代几分钟到十几分钟</div>
  </div>
</div>

<div divider />

<div text-center mt-2 text-base>
  就像做项目：一个一个功能来，逐步加。<br/>
  <strong accent>不是瀑布式，是敏捷迭代。</strong>
</div>

---
layout: default
title: DPMS开发分享
---

<div text-2xl font-bold pb-2>
  <span gradient-title>
    设计院信息管理系统
  </span>
  <div fixed right-12 top-8 text-gray text-base><a href="https://sedpms.netlify.app" target="_blank" class="text-decoration-underline">https://sedpms.netlify.app</a></div>
</div>

<div grid="~ cols-[1fr_1.5fr_1.2fr]" gap-3 text-sm>

  <div card-green p-4>
    <div text-base font-bold text-green-400 mb-3>🛠 技术栈</div>
    <ul text-xs space-y-1>
      <li><strong>Claude Code</strong> + DeepSeek-v4</li>
      <li><strong>Nuxt 3</strong> — Vue 3 + TypeScript</li>
      <li><strong>PrimeVue</strong> + UnoCSS</li>
      <li><strong>Supabase</strong> — 数据库/认证</li>
      <li><strong>Chart.js</strong> — 仪表板与报表</li>
      <li><strong>DeepSeek API</strong> — AI 拜访分析</li>
      <li><strong>Netlify</strong> — 自动部署</li>
    </ul>
    <div text-xs opacity-50 mt-3>全部由 Claude Code 对话开发完成</div>
  </div>

  <div space-y-2>
    <div card-green p-3>
      <div text-base font-bold text-green-400 mb-2>🤖 AI 功能点</div>
      <div text-xs font-bold mb-1>【客户拜访记录智能分析】</div>
      <div text-xs opacity-60 mb-2>调用 DeepSeek Chat API 进行结构化分析</div>
      <ol text-xs space-y-0.5 px-3>
        <li><strong>拜访概览</strong> — 统计次数、时间跨度、频率</li>
        <li><strong>关键主题</strong> — 识别 3-5 个反复出现的主题</li>
        <li><strong>机会识别</strong> — 提取销售线索并判断阶段</li>
        <li><strong>行动项</strong> — 归纳待办事项及责任人</li>
        <li><strong>健康度</strong> — 关系评分 + 改善建议</li>
      </ol>
    </div>
    <div card-green p-3>
      <div text-base font-bold text-green-400 mb-2>👥 应用规模</div>
      <div text-xs opacity-80>
        覆盖 DI Sales、Sales Leader、BDM、产线 OP 等角色<br/>
        <strong accent>72 人</strong>日常使用
      </div>
    </div>
  </div>

  <div card-green p-4>
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
layout: section
title: Part 5：动手实战
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 5：动手实战</span>
</h1>

<div section-desc>从零到上线，打造团队任务看板工具</div>

---
layout: two-cols-header
title: 快速热身：5分钟感受 Vibe Coding
---

# ⚡ 快速热身：5分钟感受 Vibe Coding

::left::
<div tip-green rounded-r-lg p-4 text-base
>
  <strong accent>⏱️ 5分钟</strong> 先做一个极简 Demo，感受 AI 编程的节奏
</div>

<div mt-4 card-dark p-5>
  <div text-sm opacity-60 mb-2>对 Claude 说：</div>
  <div text-sm leading-relaxed>
    帮我做一个待办事项管理页面：<br/>
    1. 可以添加任务、标记完成、删除<br/>
    2. 页面简洁清爽<br/>
    用 HTML + CSS + JavaScript 实现
  </div>
</div>

<div mt-4 text-center text-sm>
  <strong accent>先跑起来，感受节奏。下一步我们做真正的团队看板。</strong>
</div>

::right::

<div mt-8 />

<div text-lg font-bold mb-3>
  <span text-green-400>💡 应用场景发散</span>
</div>

<div space-y-3 text-sm>
  <div card-orange-sm p-3>
    <div text-orange-400 font-bold text-xs mb-1>销售类</div>
    <div desc-text>客户跟进看板 · 项目推进 · 报价追踪</div>
  </div>
  <div card-blue-sm p-3>
    <div text-blue-400 font-bold text-xs mb-1>管理类</div>
    <div desc-text>团队任务 · KPI追踪 · 会议纪要 · 周报汇总</div>
  </div>
  <div card-green-sm p-3>
    <div text-green-400 font-bold text-xs mb-1>产线类 <span text-xs opacity-50>（你最熟悉）</span></div>
    <div desc-text>设备巡检 · 保养计划 · 备件管理 · 交接班</div>
  </div>
</div>

---
layout: default
---

# 热身结束，现在来真的

<div grid grid-cols-2 gap-6 mt-8>

<div card-dark p-5 text-center>
  <div text-lg font-bold text-gray-400 mb-3>🏃 刚才的热身</div>
  <div text-sm opacity-70>
    5 分钟 · 纯 HTML 页面<br/>
    数据存浏览器 · 用完即弃
  </div>
  <div mt-3 text-xs opacity-50>目的是感受节奏</div>
</div>

<div card-green-strong p-5 text-center>
  <div label-green mb-3>🚀 接下来</div>
  <div text-sm opacity-80>
    一个下午 · 完整全栈应用<br/>
    数据库 + 拖拽 + 仪表盘 + 部署上线
  </div>
  <div mt-3 text-xs opacity-50>目的是做出能用的工具</div>
</div>

</div>

<div mt-6 text-center text-lg>
  <strong accent>方法完全一样：描述需求 → Claude 生成 → 你测试 → 迭代</strong>
</div>

---
layout: default
---

# 实战目标：团队任务看板

<div mt-4 />

<div card-green-lg p-5 text-lg text-center mb-6>
  <strong>目标：</strong>一个团队内部的任务看板工具 —— 每个人知道自己要做什么、做到哪了<br/>
  Leader 一眼看到全局进展，有问题直接给评论
</div>

<div grid grid-cols-3 gap-4>
  <div card-gray p-4 text-center>
    <div text-3xl mb-2>📋</div>
    <div font-bold>看板视图</div>
    <div text-xs opacity-60 mt-1>待办 · 进行中 · 已完成<br/>三列拖拽式管理</div>
  </div>
  <div card-gray p-4 text-center>
    <div text-3xl mb-2>👤</div>
    <div font-bold>任务分配</div>
    <div text-xs opacity-60 mt-1>每张卡片有负责人<br/>按人员筛选查看</div>
  </div>
  <div card-gray p-4 text-center>
    <div text-3xl mb-2>💬</div>
    <div font-bold>评论反馈</div>
    <div text-xs opacity-60 mt-1>Leader 可在卡片下留言<br/>指出问题、给出建议</div>
  </div>
  <div card-gray p-4 text-center>
    <div text-3xl mb-2>📊</div>
    <div font-bold>进度仪表盘</div>
    <div text-xs opacity-60 mt-1>完成率、各人负载<br/>一目了然</div>
  </div>
  <div card-gray p-4 text-center>
    <div text-3xl mb-2>📱</div>
    <div font-bold>手机适配</div>
    <div text-xs opacity-60 mt-1>手机扫码就能用<br/>随时查看和操作</div>
  </div>
  <div card-gray p-4 text-center>
    <div text-3xl mb-2>🚀</div>
    <div font-bold>部署上线</div>
    <div text-xs opacity-60 mt-1>Netlify 公网访问<br/>链接分享给团队</div>
  </div>
</div>

---
layout: default
clicks: 4
title: 第1步 —— 用一句话创建项目
---
 
# 1️⃣ 第1步 —— 用一句话创建项目

<div mt-4 />

<div tip-green p-4 text-base
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
  帮我创建一个团队任务看板Web应用，具体要求：<br/>
  1. 看板视图，三列：待办、进行中、已完成，卡片可以拖拽移动<br/>
  2. 每张任务卡片包含：任务标题、负责人（下拉选择）、截止日期、优先级（高/中/低）<br/>
  3. 点击卡片可展开详情，支持添加评论<br/>
  4. 顶部有仪表盘，显示各状态任务数、完成率、每人负载<br/>
  5. 用绿色作为主题色
</div>

<div grid grid-cols-3 gap-3 mt-4>
  <div v-click border="~ gray-700" rounded-lg p-3 text-center text-sm>
    <div text-green-400 font-bold>📁 创建项目结构</div>
    <div text-xs opacity-50>生成所有需要的文件和文件夹</div>
  </div>
  <div v-click border="~ gray-700" rounded-lg p-3 text-center text-sm>
    <div text-green-400 font-bold>🗄️ 配置数据库</div>
    <div text-xs opacity-50>创建表和字段，设置数据关系</div>
  </div>
  <div v-click border="~ gray-700" rounded-lg p-3 text-center text-sm>
    <div text-green-400 font-bold>▶️ 给你运行命令</div>
    <div text-xs opacity-50>告诉你敲什么命令启动应用</div>
  </div>
</div>

<div v-click text-center mt-4 text-base>
  <strong accent>你只需要跟着Claude的指引操作，不需要写一行代码。</strong>
</div>

---
layout: two-cols-header
clicks: 6
title: 第2步 —— 运行、试用、迭代
---

# 2️⃣ 第2步 —— 运行、试用、迭代

::left::

<div card-gray p-5>
  <div text-lg font-bold mb-3 text-green-400>▶️ 运行</div>
  <div body-text mb-2>对 Claude 说：</div>

  <div border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
    > 「帮我运行起来，让我看看效果」
  </div>

  <div mt-4 body-text>
    几分钟内就能在浏览器里看到一个能用的应用：
  </div>
  <div text-sm mt-1 space-y-1>
    <div v-click>🟢 三列看板视图</div>
    <div v-click>🟢 可拖拽任务卡片</div>
    <div v-click>🟢 仪表盘统计面板</div>
  </div>
</div>

::right::

<div card-green-strong p-5>
  <div text-lg font-bold mb-3 text-green-400>🔄 迭代改进</div>
  <div body-text mb-2>试用后告诉Claude要改什么：</div>

  <div space-y-2>
    <div v-click border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
      > 「卡片上增加'预计工时'字段」
    </div>
    <div v-click border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
      > 「过期任务用红色边框标记」
    </div>
    <div v-click border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
      > 「加搜索框，按负责人和关键词筛选」
    </div>
  </div>
</div>

<div text-center mt-4 text-base>
  <strong accent>每句话都是一次迭代，几分钟就改好。这就是 Vibe Coding。</strong>
</div>

---
layout: default
clicks: 5
title: 第3步 —— 逐步叠加功能
---

# 3️⃣ 第3步 —— 逐步叠加功能

<div mt-4 />

<div grid grid-cols-1 gap-2>
  <div card-gray p-4>
    <div text-sm font-bold text-green-400>💬 第1轮：评论功能</div>
    <div body-text mt-1>「点击任务卡片可以展开详情页，支持添加评论，每条评论显示时间和作者」</div>
  </div>

  <div v-click card-gray p-4>
    <div text-sm font-bold text-green-400>📊 第2轮：Leader 仪表盘</div>
    <div body-text mt-1>「加一个首页仪表盘，显示团队任务完成率、各人负载统计、本周趋势，用卡片+图表布局」</div>
  </div>

  <div v-click card-gray p-4>
    <div text-sm font-bold text-green-400>🔔 第3轮：截止日期提醒</div>
    <div body-text mt-1>「任务到期当天自动标红，逾期未完成的任务在顶部显示警告横幅」</div>
  </div>

  <div v-click card-gray p-4>
    <div text-sm font-bold text-green-400>📱 第4轮：手机端适配</div>
    <div body-text mt-1>「帮我把移动端显示效果优化，看板在小屏幕上也能滑动操作」</div>
  </div>

  <div v-click card-gray p-4>
    <div text-sm font-bold text-green-400>📥 第5轮：导出周报</div>
    <div body-text mt-1>「加导出按钮，把本周完成的任务和进展一键导出为Excel周报」</div>
  </div>
</div>

<div v-click text-center mt-6 text-base>
  <strong accent>每轮几分钟到十几分钟。一个下午，完整的团队看板系统就出来了。</strong>
</div>

---
layout: two-cols
clicks: 3
title: 第4步 —— 数据存储方案
---

# 💾 数据存储方案

<div mt-6 />

| 方案 | 特点 | 适合场景 |
|---|---|---|
| SQLite | 单文件，零配置 | 个人/小团队内部使用 |
| Supabase | 在线库，免费额度 | 多人异地协作使用 |
| localStorage | 存浏览器里 | 纯Demo/快速原型验证 |

<div mt-4 />

<div v-click card-green-strong p-4>
  <div text-sm font-bold text-green-400>💬 怎么跟 Claude 说：</div>
  <div text-sm mt-1>
    > 「用SQLite做数据库」 <span text-xs opacity-50>（推荐起步方案，最简单）</span>
  </div>
  <div text-sm mt-1>
    > 「改用Supabase，让多人用」 <span text-xs opacity-50>（需要多人协作时迁移）</span>
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
    <div v-click text-sm opacity-60 mt-3>
      💡 后期从 SQLite 切到 Supabase？<br/>告诉 Claude 一句就行
    </div>
  </div>
</div>

---
layout: default
---

# 部署上线

🚀 把你的代码放到一台24小时运行的公网服务器上

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-2xl
  text-center
>
  <div grid grid-cols-3 gap-4 text-sm mt-4 p-4>
    <div>
      <div text-3xl mb-2>📱</div>
      <div font-bold>手机就能打开</div>
      <div text-xs opacity-50>浏览器输入网址即可</div>
    </div>
    <div>
      <div text-3xl mb-2>🔗</div>
      <div font-bold>链接分享即用</div>
      <div text-xs opacity-50>发给同事就能打开</div>
    </div>
    <div>
      <div text-3xl mb-2>🚫</div>
      <div font-bold>不用装任何软件</div>
      <div text-xs opacity-50>不用打开 Claude Code</div>
    </div>
  </div>
</div>

<div text-center mt-4 text-lg>
  🚀 用 <strong accent>Netlify</strong> 部署，<strong>免费</strong>，一句话搞定。
</div>

<div grid="~ cols-2 gap-4 mt-4">
<div card-gray p-4>
  <div text-lg font-bold mb-3 text-green-400>📋 准备工作</div>
  <div text-sm space-y-2>
    <div>1️⃣ 去 <strong accent>netlify.com</strong> 用 GitHub 账号注册</div>
    <div>2️⃣ 把代码推送到 GitHub（Claude 帮你）</div>
  </div>
</div>

<div card-gray p-4>
  <div text-lg font-bold mb-3 text-green-400>💬 然后对 Claude 说</div>
  <div border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
    > 「帮我把项目部署到Netlify」
  </div>
</div>

<div card-green-strong p-4>
  <div text-lg font-bold mb-3 text-green-400>🤖 Claude 会自动完成</div>
  <div text-sm space-y-2>
    <div>1. 🔧 安装 Netlify CLI</div>
    <div>2. 🔑 引导你登录授权</div>
    <div>3. 🏗️ 构建项目文件</div>
    <div>4. 🚀 上传到 Netlify 服务器</div>
    <div>5. 🔗 给你一个网址</div>
  </div>

  <div mt-3 text-center text-base>
    <code text-green-300>https://xxx.netlify.app</code>
  </div>
</div>

</div>

<div text-center mt-4 text-base>
  <strong accent>部署成功后，把网址发到手机上就能打开使用。</strong>
</div>

---
layout: two-cols
clicks: 3
---

# ⚡ 需要后端+数据库？

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
  <ul text-xs mt-2 space-y-1 opacity-70>
    <li>🗄️ 自动生成 RESTful API</li>
    <li>🔐 内置用户认证（登录/注册）</li>
    <li>🔄 实时数据同步</li>
    <li>📊 免费 500MB 数据库空间</li>
  </ul>
</div>

<div mt-4 />

<div v-click text-sm>
  <strong>💬 对 Claude 说：</strong>
  <div border="~ gray-600" rounded-lg p-3 bg="gray-800/50" mt-1>
    > 「帮我把应用改成用Supabase做后端和数据库」
  </div>
</div>

<div v-click mt-3 text-sm>
  <strong>🤖 Claude 会帮你：</strong>
  <div desc-text mt-1 space-y-1>
    <div>1. 指导你在 supabase.com 创建项目</div>
    <div>2. 设计数据库表结构</div>
    <div>3. 生成 API 调用代码</div>
    <div>4. 处理用户登录认证</div>
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
    <div text-4xl mb-4>🧩</div>
    <div text-xl font-bold mb-2>
      <span text-green-400>全栈应用</span>
    </div>
    <div text-base opacity-80 mb-2>
      前端 → 浏览器里的网页<br/>
      后端 → Supabase API<br/>
      数据库 → PostgreSQL
    </div>
    <div v-click text-sm text-teal-300 mt-3>
      💡 你不需要懂其中任何一项技术<br/>Claude 帮你全部串起来
    </div>
  </div>
</div>

---
layout: default
title: 更多应用场景
---

# 💡 更多你可以做的工业业务应用

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

<div text-center mt-3 body-text>
  这些都是施耐德同事日常工作中真实需要的工具。<br/>
  <strong accent>你来做，因为你最懂需求。AI 只是你的工具。</strong>
</div>

---
layout: default
title: 你不需要成为软件工程师
clicks: 3
---

# 你不需要成为软件工程师

描述需求 → 审查结果 → 提出修改 → 迭代完善。
你的角色不是「码农」，而是「做决策的人」。

<div flex justify-center gap-6 my-4>
  <div v-click card-green-lg p-6 text-center flex-1>
    <div text-4xl mb-3>🧠</div>
    <div label-green>业务知识</div>
    <div text-sm opacity-70>你最懂产线需要什么<br/>这是AI替代不了的</div>
  </div>
  <div v-click card-green-lg p-6 text-center flex-1>
    <div text-4xl mb-3>💬</div>
    <div label-green>清晰表达</div>
    <div text-sm opacity-70>做什么+有什么+要怎么<br/>说出来就行</div>
  </div>
  <div v-click card-green-lg p-6 text-center flex-1>
    <div text-4xl mb-3>🤖</div>
    <div label-green>Claude Code</div>
    <div text-sm opacity-70>把需求变成代码<br/>你的AI搭档</div>
  </div>
</div>

<div grid="~ cols-2 gap-4 mt-2">
<div tip-green-light p-4 mb-3>
  <div label-green mb-2>✅ 要做的</div>
  <div text-sm opacity-80 space-y-1>
    <div>• 用你熟悉的业务语言描述</div>
    <div>• 一次只改一个功能</div>
    <div>• 生成后立刻运行测试</div>
    <div>• 不懂就问「这段代码做了什么？」</div>
    <div>• 从小功能开始，逐步复杂</div>
    <div>• 出现报错直接复制粘贴给 Claude</div>
  </div>
</div>

<div tip-red p-4>
  <div label-red mb-2>❌ 不要做的</div>
  <div text-sm opacity-80 space-y-1>
    <div>• 说「做个设备管理系统」（太笼统）</div>
    <div>• 一次提10个需求（互相干扰）</div>
    <div>• 对问题沉默不管（告诉Claude）</div>
    <div>• 不思考照单全收（你说了算）</div>
    <div>• 怕犯错（贴错误信息给Claude）</div>
    <div>• 一上来就追求完美（先跑起来再说）</div>
  </div>
</div>
</div>

---
layout: default
title: 常见问题
clicks: 4
---

# ❓ 常见问题

<div mt-4 />

<div grid grid-cols-1 gap-3>
  <div card-gray p-4>
    <div font-bold text-green-400>Q: 我完全没写过代码，真的可以吗？</div>
    <div body-text>A: 可以。你不需要「写」代码，只需「描述需求」。就像不用会做菜才能点菜，你只管说你要什么，Claude是那个做菜的人。</div>
  </div>

  <div v-click card-gray p-4>
    <div font-bold text-green-400>Q: Claude生成的代码质量可靠吗？</div>
    <div body-text>A: 对于业务工具类应用完全够用。需求描述越清晰，代码质量越高。你才是最终把关的人——运行看看效果就知道了。</div>
  </div>

  <div v-click card-gray p-4>
    <div font-bold text-green-400>Q: 遇到报错怎么办？</div>
    <div body-text>A: 把报错信息直接复制给Claude。大多数错误它秒懂，立刻给出修复方案。AI 修 AI 的 bug，效率极高。</div>
  </div>

  <div v-click card-gray p-4>
    <div font-bold text-green-400>Q: 在公司可以用吗？数据安全吗？</div>
    <div body-text>A: 涉及敏感数据可以和IT部门沟通，部署在公司内部。工具都能迁移，Claude也会帮你。对于非敏感的个人效率工具，可以直接上手。</div>
  </div>

  <div v-click card-gray p-4>
    <div font-bold text-green-400>Q: 做出来的应用能给同事用吗？</div>
    <div body-text>A: 当然！部署到Netlify后就是一个链接，任何人用浏览器都能打开。不需要安装任何软件，手机电脑平板都可以。</div>
  </div>
</div>

---
layout: two-cols
title: 内容回顾
clicks: 4
---

# 📝 内容回顾

<div mt-4 />

<div v-click card-orange p-4 mb-3>
  <div font-bold text-orange-400>🧠 AI 基础认知</div>
  <div body-text>LLM = 读过海量知识的大脑 | Agent = 能动手做事的智能代理<br/>AI 是工具，你是决策者</div>
</div>

<div v-click card-blue p-4 mb-3>
  <div font-bold text-blue-400>🌐 Web 应用架构</div>
  <div body-text>前端=HMI | 后端=控制器 | 数据库=历史归档<br/>API=Modbus/OPC-UA —— 你早就懂了</div>
</div>

<div v-click card-green-strong p-4 mb-3>
  <div font-bold text-green-400>💬 Vibe Coding</div>
  <div body-text>描述需求 → AI写代码 → 你测试 → 迭代 → 上线<br/>核心公式：做什么 + 有什么字段 + 要怎么交互</div>
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
      链接分享给同事即可
    </div>
    <div v-click text-sm text-teal-300 mt-4>
      💡 从想法到上线<br/>一个下午就能完成
    </div>
  </div>
</div>

---
layout: default
---

# 今天就开始 —— 你的第一步
💡 记住：<strong>先跑起来再说</strong>，不要追求完美。一步一个功能。


<div grid grid-cols-2 gap-6>

<div>
  <div label-green mb-4>🚀 行动清单</div>
  <div space-y-3>
    <div card-green-sm p-3 flex gap-3>
      <div text-green-400 font-bold text-lg>1</div>
      <div>
        <div text-sm font-bold>打开 Claude Code</div>
        <div desc-text>就现在，不要等</div>
      </div>
    </div>
    <div card-green-sm p-3 flex gap-3>
      <div text-green-400 font-bold text-lg>2</div>
      <div>
        <div text-sm font-bold>想一个你最烦的重复劳动</div>
        <div desc-text>填表格、汇总数据、写报告……</div>
      </div>
    </div>
    <div card-green-sm p-3 flex gap-3>
      <div text-green-400 font-bold text-lg>3</div>
      <div>
        <div text-sm font-bold>用核心公式描述需求</div>
        <div desc-text>做什么 + 有什么字段 + 要怎么交互</div>
      </div>
    </div>
  </div>
</div>

<div>
  <div label-blue mb-4>💡 推荐第一个项目</div>
  <div space-y-2>
    <div card-blue-sm p-3>
      <div text-sm font-bold>📋 设备巡检记录表</div>
      <div desc-text>替代纸质表格，数据可查可统计</div>
    </div>
    <div card-blue-sm p-3>
      <div text-sm font-bold>📝 交接班日志</div>
      <div desc-text>结构化记录，自动汇总，可追溯</div>
    </div>
    <div card-blue-sm p-3>
      <div text-sm font-bold>📦 备件库存清单</div>
      <div desc-text>库存可视化，低库存自动提醒</div>
    </div>
  </div>

</div>
</div>

---
layout: center
title: ending
---

# 谢谢！

从现在开始，你就是创造者

<div text-center mt-4 text-sm opacity-40>
  有问题随时找我：张官祥 | 18519299525
</div>
