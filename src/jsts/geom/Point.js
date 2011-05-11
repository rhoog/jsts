/* Copyright (c) 2011 by The Authors.
 * Published under the LGPL 2.1 license.
 * See /license-notice.txt for the full text of the license notice.
 * See /license.txt for the full text of the license.
 */


/**
 * @requires jsts/geom/Coordinate.js
 */



/**
 * @constructor
 * @augments jsts.geom.Coordinate
 */
jsts.geom.Point = function() {
};


/**
 * @return {String} String representation of Point type.
 */
jsts.geom.Point.prototype.getGeometryType = function() {
  return 'Point';
};

jsts.geom.Point = OpenLayers.Class(jsts.geom.Point, jsts.geom.Coordinate);
