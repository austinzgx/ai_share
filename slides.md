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
  <span gradient-title>Part 1：基础AI知识</span>
</h1>

<div text-xl opacity-60 mt-4>从零理解大模型与智能代理</div>

---
layout: default
clicks: 4
---

# 什么是大语言模型（LLM）？

<div grid grid-cols-2 gap-6 mt-6>

<div>
<div text-lg font-bold text-green-400 mb-3>💡 一句话理解</div>

<div border="~ green-400/20" bg="green-400/5" rounded-xl p-4 mb-4>
  <div text-base>
    大语言模型 = 一个<span text-green-300 font-bold>读过海量书籍、文档、代码</span>的 AI<br/>
    它能<strong>理解</strong>你的自然语言问题，并<span text-green-300 font-bold>逐字生成</span>回答
  </div>
</div>

<div v-click text-sm space-y-2>
  <div border="~ gray-700" rounded-lg p-2>
    <div text-orange-400 text-xs font-bold>📚 训练过程</div>
    <div text-xs opacity-70>就像一个人读完了整个互联网的文章、书籍、代码，学会了语言的规律和世界的知识</div>
  </div>
</div>

</div>

<div>
<div text-lg font-bold text-blue-400 mb-3>🏭 工业类比</div>

<div v-click space-y-3>
  <div border="~ blue-400/20" bg="blue-400/5" rounded-xl p-3>
    <div text-sm font-bold text-blue-300>LLM ≈ 经验丰富的工程师</div>
    <div text-xs opacity-70>读过所有设备手册、故障记录、工艺文档<br/>你问他问题，他能根据经验给出回答</div>
  </div>

  <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-3>
    <div text-sm font-bold text-blue-300>但它不是万能的</div>
    <div text-xs opacity-70>它不能直接操作设备、不能读取实时数据<br/>需要<strong>「工具「</strong>来连接数字世界和物理世界</div>
  </div>
</div>
</div>

</div>

---
layout: default
clicks: 3
---

# Token —— AI 的「电表」

<div mt-4 />

<div grid grid-cols-2 gap-6>

<div>
  <div text-lg font-bold text-green-400 mb-3>⚡ 什么是 Token？</div>

  <div border="~ green-400/20" bg="green-400/5" rounded-xl p-4 mb-4>
    <div text-base>
      Token 是 AI 处理文本的<strong text-green-300>最小计量单位</strong><br/>
      可以理解为 AI 的<strong>「电表度数」</strong>——每问一次问题、每生成一段回答，都消耗一定数量的 Token
    </div>
  </div>

  <div v-click space-y-2>
    <div border="~ gray-700" rounded-lg p-2>
      <div text-orange-400 text-xs font-bold>🔢 大概怎么算？</div>
      <div text-xs opacity-70>
        一个中文字 ≈ <strong>1-2 个 Token</strong><br/>
        一段 500 字的回答 ≈ <strong>500-1000 Token</strong><br/>
        一份 10 页 PDF ≈ <strong>5000-10000 Token</strong>
      </div>
    </div>
  </div>
</div>

<div>
  <div text-lg font-bold text-blue-400 mb-3>💰 要花多少钱？</div>

  <div v-click space-y-3>
    <div border="~ blue-400/20" bg="blue-400/5" rounded-xl p-3>
      <div text-sm font-bold text-blue-300>DeepSeek v4 参考价格</div>
      <div text-xs opacity-70>
        输入：约 <strong>2 元 / 百万 Token</strong><br/>
        输出：约 <strong>8 元 / 百万 Token</strong>
      </div>
    </div>

    <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-3>
      <div text-sm font-bold text-blue-300>🏭 实际花费估算</div>
      <div text-xs opacity-70>
        一次复杂对话（写代码+调试）：<strong>几分钱</strong><br/>
        个人月度正常使用：<strong>几十元</strong> 足够<br/>
        比一本技术书还便宜，但效率高 10 倍
      </div>
    </div>
  </div>
</div>

</div>

<div v-click mt-4 text-center>
  <div border="~ teal-400/30" bg="teal-400/5" rounded-xl p-3 inline-block>
    <div text-sm>
      💡 <strong text-teal-300>核心认知</strong>：Token 不是成本，是投资。用几毛钱的电费，省几个小时的时间。
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

<div border="~ green-400/20" bg="green-400/5" rounded-xl p-5 mb-4>
  <div text-base>
    它标志着 AI 模型从单纯的<strong>「文本生成器「</strong>进化为能够与其环境交互的<strong text-green-300>「智能代理「（Agent）</strong>。
  </div>
</div>

<div grid grid-cols-2 gap-4 mt-4>

<div v-click>
  <div text-sm font-bold text-orange-400 mb-2>🔧 什么是 Tool Use？</div>
  <div border="~ orange-400/20" bg="orange-400/5" rounded-lg p-3>
    <div text-xs opacity-80>
      模型能够理解开发者定义的<strong>外部函数或 API</strong>，在对话中根据用户需求，<strong>自主判断、决策</strong>并生成调用这些工具所需的参数（通常是 JSON 格式）。
    </div>
  </div>
</div>

<div v-click>
  <div text-sm font-bold text-green-400 mb-2>🏭 工业场景类比</div>
  <div border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
    <div text-xs opacity-80>
      就像 PLC 不只是读取传感器数据——它还能<strong>驱动执行器</strong>去做事。<br/>
      Agent 不只是回答问题——它能<strong>执行操作</strong>：查数据库、发邮件、创建文件、部署应用。
    </div>
  </div>
</div>

</div>

<div v-click mt-4 text-center>
  <div border="~ teal-400/30" bg="teal-400/5" rounded-xl p-3 inline-block>
    <div text-sm>
      <span text-teal-300 font-bold>从「问答机器「</span>
      <span mx-2 opacity-50>→</span>
      <span text-green-300 font-bold>到「能动手做事的AI同事「</span>
    </div>
  </div>
</div>

---
layout: default
clicks: 3
---

# RAG —— 让 AI 读懂你的文档

<div mt-4 />

<div grid grid-cols-2 gap-6>

<div>
  <div text-lg font-bold text-orange-400 mb-3>❓ 没有 RAG 的痛点</div>

  <div border="~ red-400/20" bg="red-400/5" rounded-xl p-4 mb-4>
    <div text-sm opacity-80>
      LLM 的知识<strong>截止于训练数据</strong>，它不知道：<br/>
      • 你们公司的<strong>设备操作手册</strong>写了什么<br/>
      • 上周三的<strong>故障记录</strong>怎么处理的<br/>
      • 最新的<strong>安全规范</strong>更新了哪些条款
    </div>
  </div>

  <div v-click>
    <div text-lg font-bold text-green-400 mb-2>✅ RAG 的解法</div>
    <div border="~ green-400/20" bg="green-400/5" rounded-xl p-4>
      <div text-sm opacity-80>
        <strong text-green-300>RAG = 检索增强生成</strong><br/>
        先把你的文档<strong>上传</strong> → AI <strong>索引</strong>并理解 → 你提问时，AI <strong>先检索</strong>你的文档，<strong>再结合</strong>文档内容生成回答
      </div>
    </div>
  </div>
</div>

<div>
  <div text-lg font-bold text-blue-400 mb-3>🏭 工业场景应用</div>

  <div v-click space-y-2>
    <div border="~ blue-400/20" bg="blue-400/5" rounded-lg p-3>
      <div text-sm font-bold>📖 设备手册问答</div>
      <div text-xs opacity-70>「ATV630 变频器报 F011 是什么故障？怎么处理？」→ AI 直接查手册给出答案</div>
    </div>
    <div border="~ blue-400/20" bg="blue-400/5" rounded-lg p-3>
      <div text-sm font-bold>📋 操作规程查询</div>
      <div text-xs opacity-70>「高压柜停电操作的正确步骤是什么？」→ AI 对照 SOP 逐条回答</div>
    </div>
    <div border="~ blue-400/20" bg="blue-400/5" rounded-lg p-3>
      <div text-sm font-bold>📝 故障案例库</div>
      <div text-xs opacity-70>「过去一年同类设备出过几次类似问题？怎么修的？」→ AI 从历史记录中总结</div>
    </div>
  </div>
</div>

</div>

<div v-click mt-4 text-center>
  <div border="~ teal-400/30" bg="teal-400/5" rounded-xl p-3 inline-block>
    <div text-sm>
      💡 <strong text-teal-300>本质</strong>：给 AI 装上你的「企业硬盘」——从此它不是用通用知识回答，而是<strong>用你的资料回答</strong>
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
  <div text-lg font-bold text-green-400 mb-3>✅ AI 擅长的事</div>
  <div space-y-2>
    <div v-click border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
      <div text-sm font-bold>📝 文本理解与生成</div>
      <div text-xs opacity-70>写报告、做总结、翻译、润色文案</div>
    </div>
    <div v-click border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
      <div text-sm font-bold>💻 代码编写与调试</div>
      <div text-xs opacity-70>生成代码、修 bug、解释代码逻辑</div>
    </div>
    <div v-click border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
      <div text-sm font-bold>📊 数据分析与结构化</div>
      <div text-xs opacity-70>从非结构化文本中提取信息、分类整理</div>
    </div>
    <div v-click border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
      <div text-sm font-bold>🔍 信息检索与知识整合</div>
      <div text-xs opacity-70>快速查找、对比、综合多源信息</div>
    </div>
  </div>
</div>

<div>
  <div text-lg font-bold text-red-400 mb-3>⚠️ AI 的局限性</div>
  <div space-y-2>
    <div border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm font-bold>🎯 需要你来把关</div>
      <div text-xs opacity-70>AI 可能犯错或「幻觉「，业务判断必须由人来做</div>
    </div>
    <div border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm font-bold>🔒 不能替代权限决策</div>
      <div text-xs opacity-70>审批、授权、安全关键操作——必须由人确认</div>
    </div>
    <div border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm font-bold>🏭 不能直接操作物理设备</div>
      <div text-xs opacity-70>AI 需要经过控制层才能影响实际生产系统</div>
    </div>
    <div border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm font-bold>💡 你的价值不可替代</div>
      <div text-xs opacity-70>AI 不懂你的车间、不懂你的客户、不懂你的业务场景</div>
    </div>
  </div>
</div>

</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 2：安装使用Claude Code</span>
</h1>

<div text-xl opacity-60 mt-4>从安装到上手，一步步带你入门</div>

---
layout: two-cols-header
---

# CC安装配置

::left::

  <div border="~ green-400/20" bg="green-400/5" rounded-xl p-5 h-full>
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

  <div border="~ blue-400/20" bg="blue-400/5" rounded-xl p-5 h-full>
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

<div border="~ blue-400/20" bg="blue-400/5" rounded-xl p-5>
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

<div v-click border="~ purple-400/20" bg="purple-400/5" rounded-xl p-5 mt-3>
  <div text-xl mb-3>🔄</div>
  <div text-purple-400 font-bold mb-2 text-lg>CC Switch — 模型切换</div>
  <div text-sm opacity-75>
    支持切换底层模型（如 DeepSeek），避免单一账号封号风险<br/>
    <div mt-2 text-xs>
      🛒 付费注册：<a href="https://platform.deepseek.com/" target="_blank">platform.deepseek.com</a>
    </div>
  </div>
</div>

::right::

<div border="~ orange-400/20" bg="orange-400/5" rounded-xl p-5 mb-3>
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
layout: default
clicks: 5
---

# Claude Code —— 你的AI编程搭档

<div mt-3 />

<div border="~ green-400/20" bg="green-400/5" rounded-xl p-4 mb-4>
  <div text-sm opacity-80>
    <strong>Claude Code</strong> 是由 Anthropic 推出的终端原生 AI 编程助手。它直接运行在命令行中，不仅能生成代码，还能<strong text-green-300>自主读取整个项目、跨文件修改、运行 Shell 命令和测试</strong>，是实现人机协同开发的强大工具。
  </div>
</div>

<div text-lg font-bold text-green-400 mb-3>CLI 与网页版 AI 有何不同？</div>

<div grid grid-cols-2 gap-4>
  <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4>
    <div text-blue-300 font-bold text-sm mb-1>🌐 网页版聊天机器人</div>
    <div text-xs opacity-70>只知道你<strong>粘贴给它的代码片段</strong>，缺乏对项目整体结构的理解</div>
  </div>
  <div v-click border="~ green-400/20" bg="green-400/5" rounded-xl p-4>
    <div text-green-300 font-bold text-sm mb-1>💻 Claude Code（CLI）</div>
    <div text-xs opacity-70><strong>扫描整个代码库</strong>，对项目结构、文件依赖和业务逻辑有全局理解</div>
  </div>
  <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4>
    <div text-blue-300 font-bold text-sm mb-1>💬 「给出建议「</div>
    <div text-xs opacity-70>告诉你应该怎么改，但你得自己动手</div>
  </div>
  <div v-click border="~ green-400/20" bg="green-400/5" rounded-xl p-4>
    <div text-green-300 font-bold text-sm mb-1>⚡ 「直接做事「</div>
    <div text-xs opacity-70>自主搜索、修改代码、运行命令、查看结果——<strong>像一个真实的开发者</strong></div>
  </div>
</div>

<div v-click mt-4 text-center>
  <div border="~ teal-400/30" bg="teal-400/5" rounded-xl p-3 inline-block>
    <div text-sm text-teal-300>
      🎯 <strong>不离开终端</strong>，读写文件、执行命令、Git 操作——全部搞定
    </div>
  </div>
</div>

---
layout: default
clicks: 5
---

# Prompt —— 和 AI 对话的艺术

<div mt-3 />

<div text-lg font-bold gradient-title mb-4>
  三大基石：Clear · Direct · Specific
</div>

<div border="~ green-400/20" bg="green-400/5" rounded-xl p-4 mb-4>
  <div text-sm>所有高级技巧都建立在<strong>清晰的表达</strong>之上。Prompt 不是玄学——它就像给新员工派活一样。</div>
</div>

<div grid grid-cols-3 gap-3 mt-4>
  <div v-click border="~ orange-400/20" bg="orange-400/5" rounded-xl p-4 text-center>
    <div text-2xl mb-2>🎯</div>
    <div text-orange-300 font-bold>消除歧义</div>
    <div text-xs opacity-70 mt-2>不要让 AI 猜。<br/>你说得越具体，<br/>结果越准确</div>
  </div>
  <div v-click border="~ green-400/20" bg="green-400/5" rounded-xl p-4 text-center>
    <div text-2xl mb-2>✅</div>
    <div text-green-300 font-bold>肯定指令</div>
    <div text-xs opacity-70 mt-2>告诉它<strong>做什么</strong>，<br/>而不是不做什么。<br/>正面指令更高效</div>
  </div>
  <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4 text-center>
    <div text-2xl mb-2>📋</div>
    <div text-blue-300 font-bold>具体语境</div>
    <div text-xs opacity-70 mt-2>像给新员工派活一样，<br/>交代清楚背景、<br/>约束条件和期望</div>
  </div>
</div>

<div v-click mt-5>
  <div text-sm font-bold text-green-400 mb-2>🏭 好的 vs 坏的 Prompt 示例：</div>
  <div grid grid-cols-2 gap-3>
    <div border="l-4 red-400" bg="red-400/5" rounded-r-lg p-3>
      <div text-xs text-red-300>❌ 「帮我做设备管理系统「</div>
    </div>
    <div border="l-4 green-400" bg="green-400/5" rounded-r-lg p-3>
      <div text-xs text-green-300>✅ 「做一个设备巡检记录页面，包含设备名称（下拉选择）、巡检日期、温度、压力、状态、巡检人字段，提交后保存并在列表显示「</div>
    </div>
  </div>
</div>

---
layout: default
clicks: 4
---

# Skills —— Claude 的「插件系统「

<div mt-3 />

<div border="~ green-400/20" bg="green-400/5" rounded-xl p-4 mb-4>
  <div text-sm>
    <strong>Skills</strong> 是 Claude 生态的<strong text-green-300>复用性</strong>解决方案。如果你教会了 Claude 「如何撰写符合公司规范的周报「，由于对话上下文会重置，下次还得重教一遍。Skills 允许你将这套指令（Prompt + 资料 + 示例）<strong text-green-300>打包成一个「技能包「</strong>，随时挂载。
  </div>
</div>

<div text-lg font-bold text-green-400 mb-3>这相当于给 Claude 安装了「插件「，让它秒变专家：</div>

<div grid grid-cols-3 gap-3>
  <div v-click border="~ orange-400/20" bg="orange-400/5" rounded-xl p-4 text-center>
    <div text-3xl mb-2>🌐</div>
    <div text-orange-300 font-bold text-sm>Agent Browser</div>
    <div text-xs opacity-70 mt-1>AI 直接调用无头浏览器，执行网页交互和数据抓取</div>
  </div>
  <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📄</div>
    <div text-blue-300 font-bold text-sm>PDF Master</div>
    <div text-xs opacity-70 mt-1>PDF 合并、拆分、提取、OCR 甚至签名——文档处理全搞定</div>
  </div>
  <div v-click border="~ green-400/20" bg="green-400/5" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📊</div>
    <div text-green-300 font-bold text-sm>PPT Master</div>
    <div text-xs opacity-70 mt-1>AI 生成原生可编辑的 PPTX，支持任意文档输入</div>
  </div>
</div>

<div v-click mt-5>
  <div border="~ teal-400/20" bg="teal-400/5" rounded-xl p-4 text-center>
    <div text-sm>
      💡 <strong text-teal-300>你也能创建自己的 Skill</strong> —— 把「设备巡检报告模板「、「周报格式「、「客户会议纪要结构「打包成技能包，一次创建，永久复用
    </div>
  </div>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 3：AI 常用提效工具</span>
</h1>

<div text-xl opacity-60 mt-4>不只是编程——AI 在办公场景的全面应用</div>

---
layout: two-cols-header
clicks: 4
---

# AI + 办公文档：告别重复劳动

::left::

<div text-lg font-bold text-green-400 mb-3>📊 PPT 制作</div>

<div space-y-3>
  <div v-click border="~ orange-400/20" bg="orange-400/5" rounded-xl p-4>
    <div text-sm font-bold text-orange-300>Gamma / 百度文库 AI</div>
    <div text-xs opacity-70>输入主题 → AI 自动生成完整演示文稿<br/>配图、排版、动画一步到位</div>
  </div>
  <div v-click border="~ orange-400/20" bg="orange-400/5" rounded-xl p-4>
    <div text-sm font-bold text-orange-300>Claude PPT Master Skill</div>
    <div text-xs opacity-70>上传 Word/PDF/Markdown 任意文档<br/>直接生成可编辑的 .pptx 文件</div>
  </div>
  <div v-click border="~ orange-400/20" bg="orange-400/5" rounded-xl p-4>
    <div text-sm font-bold text-orange-300>效率对比</div>
    <div text-xs opacity-70>传统方式：找模板 → 复制粘贴 → 调格式 → <strong>2小时</strong><br/>AI 方式：描述需求 → 生成 → 微调 → <strong text-green-300>15分钟</strong></div>
  </div>
</div>

::right::

<div text-lg font-bold text-blue-400 mb-3>📄 文档处理</div>

<div space-y-3>
  <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4>
    <div text-sm font-bold text-blue-300>PDF 批量处理</div>
    <div text-xs opacity-70>合并多个 PDF → 一句话<br/>提取指定页面 → 一句话<br/>OCR 识别扫描件 → 一句话</div>
  </div>
  <div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4>
    <div text-sm font-bold text-blue-300>智能摘要与翻译</div>
    <div text-xs opacity-70>长文档 → 3 句话总结要点<br/>中文报告 → 英文版本<br/>会议纪要 → 待办事项清单</div>
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
  <div text-lg font-bold text-red-400 mb-3>📈 传统 Excel 的痛点</div>
  <div space-y-2>
    <div v-click border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm>😫 复杂公式记不住，每次都得百度</div>
    </div>
    <div v-click border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm>😫 多人协作版本混乱，「最终版_v3_final.xlsx「</div>
    </div>
    <div v-click border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm>😫 数据量大了就卡顿、崩溃</div>
    </div>
    <div v-click border="~ red-400/20" bg="red-400/5" rounded-lg p-3>
      <div text-sm>😫 做报表需要手动汇总、透视、画图</div>
    </div>
  </div>
</div>

<div>
  <div text-lg font-bold text-teal-400 mb-3>🤖 AI 时代的解决方案</div>
  <div space-y-2>
    <div border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
      <div text-sm>✨ 「本月的异常记录按设备分类汇总「</div>
      <div text-xs opacity-60>→ AI 自动写 SQL/公式，秒出结果</div>
    </div>
    <div border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
      <div text-sm>✨ 「把这三张表合并，去重后导出「</div>
      <div text-xs opacity-60>→ AI 生成处理脚本，一键完成</div>
    </div>
    <div border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
      <div text-sm>✨ 「帮我分析这组数据的趋势和异常点「</div>
      <div text-xs opacity-60>→ AI 直接给出结论 + 可视化图表</div>
    </div>
  </div>
</div>

</div>

<div mt-4 text-center>
  <div border="~ green-400/30" bg="green-400/5" rounded-xl p-3 inline-block>
    <div text-sm>
      <strong text-green-300>从「操作工「到「指挥官「</strong> —— 你只管描述你想要什么结果，AI 帮你操作数据
    </div>
  </div>
</div>

---
layout: default
clicks: 3
---

# AI + 自动化工作流

<div mt-4 />

<div text-lg font-bold text-green-400 mb-4>把重复性任务交给 AI，你只需要做决策</div>

<div grid grid-cols-3 gap-4>

<div v-click border="~ orange-400/20" bg="orange-400/5" rounded-xl p-5 text-center>
  <div text-3xl mb-3>📧</div>
  <div text-orange-300 font-bold text-sm mb-2>邮件与沟通</div>
  <ul text-xs text-left space-y-1 opacity-75>
    <li>• 「帮我把这封英文邮件翻译并回复「</li>
    <li>• 「从这串邮件中提取待办事项「</li>
    <li>• 「根据这个客户对话写跟进纪要「</li>
    <li>• 「生成本周工作周报发给团队「</li>
  </ul>
</div>

<div v-click border="~ blue-400/20" bg="blue-400/5" rounded-xl p-5 text-center>
  <div text-3xl mb-3>🔍</div>
  <div text-blue-300 font-bold text-sm mb-2>信息检索</div>
  <ul text-xs text-left space-y-1 opacity-75>
    <li>• 「搜索2025年所有关于XX的邮件「</li>
    <li>• 「查一下这个设备的故障历史记录「</li>
    <li>• 「对比三家供应商的报价方案「</li>
    <li>• 「找一下这个行业的最新标准文档「</li>
  </ul>
</div>

<div v-click border="~ green-400/20" bg="green-400/5" rounded-xl p-5 text-center>
  <div text-3xl mb-3>⚙️</div>
  <div text-green-300 font-bold text-sm mb-2>流程自动化</div>
  <ul text-xs text-left space-y-1 opacity-75>
    <li>• 「每周五自动生成巡检数据汇总「</li>
    <li>• 「新数据录入后自动发通知给负责人「</li>
    <li>• 「异常数据自动标记并截屏保存「</li>
    <li>• 「库存低于阈值自动发邮件提醒「</li>
  </ul>
</div>

</div>

<div mt-5 text-center>
  <div border="~ teal-400/20" bg="teal-400/5" rounded-xl p-4 inline-block>
    <div text-base>
      💡 <strong text-teal-300>核心思路</strong>：你发现痛点 → 描述给 AI → AI 做工具解决 → 你专注更有价值的事
    </div>
  </div>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 4：Vibe Coding</span>
</h1>

<div text-xl opacity-60 mt-4>你的AI编程搭档，和全新的编程方式</div>

---
layout: default
---

# Vibe Coding 提纲

<div mt-2 text-sm opacity-60>不是教大家写代码，而是让你有能力用 AI 帮你做一个属于自己的小工具</div>

<div mt-4 grid grid-cols-2 gap-3>
  <div border="~ green-400/20" bg="green-400/5" rounded-xl p-4>
    <div text-green-400 font-bold text-lg mb-2>🎯 今天的目标</div>
    <ul text-sm space-y-1 opacity-80>
      <li>✅ 每个人在自己电脑跑起一个 Web 应用，并可部署到互联网</li>
      <li>✅ 知道怎么用 AI 一步步「对话开发「</li>
      <li>✅ 敢于把业务需求转化成工具尝试</li>
    </ul>
  </div>
  <div border="~ blue-400/20" bg="blue-400/5" rounded-xl p-4>
    <div text-blue-400 font-bold text-lg mb-2>🗺️ 学习路径</div>
    <ul text-sm space-y-1 opacity-80>
      <li>🤖 <strong>上手 Claude Code</strong> —— 你的AI编程搭档</li>
      <li>✨ <strong>掌握 Vibe Coding</strong> —— 用对话的方式写应用</li>
      <li>🏭 <strong>动手做出真实业务应用</strong> —— 团队待办事项看板</li>
      <li>🌐 <strong>看懂Web应用的全貌</strong> —— 前端、后端、数据库</li>
      <li>🚀 <strong>部署到互联网</strong> —— 手机扫码就能用</li>
    </ul>
  </div>
</div>

---
layout: center
---

<h1 text-3xl font-bold text-center mb-6>
  <span gradient-title>一个重要的思维转变</span>
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
clicks: 6
---

# 关于 AI 的核心认知

<div text-lg text-center mb-4>
  <span text-green-300 font-bold>你已经是「创造者「</span>
  <span text-sm opacity-60> —— Vibe Coding 的门槛不是技术，而是：<strong text-green-300>敢开始 + 愿意试 + 小步迭代</strong></span>
</div>

::left::
<div mt-2 space-y-3>
  <div v-click border="~ green-400/30" bg="green-400/5" rounded-lg p-3>
    <div text-green-400 text-sm font-bold>1. 你已拥有一个AI开发团队</div>
    <div text-xs opacity-70>未来不是会不会写代码，而是能不能把想法说清楚，让AI帮你实现</div>
  </div>
  <div v-click border="~ green-400/30" bg="green-400/5" rounded-lg p-3>
    <div text-green-400 text-sm font-bold>2. Vibe Coding = 对话编程</div>
    <div text-xs opacity-70>想法 → 描述需求 → AI生成代码 → 你测试 → 修改迭代</div>
  </div>
  <div v-click border="~ green-400/30" bg="green-400/5" rounded-lg p-3>
    <div text-green-400 text-sm font-bold>3. 你的核心能力不是写代码</div>
    <div text-xs opacity-70>清楚表达需求 · 能判断结果对不对 · 会逐步拆解问题</div>
  </div>
</div>

::right::

<div text-lg font-bold mb-4>
  <span text-green-400>🔍 常见误区 vs 正确心态</span>
</div>

<div space-y-2 text-sm>
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
layout: two-cols-header
---

# Web应用架构

<div text-lg text-center mb-3>
  <span text-green-300>前端 · 后端 · 数据库 —— 30秒理解整个 Web 世界</span>
</div>

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
| 浏览器 / 前端 | HMI 触摸屏 |
| 后端服务器 | PLC / DCS 控制器 |
| 数据库 | SCADA 历史归档 |
| API 接口 | Modbus / OPC-UA |

</div>

<div text-center mt-4 text-base opacity-70>
  本质上就是<strong text-green-300>同一套架构</strong>，换了个名字而已。你早就懂了。
</div>

---
layout: two-cols
clicks: 3
---

# 前端是什么？

<div mt-4 />

<div space-y-3>
  <div v-click border="~ orange-400/30" bg="orange-400/5" rounded-xl p-4>
    <div text-lg font-bold text-orange-400>HTML</div>
    <div text-sm opacity-75>构建页面内容结构</div>
    <div text-xs opacity-50 mt-1>≈ HMI画面上的图形元素</div>
  </div>

  <div v-click border="~ blue-400/30" bg="blue-400/5" rounded-xl p-4>
    <div text-lg font-bold text-blue-400>CSS</div>
    <div text-sm opacity-75>控制颜色、布局、样式</div>
    <div text-xs opacity-50 mt-1>≈ HMI的配色方案和排版</div>
  </div>

  <div v-click border="~ yellow-400/30" bg="yellow-400/5" rounded-xl p-4>
    <div text-lg font-bold text-yellow-400>JavaScript</div>
    <div text-sm opacity-75>处理点击、输入、动态交互</div>
    <div text-xs opacity-50 mt-1>≈ HMI绑定的脚本和逻辑</div>
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
    <div text-4xl mb-4>🤖</div>
    <div text-xl font-bold mb-3>
      <span text-green-400>但你不必手写这些</span>
    </div>
    <div text-base opacity-80>
      你只需要描述需求：<br/>
      我要一个表单，含设备名称、<br/>
      温度、状态三个字段，<br/>
      提交按钮是绿色的
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
clicks: 4
---

# 数据库是什么？

::left::

<div text-base font-bold mb-3>对比你现在的数据存储方式：</div>

| 方式 | 痛点 |
|---|---|
| 📋 纸质表格 | 难查找、易丢失、难汇总 |
| 📊 Excel | 多人协作乱、格式不统一 |
| 💬 笔记/微信 | 碎片化、无法分析 |

<div v-click mt-4 />

| 用数据库之后 | 效果 |
|---|---|
| ⚡ 秒级搜索 | 一键统计 |
| 👥 多人同时用 | 格式规范 |
| 📈 结构化存储 | 可分析趋势 |

::right::

<div text-base font-bold mb-3>数据库的本质：</div>
<div text-sm opacity-75 mb-4>
  数据库就是一个<strong text-green-300>结构化的表格</strong>，<br/>
  你可以把数据存进去，也可以从里面查出来。<br/>
  <strong text-green-300>数据库 = 表格 + 查询功能</strong>
</div>

<div v-click>
  <div text-sm font-bold text-green-400 mb-2>常见数据库类型：</div>
  <ul text-sm space-y-1>
    <li>🗄️ <strong>关系型</strong>：MySQL、PostgreSQL、Oracle</li>
    <li>📦 <strong>非关系型</strong>：MongoDB、Redis</li>
    <li>☁️ <strong>云数据库</strong>：<span text-green-300>Supabase</span>、Firebase</li>
  </ul>
</div>

<div v-click mt-3>
  <div border="~ teal-400/20" bg="teal-400/5" rounded-lg p-3 text-sm>
    💡 <strong text-teal-300>你不用管理数据库</strong> —— 告诉 Claude 你要存什么数据，它帮你设计表结构、写查询、做迁移
  </div>
</div>

---
layout: two-cols-header
clicks: 6
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🤖</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>Claude Code —— 你的AI编程搭档</span>
</h1>

::left::

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>📝 帮你写代码</div>
  <div text-sm opacity-75>「帮我做一个设备巡检记录页面「</div>
</div>

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🐛 帮你修bug</div>
  <div text-sm opacity-75>「点击保存按钮没反应，帮我看看「</div>
</div>

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>➕ 帮你加功能</div>
  <div text-sm opacity-75>「增加一个导出Excel的功能「</div>
</div>

::right::

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🔍 帮你读代码</div>
  <div text-sm opacity-75>「解释一下这段代码做了什么「</div>
</div>

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🎨 帮你调样式</div>
  <div text-sm opacity-75>「把按钮改成施耐德绿色「</div>
</div>

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div text-lg font-bold text-green-400>🚀 帮你部署</div>
  <div text-sm opacity-75>「帮我把这个应用部署到Netlify「</div>
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
layout: default
clicks: 4
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🎯</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>好需求 vs 坏需求</span>
</h1>

<div grid grid-cols-2 gap-6>

<div>
  <div text-lg font-bold text-red-400 mb-3>❌ 太模糊 —— Claude 只能瞎猜</div>
  <div space-y-3>
    <div v-click border="l-4 red-400" bg="red-400/5" rounded-r-xl p-4>
      <div text-sm text-red-300>「做一个设备管理系统「</div>
      <div text-xs opacity-50 mt-1>什么设备？哪些功能？谁用？数据存哪里？</div>
    </div>
    <div v-click border="l-4 red-400" bg="red-400/5" rounded-r-xl p-4>
      <div text-sm text-red-300>「帮我写个报表功能「</div>
      <div text-xs opacity-50 mt-1>什么数据？什么格式？按什么维度汇总？</div>
    </div>
    <div v-click border="l-4 red-400" bg="red-400/5" rounded-r-xl p-4>
      <div text-sm text-red-300>「弄个数据看板「</div>
      <div text-xs opacity-50 mt-1>哪些指标？实时还是汇总？给谁看？</div>
    </div>
  </div>
</div>

<div>
  <div text-lg font-bold text-green-400 mb-3>✅ 具体清晰 —— Claude 「看见「了</div>
  <div space-y-3>
    <div v-click border="l-4 green-400" bg="green-400/5" rounded-r-xl p-4>
      <div text-sm text-green-300 leading-relaxed>
        「做一个<strong>设备巡检记录页面</strong>，有表单和列表两部分。表单包含<strong>设备名称（下拉选择）、巡检日期、温度读数(°C)、压力读数(bar)、运行状态（正常/关注/异常）、巡检人、备注</strong>。提交后保存到列表，列表按<strong>日期倒序</strong>显示，支持<strong>按设备名称搜索</strong>。「
      </div>
      <div text-xs opacity-50 mt-1>做什么 ✓ 有什么字段 ✓ 要怎么交互 ✓</div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>📐</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>和 Claude 对话的核心公式</span>
</h1>

<div
  border="~ green-400/40"
  bg="green-400/5"
  rounded-2xl
  p-8
  text-center
  mb-6
>
  <div text-2xl font-bold mb-2>
    一句好需求 = <span text-green-400>做什么</span> + <span text-green-400>有什么字段</span> + <span text-green-400>要怎么交互</span>
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
    我要做一个<strong text-green-300>【设备巡检记录表】</strong>（做什么），<br/>
    包含<strong text-green-300>【设备名称、巡检日期、温度、压力、状态、巡检人】</strong>字段（有什么），<br/>
    提交后<strong text-green-300>【数据保存并显示在列表里，异常记录用红色标出来】</strong>（要怎么交互）。
  </div>
</div>

<div mt-5 text-center>
  <div border="~ teal-400/20" bg="teal-400/5" rounded-xl p-3 inline-block>
    <div text-sm>
      💡 <strong text-teal-300>核心原则</strong>：像给新员工派活一样具体——你交代得越清楚，结果越符合预期
    </div>
  </div>
</div>

---
layout: default
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
    <li>Archlinux (Omarchy发行版)</li>
    <li>Claude Code + CC Switch</li>
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
clicks: 5
---

<h1 text-3xl font-bold text-center mb-6>
  <span gradient-title>Vibe Coding 工作流程</span>
</h1>

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-2xl
  p-8
  text-center
  text-lg
>

  <div v-click border="~ gray-600" rounded-lg p-4 mb-3 bg="gray-800/50">
    <strong>1️⃣ 你说出需求</strong>
    <div text-xs opacity-50 mt-1>用自然语言，像跟同事聊天一样</div>
  </div>
  <div v-click text-2xl opacity-50>↓</div>
  <div v-click border="~ gray-600" rounded-lg p-4 mb-3 bg="gray-800/50">
    <strong>2️⃣ Claude 生成代码</strong>
    <div text-xs opacity-50 mt-1>几秒到几分钟，代码就出来了</div>
  </div>
  <div v-click text-2xl opacity-50>↓</div>
  <div v-click border="~ gray-600" rounded-lg p-4 mb-3 bg="gray-800/50">
    <strong>3️⃣ 你运行测试、试用</strong>
    <div text-xs opacity-50 mt-1>在浏览器里看效果，实际操作用用看</div>
  </div>
  <div v-click text-2xl opacity-50>↓</div>
  <div v-click border="~ green-400/40" rounded-lg p-4 bg="green-400/10">
    <strong>4️⃣ 不满意就告诉Claude改 → 满意就继续下一个功能</strong>
    <div text-xs opacity-50 mt-1>每轮迭代几分钟到十几分钟</div>
  </div>

</div>

<div text-center mt-6 text-base>
  就像做项目：一个一个功能来，逐步加。<br/>
  <strong text-green-300>不是瀑布式，是敏捷迭代。</strong>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span gradient-title>Part 5：动手实战</span>
</h1>

<div text-xl opacity-60 mt-4>从零到上线，打造团队任务看板工具</div>

---
layout: two-cols-header
---

<h1 flex items-center gap-3>
  <span text-3xl>⚡</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>快速热身：5分钟感受 Vibe Coding</span>
</h1>

::left::
<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-lg
  p-4
  text-base
>
  <strong text-green-300>⏱️ 5分钟</strong> 先做一个极简 Demo，感受 AI 编程的节奏
</div>

<div mt-4 border="~ gray-700" bg="gray-800/50" rounded-xl p-5>
  <div text-sm opacity-60 mb-2>对 Claude 说：</div>
  <div text-sm leading-relaxed>
    帮我做一个待办事项管理页面：<br/>
    1. 可以添加任务、标记完成、删除<br/>
    2. 页面简洁清爽<br/>
    用 HTML + CSS + JavaScript 实现
  </div>
</div>

<div mt-4 text-center text-sm>
  <strong text-green-300>先跑起来，感受节奏。下一步我们做真正的团队看板。</strong>
</div>

::right::

<div mt-8 />

<div text-lg font-bold mb-3>
  <span text-green-400>💡 应用场景发散</span>
</div>

<div space-y-3 text-sm>
  <div border="~ orange-400/20" bg="orange-400/5" rounded-lg p-3>
    <div text-orange-400 font-bold text-xs mb-1>销售类</div>
    <div text-xs opacity-70>客户跟进看板 · 项目推进 · 报价追踪</div>
  </div>
  <div border="~ blue-400/20" bg="blue-400/5" rounded-lg p-3>
    <div text-blue-400 font-bold text-xs mb-1>管理类</div>
    <div text-xs opacity-70>团队任务 · KPI追踪 · 会议纪要 · 周报汇总</div>
  </div>
  <div border="~ green-400/20" bg="green-400/5" rounded-lg p-3>
    <div text-green-400 font-bold text-xs mb-1>产线类 <span text-xs opacity-50>（你最熟悉）</span></div>
    <div text-xs opacity-70>设备巡检 · 保养计划 · 备件管理 · 交接班</div>
  </div>
</div>

---
layout: default
---

<h1 flex items-center gap-3>
  <span text-3xl>🏭</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>实战目标：团队任务看板</span>
</h1>

<div mt-4 />

<div border="~ green-400/30" bg="green-400/5" rounded-2xl p-5 text-lg text-center mb-6>
  <strong>目标：</strong>一个团队内部的任务看板工具 —— 每个人知道自己要做什么、做到哪了<br/>
  Leader 一眼看到全局进展，有问题直接给评论
</div>

<div grid grid-cols-3 gap-4>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📋</div>
    <div font-bold>看板视图</div>
    <div text-xs opacity-60 mt-1>待办 · 进行中 · 已完成<br/>三列拖拽式管理</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>👤</div>
    <div font-bold>任务分配</div>
    <div text-xs opacity-60 mt-1>每张卡片有负责人<br/>按人员筛选查看</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>💬</div>
    <div font-bold>评论反馈</div>
    <div text-xs opacity-60 mt-1>Leader 可在卡片下留言<br/>指出问题、给出建议</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📊</div>
    <div font-bold>进度仪表盘</div>
    <div text-xs opacity-60 mt-1>完成率、各人负载<br/>一目了然</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>📱</div>
    <div font-bold>手机适配</div>
    <div text-xs opacity-60 mt-1>手机扫码就能用<br/>随时查看和操作</div>
  </div>
  <div border="~ gray-700" rounded-xl p-4 text-center>
    <div text-3xl mb-2>🚀</div>
    <div font-bold>部署上线</div>
    <div text-xs opacity-60 mt-1>Netlify 公网访问<br/>链接分享给团队</div>
  </div>
</div>

---
layout: default
clicks: 4
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
  <strong text-green-300>你只需要跟着Claude的指引操作，不需要写一行代码。</strong>
</div>

---
layout: two-cols-header
clicks: 6
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>2️⃣</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>第2步 —— 运行、试用、迭代</span>
</h1>

::left::

<div border="~ gray-700" rounded-xl p-5>
  <div text-lg font-bold mb-3 text-green-400>▶️ 运行</div>
  <div text-sm opacity-75 mb-2>对 Claude 说：</div>

  <div border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
    > 「帮我运行起来，让我看看效果「
  </div>

  <div mt-4 text-sm opacity-75>
    几分钟内就能在浏览器里看到一个能用的应用：
  </div>
  <div text-sm mt-1 space-y-1>
    <div v-click>🟢 三列看板视图</div>
    <div v-click>🟢 可拖拽任务卡片</div>
    <div v-click>🟢 仪表盘统计面板</div>
  </div>
</div>

::right::

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-5>
  <div text-lg font-bold mb-3 text-green-400>🔄 迭代改进</div>
  <div text-sm opacity-75 mb-2>试用后告诉Claude要改什么：</div>

  <div space-y-2>
    <div v-click border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
      > 「卡片上增加'预计工时'字段「
    </div>
    <div v-click border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
      > 「过期任务用红色边框标记「
    </div>
    <div v-click border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
      > 「加搜索框，按负责人和关键词筛选「
    </div>
  </div>
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
    <div text-sm font-bold text-green-400>💬 第1轮：评论功能</div>
    <div text-sm opacity-75 mt-1>「点击任务卡片可以展开详情页，支持添加评论，每条评论显示时间和作者「</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>📊 第2轮：Leader 仪表盘</div>
    <div text-sm opacity-75 mt-1>「加一个首页仪表盘，显示团队任务完成率、各人负载统计、本周趋势，用卡片+图表布局「</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>🔔 第3轮：截止日期提醒</div>
    <div text-sm opacity-75 mt-1>「任务到期当天自动标红，逾期未完成的任务在顶部显示警告横幅「</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>📱 第4轮：手机端适配</div>
    <div text-sm opacity-75 mt-1>「帮我把移动端显示效果优化，看板在小屏幕上也能滑动操作「</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div text-sm font-bold text-green-400>📥 第5轮：导出周报</div>
    <div text-sm opacity-75 mt-1>「加导出按钮，把本周完成的任务和进展一键导出为Excel周报「</div>
  </div>
</div>

<div v-click text-center mt-6 text-base>
  <strong text-green-300>每轮几分钟到十几分钟。一个下午，完整的团队看板系统就出来了。</strong>
</div>

---
layout: two-cols
clicks: 3
---

<h1 flex items-center gap-3>
  <span text-3xl>💾</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>数据存储方案</span>
</h1>

<div mt-6 />

| 方案 | 特点 | 适合场景 |
|---|---|---|
| SQLite | 单文件，零配置 | 个人/小团队内部使用 |
| Supabase | 在线库，免费额度 | 多人异地协作使用 |
| localStorage | 存浏览器里 | 纯Demo/快速原型验证 |

<div mt-4 />

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4>
  <div text-sm font-bold text-green-400>💬 怎么跟 Claude 说：</div>
  <div text-sm mt-1>
    > 「用SQLite做数据库「 <span text-xs opacity-50>（推荐起步方案，最简单）</span>
  </div>
  <div text-sm mt-1>
    > 「改用Supabase，让多人用「 <span text-xs opacity-50>（需要多人协作时迁移）</span>
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
clicks: 4
---

# 部署上线 —— 让你的应用真正在互联网上运行

<div mt-2 />

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-2xl
  p-6
  text-center
  mb-4
>
  <div text-xl font-bold mb-4>
    部署 = 把你的代码放到一台<span text-green-400>24小时运行的公网服务器</span>上
  </div>

  <div grid grid-cols-3 gap-4 text-sm mt-4>
    <div v-click>
      <div text-3xl mb-2>📱</div>
      <div font-bold>手机就能打开</div>
      <div text-xs opacity-50>浏览器输入网址即可</div>
    </div>
    <div v-click>
      <div text-3xl mb-2>🔗</div>
      <div font-bold>链接分享即用</div>
      <div text-xs opacity-50>发给同事就能打开</div>
    </div>
    <div v-click>
      <div text-3xl mb-2>🚫</div>
      <div font-bold>不用装任何软件</div>
      <div text-xs opacity-50>不用打开 Claude Code</div>
    </div>
  </div>
</div>

<div v-click text-center text-lg>
  🚀 用 <strong text-green-300>Netlify</strong> 部署，<strong>免费</strong>，一句话搞定。
</div>

---
layout: two-cols-header
clicks: 5
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🚀</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>部署实操 —— Netlify 一步到位</span>
</h1>

::left::

<div border="~ gray-700" rounded-xl p-5 mb-3>
  <div text-lg font-bold mb-3 text-green-400>📋 准备工作</div>
  <div text-sm space-y-2>
    <div>1️⃣ 去 <strong text-green-300>netlify.com</strong> 用 GitHub 账号注册</div>
    <div>2️⃣ 把代码推送到 GitHub（Claude 帮你）</div>
  </div>
</div>

<div v-click border="~ gray-700" rounded-xl p-5>
  <div text-lg font-bold mb-3 text-green-400>💬 然后对 Claude 说</div>
  <div border="~ gray-600" rounded-lg p-3 bg="gray-800/50" text-sm>
    > 「帮我把项目部署到Netlify「
  </div>
</div>

::right::

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-5>
  <div text-lg font-bold mb-3 text-green-400>🤖 Claude 会自动完成</div>
  <div text-sm space-y-2>
    <div v-click>1. 🔧 安装 Netlify CLI</div>
    <div v-click>2. 🔑 引导你登录授权</div>
    <div v-click>3. 🏗️ 构建项目文件</div>
    <div v-click>4. 🚀 上传到 Netlify 服务器</div>
    <div v-click>5. 🔗 给你一个网址</div>
  </div>

  <div v-click mt-3 text-center text-base>
    <code text-green-300>https://xxx.netlify.app</code>
  </div>
</div>

<div v-click text-center mt-4 text-base>
  <strong text-green-300>部署成功后，把网址发到手机上就能打开使用。</strong>
</div>

---
layout: two-cols
clicks: 3
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
    > 「帮我把应用改成用Supabase做后端和数据库「
  </div>
</div>

<div v-click mt-3 text-sm>
  <strong>🤖 Claude 会帮你：</strong>
  <div text-xs opacity-70 mt-1 space-y-1>
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
  <strong text-green-300>你来做，因为你最懂需求。AI 只是你的工具。</strong>
</div>

---
layout: center
clicks: 3
---

<h1 text-3xl font-bold text-center mb-6>
  <span gradient-title>你不需要成为软件工程师</span>
</h1>

<div flex justify-center gap-6 mt-4>
  <div v-click border="~ green-400/30" bg="green-400/5" rounded-2xl p-6 text-center flex-1>
    <div text-4xl mb-3>🧠</div>
    <div text-lg font-bold text-green-400>业务知识</div>
    <div text-sm opacity-70>你最懂产线需要什么<br/>这是AI替代不了的</div>
  </div>
  <div v-click border="~ green-400/30" bg="green-400/5" rounded-2xl p-6 text-center flex-1>
    <div text-4xl mb-3>💬</div>
    <div text-lg font-bold text-green-400>清晰表达</div>
    <div text-sm opacity-70>做什么+有什么+要怎么<br/>说出来就行</div>
  </div>
  <div v-click border="~ green-400/30" bg="green-400/5" rounded-2xl p-6 text-center flex-1>
    <div text-4xl mb-3>🤖</div>
    <div text-lg font-bold text-green-400>Claude Code</div>
    <div text-sm opacity-70>把需求变成代码<br/>你的AI搭档</div>
  </div>
</div>

<div text-center mt-6 text-lg>
  <strong text-green-300>描述需求 → 审查结果 → 提出修改 → 迭代完善。</strong><br/>
  <span text-base opacity-60>你的角色不是「码农「，而是「做决策的人「。</span>
</div>

---
layout: two-cols
clicks: 2
---

<h1 flex items-center gap-3>
  <span text-3xl>✅</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>Vibe Coding 成功秘诀</span>
</h1>

<div mt-4 />

<div v-click border="l-4 green-400" bg="green-400/5" rounded-r-xl p-4 mb-3>
  <div text-lg font-bold text-green-400 mb-2>✅ 要做的</div>
  <div text-sm opacity-80 space-y-1>
    <div>• 用你熟悉的业务语言描述</div>
    <div>• 一次只改一个功能</div>
    <div>• 生成后立刻运行测试</div>
    <div>• 不懂就问「这段代码做了什么？「</div>
    <div>• 从小功能开始，逐步复杂</div>
    <div>• 出现报错直接复制粘贴给 Claude</div>
  </div>
</div>

::right::

<div mt-10 />

<div v-click border="l-4 red-400" bg="red-400/5" rounded-r-xl p-4>
  <div text-lg font-bold text-red-400 mb-2>❌ 不要做的</div>
  <div text-sm opacity-80 space-y-1>
    <div>• 说「做个设备管理系统「（太笼统）</div>
    <div>• 一次提10个需求（互相干扰）</div>
    <div>• 对问题沉默不管（告诉Claude）</div>
    <div>• 不思考照单全收（你说了算）</div>
    <div>• 怕犯错（贴错误信息给Claude）</div>
    <div>• 一上来就追求完美（先跑起来再说）</div>
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
    <div text-sm opacity-75>A: 可以。你不需要「写「代码，只需「描述需求「。就像不用会做菜才能点菜，你只管说你要什么，Claude是那个做菜的人。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: Claude生成的代码质量可靠吗？</div>
    <div text-sm opacity-75>A: 对于业务工具类应用完全够用。需求描述越清晰，代码质量越高。你才是最终把关的人——运行看看效果就知道了。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: 遇到报错怎么办？</div>
    <div text-sm opacity-75>A: 把报错信息直接复制给Claude。大多数错误它秒懂，立刻给出修复方案。AI 修 AI 的 bug，效率极高。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: 在公司可以用吗？数据安全吗？</div>
    <div text-sm opacity-75>A: 涉及敏感数据可以和IT部门沟通，部署在公司内部。工具都能迁移，Claude也会帮你。对于非敏感的个人效率工具，可以直接上手。</div>
  </div>

  <div v-click border="~ gray-700" rounded-xl p-4>
    <div font-bold text-green-400>Q: 做出来的应用能给同事用吗？</div>
    <div text-sm opacity-75>A: 当然！部署到Netlify后就是一个链接，任何人用浏览器都能打开。不需要安装任何软件，手机电脑平板都可以。</div>
  </div>
</div>

---
layout: center
clicks: 3
---

<h1 text-3xl font-bold text-center mb-8>
  <span gradient-title>你的第一个任务 —— 现在就开始</span>
</h1>

<div
  border="~ green-400/40"
  bg="green-400/5"
  rounded-2xl
  p-6
  text-left
  mb-6
>
  <div text-sm opacity-50 mb-3>🔽 打开 Claude Code，复制输入下面这段话：</div>

  <div border="~ gray-600" rounded-xl p-5 bg="gray-800/50" text-sm leading-relaxed>
    帮我做一个简单的设备运行日志Web应用：<br/>
    1. 一个表单页面，字段有：设备名称、日期、班次（早班/中班/晚班）、运行时长(小时)、当日产量、异常备注<br/>
    2. 提交后数据保存在本地，显示在下面的记录列表里<br/>
    3. 列表按日期倒序显示，不同班次用不同颜色标记<br/>
    4. 用HTML+CSS+JS做，数据存在localStorage里
  </div>
</div>

<div v-click text-center text-lg mb-4>
  <strong text-green-300>这就是你的第一个 Vibe Coding 对话。</strong><br/>
</div>

<div v-click text-center>
  <div border="~ teal-400/30" bg="teal-400/5" rounded-xl p-4 inline-block>
    <div text-sm text-teal-300>
      🎯 从这段话开始，你已经在编程了。不是学编程——而是用编程解决你的实际问题。
    </div>
  </div>
</div>

---
layout: two-cols
clicks: 4
---

<h1 flex items-center gap-3>
  <span text-3xl>📝</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>今天你学到了什么</span>
</h1>

<div mt-4 />

<div v-click border="~ orange-400/30" bg="orange-400/5" rounded-xl p-4 mb-3>
  <div font-bold text-orange-400>🧠 AI 基础认知</div>
  <div text-sm opacity-75>LLM = 读过海量知识的大脑 | Agent = 能动手做事的智能代理<br/>AI 是工具，你是决策者</div>
</div>

<div v-click border="~ blue-400/30" bg="blue-400/5" rounded-xl p-4 mb-3>
  <div font-bold text-blue-400>🌐 Web 应用架构</div>
  <div text-sm opacity-75>前端=HMI | 后端=控制器 | 数据库=历史归档<br/>API=Modbus/OPC-UA —— 你早就懂了</div>
</div>

<div v-click border="~ green-400/30" bg="green-400/5" rounded-xl p-4 mb-3>
  <div font-bold text-green-400>💬 Vibe Coding</div>
  <div text-sm opacity-75>描述需求 → AI写代码 → 你测试 → 迭代 → 上线<br/>核心公式：做什么 + 有什么字段 + 要怎么交互</div>
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
layout: center
clicks: 3
---

<h1 text-3xl font-bold text-center mb-8>
  <span gradient-title>最好的学习时机是现在</span>
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

  <div v-click text-base opacity-70 mt-4>
    工业数字化转型不只是上大系统<br/>
    更是每个人都能为自己做的那些小工具
  </div>

  <div v-click text-base opacity-70 mt-2>
    你今天学到的不是「怎么编程「<br/>
    而是<strong text-green-300>「原来我也可以「</strong>
  </div>
</div>

<div v-click text-center text-lg>
  打开 <strong text-green-300>Claude Code</strong>，说出你的第一个需求。<br/>
  <span text-sm opacity-50>记住：做什么 + 有什么字段 + 要怎么交互</span>
</div>

---
layout: center
---

<h1 text-4xl font-bold text-center>
  <span gradient-title>谢谢！</span>
</h1>

<div text-center mt-8 text-xl opacity-60>
  从现在开始，你就是创造者
</div>

<div text-center mt-4 text-sm opacity-40>
  有问题随时找我：张官祥 | 18519299525
</div>
