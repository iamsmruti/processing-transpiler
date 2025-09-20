# Processing Transpiler

A Node.js utility to convert **Processing (Java-based)** sketches into **p5.js (JavaScript)** code.  
This tool parses Processing code, applies transformations, and formats the output for use in web-based p5.js sketches.  

> **Note:** This project is developed based on the original work [dkessner/processing-p5-convert](https://github.com/dkessner/processing-p5-convert). Modifications and enhancements have been made for better compatibility and formatting.

---

## Installation

```bash
npm install processing-transpiler
```

## Usage

```javascript
import { convertToP5 } from 'processing-transpiler';

const processingCode = `
void setup() {
  size(400, 400);
}

void draw() {
  ellipse(mouseX, mouseY, 50, 50);
}
`;

const jsCode = convertToP5(processingCode);
console.log(jsCode);
```

## Output Example

Input (Processing Code)
```java
void setup() {
  size(400, 400);
}

void draw() {
  ellipse(mouseX, mouseY, 50, 50);
}
```

Transpiled Output (P5.js Code)
```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    ellipse(mouseX, mouseY, 50, 50);
}
```

## Dependencies

- `java-parser`: Parses Processing code into a CST.
- `js-beautify`: Formats the generated JavaScript code.
