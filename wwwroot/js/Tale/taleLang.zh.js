(function (GoNorth) {
    "use strict";
    (function (Tale) {
        (function (Localization) {

            Localization.ViewModel = {};
            Localization.ViewModel.ChooseItem = "选择道具";
            Localization.ViewModel.ChooseQuest = "选择关卡";
            Localization.ViewModel.ChooseNpc = "选择NPC";
            Localization.ViewModel.ChooseSkill = "选择技能";

            // Text Lines
            GoNorth.DefaultNodeShapes.Localization.TypeNames["tale.PlayerText"] = "玩家故事线";
            GoNorth.DefaultNodeShapes.Localization.TypeNames["tale.NpcText"] = "NPC故事线";

            Localization.PlayerTextPlaceHolder = "玩家故事线";
            Localization.NpcTextPlaceHolder = "NPC故事线";

            // Choice
            GoNorth.DefaultNodeShapes.Localization.TypeNames["tale.Choice"] = "选择";

            Localization.Choices = {};

            Localization.Choices.ChoiceText = "选择文本";

            Localization.Choices.AddNewChoice = "添加选择";
            Localization.Choices.MoveUpToolTip = "上移选择";
            Localization.Choices.MoveDownToolTip = "下移选择";
            Localization.Choices.EditConditionToolTip = "编辑条件";
            Localization.Choices.AllowMultipleSelectionToolTip = "允许玩家选择多种结局的故事线";
            Localization.Choices.DeleteToolTip = "删除选择";

            // Action
            Localization.Actions = {};

            Localization.Actions.ChangeNpcValueLabel = "选择 NPC 值";

            Localization.Actions.ChooseItem = "<选择道具>";
            Localization.Actions.SpawnItemInPlayerInventoryLabel = "生成道具在玩家背包";
            Localization.Actions.SpawnItemInNpcInventoryLabel = "生成道具在 NPC 背包";
            Localization.Actions.TransferItemToPlayerInventoryLabel = "将道具给予玩家";
            Localization.Actions.TransferItemToNpcInventoryLabel = "将道具给予 NPC";
            Localization.Actions.ItemQuantity = "数量 (默认 = 1):"

            Localization.Actions.SetNpcStateLabel = "改变 NPC 状态";

            Localization.Actions.NpcLearnsSkillLabel = "NPC 学习技能";
            Localization.Actions.NpcForgetSkillLabel = "NPC 遗忘技能";

            Localization.Actions.ChangeNpcSkillValueLabel = "改变 NPC 技能点";

            Localization.Actions.PersistDialogStateLabel = "保存对话状态";
            Localization.Actions.PersistDialogStateWillContinueOnThisPointNextTalk = "从节点到下次玩家和NPC的对话,此对话可以继续.";

            Localization.Actions.OpenShopLabel = "打开商城";
            Localization.Actions.WillOpenAShopForTheCurrentNpc = "将会和当前NPC开始一场交易.";

            Localization.Actions.AnimationPlaceholder = "动画名";
            Localization.Actions.PlayNpcAnimationLabel = "播放 NPC 动画";
            Localization.Actions.PlayPlayerAnimationLabel = "播放玩家动画";

            // Condition
            Localization.Conditions = {};
            Localization.Conditions.CheckNpcValueLabel = "检查 NPC 值";
            Localization.Conditions.NpcLabel = "Npc";

            Localization.Conditions.CheckPlayerInventoryLabel = "检查玩家背包";
            Localization.Conditions.PlayerInventoryLabel = "玩家背包";
            Localization.Conditions.CheckNpcInventoryLabel = "检查 NPC 背包";
            Localization.Conditions.NpcInventoryLabel = "NPC 背包";
            Localization.Conditions.ChooseItem = "<选择道具>";
            Localization.Conditions.OpenItemTooltip = "打开已选道具";
            Localization.Conditions.ItemOperatorHasAtLeast = "是否为最后一个";
            Localization.Conditions.ItemOperatorHasMaximum = "是否为最大的";
            Localization.Conditions.ItemCount = "数量";

            Localization.Conditions.CheckChooseNpcSkillValueLabel = "检查 NPC 技能点";
            Localization.Conditions.NpcSkillPrefix = "Npc ";

            Localization.Conditions.CheckNpcLearnedSkillLabel = "Npc 可以收用技能";
            Localization.Conditions.CheckNpcLearnedSkillPrefixLabel = "NPC 可以使用 ";

            Localization.Conditions.CheckNpcNotLearnedSkillLabel = "Npc 无法使用技能";
            Localization.Conditions.CheckNpcNotLearnedSkillPrefixLabel = "Npc 无法使用 ";

        }(Tale.Localization = Tale.Localization || {}));
    }(GoNorth.Tale = GoNorth.Tale || {}));
}(window.GoNorth = window.GoNorth || {}));