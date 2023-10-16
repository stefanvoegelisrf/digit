# 16.10.2023

- [16.10.2023](#16102023)
  - [Coding part 2](#coding-part-2)
    - [Transcoding](#transcoding)
      - [Compiler](#compiler)
      - [Transpiler](#transpiler)
      - [Interpreter](#interpreter)
      - [Obfuscation](#obfuscation)
    - [Compression](#compression)
      - [Lossless compression](#lossless-compression)
      - [Lossy compression](#lossy-compression)


## Coding part 2

### Transcoding

#### Compiler

A compiler converts code from a human readable syntax to instructions that the machine can understand.

#### Transpiler

A transpiler can translate code from one programming language to another programming language.

#### Interpreter

An interpreter is a program that directly executes the instructions in a high-level language, without converting it into machine code.

#### Obfuscation

Obfuscation is the process of making code more unreadable for humans. This is done to make it harder to reverse engineer code.

### Compression

Compression is the process of reducing the size of data to save storage space.
Compression can be lossless or lossy.

#### Lossless compression

<u>Color lookup table</u>

When using a color lookup table, colors are not saved for each pixel, instead a reference to the color in the color lookup table is saved. Like that, the reference does not take up as much space as it would if we would store the color value for each pixel.

<u>Run length encoding</u>

Instead of saving each value separately, we specify how much the value repeats
E.g. instead of saving "blue","blue","blue", we save 3x "blue"

<u>Huffmann coding</u>

Huffman coding is a process of lossless compression.

1. First, the frequency of each character is determined in the text.
2. Characters that occur frequently are given shorter (binary) code words than those that occur less frequently. Only characters that actually occur in the text are considered.
3. The code words are represented in the form of a "coding tree", similar to the Morse tree. For each text a separate coding tree is created.
4. With this coding tree the text is coded and afterwards also decoded again. The coding tree must therefore be attached (also suitably coded) to the compressed text. This is why Huffmann coding is only worthwhile from a certain text length.

<u>Differential coding or delta compression</u>

For differential coding, e.g. for H.264 video compression, only the first frame is fully saved. For subsquent frames, only information that has changed(compared to the first frame), will be saved. This is the so called delta.

#### Lossy compression

<u>Minification</u>

Minification strips e.g. code of unnecessary information. E.g. variable names are irrelevant to the computer, but help us humans understand the code.

<u>Fractal compression</u>

Fractal compression is a lossy compression method for digital images, based on fractals. The method is best suited for textures and natural images, relying on the fact that parts of an image often resemble other parts of the same image.