const pictureAdded = () => {
  const selectFile = document.querySelector("label[for='AddPicture']");
  selectFile.style = "display: none";
  const upload = document.querySelector("#upload");
  upload.style = "display: inline";
  const cancel = document.querySelector("#cancel");
  cancel.style = "display: inline";
};
const cancePhotoUpload = () => {
  const selectFile = document.querySelector("label[for='AddPicture']");
  selectFile.style = "display: inline";
  const upload = document.querySelector("#upload");
  upload.style = "display: none";
  const cancel = document.querySelector("#cancel");
  cancel.style = "display: none";
};
let suportedLanguage = [
  "Markup",
  "HTML",
  "XML",
  "SVG",
  "MathML",
  "SSML",
  "Atom",
  "RSS",
  "CSS",
  "C-like",
  "JavaScript",
  "ABAP",
  "ABNF",
  "ActionScript",
  "Ada",
  "Agda",
  "AL",
  "ANTLR4",
  "Apache Configuration",
  "Apex",
  "APL",
  "AppleScript",
  "AQL",
  "Arduino",
  "ARFF",
  "AsciiDoc",
  "ASP.NET (C#)",
  "6502 Assembly",
  "AutoHotkey",
  "AutoIt",
  "Bash + Shell",
  "BASIC",
  "Batch",
  "BBcode + Shortcode",
  "Birb",
  "Bison",
  "BNF + RBNF",
  "Brainfuck",
  "BrightScript",
  "Bro",
  "BSL (1C:Enterprise) + OneScript",
  "C",
  "C#",
  "C++",
  "CFScript",
  "ChaiScript",
  "CIL",
  "Clojure",
  "CMake",
  "COBOL",
  "CoffeeScript",
  "Concurnas",
  "Content-Security-Policy",
  "Coq",
  "Crystal",
  "CSS Extras",
  "CSV",
  "Cypher",
  "D",
  "Dart",
  "DataWeave",
  "DAX",
  "Dhall",
  "Diff",
  "Django/Jinja2",
  "DNS zone file",
  "Docker",
  "DOT (Graphviz)",
  "EBNF",
  "EditorConfig",
  "Eiffel",
  "EJS + Eta",
  "Elixir",
  "Elm",
  "Embedded Lua templating",
  "ERB",
  "Erlang",
  "Excel Formula",
  "F#",
  "Factor",
  "False",
  "Firestore security rules",
  "Flow",
  "Fortran",
  "FreeMarker Template Language",
  "GameMaker Language",
  "G-code",
  "GDScript",
  "GEDCOM",
  "Gherkin",
  "Git",
  "GLSL",
  "Go",
  "GraphQL",
  "Groovy",
  "Haml",
  "Handlebars",
  "Haskell",
  "Haxe",
  "HCL",
  "HLSL",
  "HTTP",
  "HTTP Public-Key-Pins",
  "HTTP Strict-Transport-Security",
  "IchigoJam",
  "Icon",
  "ICU Message Format",
  "Idris",
  ".ignore + .gitignore + .hgignore + .npmignore",
  "Inform 7",
  "Ini",
  "Io",
  "J",
  "Java",
  "JavaDoc",
  "JavaDoc-like",
  "Java stack trace",
  "Jexl",
  "Jolie",
  "JQ",
  "JSDoc",
  "JS Extras",
  "JSON + Web App Manifest",
  "JSON5",
  "JSONP",
  "JS stack trace",
  "JS Templates",
  "Julia",
  "Keyman",
  "Kotlin + Kotlin Script",
  "KuMir (КуМир)",
  "LaTeX + TeX + ConTeXt",
  "Latte",
  "Less",
  "LilyPond",
  "Liquid",
  "Lisp",
  "LiveScript",
  "LLVM IR",
  "Log file",
  "LOLCODE",
  "Lua",
  "Makefile",
  "Markdown",
  "Markup templating",
  "MATLAB",
  "MEL",
  "Mizar",
  "MongoDB",
  "Monkey",
  "MoonScript",
  "N1QL",
  "N4JS",
  "Nand To Tetris HDL",
  "Naninovel Script",
  "NASM",
  "NEON",
  "Nevod",
  "nginx",
  "Nim",
  "Nix",
  "NSIS",
  "Objective-C",
  "OCaml",
  "OpenCL",
  "OpenQasm",
  "Oz",
  "PARI/GP",
  "Parser",
  "Pascal + Object Pascal",
  "Pascaligo",
  "PATROL Scripting Language",
  "PC-Axis",
  "PeopleCode",
  "Perl",
  "PHP",
  "PHPDoc",
  "PHP Extras",
  "PL/SQL",
  "PowerQuery",
  "PowerShell",
  "Processing",
  "Prolog",
  "PromQL",
  ".properties",
  "Protocol Buffers",
  "Pug",
  "Puppet",
  "Pure",
  "PureBasic",
  "PureScript",
  "Python",
  "Q#",
  "Q (kdb+ database)",
  "QML",
  "Qore",
  "R",
  "Racket",
  "React JSX",
  "React TSX",
  "Reason",
  "Regex",
  "Rego",
  "Ren'py",
  "reST (reStructuredText)",
  "Rip",
  "Roboconf",
  "Robot Framework",
  "Ruby",
  "Rust",
  "SAS",
  "Sass (Sass)",
  "Sass (Scss)",
  "Scala",
  "Scheme",
  "Shell session",
  "Smali",
  "Smalltalk",
  "Smarty",
  "SML + SML/NJ",
  "Solidity (Ethereum)",
  "Solution file",
  "Soy (Closure Template)",
  "SPARQL",
  "Splunk SPL",
  "SQF: Status Quo Function (Arma 3)",
  "SQL",
  "Squirrel",
  "Stan",
  "Structured Text (IEC 61131-3)",
  "Stylus",
  "Swift",
  "T4 templating",
  "T4 Text Templates (C#)",
  "T4 Text Templates (VB)",
  "TAP",
  "Tcl",
  "Template Toolkit 2",
  "Textile",
  "TOML",
  "Turtle + TriG",
  "Twig",
  "TypeScript",
  "TypoScript + TSConfig",
  "UnrealScript",
  "URI + URL",
  "V",
  "Vala",
  "VB.Net",
  "Velocity",
  "Verilog",
  "VHDL",
  "vim",
  "Visual Basic + VBA",
  "WarpScript",
  "WebAssembly",
  "Wiki markup",
  "Wolfram language + Mathematica + Mathematica Notebook",
  "Xeora + XeoraCube",
  "XML doc (.net)",
  "Xojo (REALbasic)",
  "XQuery",
  "YAML",
  "YANG",
  "Zig",
];
// special character or code will be submited with only a valid language
let ValidLanguage = false;
const lang = document.getElementById("lang");
// lang.oninput;
let submitCodeContent = document.getElementById("submitCodeContent");
let statusIcon = document.getElementById("statusIcon");

submitCodeContent.disabled = true;
submitCodeContent.style.backgroundColor = "#886A6C";
lang.oninput = function () {
  const exist = suportedLanguage.indexOf(this.value);
  if (exist != -1) {
    ValidLanguage = true;
    submitCodeContent.disabled = false;
    statusIcon.innerHTML = `<img class="icon" src="./files/icons/correct-green.png" alt="correct input">`;
    submitCodeContent.style.backgroundColor = "#340100";
  } else {
    ValidLanguage = false;
    submitCodeContent.disabled = true;
    statusIcon.innerHTML = `<img class="icon" src="./files/icons/x-red.png" alt="add picture" disabled>`;
    submitCodeContent.style.backgroundColor = "#886A6C";
  }
};
submitCodeContent.onclick = function (x) {
  if (!ValidLanguage) x.preventDefault();
};

let textAreaContainer = $(".textareaContainer")[0];
let textArea = $(".textareaContainer textarea")[0];
document.addEventListener(
  "DOMContentLoaded",
  function () {
    languages = document.getElementById("languages");
    suportedLanguage.forEach((x) => {
      let newel = document.createElement("option");
      newel.value = `${x}`;
      languages.appendChild(newel);
    });
    if (textArea.scrollHeight > textAreaContainer.scrollHeight - 5) {
      console.log(textArea.scrollHeight + "is the scrol height");
      const oldWidth = textArea.scrollHeight + 10;
      textAreaContainer.style.height = `${oldWidth}.px`;
    }
  },
  false
);
textArea.oninput = function () {
  if (this.scrollHeight > textAreaContainer.scrollHeight - 5) {
    const oldWidth = this.scrollHeight + 10;
    textAreaContainer.style.height = `${oldWidth}.px`;
  } else {
    console.log("function call");
    textAreaContainer.style.height = "fit-contjlent";
  }
};
