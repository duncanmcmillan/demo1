define(["require", "exports", '@angular/core/testing', '../app/demo1.component'], function (require, exports, testing_1, demo1_component_1) {
    testing_1.beforeEachProviders(function () { return [demo1_component_1.Demo1AppComponent]; });
    testing_1.describe('App: Demo1', function () {
        testing_1.it('should create the app', testing_1.inject([demo1_component_1.Demo1AppComponent], function (app) {
            testing_1.expect(app).toBeTruthy();
        }));
        testing_1.it('should have as title \'demo1 works!\'', testing_1.inject([demo1_component_1.Demo1AppComponent], function (app) {
            testing_1.expect(app.title).toEqual('demo1 works!');
        }));
    });
});
//# sourceMappingURL=demo1.component.spec.js.map