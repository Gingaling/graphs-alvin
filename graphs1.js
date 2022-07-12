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

function undirectedPath(edges, nodeA, nodeB) {
    const graph = buildGraph(edges);
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