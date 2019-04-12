(function(GoNorth) {
    "use strict";
    (function(DefaultNodeShapes) {
        (function(Localization) {

            // Node Display
            Localization.NodeDisplay = {};

            Localization.NodeDisplay.Position = "λ��:";
            Localization.NodeDisplay.Zoom = "����:";    
            Localization.NodeDisplay.ToogleMiniMap = "������￪����С��ͼ";        

            // Shared Messages
            Localization.DeleteNode = "ɾ���ڵ�";
            Localization.ErrorOccured = "����һ������";

            // Text Node
            Localization.TypeNames = {
                "default.Text": "Text"
            };

            Localization.TextPlaceHolder = "�ı�";

            // Quest States
            Localization.QuestStates = {};
            Localization.QuestStates.NotStarted = "δ��ʼ";
            Localization.QuestStates.InProgress = "���ڽ���";
            Localization.QuestStates.Success = "�ɹ�";
            Localization.QuestStates.Failed = "ʧ��";

            // Actions
            GoNorth.DefaultNodeShapes.Localization.TypeNames["default.Action"] = "����";

            // Conditions
            Localization.TypeNames["default.Condition"] = "����";

            Localization.Conditions = {};

            Localization.Conditions.MissingInformations = "<��ʧ��Ϣ>"

            Localization.Conditions.AddCondition = "�������";

            Localization.Conditions.AndOperator = "��";
            Localization.Conditions.AndOperatorShort = "&&";
            Localization.Conditions.OrOperator = "��";
            Localization.Conditions.OrOperatorShort = "||";

            Localization.Conditions.EditCondition = "<�༭����>";
            Localization.Conditions.LoadingConditionText = "��������...";
            Localization.Conditions.ErrorLoadingConditionText = "���ش���";
            Localization.Conditions.Else = "����";

            Localization.Conditions.MoveConditionUp = "��������";
            Localization.Conditions.MoveConditionDown = "��������";
            Localization.Conditions.DeleteCondition = "ɾ������";

            Localization.Conditions.NumberField = "�����ֶ�";
            Localization.Conditions.TextField = "�ı��ֶ�";
            Localization.Conditions.FieldWasDeleted = "�ֶ��ѱ�ɾ��.";

            Localization.Conditions.CheckPlayerValueLabel = "������ֵ";
            Localization.Conditions.PlayerLabel = "���";

            Localization.Conditions.ChooseQuestLabel = "<ѡ��ؿ�>";

            Localization.Conditions.CheckChooseQuestValueLabel = "����ѡ�Ĺؿ�ֵ";

            Localization.Conditions.StateLabel = "״̬";

            Localization.Conditions.CheckQuestStateLabel = "���ؿ�״̬";

            Localization.Conditions.ChooseNpcLabel = "<ѡ�� NPC>";

            Localization.Conditions.CheckNpcAliveStateLabel = "���NPC���״̬";
            Localization.Conditions.NpcAliveStateAlive = "���";
            Localization.Conditions.NpcAliveStateDead = "����";

            Localization.Conditions.CheckGameTimeLabel = "�����Ϸʱ��";
            Localization.Conditions.GameTimeOperatorBefore = "֮ǰ";
            Localization.Conditions.GameTimeOperatorAfter = "֮��";
            Localization.Conditions.GameTime = "��Ϸʱ��";
            
            Localization.Conditions.ChooseSkillLabel = "<ѡ����>";

            Localization.Conditions.CheckChoosePlayerSkillValueLabel = "�����Ҽ��ܵ�";
            Localization.Conditions.PlayerSkillPrefix = "Player ";

            Localization.Conditions.CheckPlayerLearnedSkillLabel = "��ҿ���ʹ�ü���";
            Localization.Conditions.CheckPlayerLearnedSkillPrefixLabel = "��ҿ�ʹ�� ";

            Localization.Conditions.CheckPlayerNotLearnedSkillLabel = "��Ҳ���ʹ�ü���";
            Localization.Conditions.CheckPlayerNotLearnedSkillPrefixLabel = "��Ҳ���ʹ�� ";

            // Actions
            Localization.Actions = {};

            Localization.Actions.NumberField = "�����ֶ�";
            Localization.Actions.TextField = "�ı��ֶ�";

            Localization.Actions.ChangePlayerValueLabel = "�ı����ֵ";
            Localization.Actions.ChangeQuestValueLabel = "�ı��ѡ�ؿ���ֵ";
            Localization.Actions.ChooseQuestLabel = "&lt;ѡ��ؿ�&gt;";
            
            Localization.Actions.QuestState = "״̬";
            
            Localization.Actions.SetQuestStateLabel = "�ı�ؿ�״̬";
            Localization.Actions.OpenQuestTooltip = "����ѡ�ؿ�";

            Localization.Actions.AddQuestTextLabel = "��ӹؿ��ı�";
            Localization.Actions.QuestText = "�ı�";

            Localization.Actions.WaitLabel = "�ȴ�";
            Localization.Actions.WaitTypeRealTime = "ʵʱ";
            Localization.Actions.WaitTypeGameTime = "��Ϸʱ��";
            Localization.Actions.WaitUnitMilliseconds = "����";
            Localization.Actions.WaitUnitSeconds = "��";
            Localization.Actions.WaitUnitMinutes = "��";
            Localization.Actions.WaitUnitHours = "Сʱ";
            Localization.Actions.WaitUnitDays = "��";

            Localization.Actions.StatePlaceholder = "״̬";

            Localization.Actions.SetPlayerStateLabel = "�ı����״̬";

            Localization.Actions.ChooseSkillLabel = "&lt;ѡ����&gt;";
            Localization.Actions.OpenSkillTooltip = "����ѡ����";

            Localization.Actions.PlayerLearnSkillLabel = "���ѧϰ����";
            Localization.Actions.PlayerForgetSkillLabel = "�����������";

            Localization.Actions.ChangePlayerSkillValueLabel = "�ı���Ҽ��ܵ�";

        }(DefaultNodeShapes.Localization = DefaultNodeShapes.Localization || {}));
    }(GoNorth.DefaultNodeShapes = GoNorth.DefaultNodeShapes || {}));
}(window.GoNorth = window.GoNorth || {}));