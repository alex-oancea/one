/* -------------------------------------------------------------------------- */
/* Copyright 2002-2019, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */
define(function(require) {
  /*
    DEPENDENCIES
   */
  require('datatables.net');
  require('datatables.foundation');
  var Locale = require('utils/locale');
  var CPUBars = require('../utils/cpu-bars');
  var MemoryBars = require('../utils/memory-bars');
  /*
    TEMPLATES
   */
  var TemplatePool = require('hbs!./pool/html');
  /*
    CONSTANTS
   */
  var PANEL_ID = require('./pool/panelId');
  var RESOURCE = "Host"
  /*
    CONSTRUCTOR
   */
  function Panel(info) {
    this.title = Locale.tr("ESX");
    this.icon = "fa-hdd";
    this.element = info[RESOURCE.toUpperCase()];
    // Do not create an instance of this panel if no vcenter hypervisor
    // porque el hypervisor proviene de la monitorizacion de por si no esta en el template
    if(this.element && this.element.TEMPLATE && this.element.TEMPLATE.HYPERVISOR){
      if(this.element.TEMPLATE.HYPERVISOR != "vcenter"){
        throw "Panel not available for this element";
      }
    }else{
      throw "Panel not available for this element";
    }
    return this;
  };
  Panel.PANEL_ID = PANEL_ID;
  Panel.prototype.html = _html;
  Panel.prototype.setup = _setup;
  return Panel;
  /*
    FUNCTION DEFINITIONS
   */
  function _html() {
    return TemplatePool();
  }
  function _setup(context) {
  }
})