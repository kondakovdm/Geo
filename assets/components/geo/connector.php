<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var Geo $Geo */
$Geo = $modx->getService('geo', 'Geo', $modx->getOption('geo_core_path', null,
        $modx->getOption('core_path') . 'components/geo/') . 'model/geo/'
);
$modx->lexicon->load('geo:default');

// handle request
$corePath = $modx->getOption('geo_core_path', null, $modx->getOption('core_path') . 'components/geo/');
$path = $modx->getOption('processorsPath', $Geo->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));