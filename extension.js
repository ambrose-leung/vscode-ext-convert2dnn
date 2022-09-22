const vscode = require('vscode');
const childProc = require('child_process');

/**
 * @param {vscode.ExtensionContext} context
 */
 async function activate(context) {

	//	console.log("activate called ");

	let disposable = vscode.commands.registerCommand('convert2dnn.convert2DotNetNotebook', 
	async function () {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			let document = editor.document.fileName;
			if(!document.toLowerCase().endsWith(".linq")){
				vscode.window.showErrorMessage('Can\'t convert to .NET Notebook - this is not a .linq file');
				return;
			}
			//console.log(document);

			const pathToExe = context.asAbsolutePath("exes/Convert2dnn.Console.exe");

			const res = childProc.execFileSync(pathToExe, [document]);
			console.log("Convert2dnn status: " + res.toString());

			var notebookPath = document.replace(".linq",".ipynb");

			vscode.workspace.openTextDocument(notebookPath).then(doc => {
				vscode.window.showNotebookDocument(doc);
			})
			.then(undefined, err => {
				//ignore errors
				//console.error("some error", err);
			 });
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
