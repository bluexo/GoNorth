(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // ViewModel
            Localization.ViewModel = {};
            Localization.ViewModel.ChooseQuest = "ѡ��ؿ�";
            Localization.ViewModel.ChooseChapterDetail = "ѡ��������ͼ";

            // Quest
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Quest"] = "�ؿ�";

            Localization.QuestNode = {};
            Localization.QuestNode.IsMainQuestTooltip = "���߹ؿ�";

            // Chapter Detail
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.ChapterDetail"] = "ϸ����ͼ";

            Localization.ChapterDetail = {};
            Localization.ChapterDetail.DetailName = "����";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));