const fs = require("fs").promises;
const getTheme = require("./theme");

// Generate your custom light theme
const koderaiLightTheme = getTheme({
  theme: "light",
  name: "koderAI Light",
});

// Write theme
fs.mkdir("./themes", { recursive: true })
  .then(() => 
    fs.writeFile("./themes/koderai-light.json", JSON.stringify(koderaiLightTheme, null, 2))
  )
  .catch(() => process.exit(1))
