/**
 * @author a.demeshko
 * created on 12/22/15
 */
(function () {
  'use strict';

  angular.module('AccessControlSystem.main.pages.ui.slider', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('app.main.pages.ui.slider', {
          url: '/slider',
          templateUrl: 'app/main/pages/ui/slider/slider.html',
          title: 'Sliders',
          sidebarMeta: {
            order: 1000,
          },
        });
  }

})();
