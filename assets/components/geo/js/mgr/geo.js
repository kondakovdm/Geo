var Geo = function (config) {
    config = config || {};
    Geo.superclass.constructor.call(this, config);
};
Ext.extend(Geo, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('geo', Geo);

Geo = new Geo();