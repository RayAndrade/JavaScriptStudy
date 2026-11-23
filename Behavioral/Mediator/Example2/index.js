const FontDialogDirector = require("./FontDialogDirector");

const aFontDialogDirector = new FontDialogDirector();

console.log("First dialog");
aFontDialogDirector.ShowDialog();
aFontDialogDirector._fontList.Select("Georgia");
aFontDialogDirector._ok.HandleMouse();

console.log("\nSecond dialog");
aFontDialogDirector.ShowDialog();
aFontDialogDirector._fontList.Select("Courier New");
aFontDialogDirector._cancel.HandleMouse();