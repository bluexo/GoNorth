(function(GoNorth) {
    "use strict";
    (function(Evne) {
        (function(Localization) {

            // View Model
            Localization.SkillViewModel = {};
            Localization.SkillViewModel.ChooseQuest = "ѡ��ؿ�";
            Localization.SkillViewModel.ChooseNpc = "ѡ�� NPC";

            // Evne Text Node
            GoNorth.DefaultNodeShapes.Localization.TypeNames["evne.Text"] = "�ı�";
            
            Localization.TextNode = {};
            Localization.TextNode.Text = "�ı�";

            // Action
            Localization.Actions = {};

            Localization.Actions.ChangeCurrentSkillValueLabel = "�ı似�ܵ�";

            Localization.Actions.SetTargetNpcStateLabel = "�ı�Ŀ�� NPC ״̬";

            // Condition
            Localization.Conditions = {};
            Localization.Conditions.CheckSkillValueLabel = "��鼼�ܵ�";
            Localization.Conditions.SkillLabel = "����";

        }(Evne.Localization = Evne.Localization || {}));
    }(GoNorth.Evne = GoNorth.Evne || {}));
}(window.GoNorth = window.GoNorth || {}));