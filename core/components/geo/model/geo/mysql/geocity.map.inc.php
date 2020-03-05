<?php
$xpdo_meta_map['GeoCity']= array (
  'package' => 'geo',
  'version' => '1.1',
  'table' => 'geo_cities',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => '',
    'region_id' => 0,
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'region_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
      'attributes' => 'unsigned',
    ),
  ),
  'aggregates' => 
  array (
    'Region' => 
    array (
      'class' => 'GeoRegion',
      'local' => 'region_id',
      'foreign' => 'id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
