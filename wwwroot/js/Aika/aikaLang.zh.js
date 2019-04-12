(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // Start
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Start"] = "开始";

            // Finish
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Finish"] = "完成";

            Localization.Finish = {};
            Localization.Finish.FinishName = "名字";
            Localization.Finish.Colors = {
                White: "白色",
                Red: "红色",
                Green: "绿色",
                Blue: "蓝色",
                Yellow: "黄色",
                Purple: "紫色"
            };

            // All Done
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.AllDone"] = "完成";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));
(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // Chapter
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Chapter"] = "章节";

            Localization.Chapter = {};
            Localization.Chapter.ChapterName = "章节名";
            Localization.Chapter.ChapterNumber = "章节编号";
            Localization.Chapter.OpenDetailView = "详情视图";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));
(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // ViewModel
            Localization.ViewModel = {};
            Localization.ViewModel.ChooseQuest = "选择关卡";
            Localization.ViewModel.ChooseChapterDetail = "选择详情视图";

            // Quest
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Quest"] = "关卡";

            Localization.QuestNode = {};
            Localization.QuestNode.IsMainQuestTooltip = "主要关卡";

            // Chapter Detail
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.ChapterDetail"] = "详情视图";

            Localization.ChapterDetail = {};
            Localization.ChapterDetail.DetailName = "名字";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));
(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // View Model
            Localization.QuestViewModel = {};
            Localization.QuestViewModel.ChooseQuest = "选择关卡";
            Localization.QuestViewModel.ChooseNpc = "选择NPC";
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

            Localization.Actions.ChangeCurrentQuestValueLabel = "更改当前关卡值";

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