const treeBfs = (tree, cb) => {
  const queue = [tree];
  const visited = new Set(queue);
  while (queue.length) {
    const node = queue.shift();
    cb(node);
    for (const item of node.children) {
      if (!visited.has(item)) {
        queue.push(item);
        visited.add(item);
      }
    }
  }
};

export { treeBfs };
