<?php

class GeoRegionCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'GeoRegion';
    public $classKey = 'GeoRegion';
    public $languageTopics = array('geo');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('geo_region_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('name', $this->modx->lexicon('geo_region_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'GeoRegionCreateProcessor';