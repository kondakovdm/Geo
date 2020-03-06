<?php

class GeoCityCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'GeoCity';
    public $classKey = 'GeoCity';
    public $languageTopics = array('geo');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('geo_city_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('name', $this->modx->lexicon('geo_city_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'GeoCityCreateProcessor';