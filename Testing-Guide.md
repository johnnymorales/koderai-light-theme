# koderAI Light Theme - Testing Guide

## Prerequisites
- **Visual Studio Code** (latest version recommended)
- **Node.js** (for extension development and packaging)
- **Git** (for version control)

## Quick Testing Method

1. **Open the theme project folder** in VS Code (`File > Open Folder`)
2. **Launch debug mode** by pressing `F5` (or `Run > Start Debugging`)
   - This opens a new "[Extension Development Host]" window
3. **Activate the theme** in the new window:
   - Press `Ctrl+K` then `Ctrl+T`
   - Select "koderAI Light" from the theme picker
4. **Test the theme** across different file types and UI interactions

## Visual Elements to Verify

**Brand Colors Applied:**
- **Activity Bar**: Purple (#5F01D1) for active icons, gray (#b2b2b2) for inactive
- **Sidebar**: Light gray background (#F6F6F6)
- **Tabs**: Purple top border (#5F01D1) on active tabs
- **Buttons**: Purple background (#5F01D1) with lime text (#DCFD00)
- **Status Bar Items**: Purple background with lime text for prominent items
- **Panel Tabs**: Purple underline on active panels

**Test Files:**
- Open `.js`, `.json`, `.md` files to check syntax highlighting
- Verify text readability and color contrast

## Making Live Changes

1. **Edit** `themes/koderai-light.json` in the main VS Code window
2. **Save** the file (`Ctrl+S`)
3. **Reload** the Extension Development Host window (`Ctrl+R`)
4. Changes appear immediately without restarting
