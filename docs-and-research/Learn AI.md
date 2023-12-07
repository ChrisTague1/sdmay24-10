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

The internals of TensorFlow are structured as a graph. This allows evaluations to be as lazy as possible, which helps with parallel performance.

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

### Module 3

> Batches

To handle large datasets that cannot all fit onto ram, data is batched when fed into the model. Examples I have seen use a batch size of 32 entries.

> Epochs

While training a model, the order in which data is processed can impact the results. To minimize, this an epoch is used; which is the number of times the same data will be seen by the model. Typically the data will be shuffled before each epoch to vary results, and the epoch should improve after each iteration.

> Input Function

An input function is used to break up the data into its parts to be fed into the model. It will shuffle for epochs, control the number of epochs, and manage the batch splitting.

> Feature Columns

TensorFlow needs to know which columns contain features, and will infer which contain labels. The API used to handle feature columns in this tutorial is outdated according to TensorFlow current docs; apparently TensorFlow is now build around being used with Keras.
#### Linear Regression

[Colab](https://colab.research.google.com/drive/1w4omuGgaAE4quALcEQtzYkVN6ktqCIti)

Linear regression is the creating of a line of best fit, and using this line to predict new data.
- Only use if you expect there to be a linear correlation. Something such as number of car crashes per year likely wouldn't have this (but maybe it would...)
- Divide data into test and train data so model memorization isn't a good strategy (not just for linear regression)
- Categorical columns (such as sex, color, day, etc) need to be encoded into numberse
	- Sometimes one-hot encoding
	- Encoding as incremental digits is fine with tensor flow

#todo go into the colab for this section and figure out exactly what the complex plot for survival percentage is doing