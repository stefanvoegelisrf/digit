# 30.10.2023

- [30.10.2023](#30102023)
  - [Resources](#resources)
  - [Preparation](#preparation)
    - [NOT](#not)
    - [OR](#or)
    - [XOR](#xor)
    - [AND](#and)
    - [NOR](#nor)
  - [Differentiating terms: Tool, machine, automat, computer, roboter](#differentiating-terms-tool-machine-automat-computer-roboter)
    - [Trivial automat according to Von Förster](#trivial-automat-according-to-von-förster)
    - [Non-trivial automat according to Von Förster](#non-trivial-automat-according-to-von-förster)
    - [Finite state machine](#finite-state-machine)
  - [Processing unit](#processing-unit)
    - [Central processing unit(CPU)](#central-processing-unitcpu)
    - [Co-processors](#co-processors)
      - [NVIDIA RTX GPUs](#nvidia-rtx-gpus)
        - [Raytracing](#raytracing)
        - [DLSS](#dlss)
        - [Tensor-cores](#tensor-cores)
        - [Shader](#shader)

## Resources

## Preparation

Read chapter 0-2 of Daniel Hillis - The Pattern on the Stone : The Simple Ideas That Make Computers Work

In these chapters, Daniel Hillis provides an overview of boolean logic. He explains **and**, **or** and **not**. He explains how a tic-tac-toe machine can be created using boolean logic. The boolean logic is further explained with examples of rock-paper-scissors or traffic lights.

### NOT
The NOT gate, also known as an inverter, takes a single Boolean input and reverses its value. If the input is 1 (or TRUE), the output will be 0 (or FALSE). Conversely, if the input is 0 (or FALSE), the output will be 1 (or TRUE). This gate is essential for flipping the value of a Boolean variable.

### OR
The OR gate takes two or more Boolean inputs and returns TRUE if at least one of the inputs is TRUE. If all inputs are FALSE, then the output will also be FALSE. This gate is useful when you want to check if at least one condition out of multiple conditions is satisfied.

### XOR
The XOR (Exclusive OR) gate also takes two Boolean inputs but behaves slightly differently from the OR gate. It returns TRUE if exactly one of the inputs is TRUE; if both inputs are TRUE or both are FALSE, it returns FALSE. This gate is handy when you want to check if one and only one condition is met.

### AND
The AND gate takes two or more Boolean inputs and returns TRUE only if all of the inputs are TRUE. If at least one input is FALSE, then the output will also be FALSE. This gate is crucial when you need to check if multiple conditions are all satisfied at the same time.

### NOR
The NOR gate is a combination of an OR gate followed by a NOT gate. It takes two or more Boolean inputs and returns TRUE only if all of the inputs are FALSE. If at least one input is TRUE, then the output will be FALSE. In a sense, it's the opposite of the OR gate. This gate is useful when you want to check if none of multiple conditions are satisfied.


## Differentiating terms: Tool, machine, automat, computer, roboter

**Tools** are used by hand. If we add a **motor**, we can call it a **machine**. If we **control** the machine **automatically**, we have an **automat**. Automats have a **fixed control structure** which is dependent on the **state** of the automat. The fixed control structure can be shown as a construction diagram.
What differentiates the automat from the computer is that the computer is **programmable**. When adding a **body**, we are talking about a robot. The body is defined by having **sensors** and **actors**. The body does not need to be physical. Through the body, the roboter has **agency** and also some sort of **intelligence**.

### Trivial automat according to [Von Förster](https://de.wikipedia.org/wiki/Heinz_von_Foerster)

A trivial automat is defined as:
- independent of the past
- can be defined by analysis
- can be defined by synthesis
- is predictable

### Non-trivial automat according to [Von Förster](https://de.wikipedia.org/wiki/Heinz_von_Foerster)

A non-trivial automat is defined as:
- having inner state
- is dependent of the past
- can't be defined by analysis
- is defined by synthesis
- can't be predicted(blackbox)

### Finite state machine

A finite state machine is defined by:
- a finite amount of states
- a finite amount of events
- a start state
- a funtion which defines the next state based on the current state
- a finite amount of end states

## Processing unit

Processing unit can be categorized in 3 categories
- Central processing unit(CPU)
- Co-processor
- Application-specific integrated circuit(ASIC)

### Central processing unit(CPU)

A CPU consists of:
- Control unit(cu)
- Arithmetic and Logic Unit(ALU)
- Register
- Cache and memory management

### Co-processors

There are some specific co-processors:
- [Floating point unit](https://en.wikipedia.org/wiki/Floating-point_unit)
- [Sound processing unit](https://de.wikipedia.org/wiki/Soundprozessor)
- [Physics processing unit](https://en.wikipedia.org/wiki/Physics_processing_unit)
- [Network processing unit](https://en.wikipedia.org/wiki/Network_processor)
- [Graphics processing unit](https://en.wikipedia.org/wiki/Graphics_processing_unit)
- [General-purpose computing on graphics processing units](https://en.wikipedia.org/wiki/General-purpose_computing_on_graphics_processing_units)
- [Field programmable gate array](https://de.wikipedia.org/wiki/Field_Programmable_Gate_Array)
- [Tensor processing unit](https://en.wikipedia.org/wiki/Field-programmable_gate_array)

#### NVIDIA RTX GPUs

[NVIDIA RTX GPUs](https://www.nvidia.com/de-de/geforce/rtx/) are advanced graphics cards that combine different processors and techniques to provide high-performance gaming, professional visualization, and AI-enhanced applications. They are known for their ability to render realistic lighting, shadows, and reflections through ray tracing technology.

##### Raytracing 

[Raytracing](https://developer.nvidia.com/rtx/ray-tracing) is a rendering technique that simulates the physical behavior of light to produce highly realistic images. It traces the path of light as it interacts with objects in a scene, accurately calculating reflections, refractions, and shadows. NVIDIA’s RTX GPUs have dedicated ray tracing hardware to accelerate this computationally intensive process.

##### DLSS

[DLSS](https://developer.nvidia.com/rtx/dlss)(Deep Learning Super Sampling): DLSS is a technology that uses machine learning and AI to produce images that look like a high-resolution without the heavy computational load. It generates high-quality images from lower resolution inputs, effectively boosting game performance without compromising visual quality.)

##### Tensor-cores

[Tensor-cores](https://www.nvidia.com/en-us/data-center/tensor-cores/) are specialized hardware units in NVIDIA GPUs designed to accelerate deep learning and AI computations. They are particularly efficient at performing matrix operations, which are fundamental to neural network calculations. This makes them crucial for applications ranging from AI-enhanced graphics and image processing to scientific simulations.

##### Shader

A **shader** is a type of program used in computer graphics to determine how pixels on the screen are rendered. Shaders are written in high-level shading languages and run on the GPU to enable real-time image processing and rendering. They are used for a variety of effects in graphics rendering, including lighting, shading, and post-processing effects.
