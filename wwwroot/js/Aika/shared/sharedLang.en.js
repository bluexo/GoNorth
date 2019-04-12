(function(GoNorth) {
    "use strict";
    (function(Aika) {
        (function(Localization) {

            // Start
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Start"] = "开始";

            // Finish
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.Finish"] = "完成";

            Localization.Finish = {};
            Localization.Finish.FinishName = "名称";
            Localization.Finish.Colors = {
                White: "白色",
                Red: "红色",
                Green: "绿色",
                Blue: "蓝色",
                Yellow: "黄色",
                Purple: "紫色"
            };

            // All Done
            GoNorth.DefaultNodeShapes.Localization.TypeNames["aika.AllDone"] = "已完成";

        }(Aika.Localization = Aika.Localization || {}));
    }(GoNorth.Aika = GoNorth.Aika || {}));
}(window.GoNorth = window.GoNorth || {}));