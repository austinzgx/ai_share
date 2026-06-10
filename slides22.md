---
highlighter: shiki
css: unocss
transition: fade-out
mdc: true
colorSchema: dark
layout: cover
background: https://raw.githubusercontent.com/austinzgx/pic/master/apc_plum.png
---

<div abs-tl left-15 top-45 text-16 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500>编程与AI实战工作坊</div>

<div abs-tl left-15 top-75 text-2xl>
从零基础到上线部署，用 Claude Code 打造你的第一个业务应用
</div>
<div abs-bl left-15 bottom-10 flex="~ col" text-sm text-left>
  <div>每个人都能成为创造者</div>
  <div text-sm opacity-50>2026年6月</div>
</div>



---
layout: default
clicks: 7
---

<h1 flex items-center gap-3>
  <span text-3xl>📋</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>今天你会收获什么</span>
</h1>

<div mt-10 />

<v-clicks>

- 🎯 **理解编程的本质** —— 它和你熟悉的PLC编程有什么异同？
- 📚 **掌握编程的核心概念** —— 用工业场景的例子来学
- 🌐 **看懂Web应用的全貌** —— 前端、后端、数据库
- 🤖 **上手 Claude Code** —— 你的AI编程搭档
- ✨ **掌握 Vibe Coding** —— 用对话的方式写应用
- 🏭 **动手做出一个真实业务应用** —— 设备巡检管理系统
- 🚀 **部署到互联网** —— 用手机扫码就能用

</v-clicks>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>💡</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>为什么你需要懂编程？</span>
</h1>

<div mt-8 />

<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-lg
  p-4
  text-lg
  font-bold
>
  其实你已经会"编程"了 —— 只是没意识到。
</div>

<div mt-6 />

| 你熟悉的 | 本质上就是编程 |
|---|---|
| PLC梯形图/功能块 | 条件判断 + 执行逻辑 |
| SCADA系统组态 | 数据采集 + 可视化配置 |
| HMI画面制作 | 界面设计 + 交互逻辑 |
| 继电保护整定 | 参数配置 + 逻辑规则 |

::right::

<div flex items-center justify-center h-full>
<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-xl
  p-6
>
  <div text-lg font-bold mb-3>
    <span text-green-400>你缺的不是编程思维</span>
  </div>

  <div text-base opacity-80>
    只是把这种思维从PLC/HMI延伸到Web应用上。
  </div>

  <div mt-4 text-base opacity-80>
    学完之后你会成为团队里那个<strong text-green-300>"能做工具的人"</strong>。
  </div>
</div>
</div>

---
layout: two-cols
clicks: 6
---

<h1 flex items-center gap-3>
  <span text-3xl>🔧</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>你每天可能遇到的痛点</span>
</h1>

<div mt-6 />

<v-clicks>

- 📋 设备巡检还在用纸质表，月底汇总费时又容易出错
- 📊 产线数据散落在无数个Excel里，想看实时看板无从下手
- 🔧 备件库存靠人脑记忆，缺件了才发现，停线等件
- 📝 交接班记录写在笔记本上，过几天找不到了，无法追溯
- ⚠️ 设备异常没有自动通知，每次都是出了问题才知道
- 📈 领导要报表，每周手动复制粘贴做一次

</v-clicks>

::right::

<div flex items-center justify-center h-full>
  <div
    border="~ green-400/40"
    bg="green-400/5"
    rounded-2xl
    p-8
    text-center
  >
    <div text-5xl mb-4>💡</div>
    <div text-xl font-bold mb-2>
      <span text-green-400>这些都可以</span>
    </div>
    <div text-xl font-bold mb-4>
      用一个简单的Web应用解决
    </div>
    <div text-base opacity-70>
      今天之后，你就能自己动手做出来
    </div>
  </div>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>第一部分：编程基础概念</span>
</h1>

<div text-xl opacity-60 mt-4>用你熟悉的工业语言重新理解编程</div>

---
layout: two-cols-header
---

<h1 flex items-center gap-3 mb-6>
  <span text-3xl>📡</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>编程到底是什么？</span>
</h1>

::left::

<div border="~ gray-700" rounded-xl p-5>
  <div text-center text-lg font-bold mb-3 text-amber-400>PLC 控制电机启动</div>

```text
输入：启动按钮按下
  ↓
逻辑：检查安全条件、联锁状态
  ↓
输出：接触器吸合、电机运转
```
</div>

::right::

<div border="~ gray-700" rounded-xl p-5>
  <div text-center text-lg font-bold mb-3 text-green-400>Web 应用处理巡检记录</div>

```text
输入：用户填写巡检表单
  ↓
逻辑：校验数据、判断是否异常
  ↓
输出：记录保存、列表显示
```
</div>

<div text-center mt-6 text-base opacity-70>
  <strong text-green-300>流程完全一样：接收输入 → 处理逻辑 → 产生输出。</strong>
  只是表达方式从梯形图变成了代码文本。
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>📦</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>变量</span>
</h1>

<div mt-3 />

<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-lg
  p-3
  text-lg
>
  变量 = 存放数据的容器，就像仪表上的读数
</div>

<div mt-4 />

```javascript
let equipmentName = "冲压机A-03"; // 设备名
let temperature = 68.5;           // 运行温度
let pressure = 2.4;              // 压力(bar)
let isRunning = true;            // 运行状态
let faultCode = "E001";          // 故障码
let productionCount = 1520;      // 当日产量
```

::right::

<div flex flex-col justify-center h-full>
<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-xl
  p-5
>
  <div text-lg font-bold mb-3>
    <span text-green-400>类比</span>
  </div>

  ```text
  // 就像在HMI上读取仪表值
  console.log(equipmentName
    + " 温度: " + temperature + "°C");

  // 输出:
  // 冲压机A-03 温度: 68.5°C
  ```
</div>

<div mt-4 text-center text-base opacity-75>
  变量 = 给数据起个名字，方便反复使用。<br/>
  <strong text-green-300>和在PLC里定义一个Tag一模一样。</strong>
</div>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>🔢</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>数据类型</span>
</h1>

<div mt-3 />
<div text-base opacity-75 mb-4>就像你区分模拟量和数字量：</div>

| 类型 | 含义 | 工业场景 |
|---|---|---|
| 数字 | 连续值 | 温度68.5、压力2.4、转速1450 |
| 文本 | 字符串 | 设备名、工单号 |
| 布尔值 | 开关量 | 运行/停止、合格/不合格 |
| 数组 | 一组值 | 每小时温度采样 |

::right::

<div flex items-center justify-center h-full>
<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-xl
  p-5
>
  <div text-lg font-bold mb-3>
    <span text-green-400>数组示例</span>
  </div>

```text
// 一天24小时温度采样
// 就像DCS里的历史趋势数据
let temperatureLog = [
  68.5, 69.1, 70.2,
  72.0, 71.5, 69.8
];

// 访问第1个小时的温度
console.log(temperatureLog[0]); // 68.5
```
</div>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>🗂️</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>对象</span>
</h1>

<div mt-3 />

<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-lg
  p-3
  text-lg
>
  对象 = 把一台设备的所有信息打包在一起
</div>

<div mt-4 />

```text
let equipment = {
  name: "冲压机A-03",
  model: "SE-X200",
  location: "一车间-2号线",
  temperature: 68.5,
  pressure: 2.4,
  status: "running",
  lastMaintenance: "2026-05-15",
  nextMaintenance: "2026-06-15",
  operator: "张工"
};
```

::right::

<div mt-24 />

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-xl
  p-5
>
  <div text-lg font-bold mb-3>
    <span text-green-400>就像设备台账里的一页</span>
  </div>

  ```text
  // 访问对象里的信息
  // 就像在HMI上点选设备
  console.log(equipment.name);
  // 冲压机A-03

  console.log(
    equipment.lastMaintenance
  );
  // 2026-05-15
  ```
</div>

<div mt-4 text-center text-base opacity-75>
  一台设备、一个工单、一条巡检记录<br/>
  都可以是一个对象。
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>⚙️</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>函数</span>
</h1>

<div mt-3 />

<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-lg
  p-3
  text-base
>
  函数 = 完成特定任务的工具，就像功能块 (FB)
</div>

<div mt-3 />

```text
function checkTemperature(temp) {
  if (temp > 75) return "⚠️ 温度过高！";
  else if (temp > 70) return "⚠️ 注意观察";
  else return "✅ 温度正常";
}

checkTemperature(68.5); // "✅ 温度正常"
checkTemperature(78.0); // "⚠️ 温度过高！"

function calcOEE(a, p, q) {
  return a * p * q * 100; // 设备综合效率
}
```

::right::

<div mt-28 />

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-xl
  p-5
>
  <div text-lg font-bold mb-3>
    <span text-green-400>和PLC功能块 (FB) 一模一样</span>
  </div>

  <div text-base opacity-80>
    把一段逻辑包装成可复用的工具。<br/>
    定义了就能反复调用，不用重复写。
  </div>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>🔀</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>条件判断</span>
</h1>

<div text-base opacity-75 mt-2 mb-6>这就是你每天都在写的联锁逻辑，只是换了一种表达方式。</div>

```javascript
let status = "fault";

if (status === "running") {
  console.log("正常运行中");
} else if (status === "stopped") {
  console.log("已停机，检查原因");
} else if (status === "fault") {
  console.log("⚠️ 通知维修班组");
} else {
  console.log("状态未知，现场确认");
}
```

::right::

<div mt-12 />

<div border="~ amber-400/30" bg="amber-400/5" rounded-xl p-5>
  <div text-lg font-bold mb-3 text-amber-400>PLC 梯形图对应关系</div>

  <div text-sm space-y-2>
    <div flex justify-between><span>常开触点串联</span> <span text-green-300>→ if (a && b)</span></div>
    <div flex justify-between><span>常闭触点</span> <span text-green-300>→ if (!a)</span></div>
    <div flex justify-between><span>输出线圈</span> <span text-green-300>→ 执行操作</span></div>
    <div flex justify-between><span>置位/复位</span> <span text-green-300>→ s = true/false</span></div>
    <div flex justify-between><span>定时器</span> <span text-green-300>→ setTimeout(...)</span></div>
    <div flex justify-between><span>计数器</span> <span text-green-300>→ count++</span></div>
  </div>
</div>

---
layout: two-cols
---

<h1 flex items-center gap-3>
  <span text-3xl>🔁</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>循环</span>
</h1>

<div mt-3 />

<div
  border="l-4 green-400"
  bg="green-400/10"
  rounded-r-lg
  p-3
  text-base
>
  循环 = 对一组设备逐个执行检查，就像PLC轮询扫描
</div>

<div mt-3 />

```text
let equipmentList = [
  { name: "冲压机A-01", temp: 68.5 },
  { name: "冲压机A-02", temp: 72.0 },
  { name: "冲压机A-03", temp: 78.2 },
  { name: "注塑机B-01", temp: 65.0 },
  { name: "注塑机B-02", temp: 71.5 }
];

for (let eq of equipmentList) {
  if (eq.temp > 75) {
    console.log("⚠️ " + eq.name
      + " 温度超标: " + eq.temp + "°C");
  }
}
```

::right::

<div mt-28 />

<div
  border="~ green-400/30"
  bg="green-400/5"
  rounded-xl
  p-5
>
  <div text-lg font-bold mb-3>
    <span text-green-400>和PLC扫描周期一样</span>
  </div>

  <div text-base opacity-80>
    对每个I/O点、每台设备，执行相同的检查逻辑。
  </div>

  <div mt-3 text-base>
    <strong text-green-300>
      可以巡检5台，就可以巡检500台。
    </strong>
  </div>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>第二部分：Web应用架构</span>
</h1>

<div text-xl opacity-60 mt-4>前端、后端、数据库 —— 用你熟悉的系统来理解</div>

---
layout: two-cols-header
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🏗️</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>Web应用全景图</span>
</h1>

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

<h1 flex items-center gap-3>
  <span text-3xl>🖥️</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>前端是什么？</span>
</h1>

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

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🗄️</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>数据库是什么？</span>
</h1>

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

<div border="~ green-400/30" bg="green-400/5" rounded-xl p-4>
  <div text-center text-lg font-bold mb-2>
    <span text-green-400>设备巡检记录表（数据库中的一张表）</span>
  </div>

```
┌────┬──────────┬────────────┬──────┐
│ ID │ 设备名称  │ 巡检日期    │ 状态 │
├────┼──────────┼────────────┼──────┤
│ 1  │ 冲压机A3 │ 2026-06-01 │ 正常 │
│ 2  │ 冲压机A3 │ 2026-06-02 │ 关注 │
│ 3  │ 注塑机B1 │ 2026-06-01 │ 正常 │
└────┴──────────┴────────────┴──────┘
```
</div>

<div mt-4 text-center text-base opacity-75>
  数据库 = 有组织的数据仓库<br/>
  <strong text-green-300>≈ SCADA历史归档</strong>
</div>

---
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>第三部分：Claude Code & Vibe Coding</span>
</h1>

<div text-xl opacity-60 mt-4>你的AI编程搭档，和全新的编程方式</div>

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

# <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>Vibe Coding</span>
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
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>第四部分：动手实战</span>
</h1>

<div text-xl opacity-60 mt-4>从零到上线，打造设备巡检管理系统</div>

---
layout: two-cols-header
---

<h1 flex items-center gap-3 mb-4>
  <span text-3xl>🚀</span>
  <span bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent>动手前的准备</span>
</h1>

::left::

<div border="~ gray-700" rounded-xl p-5>
  <div text-lg font-bold mb-3><span text-green-400>1. 安装 Node.js</span></div>
  <div text-sm opacity-75>去 https://nodejs.org 下载 LTS 版本，一路下一步</div>
</div>

<div border="~ gray-700" rounded-xl p-5 mt-3>
  <div text-lg font-bold mb-3><span text-green-400>2. 打开终端</span></div>
  <div text-sm opacity-75>Windows: Win+R → cmd → 回车<br/>Mac: Launchpad → 终端</div>
</div>

::right::

<div border="~ gray-700" rounded-xl p-5 mt-6>
  <div text-lg font-bold mb-3><span text-green-400>3. 安装 Claude Code</span></div>

```bash
npm install -g
  @anthropic-ai/claude-code
```
</div>

<div border="~ gray-700" rounded-xl p-5 mt-3>
  <div text-lg font-bold mb-3><span text-green-400>4. 启动</span></div>

```bash
claude
```
  <div text-sm opacity-75 mt-2>然后就可以对话了</div>
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
layout: section
---

<h1 text-4xl font-bold>
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>第五部分：部署上线</span>
</h1>

<div text-xl opacity-60 mt-4>让你的应用真正在互联网上运行</div>

---
layout: center
---

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
  <span text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400>谢谢！开始 Vibe Coding 吧</span>
</h1>

<div text-center mt-8 text-xl opacity-60>
  从现在开始，你就是创造者
</div>
