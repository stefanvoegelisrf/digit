# 13.11.2023

- [13.11.2023](#13112023)
  - [Data structures](#data-structures)
    - [Record/Struct](#recordstruct)
      - [C# Example of a Record](#c-example-of-a-record)
    - [Object](#object)
      - [C# example:](#c-example)
    - [Stack](#stack)
    - [Set](#set)
    - [Heap](#heap)
    - [Queue](#queue)
  - [Map/Dictionary](#mapdictionary)
  - [Graph](#graph)
  - [Streams](#streams)

## Data structures

### Record/Struct

A **[Record](https://en.wikipedia.org/wiki/Record_(computer_science))** or struct (structure) is a composite data type that groups together a set of fields to form a single unit. Each field, also known as a member, can have a different data type. Records are particularly useful in situations where you want to store a collection of data elements that are related, such as the properties of an item or the attributes of an object.

#### C# Example of a Record

```csharp
// Define a record
public record Person(string FirstName, string LastName, int Age);

// Create an instance of the record
var person1 = new Person("John", "Doe", 30);
```

### Object

In C#, an object is an instance of a class. It encapsulates both state (through fields) and behavior (through methods). Unlike records or structs, objects in C# are mutable by default, allowing their state to be modified after creation. 

#### C# example:

```csharp
// Define a class
public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }

    public Person(string firstName, string lastName, int age)
    {
        FirstName = firstName;
        LastName = lastName;
        Age = age;
    }

    public void UpdateName(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
}

// Create and use an object
var person = new Person("John", "Doe", 30);
person.UpdateName("Jane", "Smith");
```

### Stack

A **[stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))** is a data structure that operates on the Last In, First Out (LIFO) principle. This means the last item added (pushed) to the stack is the first one to be removed (popped). Stacks are used in various applications like memory management, expression evaluation, and algorithm implementation. They are efficient for managing data in a sequential manner where the order of operations is crucial.

C# example demonstrating a stack:

```csharp
using System;
using System.Collections.Generic;

Stack<int> stack = new Stack<int>();

// Pushing elements onto the stack
stack.Push(1);
stack.Push(2);
stack.Push(3);

// Displaying the top element
Console.WriteLine($"Top element: {stack.Peek()}");

// Popping elements from the stack
while (stack.Count > 0)
{
    Console.WriteLine($"Popped: {stack.Pop()}");
}
```

### Set

A **Set** is a container of unsorted, unique elements that don't reference themselves.

> JavaScript has a [Set data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set?retiredLocale=de) that could be useful for certain use cases.

### Heap

- [YouTube - Michael Sambol - Heap](https://www.youtube.com/watch?v=2DmK_H7IdTo)


A **[heap](https://en.wikipedia.org/wiki/Heap_(data_structure))** is a specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node **I**, the value of **I** is greater than or equal to the values of its children, if any. Conversely, in a min heap, the value of **I** is less than or equal to the values of its children. Heaps are commonly used in algorithms like heap sort and for implementing priority queues.

Unlike stacks, heaps do not follow a LIFO pattern and instead focus on maintaining the heap property during insertions and deletions. This property makes them efficient for tasks where the highest or lowest value needs to be accessed quickly.

Here's a small C# example demonstrating a min heap using a priority queue (as C# does not have a direct heap implementation):

```csharp
using System;
using System.Collections.Generic;

// Creating a min heap using a priority queue
PriorityQueue<int, int> minHeap = new PriorityQueue<int, int>();

// Adding elements
minHeap.Enqueue(10, 10);
minHeap.Enqueue(5, 5);
minHeap.Enqueue(15, 15);

// Removing elements (always removes the smallest element)
while (minHeap.Count > 0)
{
    Console.WriteLine($"Removed: {minHeap.Dequeue()}");
}
```

In this example, the `PriorityQueue` class is used to create a min heap. Elements are enqueued with their priorities, and when dequeued, elements with the lowest priority (in this case, the smallest number) are removed first.

### Queue

A **[queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))** is a data structure that operates on the First In, First Out (FIFO) principle. It's similar to a real-life queue where the first person to enter is the first one to leave. Queues are essential in situations where data is processed in the order it arrives, such as in task scheduling, buffering, and breadth-first search algorithms.

C# example demonstrating a queue:

```csharp
using System;
using System.Collections.Generic;

Queue<string> queue = new Queue<string>();

// Enqueueing elements into the queue
queue.Enqueue("First");
queue.Enqueue("Second");
queue.Enqueue("Third");

// Displaying the front element
Console.WriteLine($"Front element: {queue.Peek()}");

// Dequeueing elements from the queue
while (queue.Count > 0)
{
    Console.WriteLine($"Dequeued: {queue.Dequeue()}");
}
```

In this example, strings are enqueued into the queue and then dequeued in the same order they were added. The `Peek` method is used to view the front element without removing it.

## Map/Dictionary

A "Map" or "Dictionary" is a data structure that stores data in key-value pairs, where each key is unique. This allows for efficient data retrieval, as the value associated with any given key can be quickly accessed. Maps are widely used for tasks such as indexing, caching, and managing configurations, where quick lookup and modification of data based on keys are essential.

In the context of C#, this concept is implemented through the Dictionary<TKey, TValue> class. The TKey represents the type of the keys and TValue the type of the values. It offers fast lookups and can be iterated over.

Here's a C# example demonstrating a dictionary:

```csharp
using System;
using System.Collections.Generic;

// Creating a dictionary
Dictionary<string, int> ages = new Dictionary<string, int>
{
    ["Alice"] = 30,
    ["Bob"] = 25
};

// Accessing and displaying a value
Console.WriteLine($"Alice's age: {ages["Alice"]}");
```

## Graph

A Graph is a fundamental data structure in computer science, consisting of a set of nodes (also called vertices) and a set of edges that connect pairs of nodes. Graphs are used to represent networks, like social networks, computer networks, and abstract models of relationships between entities. Edges can be either directed (indicating a one-way relationship) or undirected. Graphs can also be weighted, assigning a cost or value to traversing an edge. Common graph algorithms include searching (like DFS and BFS), pathfinding (like Dijkstra's algorithm), and finding shortest paths.

Here's a simple example in C# using a basic representation:

```csharp
var graph = new Dictionary<string, List<string>> {
    { "A", new List<string> { "B", "C" } },
    { "B", new List<string> { "A", "D" } },
    { "C", new List<string> { "A" } },
    { "D", new List<string> { "B" } }
};

// Displaying nodes and their connections
foreach (var node in graph)
{
    Console.WriteLine($"{node.Key}: {String.Join(", ", node.Value)}");
}
```

In this example, a simple undirected graph is created where each node (a string) has a list of adjacent nodes, representing connections between them.

## Streams

Streams in programming are abstractions used for reading from and writing to different input/output sources sequentially. They are essential in handling data flow, especially when dealing with large amounts of data or with sources like files, network connections, and inter-process communication. Streams can be readable, writable, or both, and they can handle different data types, like bytes or characters. Stream operations in many languages are blocking by default, meaning they pause execution until the operation completes, but asynchronous streams are also common.

A basic C# example using a FileStream to read data:

```csharp
using System;
using System.IO;

string path = "example.txt";
using FileStream stream = File.OpenRead(path);
byte[] buffer = new byte[1024];
int bytesRead;

while ((bytesRead = stream.Read(buffer, 0, buffer.Length)) > 0)
{
    Console.WriteLine($"Read {bytesRead} bytes");
}
```

In this example, a `FileStream` is used to read data from a file named "example.txt". Data is read into a buffer, and the process continues until there's no more data to read.