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
            Localization.QuestNode.IsMainQuestTooltip = "主线关卡";

            // Chapter Detail
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.ChapterDetail"] = "细节视图";

            Localization.ChapterDetail = {};
            Localization.ChapterDetail.DetailName = "名称";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));