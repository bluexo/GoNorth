(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // View Model
            Localization.QuestViewModel = {};
            Localization.QuestViewModel.ChooseQuest = "选择关卡";
            Localization.QuestViewModel.ChooseNpc = "选择 npc";
            Localization.QuestViewModel.ChooseSkill = "选择技能";

            // Quest Text Node
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Text"] = "文本";
            
            Localization.TextNode = {};
            Localization.TextNode.Text = "文本";

            // Conditions
            Localization.Conditions = {};

            Localization.Conditions.CheckCurrentQuestValueLabel = "检查当前关卡值";
            Localization.Conditions.CurrentQuestLabel = "当前关卡";

            Localization.Conditions.CheckQuestMarkerDistanceLabel = "检查玩家到关卡标记距离";
            Localization.Conditions.MarkerDistance = "距离";
            Localization.Conditions.MarkerDistanceCloserThan = "近于";
            Localization.Conditions.MarkerDistanceMoreFarThan = "远于";
            Localization.Conditions.MarkerWasDeleted = "标记已被删除.";

            // Actions
            Localization.Actions = {};

            Localization.Actions.ChangeCurrentQuestValueLabel = "改变当前关卡值";

            Localization.Actions.NpcDialogCheckMissingPermissions = "您缺少对数据进行检查的权限";
            Localization.Actions.ChooseNpcLabel = "<选择 NPC>";
            Localization.Actions.OpenDialogTooltip = "打开已选对话";
            Localization.Actions.ChangeQuestStateInNpcDialogActionLabel = "关卡状态将被 NPC 对话改变";
            Localization.Actions.ChangeQuestStateDialogValidationFailed = "关卡状态没有改变到选择的状态在对话中, 请检查对话.";
            Localization.Actions.ChangeQuestTextInNpcDialogActionLabel = "关卡文本将被 NPC 对话改变";
            Localization.Actions.ChangeQuestTextDialogValidationFailed = "关卡文本没有被选择的对话改变,请检查对话.";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));