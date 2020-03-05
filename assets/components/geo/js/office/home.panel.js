Geo.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'geo-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('geo_items'),
                layout: 'anchor',
                items: [{
                    html: _('geo_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'geo-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    Geo.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Geo.panel.Home, MODx.Panel);
Ext.reg('geo-panel-home', Geo.panel.Home);
