(function(GoNorth) {
    "use strict";
    (function(Tale) {
        (function(Actions) {

            /// Action Type for forgetting a skill for the npc
            var actionTypeNpcForgetSkill = 21;

            /**
             * Npc forget a skill Action
             * @class
             */
            Actions.NpcForgetSkillAction = function()
            {
                GoNorth.DefaultNodeShapes.Actions.LearnForgetSkillAction.apply(this);
            };

            Actions.NpcForgetSkillAction.prototype = jQuery.extend({ }, GoNorth.DefaultNodeShapes.Actions.LearnForgetSkillAction.prototype);

            /**
             * Builds the action
             * 
             * @returns {object} Action
             */
            Actions.NpcForgetSkillAction.prototype.buildAction = function() {
                return new Actions.NpcForgetSkillAction();
            };

            /**
             * Returns the type of the action
             * 
             * @returns {number} Type of the action
             */
            Actions.NpcForgetSkillAction.prototype.getType = function() {
                return actionTypeNpcForgetSkill;
            };

            /**
             * Returns the label of the action
             * 
             * @returns {string} Label of the action
             */
            Actions.NpcForgetSkillAction.prototype.getLabel = function() {
                return Tale.Localization.Actions.NpcForgetSkillLabel;
            };

            GoNorth.DefaultNodeShapes.Shapes.addAvailableAction(new Actions.NpcForgetSkillAction());

        }(Tale.Actions = Tale.Actions || {}));
    }(GoNorth.Tale = GoNorth.Tale || {}));
}(window.GoNorth = window.GoNorth || {}));