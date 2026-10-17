const GAME_STAGES = {
    1: {
        title: "第 1 关（日常 - 校园快闪摊位）",
        description: "你和朋友搞了一个校园快闪饮品摊。开业第一天大爆单，负责调饮的新手因为紧张连续做废了三杯饮料，排队时间越来越长。",
        options: [
            { id: "A", text: "请他去旁边递纸巾，你自己以最快速度完成所有订单。", req_awareness: 0, req_tolerance: 0, consequence: "你极高效率地保住了摊位口碑，但新手在一旁感到非常挫败。你的傲慢剥夺了他成长的机会。", reality: 15, compassion: -10, awareness: 1, tolerance: -2 },
            { id: "B", text: "当着顾客的面批评他两句让他长记性，然后放慢速度教他。", req_awareness: 0, req_tolerance: 0, consequence: "顾客略有抱怨，新手勉强跟上进度。虽然你在教人，但当众指责让氛围变得很压抑。", reality: -5, compassion: 5, awareness: 1, tolerance: 1 },
            { id: "C", text: "安慰他没关系，默默处理掉废品，手把手带他完成基础步骤。", req_awareness: 0, req_tolerance: 0, consequence: "损失了部分营业额和急躁的顾客。但新手彻底放下紧张，在后半场成了你最默契的帮手。", reality: -15, compassion: 15, awareness: -1, tolerance: 2 }
        ]
    },
    2: {
        title: "第 2 关（网红日常 - 合作影片的署名风波）",
        description: "你和另一位大V合作拍了一期爆款视频，后期的剪辑和特效全是你熬夜做的。但对方发布时，完全没提到你的名字，还在评论区暗示全是他一个人通宵剪的，把流量全揽在自己身上。",
        options: [
            { id: "A", text: "直接在评论区开撕，放出工程文件实锤对方抢功。", req_awareness: 0, req_tolerance: 0, consequence: "你抢回了部分热度，但也卷入了难看的骂战。路人觉得你们在联合炒作，粉黑参半。", reality: 10, compassion: -10, awareness: 2, tolerance: -2 },
            { id: "B", text: "保持沉默，觉得对方粉丝多，得罪了没好处，把委屈憋在心里。", req_awareness: 0, req_tolerance: 0, consequence: "事情平安过去，但你成了免费劳动力，对方下次还会继续吸你的血。", reality: 0, compassion: -5, awareness: -2, tolerance: 1 },
            { id: "C", text: "转发对方视频感谢合作，并顺势在自己频道发布一期“爆款幕后剪辑教学”。", req_awareness: 0, req_tolerance: 0, consequence: "不仅澄清了事实，还展现了高情商和硬核实力，直接吸了一大波高质量粉丝。", reality: 10, compassion: 15, awareness: 2, tolerance: 2 }
        ]
    },
    3: {
        title: "第 3 关（生活营 - 筹备期的预算危机）",
        description: "慈心营筹备期预算严重超支。采购工委提议，把买便宜物料的单据开成高级物料的发票，“套现”补齐亏空，神不知鬼不觉。",
        options: [
            { id: "A", text: "同意这个做法，毕竟是为了让营会顺利办下去。", req_awareness: 0, req_tolerance: 0, consequence: "资金问题解决了，营会表面风光，但团队内部埋下了“为目的不择手段”的种子。", reality: 15, compassion: -15, awareness: -2, tolerance: 0 },
            { id: "B", text: "明确表示自己不参与，但也不去阻止他们。", req_awareness: 0, req_tolerance: 0, consequence: "你保全了自己的清高，但眼睁睁看着团队走向错误的边缘。", reality: 5, compassion: -5, awareness: 0, tolerance: -1 },
            { id: "C", text: "坚决反对，并召集大家连夜重新规划活动，砍掉不必要的花销。", req_awareness: 0, req_tolerance: 0, consequence: "筹备面临巨大阻力，很多好点子被砍，大家怨声载道，但守住了正直底线。", reality: -15, compassion: 15, awareness: 3, tolerance: 0 }
        ]
    },
    4: {
        title: "第 4 关（日常 - 羽球局的社交）",
        description: "你好不容易抢到了热门时段的羽球场准备打竞技局。这时，一个技术很差的新手同学问能不能加入你们一起玩。",
        options: [
            { id: "A", text: "直接拒绝，表示今天是高端局，下次再约。", req_awareness: 0, req_tolerance: 0, consequence: "你们享受了酣畅淋漓的比赛，但那个同学感到被排挤，以后再也没打过球。", reality: 10, compassion: -10, awareness: 0, tolerance: -2 },
            { id: "B", text: "勉强同意，但在场上基本不给他喂球，只让他待在角落。", req_awareness: 0, req_tolerance: 0, consequence: "比赛节奏没被打乱太多，但新手在场上像个透明人，非常尴尬。", reality: 5, compassion: -5, awareness: -1, tolerance: 0 },
            { id: "C", text: "热情接纳，并主动调整节奏，抽出半小时专门陪他练基础。", req_awareness: 0, req_tolerance: 0, consequence: "你们没出多少汗，但你收获了一个极度忠诚的朋友。", reality: -10, compassion: 15, awareness: 0, tolerance: 3 }
        ]
    },
    4.5: {
        title: "第 4.5 关（中场休息 - 凌晨两点的灵魂拷问）",
        description: "筹备会议开到凌晨两点，主委突然指着你问：“你觉得我们这次慈心营，最需要突破的盲点到底是什么？”",
        options: [
            { id: "A", text: "坚持原则的同时保持灵活。", req_awareness: 0, req_tolerance: 0, consequence: "真实行为：你脑子一抽，直接站起来大声唱起了营歌。\n全场瞬间被你吓醒，笑作一团，疲惫一扫而空！", reality: 0, compassion: 0, awareness: 0, tolerance: 0 },
            { id: "B", text: "保持灵活的同时坚持原则。", req_awareness: 0, req_tolerance: 0, consequence: "真实行为：你拍着桌子大喊：“盲点就是还没吃宵夜！”\n主委无奈叹气，带大家去吃了Tomyam！", reality: 0, compassion: 0, awareness: 0, tolerance: 0 },
            { id: "C", text: "在原则与灵活之间寻找动态平衡。", req_awareness: 0, req_tolerance: 0, consequence: "真实行为：你假装深沉思考，其实睁着眼睛睡着了。\n大家以为你在憋大招，安静了三分钟，趁机眯了一会儿！", reality: 0, compassion: 0, awareness: 0, tolerance: 0 }
        ]
    },
    5: {
        title: "第 5 关（生活营 - 营员违规处理）",
        description: "一名营员严重违反了“不可私自离营”的死规定。按纪律必须开除，但他是因为家里突发急事又不敢请假才跑出去的。",
        options: [
            { id: "A", text: "铁面无私，为了维护纪律直接将其开除。", req_awareness: 0, req_tolerance: 0, consequence: "营会的铁律保住了，但其他营员觉得你冷血无情，氛围变得压抑。", reality: 10, compassion: -10, awareness: 1, tolerance: -2 },
            { id: "B", text: "帮他隐瞒下来，当做什么事都没发生。", req_awareness: 0, req_tolerance: 0, consequence: "纸包不住火，其他工委很快听到了风声，团队纪律开始涣散。", reality: -5, compassion: -10, awareness: -2, tolerance: 1 },
            { id: "C", text: "公开批评以正视听，但行使特权给予劳动惩罚，允许其留下。", req_awareness: 0, req_tolerance: 4, consequence: "既维护了规则，又展现了慈心与温度。全营凝聚力达到高潮。", reality: 15, compassion: 20, awareness: 1, tolerance: 2 }
        ]
    },
    6: {
        title: "第 6 关（日常 - 软件系统的致命漏洞）",
        description: "团队开发管理系统作业时，你深夜复查发现了一个隐藏的底层Bug，如果不重写，运行到特定步骤就会崩溃。",
        options: [
            { id: "A", text: "假装没看见，赌导师测不出来。", req_awareness: 0, req_tolerance: 0, consequence: "侥幸避开雷区拿了高分，但这种自欺欺人的成功让你内心极度心虚。", reality: 15, compassion: -15, awareness: -2, tolerance: 0 },
            { id: "B", text: "偷偷写个治标不治本的代码补丁糊弄过去。", req_awareness: 0, req_tolerance: 0, consequence: "勉强交差没崩溃，但运行极度卡顿。导师对代码质量失望，给了平庸的分数。", reality: 5, compassion: -5, awareness: -1, tolerance: 0 },
            { id: "C", text: "叫醒所有人坦白问题，顶着怨言连夜重构核心逻辑。", req_awareness: 5, req_tolerance: 0, consequence: "前端简陋，但导师看穿了底层架构的扎实与绝对的诚实，当场给了高分。", reality: -10, compassion: 20, awareness: 2, tolerance: 1 }
        ]
    },
    7: {
        title: "第 7 关（日常 - 朋友沉迷游戏）",
        description: "你最好的朋友沉迷游戏导致生活费见底。他找你借钱吃饭，并哀求你千万别告诉他父母。",
        options: [
            { id: "A", text: "借钱给他吃饭，帮他保守秘密。", req_awareness: 0, req_tolerance: 0, consequence: "表面关系更铁了，但他觉得有退路又充钱了。你成了堕落的纵容者。", reality: 5, compassion: -15, awareness: -2, tolerance: 1 },
            { id: "B", text: "严厉拒绝，并直接向他父母告状。", req_awareness: 0, req_tolerance: 0, consequence: "他父母停了他的卡。你做出了“正确”的事，但他视你为叛徒彻底断交。", reality: 0, compassion: -5, awareness: 1, tolerance: -2 },
            { id: "C", text: "拒绝借钱，每天拉他去食堂请他吃饭耐心开导。", req_awareness: 5, req_tolerance: 4, consequence: "钱包大出血，但他感受到了不带傲慢的关心，主动删除了游戏。", reality: -15, compassion: 20, awareness: 1, tolerance: 2 }
        ]
    },
    8: {
        title: "第 8 关（网红危机 - 虚假产品的带货诱惑）",
        description: "一个开出天价推广费的品牌方找你带货，但你试用后发现产品有明显的烂脸风险。如果拒绝，你将失去这个月冲榜最大的一笔资金支持和公关流量。",
        options: [
            { id: "A", text: "顺水推舟，照着公关稿猛吹产品，先把钱和流量赚了再说。", req_awareness: 0, req_tolerance: 0, consequence: "你当月流量爆棚，但随后大批粉丝烂脸维权，你遭到了全网抵制和封杀。", reality: -20, compassion: -20, awareness: -2, tolerance: -1 },
            { id: "B", text: "支支吾吾地推脱，不明确拒绝也不敢得罪，试图拖延过去。", req_awareness: 0, req_tolerance: 0, consequence: "品牌方觉得你耍大牌，在MCN圈子里抱团打压你，你错失了其他好机会。", reality: -5, compassion: -5, awareness: -1, tolerance: 0 },
            { id: "C", text: "明确拒绝，并顶着压力做了一期“如何避坑劣质产品”的硬核科普视频。", req_awareness: 6, req_tolerance: 0, consequence: "被品牌方发律师函威胁，但你的真实与客观让粉丝信任度彻底爆表，被官媒点名表扬。", reality: 10, compassion: 15, awareness: 2, tolerance: 1 }
        ]
    },
    9: {
        title: "第 9 关（生活营 - 晚会断电危机）",
        description: "晚会因器材组失误导致全场断电，营员慌乱，工委互相推诿。",
        options: [
            { id: "A", text: "在对讲机里严厉斥责器材组，要求立刻解决。", req_awareness: 0, req_tolerance: 0, consequence: "器材组因高压更加手忙脚乱，晚会彻底毁了。", reality: -15, compassion: -15, awareness: 0, tolerance: -2 },
            { id: "B", text: "强行介入越权指挥排查线路，用最高效冷酷的方式恢复供电。", req_awareness: 7, req_tolerance: 0, consequence: "电来了，但器材组觉得被羞辱，营会后直接退团。", reality: 10, compassion: -5, awareness: 2, tolerance: -2 },
            { id: "C", text: "主动打光带营员唱歌安抚，给器材组充分信任和抢修时间。", req_awareness: 0, req_tolerance: 7, consequence: "停电变成了温馨的不插电演唱会，拯救了营会，展现了极致的不慢精神。", reality: 15, compassion: 20, awareness: 1, tolerance: 2 }
        ]
    },
    10: {
        title: "第 10 关（未来 - 赞助商的终极施压）",
        description: "大赞助商要求你踢掉当年一起打拼但现在技术有些跟不上的老成员，否则直接撤资。",
        options: [
            { id: "A", text: "现实残酷，为了团队资金，狠心踢掉老成员。", req_awareness: 0, req_tolerance: 0, consequence: "拿到资金，但团队失去灵魂，大家开始互相提防。", reality: 30, compassion: -40, awareness: -3, tolerance: -3 },
            { id: "B", text: "拿详尽数据证明老成员的不可替代性，强硬谈判。", req_awareness: 8, req_tolerance: 0, consequence: "保住了成员和一半资金，但得罪了高层，未来举步维艰。", reality: 5, compassion: 15, awareness: 2, tolerance: 1 },
            { id: "C", text: "拒绝无理要求，力挺队友，哪怕继续吃泡面。", req_awareness: 7, req_tolerance: 7, consequence: "失去资金，但羁绊达到顶峰，你们最终靠正直与包容做出了惊艳的产品。", reality: -20, compassion: 50, awareness: 2, tolerance: 2 }
        ]
    }
};