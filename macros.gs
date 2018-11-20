/** @OnlyCurrentDoc */

function PickedUp() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('N3').activate();
  var criteria = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(['Department Will Keep', 'Not yet', 'Scheduled'])
  .build();
  spreadsheet.getActiveSheet().getFilter().setColumnFilterCriteria(14, criteria);
};

function NotPickedUp() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('N3').activate();
  var criteria = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(['Department Will Keep', 'Picked Up', 'Scheduled'])
  .build();
  spreadsheet.getActiveSheet().getFilter().setColumnFilterCriteria(14, criteria);
};

function DeptWillKeep() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('N3').activate();
  var criteria = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(['Picked Up', 'Not yet', 'Scheduled'])
  .build();
  spreadsheet.getActiveSheet().getFilter().setColumnFilterCriteria(14, criteria);
};

function Scheduled() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('N3').activate();
  var criteria = SpreadsheetApp.newFilterCriteria()
  .setHiddenValues(['Department Will Keep', 'Not yet', 'Picked Up'])
  .build();
  spreadsheet.getActiveSheet().getFilter().setColumnFilterCriteria(14, criteria);
};

function SelectAll() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('N3').activate();
  spreadsheet.getActiveSheet().getFilter().removeColumnFilterCriteria(14);
  spreadsheet.getRange('H3').activate();
  spreadsheet.getActiveSheet().getFilter().removeColumnFilterCriteria(8);
  spreadsheet.getRange('R3').activate();
  spreadsheet.getActiveSheet().getFilter().removeColumnFilterCriteria(18);
};

function NotDeployed() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('H3').activate();
  var criteria = SpreadsheetApp.newFilterCriteria()
  //.whenTextContains('deploy')
  .whenTextDoesNotContain('deploy')
  .build();
  spreadsheet.getActiveSheet().getFilter().setColumnFilterCriteria(8, criteria);
};