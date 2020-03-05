<?php
$xpdo_meta_map['GeoRegion']= array (
  'package' => 'geo',
  'version' => '1.1',
  'table' => 'geo_regions',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'name' => '',
    'price' => 0.0,
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
    'price' => 
    array (
      'dbtype' => 'decimal',
      'precision' => '12,2',
      'phptype' => 'float',
      'null' => true,
      'default' => 0.0,
    ),
  ),
  'composites' => 
  array (
    'Cities' => 
    array (
      'class' => 'GeoCity',
      'local' => 'id',
      'foreign' => 'region_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
