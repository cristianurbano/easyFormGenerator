angular.module("eda.easyFormViewer").run(["$templateCache", function($templateCache) {$templateCache.put("eda.easyFormViewer.Template.html","<div class=easyFormViewer><form ng-submit=vm.onSubmit() name=vm.form><formly-form model=vm.model fields=vm.fields form=vm.form><div class=pull-right><button type=submit class=\"btn btn-primary\">{{vm.submitText}}</button> <button type=button class=\"btn btn-primary\">{{vm.cancelText}}</button></div></formly-form></form></div>");}]);