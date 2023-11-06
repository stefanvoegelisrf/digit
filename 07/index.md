# 06.11.2023

- [06.11.2023](#06112023)
  - [Resources](#resources)
  - [Try and retry](#try-and-retry)
    - [Packing a backpack](#packing-a-backpack)
    - [Traveling salesmen](#traveling-salesmen)
    - [Shortest path problem](#shortest-path-problem)

## Resources

- [Wikipedia - Travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
- [Wikipedia - Shortest path problem](https://en.wikipedia.org/wiki/Shortest_path_problem)

## Try and retry

### Packing a backpack

### Traveling salesmen

### Shortest path problem

Trying to come up with a solution to find the shortest path to visit a list of friends. Each friend can only be visited once.

```javascript
const hans = "hans"
const leia = "leia"
const jana = "jana"
const petra = "petra"
const louis = "louis"
const ina = "ina"

const stops = [
  {
    name: hans,
    destinations: [
      {
        name: ina,
        distance: 2
      },
      {
        name: leia,
        distance: 3
      },
      {
        name: jana,
        distance: 3
      },
      {
        name: petra,
        distance: 3
      },
      {
        name: louis,
        distance: 5
      }
    ]
  },
  {
    name: petra,
    destinations: [
      {
        name: hans,
        distance: 3
      },
      {
        name: jana,
        distance: 4
      },
      {
        name: ina,
        distance: 5
      },
      {
        name: leia,
        distance: 6
      },
      {
        name: louis,
        distance: 7
      }
    ]
  },
  {
    name: ina,
    destinations: [
      {
        name: hans,
        distance: 2
      },
      {
        name: jana,
        distance: 2
      },
      {
        name: louis,
        distance: 3
      },
      {
        name: petra,
        distance: 5
      },
      {
        name: leia,
        distance: 8
      }
    ]
  },
  {
    name: jana,
    destinations: [
      {
        name: leia,
        distance: 1
      },
      {
        name: louis,
        distance: 2
      },
      {
        name: ina,
        distance: 3
      },
      {
        name: hans,
        distance: 3
      },
      {
        name: petra,
        distance: 4
      }
    ]
  },
  {
    name: leia,
    destinations: [
      {
        name: jana,
        distance: 1
      },
      {
        name: louis,
        distance: 2
      },
      {
        name: hans,
        distance: 3
      },
      {
        name: petra,
        distance: 6
      },
      {
        name: ina,
        distance: 8
      }
    ]
  },
  {
    name: louis,
    destinations: [
      {
        name: jana,
        distance: 2
      },
      {
        name: leia,
        distance: 2
      },
      {
        name: ina,
        distance: 3
      },
      {
        name: hans,
        distance: 5
      },
      {
        name: petra,
        distance: 7
      }
    ]
  }
]
const solutions = [];
const maxTries = stops.length * stops.length;
for (let i = 0; i < stops.length; i++) {
  let currentTries = 0;
  while (currentTries < maxTries) {
    let currentSolution = {
      stops: [stops[i].name],
      distance: 0
    };
    let hasShortestDistance = solutions.length > 0;
    let shortestDistance = hasShortestDistance ? solutions.sort((a, b) => {
      if (a.distance == b.distance) return 0;
      if (a.distance > b.distance) return 1;
      return -1;
    })[0] : null;
    let stopAdded = false;
    let isTooLong = false;
    while (true) {
      stopAdded = false;
      for (let destination of stops[i].destinations) {
        if (currentSolution.stops.indexOf(destination.name) > -1) {
          continue;
        }
        currentSolution.stops.push(destination.name);
        currentSolution.distance += destination.distance;
        if (hasShortestDistance && shortestDistance && currentSolution.distance >= shortestDistance.distance) {
          isTooLong = true;
        }
        stopAdded = true;
        break;
      }
      if (!stopAdded || isTooLong) {
        break;
      }
    }

    if (!isTooLong && currentSolution.stops.length == stops.length) {
      solutions.push(currentSolution);
    }
    isTooLong = false;
    currentTries++;
  }
}
```

