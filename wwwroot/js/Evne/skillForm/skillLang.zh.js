(function(GoNorth) {
    "use strict";
    (function(Evne) {
        (function(Localization) {

            // View Model
            Localization.SkillViewModel = {};
            Localization.SkillViewModel.ChooseQuest = "选择关卡";
            Localization.SkillViewModel.ChooseNpc = "选择 NPC";

            // Evne Text Node
            GoNorth.DefaultNodeShapes.Localization.TypeNames["evne.Text"] = "文本";
            
            Localization.TextNode = {};
            Localization.TextNode.Text = "文本";

            // Action
            Localization.Actions = {};

            Localization.Actions.ChangeCurrentSkillValueLabel = "改变技能点";

            Localization.Actions.SetTargetNpcStateLabel = "改变目标 NPC 状态";

            // Condition
            Localization.Conditions = {};
            Localization.Conditions.CheckSkillValueLabel = "检查技能点";
            Localization.Conditions.SkillLabel = "技能";

        }(Evne.Localization = Evne.Localization || {}));
    }(GoNorth.Evne = GoNorth.Evne || {}));
}(window.GoNorth = window.GoNorth || {}));