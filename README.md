# Convert To .NET Notebook

Open a .linq file (LINQPad script) in VS Code, right click anywhere in the editor window and select the 'Convert to .NET Interactive Notebook'
- Context menu item for conversion only appears for .linq files.
- This extension runs entirely offline, code cells importing nuget packages may require internet connection

## Video

![Open .linq file, Right click editor, Convert](ExampleUsage.gif)

## Requirements

- The vs code extension : .NET Interactive Notebooks
- Conversion binaries require .NET 6

## Extension Settings

None

## Known Issues

- You have to wait for VS Code to load the .NET Interactive engine before you click play on the first cell
- Restart VS Code if the Cells are not running properly

## Release Notes

### 1.0.0

Initial release


---

## For more information

* [Binaries for .linq to .ipynb conversion](https://github.com/ambrose-leung/linqpad-interactive)

**Enjoy!**
