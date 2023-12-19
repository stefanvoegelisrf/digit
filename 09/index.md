## 20.11.2023

- [20.11.2023](#20112023)
- [From tool to agent](#from-tool-to-agent)
- [Formal languages](#formal-languages)
  - [Syntax](#syntax)
  - [Semantics](#semantics)
- [Type of languages](#type-of-languages)
  - [Excercise 1](#excercise-1)
    - [Answer](#answer)
- [Linguistic power](#linguistic-power)
  - [Excercise 2](#excercise-2)
    - [Answer](#answer-1)
- [Programming paradigms](#programming-paradigms)
  - [Excercise 3](#excercise-3)
    - [Answer](#answer-2)

## From tool to agent
In previous lessons, the following progressions have been described which increase automation, complexity and freedom:
- Tool + Engine -> Machine
  - A tool is driven by hand
  - A machine is driven by an engine
- Machine + Control/Regulation -> Automat
  - A machine is controlled by hand
  - An automat is controlled by hardware
- Automat + Programming -> Computer
  - A computer is controlled by software
- Computer + Data -> AI
  - AI is controlled by data
- KI + Prompting -> Agent

## Formal languages

### Syntax
Syntax deals with the relationship between characters. The syntax of a language consists of:
- character set
- dictionary
- grammar

### Semantics
Semantics is the meaning of language.

## Type of languages
Most digital documents consist of four elements with their relative domain-specific languages

|                          | Type of language | Web         | Microsoft Office            | Adobe InDesign |
| ------------------------ | ---------------- | ----------- | --------------------------- | -------------- |
| Content                  | Writing          | German, ... | German, ...                 | German, ...    |
| Structure                | Structuring      | HTML        | xHTML                       |                |
| Graphical representation | Formatting       | CSS         | Formatting templates        |                |
| Interaction              | Scripting        | JavaScript  | Visual Basic Script, Python |                |

### Excercise 1
What is the purpose of the following parts of this HTML document?

```html
<!DOCTYPE html>
<html lang="de">
    <head>
      <meta charset="UTF-8"/>
      <link rel="stylesheet" href="style.css">
      <script src="sketch.js" defer></script>
    </head>
</html> 
```

Regarding content, structure, presentation and interaction, are all of these elements covered?

#### Answer
The language of the content is defined by `lang=de`. The coding of the document is defined by `charset="UTF-8"`. The structure of the document is defined by `<!DOCTYPE html>` which is a [document type definition(DTD)](https://www.w3schools.com/xml/xml_dtd.asp). The DTD defined which elements are allowed and how they have to be structured. The presentation is defined by the stylesheet of the document. Interaction is achieved by including Javascript.

## Linguistic power
Languages differ in their linguistic power - in the expressiveness of what they can describe. For formal languages, one measure of linguistic power is whether they are Turing Complete. Turing complete means that these languages can be used to program everything that today's classical computers can calculate.

### Excercise 2
Is CSS a real programming language? Is it turing complete?

#### Answer
CSS (Cascading Style Sheets) is a Stylesheet-Language that is used to change the appearance and formatting of documents. These documents are written in a markup-language, often HTML. CSS in itself is not viewed a "real" programming language as it is primarly used for design and layout of websites.

Turing complete refers to the ability of a system to be able to do any possible calculation given there is enough time and memory available. If we look at CSS in an isolated way, CSS is not turing complete. In combination with HTML and a user interacting with it, this combination is turing complete. However, this has been achieved for academic purposes and does not mirror the actual usage of CSS.

## Programming paradigms
- Impertive
  - Procedural
  - Object oriented
  - Parallel
- Declarative
  - Logic
  - Functional
  - Database

### Excercise 3

What programming paradigm is being used for p5js?

#### Answer

Primär prozedural, da ein klar definierter Ablauf mit Setup (1-mal Aufruf) und Draw(loop) existiert, deskriptive Elemente, Events, Herkunft von p5js: ist eine JavaScript Adaption von Processing, Java-Erweiterung -> kommt von Design By Numbers was prozedural. funktional und deklarativ ist. Da es sich aber ohnehin um JavaScript handelt, sind auch Objektorientierte und Funktionale Paradigmen vorhanden.