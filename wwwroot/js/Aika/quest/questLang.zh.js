(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // View Model
            Localization.QuestViewModel = {};
            Localization.QuestViewModel.ChooseQuest = "ѡ��ؿ�";
            Localization.QuestViewModel.ChooseNpc = "ѡ�� npc";
            Localization.QuestViewModel.ChooseSkill = "ѡ����";

            // Quest Text Node
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Text"] = "�ı�";
            
            Localization.TextNode = {};
            Localization.TextNode.Text = "�ı�";

            // Conditions
            Localization.Conditions = {};

            Localization.Conditions.CheckCurrentQuestValueLabel = "��鵱ǰ�ؿ�ֵ";
            Localization.Conditions.CurrentQuestLabel = "��ǰ�ؿ�";

            Localization.Conditions.CheckQuestMarkerDistanceLabel = "�����ҵ��ؿ���Ǿ���";
            Localization.Conditions.MarkerDistance = "����";
            Localization.Conditions.MarkerDistanceCloserThan = "����";
            Localization.Conditions.MarkerDistanceMoreFarThan = "Զ��";
            Localization.Conditions.MarkerWasDeleted = "����ѱ�ɾ��.";

            // Actions
            Localization.Actions = {};

            Localization.Actions.ChangeCurrentQuestValueLabel = "�ı䵱ǰ�ؿ�ֵ";

            Localization.Actions.NpcDialogCheckMissingPermissions = "��ȱ�ٶ����ݽ��м���Ȩ��";
            Localization.Actions.ChooseNpcLabel = "<ѡ�� NPC>";
            Localization.Actions.OpenDialogTooltip = "����ѡ�Ի�";
            Localization.Actions.ChangeQuestStateInNpcDialogActionLabel = "�ؿ�״̬���� NPC �Ի��ı�";
            Localization.Actions.ChangeQuestStateDialogValidationFailed = "�ؿ�״̬û�иı䵽ѡ���״̬�ڶԻ���, ����Ի�.";
            Localization.Actions.ChangeQuestTextInNpcDialogActionLabel = "�ؿ��ı����� NPC �Ի��ı�";
            Localization.Actions.ChangeQuestTextDialogValidationFailed = "�ؿ��ı�û�б�ѡ��ĶԻ��ı�,����Ի�.";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));