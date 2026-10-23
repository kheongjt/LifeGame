// gameData.js

const gameData = {
    // === 6大习性心面板 ===
    roles: [
        {
            id: "A",
            name: "瞋性心 (Irritable)",
            desc: "果断直接，能快速发现问题。但易怒、好争执、不谦逊。",
            initAwareness: 2,
            initCompassion: 0
        },
        {
            id: "B",
            name: "贪性心 (Desirous)",
            desc: "温柔友善，有审美。但依赖性高、占有欲强。",
            initAwareness: 1,
            initCompassion: 2
        },
        {
            id: "C",
            name: "痴性心 (Deluded)",
            desc: "随和放松，不结仇。但喜欢随大众、注意力不集中、懒惰。",
            initAwareness: 0,
            initCompassion: 2
        },
        {
            id: "D",
            name: "虑性心 (Worrywart)",
            desc: "谨慎周到，善于思考。但多疑、焦虑、容易分神。",
            initAwareness: 1,
            initCompassion: 1
        },
        {
            id: "E",
            name: "信性心 (Faithful)",
            desc: "诚实坚定，乐于分享。但自负，容易批评不同意见的人。",
            initAwareness: 2,
            initCompassion: 1
        },
        {
            id: "F",
            name: "理性心 (Intellectual)",
            desc: "易分析，有理性，学习快。但傲慢、自我中心、嫉妒、怕输。",
            initAwareness: 2,
            initCompassion: 0
        }
    ],

    levels: [
        {
            id: 1,
            title: "第1关（日常 - 校园快闪摊位）",
            scenario: "你和朋友搞了一个校园快闪饮品摊。开业第一天大爆单，负责调饮的新手因为紧张连续做废了三杯饮料，排队时间越来越长。",
            options: [
                {
                    id: "A",
                    action: "请他去旁边递纸巾，你自己以最快速度完成所有订单。",
                    consequence: "你极高效率地保住了摊位口碑，但新手在一旁感到非常挫败。你的傲慢剥夺了他成长的机会。",
                    traffic: 10, compassionScore: -10, awareness: 1, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "安慰他没关系，默默处理掉废品，手把手带他完成基础步骤。",
                    consequence: "损失了部分营业额和急躁的顾客。但新手彻底放下紧张，在后半场成了你最默契的帮手。",
                    traffic: -10, compassionScore: 10, awareness: -1, compassion: 2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "当着顾客的面批评他两句让他长记性，然后放慢速度教他。",
                    consequence: "顾客略有抱怨，新手勉强跟上进度。虽然你在教人，但当众指责让氛围变得很压抑。",
                    traffic: -5, compassionScore: 5, awareness: 0, compassion: -1, requirements: { awareness: 0, compassion: 0 }
                }
            ]
        },
        {
            id: 2,
            title: "第2关（网红日常 - 合作影片的署名风波）",
            scenario: "你和另一位大V合作拍了一期爆款视频，后期的剪辑和特效全是你熬夜做的。但对方发布时，完全没提到你的名字，还在评论区暗示全是他一个人通宵剪的，把流量全揽在自己身上。",
            options: [
                {
                    id: "A",
                    action: "直接在评论区开撕，放出工程文件实锤对方抢功。",
                    consequence: "你靠黑红抢回了部分热度，但也卷入了难看的骂战。路人觉得你们在联合炒作，粉黑参半。",
                    traffic: 10, compassionScore: -10, awareness: 1, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "保持沉默，觉得对方粉丝多，得罪了没好处，把委屈憋在心里。",
                    consequence: "事情平安过去，但你成了免费劳动力，对方下次还会继续吸你的血。",
                    traffic: 5, compassionScore: -5, awareness: -1, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "转发对方视频感谢合作，放弃争议流量，脚踏实地在自己频道发布一期“爆款幕后剪辑教学”。",
                    consequence: "你放弃了引战带来的巨大曝光，但澄清了事实，展现了硬核实力，吸了一波高质量粉丝。",
                    traffic: -10, compassionScore: 10, awareness: 2, compassion: 1, requirements: { awareness: 0, compassion: 0 }
                }
            ]
        },
        {
            id: 3,
            title: "第3关（生活营1 - 筹备期的预算危机）",
            scenario: "慈心营筹备期预算严重超支。负责采购的工委提议，把买便宜物料的单据，找相熟的店家开成高级物料的发票，用“套现”的钱来补齐亏空，保证神不知鬼不觉。",
            options: [
                {
                    id: "A",
                    action: "同意这个做法，毕竟是为了让营会顺利办下去。",
                    consequence: "资金问题解决了，营会表面风光，但你们团队内部埋下了“可以为了目的不择手段”的种子。",
                    traffic: 10, compassionScore: -10, awareness: -2, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "当场摊牌指出其严重的道德与违规风险，并立刻强制建立严格的“财务双签核销制度”，强硬砍掉超支预算。",
                    consequence: "你用绝对的理智斩断了腐败苗头。账目干净了，但采购工委觉得被当众羞辱，你赢得了制度，却失去了团队的温度。",
                    traffic: -10, compassionScore: 10, awareness: 3, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "明确表示自己不参与，但也不去阻止他们。",
                    consequence: "你保全了自己的清高，但眼睁睁看着团队走向错误的边缘。",
                    traffic: 5, compassionScore: -5, awareness: 0, compassion: -1, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "D",
                    action: "私下安抚采购怕办不成活动的焦虑，为了不伤和气，你自己悄悄掏钱/拉赞助把亏空补上，且没有公开追究。",
                    consequence: "团队一团和气，采购非常感激你。但因为你用人情掩盖了漏洞，没有建立任何防范机制，下一次活动依然存在超支的隐患。",
                    traffic: -10, compassionScore: 10, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 0 }
                }
            ]
        },
        {
            id: 4,
            title: "第4关（日常 - 羽球局的社交）",
            scenario: "你好不容易抢到了热门时段的羽球场，约了几个高手队友准备打一场高强度的竞技局。这时，一个技术很差的新手同学路过，怯生生地问能不能加入你们一起玩。",
            options: [
                {
                    id: "A",
                    action: "热情接纳，直接中止了高强度比赛，把竞技局降级为“欢乐保姆局”，让所有高手队友陪着他一个人慢慢打。",
                    consequence: "新手感受到了无与伦比的温暖和包容，很快乐。但你完全忽视了其他期待打高端局的队友的感受，队友们表面配合，心里其实非常憋屈，觉得你慷他人之慨。",
                    traffic: -10, compassionScore: 10, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "委婉但坚决地拒绝，表示今天是高端局，下次再约。",
                    consequence: "你们享受了酣畅淋漓的比赛，但那个同学感到被排挤，以后再也没敢拿起球拍。",
                    traffic: 10, compassionScore: -10, awareness: 0, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "诚实地向他说明今天是竞技局，加入体验会很差。但你主动拿出手机，当面帮他预约了下周的空场，并承诺到时自己单独来陪他练基础。",
                    consequence: "你完美地保护了队友的比赛体验，也给出了理智的解决方案。但对方当下依然感到被拒绝的失落，你的处理方式显得有些“公事公办”的冷感。",
                    traffic: -10, compassionScore: 10, awareness: 3, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "D",
                    action: "勉强同意他加入，但在场上基本不给他喂球，只让他待在角落当透明人。",
                    consequence: "比赛节奏没被打乱太多，但新手在场上像个透明人，感到非常尴尬和自卑。",
                    traffic: 5, compassionScore: -5, awareness: -1, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                }
            ]
        },
        {
            id: 4.5,
            title: "娱乐关（凌晨两点的灵魂拷问）",
            scenario: "筹备会议开到凌晨两点，所有工委都处于精神恍惚、快要睡着的状态。这时，主委突然指着你问：“你觉得我们这次慈心营，最需要突破的盲点到底是什么？”",
            isEntertainment: true,
            options: [
                {
                    id: "A",
                    action: "坚持原则的同时保持灵活。",
                    consequence: "真实行为：你其实根本没听清问题。你脑子一抽，直接站起来大声唱起了营歌。\n后果：全场瞬间被你吓醒，随后笑作一团，疲惫的会议氛围一扫而空。",
                    traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "保持灵活的同时坚持原则。",
                    consequence: "真实行为：你一脸严肃地拍着桌子大喊：“盲点就是我们现在居然还没吃宵夜！”\n后果：全场工委欢呼雀跃，主委无奈地叹了口气，然后带大家去吃Tomyam。",
                    traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "在原则与灵活之间寻找动态平衡。",
                    consequence: "真实行为：你假装陷入了极度深沉的思考，一动不动......其实你睁着眼睛睡着了。\n后果：大家以为你在憋什么大招，整个会议室为了不打扰你，安静了整整三分钟，大家趁机眯了一会儿。",
                    traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                }
            ]
        },
        {
            id: 4.8,
            title: "娱乐关（干饭人的群聊日常）",
            scenario: "筹备会议终于熬到了半夜，大家饿得前胸贴后背。群里有人发问：“宵夜到底吃什么？”，这个时候，你在团队里通常是扮演哪种角色？",
            isEntertainment: true,
            options: [
                { id: "A", action: "角色 A（主导推土机）：“别磨叽了，直接去吃 Tomyam，坐我的车跟我走！”", consequence: "你拥有绝对的执行力，能够瞬间打破僵局，但偶尔会让想吃别的队友不敢出声。", traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 } },
                { id: "B", action: "角色 B（首席挑刺官）：“Tomyam 太辣了吧？Mamak 又太热，而且那家店昨天刚吃过......”", consequence: "你精准排雷，疯狂否决别人的提议却死活给不出新方案，极度容易挨打。", traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 } },
                { id: "C", action: "角色 C（佛系复读机）：“我都行，随便，你们决定就好，我都可以~”", consequence: "你提供了极致的随和，但也把做决定的精神内耗全部推给了别人。", traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 } },
                { id: "D", action: "角色 D（数据分析师）：默默打开手机，开始对比附近三家店的评分、距离、打烊时间和人均消费，准备发表小作文。", consequence: "你极其严谨靠谱，但等你分析完，大家可能已经饿晕在会议桌上了。", traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 } },
                { id: "E", action: "角色 E（前排吃瓜组）：根本不在乎吃什么，已经在旁边开始拍大家疯狂纠结的丑照，并配上文字发 IG Story 了。", consequence: "主打一个提供情绪价值，在团队混乱时完美置身事外。", traffic: 0, compassionScore: 0, awareness: 0, compassion: 0, requirements: { awareness: 0, compassion: 0 } }
            ]
        },
        {
            id: 4.9,
            title: "娱乐关（宵夜局的突发危机）",
            scenario: "历经千辛万苦，你们终于在宵夜档坐下。等了足足45分钟，累得半死的服务员终于把菜端了上来——结果全错了！你们点的重辣Tomyam变成了清汤米粉，冰奶茶变成了热咖啡，而隔壁比你们晚来的那一桌已经吃上了。\n\n你的任务：请基于你刚才选择的干饭人角色（{ROLE_4_8}），在输入框内打字写下你此刻的第一反应、脱口而出的一句话，或者会做出的真实举动。",
            isTextInput: true,
            isEntertainment: true,
            options: []
        },
        {
            id: 5,
            title: "第5关（生活营营员违规处理）",
            scenario: "一名营员严重违反了“不可私自离营”的死规定。按纪律你必须立刻开除他，但你偶然得知，他是因为家里突发急事（亲人生病）又不敢请假，才半夜跑出去的。",
            options: [
                {
                    id: "A",
                    action: "铁面无私，为了维护纪律直接将其开除。",
                    consequence: "纪律保住了，你树立了绝对威严。但营员们私下觉得你是个冷血无情的机器，团队氛围变得极度压抑。",
                    traffic: 10, compassionScore: -10, awareness: 0, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "睁一只眼闭一只眼，帮他隐瞒下来，当做什么事都没发生过。",
                    consequence: "纸包不住火，其他营员很快发现了这件事，觉得你处事极度不公，整个营会的纪律开始涣散。",
                    traffic: 5, compassionScore: -5, awareness: -1, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "公开违规事实并按规矩给予“留营查看”处分，但你敏锐地查清了制度漏洞，联系营长和家长，合法合规地为他申请了特别探视时间。",
                    consequence: "既维护了铁律，又用极高的办事手腕解决了他根本问题。但复杂的流程让部分不知情的工委觉得你是在故意折腾人，显得有些冷酷。",
                    traffic: -10, compassionScore: 10, awareness: 3, compassion: -2, requirements: { awareness: 3, compassion: 0 }
                },
                {
                    id: "D",
                    action: "顶着被其他高层弹劾的巨大压力，你用自己的名义强行担保他留下，并牺牲自己的睡眠，每晚单独陪他处理对家人的担忧情绪。",
                    consequence: "营员对你感激涕零，你用极致的温暖挽救了他。但为了护着他，你与整个工委团队的规则发生了严重冲突，被高层严厉警告。",
                    traffic: -10, compassionScore: 10, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 3 }
                }
            ]
        },
        {
            id: 6,
            title: "第6关（日常 - 软件系统的致命漏洞）",
            scenario: "团队开发管理系统作业时，你深夜复查代码，突然发现了一个隐藏的底层 Bug。如果现在不重写，明天演示时运行到特定步骤系统就会彻底崩溃。但大家都已经熬了好几天，刚睡下不久。",
            options: [
                {
                    id: "A",
                    action: "假装没看见，直接打包提交，赌导师测试时根本点不到那个特定的崩溃步骤。",
                    consequence: "你们侥幸避开了雷区拿了高分，但这种自欺欺人的侥幸心理让你非常心虚，也把定时炸弹留给了队友。",
                    traffic: 10, compassionScore: -10, awareness: 0, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "不叫醒队友，自己偷偷写个治标不治本的代码补丁(Hardcode)强行糊弄过去，至少保证明天不崩溃。",
                    consequence: "勉强交差，运行极度卡顿。导师一眼看穿了补丁的粗糙，给了个平庸的分数。但你独立做出的紧急避险，让你获得了一丝成长。",
                    traffic: 5, compassionScore: -5, awareness: 1, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "立刻叫醒所有人坦白问题，不管队友多崩溃、多抱怨，你铁面无私地强行指挥全员连夜重构核心逻辑。",
                    consequence: "系统完美运行，导师看穿了底层架构的扎实，当场给了最高分。但你毫不留情的高压指挥让队友身心俱疲，项目结束后大家甚至不想和你说话。",
                    traffic: -10, compassionScore: 10, awareness: 3, compassion: -2, requirements: { awareness: 5, compassion: 0 }
                },
                {
                    id: "D",
                    action: "你不忍心叫醒极度疲惫的队友，决定自己一个人熬大夜，边查资料边艰难地把整个系统的Bug独自修完。",
                    consequence: "系统顺利过关，第二天醒来的队友对你疯狂感激和赞美。但你因为极度透支差点在课堂上晕倒，而且队友根本没学到教训，下次依然会写出一样的 Bug。",
                    traffic: -10, compassionScore: 10, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 5 }
                }
            ]
        },
        {
            id: 7,
            title: "第7关（日常 - 朋友沉迷游戏）",
            scenario: "你最好的朋友最近沉迷氪金抽卡游戏，导致生活费彻底见底。他已经饿了两天，跑来找你借钱吃饭，并拼命哀求你千万别告诉他父母，发誓下个月一定还你。",
            options: [
                {
                    id: "A",
                    action: "随便借给他一笔钱打发他，并答应帮他保守秘密，只要他不来烦自己就行。",
                    consequence: "表面上你很讲“义气”，但实际上他拿了钱转头又去充值了。你成了他继续堕落的无意识帮凶。",
                    traffic: 10, compassionScore: -10, awareness: 0, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "拒绝借给他大笔现金，只借给他刚好够吃一顿杂菜饭的小钱，然后随便口头劝他两句别玩了。",
                    consequence: "治标不治本，他吃完这一顿下一顿还是得挨饿，甚至觉得你很小气。但你至少敏锐地察觉到了不能给他大笔资金的风险。",
                    traffic: 5, compassionScore: -5, awareness: 1, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "坚决不借钱。不顾他的哀求与怨恨，你直接打电话通知他的父母和大学辅导员，强行让外力介入他的生活危机。",
                    consequence: "他的银行卡被家人冻结，被迫接受心理干预，彻底断绝了游戏资金。你用最理智冷酷的方式拯救了他的人生，但他对你的背叛恨之入骨，与你彻底断交。",
                    traffic: -10, compassionScore: 10, awareness: 3, compassion: -2, requirements: { awareness: 5, compassion: 0 }
                },
                {
                    id: "D",
                    action: "坚决不借钱，但接下来的一个月，你每天自掏腰包买两份饭硬拉着他一起吃，并用掉你所有的课余时间陪他打球、散步，转移他的注意力。",
                    consequence: "你的钱包大出血，几乎完全失去了个人的休闲和学习时间。但在你不带任何傲慢的极致陪伴下，他感受到了真正的关爱，最终自己流着泪卸载了游戏。",
                    traffic: -10, compassionScore: 10, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 5 }
                }
            ]
        },
        {
            id: 8,
            title: "第8关（网红危机 - 虚假产品的带货诱惑）",
            scenario: "一个开出天价推广费的品牌方找你带货，但你私下试用后发现产品成分超标，有明显的烂脸风险。如果拒绝，你将失去这个月冲榜最大的一笔资金支持和公关流量；如果得罪对方，甚至可能会面临公关抹黑。",
            options: [
                {
                    id: "A",
                    action: "顺水推舟，照着公关稿在直播间猛吹产品，先把钱和天价流量赚到手再说。",
                    consequence: "你当月流量爆棚，赚得盆满钵满。但随后陆续有粉丝烂脸维权，虽然你花钱把热搜压了下去，但你的良知和核心信誉正在悄悄腐烂。",
                    traffic: 10, compassionScore: -10, awareness: 0, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "接下推广，但在视频里支支吾吾，不明确推荐也不敢得罪品牌方，试图靠念完基础稿子敷衍过去。",
                    consequence: "因为你没用力推，受害粉丝较少，但品牌方觉得你“拿钱不办事”，在圈子里抱团打压你。你察觉到了风险并试图降低伤害，但依然弄脏了羽毛。",
                    traffic: 5, compassionScore: -5, awareness: 1, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "不仅严词拒绝，还顶着被封杀的压力，连夜做了一期“硬核拆解伪劣产品成分”的打假科普视频，全网曝光。",
                    consequence: "你引发了行业大地震，被品牌方发律师函威胁甚至全网水军攻击。你用绝对的理智与正义敲醒了大众，赢得了路人的最高敬意，但你的网红之路变得极其危险和孤独。",
                    traffic: -10, compassionScore: 10, awareness: 3, compassion: -2, requirements: { awareness: 6, compassion: 0 }
                },
                {
                    id: "D",
                    action: "找个“档期不合”的借口委婉拒绝，不得罪品牌方。随后，你自掏腰包，私下偷偷原价回收那些老粉丝从其他渠道买到的该产品，并温柔劝导她们停用。",
                    consequence: "你保全了行业的体面，也没有遭受公关攻击。你用极致的慈心和自我牺牲，在暗中默默保护了你的信徒，但你的积蓄被彻底掏空，且外界根本不知道你的伟大。",
                    traffic: -10, compassionScore: 10, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 6 }
                }
            ]
        },
        {
            id: 9,
            title: "第9关（生活营 - 晚会断电危机）",
            scenario: "生活营最万众瞩目的晚会进行到一半，因为器材组的失误，全场突然断电！营员们在黑暗中开始恐慌，几百人的场面即将失控，赞助商也在前排面露不悦。",
            options: [
                {
                    id: "A",
                    action: "在对讲机里严厉斥责器材组的严重失职，要求他们立刻解决，并拿起麦克风向全场宣布“这是器材组的失误，请大家等待”。",
                    consequence: "你成功把锅甩了出去，保全了自己作为高层的颜面。但器材组因为极度高压而彻底崩溃，修了半小时都没修好，晚会彻底毁了。",
                    traffic: 10, compassionScore: -10, awareness: 0, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "一把推开慌乱的器材组长，亲自接管配电箱，用最冷酷精准的专业指令排查线路，在3分钟内强行恢复了供电。",
                    consequence: "晚会顺利继续，赞助商极其欣赏你的高效和危机处理能力。但器材组长觉得被当众褫夺了尊严，你赢得了效率，却摧毁了团队的自尊心。",
                    traffic: 5, compassionScore: -5, awareness: 3, compassion: -2, requirements: { awareness: 7, compassion: 0 }
                },
                {
                    id: "C",
                    action: "完全放弃晚会进度，挡在器材组面前不让他们受任何压力，甚至自己上台替他们揽下所有的责任，让大家慢慢修。",
                    consequence: "器材组对你死心塌地，感动得痛哭流涕。但由于抢修效率太低，晚会彻底停摆，赞助商愤怒撤资，你成为了整个营会的背锅侠。",
                    traffic: -10, compassionScore: 10, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 7 }
                },
                {
                    id: "D",
                    action: "你迅速洞察了备用电路的接入点，但你没有夺权，而是打着手电筒拍着器材组长的肩膀，温和而坚定地一步步引导他亲自接通电源。",
                    consequence: "虽然耽误了5分钟，但器材组长在你的引导下亲手挽救了局面，浴火重生。你不仅化解了危机，还在暗中培养出了最坚韧的队友，深藏功与名。",
                    traffic: 5, compassionScore: 10, awareness: 1, compassion: 1, requirements: { awareness: 6, compassion: 6 }
                },
                {
                    id: "E",
                    action: "你敏锐地察觉这是制造情感高潮的绝佳时机。你给器材组充分的信任去抢修，自己冲上舞台，号召全场打开手机闪光灯，在星光下清唱营歌。",
                    consequence: "停电不但没毁掉晚会，反而变成了整场营会最催泪、最震撼的“不插电演唱会”！全营凝聚力达到巅峰，你完美地化腐朽为神奇。",
                    traffic: 10, compassionScore: 5, awareness: 1, compassion: 1, requirements: { awareness: 6, compassion: 6 }
                }
            ]
        },
        {
            id: 10,
            title: "第10关（未来大结局 - M型网红的终极抉择）",
            scenario: "国内最大的网红资本机构向你抛出千万级签约合同，承诺将所有的资源倾斜给你，把你捧成全网前1%的“M型顶流”。但条件极其苛刻：第一，必须立刻踢掉当年陪你一起吃泡面打拼、但现在技术跟不上的老团队；第二，未来的内容必须按公司的剧本走，靠制造“容貌焦虑”和“社会对立”来收割流量。",
            options: [
                {
                    id: "A",
                    action: "签下合同，狠心遣散老团队，开始在镜头前扮演资本为你定制的高级人设，疯狂带货。",
                    consequence: "你住进了豪宅，拥有了千万粉丝。但在某天深夜卸妆后，看着镜子里那个为了流量不择手段的自己，你感到无比的恶心与空虚。你赢得了世界，却失去了灵魂。",
                    traffic: 50, compassionScore: -50, awareness: 0, compassion: -2, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "B",
                    action: "拒绝踢掉团队，但同意在内容上妥协，带着团队一起拍摄那些制造焦虑的低劣剧本。",
                    consequence: "团队保住了，大家都有了高收入，但内部失去了以前的欢声笑语。你察觉到了内容对社会的不良影响，每天都在内疚中煎熬。",
                    traffic: 20, compassionScore: -20, awareness: 1, compassion: 0, requirements: { awareness: 0, compassion: 0 }
                },
                {
                    id: "C",
                    action: "表面迎合，暗中利用你极高的敏锐度，收集了该机构签“霸王条款”压榨创作者的铁证。在签约前夜，你联合其他博主曝光了资本，随后直接宣布退网。",
                    consequence: "你用理智和决绝摧毁了黑暗资本，成为了行业的传奇。但你彻底断送了自己和团队的网红生涯，大家只能解散去寻找普通的工作。",
                    traffic: -40, compassionScore: 40, awareness: 3, compassion: -2, requirements: { awareness: 8, compassion: 0 }
                },
                {
                    id: "D",
                    action: "果断撕毁合同，力挺身后的队友。你们退回最初那个破旧的工作室，哪怕被资本限流，依然坚持做最真实、最温暖的内容。",
                    consequence: "你们的流量跌入谷底，有时连吃顿好饭都困难。但你们之间的羁绊达到了顶峰，你们的内容成为了这个浮躁网络世界里，少数人心中最温暖的光。",
                    traffic: -30, compassionScore: 50, awareness: -2, compassion: 3, requirements: { awareness: 0, compassion: 8 }
                },
                {
                    id: "E",
                    action: "你不卑不亢地拒绝了合同。你敏锐地抓住了这次“资本霸凌”的社会痛点，带着团队将这段经历改编成了一部充满爱与力量的微电影，全网免费发布。",
                    consequence: "微电影火爆全网，官媒点名表扬！你没有被资本吞噬，而是用正直、才华与对团队的爱，硬生生走出了一条属于自己的路。你站上了流量之巅，且干干净净。",
                    traffic: 40, compassionScore: 40, awareness: 2, compassion: 2, requirements: { awareness: 7, compassion: 7 }
                }
            ]
        }
    ]
};