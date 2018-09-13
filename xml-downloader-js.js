var xmltext = '<SomeTag><Child></Child></SomeTag>';
var a = document.createElement('a');
var filename = 'file.xml';
a.setAttribute('href', window.URL.createObjectURL(new Blob([xmltext.replace(new RegExp('"', 'g'), '')], {type: 'text/xml'})));
a.setAttribute('download', filename);

a.click();