// we wanna read arguments and understand what the client has typed
const { showHelp, showVersion } = require("./message");
const args = process.argv.slice(2);
// wether the client has entered --help
if (args.includes("--help")) {
  showHelp();
}
// includes checks if client text has -v, version is a must
if (args.includes("-v")) {
  showVersion();
}

// berLin -> Berlin
// always make you application ckear for the people - --help how it works, to get infos about it.
