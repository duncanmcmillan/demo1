var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var Demo1AppComponent = (function () {
    function Demo1AppComponent() {
        this.title = 'demo1 works!';
        this.test_var = 3;
    }
    Demo1AppComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'demo1-app',
            templateUrl: 'demo1.component.html',
            styleUrls: ['demo1.component.css']
        })
    ], Demo1AppComponent);
    return Demo1AppComponent;
})();
exports.Demo1AppComponent = Demo1AppComponent;
//# sourceMappingURL=demo1.component.js.map