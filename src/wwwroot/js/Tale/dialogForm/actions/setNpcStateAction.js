(function(GoNorth) {
    "use strict";
    (function(Tale) {
        (function(Actions) {

            /// Action Type for changing the npc state
            var actionTypeChangeNpcState = 17;

            /**
             * Change npc state Action
             * @class
             */
            Actions.SetNpcStateAction = function()
            {
                GoNorth.DefaultNodeShapes.Actions.SetObjectStateAction.apply(this);
            };

            Actions.SetNpcStateAction.prototype = jQuery.extend({ }, GoNorth.DefaultNodeShapes.Actions.SetObjectStateAction.prototype);

            /**
             * Builds the action
             * 
             * @returns {object} Action
             */
            Actions.SetNpcStateAction.prototype.buildAction = function() {
                return new Actions.SetNpcStateAction();
            };

            /**
             * Returns the type of the action
             * 
             * @returns {number} Type of the action
             */
            Actions.SetNpcStateAction.prototype.getType = function() {
                return actionTypeChangeNpcState;
            };

            /**
             * Returns the label of the action
             * 
             * @returns {string} Label of the action
             */
            Actions.SetNpcStateAction.prototype.getLabel = function() {
                return Tale.Localization.Actions.SetNpcStateLabel;
            };

            GoNorth.DefaultNodeShapes.Shapes.addAvailableAction(new Actions.SetNpcStateAction());

        }(Tale.Actions = Tale.Actions || {}));
    }(GoNorth.Tale = GoNorth.Tale || {}));
}(window.GoNorth = window.GoNorth || {}));