(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // Start
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Start"] = "��ʼ";

            // Finish
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Finish"] = "���";

            Localization.Finish = {};
            Localization.Finish.FinishName = "����";
            Localization.Finish.Colors = {
                White: "��ɫ",
                Red: "��ɫ",
                Green: "��ɫ",
                Blue: "��ɫ",
                Yellow: "��ɫ",
                Purple: "��ɫ"
            };

            // All Done
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.AllDone"] = "�����";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));