<?php

require('./config.php');

require_once DOL_DOCUMENT_ROOT.'/societe/class/societe.class.php';
require_once DOL_DOCUMENT_ROOT.'/contact/class/contact.class.php';
require_once DOL_DOCUMENT_ROOT.'/comm/action/class/actioncomm.class.php';
require_once DOL_DOCUMENT_ROOT.'/core/lib/date.lib.php';
require_once DOL_DOCUMENT_ROOT.'/core/lib/agenda.lib.php';

require_once DOL_DOCUMENT_ROOT.'/core/class/html.formactions.class.php';
require_once DOL_DOCUMENT_ROOT.'/resource/class/html.formresource.class.php';

dol_include_once('fullcalendarscheduler/lib/fullcalendarscheduler.lib.php');

$result = restrictedArea($user, 'agenda', 0, '', 'allactions');

$morejs = array(
	'/fullcalendarscheduler/js/moment.min.js'
	,'/fullcalendarscheduler/js/fullcalendar.min.js'
	,'/fullcalendarscheduler/js/scheduler.min.js' // TODO swap for scheduler.min.js
	,'/fullcalendarscheduler/js/fullcalendarscheduler.js'
	,'/fullcalendarscheduler/js/langs/lang-all.js'
);
$morecss = array(
	'/fullcalendarscheduler/css/fullcalendarscheduler.css'
	,'/fullcalendarscheduler/css/fullcalendar.min.css'
	,'/fullcalendarscheduler/css/scheduler.min.css'
);


llxHeader('', $langs->trans("Agenda"), '', '', 0, 0, $morejs, $morecss);
$head = calendars_prepare_head(array());
dol_fiche_head($head, 'perresource', $langs->trans('Agenda'), 0, 'action');

echo '<div id="fullcalendar_scheduler"></div>';

$TRessource = getResourcesAllowed();


/**
 * Instance des variables utiles pour le formulaire de création d'un événement
 */
$formactions=new FormActions($db);
$form=new Form($db);
$formresources = new FormResource($db);

ob_start();
$formactions->select_type_actions(-1, 'type_code', 'systemauto');
$select_type_action .= ob_get_clean();

$input_title_action = '<input type="text" name="label" placeholder="'.$langs->transnoentitiesnoconv('title').'" style="width:300px" />';

// on intègre la notion de fulldayevent ??? $langs->trans("EventOnFullDay")   <input type="checkbox" id="fullday" name="fullday" '.(GETPOST('fullday')?' checked':'').' />
ob_start();
echo '<label>'.$langs->trans("DateActionStart").'</label> ';
$form->select_date(null,'date_start',1,1,1,"action",1,1,0,0,'fulldaystart');
$select_date_start = ob_get_clean();

ob_start();
echo '<label>'.$langs->trans("DateActionEnd").'</label> ';
$form->select_date(null,'date_end',1,1,1,"action",1,1,0,0,'fulldayend');
$select_date_end = ob_get_clean();

$input_note = '<textarea name="note" value="" placeholder="'.$langs->trans('Note').'" rows="3" class="minwidth300"></textarea>';
$options = array(array('method'=>'getContacts', 'url'=>dol_buildpath('/core/ajax/contacts.php',1), 'htmlname'=>'contactid', 'params'=>array('add-customer-contact'=>'disabled')));
$select_company = '<label for="fk_soc">'.$langs->transnoentitiesnoconv('Company').'</label>'.$form->select_company('', 'fk_soc', '', 1, 0, 0, $options, 0, 'minwidth300');

ob_start();
echo '<label for="contactid">'.$langs->transnoentitiesnoconv('Contact').'</label>';
$form->select_contacts(-1, -1, 'contactid', 1, '', '', 0, 'minwidth200'); // contactid car nom non pris en compte par l'ajax en vers.<3.9
$select_contact = ob_get_clean();

$select_user = '<label for="fk_user">'.$langs->transnoentitiesnoconv('User').'</label>'.$form->select_dolusers($user->id, 'fk_user');
$select_resource = '<label for="fk_resource">'.$langs->transnoentitiesnoconv('Resource').'</label> '.$formresources->select_resource_list('','fk_resource','',0,1,0,array(),'',2);
/**/

echo '
<script type="text/javascript">
	fullcalendarscheduler_interface = "'.dol_buildpath('/fullcalendarscheduler/script/interface.php', 1).'";
	fullcalendarscheduler_initialLangCode = "'.(!empty($conf->global->FULLCALENDARSCHEDULER_LOCALE_LANG) ? $conf->global->FULLCALENDARSCHEDULER_LOCALE_LANG : 'fr').'";

	fullcalendar_scheduler_resources_allowed = '.json_encode($TRessource).';
	
	fullcalendar_scheduler_businessHours_week_start = "'.(!empty($conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEK_START) ? $conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEK_START : '08:00').'";
	fullcalendar_scheduler_businessHours_week_end = "'.(!empty($conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEK_END) ? $conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEK_END : '18:00').'";

	fullcalendar_scheduler_businessHours_weekend_start = "'.(!empty($conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEKEND_START) ? $conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEKEND_START : '10:00').'";
	fullcalendar_scheduler_businessHours_weekend_end = "'.(!empty($conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEKEND_END) ? $conf->global->FULLCALENDARSCHEDULER_BUSINESSHOURS_WEEKEND_END : '16:00').'";
	
	fullcalendarscheduler_title_dialog_create_event = "'.$langs->transnoentitiesnoconv('fullcalendarscheduler_title_dialog_create_event').'";
	fullcalendarscheduler_button_dialog_add = "'.$langs->transnoentitiesnoconv('fullcalendarscheduler_button_dialog_add').'";
	fullcalendarscheduler_button_dialog_cancel = "'.$langs->transnoentitiesnoconv('fullcalendarscheduler_button_dialog_cancel').'";
	
	var fullcalendarscheduler_date_format = "'.$langs->trans("FormatDateShortJavaInput").'";
	
	var fullcalendarscheduler_div = $(\'<div id="form_add_event"></div>\');
	fullcalendarscheduler_div	.append("<p>"+'.json_encode($select_type_action).'+"</p>")
								.append("<p>"+'.json_encode($input_title_action).'+"</p>")
								.append("<p>"+'.json_encode($select_date_start).'+"</p>")
								.append("<p>"+'.json_encode($select_date_end).'+"</p>")
								.append("<p>"+'.json_encode($input_note).'+"</p>")
								.append("<p>"+'.json_encode($select_company).'+"</p>")
								.append("<p>"+'.json_encode($select_contact).'+"</p>")
								.append("<p>"+'.json_encode($select_user).'+"</p>")
								.append("<p>"+'.json_encode($select_resource).'+"</p>");
								
</script>';

dol_fiche_end();
llxFooter();

$db->close();