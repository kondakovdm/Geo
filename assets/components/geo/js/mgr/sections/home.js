Geo.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'geo-panel-home',
            renderTo: 'geo-panel-home-div'
        }]
    });
    Geo.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Geo.page.Home, MODx.Component);
Ext.reg('geo-page-home', Geo.page.Home);