# 30.10.2023

- [30.10.2023](#30102023)
  - [Resources](#resources)
  - [Preparation](#preparation)
  - [Differentiating terms: Tool, machine, automat, computer, roboter](#differentiating-terms-tool-machine-automat-computer-roboter)
    - [Trivial automat according to Von Förster](#trivial-automat-according-to-von-förster)
    - [Non-trivial automat according to Von Förster](#non-trivial-automat-according-to-von-förster)
    - [Finite state machine](#finite-state-machine)

## Resources

## Preparation

Read chapter 0-2 of Daniel Hillis - The Pattern on the Stone : The Simple Ideas That Make Computers Work

In these chapters, Daniel Hillis provides an overview of boolean logic. He explains **and**, **or** and **not**. He explains how a tic-tac-toe machine can be created using boolean logic. The boolean logic is further explained with examples of rock-paper-scissors or traffic lights.

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