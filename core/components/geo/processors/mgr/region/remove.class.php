<?php

class GeoRegionRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'GeoRegion';
    public $classKey = 'GeoRegion';
    public $languageTopics = array('geo');
    //public $permission = 'remove';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('geo_region_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var GeoRegion $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('geo_region_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'GeoRegionRemoveProcessor';