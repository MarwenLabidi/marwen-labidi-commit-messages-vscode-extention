const vscode = require('vscode');

function activate(context) {

	console.log('Congratulations, your extension "marwen-labidi-commit-messages" is now active!');

	let disposable = vscode.commands.registerCommand('marwen-labidi-commit-messages.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from Marwen Labidi commit messages!');



		const options = [{
				label: 'marwen',
				description: '',
				command: 'marwen-labidi-commit-messages.marwen'
			},
			{
				label: 'Run Red Script in GUI Console',
				description: '',
				command: 'red.interpretGUI'
			},
			{
				label: 'Compile Red Script',
				description: '',
				command: 'red.compile'
			},
			{
				label: 'Compile Red Script in GUI mode',
				description: '',
				command: 'red.compileGUI'
			},
			{
				label: 'Compile Red/System Script',
				description: '',
				command: 'reds.compile'
			},
			{
				label: 'Compile Red/System Script in GUI mode',
				description: '',
				command: 'reds.compileGUI'
			}
		];
		vscode.window.showQuickPick(options).then(option => {
			if (!option || !option.command || option.command.length === 0) {
				return;
			}
			vscode.commands.executeCommand(option.command);
		});



		// const terminal = vscode.window.activeTerminal
		// terminal.show()
		// terminal.sendText("hello marwen")
	});


	let marwen = vscode.commands.registerCommand('marwen-labidi-commit-messages.marwen', function () {
//FIXME figure out a solution for not executiog the commande in terminal
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText("git status")
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(marwen);


}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}