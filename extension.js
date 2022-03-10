const vscode = require('vscode');

function activate(context) {


	let disposable = vscode.commands.registerCommand('marwen-labidi-commit-messages.message', function () {


		const options = [{
				label: '🎉 This is where it all begins... 🎉',
				description: '',
				command: 'marwen-labidi-commit-messages.begins'
			},
			{
				label: '📝 Writing markdown file : i wrote ....',
				description: '',
				command: 'marwen-labidi-commit-messages.Writing'
			},
			{
				label: '🙈 Adding or updating a .gitignore file',
				description: '',
				command: 'marwen-labidi-commit-messages.gitignore'
			},
			{
				label: '🚧 Work in progress : im working on the ....',
				description: '',
				command: 'marwen-labidi-commit-messages.Work'
			},
			{
				label: '➕ Adding  : i added .... ',
				description: '',
				command: 'marwen-labidi-commit-messages.Adding'
			},
			{
				label: '🚚 Moving or renaming files',
				description: '',
				command: 'marwen-labidi-commit-messages.Moving'
			},
			{
				label: '🔥 Removing : i removed ....',
				description: '',
				command: 'marwen-labidi-commit-messages.Removing'
			},
			{
				label: '💄 Updating style files : i updated the ....',
				description: '',
				command: 'marwen-labidi-commit-messages.Updating'
			},
			{
				label: '📱 Working on responsive design',
				description: '',
				command: 'marwen-labidi-commit-messages.responsive'
			},
			{
				label: '✨ Introducing a new feature : start implementing the ... feature ... ',
				description: '',
				command: 'marwen-labidi-commit-messages.Introducing'
			},
			{
				label: '⚗  Experiementing with new things : i experimented with ....',
				description: '',
				command: 'marwen-labidi-commit-messages.Experiementing'
			},
			{
				label: '🐛 Fixing a bug : i fix the .... bug ... in',
				description: '',
				command: 'marwen-labidi-commit-messages.Fixing'
			},
			{
				label: '♻  Refactoring code : i refactor the .... code ...',
				description: '',
				command: 'marwen-labidi-commit-messages.Refactoring'
			},
			{
				label: '🔧 Changing configuration files: i changed the .... config file ...',
				description: '',
				command: 'marwen-labidi-commit-messages.configuration'
			},
			{
				label: '🔀 Merging branches : i merged the .... branch ... into',
				description: '',
				command: 'marwen-labidi-commit-messages.Merging'
			},
			{
				label: '✅ Adding tests : i added .... tests ...',
				description: '',
				command: 'marwen-labidi-commit-messages.tests'
			},
			{
				label: '👥 Adding contributors : i added .... to the project',
				description: '',
				command: 'marwen-labidi-commit-messages.contributors'
			},
			{
				label: '🎨 Improving_structure_of_code',
				description: '',
				command: 'marwen-labidi-commit-messages.structure'
			},
			{
				label: '⚡  Improving_performance',
				description: '',
				command: 'marwen-labidi-commit-messages.performance'
			},
			{
				label: '♿  Improving accessibility',
				description: '',
				command: 'marwen-labidi-commit-messages.accessibility'
			},
			{
				label: '🔍 Improving SEO',
				description: '',
				command: 'marwen-labidi-commit-messages.SEO'
			},
			{
				label: '🏷 Adding or updating types (Flow, Typescript',
				description: '',
				command: 'marwen-labidi-commit-messages.types'
			},
			{
				label: '🚨 Removing linter warnings',
				description: '',
				command: 'marwen-labidi-commit-messages.linter'
			},
			{
				label: '⬇  Downgrading dependencies',
				description: '',
				command: 'marwen-labidi-commit-messages.Downgrading'
			},
			{
				label: '⬆  Upgrading dependencies',
				description: '',
				command: 'marwen-labidi-commit-messages.Upgrading'
			},
			{
				label: '👷‍ Add CI build system',
				description: '',
				command: 'marwen-labidi-commit-messages.CI'
			},
			{
				label: '🐳 Work about Docker',
				description: '',
				command: 'marwen-labidi-commit-messages.Docker'
			},
			{
				label: '☸  Work about Kubernetes',
				description: '',
				command: 'marwen-labidi-commit-messages.Kubernetes'
			}
		];
		vscode.window.showQuickPick(options).then(option => {
			if (!option || !option.command || option.command.length === 0) {
				return;
			}
			vscode.commands.executeCommand(option.command);
		});
	});


	let begins = vscode.commands.registerCommand('marwen-labidi-commit-messages.begins', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🎉 This is where it all begins... 🎉"', false)
	});
	let Writing = vscode.commands.registerCommand('marwen-labidi-commit-messages.Writing', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"📝 Writing markdown file : i wrote ...."', false)
	});
	let gitignore = vscode.commands.registerCommand('marwen-labidi-commit-messages.gitignore', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🙈 Adding or updating a .gitignore file"', false)
	});
	let Work = vscode.commands.registerCommand('marwen-labidi-commit-messages.Work', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🚧 Work in progress : im working on the ...."', false)
	});
	let Adding = vscode.commands.registerCommand('marwen-labidi-commit-messages.Adding', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"➕ Adding  : i added .... "', false)
	});
	let Moving = vscode.commands.registerCommand('marwen-labidi-commit-messages.Moving', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🚚 Moving or renaming files"', false)
	});
	let Removing = vscode.commands.registerCommand('marwen-labidi-commit-messages.Removing', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🔥 Removing : i removed ...."', false)
	});
	let Updating = vscode.commands.registerCommand('marwen-labidi-commit-messages.Updating', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"💄 Updating style files : i updated the ...."', false)
	});
	let responsive = vscode.commands.registerCommand('marwen-labidi-commit-messages.responsive', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"📱 Working on responsive design"', false)
	});
	let Introducing = vscode.commands.registerCommand('marwen-labidi-commit-messages.Introducing', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"✨ Introducing a new feature : start implementing the ... feature ... "', false)
	});
	let Experiementing = vscode.commands.registerCommand('marwen-labidi-commit-messages.Experiementing', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"⚗  Experiementing with new things : i experimented with ...."', false)
	});
	let Fixing = vscode.commands.registerCommand('marwen-labidi-commit-messages.Fixing', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🐛 Fixing a bug : i fix the .... bug ... in"', false)
	});

	let Refactoring = vscode.commands.registerCommand('marwen-labidi-commit-messages.Refactoring', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"♻  Refactoring code : i refactor the .... code ..."', false)
	});

	let configuration = vscode.commands.registerCommand('marwen-labidi-commit-messages.configuration', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🔧 Changing configuration files: i changed the .... config file ..."', false)
	});
	let Merging = vscode.commands.registerCommand('marwen-labidi-commit-messages.Merging', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🔀 Merging branches : i merged the .... branch ... into"', false)
	});
	let tests = vscode.commands.registerCommand('marwen-labidi-commit-messages.tests', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"✅ Adding tests : i added .... tests ..."', false)
	});
	let contributors = vscode.commands.registerCommand('marwen-labidi-commit-messages.contributors', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"👥 Adding contributors : i added .... to the project"', false)
	});
	let structure = vscode.commands.registerCommand('marwen-labidi-commit-messages.structure', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🎨 Improving_structure_of_code"', false)
	});
	let performance = vscode.commands.registerCommand('marwen-labidi-commit-messages.performance', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"⚡  Improving_performance"', false)
	});
	let accessibility = vscode.commands.registerCommand('marwen-labidi-commit-messages.accessibility', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"♿  Improving accessibility"', false)
	});
	let SEO = vscode.commands.registerCommand('marwen-labidi-commit-messages.SEO', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🔍 Improving SEO"', false)
	});
	let types = vscode.commands.registerCommand('marwen-labidi-commit-messages.types', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🏷 Adding or updating types (Flow, Typescript"', false)
	});
	let linter = vscode.commands.registerCommand('marwen-labidi-commit-messages.linter', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🚨 Removing linter warnings"', false)
	});
	let Downgrading = vscode.commands.registerCommand('marwen-labidi-commit-messages.Downgrading', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"⬇  Downgrading dependencies"', false)
	});
	let Upgrading = vscode.commands.registerCommand('marwen-labidi-commit-messages.Upgrading', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"⬆  Upgrading dependencies"', false)
	});
	let CI = vscode.commands.registerCommand('marwen-labidi-commit-messages.CI', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"👷‍ Add CI build system"', false)
	});

	let Docker = vscode.commands.registerCommand('marwen-labidi-commit-messages.Docker', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"🐳 Work about Docker"', false)
	});
	let Kubernetes = vscode.commands.registerCommand('marwen-labidi-commit-messages.Kubernetes', function () {
		const terminal = vscode.window.activeTerminal
		terminal.show()
		terminal.sendText('"☸  Work about Kubernetes"', false)
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(begins);
	context.subscriptions.push(Writing);
	context.subscriptions.push(gitignore);
	context.subscriptions.push(Work);
	context.subscriptions.push(Adding);
	context.subscriptions.push(Moving);
	context.subscriptions.push(Removing);
	context.subscriptions.push(Updating);
	context.subscriptions.push(responsive);
	context.subscriptions.push(Introducing);
	context.subscriptions.push(Experiementing);
	context.subscriptions.push(Fixing);
	context.subscriptions.push(Refactoring);
	context.subscriptions.push(configuration);
	context.subscriptions.push(Merging);
	context.subscriptions.push(tests);
	context.subscriptions.push(contributors);
	context.subscriptions.push(structure);
	context.subscriptions.push(performance);
	context.subscriptions.push(accessibility);
	context.subscriptions.push(SEO);
	context.subscriptions.push(types);
	context.subscriptions.push(linter);
	context.subscriptions.push(Downgrading);
	context.subscriptions.push(Upgrading);
	context.subscriptions.push(CI);
	context.subscriptions.push(Docker);
	context.subscriptions.push(Kubernetes);



}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}