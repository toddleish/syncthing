angular.module('syncthing.core')
    .directive('notification', function () {
        return {
            restrict: 'E',
            scope: true,
            transclude: true,
            template: '<div class="row" ng-if="visible()"><div class="col-md-12" ng-transclude></div></div>',
            link: function (scope, elm, attrs) {
                scope.visible = function () {
                    return scope.config.options.ackedNotifications.indexOf(attrs.id) < 0;
                }
                scope.dismiss = function () {
                    scope.config.options.ackedNotifications.push(attrs.id);
                    scope.saveConfig();
                }
            }
        };
});
