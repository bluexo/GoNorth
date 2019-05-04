(function(GoNorth) {
    "use strict";
    (function(ImplementationStatus) {
        (function(Overview) {

            /**
             * Implementation for implementation status skill list
             * 
             * @param {ko.observable} loadingObs Observable for loading display
             * @param {ko.observable} errorOccuredObs Observable if an error occurs
             * @param {GoNorth.ImplementationStatus.CompareDialog.ViewModel} compareDialog Compare Dialog
             * @class
             */
            Overview.ImplementationStatusSkillList = function(loadingObs, errorOccuredObs, compareDialog)
            {
                Overview.ImplementationStatusObjectList.apply(this, [ loadingObs, errorOccuredObs, compareDialog ]);
            };

            Overview.ImplementationStatusSkillList.prototype = jQuery.extend({ }, Overview.ImplementationStatusObjectList.prototype)

            /**
             * Loads the objects
             * 
             * @returns {jQuery.Deferred} Deferred for the loading process
             */
            Overview.ImplementationStatusSkillList.prototype.loadObjects = function() {
                var def = new jQuery.Deferred();

                jQuery.ajax({ 
                    url: "/api/EvneApi/GetNotImplementedSkills?&start=" + (this.currentPage() * this.pageSize) + "&pageSize=" + this.pageSize, 
                    type: "GET"
                }).done(function(data) {
                   def.resolve({
                      objects: data.flexFieldObjects,
                      hasMore: data.hasMore
                   });
                }).fail(function() {
                    def.reject();
                });

                return def.promise();
            };

            /**
             * Opens the compare dialog for an object
             * 
             * @param {object} obj Object to check
             * @return {jQuery.Deferred} Deferred that will get resolved after the object was marked as implemented
             */
            Overview.ImplementationStatusSkillList.prototype.openCompareDialog = function(obj) {
                return this.compareDialog.openSkillCompare(obj.id, obj.name);
            };

            /**
             * Builds the url for an object
             * 
             * @param {object} obj Object to open
             * @returns {string}  Url of the object
             */
            Overview.ImplementationStatusSkillList.prototype.buildObjectUrl = function(obj) {
                return "/Evne/Skill?id=" + obj.id;
            };

        }(ImplementationStatus.Overview = ImplementationStatus.Overview || {}));
    }(GoNorth.ImplementationStatus = GoNorth.ImplementationStatus || {}));
}(window.GoNorth = window.GoNorth || {}));