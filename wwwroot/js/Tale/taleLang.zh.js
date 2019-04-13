(function(GoNorth) {
    "use strict";
    (function(Tale) {
        (function(Localization) {

            Localization.ViewModel = {};
            Localization.ViewModel.ChooseItem = "ѡ�����";
            Localization.ViewModel.ChooseQuest = "ѡ��ؿ�";
            Localization.ViewModel.ChooseNpc = "ѡ��NPC";
            Localization.ViewModel.ChooseSkill = "ѡ����";

            // Text Lines
            GoNorth.DefaultNodeShapes.Localization.TypeNames["tale.PlayerText"] = "��ҹ�����";
            GoNorth.DefaultNodeShapes.Localization.TypeNames["tale.NpcText"] = "NPC������";

            Localization.PlayerTextPlaceHolder = "��ҹ�����";
            Localization.NpcTextPlaceHolder = "NPC������";

            // Choice
            GoNorth.DefaultNodeShapes.Localization.TypeNames["tale.Choice"] = "ѡ��";

            Localization.Choices = {};

            Localization.Choices.ChoiceText = "ѡ���ı�";

            Localization.Choices.AddNewChoice = "���ѡ��";
            Localization.Choices.MoveUpToolTip = "����ѡ��";
            Localization.Choices.MoveDownToolTip = "����ѡ��";
            Localization.Choices.EditConditionToolTip = "�༭����";
            Localization.Choices.AllowMultipleSelectionToolTip = "�������ѡ����ֽ�ֵĹ�����";
            Localization.Choices.DeleteToolTip = "ɾ��ѡ��";

            // Action
            Localization.Actions = {};

            Localization.Actions.ChangeNpcValueLabel = "ѡ�� NPC ֵ";

            Localization.Actions.ChooseItem = "<ѡ�����>";
            Localization.Actions.SpawnItemInPlayerInventoryLabel = "���ɵ�������ұ���";
            Localization.Actions.SpawnItemInNpcInventoryLabel = "���ɵ����� NPC ����";
            Localization.Actions.TransferItemToPlayerInventoryLabel = "�����߸������";
            Localization.Actions.TransferItemToNpcInventoryLabel = "�����߸��� NPC";
            Localization.Actions.ItemQuantity = "���� (Ĭ�� = 1):"

            Localization.Actions.SetNpcStateLabel = "�ı� NPC ״̬";

            Localization.Actions.NpcLearnsSkillLabel = "NPC ѧϰ����";
            Localization.Actions.NpcForgetSkillLabel = "NPC ��������";

            Localization.Actions.ChangeNpcSkillValueLabel = "�ı� NPC ���ܵ�";

            Localization.Actions.PersistDialogStateLabel = "����Ի�״̬";
            Localization.Actions.PersistDialogStateWillContinueOnThisPointNextTalk = "�ӽڵ㵽�´���Һ�NPC�ĶԻ�,�˶Ի����Լ���.";

            Localization.Actions.OpenShopLabel = "���̳�";
            Localization.Actions.WillOpenAShopForTheCurrentNpc = "����͵�ǰNPC��ʼһ������.";

            Localization.Actions.AnimationPlaceholder = "������";
            Localization.Actions.PlayNpcAnimationLabel = "���� NPC ����";
            Localization.Actions.PlayPlayerAnimationLabel = "������Ҷ���";

            // Condition
            Localization.Conditions = {};
            Localization.Conditions.CheckNpcValueLabel = "��� NPC ֵ";
            Localization.Conditions.NpcLabel = "Npc";

            Localization.Conditions.CheckPlayerInventoryLabel = "�����ұ���";
            Localization.Conditions.PlayerInventoryLabel = "��ұ���";
            Localization.Conditions.CheckNpcInventoryLabel = "��� NPC ����";
            Localization.Conditions.NpcInventoryLabel = "NPC ����";
            Localization.Conditions.ChooseItem = "<ѡ�����>";
            Localization.Conditions.OpenItemTooltip = "����ѡ����";
            Localization.Conditions.ItemOperatorHasAtLeast = "�Ƿ�Ϊ���һ��";
            Localization.Conditions.ItemOperatorHasMaximum = "�Ƿ�Ϊ����";
            Localization.Conditions.ItemCount = "����";

            Localization.Conditions.CheckChooseNpcSkillValueLabel = "��� NPC ���ܵ�";
            Localization.Conditions.NpcSkillPrefix = "Npc ";

            Localization.Conditions.CheckNpcLearnedSkillLabel = "Npc �������ü���";
            Localization.Conditions.CheckNpcLearnedSkillPrefixLabel = "NPC ����ʹ�� ";

            Localization.Conditions.CheckNpcNotLearnedSkillLabel = "Npc �޷�ʹ�ü���";
            Localization.Conditions.CheckNpcNotLearnedSkillPrefixLabel = "Npc �޷�ʹ�� ";
        }(Tale.Localization = Tale.Localization || {}));
    }(GoNorth.Tale = GoNorth.Tale || {}));
}(window.GoNorth = window.GoNorth || {}));