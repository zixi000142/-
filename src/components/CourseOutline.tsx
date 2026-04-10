import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Music, 
  Activity, 
  Moon, 
  Clock, 
  ChevronRight,
  Target,
  Users,
  Heart,
  ShieldCheck
} from 'lucide-react';

interface MonthData {
  month: number;
  title: string;
  xinfa: { title: string; desc: string };
  lejiao: { title: string; desc: string };
  donglian: { title: string; desc: string };
  jingxiu: { title: string; desc: string };
  image: string;
}

const months: MonthData[] = [
  {
    month: 1,
    title: "溯本求源",
    xinfa: { title: "溯本求源·造者殊胜", desc: "研读《道德经》首章，体悟“无名天地之始”的深意。引导高管从繁忙的事务中抽离，回归生命本源，确立研修的终极目标与心力基石，建立超越“术”层面的道家全局观。" },
    lejiao: { title: "唤醒身体·声纹评估", desc: "认识声音的本质，进行专业的声纹评估与目标设定。通过身体放松训练与脊椎姿态调整，打通发声的生理通道，让声音回归自然、通透的状态，开启“乐以养心”的第一步。" },
    donglian: { title: "入门筑基·无极桩功", desc: "深入解析太极十三式的核心价值。重点练习“无极桩功”，掌握“虚领顶劲、沉肩坠肘”的身体要领，学习太极起势，感受气血在指尖的微弱流动，开启身体的觉知。" },
    jingxiu: { title: "归根静坐·呼吸觉察", desc: "学习“归根”静坐法。引导生命能量定期回到原点，在寂静中感受腹部随呼吸自然起伏。通过初步的止语练习，降低感官对外的消耗，初步体悟“致虚极，守静笃”的生命境界。" },
    image: "https://picsum.photos/seed/ink-1/800/600?sepia=1"
  },
  {
    month: 2,
    title: "德载正途",
    xinfa: { title: "德载正途·开宗明义", desc: "探讨“上德不德”的领导力境界。分析德行作为事业承载力的核心逻辑，通过打破固有的认知障，重塑内在气场，让高管在决策时具备更深厚的文化底蕴与道德直觉。" },
    lejiao: { title: "气息基石·腹式呼吸", desc: "系统学习腹式呼吸进阶技巧，掌握气息的深度控制。通过专项练习将呼吸带入演唱，解决发声“气短、气浮”的问题，让声音具备稳固的支撑感，如同领导者的定力。" },
    donglian: { title: "核心入门·掤势要义", desc: "学习太极八法之首“掤势”。体悟“掤劲”如水负舟的张力，练习揉球动作，理解太极圆转不败的物理逻辑，增强身体的弹性与防御性，建立“内固精神”的基础。" },
    jingxiu: { title: "心息相依·情绪观察", desc: "呼吸是情绪状态的镜子。在静坐中练习“心息相依”，觉察当下念头的起伏而不被其左右。学习在压力环境下通过调节呼吸节奏来平复心境，掌握情绪管理的主动权。" },
    image: "https://picsum.photos/seed/stone-2/800/600?sepia=1"
  },
  {
    month: 3,
    title: "常无常有",
    xinfa: { title: "常无常有·宗义玄门", desc: "洞察事物本质的穿透眼光。学习在“有”的物质世界与“无”的精神世界之间自如切换。通过对“玄之又玄”的探讨，培养高管在模糊决策中的直觉力与洞察力。" },
    lejiao: { title: "声音启航·位置探索", desc: "声带保护与科学发声位置探索。通过简单音阶演唱，寻找声音在头腔与口腔的共鸣点。让声音不再仅仅是沟通工具，而是成为传递个人魅力与能量的载体。" },
    donglian: { title: "连贯入门·捋势原理", desc: "学习太极八法之“捋势”。掌握借力卸力、顺势而为的智慧。练习起势、掤、捋的连贯组合，体验动作间的“丝绸感”，理解在竞争中如何通过“化劲”化解冲突。" },
    jingxiu: { title: "杂念觉知·正念回归", desc: "杂念不是敌人，不跟着跑就够了。在静坐中练习“知道了，回来”的心理回路。培养在复杂信息流中快速回归核心目标的能力，提升专注力的深度与广度。" },
    image: "https://picsum.photos/seed/minimal-3/800/600?sepia=1"
  },
  {
    month: 4,
    title: "阴阳体用",
    xinfa: { title: "阴阳体用·无为而治", desc: "化解二元对立的内耗。学习阴阳转化的辩证思维，建立良性的组织生态。探讨“无为”并非不干预，而是顺应规律的精准干预，实现管理上的“四两拨千斤”。" },
    lejiao: { title: "换气秘诀·乐句表达", desc: "掌握歌唱中的呼吸节奏与乐句划分。学习“偷气”技巧，确保表达的连贯性与情感的饱满度。通过对经典曲目的练习，提升在公众表达中的情感感染力。" },
    donglian: { title: "进阶练习·挤势核心", desc: "学习太极八法之“挤势”。体悟合力向外的穿透力。重点调整身形（含胸拔背、立腰敛臀），确保劲力从脚底直达指尖，建立身体的轴心力量与稳定性。" },
    jingxiu: { title: "复命静坐·主动充电", desc: "静坐是高效率的主动充电。学习在午间或会议间隙进行短时高效的“复命”练习。像睡眠一样必要，让大脑定期清空缓存，保持思维的敏捷与决策的清明。" },
    image: "https://picsum.photos/seed/balance-4/800/600?sepia=1"
  },
  {
    month: 5,
    title: "虚心实腹",
    xinfa: { title: "穷源息争·虚心实腹", desc: "降温内卷，夯实生命基本盘。引导高管回归本分，减少无效的欲望扩张。通过“虚其心，实其腹”的修持，建立强大的内在安全感，不被外界的浮躁所动摇。" },
    lejiao: { title: "气声魅力·情感色彩", desc: "探索“气声”在表达中的独特魅力。学习气声与实声的自由切换，丰富声音的情感色彩。通过声音的细腻变化，提升高管在沟通中的亲和力与说服力。" },
    donglian: { title: "深化练习·按势要领", desc: "学习太极八法之“按势”。体悟如潮水般连绵不断的推力。练习太极呼吸与动作的深度配合，实现“气遍周身不稍滞”，提升身体的协调性与能量流转效率。" },
    jingxiu: { title: "天地之和·音律松弛", desc: "音乐绕过理性直达内心。在特定频率的太极音乐引导下，让身体随音律自然松弛。学习利用听觉通道快速进入深度放松状态，修复长期高压带来的身心损耗。" },
    image: "https://picsum.photos/seed/ripple-5/800/600?sepia=1"
  },
  {
    month: 6,
    title: "和光同尘",
    xinfa: { title: "大道功用·和光同尘", desc: "空杯心境与融入群体的智慧。学习收敛锋芒，以包容之心成就团队。探讨如何在保持个人独立性的同时，与环境和谐共生，实现“内圣外王”的处世境界。" },
    lejiao: { title: "共鸣腔体·质感提升", desc: "系统训练胸腔、口腔、头腔三大共鸣腔。通过专项练习提升声音的厚度与质感。让高管的声音具备如钟磬般的穿透力与威严感，增强气场表现。" },
    donglian: { title: "技法拓展·采势核心", desc: "学习太极八法之“采势”。掌握精准的抓取与牵引力量。初步引入“外三合”（手与足合、肘与膝合、肩与胯合）概念，提升动作的整体性与精准度。" },
    jingxiu: { title: "无为静修·深度放开", desc: "放开控制反而得到更深的静。在静坐中练习“交出控制权”，将呼吸完全交给身体本能。体悟“无为而无不为”的奇妙状态，激发潜意识中的创造力与灵感。" },
    image: "https://picsum.photos/seed/smoke-6/800/600?sepia=1"
  },
  {
    month: 7,
    title: "虚以守中",
    xinfa: { title: "天地橐龠·虚以守中", desc: "客观公正与激发内在源动力。学习如风箱般“虚而不屈，动而愈出”的组织活力。探讨如何通过留白与授权，激发团队的自组织能力，保持企业的长久生命力。" },
    lejiao: { title: "混声技术·平滑过渡", desc: "攻克真假声转换的难点，掌握混声技术。通过换声点的平滑过渡练习，让声音在不同音域间自由游走。提升表达的灵活性，应对各种复杂的沟通场景。" },
    donglian: { title: "技法提升·挒势要点", desc: "学习太极八法之“挒势”。体悟旋转与撕裂的离心力。配合太极七星桩基础要领，巩固下盘稳定性。理解在变革中如何利用“旋转”的力量打破僵局。" },
    jingxiu: { title: "气沉丹田·压力落地", desc: "注意力从头部落地是最好的减压。通过意守丹田的练习，感受腹部的温热感。学习在危机时刻通过“气沉丹田”快速稳住重心，保持冷静的判断力。" },
    image: "https://picsum.photos/seed/mist-7/800/600?sepia=1"
  },
  {
    month: 8,
    title: "抱元守中",
    xinfa: { title: "多言数穷·不如守中", desc: "言行的克制与保持专注力。在信息爆炸的时代，守住内心的初衷。探讨如何减少无效沟通，通过“守中”保持战略定力，避免在琐碎事务中耗尽领导者的精力。" },
    lejiao: { title: "咬字艺术·归韵练习", desc: "精修歌唱与演讲的咬字艺术。通过归韵练习，确保每一个字都清晰、圆润、有力。提升语言的质感，让每一句指令都能精准触达人心，产生共鸣。" },
    donglian: { title: "技法延伸·栽锤核心", desc: "学习太极八法之“肘势”与“栽锤”。体悟沉肩坠肘带来的下沉劲力。引入“内三合”（心与意合、意与气合、气与力合）概念，实现身心合一的劲力发放。" },
    jingxiu: { title: "真定力·不依外境", desc: "不依赖外境的静才是真定力。在嘈杂环境下练习静坐，保持内心的安宁。培养高管在动荡市场中“泰山崩于前而色不变”的心理素质，成为团队的定海神针。" },
    image: "https://picsum.photos/seed/light-8/800/600?sepia=1"
  },
  {
    month: 9,
    title: "谷神绵绵",
    xinfa: { title: "玄牝之门·谷神绵绵", desc: "虚怀若谷的受纳力与造化之机。学习如山谷般承载万物而不争。探讨如何建立开放的学习型组织，通过持续的“虚”来孕育新的商业可能与生命机遇。" },
    lejiao: { title: "歌曲精讲·情感理解", desc: "深度解析经典曲目的背景与情感内涵。重点教唱主歌部分，练习如何通过声音讲述故事。提升高管的人文素养，学会用艺术的语言连接人心。" },
    donglian: { title: "连贯提升·穿靠原理", desc: "学习太极八法之“靠势”。掌握周身联动的爆发力。通过穿靠、盘肘的动作组合，体验身体各部位的严密配合，理解组织协同作战的物理原型。" },
    jingxiu: { title: "意念锚点·诀窍练习", desc: "学习使用“诀”作为精准的意念锚点。通过念动特定音节（如“哼”字）引导能量在体内的特定路径流转。掌握一种快速调整身体微循环的高级静修技法。" },
    image: "https://picsum.photos/seed/flow-9/800/600?sepia=1"
  },
  {
    month: 10,
    title: "大道无私",
    xinfa: { title: "天长地久·大道无私", desc: "超越小我的广阔胸襟。探讨“非以其无私邪，故能成其私”的辩证法。引导高管建立大社会责任感，以无私的心态构建商业生态，成就长青基业。" },
    lejiao: { title: "歌曲精讲·高潮强化", desc: "重点教唱副歌部分，练习高音区的爆发力与控制力。通过对情感高潮的处理，提升在关键决策或演讲中的鼓动力与领袖魅力。" },
    donglian: { title: "方位练习·步法核心", desc: "学习太极“五步”（进、退、顾、盼、定）。掌握方位转换中的重心稳定。理解在战略进攻与退守中如何保持灵活性与平衡感，实现“步步为营”。" },
    jingxiu: { title: "诀息合一·杂念不生", desc: "实现“诀”与“呼吸”的深度合一。让一个念头占满心田，使杂念无处落脚。体悟“呼气念字，吸气归窍”的韵律，进入一种高度纯净、高效的意识状态。" },
    image: "https://picsum.photos/seed/sky-10/800/600?sepia=1"
  },
  {
    month: 11,
    title: "利物不争",
    xinfa: { title: "上善若水·利物不争", desc: "以柔克刚的处世之道与自我定位。学习水“处众人之所恶”的谦卑与“攻坚强者莫之能胜”的力量。探讨如何在竞争中通过“不争”而实现“天下莫能与之争”。" },
    lejiao: { title: "舞台表现·眼神管理", desc: "系统学习舞台站姿、手势与眼神交流。练习如何通过表情管理传递自信与真诚。通过集体合唱配合，提升团队协作中的默契度与共情能力。" },
    donglian: { title: "全套整合·中定核心", desc: "重点修持“中定”核心。要求身形中正、气息平稳。将太极十三式全套动作整合贯通，体验如行云流水般的顺畅感，实现身体层面的“圆融无碍”。" },
    jingxiu: { title: "由粗入细·默念无念", desc: "从出声念字到无声默念，引导意识由外向内深度收敛。在默念中寻找短暂的“无念”瞬间，体悟生命最深层的宁静与喜悦，触碰生命本质。" },
    image: "https://picsum.photos/seed/bamboo-11/800/600?sepia=1"
  },
  {
    month: 12,
    title: "天道保常",
    xinfa: { title: "功成知止·天道保常", desc: "生命的边界感与进退之道。探讨“功遂身退”的智慧，避免盛极而衰。引导高管建立长期的生命经营观，保全身心长久的安稳态势，实现事业与生命的双重圆满。" },
    lejiao: { title: "彩排展示·年终汇报", desc: "进行完整的舞台彩排与个性化调整。克服演出心理压力，建立强大的心理建设。通过年终汇报演出，展示一年来声音与气质的蜕变，圆满结项。" },
    donglian: { title: "优化复盘·居家练习", desc: "对太极十三式进行核心复盘。学习如何在日常居家或办公场景中进行简易有效的练习。将太极转化为一种生活方式，确保研修成果在课后长久延续。" },
    jingxiu: { title: "功在日常·独立修行", desc: "那1小时的静坐是为了改变其余的23小时。脱离口令引导，独立完成深度静修。确立终身修行的习惯，让内心的宁静成为应对世界万变的永恒底色。" },
    image: "https://picsum.photos/seed/zen-12/800/600?sepia=1"
  }
];

const schedule = [
  { time: "09:00 — 10:30", module: "心法", content: "《道德经》智慧精讲", icon: <BookOpen className="w-5 h-5" /> },
  { time: "10:50 — 11:30", module: "乐教", content: "《明德行》声乐训练", icon: <Music className="w-5 h-5" /> },
  { time: "13:00 — 14:00", module: "交流", content: "探讨交流 · 智慧内化", icon: <Users className="w-5 h-5" /> },
  { time: "14:30 — 15:30", module: "动练", content: "太极动功（十三式）", icon: <Activity className="w-5 h-5" /> },
  { time: "16:00 — 17:00", module: "静修", content: "太极静坐养生", icon: <Moon className="w-5 h-5" /> },
];

export default function CourseOutline() {
  return (
    <div className="min-h-screen bg-[var(--color-warm-bg)] text-[var(--color-warm-ink)] font-sans selection:bg-[#e6d5b8] selection:text-[#5a4a3a]">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/zen-mist/1920/1080?sepia=1" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 contrast-110 brightness-105 blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdf8f1]/40 to-[#fdf8f1]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="inline-block px-6 py-1.5 mb-8 text-xs font-medium tracking-[0.3em] uppercase border border-[#8c2f39]/30 rounded-full text-[#8c2f39] bg-[#8c2f39]/5">
              太极文化生命研修课程
            </span>
            <h1 className="text-7xl md:text-9xl font-serif font-light mb-10 tracking-tight text-[#3d352e]">
              身心合一
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-[#a67c52] mb-14 max-w-2xl mx-auto leading-relaxed">
              “溯源生命之本，体悟天地之道” —— 专为企业高管设计的十二讲系统研修。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-4 bg-[#8c2f39] text-white rounded-full hover:bg-[#7a2831] transition-all duration-300 shadow-xl shadow-[#8c2f39]/20 font-medium">
                立即开启研修
              </button>
              <button className="px-10 py-4 border border-[#a67c52] text-[#a67c52] rounded-full hover:bg-[#a67c52]/5 transition-all duration-300 font-medium">
                了解更多
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#5a4a3a] to-transparent" />
        </motion.div>
      </section>

      {/* Daily Schedule */}
      <section className="py-32 px-4 bg-[var(--color-warm-bg)] border-y border-[#e6d5b8]/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8c2f39]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-4 text-[#3d352e]">研修日课安排</h2>
            <p className="text-[#a67c52] tracking-[0.4em] uppercase text-xs font-medium">Daily Schedule</p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {schedule.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-3xl bg-white border border-[#e6d5b8]/60 text-center group transition-all duration-500 hover:shadow-2xl hover:shadow-[#a67c52]/15"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8c2f39] text-white text-[10px] font-bold rounded-full tracking-widest uppercase shadow-lg shadow-[#8c2f39]/30">
                  {item.module}
                </div>
                <div className="mt-4 mb-6">
                  <div className="text-2xl font-serif font-bold text-[#3d352e] group-hover:text-[#8c2f39] transition-colors duration-300">
                    {item.time.split(' — ')[0]}
                  </div>
                  <div className="text-xs text-[#a67c52] font-medium opacity-60">至 {item.time.split(' — ')[1]}</div>
                </div>
                <div className="w-14 h-14 bg-[#fdf8f1] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#a67c52] group-hover:bg-[#8c2f39] group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                  {item.icon}
                </div>
                <p className="text-base font-serif text-[#3d352e] leading-relaxed group-hover:font-medium transition-all duration-300">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Months Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">十二个月研修蓝图</h2>
              <p className="text-[#5a4a3a]/70 leading-relaxed">
                从筑基到圆融，每一个月都是一次生命的蜕变。我们将通过心法、乐教、动练、静修四个维度，带您走入深层的生命实证。
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8e8e8e]">
                <div className="w-2 h-2 rounded-full bg-[#5a4a3a]" /> 筑基
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8e8e8e]">
                <div className="w-2 h-2 rounded-full bg-[#c4a484]" /> 进阶
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8e8e8e]">
                <div className="w-2 h-2 rounded-full bg-[#e6d5b8]" /> 圆融
              </div>
            </div>
          </div>

          <div className="grid gap-32">
            {months.map((month, idx) => (
              <motion.div 
                key={month.month}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -top-12 -left-8 md:-left-12 z-0">
                    <span className="text-[12rem] font-serif font-black text-[#e6d5b8]/20 leading-none select-none">
                      {month.month < 10 ? `0${month.month}` : month.month}
                    </span>
                  </div>
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-[#a67c52]/10 aspect-[4/3] bg-[var(--color-warm-bg)]">
                    <img 
                      src={month.image} 
                      alt={month.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 mix-blend-multiply opacity-90 contrast-110 brightness-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#a67c52]/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-3xl font-serif mb-2 flex items-center gap-4">
                      <span className="text-sm font-mono text-[#8e8e8e] uppercase tracking-tighter">Month {month.month}</span>
                      {month.title}
                    </h3>
                    <div className="h-px w-24 bg-[#5a4a3a]/30" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#5a4a3a] font-medium text-sm">
                        <BookOpen className="w-4 h-4" /> 心法
                      </div>
                      <h4 className="font-serif text-lg">{month.xinfa.title}</h4>
                      <p className="text-sm text-[#5a4a3a]/70 leading-relaxed">{month.xinfa.desc}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#5a4a3a] font-medium text-sm">
                        <Music className="w-4 h-4" /> 乐教
                      </div>
                      <h4 className="font-serif text-lg">{month.lejiao.title}</h4>
                      <p className="text-sm text-[#5a4a3a]/70 leading-relaxed">{month.lejiao.desc}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#5a4a3a] font-medium text-sm">
                        <Activity className="w-4 h-4" /> 动练
                      </div>
                      <h4 className="font-serif text-lg">{month.donglian.title}</h4>
                      <p className="text-sm text-[#5a4a3a]/70 leading-relaxed">{month.donglian.desc}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#5a4a3a] font-medium text-sm">
                        <Moon className="w-4 h-4" /> 静修
                      </div>
                      <h4 className="font-serif text-lg">{month.jingxiu.title}</h4>
                      <p className="text-sm text-[#5a4a3a]/70 leading-relaxed">{month.jingxiu.desc}</p>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-[#5a4a3a] text-sm font-medium hover:gap-4 transition-all duration-300 group">
                    查看详细课程安排 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiral Progression Section */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#3d352e]">四大维度 · 阶梯式进化体系</h2>
            <p className="text-[#a67c52] tracking-[0.4em] uppercase text-xs font-medium mb-4">Spiral Progression System</p>
            <div className="w-24 h-px bg-[#8c2f39] mx-auto" />
          </div>

          <div className="space-y-40">
            {[
              { id: 'xinfa', label: '太极理论 (心法)', icon: <BookOpen className="w-8 h-8" />, color: '#8c2f39', key: 'xinfa' },
              { id: 'lejiao', label: '太极音乐 (乐教)', icon: <Music className="w-8 h-8" />, color: '#a67c52', key: 'lejiao' },
              { id: 'donglian', label: '太极动功 (动练)', icon: <Activity className="w-8 h-8" />, color: '#3d352e', key: 'donglian' },
              { id: 'jingxiu', label: '太极静功 (静修)', icon: <Moon className="w-8 h-8" />, color: '#5a4a3a', key: 'jingxiu' },
            ].map((module, mIdx) => (
              <div key={module.id} className="relative">
                {/* Module Header */}
                <div className="flex items-center gap-6 mb-16 px-4">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl" style={{ backgroundColor: module.color }}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-[#3d352e]">{module.label}</h3>
                    <p className="text-sm text-[#a67c52] tracking-widest uppercase mt-1">Stairway to Mastery</p>
                  </div>
                </div>

                {/* Spiral/Staircase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                  {months.map((month, sIdx) => {
                    const level = Math.floor(sIdx / 4) + 1;
                    // Define level-based colors for each module
                    const levelColors = {
                      xinfa: ['#fdf2f2', '#fee2e2', '#fecaca'], // Light to dark red tints
                      lejiao: ['#fef9f1', '#fef3e1', '#fde6c1'], // Light to dark gold tints
                      donglian: ['#f9fafb', '#f3f4f6', '#e5e7eb'], // Light to dark gray tints
                      jingxiu: ['#f0fdf4', '#dcfce7', '#bbf7d0'], // Light to dark green tints
                    };
                    
                    const bgColor = (levelColors as any)[module.id][level - 1];
                    const borderColor = level === 3 ? module.color : '#e6d5b8';

                    return (
                      <motion.div
                        key={month.month}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: sIdx * 0.05 }}
                        className="relative z-10 group"
                      >
                        <div 
                          className="h-full p-8 rounded-[2.5rem] border transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col"
                          style={{ 
                            backgroundColor: bgColor,
                            borderColor: `${borderColor}40`,
                            boxShadow: level === 3 ? `0 20px 40px -15px ${module.color}20` : 'none'
                          }}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                              style={{ backgroundColor: module.color, opacity: 0.4 + (level * 0.2) }}
                            >
                              {month.month}
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-[10px] font-bold uppercase tracking-tighter" style={{ color: module.color }}>
                                Level {level}
                              </span>
                              <span className="text-[8px] opacity-40 uppercase tracking-widest">
                                {level === 1 ? '筑基' : level === 2 ? '进阶' : '圆融'}
                              </span>
                            </div>
                          </div>
                          
                          <h4 className="text-lg font-serif mb-4 text-[#3d352e] group-hover:text-[#8c2f39] transition-colors leading-snug">
                            {(month as any)[module.key].title}
                          </h4>
                          
                          <div className="w-8 h-0.5 mb-6 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: `${module.color}40` }} />
                          
                          <p className="text-xs text-[#5a4a3a]/80 leading-relaxed flex-grow">
                            {(month as any)[module.key].desc}
                          </p>

                          {/* Level Indicator Bar */}
                          <div className="mt-6 flex gap-1">
                            {[1, 2, 3].map(l => (
                              <div 
                                key={l} 
                                className="h-1 flex-grow rounded-full transition-all duration-500"
                                style={{ 
                                  backgroundColor: l <= level ? module.color : '#e6d5b840',
                                  opacity: l <= level ? 0.2 + (l * 0.2) : 1
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Learning Outcomes */}
      <section className="py-32 px-4 bg-[#8c2f39] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-4">研修成果预期</h2>
            <p className="text-white/60 tracking-[0.4em] uppercase text-xs font-medium">Learning Outcomes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "认知维度", desc: "建立太极阴阳的系统思维，跳出非黑即白的认知陷阱。", icon: <Target className="w-8 h-8" /> },
              { title: "心性修养", desc: "内在定力显著提升，能在纷繁世事中稳住领导者本心。", icon: <Heart className="w-8 h-8" /> },
              { title: "处世智慧", desc: "掌握以柔克刚、利物不争的圆融处世之道。", icon: <Users className="w-8 h-8" /> },
              { title: "生命境界", desc: "超越小我局限，以无私心态成就稳固的人生底座。", icon: <ShieldCheck className="w-8 h-8" /> },
            ].map((outcome, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-500"
              >
                <div className="mb-8 text-[#fdf8f1]">{outcome.icon}</div>
                <h3 className="text-2xl font-serif mb-6">{outcome.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 text-center border-t border-[#e6d5b8]/40 bg-[#fdf8f1]">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-serif mb-8 text-[#8c2f39]">身心合一</div>
          <div className="flex justify-center flex-wrap gap-10 mb-12 text-sm text-[#a67c52] font-medium">
            <a href="#" className="hover:text-[#8c2f39] transition-colors tracking-widest">课程介绍</a>
            <a href="#" className="hover:text-[#8c2f39] transition-colors tracking-widest">导师团队</a>
            <a href="#" className="hover:text-[#8c2f39] transition-colors tracking-widest">往期回顾</a>
            <a href="#" className="hover:text-[#8c2f39] transition-colors tracking-widest">联系我们</a>
          </div>
          <div className="w-16 h-px bg-[#e6d5b8] mx-auto mb-8" />
          <p className="text-xs text-[#a67c52]/60 leading-relaxed tracking-widest">
            © 2026 身心合一 · 高管生命研修课程. All Rights Reserved.<br />
            溯源生命之本 · 体悟天地之道
          </p>
        </div>
      </footer>
    </div>
  );
}
