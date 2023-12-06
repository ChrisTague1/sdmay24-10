# Tensorflow
## freeCodeCamp Tensorflow Course
[Link](https://www.youtube.com/watch?v=tPYj3fFJGjk&t=15s)

### Module 1
#### Types of Machine Learning
> Supervised Learning

Given features (things you know) and labels (things you don't know), train and tweak the model to predict labels from features.

> Unsupervised Learning

Given features, decide on what some labels should be. This might be used in categorization.

> Reinforcement Learning

Three parts:
- Environment
- Agent
- Reward function

The agent (possibly a player in a video game) exists in an environment (the game level), and takes actions. When taking actions a reward function is run to determine if the action was good. The agent is trained to maximize the reward function

### Module 2
[Colab](https://colab.research.google.com/drive/1_aI-cbhV-cIJca96x185lRzyFW8RY8CH#scrollTo=ljgkTFn-TIha)
> Graphs

The internals of TensorFlow are structured as a graph. This allows evaluations to be as lazy as possible. 

Say we want to do `x + y`. Instead of evaluating `x` and `y` and then performing the evaluation, we can add this desired operation to the graph.

> Session

A session is what evaluates the graph. Graphs can be partially evaluated, they do not need to be all run at once, and I imagine that some parts of them may never be run.

#### Tensors

Tensors are n-dimensional vectors that TensorFlow works with. They can contain different data types, and are highly optimized in the library.

> Rank / Degree

The rank or degree of a tensor is the amount of dimensions it has.
- Rank 0 would be a scalar, just a single number. ex: `5`
- Rank 1 would be a list. ex `[1, 2, 3]`
- Rank 2 would be a matrix. ex `[[1, 2], [3, 4]]`

> Shape

The shape of a tensor is the number of elements in each dimension.
- The shape of `[1, 2, 3]` is `[3]`
- The shape of `[[1, 2], [3, 4]]` is `[2, 2]`
	- Note: each sub dimension of a tensor must have identical shape. `[[1, 2], [3]]` is invalid.