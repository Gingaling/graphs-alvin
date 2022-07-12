// Traversing a graph - Depth First Search (graph represented as an object, search utilizes a stack [array - LIFO])

function depthFirstPrintGraph(graph, source) {
    const stack = [ source ];
    while (stack.length > 0) {
        const current  = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d:['f'],
    e:[],
    f: []
}

depthFirstPrintGraph(graph, 'a');

// Same as above except coded recursively

function depthFirstPrintGraph(graph, source) {
	console.log(source);
	for (let neighbor of graph[source]) {
		depthFirstPrintGraph(graph, neighbor);
	}
}

const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: []
};

depthFirstPrintGraph(graph, 'a');

// Traversing a graph - Breadth First Search (graph is an object, search utilizes a queue )

function breadthFirstPrint(graph, source) {
    const queue = [ source ];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

const graph = {
	a: ['c', 'b'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: []
};

breadthFirstPrint(graph, 'a');

// Want to generate true or false, whether there is a path from source to destination

// Using depth first (source: f; destination: k), coded recursively

function hasPath(graph, src, dst) {
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    } 
    return false;
}

const graph = {
	f:['g', 'i'],
	g:['h'],
	h:[],
	i:['g', 'k'],
	j:['i'],
	k:[]
};

console.log(hasPath(graph, 'f', 'k'));

// Using breadth first search

function hasPath(graph, src, dst) {
    const queue = [ src ];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
}

const graph = {
	f: ['g', 'i'],
	g: ['h'],
	h: [],
	i: ['g', 'k'],
	j: ['i'],
	k: []
};

console.log(hasPath(graph, 'f', 'k'));

// Undirected graph - to guard against cycling through a path in na infinate loop, create a visited object

const edges: [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

function undirectedPath(edges, nodeA, nodeB) {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

function hasPath(graph, src, dst, visited) {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst)) === true) {
            return true;
        }
    }
    return false;
}

function buildGraph(edges) {
    const graph = {};

    for (let edge of edges) {
        const [ a, b ] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const graph = {
    i:['j', 'k'],
    j:['i'],
    k:['i', 'l', 'm'],
    l:['k'],
    m:['k'],
    n:['o'],
    o:['n']
}

// Connected Components Count - Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

// This graph has 3 components; if you draw it out, you will get 3 pieces to the graph

const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
};

function connectedComponentsCount(graph) {
    const visited = new Set();
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }
    return count;
}

function explore(graph, current, visited) {
    if (visited.has(String(current))) return false;

    visited.add(current);
    for (let neighbor of graph[current]) {
        explore(graph, neighbor);
    }
    return true;
}

// Largest Component - Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph (time - O(e); space - O(n))

// largest component = 4 (of 2)

const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

function largestComponent(graph) {
    const visited = new Set();
    let largest = 0;
    for (let node in graph) {
        let componentSize = explore(graph, node, visited);
        if (componentSize >= largest){
            largest = componentSize;
        }
    }
    return largest;
}

function explore(graph, node, visited) {
    if (visited.has(node)) return 0;

    visited.add(node);
    let size = 1;
    for (let neighbor of graph[node]) {
        size += explore(graph, neighbor, visited);
    }
    return size;
}