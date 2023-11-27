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
- [Complexity of languages](#complexity-of-languages)

## From tool to agent

TODO: see https://exorciser.ch/di/ba23/digit/vom-werkzeug-zum-agent

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

Was bedeuten die folgenden Zeilen am Anfang eines HTML Dokumentes?

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

Sind damit alle Aspekte die wir bisher besprochen haben definiert? Gibt es Elemente die implizit definiert sind?

#### Answer

Inhalt ist mit lang="de" angegeben. Die Codierung wird durch charset="UTF-8" definiert. Struktur wird durch <!DOCTYPE html> definiert. Hierbei handelt es sich um eine [Document type definition(DTD)](https://www.w3schools.com/xml/xml_dtd.asp), welche definiert welche Elemente erlaubt sind und wie sie strukturiert sein muss. Die Darstellung wird mit dem stylesheet geregelt. Die Interaktion ist gegeben durch das Einbinden des Javascript.

## Linguistic power

Languages differ in their linguistic power - in the expressiveness of what they can describe. For formal languages, one measure of linguistic power is whether they are Turing Complete. Turing complete means that these languages can be used to program everything that today's classical computers can calculate.

### Excercise 2

Ist CSS eine richtige Programmiersprache? Ja, ist CSS „turing vollständig“? Nutze dazu die gängigen Such-Tools.

#### Answer

CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die verwendet wird, um das Aussehen und die Formatierung von Dokumenten zu beschreiben, die in einer Markup-Sprache geschrieben sind, meist HTML. CSS an sich wird nicht als "richtige" Programmiersprache angesehen, da es in erster Linie für das Design und die Layoutgestaltung von Webseiten gedacht ist und nicht die typischen Merkmale einer vollständigen Programmiersprache wie Variablen, Bedingungen und Schleifen in der Art hat, wie sie in Sprachen wie JavaScript, Python, Java usw. zu finden sind.

Der Begriff "Turing-vollständig" bezieht sich auf die Fähigkeit eines Systems, jede mögliche Berechnung durchzuführen, vorausgesetzt, es wird genügend Zeit und Speicher zur Verfügung gestellt. In diesem Sinne ist CSS nicht Turing-vollständig, wenn es isoliert betrachtet wird. Allerdings gab es Diskussionen und Experimente, die zeigen, dass wenn CSS in Kombination mit HTML verwendet wird (insbesondere unter Ausnutzung von HTML-Strukturen und Pseudo-Klassen), es möglich sein kann, Berechnungen zu erstellen, die theoretisch Turing-Vollständigkeit suggerieren könnten. Diese Experimente sind jedoch eher akademischer Natur und spiegeln nicht die praktische Verwendung oder den Zweck von CSS wider.

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

## Complexity of languages

### Chomsky hierarchy

TODO: Read through