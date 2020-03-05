<?php

/**
 * The home manager controller for Geo.
 *
 */
class GeoHomeManagerController extends modExtraManagerController
{
    /** @var Geo $Geo */
    public $Geo;


    /**
     *
     */
    public function initialize()
    {
        $path = $this->modx->getOption('geo_core_path', null,
                $this->modx->getOption('core_path') . 'components/geo/') . 'model/geo/';
        $this->Geo = $this->modx->getService('geo', 'Geo', $path);
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return array('geo:default');
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('geo');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->Geo->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->Geo->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
        $this->addJavascript($this->Geo->config['jsUrl'] . 'mgr/geo.js');
        $this->addJavascript($this->Geo->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->Geo->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->Geo->config['jsUrl'] . 'mgr/widgets/subjects.js');
        $this->addJavascript($this->Geo->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->Geo->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->Geo->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        Geo.config = ' . json_encode($this->Geo->config) . ';
        Geo.config.connector_url = "' . $this->Geo->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "geo-page-home"});
        });
        </script>
        ');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        return $this->Geo->config['templatesPath'] . 'home.tpl';
    }
}