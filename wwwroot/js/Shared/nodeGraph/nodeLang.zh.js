(function(GoNorth) {
    "use strict";
    (function(DefaultNodeShapes) {
        (function(Localization) {

            // Node Display
            Localization.NodeDisplay = {};

            Localization.NodeDisplay.Position = "位置:";
            Localization.NodeDisplay.Zoom = "缩放:";    
            Localization.NodeDisplay.ToogleMiniMap = "点击这里开关最小地图";        

            // Shared Messages
            Localization.DeleteNode = "删除节点";
            Localization.ErrorOccured = "产生一个错误";

            // Text Node
            Localization.TypeNames = {
                "default.Text": "Text"
            };

            Localization.TextPlaceHolder = "文本";

            // Quest States
            Localization.QuestStates = {};
            Localization.QuestStates.NotStarted = "未开始";
            Localization.QuestStates.InProgress = "正在进行";
            Localization.QuestStates.Success = "成功";
            Localization.QuestStates.Failed = "失败";

            // Actions
            GoNorth.DefaultNodeShapes.Localization.TypeNames["default.Action"] = "动作";

            // Conditions
            Localization.TypeNames["default.Condition"] = "条件";

            Localization.Conditions = {};

            Localization.Conditions.MissingInformations = "<丢失信息>"

            Localization.Conditions.AddCondition = "添加条件";

            Localization.Conditions.AndOperator = "与";
            Localization.Conditions.AndOperatorShort = "&&";
            Localization.Conditions.OrOperator = "或";
            Localization.Conditions.OrOperatorShort = "||";

            Localization.Conditions.EditCondition = "<编辑条件>";
            Localization.Conditions.LoadingConditionText = "加载条件...";
            Localization.Conditions.ErrorLoadingConditionText = "加载错误";
            Localization.Conditions.Else = "另外";

            Localization.Conditions.MoveConditionUp = "上移条件";
            Localization.Conditions.MoveConditionDown = "下移条件";
            Localization.Conditions.DeleteCondition = "删除条件";

            Localization.Conditions.NumberField = "数字字段";
            Localization.Conditions.TextField = "文本字段";
            Localization.Conditions.FieldWasDeleted = "字段已被删除.";

            Localization.Conditions.CheckPlayerValueLabel = "检查玩家值";
            Localization.Conditions.PlayerLabel = "玩家";

            Localization.Conditions.ChooseQuestLabel = "<选择关卡>";

            Localization.Conditions.CheckChooseQuestValueLabel = "检查点选的关卡值";

            Localization.Conditions.StateLabel = "状态";

            Localization.Conditions.CheckQuestStateLabel = "检查关卡状态";

            Localization.Conditions.ChooseNpcLabel = "<选择 NPC>";

            Localization.Conditions.CheckNpcAliveStateLabel = "检查NPC存活状态";
            Localization.Conditions.NpcAliveStateAlive = "存活";
            Localization.Conditions.NpcAliveStateDead = "死亡";

            Localization.Conditions.CheckGameTimeLabel = "检查游戏时间";
            Localization.Conditions.GameTimeOperatorBefore = "之前";
            Localization.Conditions.GameTimeOperatorAfter = "之后";
            Localization.Conditions.GameTime = "游戏时间";
            
            Localization.Conditions.ChooseSkillLabel = "<选择技能>";

            Localization.Conditions.CheckChoosePlayerSkillValueLabel = "检查玩家技能点";
            Localization.Conditions.PlayerSkillPrefix = "Player ";

            Localization.Conditions.CheckPlayerLearnedSkillLabel = "玩家可以使用技能";
            Localization.Conditions.CheckPlayerLearnedSkillPrefixLabel = "玩家可使用 ";

            Localization.Conditions.CheckPlayerNotLearnedSkillLabel = "玩家不可使用技能";
            Localization.Conditions.CheckPlayerNotLearnedSkillPrefixLabel = "玩家不可使用 ";

            // Actions
            Localization.Actions = {};

            Localization.Actions.NumberField = "数字字段";
            Localization.Actions.TextField = "文本字段";

            Localization.Actions.ChangePlayerValueLabel = "改变玩家值";
            Localization.Actions.ChangeQuestValueLabel = "改变点选关卡的值";
            Localization.Actions.ChooseQuestLabel = "&lt;选择关卡&gt;";
            
            Localization.Actions.QuestState = "状态";
            
            Localization.Actions.SetQuestStateLabel = "改变关卡状态";
            Localization.Actions.OpenQuestTooltip = "打开已选关卡";

            Localization.Actions.AddQuestTextLabel = "添加关卡文本";
            Localization.Actions.QuestText = "文本";

            Localization.Actions.WaitLabel = "等待";
            Localization.Actions.WaitTypeRealTime = "实时";
            Localization.Actions.WaitTypeGameTime = "游戏时间";
            Localization.Actions.WaitUnitMilliseconds = "毫秒";
            Localization.Actions.WaitUnitSeconds = "秒";
            Localization.Actions.WaitUnitMinutes = "分";
            Localization.Actions.WaitUnitHours = "小时";
            Localization.Actions.WaitUnitDays = "天";

            Localization.Actions.StatePlaceholder = "状态";

            Localization.Actions.SetPlayerStateLabel = "改变玩家状态";

            Localization.Actions.ChooseSkillLabel = "&lt;选择技能&gt;";
            Localization.Actions.OpenSkillTooltip = "打开已选技能";

            Localization.Actions.PlayerLearnSkillLabel = "玩家学习技能";
            Localization.Actions.PlayerForgetSkillLabel = "玩家遗忘技能";

            Localization.Actions.ChangePlayerSkillValueLabel = "改变玩家技能点";

        }(DefaultNodeShapes.Localization = DefaultNodeShapes.Localization || {}));
    }(GoNorth.DefaultNodeShapes = GoNorth.DefaultNodeShapes || {}));
}(window.GoNorth = window.GoNorth || {}));